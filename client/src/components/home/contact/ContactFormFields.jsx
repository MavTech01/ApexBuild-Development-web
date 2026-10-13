import Input from '@/components/ui/Input.jsx'
import Textarea from '@/components/ui/Textarea.jsx'
import Select from '@/components/ui/Select.jsx'
import { projectTypes, budgetRanges } from './contactForm.constants.js'

/**
 * ContactFormFields
 * The input rows of the contact form (name, email, phone, project type,
 * budget, message). File upload and consent live in ContactForm.
 */
export default function ContactFormFields({ formData, errors, onChange }) {
  return (
    <>
      {/* Row 1 – Name & Email */}
      <div className="grid gap-6 sm:grid-cols-2">
        <Input
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={onChange}
          error={errors.fullName}
          required
          placeholder="John Doe"
        />

        <Input
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={onChange}
          error={errors.email}
          required
          placeholder="john@example.com"
        />
      </div>

      {/* Row 2 – Phone & Project Type */}
      <div className="grid gap-6 sm:grid-cols-2">
        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={onChange}
          error={errors.phone}
          placeholder="+1 (555) 000-0000"
          helperText="Optional — we'll call if needed"
        />

        <Select
          label="Project Type"
          name="projectType"
          value={formData.projectType}
          onChange={onChange}
          options={projectTypes}
          error={errors.projectType}
          required
        />
      </div>

      {/* Budget Range */}
      <Select
        label="Budget Range"
        name="budget"
        value={formData.budget}
        onChange={onChange}
        options={budgetRanges}
        helperText="Optional — helps us understand your project scope"
      />

      {/* Project Description */}
      <Textarea
        label="Tell Us About Your Project"
        name="message"
        value={formData.message}
        onChange={onChange}
        error={errors.message}
        required
        rows={6}
        maxLength={1000}
        showCount
        placeholder="Describe your project, timeline, location, and any specific requirements..."
      />
    </>
  )
}
