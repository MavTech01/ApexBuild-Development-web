import { Send } from 'lucide-react'
import Button from '@/shared/ui/Button.jsx'

/**
 * ContactSubmitButton
 * Submit button with an inline sending spinner.
 */
export default function ContactSubmitButton({ isSubmitting }) {
  return (
    <Button
      type="submit"
      disabled={isSubmitting}
      className="w-full sm:w-auto sm:px-12"
    >
      {isSubmitting ? (
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
  )
}
