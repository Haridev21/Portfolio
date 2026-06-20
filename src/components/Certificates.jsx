import { useState, useEffect, useRef } from 'react'
import {
  Award,
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Users,
  Compass,
  Briefcase,
  ExternalLink
} from 'lucide-react'

const certificates = [
  {
    id: 1,
    title: 'Artificial Intelligence & Automation Workshop',
    subtitle: 'Organized by Neurobots | Global Robotics Championship 2026',
    image: '/certificate/1.png',
    details: [
      'Participated in an intensive, hands-on workshop hosted at IIT Palakkad focusing on modern AI concepts, neural network frameworks, and practical applications in robotics.',
      'Gained key technical insights into advanced automation technologies and the evolving landscape of robotics.'
    ],
    date: 'January 17, 2026',
    location: 'IIT Palakkad',
    icon: <Compass className="w-5 h-5 text-purple-500" />,
    tags: ['Artificial Intelligence', 'Robotics', 'Automation']
  },
  {
    id: 2,
    title: 'AI SAMASYA — 24-Hour State Hackathon',
    subtitle: 'IHRD & Dept. of Higher Education, Govt. of Kerala',
    image: '/certificate/2.jpeg',
    details: [
      'Developed innovative Generative AI solutions under a strict 24-hour time constraint during a state-level competitive hackathon.',
      'Created solutions at Kanakakkunnu Palace as part of the International Conclave on Generative AI and The Future of Education 2.0 (edu@ai 24).'
    ],
    date: 'December 10, 2024',
    location: 'Thiruvananthapuram, Kerala',
    icon: <Award className="w-5 h-5 text-indigo-500" />,
    tags: ['Generative AI', 'Hackathon', 'State Level']
  },
  {
    id: 3,
    title: 'Tech Thrive — 24-Hour Intercollegiate Hackathon',
    subtitle: 'RIT Kottayam | UDYAMA 1.0 Industry-Academia Conclave',
    image: '/certificate/3.jpg',
    details: [
      'Collaborated as a core developer of team EcoCoders in an intensive 24-hour intercollegiate coding competition.',
      'Architected and pitched a software prototype targeting industrial and academic collaboration challenges.'
    ],
    date: 'February 27–28, 2025',
    location: 'Rajiv Gandhi Institute of Technology',
    icon: <Users className="w-5 h-5 text-blue-500" />,
    tags: ['Hackathon', 'Team EcoCoders', 'Intercollegiate']
  },
  {
    id: 4,
    title: 'Bharatiya Antariksh Space Hackathon',
    subtitle: 'ISRO (Indian Space Research Organisation) & Hack2Skill',
    image: '/certificate/4.png',
    details: [
      'Formulated and submitted a high-potential technological idea solving complex challenges in space engineering.',
      'Selected to contribute innovative solutions toward India\'s national space innovation framework.'
    ],
    date: '2025',
    location: 'Online / National',
    icon: <Compass className="w-5 h-5 text-sky-500" />,
    tags: ['Space Tech', 'Hackathon', 'ISRO']
  },
  {
    id: 5,
    title: 'Neurobots Robotics Hackathon',
    subtitle: 'Global Robotics Championship 2026 | IIT Palakkad',
    image: '/certificate/5.png',
    details: [
      'Competed in a fast-paced hardware-software integration hackathon as a key member of team ALPHA ZERO.',
      'Designed and coded autonomous behaviors for automated robots under competitive championship pressure.'
    ],
    date: 'January 17, 2026',
    location: 'IIT Palakkad',
    icon: <Users className="w-5 h-5 text-emerald-500" />,
    tags: ['Robotics', 'Team ALPHA ZERO', 'Championship']
  },
  {
    id: 6,
    title: 'Hack.Net Hackathon — First Position',
    subtitle: 'Computer Science Association & Skill Dev Centre, RIT Kottayam',
    image: '/certificate/6.png',
    details: [
      'Secured First Place out of numerous engineering teams, demonstrating exceptional software construction and problem-solving.',
      'Completed this achievement during the fifth academic semester, showcasing strong software architecture principles under pressure.'
    ],
    date: 'August 6, 2025',
    location: 'RIT Kottayam',
    icon: <Award className="w-5 h-5 text-amber-500" />,
    tags: ['🏆 Winner', 'First Place', 'Hackathon', 'Semester 5']
  },
  {
    id: 8,
    title: 'Full Stack Developer Internship (Zoeverse Tech)',
    subtitle: 'Zoeverse Tech (Zoe Verse Tech)',
    image: '/certificate/8.jpg',
    details: [
      'Completed a one-month intensive full-stack internship building responsive consumer-facing applications.',
      'Developed responsive UI pages using React and built underlying APIs using Node.js, Express.js, and MongoDB.'
    ],
    date: 'March 2026',
    location: 'Remote',
    icon: <Briefcase className="w-5 h-5 text-rose-500" />,
    tags: ['MERN Stack', 'React', 'Node.js', 'Internship']
  }
]

