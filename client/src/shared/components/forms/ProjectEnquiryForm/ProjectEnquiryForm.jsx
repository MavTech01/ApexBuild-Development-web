import { Link } from 'react-router-dom'
import { useProjectForm } from '@/shared/components/forms/ProjectEnquiryForm/useProjectForm.js'
import ContactSelect from '@/shared/components/forms/ProjectEnquiryForm/ContactSelect.jsx'
import Button from '@/shared/ui/Button.jsx'
import { budgets, errorClass, fieldClass, projectTypes } from '@/shared/components/forms/ProjectEnquiryForm/enquiryForm.data.js'

/**
 * ProjectEnquiryForm
 * The right column of the contact section: the project enquiry form, powered by
 * useProjectForm (validation + a simulated submission). Swaps itself for a short
 * confirmation once submitted.
 */
export default function ProjectEnquiryForm() {
  const { values, errors, status, handleChange, handleSubmit } = useProjectForm()

  if (status === 'success') {
    return (
      <div className="min-w-0 font-display text-[1.6rem] font-bold leading-[1.25]">
        Thanks, {values.name.trim().split(' ')[0]}. Your enquiry has been noted. We'll be in touch
        within one business day.
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="grid min-w-0 gap-[22px] w-full min-[900px]:self-end"
    >
      <div>
        <h3 className="text-2xl">Tell us about your project</h3>
        <p className="mt-1.5 text-[0.92rem] text-muted">We reply within one business day.</p>
      </div>

      <label className="block text-[0.92rem] font-medium">
        Full name <em className="not-italic text-[#c0392b]">*</em>
        <input name="name" value={values.name} onChange={handleChange} autoComplete="name" placeholder="John Doe" className={fieldClass} />
        {errors.name && <span className={errorClass}>{errors.name}</span>}
      </label>

      <div className="grid gap-[22px] min-[900px]:grid-cols-2">
        <label className="block min-w-0 text-[0.92rem] font-medium">
          Email address <em className="not-italic text-[#c0392b]">*</em>
          <input name="email" type="email" value={values.email} onChange={handleChange} autoComplete="email" placeholder="john@example.com" className={fieldClass} />
          {errors.email && <span className={errorClass}>{errors.email}</span>}
        </label>
        <label className="block min-w-0 text-[0.92rem] font-medium">
          Phone number (Optional)
          <input name="phone" type="tel" value={values.phone} onChange={handleChange} autoComplete="tel" placeholder="+234 801 234 5678" className={fieldClass} />
          {errors.phone && <span className={errorClass}>{errors.phone}</span>}
        </label>
      </div>

      <div className="grid gap-[22px] min-[900px]:grid-cols-2">
        <div className="block min-w-0 text-[0.92rem] font-medium">
          <label htmlFor="projectType">
            Project type <em className="not-italic text-[#c0392b]">*</em>
          </label>
          <ContactSelect
            id="projectType"
            name="projectType"
            value={values.projectType}
            onChange={handleChange}
            options={projectTypes}
            error={errors.projectType}
          />
          {errors.projectType && <span className={errorClass}>{errors.projectType}</span>}
        </div>
        <div className="block min-w-0 text-[0.92rem] font-medium">
          <label htmlFor="budget">Budget range</label>
          <ContactSelect
            id="budget"
            name="budget"
            value={values.budget}
            onChange={handleChange}
            options={budgets}
          />
        </div>
      </div>

      <label className="block text-[0.92rem] font-medium">
        Tell us about your project <em className="not-italic text-[#c0392b]">*</em>
        <textarea
          name="message"
          value={values.message}
          onChange={handleChange}
          placeholder="Describe your project, timeline, location and any specific requirements."
          className={`${fieldClass} min-h-[130px] resize-y`}
        />
        {errors.message && <span className={errorClass}>{errors.message}</span>}
      </label>

      <p className="text-[0.8rem] text-muted">
        By submitting this form, you acknowledge that your information will be handled as described
        in our{' '}
        <Link to="/privacy" className="font-medium text-royal underline underline-offset-2 hover:text-royal/80">
          privacy policy
        </Link>
        .
      </p>

      <Button type="submit" className="justify-self-start" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending...' : 'Send project details'}
      </Button>
    </form>
  )
}
