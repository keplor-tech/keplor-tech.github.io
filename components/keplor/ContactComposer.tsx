'use client';

import { useState } from 'react';

export function ContactComposer() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [topic, setTopic] = useState('');

  const copyMessage = async () => {
    const text = `Hello Keplor,\n\nMy name is ${name || '[your name]'}.\n\nTopic: ${topic || '[not specified]'}\n\n${message || '[Tell us what you are exploring.]'}`;
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
        <select value={topic} onChange={(event) => setTopic(event.target.value)}>
          <option value="">Select a topic</option>
          <option value="ai-ml">AI / Machine Learning</option>
          <option value="custom-software">Custom Software</option>
          <option value="cloud-solutions">Cloud Solutions</option>
          <option value="research-analytics">Research & Analytics</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label>
        Details
        <textarea value={message} onChange={(event) => setMessage(event.target.value)} placeholder="A short description of the problem, opportunity, or question." rows={5} />
      </label>
      <button type="button" className="button button--solid" onClick={copyMessage}>
        {copied ? 'Message copied' : 'Copy message to send'}
      </button>
      <p className="form-note">There is no backend connected to this site yet. Copy your message into your preferred email or messaging channel; no submission is claimed.</p>
    </div>
  );
}
