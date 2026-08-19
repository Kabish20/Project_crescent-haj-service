import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { CONTACT_INFO } from '@/constants'

export default function GeneralEnquiryModal({ defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (!open) return null

  return createPortal(
    <div
      className="general-enquiry-modal"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setOpen(false)
      }}
    >
      <div
        className="general-enquiry-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="general-enquiry-title"
      >
        <button
          className="general-enquiry-close"
          type="button"
          aria-label="Close general enquiry form"
          onClick={() => setOpen(false)}
        >
          ×
        </button>
        <h2 id="general-enquiry-title">General enquiry</h2>
        <iframe
          title="General enquiry form"
          src={CONTACT_INFO.leadZohoFormUrl}
        />
      </div>
    </div>,
    document.body
  )
}
