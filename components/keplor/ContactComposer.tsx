'use client';

import { useState } from 'react';

export function ContactComposer() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const copyMessage = async () => {
    const text = `Hello Keplor,\n\nMy name is ${name || '[your name]'}.\n\n${message || '[Tell us what you are exploring.]'}`;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="contact-composer">
      <label>
        Your name
        <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Name or organisation" />
      </label>
      <label>
        What are you exploring?
        <textarea value={message} onChange={(event) => setMessage(event.target.value)} placeholder="A short description of the problem, opportunity, or question." rows={5} />
      </label>
      <button type="button" className="button button--solid" onClick={copyMessage}>
        {copied ? 'Message copied' : 'Copy message to send'}
      </button>
      <p className="form-note">There is no backend connected to this site yet. Copy your message into your preferred email or messaging channel; no submission is claimed.</p>
    </div>
  );
}
