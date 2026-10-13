import { CheckCircle, AlertCircle, ArrowRight, RotateCcw } from 'lucide-react'
import Button from '@/shared/ui/Button.jsx'

/**
 * FormStatusFeedback
 * Renders the realistic success confirmation view or contextual error banners.
 */
export default function FormStatusFeedback({ status, meta, onReset }) {
  if (status === 'error') {
    return (
      <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 shadow-xs">
        <AlertCircle className="h-5 w-5 shrink-0 text-red-600 mt-0.5" aria-hidden="true" />
        <div className="flex-1 text-sm text-red-800">
          <p className="font-semibold">Unable to submit enquiry</p>
          <p className="mt-0.5 text-xs text-red-700">
            Please check your form inputs and try again, or call our direct office line.
          </p>
        </div>
      </div>
    )
  }

  if (status === 'success' && meta) {
    return (
      <div className="flex min-h-[460px] flex-col items-center justify-center rounded-2xl border border-emerald-200/80 bg-gradient-to-b from-emerald-50/50 via-surface to-surface p-8 text-center shadow-xs animate-rise">
        {/* Success Icon */}
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-xs">
          <CheckCircle className="h-8 w-8" strokeWidth={2.2} />
        </div>

        {/* Heading */}
        <h3 className="font-display text-2xl font-bold tracking-tight text-ink-950 sm:text-3xl">
          Enquiry Received
        </h3>

        {/* Reference ID Pill */}
        <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-800">
          <span>Reference ID:</span>
          <span className="font-mono tracking-wider font-bold">{meta.referenceId}</span>
        </div>

        {/* Confirmation Body */}
        <div className="mt-5 max-w-md space-y-2 text-sm leading-relaxed text-ink-600">
          <p>
            Thank you, <strong className="text-ink-900">{meta.clientName}</strong>. Your project enquiry was logged at{' '}
            <span className="font-medium text-ink-900">{meta.submittedAt}</span>.
          </p>
          <p className="text-xs text-ink-500">
            An ApexBuild development manager is reviewing your requirements and will reach out to{' '}
            <span className="font-medium text-ink-800">{meta.clientEmail}</span> within 24 business hours.
          </p>
        </div>

        {/* What happens next checklist */}
        <div className="mt-6 w-full max-w-sm rounded-xl border border-line bg-paper/60 p-4 text-left text-xs text-ink-700">
          <p className="font-semibold text-ink-900 mb-2">Next Steps:</p>
          <ul className="space-y-1.5 list-disc list-inside text-ink-600">
            <li>Scope &amp; zoning initial feasibility check</li>
            <li>Consultant contact via phone or email</li>
            <li>Detailed preliminary schedule &amp; estimate</li>
          </ul>
        </div>

        {/* Reset Action */}
        <div className="mt-7">
          <Button onClick={onReset} variant="outline" className="inline-flex items-center gap-2">
            <RotateCcw className="h-4 w-4" />
            Submit Another Project
          </Button>
        </div>
      </div>
    )
  }

  return null
}
