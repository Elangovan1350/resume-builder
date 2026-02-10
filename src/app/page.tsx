"use client";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResumeSchema, schema, useResumeStore } from "@/component/store";
import { useRouter } from "next/navigation";
import {
  getLabelClass,
  getInputClass,
  getSectionTitleClass,
  getCardClass,
  getSectionOptionClass,
} from "@/component/theme-utils";

const Home = () => {
  const { setResumeData, theme } = useResumeStore();

  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ResumeSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      linkedin: "",
      website: "",
      summary: "",
      projects: [
        {
          name: "",
          description: "",
          link: "",
        },
      ],
      certifications: [
        {
          name: "",
          description: "",
        },
      ],
      experience: [
        {
          title: "",
          company: "",
          duration: "",
          description: "",
        },
      ],
      education: [
        {
          degree: "",
          college: "",
          duration: "",
        },
      ],
      skills: [
        {
          name: "",
          level: "beginner",
        },
      ],
      keywords: [
        {
          value: "",
        },
      ],
    },
  });
  const {
    fields: experienceFields,
    append: experienceAppend,
    remove: experienceRemove,
  } = useFieldArray({
    control,
    name: "experience",
  });
  const {
    fields: educationFields,
    append: educationAppend,
    remove: educationRemove,
  } = useFieldArray({
    control,
    name: "education",
  });
  const {
    fields: skillsFields,
    append: skillsAppend,
    remove: skillsRemove,
  } = useFieldArray({
    control,
    name: "skills",
  });
  const {
    fields: keywordsFields,
    append: keywordsAppend,
    remove: keywordsRemove,
  } = useFieldArray({
    control,
    name: "keywords",
  });
  const {
    fields: projectsFields,
    append: projectsAppend,
    remove: projectsRemove,
  } = useFieldArray({
    control,
    name: "projects",
  });
  const {
    fields: certificationsFields,
    append: certificationsAppend,
    remove: certificationsRemove,
  } = useFieldArray({
    control,
    name: "certifications",
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12 animate-[fadeInUp_0.6s_ease-out]">
        <h1 className="text-4xl  sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 bg-linear-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent leading-tight">
          Resume Builder
        </h1>
        <p
          className={`text-base sm:text-lg font-light px-4 ${theme ? "text-gray-600" : "text-gray-300"}`}
        >
          Create your professional resume with style ✨
        </p>
      </div>

      {/* Main Form Card */}
      <form
        className={`w-full max-w-3xl backdrop-blur-xl rounded-2xl sm:rounded-3xl p-2 sm:p-8 md:p-12 shadow-lg border animate-[fadeInUp_0.8s_ease-out] ${
          theme
            ? "bg-white/80 border-gray-200 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
            : "bg-white/5 border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
        }`}
        onSubmit={handleSubmit((data) => {
          setResumeData(data);
          router.push("/resume");
        })}
      >
        {/* Personal Information Section */}
        <div className="mb-10">
          <h2
            className={`text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 ${getSectionTitleClass(theme)} flex items-center gap-2 sm:gap-3`}
          >
            <span className="text-2xl sm:text-3xl">👤</span>
            Personal Information
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Name Field */}
            <div className="flex flex-col gap-2 group">
              <label
                htmlFor="name"
                className={`text-sm font-medium ${getLabelClass(theme)} flex items-center gap-2`}
              >
                <span className="text-lg">✍️</span>
                Full Name
              </label>
              <input
                type="text"
                {...register("name")}
                placeholder="Elangovan.S"
                className={`border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 backdrop-blur-sm transition-all duration-300 focus:scale-[1.02] text-base ${getInputClass(theme)}`}
              />
              {errors.name?.message && (
                <p className="text-red-400 text-sm flex items-center gap-1">
                  <span>⚠️</span>
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2 group">
              <label
                htmlFor="email"
                className={`text-sm font-medium ${getLabelClass(theme)} flex items-center gap-2`}
              >
                <span className="text-lg">📧</span>
                Email Address
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="Elangovan2019miss@gamil.com"
                className={`border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 backdrop-blur-sm transition-all duration-300 focus:scale-[1.02] text-base ${getInputClass(theme)}`}
              />
              {errors.email?.message && (
                <p className="text-red-400 text-sm flex items-center gap-1">
                  <span>⚠️</span>
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div className="flex flex-col gap-2 group">
              <label
                htmlFor="phone"
                className={`text-sm font-medium ${getLabelClass(theme)} flex items-center gap-2`}
              >
                <span className="text-lg">📱</span>
                Phone Number
              </label>
              <input
                type="text"
                {...register("phone")}
                placeholder="9876543210"
                className={`border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 backdrop-blur-sm transition-all duration-300 focus:scale-[1.02] text-base ${getInputClass(theme)}`}
              />
              {errors.phone?.message && (
                <p className="text-red-400 text-sm flex items-center gap-1">
                  <span>⚠️</span>
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Address Field */}
            <div className="flex flex-col gap-2 group">
              <label
                htmlFor="address"
                className={`text-sm font-medium ${getLabelClass(theme)} flex items-center gap-2`}
              >
                <span className="text-lg">📍</span>
                Address
              </label>
              <input
                type="text"
                {...register("address")}
                placeholder="123 Main St, City, Country"
                className={`border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 backdrop-blur-sm transition-all duration-300 focus:scale-[1.02] text-base ${getInputClass(theme)}`}
              />
              {errors.address?.message && (
                <p className="text-red-400 text-sm flex items-center gap-1">
                  <span>⚠️</span>
                  {errors.address.message}
                </p>
              )}
            </div>

            {/* LinkedIn Field */}
            <div className="flex flex-col gap-2 group">
              <label
                htmlFor="linkedin"
                className={`text-sm font-medium ${getLabelClass(theme)} flex items-center gap-2`}
              >
                <span className="text-lg">💼</span>
                LinkedIn Profile (Optional)
              </label>
              <input
                type="url"
                {...register("linkedin")}
                placeholder="https://linkedin.com/in/yourprofile"
                className={`border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 backdrop-blur-sm transition-all duration-300 focus:scale-[1.02] text-base ${getInputClass(theme)}`}
              />
              {errors.linkedin?.message && (
                <p className="text-red-400 text-sm flex items-center gap-1">
                  <span>⚠️</span>
                  {errors.linkedin.message}
                </p>
              )}
            </div>

            {/* Website Field */}
            <div className="flex flex-col gap-2 group">
              <label
                htmlFor="website"
                className={`text-sm font-medium ${getLabelClass(theme)} flex items-center gap-2`}
              >
                <span className="text-lg">🌐</span>
                Portfolio/Website (Optional)
              </label>
              <input
                type="url"
                {...register("website")}
                placeholder="https://yourportfolio.com"
                className={`border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 backdrop-blur-sm transition-all duration-300 focus:scale-[1.02] text-base ${getInputClass(theme)}`}
              />
              {errors.website?.message && (
                <p className="text-red-400 text-sm flex items-center gap-1">
                  <span>⚠️</span>
                  {errors.website.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Professional Summary Section */}
        <div className="mb-10">
          <h2
            className={`text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 ${getSectionTitleClass(theme)} flex items-center gap-2 sm:gap-3`}
          >
            <span className="text-2xl sm:text-3xl">📝</span>
            Professional Summary
          </h2>

          <div className="flex flex-col gap-2 group">
            <label
              htmlFor="summary"
              className={`text-sm font-medium ${getLabelClass(theme)}`}
            >
              Tell us about yourself
            </label>
            <textarea
              {...register("summary")}
              rows={4}
              placeholder="Write a short summary about yourself (max 150 characters)"
              className={`border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 backdrop-blur-sm transition-all duration-300 focus:scale-[1.01] resize-none text-base ${getInputClass(theme)}`}
            />
            {errors.summary?.message && (
              <p className="text-red-400 text-sm flex items-center gap-1">
                <span>⚠️</span>
                {errors.summary.message}
              </p>
            )}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-10">
          <h2
            className={`text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 ${getSectionTitleClass(theme)} flex items-center gap-2 sm:gap-3`}
          >
            <span className="text-2xl sm:text-3xl">💼</span>
            Work Experience
          </h2>

          <div className="flex flex-col gap-6">
            {experienceFields.map((field, index) => (
              <div
                key={field.id}
                className={`backdrop-blur-sm rounded-2xl p-2 py-6 border shadow-lg hover:shadow-xl transition-all duration-300 ${getCardClass(theme)}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className={`text-base sm:text-lg font-semibold ${getSectionTitleClass(theme)}`}
                  >
                    Position {index + 1}
                  </h3>
                  {experienceFields.length > 1 && (
                    <button
                      type="button"
                      onClick={() => experienceRemove(index)}
                      className="text-red-400 hover:text-red-300 transition-colors flex items-center gap-2 text-sm font-medium"
                    >
                      <span>🗑️</span>
                      Remove
                    </button>
                  )}
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label
                      className={`text-sm font-medium ${getLabelClass(theme)}`}
                    >
                      Job Title
                    </label>
                    <input
                      type="text"
                      {...register(`experience.${index}.title`)}
                      placeholder="e.g., Senior Software Engineer"
                      className={`border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 backdrop-blur-sm transition-all duration-300 focus:scale-[1.02] ${getInputClass(theme)}`}
                    />
                    {errors.experience?.[index]?.title?.message && (
                      <p className="text-red-400 text-sm flex items-center gap-1">
                        <span>⚠️</span>
                        {errors.experience?.[index]?.title?.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      className={`text-sm font-medium ${getLabelClass(theme)}`}
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      {...register(`experience.${index}.company`)}
                      placeholder="e.g., Google Inc."
                      className={`border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 backdrop-blur-sm transition-all duration-300 focus:scale-[1.02] ${getInputClass(theme)}`}
                    />
                    {errors.experience?.[index]?.company?.message && (
                      <p className="text-red-400 text-sm flex items-center gap-1">
                        <span>⚠️</span>
                        {errors.experience?.[index]?.company?.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      className={`text-sm font-medium ${getLabelClass(theme)}`}
                    >
                      Duration
                    </label>
                    <input
                      type="text"
                      {...register(`experience.${index}.duration`)}
                      placeholder="e.g., Jan 2020 - Present"
                      className={`border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 backdrop-blur-sm transition-all duration-300 focus:scale-[1.02] ${getInputClass(theme)}`}
                    />
                    {errors.experience?.[index]?.duration?.message && (
                      <p className="text-red-400 text-sm flex items-center gap-1">
                        <span>⚠️</span>
                        {errors.experience?.[index]?.duration?.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      className={`text-sm font-medium ${getLabelClass(theme)}`}
                    >
                      Description
                    </label>
                    <textarea
                      {...register(`experience.${index}.description`)}
                      rows={4}
                      placeholder="Describe your key responsibilities and achievements (max 100 characters)"
                      className={`border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 backdrop-blur-sm transition-all duration-300 focus:scale-[1.01] resize-none text-base ${getInputClass(theme)}`}
                    />
                    {errors.experience?.[index]?.description?.message && (
                      <p className="text-red-400 text-sm flex items-center gap-1">
                        <span>⚠️</span>
                        {errors.experience?.[index]?.description?.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={() =>
                experienceAppend({
                  title: "",
                  company: "",
                  duration: "",
                  description: "",
                })
              }
              className="w-full bg-linear-to-r from-green-500 to-emerald-500 text-white font-semibold py-3.5 sm:py-3 px-6 rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-base sm:text-base touch-manipulation"
            >
              <span className="text-xl">➕</span>
              <span>Add Another Position</span>
            </button>
          </div>
        </div>
        {/* Education Section */}
        <div className="mb-10">
          <h2
            className={`text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 ${getSectionTitleClass(theme)} flex items-center gap-2 sm:gap-3`}
          >
            <span className="text-2xl sm:text-3xl">🎓</span>
            Education
          </h2>

          <div className="flex flex-col gap-6">
            {educationFields.map((field, index) => (
              <div
                key={field.id}
                className={`backdrop-blur-sm rounded-2xl px-2 py-6 border shadow-lg hover:shadow-xl transition-all duration-300 ${getCardClass(theme)}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className={`text-base sm:text-lg font-semibold ${getSectionTitleClass(theme)}`}
                  >
                    Education {index + 1}
                  </h3>
                  {educationFields.length > 1 && (
                    <button
                      type="button"
                      onClick={() => educationRemove(index)}
                      className="text-red-400 hover:text-red-300 transition-colors flex items-center gap-2 text-sm font-medium"
                    >
                      <span>🗑️</span>
                      Remove
                    </button>
                  )}
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label
                      className={`text-sm font-medium ${getLabelClass(theme)}`}
                    >
                      Degree
                    </label>
                    <input
                      type="text"
                      {...register(`education.${index}.degree`)}
                      placeholder="e.g., Bachelor of Science in Computer Science"
                      className={`border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 backdrop-blur-sm transition-all duration-300 focus:scale-[1.02] ${getInputClass(theme)}`}
                    />
                    {errors.education?.[index]?.degree?.message && (
                      <p className="text-red-400 text-sm flex items-center gap-1">
                        <span>⚠️</span>
                        {errors.education?.[index]?.degree?.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      className={`text-sm font-medium ${getLabelClass(theme)}`}
                    >
                      College/University
                    </label>
                    <input
                      type="text"
                      {...register(`education.${index}.college`)}
                      placeholder="e.g., Stanford University"
                      className={`border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 backdrop-blur-sm transition-all duration-300 focus:scale-[1.02] ${getInputClass(theme)}`}
                    />
                    {errors.education?.[index]?.college?.message && (
                      <p className="text-red-400 text-sm flex items-center gap-1">
                        <span>⚠️</span>
                        {errors.education?.[index]?.college?.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      className={`text-sm font-medium ${getLabelClass(theme)}`}
                    >
                      Duration
                    </label>
                    <input
                      type="text"
                      {...register(`education.${index}.duration`)}
                      placeholder="e.g., 2015 - 2019"
                      className={`border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 backdrop-blur-sm transition-all duration-300 focus:scale-[1.02] ${getInputClass(theme)}`}
                    />
                    {errors.education?.[index]?.duration?.message && (
                      <p className="text-red-400 text-sm flex items-center gap-1">
                        <span>⚠️</span>
                        {errors.education?.[index]?.duration?.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={() =>
                educationAppend({ degree: "", college: "", duration: "" })
              }
              className="w-full bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold py-3.5 sm:py-3 px-6 rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-base sm:text-base touch-manipulation"
            >
              <span className="text-xl">➕</span>
              <span>Add Another Education</span>
            </button>
          </div>
        </div>

        {/* Project Section */}
        <div className="mb-10">
          <h2
            className={`text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 ${getSectionTitleClass(theme)} flex items-center gap-2 sm:gap-3`}
          >
            <span className="text-2xl sm:text-3xl">📂</span>
            Projects
          </h2>

          <div className="flex flex-col gap-6">
            {projectsFields.map((field, index) => (
              <div
                key={field.id}
                className={`backdrop-blur-sm rounded-2xl p-2 py-6 border shadow-lg hover:shadow-xl transition-all duration-300 ${getCardClass(theme)}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className={`text-base sm:text-lg font-semibold ${getSectionTitleClass(theme)}`}
                  >
                    Project {index + 1}
                  </h3>
                  {projectsFields.length > 1 && (
                    <button
                      type="button"
                      onClick={() => projectsRemove(index)}
                      className="text-red-400 hover:text-red-300 transition-colors flex items-center gap-2 text-sm font-medium"
                    >
                      <span>🗑️</span>
                      Remove
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1  gap-4 sm:gap-6">
                  {/* Project Name Field */}
                  <div className="flex flex-col gap-2 group">
                    <label
                      htmlFor={`projects.${index}.name`}
                      className={`text-sm font-medium ${getLabelClass(theme)} flex items-center gap-2`}
                    >
                      <span className="text-lg">📝</span>
                      Project Name
                    </label>
                    <input
                      type="text"
                      {...register(`projects.${index}.name`)}
                      placeholder="e.g., E-commerce Website"
                      className={`border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 backdrop-blur-sm transition-all duration-300 focus:scale-[1.02] ${getInputClass(theme)}`}
                    />
                    {errors.projects?.[index]?.name?.message && (
                      <p className="text-red-400 text-sm flex items-center gap-1">
                        <span>⚠️</span>
                        {errors.projects?.[index]?.name?.message}
                      </p>
                    )}
                  </div>

                  {/* Project Description Field */}
                  <div className="flex flex-col gap-2 group">
                    <label
                      htmlFor={`projects.${index}.description`}
                      className={`text-sm font-medium ${getLabelClass(theme)} flex items-center gap-2`}
                    >
                      <span className="text-lg">📋</span>
                      Project Description
                    </label>
                    <textarea
                      {...register(`projects.${index}.description`)}
                      placeholder="e.g., A comprehensive e-commerce platform with features like product listing, shopping cart, and user authentication. (max 100 characters)"
                      rows={3}
                      className={`border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 backdrop-blur-sm transition-all duration-300 focus:scale-[1.02] ${getInputClass(theme)} resize-none`}
                    />
                    {errors.projects?.[index]?.description?.message && (
                      <p className="text-red-400 text-sm flex items-center gap-1">
                        <span>⚠️</span>
                        {errors.projects?.[index]?.description?.message}
                      </p>
                    )}
                  </div>

                  {/* Project Link Field */}
                  <div className="flex flex-col gap-2 group">
                    <label
                      htmlFor={`projects.${index}.link`}
                      className={`text-sm font-medium ${getLabelClass(theme)} flex items-center gap-2`}
                    >
                      <span className="text-lg">🔗</span>
                      Project Link
                    </label>
                    <input
                      type="url"
                      {...register(`projects.${index}.link`)}
                      placeholder="e.g., https://github.com/username/project"
                      className={`border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 backdrop-blur-sm transition-all duration-300 focus:scale-[1.02] ${getInputClass(theme)}`}
                    />
                    {errors.projects?.[index]?.link?.message && (
                      <p className="text-red-400 text-sm flex items-center gap-1">
                        <span>⚠️</span>
                        {errors.projects?.[index]?.link?.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={() => projectsAppend({ name: "", description: "" })}
              className="w-full bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold py-3.5 sm:py-3 px-6 rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-base sm:text-base touch-manipulation"
            >
              <span className="text-xl">➕</span>
              <span>Add Another Project</span>
            </button>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-10">
          <h2
            className={`text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 ${getSectionTitleClass(theme)} flex items-center gap-2 sm:gap-3`}
          >
            <span
              className={`text-2xl sm:text-3xl ${getSectionTitleClass(theme)}`}
            >
              ⚡
            </span>
            Skills
          </h2>

          <div className="flex flex-col gap-6">
            {skillsFields.map((field, index) => (
              <div
                key={field.id}
                className={`backdrop-blur-sm rounded-2xl p-2 py-6 border shadow-lg hover:shadow-xl transition-all duration-300 ${getCardClass(theme)}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className={`text-base sm:text-lg font-semibold ${getSectionTitleClass(theme)}`}
                  >
                    Skill {index + 1}
                  </h3>
                  {skillsFields.length > 1 && (
                    <button
                      type="button"
                      onClick={() => skillsRemove(index)}
                      className="text-red-400 hover:text-red-300 transition-colors flex items-center gap-2 text-sm font-medium"
                    >
                      <span>🗑️</span>
                      Remove
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-3 sm:gap-4">
                  <div className="flex flex-col gap-2">
                    <label
                      className={`text-sm font-medium ${getLabelClass(theme)}`}
                    >
                      Skill Name
                    </label>
                    <input
                      type="text"
                      {...register(`skills.${index}.name`)}
                      placeholder="e.g., JavaScript, Python, Design"
                      className={`border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 backdrop-blur-sm transition-all duration-300 focus:scale-[1.02] ${getInputClass(theme)}`}
                    />
                    {errors.skills?.[index]?.name?.message && (
                      <p className="text-red-400 text-sm flex items-center gap-1">
                        <span>⚠️</span>
                        {errors.skills?.[index]?.name?.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      className={`text-sm font-medium ${getLabelClass(theme)}`}
                    >
                      Proficiency Level
                    </label>
                    <select
                      {...register(`skills.${index}.level`)}
                      className={`border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 backdrop-blur-sm transition-all duration-300 focus:scale-[1.02] ${getInputClass(theme)}`}
                    >
                      <option
                        value="beginner"
                        className={getSectionOptionClass(theme)}
                      >
                        Beginner
                      </option>
                      <option
                        value="intermediate"
                        className={getSectionOptionClass(theme)}
                      >
                        Intermediate
                      </option>
                      <option
                        value="advanced"
                        className={getSectionOptionClass(theme)}
                      >
                        Advanced
                      </option>
                      <option
                        value="expert"
                        className={getSectionOptionClass(theme)}
                      >
                        Expert
                      </option>
                    </select>
                    {errors.skills?.[index]?.level?.message && (
                      <p className="text-red-400 text-sm flex items-center gap-1">
                        <span>⚠️</span>
                        {errors.skills?.[index]?.level?.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={() => skillsAppend({ name: "", level: "beginner" })}
              className="w-full bg-linear-to-r from-orange-500 to-amber-500 text-white font-semibold py-3.5 sm:py-3 px-6 rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-base sm:text-base touch-manipulation"
            >
              <span className="text-xl">➕</span>
              <span>Add Another Skill</span>
            </button>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-10">
          <h2
            className={`text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 ${getSectionTitleClass(theme)} flex items-center gap-2 sm:gap-3`}
          >
            <span className="text-2xl sm:text-3xl">🎓</span>
            Certifications
          </h2>
          <p className={`text-sm mb-4 ${getLabelClass(theme)}`}>
            Add relevant certifications to showcase your expertise
          </p>

          <div className="flex flex-col gap-6">
            {certificationsFields.map((field, index) => (
              <div
                key={field.id}
                className={`backdrop-blur-sm rounded-2xl p-2 py-6 border shadow-lg hover:shadow-xl transition-all duration-300 ${getCardClass(theme)}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className={`text-base sm:text-lg font-semibold ${getSectionTitleClass(theme)}`}
                  >
                    Certification {index + 1}
                  </h3>
                  {certificationsFields.length > 1 && (
                    <button
                      type="button"
                      onClick={() => certificationsRemove(index)}
                      className="text-red-400 hover:text-red-300 transition-colors flex items-center gap-2 text-sm font-medium"
                    >
                      <span>🗑️</span>
                      Remove
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1  gap-4 sm:gap-6">
                  {/* Certification Name Field */}
                  <div className="flex flex-col gap-2 group">
                    <label
                      htmlFor={`certifications.${index}.name`}
                      className={`text-sm font-medium ${getLabelClass(theme)} flex items-center gap-2`}
                    >
                      <span>🎓</span>
                      Certification Name
                    </label>
                    <input
                      type="text"
                      {...register(`certifications.${index}.name`)}
                      placeholder="e.g., AWS Certified Solutions Architect"
                      className={`border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 backdrop-blur-sm transition-all duration-300 focus:scale-[1.02] ${getInputClass(theme)}`}
                    />
                    {errors.certifications?.[index]?.name?.message && (
                      <p className="text-red-400 text-sm flex items-center gap-1">
                        <span>⚠️</span>
                        {errors.certifications?.[index]?.name?.message}
                      </p>
                    )}
                  </div>

                  {/* Description Field */}
                  <div className="flex flex-col gap-2 group">
                    <label
                      htmlFor={`certifications.${index}.description`}
                      className={`text-sm font-medium ${getLabelClass(theme)} flex items-center gap-2`}
                    >
                      <span>📝</span>
                      Description
                    </label>
                    <textarea
                      {...register(`certifications.${index}.description`)}
                      placeholder="e.g., Completed AWS Certified Solutions Architect certification (max 100 characters)"
                      rows={3}
                      className={`border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 backdrop-blur-sm transition-all duration-300 focus:scale-[1.02] ${getInputClass(theme)}`}
                    />
                    {errors.certifications?.[index]?.description?.message && (
                      <p className="text-red-400 text-sm flex items-center gap-1">
                        <span>⚠️</span>
                        {errors.certifications?.[index]?.description?.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={() =>
                certificationsAppend({
                  name: "",
                  description: "",
                })
              }
              className="w-full bg-linear-to-r from-purple-500 to-indigo-500 text-white font-semibold py-3.5 sm:py-3 px-6 rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-base sm:text-base touch-manipulation"
            >
              <span className="text-xl">➕</span>
              <span>Add Another Certification</span>
            </button>
          </div>
        </div>

        {/* Keywords */}
        <div className="mb-10">
          <h2
            className={`text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 ${getSectionTitleClass(theme)} flex items-center gap-2 sm:gap-3`}
          >
            <span className="text-2xl sm:text-3xl">🔑</span>
            Keywords
          </h2>
          <p className={`text-sm mb-4 ${getLabelClass(theme)}`}>
            Add relevant keywords from job descriptions to optimize your resume
            for ATS (Applicant Tracking Systems)
          </p>

          <div className="flex flex-col gap-6">
            {keywordsFields.map((field, index) => (
              <div
                key={field.id}
                className={`backdrop-blur-sm rounded-2xl p-2 py-6 border shadow-lg hover:shadow-xl transition-all duration-300 ${getCardClass(theme)}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className={`text-base sm:text-lg font-semibold ${getSectionTitleClass(theme)}`}
                  >
                    Keyword {index + 1}
                  </h3>
                  {keywordsFields.length > 1 && (
                    <button
                      type="button"
                      onClick={() => keywordsRemove(index)}
                      className="text-red-400 hover:text-red-300 transition-colors flex items-center gap-2 text-sm font-medium"
                    >
                      <span>🗑️</span>
                      Remove
                    </button>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    className={`text-sm font-medium ${getLabelClass(theme)}`}
                  >
                    Keyword
                  </label>
                  <input
                    type="text"
                    {...register(`keywords.${index}.value`)}
                    placeholder="e.g., Project Management, Agile, Python"
                    className={`border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 backdrop-blur-sm transition-all duration-300 focus:scale-[1.02] ${getInputClass(theme)}`}
                  />
                  {errors.keywords?.[index]?.value?.message && (
                    <p className="text-red-400 text-sm flex items-center gap-1">
                      <span>⚠️</span>
                      {errors.keywords?.[index]?.value?.message}
                    </p>
                  )}
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={() => keywordsAppend({ value: "" })}
              className="w-full bg-linear-to-r from-pink-500 to-rose-500 text-white font-semibold py-3.5 sm:py-3 px-6 rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-base sm:text-base touch-manipulation"
            >
              <span className="text-xl">➕</span>
              <span>Add Keyword</span>
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 text-white font-semibold py-4 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 text-base sm:text-lg group touch-manipulation"
        >
          <span>Generate Resume</span>
          <span className="text-2xl group-hover:translate-x-1 transition-transform">
            🚀
          </span>
        </button>
      </form>
    </div>
  );
};

export default Home;
