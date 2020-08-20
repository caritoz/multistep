export type FormValues = {
  name: string;
  role: string;
  email: string;
  password: string;
  news: boolean;
  updates: boolean;
};

type Value = any;
export type Values = Record<string, Value>;

export type FormContextType = {
  values: Values;
  addValues: (e: any) => void;
  currentStep: number;
  nextStep: () => void;
  children: any;
};

export type Step = {
  key: string;
  title: string;
  disabled: boolean;
  active: boolean;
};
export type Steps = Step[];
