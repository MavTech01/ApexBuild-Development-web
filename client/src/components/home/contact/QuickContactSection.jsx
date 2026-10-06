import { useState } from 'react'
import { Send, Check } from 'lucide-react'
import Container from '../../ui/Container.jsx'
import Input from '../../ui/Input.jsx'
import Textarea from '../../ui/Textarea.jsx'
import Button from '../../ui/Button.jsx'
import { useRevealOnScroll } from '../../../hooks/useRevealOnScroll.js'

export default function QuickContactSection() {
  const [ref, revealed] = useRevealOnScroll()
  const reveal = revealed ? 'animate-rise' : 'opacity-0 translate-y-4'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setStatus('submitting')

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log('Quick contact submitted:', formData)

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setErrors({})

      setTimeout(() => {
        setStatus('idle')
      }, 4000)
    } catch (error) {
      setStatus('error')
      setTimeout(() => {
        setStatus('idle')
      }, 4000)
    }
  }

  return (
    <section
      ref={ref}
      aria-labelledby="quick-contact-heading"
      className="relative overflow-hidden bg-gradient-to-br from-paper via-ivory/40 to-paper py-16 sm:py-20 lg:py-24"
    >
      {/* Radial Gradient Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgb(37_99_235/0.04),transparent_70%)]"
      />

      {/* Blueprint Grid Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15] [background-image:linear-gradient(to_right,rgb(37_99_235/0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgb(37_99_235/0.15)_1px,transparent_1px)] [background-size:40px_40px]"
      />

      {/* Floating Geometric Shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Circle - Top Left */}
        <div className="absolute -left-20 top-20 h-40 w-40 animate-float rounded-full border-2 border-blue-500/20 bg-blue-500/5" style={{ animationDelay: '0s', animationDuration: '8s' }} />

        {/* Square - Top Right */}
        <div className="absolute -right-16 top-32 h-32 w-32 animate-float rotate-12 border-2 border-blue-500/20 bg-blue-500/5" style={{ animationDelay: '1s', animationDuration: '10s' }} />

        {/* Triangle - Bottom Left */}
        <div className="absolute bottom-20 left-32 h-0 w-0 animate-float border-b-[60px] border-l-[30px] border-r-[30px] border-b-blue-500/20 border-l-transparent border-r-transparent opacity-40" style={{ animationDelay: '2s', animationDuration: '12s' }} />

        {/* Circle - Bottom Right */}
        <div className="absolute -bottom-10 -right-10 h-48 w-48 animate-float rounded-full border-2 border-blue-500/20 bg-blue-500/5" style={{ animationDelay: '1.5s', animationDuration: '9s' }} />

        {/* Small Circle - Center Right */}
        <div className="absolute right-1/4 top-1/3 h-24 w-24 animate-float rounded-full border-2 border-blue-500/15 bg-blue-500/5" style={{ animationDelay: '3s', animationDuration: '11s' }} />

        {/* Rectangle - Left Side */}
        <div className="absolute left-20 top-2/3 h-28 w-36 animate-float -rotate-6 border-2 border-blue-500/15 bg-blue-500/5" style={{ animationDelay: '2.5s', animationDuration: '10s' }} />
      </div>

      <Container size="default">
        <div className="mx-auto max-w-2xl text-center">
          <div className={reveal}>
            <p className="flex items-center justify-center gap-3 font-display text-xs font-semibold tracking-[0.18em] text-blue-700 uppercase">
              <span aria-hidden="true" className="h-px w-10 bg-blue-500" />
              Quick Contact
              <span aria-hidden="true" className="h-px w-10 bg-blue-500" />
            </p>
          </div>

          <h2
            id="quick-contact-heading"
            style={{ animationDelay: '90ms' }}
            className={`mt-6 font-display text-[2rem] leading-[1.08] font-semibold text-balance text-ink-950 sm:text-[2.5rem] lg:text-3xl ${reveal}`}
          >
            Have a Question?
          </h2>

          <p
            style={{ animationDelay: '180ms' }}
            className={`mt-4 text-base leading-relaxed text-ink-700 sm:text-lg ${reveal}`}
          >
            Drop us a quick message and we'll get back to you as soon as possible
          </p>
        </div>

        <div
          style={{ animationDelay: '270ms' }}
          className={`mx-auto mt-10 max-w-2xl ${reveal}`}
        >
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center rounded-xl border border-line bg-surface/50 p-12 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold text-ink-950">
                Message Sent!
              </h3>
              <p className="text-base text-ink-700">
                We'll get back to you shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-line bg-surface p-6 shadow-[0_2px_8px_rgb(0_0_0/0.04)] sm:p-8"
              noValidate
            >
              <div className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Input
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    required
                    placeholder="Your name"
                  />

                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <Textarea
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  required
                  rows={4}
                  placeholder="Tell us briefly what you need..."
                />

                <Button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full"
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </Container>
    </section>
  )
}
