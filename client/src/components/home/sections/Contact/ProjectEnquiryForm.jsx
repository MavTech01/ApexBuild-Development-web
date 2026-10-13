import { useProjectForm } from './useProjectForm.js'
import ContactSelect from './ContactSelect.jsx'
import Button from '@/components/ui/Button.jsx'
import { budgets, errorClass, fieldClass, projectTypes } from './enquiryForm.data.js'

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
        Thanks, {values.name.trim().split(' ')[0]}. Your enquiry has been noted. We&apos;ll be in touch
        within one business day.
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="grid min-w-0 gap-[22px] rounded-[22px] border border-[var(--line)] bg-[var(--card)] p-[clamp(24px,3.5vw,44px)] shadow-[0_30px_70px_rgba(7,18,43,0.08)] min-[900px]:self-end"
    >
      <div>
        <h3 className="text-2xl">Tell us about your project</h3>
        <p className="mt-1.5 text-[0.92rem] text-mut">We reply within one business day.</p>
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
          Phone number
          <input name="phone" type="tel" value={values.phone} onChange={handleChange} autoComplete="tel" placeholder="Optional" className={fieldClass} />
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

      <Button type="submit" className="justify-self-start" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending...' : 'Send project details'}
      </Button>
      <p className="text-[0.8rem] text-mut">Your details are used only to respond to your enquiry.</p>
    </form>
  )
}
