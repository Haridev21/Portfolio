import { useState, useEffect, useRef } from 'react'
import { Mail, MapPin, Phone, Github, Linkedin, MessageCircle, ArrowRight, CheckCircle, Copy, Check, ExternalLink } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitStatus, setSubmitStatus] = useState(null) // 'gmail' | 'mailto' | null
  const [copied, setCopied] = useState(false)
  const contactRef = useRef(null)

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

    if (contactRef.current) {
      observer.observe(contactRef.current)
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current)
      }
    }
  }, [])

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 5) {
      newErrors.message = 'Message must be at least 5 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const getEmailData = () => {
    const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`)
    const body = encodeURIComponent(
      `Hi Haridev,\n\n${formData.message}\n\n---\nFrom: ${formData.name}\nEmail: ${formData.email}`
    )
    return { subject, body }
  }

  const handleSendGmail = (e) => {
    if (e) e.preventDefault()
    if (!validateForm()) return

    const { subject, body } = getEmailData()
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=haridevm84@gmail.com&su=${subject}&body=${body}`
    window.open(gmailUrl, '_blank')

    setSubmitStatus('gmail')
    setTimeout(() => setSubmitStatus(null), 6000)
  }

  const handleSendMailto = (e) => {
    if (e) e.preventDefault()
    if (!validateForm()) return

    const { subject, body } = getEmailData()
    window.location.href = `mailto:haridevm84@gmail.com?subject=${subject}&body=${body}`

    setSubmitStatus('mailto')
    setTimeout(() => setSubmitStatus(null), 6000)
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('haridevm84@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={24} />,
      url: 'https://github.com/Haridev21',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      url: 'https://www.linkedin.com/in/haridevm/',
    },
  ]

  return (
    <section id="contact" ref={contactRef} className="section-padding relative bg-slate-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
            <MessageCircle className="w-4 h-4 text-slate-600" />
            <span className="text-sm text-slate-600 font-medium">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-slate-900">Let's Work</span>
            <span className="block text-slate-600 mt-2">Together</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out! I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-display font-bold mb-8 text-slate-900">Contact Information</h3>
              <div className="space-y-4">
                {/* Email Card with direct Gmail link and Copy */}
                <div className="group flex items-start gap-4 p-6 clean-card rounded-2xl">
                  <div className="p-3 bg-slate-100 rounded-xl group-hover:bg-slate-200 transition-colors">
                    <Mail className="text-slate-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                    <div className="flex flex-wrap items-center gap-2">
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=haridevm84@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 hover:text-blue-600 transition-colors font-medium text-sm inline-flex items-center gap-1"
                      >
                        haridevm84@gmail.com
                        <ExternalLink size={13} className="opacity-60" />
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="px-2 py-0.5 text-xs bg-slate-100 hover:bg-slate-200 rounded-md text-slate-600 transition-colors inline-flex items-center gap-1"
                        title="Copy to clipboard"
                        aria-label="Copy to clipboard"
                      >
                        {copied ? (
                          <>
                            <Check size={12} className="text-emerald-500" />
                            <span className="text-emerald-600 font-medium">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy size={12} />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-6 clean-card rounded-2xl">
                  <div className="p-3 bg-slate-100 rounded-xl group-hover:bg-slate-200 transition-colors">
                    <MapPin className="text-slate-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Location</h4>
                    <p className="text-slate-600">Karukachal, Kottayam, Kerala, India</p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-6 clean-card rounded-2xl">
                  <div className="p-3 bg-slate-100 rounded-xl group-hover:bg-slate-200 transition-colors">
                    <Phone className="text-slate-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Phone</h4>
                    <a
                      href="tel:+916282427885"
                      className="text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      +91 62824 27885
                    </a>
                  </div>
                </div>

                <div className="p-6 clean-card rounded-2xl">
                  <h4 className="font-semibold text-slate-900 mb-4">Social Media</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-slate-100 hover:bg-slate-200 rounded-xl text-slate-600 hover:text-slate-900 transition-all duration-300 transform hover:scale-110"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSendGmail} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                    errors.name
                      ? 'border-red-300 focus:ring-red-200 focus:border-red-400'
                      : 'border-slate-200 focus:border-blue-500 focus:ring-blue-200'
                  } text-slate-900 placeholder-slate-400`}
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                    errors.email
                      ? 'border-red-300 focus:ring-red-200 focus:border-red-400'
                      : 'border-slate-200 focus:border-blue-500 focus:ring-blue-200'
                  } text-slate-900 placeholder-slate-400`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white border rounded-xl focus:outline-none focus:ring-2 transition-all resize-none ${
                    errors.message
                      ? 'border-red-300 focus:ring-red-200 focus:border-red-400'
                      : 'border-slate-200 focus:border-blue-500 focus:ring-blue-200'
                  } text-slate-900 placeholder-slate-400`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              {/* Action Buttons: Gmail Primary + Default Mail Client Secondary */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleSendGmail}
                  className="flex-1 group px-6 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Mail size={18} />
                  Send via Gmail
                  <ExternalLink size={16} className="opacity-70 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={handleSendMailto}
                  className="px-6 py-4 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2"
                  title="Open in your default desktop or mobile mail app"
                >
                  Other Mail App
                </button>
              </div>

              {/* Direct Mail Shortcut */}
              <div className="text-center pt-1">
                <div className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                  <span>Direct email:</span>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=haridevm84@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-slate-700 hover:text-blue-600 transition-colors underline"
                  >
                    haridevm84@gmail.com
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1 hover:text-slate-700 text-slate-400 rounded transition-colors"
                    title="Copy address"
                    aria-label="Copy address"
                  >
                    {copied ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                  </button>
                </div>
              </div>

              {/* Feedback Banner */}
              {submitStatus && (
                <div className="flex items-start gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-xl animate-fadeIn">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-emerald-800">
                      {submitStatus === 'gmail' ? 'Opening Gmail compose window...' : 'Opening your mail client...'}
                    </p>
                    <p className="text-xs text-emerald-700 mt-0.5">
                      Your message has been pre-filled for <strong>haridevm84@gmail.com</strong>.
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
