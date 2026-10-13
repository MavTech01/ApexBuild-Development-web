import { useState } from 'react'

const INITIAL = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  budget: '',
  message: '',
}

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
const isValidPhone = (phone) => !phone.trim() || /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,15}$/.test(phone.trim())

/**
 * useProjectForm
 * Small, beginner-friendly hook that keeps the contact form tidy:
 * state, simple validation and a simulated (prototype) submission.
 */
export function useProjectForm() {
  const [values, setValues] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const next = {}
    if (!values.name.trim()) next.name = 'Please enter your full name'
    if (!values.email.trim()) next.email = 'Email address is required'
    else if (!isValidEmail(values.email)) next.email = 'Please enter a valid email address'
    if (!isValidPhone(values.phone)) next.phone = 'Please enter a valid phone number'
    if (!values.projectType) next.projectType = 'Please select a project type'
    if (!values.message.trim()) next.message = 'Please tell us about your project'
    else if (values.message.trim().length < 20) next.message = 'Please provide at least 20 characters'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!validate()) return
    setStatus('submitting')
    // Prototype behaviour: nothing is actually sent yet.
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setStatus('success')
  }

  return { values, errors, status, handleChange, handleSubmit }
}
