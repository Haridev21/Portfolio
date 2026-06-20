import { useEffect, useRef, useState } from 'react'
import { Download, Github, Linkedin } from 'lucide-react'

const About = () => {
  const aboutRef = useRef(null)
  const [imageError, setImageError] = useState(false)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  
  const photos = [
    '/images/photo_2.jpeg',
    '/images/photo_3.jpeg',
    '/images/photo_4.jpeg',
    '/images/photo_5.jpeg',
    '/images/photo_6.jpeg',
  ]

  // Cycle through photos every 5.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length)
        setIsAnimating(false)
      }, 500)
    }, 5500)

    return () => clearInterval(interval)
  }, [photos.length])

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current)
    }
  }, [])

  return (
    <section id="about" className="section-padding relative bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20" ref={aboutRef}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-6">
            <span className="text-sm text-slate-600 font-medium">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-slate-900">
            About
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Passionate developer building exceptional digital experiences
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Image Section */}
          <div className="opacity-0 order-2 lg:order-1" ref={(el) => {
            if (el) {
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
              observer.observe(el)
            }
          }}>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50 shadow-2xl">
                <div className="aspect-square relative">
                  {photos.map((photo, index) => (
                    <img
                      key={photo}
                      src={photo}
                      alt={`Haridev M ${index + 2}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                        index === currentPhotoIndex
                          ? isAnimating
                            ? 'opacity-0 scale-110 blur-sm'
                            : 'opacity-100 scale-100 blur-0 z-10'
                          : 'opacity-0 scale-95 blur-sm'
                      }`}
                      onError={(e) => {
                        console.error('Image failed to load:', e.target.src)
                        if (index === currentPhotoIndex) {
                          setImageError(true)
                        }
                      }}
                      onLoad={() => {
                        if (index === currentPhotoIndex) {
                          setImageError(false)
                        }
                      }}
                    />
                  ))}
                  {imageError && (
                    <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-50 z-20">
                      <div className="text-center">
                        <div className="text-7xl font-display font-bold text-slate-900 mb-2">
                          HM
                        </div>
                        <div className="text-sm text-slate-600">Haridev M</div>
                      </div>
                    </div>
                  )}
                  
                  {/* Photo indicator dots */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                    {photos.map((_, index) => (
                      <div
                        key={index}
                        className={`h-2 rounded-full transition-all duration-500 ease-in-out ${
                          index === currentPhotoIndex
                            ? 'w-8 bg-white shadow-lg'
                            : 'w-2 bg-white/40 hover:bg-white/60'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content Section */}
          <div className="space-y-8 order-1 lg:order-2 opacity-0" ref={(el) => {
            if (el) {
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
              observer.observe(el)
            }
          }}>
            {/* Description */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-xl text-slate-700 leading-relaxed">
                  Diploma graduate in Computer Science and Engineering, currently pursuing <span className="font-semibold text-slate-900">B.Tech in Computer Science and Engineering</span> at <span className="font-semibold text-slate-900">Rajiv Gandhi Institute of Technology, Kottayam</span>.
                </p>
                <p className="text-xl text-slate-700 leading-relaxed">
                  Enthusiastic Flutter developer with knowledge in embedded systems, machine learning, and full-stack development. Passionate about building practical projects and exploring innovative technologies.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button 
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = '/resume/Resume.pdf'
                  link.download = 'Haridev_M_Resume.pdf'
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
                className="group px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Download size={20} />
                Download Resume
              </button>
              
              <div className="flex items-center gap-4">
                <span className="text-sm text-slate-500 font-medium hidden sm:block">Connect:</span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/Haridev21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-100 hover:bg-slate-200 rounded-xl text-slate-700 hover:text-slate-900 transition-all duration-300 hover:scale-110 shadow-sm"
                    aria-label="GitHub"
                  >
                    <Github size={22} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/haridevm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-100 hover:bg-slate-200 rounded-xl text-slate-700 hover:text-slate-900 transition-all duration-300 hover:scale-110 shadow-sm"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={22} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
