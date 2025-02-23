import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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

const ProfileMedHistory: React.FC = () => {
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
                        emergencyContact: ['Name: John Doe', 'Relationship: Spouse', 'Phone: (555) 123-4567'],
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
                <CardTitle>Patient Medical History</CardTitle>
            </CardHeader>
            <CardContent>
                <div>
                    <p className="text-gray-800 pb-4">
                        <strong>Patient ID: </strong> 
                        {patient.id}
                    </p>
                    {patient.history && patient.history.length > 0 ? (
                        Object.entries(
                            patient.history.reduce((acc, item) => {
                                const [categoryWithColon, ...rest] = item.split(': ');
                                const category = categoryWithColon.replace(':', '');
                                const value = rest.join(': ');
                                if (!acc[category]) {
                                    acc[category] = [];
                                }
                                acc[category].push(value);
                                return acc;
                            }, {} as Record<string, string[]>)
                        ).map(([category, entries]) => (
                            <div key={category}>
                                <p className="font-semibold text-gray-800">{category}</p>
                                <table className="min-w-full divide-y divide-gray-200 mb-4">
                                    <thead>
                                        <tr>
                                            <th className="w-1/4 px-4 py-2 text-left">Start</th>
                                            <th className="w-1/4 px-4 py-2 text-left">Stop</th>
                                            <th className="w-1/4 px-4 py-2 text-left">Descriptions</th>
                                            <th className="w-1/4 px-4 py-2 text-left">Code</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(entries as string[]).map((entry, index) => (
                                            <tr key={`${category}-${index}`}>
                                                <td className="w-1/4 px-4 py-2">{entry}</td>
                                                <td className="w-1/4 px-4 py-2">{entry}</td>
                                                <td className="w-1/4 px-4 py-2">{entry}</td>
                                                <td className="w-1/4 px-4 py-2">{entry}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ))
                    ) : (
                        <p>No medical history available.</p>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default ProfileMedHistory;