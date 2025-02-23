import React from 'react';

const HipaaCompliance: React.FC = () => {
    return (
        <div className="p-8 max-w-[800px] mx-auto min-h-[calc(100vh-280px)]">
            <h1 className="text-xl font-bold text-gray-900 mb-4">
                HIPAA Compliance Certification
            </h1>
            <p>
                This application is designed to adhere to the Health Insurance Portability and Accountability Act (HIPAA) standards. We have implemented robust administrative, physical, and technical safeguards to ensure the confidentiality, integrity, and availability of Protected Health Information (PHI).
            </p>
            <p>
                Please note that while we strive to maintain HIPAA compliance, this page is for informational purposes only. For official certification or legal validation, please consult with accredited HIPAA compliance professionals.
            </p>
            <p>
                Your trust is our priority, and we remain committed to protecting your sensitive information.
            </p>
            <hr className="my-4" />
            <p className="text-xs text-gray-600">
                Last Updated: {new Date().toLocaleDateString()}
            </p>
        </div>
    );
};

export default HipaaCompliance;