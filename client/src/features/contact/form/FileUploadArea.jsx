import { useState } from 'react'
import { Upload, X, FileText, CheckCircle2 } from 'lucide-react'
import { ALLOWED_FILE_TYPES } from '@/features/contact/form/contactForm.constants.js'

/**
 * FileUploadArea
 * Handles drag-and-drop or click file attachment with visual state feedback,
 * preview chip, and size formatting.
 */
export default function FileUploadArea({ file, error, onFileSelect, onFileRemove }) {
  const [isDragging, setIsDragging] = useState(false)

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    const droppedFile = e.dataTransfer.files?.[0]
    if (droppedFile) {
      onFileSelect(droppedFile)
    }
  }

  const handleInputChange = (e) => {
    const selected = e.target.files?.[0]
    if (selected) {
      onFileSelect(selected)
    }
  }

  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <label className="block text-sm font-medium text-ink-950">
          Upload Plans or Project Drawings
        </label>
        <span className="text-xs text-ink-500 font-normal">
          Optional &bull; Max 5MB
        </span>
      </div>

      {!file ? (
        <label
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-6 transition-all duration-200 text-center ${
            isDragging
              ? 'border-blue-600 bg-blue-50/70 scale-[0.99]'
              : 'border-line bg-surface hover:border-blue-400 hover:bg-blue-50/30'
          }`}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-600 mb-2">
            <Upload className="h-5 w-5" aria-hidden="true" />
          </div>
          <span className="text-sm font-semibold text-ink-900">
            Click to upload or drag &amp; drop
          </span>
          <span className="mt-1 text-xs text-ink-500">
            PDF, PNG, JPG or JPEG up to 5MB
          </span>
          <input
            type="file"
            onChange={handleInputChange}
            accept={ALLOWED_FILE_TYPES.join(',')}
            className="hidden"
          />
        </label>
      ) : (
        <div className="flex items-center justify-between rounded-xl border border-blue-200 bg-blue-50/50 p-4 shadow-xs">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
              <FileText className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-ink-950">
                {file.name}
              </p>
              <div className="flex items-center gap-2 text-xs text-ink-600">
                <span>{(file.size / (1024 * 1024)).toFixed(2)} MB</span>
                <span>&bull;</span>
                <span className="inline-flex items-center gap-1 font-medium text-emerald-600">
                  <CheckCircle2 className="h-3 w-3" /> Ready
                </span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onFileRemove}
            className="rounded-lg p-2 text-ink-400 transition-colors hover:bg-white hover:text-red-600"
            aria-label="Remove uploaded file"
            title="Remove file"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {error && (
        <p className="mt-1.5 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
