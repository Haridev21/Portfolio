import { useEffect } from 'react'
import { Shield } from 'lucide-react'

// Technology icon URLs from devicons CDN
const techIcons = {
  // Programming Languages
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  'C': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  'Dart': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg',
  'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',

  // Mobile
  'Flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg',
  'Android': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg',

  // Databases
  'SQLite': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
  'Supabase': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',

  // Web
  'Flask': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg',
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',

  // ML / Data
  'scikit-learn': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg',
  'pandas': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg',
  'XGBoost': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  'NumPy': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg',

  // IoT
  'Arduino': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg',

  // Tools
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
  'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
  'Linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
}

const skillCategories = [
  {
    id: 'programming',
    title: 'Programming Languages',
    color: 'from-blue-500 to-cyan-400',
    skills: ['Python', 'Java', 'C', 'JavaScript', 'Dart'],
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    color: 'from-purple-500 to-pink-400',
    skills: ['Flutter', 'Dart', 'Android', 'Java'],
  },
  {
    id: 'web',
    title: 'Web Development',
    color: 'from-orange-500 to-rose-400',
    skills: ['HTML', 'CSS', 'JavaScript', 'Flask', 'React'],
  },
  {
    id: 'database',
    title: 'Databases',
    color: 'from-indigo-500 to-blue-400',
    skills: ['SQLite', 'MySQL', 'Firebase', 'Supabase'],
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    color: 'from-green-500 to-emerald-400',
    skills: ['scikit-learn', 'pandas', 'XGBoost', 'NumPy'],
  },
  {
    id: 'iot',
    title: 'IoT & Embedded',
    color: 'from-amber-500 to-yellow-400',
    skills: ['Arduino', 'Python', 'C'],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    color: 'from-slate-600 to-slate-400',
    skills: ['Git', 'GitHub', 'VS Code', 'Linux', 'Firebase'],
  },
]

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

    const skillCards = document.querySelectorAll('.skill-category')
    skillCards.forEach((card) => observer.observe(card))

    return () => {
      skillCards.forEach((card) => observer.unobserve(card))
    }
  }, [])

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

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <div
              key={category.id}
              className="skill-category opacity-0 clean-card rounded-2xl p-6 group hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${catIdx * 80}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-1.5 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
                <h3 className="text-lg font-display font-bold text-slate-900">{category.title}</h3>
              </div>

              {/* Skill Icons Grid */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skillName, index) => (
                  <div
                    key={`${category.id}-${skillName}-${index}`}
                    className="skill-icon-chip"
                    style={{ animationDelay: `${(catIdx * 80) + (index * 60)}ms` }}
                  >
                    <div className="skill-icon-wrapper">
                      {techIcons[skillName] ? (
                        <img
                          src={techIcons[skillName]}
                          alt={skillName}
                          className="w-7 h-7 object-contain"
                          loading="lazy"
                        />
                      ) : (
                        <span className="text-lg font-bold text-slate-400">
                          {skillName.charAt(0)}
                        </span>
                      )}
                    </div>
                    <span className="skill-icon-label">{skillName}</span>
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
