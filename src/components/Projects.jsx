import { useEffect } from 'react'
import { Github, ArrowUpRight, FolderKanban, ExternalLink } from 'lucide-react'

// Language color mapping (matches GitHub's language colors)
const languageColors = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  Java: '#b07219',
  Dart: '#00B4AB',
  C: '#555555',
  'C++': '#f34b7d',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Makefile: '#427819',
  Shell: '#89e051',
  Kotlin: '#A97BFF',
  Swift: '#F05138',
  Go: '#00ADD8',
  Rust: '#dea584',
}

const projects = [
  {
    id: 1,
    name: 'Rail-Wallah – Railway Passenger Support System',
    description: 'Engineered a cross-platform mobile app (Flutter + Flask) providing unified access to PNR tracking, live train schedules, complaint management, and interactive 3D station navigation. Designed an Intelligent Route Finder using a Modified Dijkstra\'s Algorithm to compute optimal and fallback railway routes. Used Firebase Firestore with RapidAPI and ConfirmTkt integration for real-time data.',
    language: 'Dart',
    liveUrl: '',
    githubUrl: 'https://github.com/Haridev21/rail-wallah',
    topics: ['flutter', 'flask', 'firebase', 'rapidapi'],
  },
  {
    id: 2,
    name: 'Smart Environment Control System',
    description: 'Developed an Arduino and Flask-based monitoring system integrated with OpenWeather API. Built a real-time dashboard displaying environmental data and automated suggestions.',
    language: 'JavaScript',
    liveUrl: '',
    githubUrl: 'https://github.com/Haridev21/smart-environment-control-system',
    topics: ['arduino', 'flask', 'openweather-api', 'iot'],
  },
  {
    id: 3,
    name: 'Smart Door Lock System',
    description: 'Designed a Bluetooth-enabled smart door lock using Arduino Mega and HC-05. Developed a Flutter mobile application with Firebase Authentication for lock control.',
    language: 'Dart',
    liveUrl: '',
    githubUrl: 'https://github.com/Haridev21/SmartDoorLock_Application',
    topics: ['flutter', 'arduino', 'firebase', 'bluetooth'],
  },
]

const Projects = () => {
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

    const projectCards = document.querySelectorAll('.project-card')
    projectCards.forEach((card) => observer.observe(card))

    return () => {
      projectCards.forEach((card) => observer.unobserve(card))
    }
  }, [])

  return (
    <section id="projects" className="section-padding relative bg-slate-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-sm border border-slate-100">
            <FolderKanban className="w-4 h-4 text-slate-500" />
            <span className="text-sm text-slate-600 font-medium">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-slate-900">Featured</span>
            <span className="block text-slate-600 mt-2">Projects</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            A collection of projects showcasing my skills and passion for creating exceptional digital experiences.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card opacity-0 group block rounded-xl border border-slate-200 bg-white p-5 hover:border-slate-300 hover:shadow-md transition-all duration-300"
            >
              {/* Title Row */}
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2 min-w-0">
                  <Github className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <h3 className="text-[15px] font-semibold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                    {project.name}
                  </h3>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-all duration-300 flex-shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>

              {/* Description */}
              <p className="text-[13px] text-slate-500 leading-relaxed mb-4 line-clamp-3 min-h-[3.75rem]">
                {project.description}
              </p>

              {/* Topics */}
              {project.topics.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.topics.slice(0, 4).map((topic, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[11px] font-medium text-blue-700 bg-blue-50 rounded-full border border-blue-100"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}

              {/* Footer: Language, Live Demo */}
              <div className="flex items-center gap-4 pt-3 border-t border-slate-100">
                {project.language && (
                  <span className="flex items-center gap-1.5 text-xs text-slate-600">
                    <span
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{
                        backgroundColor: languageColors[project.language] || '#8b8b8b',
                      }}
                    />
                    {project.language}
                  </span>
                )}
                <span className="flex-1" />
                {project.liveUrl && project.liveUrl !== '#' && (
                  <span
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      window.open(project.liveUrl, '_blank')
                    }}
                    className="flex items-center gap-1 text-xs text-emerald-600 hover:text-emerald-700 font-medium cursor-pointer"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Demo
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>

        {/* View all on GitHub */}
        <div className="text-center mt-10">
          <a
            href="https://github.com/Haridev21?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-full hover:border-slate-300 hover:text-slate-900 hover:shadow-sm transition-all duration-300"
          >
            <Github className="w-4 h-4" />
            View all repositories
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
