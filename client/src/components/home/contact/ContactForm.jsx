import Input from '@/components/ui/Input.jsx'
import Textarea from '@/components/ui/Textarea.jsx'
import Select from '@/components/ui/Select.jsx'
import Button from '@/components/ui/Button.jsx'
import FileUploadArea from './FileUploadArea.jsx'
import FormStatusFeedback from './FormStatusFeedback.jsx'
import { useContactForm } from './useContactForm.js'
import { projectTypes, budgetRanges } from './contactForm.constants.js'
import { Send } from 'lucide-react'

export default function ContactForm() {
  const {
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
  } = useContactForm()

  // Full-panel status views (success / error on top)
  if (status === 'success') {
    return (
      <FormStatusFeedback status="success" meta={submissionMeta} onReset={resetForm} />
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Inline error banner */}
      {status === 'error' && (
        <FormStatusFeedback status="error" meta={null} onReset={resetForm} />
      )}

      {/* Row 1 – Name & Email */}
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
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
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
          onChange={handleChange}
          error={errors.phone}
          placeholder="+1 (555) 000-0000"
          helperText="Optional — we'll call if needed"
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

      {/* Budget Range */}
      <Select
        label="Budget Range"
        name="budget"
        value={formData.budget}
        onChange={handleChange}
        options={budgetRanges}
        helperText="Optional — helps us understand your project scope"
      />

      {/* Project Description */}
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

      {/* File Upload */}
      <FileUploadArea
        file={file}
        error={errors.file}
        onFileSelect={handleFileSelect}
        onFileRemove={handleFileRemove}
      />

      {/* Privacy Consent */}
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

      {/* Submit */}
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
            Send Enquiry
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  )
}
