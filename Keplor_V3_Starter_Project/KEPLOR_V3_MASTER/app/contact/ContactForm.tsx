"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [project, setProject] = useState("");
  const [copied, setCopied] = useState(false);

  const message = `Hello Keplor team,

My name is ${name || "[Name]"}${organisation ? ` from ${organisation}` : ""}.

I’m reaching out about a potential project or collaboration:

${project || "[Project description]"}

Please let me know if you’re available to discuss further.

Best regards,
${name || "[Your name]"}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="contact-composer">
      <div className="composer-intro">
        <h2 id="contact-heading">Let’s begin a conversation.</h2>
        <p>
          This starter site does not yet have a configured contact inbox or form backend. Before launch,
          add a verified contact method or connect a form provider and test it end-to-end. Do not publish an
          invented email address or imply that a message has been sent.
        </p>
      </div>
      <form noValidate onSubmit={(e) => e.preventDefault()}>
        <div className="composer-fields">
          <div className="field">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="contact-organisation">Organisation</label>
            <input
              id="contact-organisation"
              type="text"
              value={organisation}
              onChange={(e) => setOrganisation(e.target.value)}
              placeholder="Organisation (optional)"
            />
          </div>
          <div className="field full">
            <label htmlFor="contact-project">Project description</label>
            <textarea
              id="contact-project"
              value={project}
              onChange={(e) => setProject(e.target.value)}
              placeholder="Tell us about the problem you’re trying to solve, what you’ve considered, and what a useful outcome would look like."
              rows={6}
              required
            />
          </div>
        </div>
        <div className="composer-preview">
          <h3>Message preview</h3>
          <pre>{message}</pre>
          <button
            type="button"
            onClick={handleCopy}
            className="button"
            disabled={!name || !project}
          >
            {copied ? "Copied!" : "Copy message"}
          </button>
          <p className="preview-note">
            Copying does not submit or transmit a message. Paste it into your own email client when ready.
          </p>
        </div>
      </form>
    </div>
  );
}
