export interface ExampleSlice {
  init: string;
  setData: () => void;
}

export interface DuplicateSlice {
  isEmailDuplicate: boolean;
  isNicknameDuplicate: boolean;
  isTelDuplicate: boolean;
  isBusinessDuplicate: boolean;

  setEmailDuplicate: (value: boolean) => void;
  setNicknameDuplicate: (value: boolean) => void;
  setTelDuplicate: (value: boolean) => void;
  setBusinessDuplicate: (value: boolean) => void;
  resetDuplicateStates: () => void;
}

export interface DateSlice {
  date: Date | null;
  setDate: (value: Date) => void;
}
