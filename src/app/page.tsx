"use client"
import { useForm ,useFieldArray} from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters long'),
  email: z.email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits long'),
  address: z.string().min(10, 'Address must be at least 10 characters long'),
  summary: z.string().min(10, 'Summary must be at least 10 characters long'),
  experience: z.array(
    z.object({
      title: z.string().min(3, 'Title must be at least 3 characters long'),
      company: z.string().min(3, 'Company must be at least 3 characters long'),
      duration: z.string().min(5, 'Duration must be at least 10 characters long'),
      description: z.string().min(5, 'Description must be at least 10 characters long'),
    })
  ),
  education: z.array(
    z.object({
      degree: z.string().min(3, 'Degree must be at least 3 characters long'),
      college: z.string().min(3, 'College must be at least 3 characters long'),
      duration: z.string().min(5, 'Duration must be at least 10 characters long'),
    })
  ),
  skills: z.array(
    z.object({
      name: z.string().min(3, 'Skill name must be at least 3 characters long'),
      level: z.string().min(3, 'Skill level must be at least 3 characters long'),
    })
  ),
})

const Home = () => {
  const {register, handleSubmit,control, formState: {errors}} = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      summary: '',
      experience: [
        {
          title: '',
          company: '',
         duration: '',
          description: '',
        }
      ],
      education: [
        {
          degree: '',
         college: '',
         duration: '',
        }
      ],
      skills: [
        {
          name: '',
          level: 'beginner',
        }
      ],
    },
  })
  const {fields: experienceFields, append: experienceAppend, remove: experienceRemove} = useFieldArray({
    control,
    name: 'experience',
  })
  const {fields: educationFields, append: educationAppend, remove: educationRemove} = useFieldArray({
    control,
    name: 'education',
  })
  const {fields: skillsFields, append: skillsAppend, remove: skillsRemove} = useFieldArray({
    control,
    name: 'skills',
  })
    
  return (
    <div className='min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      {/* Header Section */}
      <div className='text-center mb-12 animate-[fadeInUp_0.6s_ease-out]'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 bg-linear-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent leading-tight'>
          Resume Builder
        </h1>
        <p className='text-base sm:text-lg text-gray-300 font-light px-4'>
          Create your professional resume with style ✨
        </p>
      </div>

      {/* Main Form Card */}
      <form 
        className='w-full max-w-3xl backdrop-blur-xl bg-white/5 rounded-2xl sm:rounded-3xl p-2 sm:p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/10 animate-[fadeInUp_0.8s_ease-out]' 
        onSubmit={handleSubmit(data => console.log(data))}
      >
        {/* Personal Information Section */}
        <div className='mb-10'>
          <h2 className='text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white flex items-center gap-2 sm:gap-3'>
            <span className='text-2xl sm:text-3xl'>👤</span>
            Personal Information
          </h2>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
            {/* Name Field */}
            <div className='flex flex-col gap-2 group'>
              <label htmlFor="name" className='text-sm font-medium text-gray-300 flex items-center gap-2'>
                <span className='text-lg'>✍️</span>
                Full Name
              </label>
              <input 
                type="text" 
                {...register('name')} 
                placeholder='John Doe'
                className='bg-white/10 border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/15 focus:scale-[1.02] text-base' 
              />
              {errors.name?.message && (
                <p className='text-red-400 text-sm flex items-center gap-1'>
                  <span>⚠️</span>
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className='flex flex-col gap-2 group'>
              <label htmlFor="email" className='text-sm font-medium text-gray-300 flex items-center gap-2'>
                <span className='text-lg'>📧</span>
                Email Address
              </label>
              <input 
                type="email" 
                {...register('email')} 
                placeholder='john.doe@example.com'
                className='bg-white/10 border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/15 focus:scale-[1.02] text-base' 
              />
              {errors.email?.message && (
                <p className='text-red-400 text-sm flex items-center gap-1'>
                  <span>⚠️</span>
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div className='flex flex-col gap-2 group'>
              <label htmlFor="phone" className='text-sm font-medium text-gray-300 flex items-center gap-2'>
                <span className='text-lg'>📱</span>
                Phone Number
              </label>
              <input 
                type="text" 
                {...register('phone')} 
                placeholder='+1 (555) 123-4567'
                className='bg-white/10 border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/15 focus:scale-[1.02] text-base' 
              />
              {errors.phone?.message && (
                <p className='text-red-400 text-sm flex items-center gap-1'>
                  <span>⚠️</span>
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Address Field */}
            <div className='flex flex-col gap-2 group'>
              <label htmlFor="address" className='text-sm font-medium text-gray-300 flex items-center gap-2'>
                <span className='text-lg'>📍</span>
                Address
              </label>
              <input 
                type="text" 
                {...register('address')} 
                placeholder='123 Main St, City, Country'
                className='bg-white/10 border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/15 focus:scale-[1.02] text-base' 
              />
              {errors.address?.message && (
                <p className='text-red-400 text-sm flex items-center gap-1'>
                  <span>⚠️</span>
                  {errors.address.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Professional Summary Section */}
        <div className='mb-10'>
          <h2 className='text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white flex items-center gap-2 sm:gap-3'>
            <span className='text-2xl sm:text-3xl'>📝</span>
            Professional Summary
          </h2>
          
          <div className='flex flex-col gap-2 group'>
            <label htmlFor="summary" className='text-sm font-medium text-gray-300'>
              Tell us about yourself
            </label>
            <textarea 
              {...register('summary')} 
              rows={4}
              placeholder='A passionate professional with expertise in...'
              className='bg-white/10 border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/15 focus:scale-[1.01] resize-none text-base' 
            />
            {errors.summary?.message && (
              <p className='text-red-400 text-sm flex items-center gap-1'>
                <span>⚠️</span>
                {errors.summary.message}
              </p>
            )}
          </div>
        </div>

        {/* Experience Section */}
        <div className='mb-10'>
          <h2 className='text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white flex items-center gap-2 sm:gap-3'>
            <span className='text-2xl sm:text-3xl'>💼</span>
            Work Experience
          </h2>
          
          <div className='flex flex-col gap-6'>
            {experienceFields.map((field, index) => (
              <div key={field.id} className='bg-white/5 backdrop-blur-sm rounded-2xl p-2 py-6 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300'>
                <div className='flex items-center justify-between mb-4'>
                  <h3 className='text-base sm:text-lg font-semibold text-white'>Position {index + 1}</h3>
                  {experienceFields.length > 1 && (
                    <button 
                      type='button' 
                      onClick={() => experienceRemove(index)} 
                      className='text-red-400 hover:text-red-300 transition-colors flex items-center gap-2 text-sm font-medium'
                    >
                      <span>🗑️</span>
                      Remove
                    </button>
                  )}
                </div>
                
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-2'>
                    <label className='text-sm font-medium text-gray-300'>Job Title</label>
                    <input 
              type="text" 
                      {...register(`experience.${index}.title`)} 
                      placeholder='e.g., Senior Software Engineer'
                      className='bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/15 focus:scale-[1.02]' 
                    />
                    {errors.experience?.[index]?.title?.message && (
                      <p className='text-red-400 text-sm flex items-center gap-1'>
                        <span>⚠️</span>
                        {errors.experience?.[index]?.title?.message}
                      </p>
                    )}
                  </div>
                  
                  <div className='flex flex-col gap-2'>
                    <label className='text-sm font-medium text-gray-300'>Company</label>
                    <input 
                      type="text" 
                      {...register(`experience.${index}.company`)} 
                      placeholder='e.g., Google Inc.'
                      className='bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/15 focus:scale-[1.02]' 
                    />
                    {errors.experience?.[index]?.company?.message && (
                      <p className='text-red-400 text-sm flex items-center gap-1'>
                        <span>⚠️</span>
                        {errors.experience?.[index]?.company?.message}
                      </p>
                    )}
                  </div>
                  
                  <div className='flex flex-col gap-2'>
                    <label className='text-sm font-medium text-gray-300'>Duration</label>
                    <input 
                      type="text" 
                      {...register(`experience.${index}.duration`)} 
                      placeholder='e.g., Jan 2020 - Present'
                      className='bg-white/10 border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/15 focus:scale-[1.02] text-base' 
                    />
                    {errors.experience?.[index]?.duration?.message && (
                      <p className='text-red-400 text-sm flex items-center gap-1'>
                        <span>⚠️</span>
                        {errors.experience?.[index]?.duration?.message}
                      </p>
                    )}
                  </div>
                  
                  <div className='flex flex-col gap-2'>
                    <label className='text-sm font-medium text-gray-300'>Description</label>
                    <textarea 
                      {...register(`experience.${index}.description`)} 
                      rows={4}
                      placeholder='Describe your key responsibilities and achievements...'
                      className='bg-white/10 border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/15 focus:scale-[1.01] resize-none text-base' 
                    />
                    {errors.experience?.[index]?.description?.message && (
                      <p className='text-red-400 text-sm flex items-center gap-1'>
                        <span>⚠️</span>
                        {errors.experience?.[index]?.description?.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            <button 
              type='button' 
              onClick={() => experienceAppend({ title: '', company: '', duration: '', description: '' })} 
              className='w-full bg-linear-to-r from-green-500 to-emerald-500 text-white font-semibold py-3.5 sm:py-3 px-6 rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-base sm:text-base touch-manipulation'
            >
              <span className='text-xl'>➕</span>
              <span>Add Another Position</span>
            </button>
          </div>
        </div>
        {/* Education Section */}
        <div className='mb-10'>
          <h2 className='text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white flex items-center gap-2 sm:gap-3'>
            <span className='text-2xl sm:text-3xl'>🎓</span>
            Education
          </h2>
          
          <div className='flex flex-col gap-6'>
            {educationFields.map((field, index) => (
              <div key={field.id} className='bg-white/5 backdrop-blur-sm rounded-2xl px-2 py-6 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300'>
                <div className='flex items-center justify-between mb-4'>
                  <h3 className='text-base sm:text-lg font-semibold text-white'>Education {index + 1}</h3>
                  {educationFields.length > 1 && (
                    <button 
                      type='button' 
                      onClick={() => educationRemove(index)} 
                      className='text-red-400 hover:text-red-300 transition-colors flex items-center gap-2 text-sm font-medium'
                    >
                      <span>🗑️</span>
                      Remove
                    </button>
                  )}
                </div>
                
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-2'>
                    <label className='text-sm font-medium text-gray-300'>Degree</label>
                    <input 
                      type="text" 
                      {...register(`education.${index}.degree`)} 
                      placeholder='e.g., Bachelor of Science in Computer Science'
                      className='bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/15 focus:scale-[1.02]' 
                    />
                    {errors.education?.[index]?.degree?.message && (
                      <p className='text-red-400 text-sm flex items-center gap-1'>
                        <span>⚠️</span>
                        {errors.education?.[index]?.degree?.message}
                      </p>
                    )}
                  </div>
                  
                  <div className='flex flex-col gap-2'>
                    <label className='text-sm font-medium text-gray-300'>College/University</label>
                    <input 
                      type="text" 
                      {...register(`education.${index}.college`)} 
                      placeholder='e.g., Stanford University'
                      className='bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/15 focus:scale-[1.02]' 
                    />
                    {errors.education?.[index]?.college?.message && (
                      <p className='text-red-400 text-sm flex items-center gap-1'>
                        <span>⚠️</span>
                        {errors.education?.[index]?.college?.message}
                      </p>
                    )}
                  </div>
                  
                  <div className='flex flex-col gap-2'>
                    <label className='text-sm font-medium text-gray-300'>Duration</label>
                    <input 
                      type="text" 
                      {...register(`education.${index}.duration`)} 
                      placeholder='e.g., 2015 - 2019'
                      className='bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/15 focus:scale-[1.02]' 
                    />
                    {errors.education?.[index]?.duration?.message && (
                      <p className='text-red-400 text-sm flex items-center gap-1'>
                        <span>⚠️</span>
                        {errors.education?.[index]?.duration?.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            <button 
              type='button' 
              onClick={() => educationAppend({ degree: '', college: '', duration: '' })} 
              className='w-full bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold py-3.5 sm:py-3 px-6 rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-base sm:text-base touch-manipulation'
            >
              <span className='text-xl'>➕</span>
              <span>Add Another Education</span>
            </button>
          </div>
        </div>
        {/* Skills Section */}
        <div className='mb-10'>
          <h2 className='text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white flex items-center gap-2 sm:gap-3'>
            <span className='text-2xl sm:text-3xl'>⚡</span>
            Skills
          </h2>
          
          <div className='flex flex-col gap-6'>
            {skillsFields.map((field, index) => (
              <div key={field.id} className='bg-white/5 backdrop-blur-sm rounded-2xl p-2 py-6 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300'>
                <div className='flex items-center justify-between mb-4'>
                  <h3 className='text-base sm:text-lg font-semibold text-white'>Skill {index + 1}</h3>
                  {skillsFields.length > 1 && (
                    <button 
                      type='button' 
                      onClick={() => skillsRemove(index)} 
                      className='text-red-400 hover:text-red-300 transition-colors flex items-center gap-2 text-sm font-medium'
                    >
                      <span>🗑️</span>
                      Remove
                    </button>
                  )}
                </div>
                
                <div className='grid grid-cols-1 gap-3 sm:gap-4'>
                  <div className='flex flex-col gap-2'>
                    <label className='text-sm font-medium text-gray-300'>Skill Name</label>
                    <input 
                      type="text" 
                      {...register(`skills.${index}.name`)} 
                      placeholder='e.g., JavaScript, Python, Design'
                      className='bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/15 focus:scale-[1.02]' 
                    />
                    {errors.skills?.[index]?.name?.message && (
                      <p className='text-red-400 text-sm flex items-center gap-1'>
                        <span>⚠️</span>
                        {errors.skills?.[index]?.name?.message}
                      </p>
                    )}
                  </div>
                  
                  <div className='flex flex-col gap-2'>
                    <label className='text-sm font-medium text-gray-300'>Proficiency Level</label>
                    <select 
                      {...register(`skills.${index}.level`)} 
                      className='bg-white/10 border border-white/20 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/15 focus:scale-[1.02] text-base'
                    >
                      <option value="beginner" className='bg-gray-800'>Beginner</option>
                      <option value="intermediate" className='bg-gray-800'>Intermediate</option>
                      <option value="advanced" className='bg-gray-800'>Advanced</option>
                    </select>
                    {errors.skills?.[index]?.level?.message && (
                      <p className='text-red-400 text-sm flex items-center gap-1'>
                        <span>⚠️</span>
                        {errors.skills?.[index]?.level?.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            <button 
              type='button' 
              onClick={() => skillsAppend({ name: '', level: 'beginner' })} 
              className='w-full bg-linear-to-r from-orange-500 to-amber-500 text-white font-semibold py-3.5 sm:py-3 px-6 rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-base sm:text-base touch-manipulation'
            >
              <span className='text-xl'>➕</span>
              <span>Add Another Skill</span>
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className='w-full bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 text-white font-semibold py-4 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 text-base sm:text-lg group touch-manipulation'
        >
          <span>Generate Resume</span>
          <span className='text-2xl group-hover:translate-x-1 transition-transform'>🚀</span>
        </button>
      </form>
    </div>
  )
}

export default Home