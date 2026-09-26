import React, { useEffect, useId, useRef, useState } from "react";
import { CheckCircle2, LoaderCircle, X } from "lucide-react";
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

const requiredFields = ["name", "email", "phone"];

function RegistrationModal({ open, onClose }) {
  const titleId = useId();
  const descriptionId = useId();
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousActiveElementRef = useRef(null);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

      if (!focusableElements.length) {
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
      setErrors({});
      setIsSubmitting(false);
    }
  }, [open]);

  if (!open) return null;

  const updateField = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const validateForm = () => {
    const nextErrors = {};

    requiredFields.forEach((field) => {
      if (!form[field].trim()) nextErrors[field] = "This field is required.";
    });

    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = "Enter a valid work email address.";
    }

    if (form.phone && !/^[+\d][\d\s().-]{7,}$/.test(form.phone)) {
      nextErrors.phone = "Enter a valid phone number.";
    }

    if (!form.consent) {
      nextErrors.consent = "Please accept the communication consent to continue.";
    }

    setErrors(nextErrors);
    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    const nextErrors = validateForm();
    if (Object.keys(nextErrors).length) {
      const firstErrorField = Object.keys(nextErrors)[0];
      document.getElementsByName(firstErrorField)[0]?.focus();
      return;
    }

    setIsSubmitting(true);

    // The current website has no registration API configured yet.
    // Keep the interaction async so a future API integration can replace this safely.
    await new Promise((resolve) => window.setTimeout(resolve, 500));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const closeAndReset = () => {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
    setIsSubmitting(false);
    onClose();
  };

  const fieldClass = (name) => (errors[name] ? "form-field form-field--error" : "form-field");

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && !isSubmitting) closeAndReset();
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
          disabled={isSubmitting}
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

            <form className="registration-form" onSubmit={handleSubmit} noValidate>
              <div className="form-grid">
                <label className={fieldClass("name")}>
                  Full name <span aria-hidden="true">*</span>
                  <input name="name" value={form.name} onChange={updateField} autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />
                  {errors.name && <small id="name-error" className="form-error">{errors.name}</small>}
                </label>
                <label className={fieldClass("email")}>
                  Work email <span aria-hidden="true">*</span>
                  <input name="email" type="email" value={form.email} onChange={updateField} autoComplete="email" inputMode="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />
                  {errors.email && <small id="email-error" className="form-error">{errors.email}</small>}
                </label>
                <label className={fieldClass("phone")}>
                  Phone number <span aria-hidden="true">*</span>
                  <input name="phone" type="tel" value={form.phone} onChange={updateField} autoComplete="tel" inputMode="tel" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined} />
                  {errors.phone && <small id="phone-error" className="form-error">{errors.phone}</small>}
                </label>
                <label className="form-field">
                  Company
                  <input name="company" value={form.company} onChange={updateField} autoComplete="organization" />
                </label>
                <label className="form-field">
                  Job role
                  <input name="role" value={form.role} onChange={updateField} autoComplete="organization-title" />
                </label>
                <label className="form-field">
                  City
                  <input name="city" value={form.city} onChange={updateField} autoComplete="address-level2" />
                </label>
              </div>

              <label className="form-field">
                Your question for the panel
                <textarea
                  name="question"
                  value={form.question}
                  onChange={updateField}
                  placeholder="Ask about remote hiring, HR leadership or scalable growth..."
                />
              </label>

              <label className={`form-consent${errors.consent ? " form-consent--error" : ""}`}>
                <input name="consent" type="checkbox" checked={form.consent} onChange={updateField} aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? "consent-error" : undefined} />
                <span>I agree to receive webinar updates and related People First communications.</span>
                {errors.consent && <small id="consent-error" className="form-error">{errors.consent}</small>}
              </label>

              <button className="button button--primary button--full" type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
                {isSubmitting ? <><LoaderCircle className="button__spinner" size={18} aria-hidden="true" /> Submitting...</> : "Complete Registration"}
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
