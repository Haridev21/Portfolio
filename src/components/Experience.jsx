import { useEffect } from 'react'
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    id: 1,
    role: 'Intern',
    company: 'Indian Institute of Information Technology (IIIT) Kottayam',
    type: 'Internship',
    period: 'May 2025 – Jul 2025 · 3 mos',
    location: 'Kottayam, Kerala, India',
    mode: 'On-site',
    bullets: [
      'Developed machine learning models for dementia prediction.',
      'Performed data preprocessing and feature engineering tasks.',
      'Optimized models using hyperparameter tuning techniques.',
      'Applied SHAP for model explainability and analysis.',
      'Evaluated XGBoost and SVM model performance.',
      'Prepared research reports and technical documentation.',
      'Collaborated with researchers on healthcare data analysis.',
    ],
    tags: ['Machine Learning', 'XGBoost', 'SVM', 'SHAP'],
  },
  {
    id: 2,
    role: 'Software Development Intern (Flutter)',
    company: 'Spectrum Softtech Solutions Pvt. Ltd.',
    type: 'Internship',
    period: 'May 2023 · 1 mo',
    location: 'Kerala, India',
    mode: 'On-site',
    bullets: [
      'Developed cross-platform mobile applications using Flutter.',
      'Designed responsive user interfaces with Flutter widgets.',
      'Integrated Firebase Authentication for secure user access.',
      'Implemented SQLite database for local storage.',
      'Connected applications with REST API services.',
      'Worked with Flutter state management techniques.',
      'Tested applications and resolved functional issues.',
    ],
    tags: ['Flutter', 'Dart', 'Firebase', 'SQLite'],
  },
  {
    id: 3,
    role: 'Trainee Engineer',
    company: 'Networkz Systems',
    type: 'Internship',
    period: 'May 2022 · 1 mo',
    location: 'Kerala, India',
    mode: 'On-site',
    bullets: [
      'Assisted in embedded systems development projects.',
      'Built Arduino-based hardware automation prototypes.',
      'Programmed microcontrollers using Arduino IDE.',
      'Integrated hardware components with Python applications.',
      'Tested electronic circuits and hardware functionality.',
      'Debugged hardware and software integration issues.',
      'Supported project documentation and technical reporting.',
    ],
    tags: ['Arduino', 'Python', 'Embedded Systems'],
  },
]

const education = [
  {
    id: 1,
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science and Engineering',
    institution: 'Rajiv Gandhi Institute of Technology, Kottayam',
    period: 'Aug 2024 – 2027',
    note: 'Currently pursuing',
  },
  {
    id: 2,
    degree: 'Diploma',
    field: 'Computer Engineering',
    institution: 'MVGM Government Polytechnic College, Vennikulam',
    period: '2021 – 2024',
    note: 'CGPA: 8.57',
  },
]

const Experience = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.remove('opacity-0')
              entry.target.classList.add('fade-in-up')
            }, index * 80)
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = document.querySelectorAll('.exp-card')
    cards.forEach((card) => observer.observe(card))
    return () => { cards.forEach((card) => observer.unobserve(card)) }
  }, [])

  return (
    <section id="experience" className="section-padding relative bg-slate-50">
      <div className="container-custom">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-sm border border-slate-100">
            <Briefcase className="w-4 h-4 text-slate-500" />
            <span className="text-sm text-slate-600 font-medium">Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-slate-900">Experience &amp;</span>
            <span className="block text-slate-600 mt-2">Education</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            My professional journey and academic background.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-16">

          {/* ---- Experience ---- */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Briefcase className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Experience</h3>
            </div>

            <div className="relative border-l-2 border-slate-200 pl-8 space-y-8">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[2.65rem] top-6 w-4 h-4 rounded-full bg-white border-2 border-blue-400 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  </div>

                  <div className="exp-card opacity-0 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 hover:border-slate-300 hover:shadow-md transition-all duration-300">
                    {/* Role + meta */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h4 className="text-base font-semibold text-slate-900">{exp.role}</h4>
                        <p className="text-sm font-medium text-blue-600 mt-0.5">{exp.company}</p>
                        <span className="inline-block mt-1 text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                          {exp.type}
                        </span>
                      </div>
                      <div className="flex flex-col gap-1 sm:items-end flex-shrink-0 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location} · {exp.mode}
                        </span>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2 mb-4">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-0.5 text-[11px] font-medium text-blue-700 bg-blue-50 rounded-full border border-blue-100">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ---- Education ---- */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-emerald-50 rounded-lg">
                <GraduationCap className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Education</h3>
            </div>

            <div className="relative border-l-2 border-slate-200 pl-8 space-y-8">
              {education.map((edu) => (
                <div key={edu.id} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[2.65rem] top-6 w-4 h-4 rounded-full bg-white border-2 border-emerald-400 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>

                  <div className="exp-card opacity-0 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 hover:border-slate-300 hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <h4 className="text-base font-semibold text-slate-900">{edu.degree}</h4>
                        <p className="text-sm text-slate-600 mt-0.5">{edu.field}</p>
                        <p className="text-sm font-medium text-emerald-600 mt-1">{edu.institution}</p>
                      </div>
                      <div className="flex flex-col gap-1.5 sm:items-end flex-shrink-0">
                        <span className="flex items-center gap-1 text-xs text-slate-500">
                          <Calendar className="w-3 h-3" />
                          {edu.period}
                        </span>
                        {edu.note && (
                          <span className="px-2 py-0.5 text-[11px] font-medium text-emerald-700 bg-emerald-50 rounded-full border border-emerald-100">
                            {edu.note}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience
