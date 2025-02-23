export type Patient = {
    id: string;
    fname: string;
    lname: string;
    age: number;
    height: string;
    weight: string;
    BMI: number;
    history: Record<string, any>;
  };