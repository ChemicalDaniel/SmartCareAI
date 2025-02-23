import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Patient } from '@/lib/types/patient';
import fetchPatientData from '@/lib/fetchPatientData';

export function ProfileInfo() {
  const [patient, setPatient] = useState<Patient | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  
    useEffect(() => {
      async function loadData() {
        try {
          const mappedPatient = await fetchPatientData();
          setPatient(mappedPatient);
        } catch (err) {
          setError('Failed to fetch patient data');
        } finally {
          setLoading(false);
        }
      }
      loadData();
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
            <span>
              {`${Math.floor(patient.height / 30.48)}' ${Math.round((patient.height / 2.54) % 12)}"`}
            </span>
            </div>
            <div className="flex justify-between">
            <Label>Weight:</Label>
            <span>{Math.round(patient.weight * 2.20462)} lbs</span>
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
