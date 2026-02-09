import { create } from "zustand";

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
}

interface Education {
  degree: string;
  college: string;
  duration: string;
}

interface Skill {
  name: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
}

// ResumeState should contain all the resume fields directly (flat structure)
interface ResumeState {
  resumeData: ResumeData;
  setResumeData: (data: ResumeData) => void;
}
interface ResumeData {
  name: string;
  email: string;
  phone: string;
  address: string;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
}

export const useResumeStore = create<ResumeState>((set) => ({
  // Initial state - all fields directly in the store
  resumeData: {
    name: "",
    email: "",
    phone: "",
    address: "",
    summary: "",
    experience: [],
    education: [],
    skills: [],
  },

  // Action to update the resume data
  setResumeData: (data: ResumeData) =>
    set((state) => ({ ...state, ...data, resumeData: data })),
}));
