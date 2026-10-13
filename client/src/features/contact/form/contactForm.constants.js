export const projectTypes = [
  { value: 'building-construction', label: 'Building Construction' },
  { value: 'property-development', label: 'Property Development' },
  { value: 'renovation-remodeling', label: 'Renovation & Remodeling' },
  { value: 'project-management', label: 'Project Management' },
  { value: 'other', label: 'Other' },
]

export const budgetRanges = [
  { value: 'under-100k', label: 'Under $100,000' },
  { value: '100k-500k', label: '$100,000 - $500,000' },
  { value: '500k-1m', label: '$500,000 - $1,000,000' },
  { value: 'over-1m', label: 'Over $1,000,000' },
  { value: 'prefer-not-to-say', label: 'Prefer not to say' },
]

export const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024 // 5 MB
export const ALLOWED_FILE_TYPES = ['.pdf', '.png', '.jpg', '.jpeg']

export const initialFormData = {
  fullName: '',
  email: '',
  phone: '',
  projectType: '',
  budget: '',
  message: '',
  privacyAccepted: false,
}
