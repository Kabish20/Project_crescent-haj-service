import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { CONTACT_INFO } from '@/constants'

export default function GeneralEnquiryModal({ defaultOpen = true, onClose }) {
  const [open, setOpen] = useState(defaultOpen)
  const closeRef = useRef(null)
  const frameRef = useRef(null)
  const onCloseRef = useRef(onClose)

  useEffect(() => { onCloseRef.current = onClose }, [onClose])

  const close = useCallback(() => {
    setOpen(false)
    onCloseRef.current?.()
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const previousFocus = document.activeElement
    const previousOverflow = document.body.style.overflow
    const root = document.getElementById('root')
    const wasInert = root?.inert
    document.body.style.overflow = 'hidden'
    if (root) root.inert = true
    closeRef.current?.focus()
    const onKeyDown = event => {
      if (event.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      if (root) root.inert = wasInert
      if (previousFocus?.isConnected) previousFocus.focus()
    }
  }, [open, close])

  if (!open) return null

  return createPortal(
    <div
      className="general-enquiry-modal"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close()
      }}
    >
      <div
        className="general-enquiry-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="general-enquiry-title"
      >
        <span className="sr-only" tabIndex={0} onFocus={() => frameRef.current?.focus()} />
        <button
          ref={closeRef}
          className="general-enquiry-close"
          type="button"
          aria-label="Close general enquiry form"
          onClick={close}
        >
          ×
        </button>
        <h2 id="general-enquiry-title">General enquiry</h2>
        <iframe
          ref={frameRef}
          title="General enquiry form"
          src={CONTACT_INFO.leadZohoFormUrl}
        />
        <span className="sr-only" tabIndex={0} onFocus={() => closeRef.current?.focus()} />
      </div>
    </div>,
    document.body
  )
}
