import React, { useEffect, useId, useRef, useState } from "react";
import { CheckCircle2, X } from "lucide-react";
import useBodyLock from "../../hooks/useBodyLock";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  role: "",
  city: "",
  question: "",
  consent: false,
};

function RegistrationModal({ open, onClose }) {
  const titleId = useId();
  const descriptionId = useId();
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousActiveElementRef = useRef(null);
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  useBodyLock(open);

  useEffect(() => {
    if (!open) return undefined;

    previousActiveElementRef.current = document.activeElement;

    const focusableSelector =
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll(focusableSelector),
      );

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      previousActiveElementRef.current?.focus?.();
      previousActiveElementRef.current = null;
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
    }
  }, [open]);

  if (!open) return null;

  const updateField = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const closeAndReset = () => {
    setForm(initialForm);
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeAndReset();
      }}
    >
      <section
        ref={dialogRef}
        className="registration-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
      >
        <button
          ref={closeButtonRef}
          className="modal-close"
          type="button"
          aria-label="Close registration form"
          onClick={closeAndReset}
        >
          <X size={19} aria-hidden="true" />
        </button>

        {!submitted ? (
          <>
            <p className="modal-kicker">Free live webinar</p>
            <h2 id={titleId}>Reserve your seat</h2>
            <p id={descriptionId} className="modal-intro">
              Complete the form to register. You may also submit a question for the #FutureOfHR contest.
            </p>

            <form className="registration-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <label>
                  Full name <span aria-hidden="true">*</span>
                  <input name="name" value={form.name} onChange={updateField} autoComplete="name" required />
                </label>
                <label>
                  Work email <span aria-hidden="true">*</span>
                  <input name="email" type="email" value={form.email} onChange={updateField} autoComplete="email" required />
                </label>
                <label>
                  Phone number <span aria-hidden="true">*</span>
                  <input name="phone" type="tel" value={form.phone} onChange={updateField} autoComplete="tel" required />
                </label>
                <label>
                  Company
                  <input name="company" value={form.company} onChange={updateField} autoComplete="organization" />
                </label>
                <label>
                  Job role
                  <input name="role" value={form.role} onChange={updateField} autoComplete="organization-title" />
                </label>
                <label>
                  City
                  <input name="city" value={form.city} onChange={updateField} autoComplete="address-level2" />
                </label>
              </div>

              <label>
                Your question for the panel
                <textarea
                  name="question"
                  value={form.question}
                  onChange={updateField}
                  placeholder="Ask about remote hiring, HR leadership or scalable growth..."
                />
              </label>

              <label className="form-consent">
                <input name="consent" type="checkbox" checked={form.consent} onChange={updateField} required />
                <span>I agree to receive webinar updates and related People First communications.</span>
              </label>

              <button className="button button--primary button--full" type="submit">
                Complete Registration
              </button>
            </form>
          </>
        ) : (
          <div className="form-success">
            <CheckCircle2 size={58} strokeWidth={1.6} aria-hidden="true" />
            <p className="form-success__eyebrow">Registration received</p>
            <h2 id={titleId}>Your seat is reserved.</h2>
            <p id={descriptionId}>
              Thank you, {form.name || "there"}. Webinar details will be sent to {form.email || "your email address"}.
            </p>
            <button className="button button--primary" type="button" onClick={closeAndReset}>
              Done
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default RegistrationModal;
