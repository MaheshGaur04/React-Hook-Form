import { create } from 'zustand';

export interface FormData {
  fullName: string;
  email: string;
  phone?: string;
  street: string;
  city: string;
  zip: string;
  country: string;
  username: string;
  password: string;
  confirmPassword: string;
}

interface FormStore {
  step: number;
  formData: FormData;
  nextStep: () => void;
  prevStep: () => void;
  setStep: (step: number) => void;
  updateFormData: (data: Partial<FormData>) => void;
  resetForm: () => void;
}

const initialFormData: FormData = {
  fullName: '',
  email: '',
  phone: '',
  street: '',
  city: '',
  zip: '',
  country: '',
  username: '',
  password: '',
  confirmPassword: '',
};

const useFormStore = create<FormStore>((set) => ({
  step: 1,
  formData: initialFormData,
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: Math.max(1, state.step - 1) })),
  setStep: (step) => set({ step }),
  updateFormData: (data) =>
    set((state) => ({ formData: { ...state.formData, ...data } })),
  resetForm: () => set({ step: 1, formData: initialFormData }),
}));

export default useFormStore;