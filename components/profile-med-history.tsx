import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmergencyContact } from './emergency-contact';

type Patient = {
  id: string;
  fname: string;
  lname: string;
  age: number;
  address: string;
  email: string;
  phone: string;
  height: string;
  weight: string;
  bloodType: string;
  BMI: number;
  history: Record<string, any>;
  emergencyContact: Record<string, any>;
};

const excludedHistoryKeys = ['_id', 'patient_name', 'date_of_birth', 'gender'];

// Convert an ISO date string to MM/DD/YY
const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: '2-digit'
  });
};

// Helper to clean a value by removing "{score}" and "{#}" tags
const cleanValue = (value: string): string => {
  return value.replace(/{score}/gi, '').replace(/{#}/gi, '').trim();
};

// Format a record object.
// If a record has a "Description", use it (after cleaning) and its Value (cleaned).
// For pain severity records, output "Pain Severity: <number>".
// Finally, remove any commas and trailing colons.
const formatRecordNode = (record: Record<string, any>, category?: string): string => {
  if (record.Description) {
    let desc = record.Description.toString().trim().replace(/:$/, "");
    let value = record.Value ? cleanValue(record.Value.toString().trim()) : '';
    // Special-case for pain severity: remove extra wording and tags.
    if (desc.toLowerCase().includes("pain severity")) {
      return `Pain Severity: ${value}`;
    }
    let result = `${desc}: ${value}`;
    result = result.replace(/,/g, '').replace(/:\s*$/, "").trim();
    return result;
  } else {
    return Object.entries(record)
      .filter(([key]) => key !== 'Stop')
      .map(([key, value]) => `${key}: ${cleanValue(value.toString())}`)
      .join(" ");
  }
};

// For a given history category (an object with date keys), return an array of rows sorted in descending order.
// For categories such as Vital Signs, Immunizations, or Plan of Care, each record is rendered on its own line.
const getDateRows = (data: any, category: string): { date: string; details: React.ReactNode }[] => {
  if (typeof data !== 'object' || Array.isArray(data) || data === null) {
    return [];
  }
  const sortedEntries = Object.entries(data).sort((a, b) => {
    return new Date(b[0]).getTime() - new Date(a[0]).getTime();
  });
  return sortedEntries.map(([date, entries]) => {
    const formattedDate = formatDate(date);
    let details: React.ReactNode;
    if (Array.isArray(entries)) {
      if (category === "Vital Signs" || category === "Immunizations" || category === "Plan of Care") {
        details = (
          <>
            {entries.map((rec, idx) => (
              <div key={idx}>{formatRecordNode(rec, category)}</div>
            ))}
          </>
        );
      } else {
        details = entries
          .map((rec) => (typeof rec === 'object' ? formatRecordNode(rec, category) : rec))
          .join(" ");
      }
    } else if (typeof entries === 'object') {
      details = formatRecordNode(entries, category);
    } else {
      details = entries.toString();
    }
    return { date: formattedDate, details };
  });
};

const ProfileMedHistory: React.FC = () => {
  const [patient, setPatient] = useState<Patient | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await fetch('/api/getUser');
        const data = await response.json();
        // Use the first user returned from the API
        const user = data[0];

        // Split full name into first and last names.
        const [fname, ...rest] = (user.patient_name || '').split(' ');
        const lname = rest.join(' ');

        // Calculate age from date_of_birth.
        const dob = new Date(user.date_of_birth);
        const diffMs = Date.now() - dob.getTime();
        const ageDate = new Date(diffMs);
        const age = Math.abs(ageDate.getUTCFullYear() - 1970);

        const mappedPatient: Patient = {
          id: user._id,
          fname: fname || '',
          lname: lname || '',
          age,
          address: '', // not provided in API
          email: '',   // not provided in API
          phone: '',   // not provided in API
          height: '',  // can be extracted elsewhere if needed
          weight: '',
          bloodType: '',
          BMI: 0,
          history: user, // store entire JSON as history
          emergencyContact: {} // adjust if provided
        };

        setPatient(mappedPatient);
      } catch (err) {
        setError('Failed to fetch patient data');
      } finally {
        setLoading(false);
      }
    };

    fetchPatientData();
  }, []);

  if (loading) {
    return <div>Loading patient data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!patient) {
    return <div>No patient data available.</div>;
  }

  // Build a table for each history category (excluding unwanted keys)
  const historyTables = Object.entries(patient.history)
    .filter(([key]) => !excludedHistoryKeys.includes(key))
    .filter(([_, value]) => typeof value === 'object' && value !== null)
    .map(([category, data]) => {
      const rows = getDateRows(data, category);
      if (rows.length === 0) return null;
      return (
        <div key={category} className="mb-6">
          <p className="font-semibold text-gray-800 mb-2">{category}</p>
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Date</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ date, details }, index) => (
                <tr key={index}>
                  <td className="border border-gray-200 px-4 py-2">{date}</td>
                  <td className="border border-gray-200 px-4 py-2">{details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Patient Medical History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <p className="text-gray-800 pb-2">
            <strong>Patient ID:</strong> {patient.id}
          </p>
        </div>
        {historyTables && historyTables.length > 0 ? historyTables : <p>No dated medical history available.</p>}
      </CardContent>
    </Card>
  );
};

export default ProfileMedHistory;
