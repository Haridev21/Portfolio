import { useEffect, useRef, useState } from 'react'
import { ArrowDown, Download } from 'lucide-react'

const Hero = () => {
  const heroRef = useRef(null)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    // Trigger animations for all elements with opacity-0 in Hero section
    setTimeout(() => {
      const elements = heroRef.current?.querySelectorAll('.opacity-0')
      elements?.forEach((el, index) => {
        setTimeout(() => {
          el.classList.remove('opacity-0')
          el.classList.add('fade-in-up')
        }, index * 100)
      })
    }, 100)
  }, [])

  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume/Resume.pdf'
    link.download = 'Haridev_M_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding bg-gradient-to-b from-slate-50 to-white"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content - Unique Asymmetric Layout */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-6 fade-in-up stagger-1">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-sm text-slate-600 font-medium">Available for opportunities</span>
            </div>

            {/* Main Heading - Unique Typography */}
            <div className="space-y-4 fade-in-up stagger-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight" style={{ color: '#0f172a' }}>
                <span className="block" style={{ color: '#0f172a' }}>Hello, I'm</span>
                <span className="block mt-2" style={{ color: '#0f172a' }}>Haridev M</span>
                <span className="block text-4xl md:text-5xl mt-4 font-normal" style={{ color: '#475569' }}>
                  Full Stack Developer
                </span>
              </h1>
            </div>

            <p className="text-lg md:text-xl max-w-2xl leading-relaxed fade-in-up stagger-3" style={{ color: '#475569' }}>
              Diploma graduate in Computer Science and Engineering, currently pursuing B.Tech in CSE. 
              Enthusiastic Flutter developer with knowledge in embedded systems, machine learning, 
              and integrating mobile apps with web platforms.
            </p>

            {/* CTA Buttons - Clean Design */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 fade-in-up stagger-4">
              <button
                onClick={scrollToAbout}
                className="group px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                View My Work
                <ArrowDown className="group-hover:translate-y-1 transition-transform" size={20} />
              </button>
              <button 
                onClick={handleDownloadResume}
                className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 hover:border-slate-300 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
              >
                <Download size={20} />
                Download Resume
              </button>
            </div>

            {/* Stats - Minimal Design */}
            <div className="flex flex-wrap gap-8 pt-12 border-t border-slate-200 fade-in-up">
              {[
                { label: 'Repositories', value: '21+' },
                { label: 'Technologies', value: '15+' },
                { label: 'Projects', value: '10+' },
              ].map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual - Profile Photo */}
          <div className="hidden lg:flex lg:col-span-5 items-center justify-center">
            <div className="relative w-full max-w-sm">
              {/* Clean card with profile photo */}
              <div className="clean-card p-3 relative overflow-hidden">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50 relative">
                  {!imageError ? (
                    <img
                      src="/images/photo_1.jpeg"
                      alt="Haridev M"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: '50% 20%' }}
                      onError={() => {
                        console.error('Profile image failed to load')
                        setImageError(true)
                      }}
                      onLoad={() => console.log('Profile image loaded in Hero section!')}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-50">
                      <div className="text-center">
                        <div className="text-7xl font-display font-bold text-slate-900 mb-2">
                          HM
                        </div>
                        <div className="text-sm text-slate-600">Haridev M</div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Decorative corner elements */}
                <div className="absolute top-2 right-2 w-12 h-12 border-t-2 border-r-2 border-slate-300 rounded-tr-xl" />
                <div className="absolute bottom-2 left-2 w-12 h-12 border-b-2 border-l-2 border-slate-300 rounded-bl-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Minimal */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider font-medium">Scroll</span>
          <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex items-start justify-center p-2 group-hover:border-slate-400">
            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  )
}

export default Hero
