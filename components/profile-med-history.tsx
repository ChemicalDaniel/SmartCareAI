import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Patient = {
    id: string;
    name: string;
    age: number;
    history: Record<string, any>;
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
                    <p className="text-gray-800"><strong>Patient ID:</strong> {patient.id}
                    </p>
                    {patient.history && patient.history.length > 0 ? (
                        <>
                            {patient.history.some((item: string) => item.startsWith("Allergies:")) && (
                                <>
                                    <p className="font-semibold text-gray-800">Allergies</p>
                                    <ul>
                                        {patient.history
                                            .filter((item: string) => item.startsWith("Allergies:"))
                                            .map((medication: string, index: number) => (
                                                <li key={`med-${index}`}>
                                                    {medication.replace("Allergies: ", "")}
                                                </li>
                                            ))}
                                    </ul>
                                </>
                            )}
                            {patient.history.some((item: string) => item.startsWith("Medications:")) && (
                                <>
                                    <p className="font-semibold text-gray-800">Medication</p>
                                    <ul>
                                        {patient.history
                                            .filter((item: string) => item.startsWith("Medications:"))
                                            .map((medication: string, index: number) => (
                                                <li key={`med-${index}`}>
                                                    {medication.replace("Medications: ", "")}
                                                </li>
                                            ))}
                                    </ul>
                                </>
                            )}
                            {patient.history.some((item: string) => item.startsWith("Diagnostic Results:")) && (
                                <>
                                    <p className="font-semibold text-gray-800">Diagnostic Results</p>
                                    <ul>
                                        {patient.history
                                            .filter((item: string) => item.startsWith("Diagnostic Results:"))
                                            .map((result: string, index: number) => (
                                                <li key={`diag-${index}`}>
                                                    {result.replace("Diagnostic Results: ", "")}
                                                </li>
                                            ))}
                                    </ul>
                                </>
                            )}
                            {patient.history.some((item: string) => item.startsWith("Problems:")) && (
                                <>
                                    <p className="font-semibold text-gray-800">Problems</p>
                                    <ul>
                                        {patient.history
                                            .filter((item: string) => item.startsWith("Problems:"))
                                            .map((result: string, index: number) => (
                                                <li key={`prob-${index}`}>
                                                    {result.replace("Problems: ", "")}
                                                </li>
                                            ))}
                                    </ul>
                                </>
                            )}
                            {patient.history.some((item: string) => item.startsWith("Surgeries:")) && (
                                <>
                                    <p className="font-semibold text-gray-800">Surgeries</p>
                                    <ul>
                                        {patient.history
                                            .filter((item: string) => item.startsWith("Surgeries:"))
                                            .map((result: string, index: number) => (
                                                <li key={`surg-${index}`}>
                                                    {result.replace("Surgeries: ", "")}
                                                </li>
                                            ))}
                                    </ul>
                                </>
                            )}
                            {patient.history.some((item: string) => item.startsWith("Encounters:")) && (
                                <>
                                    <p className="font-semibold text-gray-800">Encounters</p>
                                    <ul>
                                        {patient.history
                                            .filter((item: string) => item.startsWith("Encounters:"))
                                            .map((result: string, index: number) => (
                                                <li key={`enc-${index}`}>
                                                    {result.replace("Encounters: ", "")}
                                                </li>
                                            ))}
                                    </ul>
                                </>
                            )}
                            {patient.history.some((item: string) => item.startsWith("Vitals:")) && (
                                <>
                                    <p className="font-semibold text-gray-800">Vitals</p>
                                    <ul>
                                        {patient.history
                                            .filter((item: string) => item.startsWith("Vitals:"))
                                            .map((result: string, index: number) => (
                                                <li key={`vitals-${index}`}>
                                                    {result.replace("Vitals: ", "")}
                                                </li>
                                            ))}
                                    </ul>
                                </>
                            )}
                            {patient.history.some((item: string) => item.startsWith("Immunizations:")) && (
                                <>
                                    <p className="font-semibold text-gray-800">Immunizations</p>
                                    <ul>
                                        {patient.history
                                            .filter((item: string) => item.startsWith("Immunizations:"))
                                            .map((result: string, index: number) => (
                                                <li key={`imm-${index}`}>
                                                    {result.replace("Immunizations: ", "")}
                                                </li>
                                            ))}
                                    </ul>
                                </>
                            )}
                            {patient.history.some((item: string) => item.startsWith("Plan of Care:")) && (
                                <>
                                    <p className="font-semibold text-gray-800">Plan of Care</p>
                                    <ul>
                                        {patient.history
                                            .filter((item: string) => item.startsWith("Plan of Care:"))
                                            .map((result: string, index: number) => (
                                                <li key={`care-${index}`}>
                                                    {result.replace("Plan of Care: ", "")}
                                                </li>
                                            ))}
                                    </ul>
                                </>
                            )}
                            {patient.history.some((item: string) => item.startsWith("Social History:")) && (
                                <>
                                    <p className="font-semibold text-gray-800">Social History</p>
                                    <ul>
                                        {patient.history
                                            .filter((item: string) => item.startsWith("Social History:"))
                                            .map((result: string, index: number) => (
                                                <li key={`social-${index}`}>
                                                    {result.replace("Social History: ", "")}
                                                </li>
                                            ))}
                                    </ul>
                                </>
                            )}
                            {patient.history.some((item: string) => item.startsWith("Functional Status:")) && (
                                <>
                                    <p className="font-semibold text-gray-800">Functional Status</p>
                                    <ul>
                                        {patient.history
                                            .filter((item: string) => item.startsWith("Functional Status:"))
                                            .map((result: string, index: number) => (
                                                <li key={`func-${index}`}>
                                                    {result.replace("Functional Status: ", "")}
                                                </li>
                                            ))}
                                    </ul>
                                </>
                            )}
                        </>
                    ) : (
                        <p>No medical history available.</p>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default ProfileMedHistory;