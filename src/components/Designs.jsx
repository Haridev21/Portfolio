import { useEffect, useState } from 'react'
import { Palette, ArrowUpRight, Github } from 'lucide-react'

const designs = [
  {
    id: 1,
    title: 'Recipe App – UI Design',
    tags: ['Figma', 'UI Design', 'Mobile'],
    description:
      'Mobile recipe app UI. Designed splash, login, register, forgot password, OTP verification and home screens. UI design only, not developed.',
    images: [
      { src: '/designs/recipe/splash.png', alt: 'Recipe app splash screen' },
      { src: '/designs/recipe/login.png', alt: 'Recipe app login screen' },
      { src: '/designs/recipe/register.png', alt: 'Recipe app register screen' },
      { src: '/designs/recipe/forgot.png', alt: 'Recipe app forgot password screen' },
      { src: '/designs/recipe/verify.png', alt: 'Recipe app OTP verification screen' },
      { src: '/designs/recipe/home.png', alt: 'Recipe app home screen' },
    ],
    figmaUrl: 'https://www.figma.com/design/4tSEskAi5bLVCNSu5vwfWw/Recipe?node-id=4-514&t=ULMc0X5cvqpgzDN9-1',
    prototypeUrl: '',
    codeUrl: '',
    imageStyle: 'phone',
    gridCols: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6',
  },
  {
    id: 2,
    title: 'Poster Designs',
    tags: ['Figma', 'Visual Design'],
    description: 'Poster and visual design work created in Figma.',
    images: [
      { src: '/designs/posters/poster1.png', alt: 'Poster design 1' },
      { src: '/designs/posters/poster2.png', alt: 'Poster design 2' },
      { src: '/designs/posters/poster3.png', alt: 'Poster design 3' },
      { src: '/designs/posters/poster4.png', alt: 'Poster design 4' },
    ],
    figmaUrl: 'https://www.figma.com/design/oxBGYH5nWBSdWeKTlgLakp/tinkerhubday3poster?node-id=0-1&t=IkMw97HEqzKafxBD-1',
    prototypeUrl: '',
    codeUrl: '',
    imageStyle: 'poster',
    gridCols: 'grid-cols-2 md:grid-cols-4',
  },
  {
    id: 3,
    title: 'Rail-Wallah – App UI',
    tags: ['Flutter', 'Shipped UI'],
    description:
      'Screens of Rail-Wallah, designed and built directly in Flutter. Covers PNR tracking, train schedules, complaints and 3D station navigation.',
    images: [
      { src: '/designs/railwallah/screen2.jpeg', alt: 'Rail-Wallah home screen', caption: 'Home' },
      { src: '/designs/railwallah/router2.jpeg', alt: 'Rail-Wallah route details screen', caption: 'Route details' },
      { src: '/designs/railwallah/screen3.jpeg', alt: 'Rail-Wallah train timeline screen', caption: 'Train timeline' },
      { src: '/designs/railwallah/screen7.jpeg', alt: 'Rail-Wallah 3D station mapping screen', caption: '3D station mapping' },
    ],
    figmaUrl: '',
    prototypeUrl: '',
    codeUrl: 'https://github.com/Haridev21/rail-wallah',
    imageStyle: 'phone',
    gridCols: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
  },
]

// Tracks which image wrappers have errored so we can hide them
const DesignGallery = ({ images, imageStyle, gridCols }) => {
  const [hiddenIndexes, setHiddenIndexes] = useState([])

  const handleError = (i) => {
    setHiddenIndexes((prev) => prev.includes(i) ? prev : [...prev, i])
  }

  const visibleImages = images.filter((_, i) => !hiddenIndexes.includes(i))
  if (visibleImages.length === 0) return null

  const aspectClass = imageStyle === 'poster' ? 'aspect-[3/4]' : 'aspect-[9/19.5]'

  return (
    <div className="mt-6 bg-slate-50 rounded-xl p-4 md:p-5">
      <div className={`grid gap-3 ${gridCols}`}>
        {images.map((img, i) => {
          if (hiddenIndexes.includes(i)) return null
          return (
            <div key={i} className="flex flex-col gap-1">
              <a
                href={img.src}
                target="_blank"
                rel="noopener noreferrer"
                className={`block ${aspectClass} rounded-xl overflow-hidden border border-slate-200 bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  onError={() => handleError(i)}
                  className="w-full h-full object-contain"
                />
              </a>
              {img.caption && (
                <p className="text-center text-[11px] text-slate-500 font-medium">{img.caption}</p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

const Designs = () => {
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

    const designCards = document.querySelectorAll('.design-card')
    designCards.forEach((card) => observer.observe(card))

    return () => {
      designCards.forEach((card) => observer.unobserve(card))
    }
  }, [])

  return (
    <section id="designs" className="section-padding relative bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-6">
            <Palette className="w-4 h-4 text-slate-500" />
            <span className="text-sm text-slate-600 font-medium">Design Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-slate-900">UI/UX &amp;</span>
            <span className="block text-slate-600 mt-2">Visual Design</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            A selection of UI/UX and visual design projects crafted in Figma and Flutter.
          </p>
        </div>

        {/* Project cards – full width, stacked */}
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-8">
          {designs.map((design) => (
            <div
              key={design.id}
              className="design-card opacity-0 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 hover:border-slate-300 hover:shadow-md transition-all duration-300"
            >
              {/* Top row: title/desc left, tags/buttons right */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-2">
                {/* Left: icon + title + description */}
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Palette className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <h3 className="text-lg font-semibold text-slate-900">
                      {design.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-2xl">
                    {design.description}
                  </p>
                </div>

                {/* Right: tags + action buttons */}
                <div className="flex flex-col gap-3 md:items-end flex-shrink-0">
                  {/* Tags */}
                  {design.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {design.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-[11px] font-medium text-blue-700 bg-blue-50 rounded-full border border-blue-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action buttons */}
                  <div className="flex flex-wrap gap-2">
                    {design.figmaUrl && (
                      <a
                        href={design.figmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-700 bg-blue-50 border border-blue-100 rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        <ArrowUpRight className="w-3 h-3" />
                        View in Figma
                      </a>
                    )}
                    {design.prototypeUrl && (
                      <a
                        href={design.prototypeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-lg hover:bg-emerald-100 transition-colors"
                      >
                        <ArrowUpRight className="w-3 h-3" />
                        View prototype
                      </a>
                    )}
                    {design.codeUrl && (
                      <a
                        href={design.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 border border-slate-200 rounded-lg hover:bg-slate-200 transition-colors"
                      >
                        <Github className="w-3 h-3" />
                        View code
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Gallery panel */}
              <DesignGallery
                images={design.images}
                imageStyle={design.imageStyle}
                gridCols={design.gridCols}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Designs
