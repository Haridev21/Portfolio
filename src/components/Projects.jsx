import { useEffect } from 'react'
import { ExternalLink, Github, ArrowRight, FolderKanban } from 'lucide-react'

const Projects = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.remove('opacity-0')
              entry.target.classList.add('fade-in-up')
            }, index * 100)
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

  const projects = [
    {
      id: 1,
      title: 'Gender Differences in Dementia Prediction',
      description: 'Built gender-specific dementia prediction models using XGBoost and SVM on OASIS-1 and Kaggle datasets with 95% accuracy. Applied SHAP for model interpretability, identifying critical indicators like MMSE, SES, nWBV, Education, and Depression Status.',
      image: '🧠',
      technologies: ['Python', 'XGBoost', 'SVM', 'SHAP', 'scikit-learn', 'pandas'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Haridev21',
      featured: true,
    },
    {
      id: 2,
      title: 'Smart Environment Control System',
      description: 'Developed a smart college environment control system integrating Arduino sensors and OpenWeather API for real-time monitoring. Built Flask-based web UI visualizing temperature and light data with automated environmental suggestions.',
      image: '🌡️',
      technologies: ['Arduino', 'Flask', 'Python', 'OpenWeather API', 'IoT'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Haridev21',
      featured: false,
    },
    {
      id: 3,
      title: 'Smart Door Lock System',
      description: 'Designed a Bluetooth-enabled smart door lock using Arduino Mega and HC-05. Developed mobile app with Firebase authentication supporting real-time lock/unlock and password management with LCD feedback.',
      image: '🔐',
      technologies: ['Flutter', 'Arduino', 'Firebase', 'Bluetooth', 'C++'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Haridev21/SmartDoorLock_Application',
      featured: false,
    },
    {
      id: 4,
      title: 'Study Assistant Chatbot',
      description: 'Built an AI chatbot for KTU syllabus assistance using Flutter and integrated with Ollama on a local server. Designed features for summarization and Q&A, completed within an 18-hour hackathon (TinkerHub).',
      image: '🤖',
      technologies: ['Flutter', 'Dart', 'Ollama', 'AI', 'Natural Language Processing'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Haridev21',
      featured: false,
    },
    {
      id: 5,
      title: 'To-Do List App (Flutter)',
      description: 'Developed a cross-platform task management app using Flutter and Dart. Integrated SQLite for persistent storage with CRUD functionality, task categorization, and prioritization features.',
      image: '📋',
      technologies: ['Flutter', 'Dart', 'SQLite', 'Mobile Development'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Haridev21',
      featured: false,
    },
    {
      id: 6,
      title: 'RecipeQuest App',
      description: 'A mobile application for discovering and managing recipes. Currently working on this project to help users explore culinary delights with an intuitive interface.',
      image: '🍳',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Mobile Development'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Haridev21',
      featured: false,
    },
  ]

  return (
    <section id="projects" className="section-padding relative bg-slate-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
            <FolderKanban className="w-4 h-4 text-slate-600" />
            <span className="text-sm text-slate-600 font-medium">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-slate-900">Featured</span>
            <span className="block text-slate-600 mt-2">Projects</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A collection of projects showcasing my skills and passion for creating exceptional digital experiences
          </p>
        </div>

        {/* Unique Grid Layout - Asymmetric */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card opacity-0 clean-card rounded-2xl overflow-hidden ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              {/* Project Header */}
              <div
                className={`relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50 ${
                  project.featured ? 'h-64' : 'h-48'
                }`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className={`${
                      project.featured ? 'text-9xl' : 'text-7xl'
                    } transform group-hover:scale-110 transition-transform duration-500`}
                  >
                    {project.image}
                  </div>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-6 left-6 px-4 py-2 bg-white rounded-xl shadow-sm border border-slate-200">
                    <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-display font-bold mb-2 text-slate-900 group-hover:text-slate-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-100 text-xs text-slate-600 rounded-lg border border-slate-200 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors text-sm font-semibold group/link"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                    <ArrowRight className="group-hover/link:translate-x-1 transition-transform" size={14} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors text-sm font-semibold"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
