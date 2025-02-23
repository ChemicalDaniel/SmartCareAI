// Define a type for the vital signs entries.
export type VitalSigns = {
    date: Date; // raw date; you can format it when displaying
    heartRate: number;
    bodyHeight: number;
    painSeverity: number;
    bodyWeight: number;
    bmi: number;
    respiratoryRate: number;
  };
  
  // A helper that extracts a number from a string (ignoring units and tags)
  const extractNumber = (value: string): number => {
    // Use parseFloat to extract the first number it finds.
    return parseFloat(value);
  };
  
  export function extractVitalSigns(vitalSignsData: Record<string, any>): VitalSigns[] {
    // vitalSignsData is expected to be an object where each key is a date string.
    const results: VitalSigns[] = Object.entries(vitalSignsData).map(([dateKey, records]) => {
      let bodyHeight = NaN,
        painSeverity = NaN,
        bodyWeight = NaN,
        bmi = NaN,
        heartRate = NaN,
        respiratoryRate = NaN;
        
      // records is expected to be an array of objects
      for (const record of records) {
        const desc = record.Description.toLowerCase();
        const val = record.Value;
        const num = extractNumber(val);
        if (desc.includes("body height")) {
          bodyHeight = num;
        } else if (desc.includes("pain severity")) {
          painSeverity = num;
        } else if (desc.includes("body weight")) {
          bodyWeight = num;
        } else if (desc.includes("body mass index")) {
          bmi = num;
        } else if (desc.includes("heart rate")) {
          heartRate = num;
        } else if (desc.includes("respiratory rate")) {
          respiratoryRate = num;
        }
      }
      return {
        date: new Date(dateKey),
        bodyHeight,
        painSeverity,
        bodyWeight,
        bmi,
        heartRate,
        respiratoryRate,
      };
    });
  
    // Sort the array in descending order (most recent date first)
    results.sort((a, b) => b.date.getTime() - a.date.getTime());
    return results;
  }