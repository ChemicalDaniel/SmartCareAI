// extractEncounters.tsx

export type Encounter = {
    date: Date;
    description: string;
  };
  
  const formatEncounterRecord = (record: Record<string, any>): string => {
    // We ignore the "Stop" field and simply use the "Description".
    if (record.Description) {
      return record.Description.toString().trim().replace(/:\s*$/, "");
    }
    // Fallback: join remaining key/value pairs.
    return Object.entries(record)
      .filter(([key]) => key !== "Stop")
      .map(([key, value]) => `${key}: ${value}`)
      .join(" ");
  };
  
  /**
   * extractEncounters
   * @param encountersData - Raw encounters data (keys are ISO date strings).
   * Example:
   * {
   *   "2024-10-26T21:57:47Z": [
   *     { "Stop": "2024-10-26T22:40:24Z", "Description": "General examination of patient (procedure)" }
   *   ],
   *   "2024-08-07T23:46:46Z": [ ... ],
   *   ...
   * }
   * @returns An array of Encounter objects sorted in descending order by date.
   */
  export function extractEncounters(
    encountersData: Record<string, any>
  ): Encounter[] {
    const encounters: Encounter[] = Object.entries(encountersData).map(
      ([dateStr, records]) => {
        const date = new Date(dateStr);
        let description = "";
        if (Array.isArray(records)) {
          // Join multiple records with a newline.
          description = records
            .map((record) => formatEncounterRecord(record))
            .join("\n");
        } else if (typeof records === "object" && records !== null) {
          description = formatEncounterRecord(records);
        } else {
          description = records.toString();
        }
        return { date, description };
      }
    );
  
    // Sort encounters in descending order (most recent first)
    encounters.sort((a, b) => b.date.getTime() - a.date.getTime());
    return encounters;
  }
  