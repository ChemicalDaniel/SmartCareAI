export type Patient = {
    id: string;
    fname: string;
    lname: string;
    age: number;
    height: number;
    weight: number;
    BMI: number;
    history: Record<string, any>;
  };