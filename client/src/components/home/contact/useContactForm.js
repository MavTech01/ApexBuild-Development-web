import { useState, useCallback } from 'react'
import { initialFormData, MAX_FILE_SIZE_BYTES } from './contactForm.constants.js'

/**
 * useContactForm
 * Custom hook encapsulating all state management, validation logic,
 * file handling, and realistic mock submission processing for the Enquiry Form.
 */
export function useContactForm() {
  const [formData, setFormData] = useState(initialFormData)
  const [file, setFile] = useState(null)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // 'idle' | 'submitting' | 'success' | 'error'
  const [submissionMeta, setSubmissionMeta] = useState(null)

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  }

  const validatePhone = (phone) => {
    if (!phone.trim()) return true // Phone is optional
    return /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,15}$/.test(phone.trim())
  }

  const validateForm = useCallback(() => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name'
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your project'
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Please provide at least 20 characters of project details'
    }

    if (!formData.privacyAccepted) {
      newErrors.privacyAccepted = 'You must accept the privacy policy to submit'
    }

    if (file && file.size > MAX_FILE_SIZE_BYTES) {
      newErrors.file = 'File size must not exceed 5MB'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [formData, file])

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))

    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }, [errors])

  const handleFileSelect = useCallback((selectedFile) => {
    if (!selectedFile) return

    if (selectedFile.size > MAX_FILE_SIZE_BYTES) {
      setErrors((prev) => ({ ...prev, file: 'File size must not exceed 5MB' }))
      setFile(null)
      return
    }

    setFile(selectedFile)
    setErrors((prev) => ({ ...prev, file: '' }))
  }, [])

  const handleFileRemove = useCallback(() => {
    setFile(null)
    setErrors((prev) => ({ ...prev, file: '' }))
  }, [])

  const resetForm = useCallback(() => {
    setFormData(initialFormData)
    setFile(null)
    setErrors({})
    setStatus('idle')
    setSubmissionMeta(null)
  }, [])

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      // Focus on first invalid field
      return
    }

    setStatus('submitting')

    try {
      // Realistic network latency simulation
      await new Promise((resolve) => setTimeout(resolve, 1400))

      // Generate a realistic reference number and timestamp
      const referenceId = `APX-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`
      const submittedAt = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

      setSubmissionMeta({
        referenceId,
        submittedAt,
        clientName: formData.fullName,
        clientEmail: formData.email,
        projectType: formData.projectType,
      })

      setStatus('success')
    } catch {
      setStatus('error')
    }
  }, [formData, validateForm])

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
