import { useState } from 'react'
import { initialFormData, MAX_FILE_SIZE_BYTES } from './contactForm.constants.js'

/**
 * useContactForm
 * Simple, beginner-friendly custom hook for form state, validation, and simulated submission.
 */
export const useContactForm = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [file, setFile] = useState(null)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // 'idle' | 'submitting' | 'success' | 'error'
  const [submissionMeta, setSubmissionMeta] = useState(null)

  // Quick email & phone validation helpers
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  const isValidPhone = (phone) => !phone.trim() || /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,15}$/.test(phone.trim())

  // Check required fields & update errors
  const validateForm = () => {
    const errs = {}

    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name'
    if (!formData.email.trim()) errs.email = 'Email address is required'
    else if (!isValidEmail(formData.email)) errs.email = 'Please enter a valid email address'

    if (!isValidPhone(formData.phone)) errs.phone = 'Please enter a valid phone number'
    if (!formData.projectType) errs.projectType = 'Please select a project type'

    if (!formData.message.trim()) errs.message = 'Please tell us about your project'
    else if (formData.message.trim().length < 20) errs.message = 'Please provide at least 20 characters'

    if (!formData.privacyAccepted) errs.privacyAccepted = 'You must accept the privacy policy'
    if (file && file.size > MAX_FILE_SIZE_BYTES) errs.file = 'File size must not exceed 5MB'

    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  // Handle standard input, select & checkbox change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  // Handle file upload
  const handleFileSelect = (selectedFile) => {
    if (!selectedFile) return
    if (selectedFile.size > MAX_FILE_SIZE_BYTES) {
      setErrors((prev) => ({ ...prev, file: 'File size must not exceed 5MB' }))
      setFile(null)
      return
    }
    setFile(selectedFile)
    setErrors((prev) => ({ ...prev, file: '' }))
  }

  const handleFileRemove = () => {
    setFile(null)
    setErrors((prev) => ({ ...prev, file: '' }))
  }

  // Reset form back to initial state
  const resetForm = () => {
    setFormData(initialFormData)
    setFile(null)
    setErrors({})
    setStatus('idle')
    setSubmissionMeta(null)
  }

  // Handle submit with realistic simulated response
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setStatus('submitting')
    try {
      // Simulate realistic network delay (1.2s)
      await new Promise((resolve) => setTimeout(resolve, 1200))

      const year = new Date().getFullYear()
      const randomCode = Math.floor(1000 + Math.random() * 9000)
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

      setSubmissionMeta({
        referenceId: `APX-${year}-${randomCode}`,
        submittedAt: time,
        clientName: formData.fullName,
        clientEmail: formData.email,
        projectType: formData.projectType,
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return {
    formData,
    file,
    errors,
    status,
    submissionMeta,
    handleChange,
    handleFileSelect,
    handleFileRemove,
    handleSubmit,
    resetForm,
  }
}
