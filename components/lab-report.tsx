import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface LabReport {
    id: string;
    title: string;
    content: string;
}

const LabReportPage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const [labReport, setLabReport] = useState<LabReport | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;

        const fetchLabReport = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: JSON.stringify({
                      id: 1,
                      title: 'foo',
                      content: 'bar',
                    }),
                    headers: {
                      'Content-type': 'application/json; charset=UTF-8',
                    },
                });
                // const response = await fetch(`/api/labreport/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch lab report');
                }
                const data: LabReport = await response.json();
                setLabReport(data);
            } catch (err: any) {
                setError(err.message || 'An unknown error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchLabReport();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!labReport) return <div>No lab report available.</div>;

    return (
        <div>
            <h1>{labReport.title}</h1>
            <p>{labReport.content}</p>
        </div>
    );
};

export default LabReportPage;