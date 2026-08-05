import React, { useEffect, useId, useState } from "react";
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
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  useBodyLock(open);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
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
        className="registration-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <button className="modal-close" type="button" aria-label="Close registration form" onClick={closeAndReset}>
          <X size={19} />
        </button>

        {!submitted ? (
          <>
            <p className="modal-kicker">Free live webinar</p>
            <h2 id={titleId}>Reserve your seat</h2>
            <p className="modal-intro">
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
            <CheckCircle2 size={58} strokeWidth={1.6} />
            <p className="form-success__eyebrow">Registration received</p>
            <h2 id={titleId}>Your seat is reserved.</h2>
            <p>
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
