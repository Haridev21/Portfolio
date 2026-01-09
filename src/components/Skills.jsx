import { useEffect } from 'react'
import { Code2, Database, Cloud, Smartphone, Settings, Shield } from 'lucide-react'

const Skills = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0')
            entry.target.classList.add('fade-in-up')
          }
        })
      },
      { threshold: 0.1 }
    )

    const skillCategories = document.querySelectorAll('.skill-category')
    skillCategories.forEach((category) => observer.observe(category))

    return () => {
      skillCategories.forEach((category) => observer.unobserve(category))
    }
  }, [])

  const skillCategories = [
    {
      id: 'mobile',
      title: 'Mobile Development',
      icon: <Smartphone className="text-purple-500" size={28} />,
      skills: [
        { name: 'Flutter', level: 85 },
        { name: 'Dart', level: 85 },
        { name: 'Android', level: 75 },
        { name: 'Java', level: 75 },
      ],
    },
    {
      id: 'database',
      title: 'Databases',
      icon: <Database className="text-indigo-500" size={28} />,
      skills: [
        { name: 'SQLite', level: 80 },
        { name: 'MySQL', level: 80 },
        { name: 'Firebase', level: 85 },
        { name: 'Supabase', level: 75 },
      ],
    },
    {
      id: 'programming',
      title: 'Programming Languages',
      icon: <Code2 className="text-blue-500" size={28} />,
      skills: [
        { name: 'Python', level: 85 },
        { name: 'Java', level: 75 },
        { name: 'C', level: 80 },
        { name: 'JavaScript', level: 80 },
      ],
    },
    {
      id: 'web',
      title: 'Web Development',
      icon: <Cloud className="text-pink-500" size={28} />,
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'Flask', level: 75 },
      ],
    },
    {
      id: 'ml',
      title: 'Machine Learning',
      icon: <Settings className="text-green-500" size={28} />,
      skills: [
        { name: 'scikit-learn', level: 80 },
        { name: 'pandas', level: 85 },
        { name: 'XGBoost', level: 80 },
        { name: 'SVM', level: 75 },
        { name: 'SHAP', level: 75 },
      ],
    },
    {
      id: 'iot',
      title: 'IoT & Embedded',
      icon: <Settings className="text-orange-500" size={28} />,
      skills: [
        { name: 'Arduino', level: 85 },
        { name: 'Serial Communication', level: 80 },
        { name: 'Embedded Systems', level: 80 },
      ],
    },
    {
      id: 'tools',
      title: 'Tools & APIs',
      icon: <Cloud className="text-slate-600" size={28} />,
      skills: [
        { name: 'Git', level: 90 },
        { name: 'GitHub', level: 90 },
        { name: 'OpenWeather API', level: 75 },
        { name: 'Flask', level: 75 },
      ],
    },
  ]

  return (
    <section id="skills" className="section-padding relative bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-6">
            <Shield className="w-4 h-4 text-slate-600" />
            <span className="text-sm text-slate-600 font-medium">Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-slate-900">Technical</span>
            <span className="block text-slate-600 mt-2">Skills</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive overview of technologies and tools I work with
          </p>
        </div>

        {/* Clean Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="skill-category opacity-0 clean-card rounded-2xl p-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-slate-100 rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-5">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-700 font-medium text-sm">{skill.name}</span>
                      <span className="text-slate-500 text-xs font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
