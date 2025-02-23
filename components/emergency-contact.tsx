import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

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

export function EmergencyContact() {
      const [patient, setPatient] = useState<Patient | null>(null);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState<string>('');
  
      useEffect(() => {
          const fetchPatientData = async () => {
              try {
                  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                      method: 'POST',
                      body: JSON.stringify({
                          fname: "David",
                          lname: "Landry",
                          age: 35,
                          address: "123 Main St, Springfield, IL",
                          email: "sample@email.com",
                          phone: "(404) 894-2000",
                          height: "5'6\"",
                          weight: "140 lbs",
                          bloodType: "O+",
                          BMI: 22.6,
                          history: [
                              'Allergies: Penicillin',
                              'Medications: Flu', 
                              'Diagnostic Results: Broken leg',
                              'Problems: Headache',
                              'Surgeries: Appendectomy',
                              'Encounters: 3',
                              'Vitals: 120/80',
                              'Immunizations: Flu shot',
                              'Plan of Care: Rest',
                              'Social History: Non-smoker',
                              'Functional Status: Independent',
                          ],
                          emergencyContact: ['Name: David Landry', 'Relationship: Spouse'],
                          userId: 1,
                      }),
                      headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                      },
                  })
                  const data = await response.json();
                  setPatient(data);
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
        <CardTitle>Emergency Contact</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
        {patient.emergencyContact.some((item: string) => item.startsWith("Name:")) && (
          <div className="flex items-center">
            <p className="font-semibold text-gray-800 mr-2">Name:</p>
            {patient.emergencyContact
              .filter((item: string) => item.startsWith("Name:"))
              .map((phoneStr: string, index: number) => (
          <span key={`name-${index}`}>
            {phoneStr.replace("Name: ", "")}
          </span>
            ))}
          </div>
        )}
        {patient.emergencyContact.some((item: string) => item.startsWith("Relationship:")) && (
          <div className="flex items-center">
            <p className="font-semibold text-gray-800 mr-2">Relationship:</p>
            {patient.emergencyContact
              .filter((item: string) => item.startsWith("Relationship:"))
              .map((phoneStr: string, index: number) => (
          <span key={`rel-${index}`}>
            {phoneStr.replace("Relationship: ", "")}
          </span>
            ))}
          </div>
        )}
        {patient.emergencyContact.some((item: string) => item.startsWith("Phone:")) && (
          <div className="flex items-center">
            <p className="font-semibold text-gray-800 mr-2">Phone:</p>
            {patient.emergencyContact
              .filter((item: string) => item.startsWith("Phone:"))
              .map((phoneStr: string, index: number) => (
          <span key={`phone-${index}`}>
            {phoneStr.replace("Phone: ", "")}
          </span>
            ))}
          </div>
        )}
        </div>
      </CardContent>
    </Card>
  )
}

