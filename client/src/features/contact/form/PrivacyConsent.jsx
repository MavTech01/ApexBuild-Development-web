/**
 * PrivacyConsent
 * Consent checkbox with inline validation for the contact form.
 */
export default function PrivacyConsent({ checked, onChange, error }) {
  return (
    <div>
      <label className="flex items-start gap-3">
        <input
          type="checkbox"
          name="privacyAccepted"
          checked={checked}
          onChange={onChange}
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
      {error && (
        <p className="mt-1.5 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
