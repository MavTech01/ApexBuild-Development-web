import { useState } from 'react'
import { Send, Check, AlertCircle, Upload, X } from 'lucide-react'
import Input from '@/components/ui/Input.jsx'
import Textarea from '@/components/ui/Textarea.jsx'
import Select from '@/components/ui/Select.jsx'
import Button from '@/components/ui/Button.jsx'

const projectTypes = [
  { value: 'residential', label: 'Residential' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'industrial', label: 'Industrial' },
  { value: 'renovation', label: 'Renovation' },
  { value: 'other', label: 'Other' },
]

const budgetRanges = [
  { value: 'under-100k', label: 'Under $100,000' },
  { value: '100k-500k', label: '$100,000 - $500,000' },
  { value: '500k-1m', label: '$500,000 - $1,000,000' },
  { value: 'over-1m', label: 'Over $1,000,000' },
  { value: 'prefer-not-to-say', label: 'Prefer not to say' },
]

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
    privacyAccepted: false,
  })
  const [file, setFile] = useState(null)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us about your project'
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Please provide more details (at least 20 characters)'
    }

    if (!formData.privacyAccepted) {
      newErrors.privacyAccepted = 'You must accept the privacy policy'
    }

    if (file && file.size > 5 * 1024 * 1024) {
      newErrors.file = 'File size must be less than 5MB'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, file: 'File size must be less than 5MB' }))
        setFile(null)
      } else {
        setFile(selectedFile)
        setErrors((prev) => ({ ...prev, file: '' }))
      }
    }
  }

  const removeFile = () => {
    setFile(null)
    setErrors((prev) => ({ ...prev, file: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setStatus('submitting')

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log('Form submitted:', { ...formData, file })

      setStatus('success')
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        message: '',
        privacyAccepted: false,
      })
      setFile(null)
      setErrors({})

      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    } catch (error) {
      setStatus('error')
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    }
  }

  if (status === 'success') {
    return (
      <div className="flex min-h-[500px] flex-col items-center justify-center rounded-xl border border-line bg-surface/50 p-8 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="mb-2 font-display text-2xl font-semibold text-ink-950">
          Thank You!
        </h3>
        <p className="mb-6 max-w-md text-base text-ink-700">
          We've received your message and will get back to you within 24 hours.
        </p>
        <Button onClick={() => setStatus('idle')}>Send Another Message</Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {status === 'error' && (
        <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
          <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-600" />
          <p className="text-sm text-red-800">
            Something went wrong. Please try again or contact us directly.
          </p>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <Input
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          error={errors.fullName}
          required
          placeholder="John Doe"
        />

        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
          placeholder="john@example.com"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+1 (555) 000-0000"
          helperText="Optional - we'll call if needed"
        />

        <Select
          label="Project Type"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          options={projectTypes}
          error={errors.projectType}
          required
        />
      </div>

      <Select
        label="Budget Range"
        name="budget"
        value={formData.budget}
        onChange={handleChange}
        options={budgetRanges}
        helperText="Optional - helps us understand your project scope"
      />

      <Textarea
        label="Tell Us About Your Project"
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        required
        rows={6}
        maxLength={1000}
        showCount
        placeholder="Describe your project, timeline, location, and any specific requirements..."
      />

      <div>
        <label className="mb-2 block text-sm font-medium text-ink-950">
          Upload Plans or Drawings
          <span className="ml-2 text-xs font-normal text-ink-600">(Optional, max 5MB)</span>
        </label>
        {!file ? (
          <label className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-line bg-surface px-6 py-8 transition-colors hover:border-blue-500 hover:bg-blue-50/50">
            <Upload className="mb-2 h-8 w-8 text-ink-400" />
            <span className="text-sm font-medium text-ink-700">
              Click to upload or drag and drop
            </span>
            <span className="mt-1 text-xs text-ink-600">
              PDF, PNG, JPG up to 5MB
            </span>
            <input
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.png,.jpg,.jpeg"
              className="hidden"
            />
          </label>
        ) : (
          <div className="flex items-center justify-between rounded-lg border border-line bg-surface px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                <Upload className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-ink-950">{file.name}</p>
                <p className="text-xs text-ink-600">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={removeFile}
              className="rounded-lg p-1 transition-colors hover:bg-red-50"
              aria-label="Remove file"
            >
              <X className="h-5 w-5 text-ink-600 hover:text-red-600" />
            </button>
          </div>
        )}
        {errors.file && (
          <p className="mt-1.5 text-sm text-red-600" role="alert">
            {errors.file}
          </p>
        )}
      </div>

      <div>
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            name="privacyAccepted"
            checked={formData.privacyAccepted}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded border-line text-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          />
          <span className="text-sm text-ink-700">
            I agree to the{' '}
            <a href="/privacy" className="text-blue-600 underline hover:text-blue-700">
              privacy policy
            </a>{' '}
            and consent to being contacted about my project.
            <span className="ml-1 text-red-500">*</span>
          </span>
        </label>
        {errors.privacyAccepted && (
          <p className="mt-1.5 text-sm text-red-600" role="alert">
            {errors.privacyAccepted}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full sm:w-auto sm:px-12"
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
    </form>
  )
}
