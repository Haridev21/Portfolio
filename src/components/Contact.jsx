import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, MapPin, Phone, Github, Linkedin, MessageCircle, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'

// ─── EmailJS Credentials ────────────────────────────────────────────────────
// Replace these three values with your real EmailJS credentials:
// 1. Go to https://dashboard.emailjs.com → Email Services → your service → copy Service ID
// 2. Go to Email Templates → your template → copy Template ID
// 3. Go to Account → General → copy Public Key
const EMAILJS_SERVICE_ID  = 'service_80l2xdd'
const EMAILJS_TEMPLATE_ID = 'template_3t5dmll'
const EMAILJS_PUBLIC_KEY  = 'dZ4zpTdYNGJj-LcyK'
// ────────────────────────────────────────────────────────────────────────────

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null
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
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Fetch the sender's public IP address
      let ipAddress = 'Unknown'
      try {
        const ipRes = await fetch('https://api.ipify.org?format=json')
        const ipData = await ipRes.json()
        ipAddress = ipData.ip
      } catch {
        // IP fetch failed silently — still send the email
      }

      // Send email via EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          ip_address: ipAddress,
          sent_at: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setErrors({})

      // Auto-clear success message after 6 seconds
      setTimeout(() => setSubmitStatus(null), 6000)
    } catch (error) {
      console.error('EmailJS error:', error)
      console.error('EmailJS error status:', error?.status)
      console.error('EmailJS error text:', error?.text)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
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
                <div className="group flex items-start gap-4 p-6 clean-card rounded-2xl">
                  <div className="p-3 bg-slate-100 rounded-xl group-hover:bg-slate-200 transition-colors">
                    <Mail className="text-slate-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                    <a
                      href="mailto:haridevm84@gmail.com"
                      className="text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      haridevm84@gmail.com
                    </a>
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
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 bg-white border rounded-xl focus:outline-none focus:ring-2 transition-all resize-none ${
                    errors.message
                      ? 'border-red-300 focus:ring-red-200 focus:border-red-400'
                      : 'border-slate-200 focus:border-blue-500 focus:ring-blue-200'
                  } text-slate-900 placeholder-slate-400`}
                  placeholder="Your message here..."
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group px-8 py-4 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 disabled:cursor-not-allowed text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </>
                )}
              </button>

              {/* Success Banner */}
              {submitStatus === 'success' && (
                <div className="flex items-start gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-xl animate-fadeIn">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-emerald-800">Message sent successfully!</p>
                    <p className="text-xs text-emerald-700 mt-0.5">I'll get back to you at your email address soon.</p>
                  </div>
                </div>
              )}

              {/* Error Banner */}
              {submitStatus === 'error' && (
                <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl animate-fadeIn">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-red-800">Failed to send message.</p>
                    <p className="text-xs text-red-700 mt-0.5">Please try again or email me directly at haridevm84@gmail.com</p>
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
