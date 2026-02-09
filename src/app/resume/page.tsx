"use client";

import { useResumeStore } from "@/component/store";
import { jsPDF } from "jspdf";

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

// Dummy data for preview
const dummyData: ResumeData = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  address: "San Francisco, CA",
  summary:
    "Experienced software engineer with 5+ years of expertise in full-stack development. Passionate about creating scalable applications and solving complex problems. Proficient in modern web technologies and agile methodologies.",
  experience: [
    {
      title: "Senior Software Engineer",
      company: "Tech Corp",
      duration: "Jan 2021 - Present",
      description:
        "Led development of microservices architecture, improving system performance by 40%. Mentored junior developers and conducted code reviews. Implemented CI/CD pipelines and automated testing frameworks.",
    },
    {
      title: "Software Engineer",
      company: "StartUp Inc",
      duration: "Jun 2019 - Dec 2020",
      description:
        "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver features on time. Optimized database queries reducing load time by 30%.",
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      college: "University of Technology",
      duration: "2015 - 2019",
    },
  ],
  skills: [
    { name: "JavaScript", level: "expert" },
    { name: "React", level: "expert" },
    { name: "Node.js", level: "advanced" },
    { name: "TypeScript", level: "advanced" },
    { name: "Python", level: "intermediate" },
    { name: "Docker", level: "intermediate" },
  ],
};

const Resume = () => {
  const { resumeData } = useResumeStore();
  console.log(resumeData);

  const downloadPDF = async () => {
    const html2pdf = (await import("html2pdf.js")).default;
    const element = document.getElementById("resume-preview");
    if (!element) {
      console.error("Element not found");
      return;
    }

    const opt = {
      margin: 0,
      filename: `${resumeData.name.replace(" ", "-")}_resume.pdf`,
      image: { type: "jpeg" as const, quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        logging: false,
        letterRendering: true,
        backgroundColor: "#ffffff",
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait" as const,
        compress: false,
      },
    };
    html2pdf().set(opt).from(element).save();
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "beginner":
        return "#4facfe";
      case "intermediate":
        return "#43e97b";
      case "advanced":
        return "#f093fb";
      case "expert":
        return "#667eea";
      default:
        return "#4facfe";
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-linear-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent mb-3 tracking-tight">
          Resume Preview
        </h1>
        <p className="text-xl text-white/70 font-light mb-6">
          Professional resume template
        </p>
      </div>

      {/* Resume Preview */}
      <div
        id="resume-preview"
        className="bg-white text-gray-100 max-w-4xl mx-auto my-8 p-12 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
      >
        {/* Preview Header */}
        <div className="text-center pb-8 border-b-4 border-[#667eea] mb-8">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
            {resumeData.name}
          </h1>
          <div className="flex justify-center gap-6 flex-wrap text-sm text-gray-600">
            {resumeData.email && (
              <span className="flex items-center gap-1">
                📧 {resumeData.email}
              </span>
            )}
            {resumeData.phone && (
              <span className="flex items-center gap-1">
                📱 {resumeData.phone}
              </span>
            )}
            {resumeData.address && (
              <span className="flex items-center gap-1">
                📍 {resumeData.address}
              </span>
            )}
          </div>
        </div>

        {/* Summary */}
        {resumeData.summary && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#667eea] mb-4 pb-2 border-b-2 border-gray-200 uppercase tracking-wide">
              Professional Summary
            </h2>
            <p className="text-base leading-relaxed text-gray-700 text-justify">
              {resumeData.summary}
            </p>
          </div>
        )}

        {/* Experience */}
        {resumeData.experience.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#667eea] mb-4 pb-2 border-b-2 border-gray-200 uppercase tracking-wide">
              Work Experience
            </h2>
            {resumeData.experience.map((exp, index) => (
              <div
                key={index}
                className="mb-6 pl-4 border-l-4 border-[#667eea]"
              >
                <div className="flex justify-between items-baseline mb-2 flex-wrap gap-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {exp.title}
                  </h3>
                  <span className="text-sm text-gray-600 font-semibold">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-base text-gray-700 font-semibold mb-2">
                  {exp.company}
                </p>
                {exp.description && (
                  <p className="text-sm leading-relaxed text-gray-600">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {resumeData.education.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#667eea] mb-4 pb-2 border-b-2 border-gray-200 uppercase tracking-wide">
              Education
            </h2>
            {resumeData.education.map((edu, index) => (
              <div
                key={index}
                className="mb-6 pl-4 border-l-4 border-[#667eea]"
              >
                <div className="flex justify-between items-baseline mb-2 flex-wrap gap-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {edu.degree}
                  </h3>
                  <span className="text-sm text-gray-600 font-semibold">
                    {edu.duration}
                  </span>
                </div>
                <p className="text-base text-gray-700 font-semibold">
                  {edu.college}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {resumeData.skills.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#667eea] mb-4 pb-2 border-b-2 border-gray-200 uppercase tracking-wide">
              Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {resumeData.skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-[#667eea]/10 border-2 rounded-lg px-4 py-2 flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{ borderColor: getLevelColor(skill.level) }}
                >
                  <span className="font-semibold text-gray-900">
                    {skill.name}
                  </span>
                  <span
                    className="text-xs uppercase font-bold tracking-wide"
                    style={{ color: getLevelColor(skill.level) }}
                  >
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Download Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={downloadPDF}
          className="bg-linear-to-r from-[#667eea] to-[#764ba2] text-white px-10 py-4 rounded-2xl text-lg font-bold uppercase tracking-wide shadow-lg shadow-[#667eea]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#667eea]/50"
        >
          📥 Download PDF
        </button>
      </div>
    </div>
  );
};

export default Resume;
