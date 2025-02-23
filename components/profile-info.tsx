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
};

export function ProfileInfo() {
  const [patient, setPatient] = useState<Patient | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  
      useEffect(() => {
          const fetchPatientData = async () => {
              try {
                  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                      method: 'POST',
                      body: JSON.stringify({
                          fname: "Jane",
                          lname: "Doe",
                          age: 35,
                          address: "123 Main St, Springfield, IL",
                          email: "sample@email.com",
                          phone: "(555) 555-5555",
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
        <CardTitle>Personal Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex justify-between">
            <Label>Name:</Label>
            <span>{patient.fname} {patient.lname}</span>
          </div>
          <div className="flex justify-between">
            <Label>Age:</Label>
            <span>{patient.age}</span>
          </div>
          <div className="flex justify-between">
            <Label>Address:</Label>
            <span>{patient.address}</span>
          </div>
          <div className="flex justify-between">
            <Label>Email:</Label>
            <span>{patient.email}</span>
          </div>
          <div className="flex justify-between">
            <Label>Phone:</Label>
            <span>{patient.phone}</span>
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
            <Label>Blood Type:</Label>
            <span>{patient.bloodType}</span>
          </div>
          <div className="flex justify-between">
            <Label>BMI:</Label>
            <span>{patient.BMI}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

