import { Patient } from "./types/patient";

export default async function fetchPatientData() {
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
            history: user, // store entire JSON as history
        };

        return mappedPatient;
    } catch (err) {
        throw new Error('Failed to fetch patient data');
    }
};