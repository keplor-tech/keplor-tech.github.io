"use client";

import { useState } from "react";

const ENQUIRY_TYPES = [
  "AI & Machine Learning",
  "Custom Software",
  "Cloud Solutions",
  "Research & Analytics",
  "General enquiry",
] as const;

type EnquiryType = (typeof ENQUIRY_TYPES)[number];

interface FormState {
  name: string;
  email: string;
  organisation: string;
  enquiryType: EnquiryType;
  project: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  project?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    organisation: "",
    enquiryType: "General enquiry",
    project: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validate = (): boolean => {
    const next: FormErrors = {};
    let valid = true;

    if (!form.name.trim()) {
      next.name = "Name is required";
      valid = false;
    }
    if (!form.email.trim()) {
      next.email = "Email is required";
      valid = false;
    } else if (!isValidEmail(form.email)) {
      next.email = "Please enter a valid email address";
      valid = false;
    }
    if (!form.project.trim()) {
      next.project = "Please describe your project";
      valid = false;
    }

    setErrors(next);
    return valid;
  };

  const buildMailto = () => {
    const subject = encodeURIComponent(
      `Project enquiry from ${form.name} — ${form.enquiryType}`
    );
    const body = encodeURIComponent(
      `Hello Keplor team,\n\nMy name is ${form.name}${
        form.organisation ? ` from ${form.organisation}` : ""
      }.\n\nI’m reaching out about a potential project or collaboration.\n\nEnquiry type: ${form.enquiryType}\n\n${form.project}\n\nPlease let me know if you’re available to discuss further.\n\nBest regards,\n${form.name}\n${form.email}`
    );
    return `mailto:hello@keplor.tech?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleCopy = () => {
    const message = `Hello Keplor team,\n\nMy name is ${form.name}${
      form.organisation ? ` from ${form.organisation}` : ""
    }.\n\nI’m reaching out about a potential project or collaboration.\n\nEnquiry type: ${form.enquiryType}\n\n${form.project}\n\nPlease let me know if you’re available to discuss further.\n\nBest regards,\n${form.name}\n${form.email}`;
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const setField = <K extends keyof FormState>(
    field: K,
    value: FormState[K]
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field as keyof FormErrors];
        return next;
      });
    }
  };

  if (submitted) {
    return (
      <div className="contact-composer">
        <div className="composer-intro">
          <h2 id="contact-heading">Thank you.</h2>
          <p>
            Your enquiry is ready to send. Click the button below to open your
            email client with a pre-filled message addressed to
            hello@keplor.tech.
          </p>
        </div>
        <a
          href={buildMailto()}
          className="button button-primary"
          rel="noopener"
        >
          Open email client <span aria-hidden="true">→</span>
        </a>
        <p className="preview-note">
          This opens your configured email client. No message is sent or stored
          by this website. If you prefer, copy the message below and paste it
          into your own email client.
        </p>
        <button
          type="button"
          onClick={handleCopy}
          className="button secondary"
          disabled={copied}
        >
          {copied ? "Copied!" : "Copy message"}
        </button>
      </div>
    );
  }

  return (
    <div className="contact-composer">
      <div className="composer-intro">
        <h2 id="contact-heading">Let’s begin a conversation.</h2>
        <p>
          This site does not yet have a configured contact form backend. Before
          launch, connect a form provider and test it end-to-end. Until then,
          use the mailto link below to send your enquiry directly from your own
          email client. No message is sent or stored by this website.
        </p>
      </div>
      <form noValidate onSubmit={handleSubmit}>
        <div className="composer-fields">
          <div className="field">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              type="text"
              value={form.name}
              onChange={(e) => setField("name", e.target.value)}
              placeholder="Your name"
              required
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
            />
            {errors.name && (
              <span id="contact-name-error" className="field-error">
                {errors.name}
              </span>
            )}
          </div>
          <div className="field">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              type="email"
              value={form.email}
              onChange={(e) => setField("email", e.target.value)}
              placeholder="you@example.com"
              required
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
            />
            {errors.email && (
              <span id="contact-email-error" className="field-error">
                {errors.email}
              </span>
            )}
          </div>
          <div className="field">
            <label htmlFor="contact-organisation">Organisation</label>
            <input
              id="contact-organisation"
              type="text"
              value={form.organisation}
              onChange={(e) => setField("organisation", e.target.value)}
              placeholder="Organisation (optional)"
            />
          </div>
          <div className="field">
            <label htmlFor="contact-enquiry-type">Enquiry type</label>
            <select
              id="contact-enquiry-type"
              value={form.enquiryType}
              onChange={(e) => setField("enquiryType", e.target.value as EnquiryType)}
              required
            >
              {ENQUIRY_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="field full">
            <label htmlFor="contact-project">Project description</label>
            <textarea
              id="contact-project"
              value={form.project}
              onChange={(e) => setField("project", e.target.value)}
              placeholder="Tell us about the problem you’re trying to solve, what you’ve considered, and what a useful outcome would look like."
              rows={6}
              required
              aria-invalid={!!errors.project}
              aria-describedby={errors.project ? "contact-project-error" : undefined}
            />
            {errors.project && (
              <span id="contact-project-error" className="field-error">
                {errors.project}
              </span>
            )}
          </div>
        </div>
        <div className="composer-actions">
          <button
            type="submit"
            className="button button-primary"
            disabled={!!Object.keys(errors).length}
          >
            Prepare enquiry
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className="button secondary"
            disabled={copied || !form.name || !form.project}
          >
            {copied ? "Copied!" : "Copy message"}
          </button>
        </div>
        <p className="preview-note">
          Copying does not submit or transmit a message. Paste it into your own
          email client when ready.
        </p>
      </form>
    </div>
  );
}
