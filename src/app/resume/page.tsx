"use client";

import { useResumeStore } from "@/component/store";
import Theme from "@/component/theme";
import {
  getSectionTitleClass,
  getLabelClass,
  getCardClass,
} from "@/component/theme-utils";

const Resume = () => {
  const { resumeData, theme } = useResumeStore();
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
    <>
      <Theme />
      <div
        className={`min-h-screen transition-colors duration-300 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center ${
          theme
            ? "bg-linear-to-br from-gray-50 via-white to-gray-100"
            : "bg-linear-to-br from-gray-900 via-gray-800 to-gray-900"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-linear-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent mb-3 tracking-tight">
            Resume Preview
          </h1>
          <p className={`text-xl font-light mb-6 ${getLabelClass(theme)}`}>
            Professional resume template
          </p>
        </div>

        {/* Resume Preview */}
        <div
          id="resume-preview"
          className={`bg-white text-gray-100   max-w-[210mm] min-h-[296mm] w-full mx-auto p-8 ${theme ? " shadow-[0_20px_60px_rgba(0,0,0,0.3)] " : " shadow-[0_20px_60px_rgba(255,255,255,0.5)]"}`}
        >
          {/* Preview Header */}
          <div className="text-center pb-4 border-b-2 border-[#667eea] mb-4">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">
              {resumeData.name}
            </h1>
            <div className="flex justify-center gap-6 flex-wrap text-sm text-gray-600">
              {resumeData.email && (
                <a
                  href={`mailto:${resumeData.email}`}
                  className="flex items-center cursor-pointer hover:text-red-500 transition-all duration-300 gap-1"
                >
                  📧 {resumeData.email}
                </a>
              )}
              {resumeData.phone && (
                <a
                  href={`tel:${resumeData.phone}`}
                  className="flex items-center cursor-pointer hover:text-red-500 transition-all duration-300 gap-1"
                >
                  📱 {resumeData.phone}
                </a>
              )}
              {resumeData.address && (
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(resumeData.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center cursor-pointer hover:text-red-500 transition-all duration-300 gap-1"
                >
                  📍 {resumeData.address}
                </a>
              )}
            </div>
            <div className="flex justify-center gap-6 flex-wrap text-sm text-gray-600 mt-4">
              {resumeData.linkedin && (
                <a
                  href={resumeData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center cursor-pointer hover:text-red-500 transition-all duration-300 gap-1"
                >
                  💼 LinkedIn
                </a>
              )}
              {resumeData.website && (
                <a
                  href={resumeData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center cursor-pointer hover:text-red-500 transition-all duration-300 gap-1"
                >
                  🌐 Portfolio
                </a>
              )}
            </div>
          </div>

          {/* Summary */}
          {resumeData.summary && (
            <div className="mb-4">
              <h2 className="text-lg font-bold text-[#667eea] mb-2 pb-1 border-b border-gray-200 uppercase tracking-wide">
                Summary
              </h2>
              <p className="text-sm leading-relaxed text-gray-700 text-justify">
                {resumeData.summary}
              </p>
            </div>
          )}

          {/* Experience */}
          {resumeData.experience.length > 0 && (
            <div className="mb-4">
              <h2 className="text-lg font-bold text-[#667eea] mb-2 pb-1 border-b border-gray-200 uppercase tracking-wide">
                Experience
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
                  <a
                    href={`https://google.com/search?q=${exp.company}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-700 font-semibold mb-1 hover:text-red-500 transition-all duration-300 cursor-pointer"
                  >
                    {exp.company}
                  </a>
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
            <div className="mb-4">
              <h2 className="text-lg font-bold text-[#667eea] mb-2 pb-1 border-b border-gray-200 uppercase tracking-wide">
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
                  <a
                    href={`https://google.com/search?q=${edu.college}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-700 font-semibold hover:text-red-500 transition-all duration-300 cursor-pointer"
                  >
                    {edu.college}
                  </a>
                </div>
              ))}
            </div>
          )}

          {/* Projects */}
          {resumeData.projects.length > 0 && (
            <div className="mb-4">
              <h2 className="text-lg font-bold text-[#667eea] mb-2 pb-1 border-b border-gray-200 uppercase tracking-wide">
                Projects
              </h2>
              {resumeData.projects.map((project, index) => (
                <div
                  key={index}
                  className="mb-6 pl-4 border-l-4 border-[#667eea]"
                >
                  <div className="flex justify-between items-baseline mb-2 flex-wrap gap-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 font-semibold hover:text-red-500 transition-all duration-300 cursor-pointer"
                      >
                        {project.name}
                      </a>
                    </h3>
                  </div>
                  {project.description && (
                    <p className="text-sm leading-relaxed text-gray-600">
                      {project.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Certifications */}
          {resumeData.certifications.length > 0 && (
            <div className="mb-4">
              <h2 className="text-lg font-bold text-[#667eea] mb-2 pb-1 border-b border-gray-200 uppercase tracking-wide">
                Certifications
              </h2>
              {resumeData.certifications.map((certification, index) => (
                <div
                  key={index}
                  className="mb-6 pl-4 border-l-4 border-[#667eea]"
                >
                  <div className="flex justify-between items-baseline mb-2 flex-wrap gap-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {certification.name}
                    </h3>
                  </div>
                  {certification.description && (
                    <p className="text-sm leading-relaxed text-gray-600">
                      {certification.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {resumeData.skills.length > 0 && (
            <div className="mb-4">
              <h2 className="text-lg font-bold text-[#667eea] mb-2 pb-1 border-b border-gray-200 uppercase tracking-wide">
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-[#667eea]/10 border rounded-lg px-3 py-1 flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
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

          {/* Keywords */}
          {resumeData.keywords && resumeData.keywords.length > 0 && (
            <div className="mb-4">
              <h2 className="text-lg font-bold text-[#667eea] mb-2 pb-1 border-b border-gray-200 uppercase tracking-wide">
                Keywords
              </h2>
              <div className="flex flex-wrap gap-2">
                {resumeData.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm font-medium border border-gray-300"
                  >
                    {keyword.value}
                  </span>
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
    </>
  );
};

export default Resume;