const Certificates = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const autoplayTimerRef = useRef(null)

  const transitionToSlide = (nextIndex) => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentSlide(nextIndex)
      setIsAnimating(false)
    }, 500)
  }

  const handleNext = () => {
    const nextIndex = (currentSlide + 1) % certificates.length
    transitionToSlide(nextIndex)
  }

  const handlePrev = () => {
    const prevIndex = (currentSlide - 1 + certificates.length) % certificates.length
    transitionToSlide(prevIndex)
  }

  const handleDotClick = (index) => {
    if (index === currentSlide) return
    transitionToSlide(index)
  }

  // Cycle through certificates every 5.5 seconds (resets timer on slide change)
  useEffect(() => {
    if (isAutoplayPaused || isLightboxOpen) {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current)
      return
    }

    autoplayTimerRef.current = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentSlide((prevIndex) => (prevIndex + 1) % certificates.length)
        setIsAnimating(false)
      }, 500)
    }, 5500)

    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current)
    }
  }, [isAutoplayPaused, isLightboxOpen, currentSlide])

  // Reset opacity intersection animations
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

    const sectionEl = document.querySelector('#certificates')
    if (sectionEl) observer.observe(sectionEl)

    return () => {
      if (sectionEl) observer.unobserve(sectionEl)
    }
  }, [])

  const activeCert = certificates[currentSlide]

  return (
    <section id="certificates" className="section-padding relative bg-slate-50 border-t border-b border-slate-100 opacity-0 transition-opacity duration-1000">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-sm border border-slate-100">
            <Award className="w-4 h-4 text-slate-500" />
            <span className="text-sm text-slate-600 font-medium">Achievements</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-slate-900">Certificates &</span>
            <span className="block text-slate-600 mt-2">Milestones</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-5xl mx-auto bg-white rounded-3xl border border-slate-200/60 shadow-lg shadow-slate-100/40 overflow-hidden"
          onMouseEnter={() => setIsAutoplayPaused(true)}
          onMouseLeave={() => setIsAutoplayPaused(false)}
        >
          {/* Split Slide Content */}
          <div className="grid lg:grid-cols-12 gap-0 min-h-[480px]">
            {/* Left Column: Interactive Image Frame */}
            <div className="lg:col-span-5 relative bg-slate-950 flex items-center justify-center p-6 sm:p-10 group overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-100 min-h-[350px] lg:min-h-[440px]">
              {/* Certificate Image Frame containing all images for crossfade transition */}
              <div className="relative w-full h-[280px] sm:h-[320px] lg:h-[380px] flex items-center justify-center rounded-lg overflow-hidden">
                {certificates.map((cert, index) => {
                  const isActive = index === currentSlide
                  return (
                    <img
                      key={cert.id}
                      src={cert.image}
                      alt={cert.title}
                      onClick={() => {
                        if (isActive && !isAnimating) {
                          setIsLightboxOpen(true)
                        }
                      }}
                      className={`absolute max-w-[90%] max-h-full w-auto object-contain rounded-lg shadow-2xl transition-all duration-1000 ease-in-out ${
                        isActive
                          ? isAnimating
                            ? 'opacity-0 scale-110 blur-sm z-10'
                            : 'opacity-100 scale-100 blur-0 z-20 cursor-zoom-in'
                          : 'opacity-0 scale-95 blur-sm z-0 pointer-events-none'
                      }`}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1589330694653-ded6df53f7ec?auto=format&fit=crop&q=80&w=800";
                      }}
                    />
                  )
                })}

                {/* Image Overlay Hover Cue */}
                <div
                  onClick={() => {
                    if (!isAnimating) setIsLightboxOpen(true)
                  }}
                  className={`absolute inset-0 bg-slate-950/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-zoom-in z-30 rounded-lg ${
                    isAnimating ? 'pointer-events-none !opacity-0' : ''
                  }`}
                >
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 text-slate-900 text-xs font-semibold shadow-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                    Expand Certificate
                  </div>
                </div>
              </div>

              {/* Index indicator */}
              <span className="absolute bottom-4 left-6 text-xs font-mono text-slate-500">
                {(currentSlide + 1).toString().padStart(2, '0')} / {certificates.length.toString().padStart(2, '0')}
              </span>
            </div>

            {/* Right Column: Explanations */}
            <div
              className={`lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between bg-white transition-all duration-500 ease-in-out ${
                isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
              }`}
            >
              <div>
                {/* Header Subtitle / Icon Row */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                    {activeCert.icon}
                  </div>
                  <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                    Credential No. {activeCert.id}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 leading-tight mb-2">
                  {activeCert.title}
                </h3>

                {/* Subtitle */}
                <p className="text-[15px] font-medium text-blue-600 mb-6">
                  {activeCert.subtitle}
                </p>

                {/* Details List */}
                <ul className="space-y-3 mb-8">
                  {activeCert.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      <p className="text-[14px] leading-relaxed text-slate-600">
                        {detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Section */}
              <div className="pt-6 border-t border-slate-100">
                {/* Metadata Row */}
                <div className="flex flex-wrap gap-y-3 gap-x-6 mb-5 text-[13px] text-slate-500 font-medium">
                  {activeCert.date && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span>{activeCert.date}</span>
                    </div>
                  )}
                  {activeCert.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-slate-400" />
                      <span>{activeCert.location}</span>
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {activeCert.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[11px] font-medium text-slate-600 bg-slate-50 border border-slate-200/60 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls: Arrows */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 border border-slate-200/60 flex items-center justify-center text-slate-600 shadow-md hover:bg-slate-50 hover:text-slate-900 active:scale-95 transition-all duration-200 z-20 group"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 border border-slate-200/60 flex items-center justify-center text-slate-600 shadow-md hover:bg-slate-50 hover:text-slate-900 active:scale-95 transition-all duration-200 z-20 group"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-6 bg-slate-800' : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-sm p-4 animate-fadeIn">
          {/* Close button on backdrop click */}
          <div className="absolute inset-0 cursor-zoom-out" onClick={() => setIsLightboxOpen(false)} />

          {/* Modal content */}
          <div className="relative max-w-4xl max-h-[90vh] flex flex-col items-center justify-center z-10">
            {/* Top Close Bar */}
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute -top-12 right-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors duration-200"
            >
              <X className="w-4 h-4" />
              Close
            </button>

            {/* High-res Image */}
            <img
              src={activeCert.image}
              alt={activeCert.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border border-white/10 animate-scaleUp"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1589330694653-ded6df53f7ec?auto=format&fit=crop&q=80&w=800";
              }}
            />

            {/* Title display inside Lightbox */}
            <div className="mt-4 text-center text-white/95">
              <h4 className="text-[15px] font-semibold">{activeCert.title}</h4>
              <p className="text-[13px] text-white/60">{activeCert.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Certificates
