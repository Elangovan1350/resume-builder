import z from "zod";
import { create } from "zustand";

export const schema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters long")
    .max(30, "Name must be at most 30 characters long"),
  email: z.email("Invalid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits long")
    .max(20, "Phone number must be at most 10 digits long"),
  address: z
    .string()
    .min(10, "Address must be at least 10 characters long")
    .max(100, "Address must be at most 100 characters long"),
  linkedin: z.url("Invalid URL").optional(),
  website: z.url("Invalid URL").optional(),
  summary: z
    .string()
    .min(10, "Summary must be at least 10 characters long")
    .max(150, "Summary must be at most 100 characters long"),
  experience: z.array(
    z.object({
      title: z.string().min(3, "Title must be at least 3 characters long"),
      company: z.string().min(3, "Company must be at least 3 characters long"),
      duration: z
        .string()
        .min(5, "Duration must be at least 5 characters long")
        .max(30, "Duration must be at most 30 characters long"),
      description: z
        .string()
        .min(5, "Description must be at least 5 characters long")
        .max(100, "Description must be at most 100 characters long"),
    }),
  ),
  education: z.array(
    z.object({
      degree: z.string().min(3, "Degree must be at least 3 characters long"),
      college: z.string().min(3, "College must be at least 3 characters long"),
      duration: z
        .string()
        .min(5, "Duration must be at least 5 characters long")
        .max(100, "Duration must be at most 100 characters long"),
    }),
  ),
  projects: z.array(
    z.object({
      name: z
        .string()
        .min(3, "Project name must be at least 3 characters long"),
      description: z
        .string()
        .min(5, "Description must be at least 5 characters long")
        .max(100, "Description must be at most 100 characters long"),
      link: z.url("Invalid URL").optional(),
    }),
  ),
  certifications: z.array(
    z.object({
      name: z
        .string()
        .min(3, "Certification name must be at least 3 characters long"),
      description: z
        .string()
        .min(5, "Description must be at least 5 characters long")
        .max(100, "Description must be at most 100 characters long"),
    }),
  ),
  skills: z.array(
    z.object({
      name: z
        .string()
        .min(3, "Skill name must be at least 3 characters long")
        .max(30, "Skill name must be at most 30 characters long"),
      level: z.enum(["beginner", "intermediate", "advanced", "expert"]),
    }),
  ),
  keywords: z.array(
    z.object({
      value: z
        .string()
        .min(2, "Keyword must be at least 2 characters")
        .max(30, "Keyword must be at most 30 characters long"),
    }),
  ),
});

export type ResumeSchema = z.infer<typeof schema>;

interface ResumeState {
  resumeData: ResumeSchema;
  setResumeData: (data: ResumeSchema) => void;
  theme: boolean;
  setTheme: (theme: boolean) => void;
}

export const useResumeStore = create<ResumeState>((set) => ({
  resumeData: {
    name: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    website: "",
    summary: "",
    experience: [],
    education: [],
    projects: [],
    certifications: [],
    skills: [],
    keywords: [],
  },
  theme: false,
  setTheme: (theme: boolean) => set({ theme }),
  // Action to update the resume data
  setResumeData: (data: ResumeSchema) =>
    set((state) => ({ ...state, ...data, resumeData: data })),
}));
