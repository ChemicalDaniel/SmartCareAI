import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Patient } from '@/lib/types/patient';

export function ProfileInfo() {
  const [patient, setPatient] = useState<Patient | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await fetch('/api/getUser');
        const data = await response.json();

        // Use the first user in the returned array
        const user = data[0];

        // Split the full name into first and last names
        const [fname, ...rest] = (user.patient_name || '').split(' ');
        const lname = rest.join(' ');

        // Calculate age from date_of_birth
        const dob = new Date(user.date_of_birth);
        const diffMs = Date.now() - dob.getTime();
        const ageDate = new Date(diffMs);
        const age = Math.abs(ageDate.getUTCFullYear() - 1970);

        // Extract vital signs (using the first available timestamp)
        let height = '';
        let weight = '';
        let BMI = 0;
        if (user['Vital Signs']) {
          const vitalDates = Object.keys(user['Vital Signs']);
          if (vitalDates.length > 0) {
            const vitalSet = user['Vital Signs'][vitalDates[0]];
            vitalSet.forEach((vital: any) => {
              if (vital.Description === 'Body Height') {
                height = vital.Value;
              }
              if (vital.Description === 'Body Weight') {
                weight = vital.Value;
              }
              if (vital.Description === 'Body mass index (BMI) [Ratio]') {
                BMI = parseFloat(vital.Value);
              }
            });
          }
        }

        const mappedPatient: Patient = {
          id: user._id,
          fname: fname || '',
          lname: lname || '',
          age,
          height,
          weight,
          BMI,
          history: user, // full API data as history
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex justify-between">
            <Label>Name:</Label>
            <span>
              {patient.fname} {patient.lname}
            </span>
          </div>
          <div className="flex justify-between">
            <Label>Age:</Label>
            <span>{patient.age}</span>
          </div>
          <div className="flex justify-between">
            <Label>Height:</Label>
            <span>{patient.height}</span>
          </div>
          <div className="flex justify-between">
            <Label>Weight:</Label>
            <span>{patient.weight}</span>
          </div>
          <div className="flex justify-between">
            <Label>BMI:</Label>
            <span>{patient.BMI}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
