import FileUploadArea from './FileUploadArea.jsx'
import FormStatusFeedback from './FormStatusFeedback.jsx'
import ContactFormFields from './ContactFormFields.jsx'
import PrivacyConsent from './PrivacyConsent.jsx'
import ContactSubmitButton from './ContactSubmitButton.jsx'
import { useContactForm } from './useContactForm.js'

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

      <ContactFormFields formData={formData} errors={errors} onChange={handleChange} />

      {/* File Upload */}
      <FileUploadArea
        file={file}
        error={errors.file}
        onFileSelect={handleFileSelect}
        onFileRemove={handleFileRemove}
      />

      {/* Privacy Consent */}
      <PrivacyConsent
        checked={formData.privacyAccepted}
        onChange={handleChange}
        error={errors.privacyAccepted}
      />

      {/* Submit */}
      <ContactSubmitButton isSubmitting={status === 'submitting'} />
    </form>
  )
}
