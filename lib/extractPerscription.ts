// extractPrescriptions.tsx

export type Prescription = {
    date: Date;
    stop: string | null;
    description: string;
  };
  
  // Helper to format a single prescription record.
  // It returns the trimmed "Description" value (with commas removed) from the record.
  const formatPrescriptionRecord = (record: Record<string, any>): string => {
    if (record.Description) {
      let desc = record.Description.toString().trim().replace(/:\s*$/, "");
      // Remove commas from the description
      desc = desc.replace(/,/g, "");
      // Also, if a value is provided, include it.
      let value = record.Value ? record.Value.toString().trim().replace(/,/g, "") : "";
      return value ? `${desc}: ${value}` : desc;
    }
    // Fallback: join remaining key/value pairs (ignoring "Stop")
    return Object.entries(record)
      .filter(([key]) => key !== "Stop")
      .map(([key, value]) => `${key}: ${value}`)
      .join(" ");
  };
  
  /**
   * extractPrescriptions
   *
   * @param prescriptionsData - Raw prescriptions data from the patient's record.
   * Expected structure:
   * {
   *    "2017-10-01T00:53:16Z": [
   *       { "Stop": "2017-10-01T00:53:16Z", "Description": "sodium fluoride 0.0272 MG/MG Oral Gel" }
   *    ],
   *    "2019-09-28T21:57:47Z": [ { ... }, { ... } ],
   *    ...
   * }
   *
   * @returns An array of Prescription objects sorted in descending order by date.
   * For each date key, it joins multiple records’ descriptions with a newline.
   * For the "Stop" field, if any record contains a Stop value, they are converted to human‑readable dates (MM/DD/YY)
   * and joined by a newline; otherwise, it is set to null.
   */
  export function extractPrescriptions(
    prescriptionsData: Record<string, any>
  ): Prescription[] {
    if (!prescriptionsData || typeof prescriptionsData !== "object") return [];
  
    const prescriptions: Prescription[] = Object.entries(prescriptionsData).map(
      ([dateStr, records]) => {
        const date = new Date(dateStr);
        let descriptions: string[] = [];
        let stops: string[] = [];
        if (Array.isArray(records)) {
          records.forEach((record) => {
            descriptions.push(formatPrescriptionRecord(record));
            if (record.Stop) {
              // Format the Stop date as MM/DD/YY.
              const stopDate = new Date(record.Stop);
              stops.push(
                stopDate.toLocaleDateString("en-US", {
                  month: "2-digit",
                  day: "2-digit",
                  year: "2-digit",
                })
              );
            }
          });
        } else if (typeof records === "object" && records !== null) {
          descriptions.push(formatPrescriptionRecord(records));
          if (records.Stop) {
            const stopDate = new Date(records.Stop);
            stops.push(
              stopDate.toLocaleDateString("en-US", {
                month: "2-digit",
                day: "2-digit",
                year: "2-digit",
              })
            );
          }
        } else {
          descriptions.push(records.toString());
        }
  
        return {
          date,
          stop: stops.length > 0 ? stops.join("\n") : null,
          description: descriptions.join("\n"),
        };
      }
    );
  
    // Sort in descending order (most recent first)
    prescriptions.sort((a, b) => b.date.getTime() - a.date.getTime());
    return prescriptions;
  }
  