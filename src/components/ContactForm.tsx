"use client";

import { useState, useCallback, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<{ text: string; type: "" | "ok" | "err" }>({
    text: "",
    type: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ text: "", type: "" });

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    if (!name || !email) {
      setStatus({
        text: "Please add your name and email so we can reply.",
        type: "err",
      });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({
        text: "That email address does not look right.",
        type: "err",
      });
      return;
    }

    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("bad status");
      form.reset();
      setStatus({
        text: "Thank you. Your brief is with us, we will come back within 24 to 48 hours.",
        type: "ok",
      });
    } catch {
      setStatus({
        text: "Something went wrong sending that. Please try again in a moment.",
        type: "err",
      });
    } finally {
      setSending(false);
    }
  }, []);

  return (
    <form className="footer_form" id="contactForm" noValidate onSubmit={handleSubmit}>
      <div className="footer_field-row">
        <div className="footer_field-block">
          <label className="footer_form-label" htmlFor="f-name">
            Full Name
          </label>
          <input
            className="footer_form-field"
            type="text"
            id="f-name"
            name="name"
            required
            maxLength={120}
            placeholder="Jane Doe"
          />
        </div>
        <div className="footer_field-block">
          <label className="footer_form-label" htmlFor="f-email">
            Email Address
          </label>
          <input
            className="footer_form-field"
            type="email"
            id="f-email"
            name="email"
            required
            maxLength={200}
            placeholder="jane@company.com"
          />
        </div>
      </div>
      <div className="footer_field-block textarea">
        <label className="footer_form-label" htmlFor="f-message">
          Message
        </label>
        <textarea
          className="footer_form-field textarea"
          id="f-message"
          name="message"
          required
          maxLength={4000}
          placeholder="Tell us about your project..."
        />
      </div>
      <button
        type="submit"
        className="button is-lime"
        id="formSubmit"
        disabled={sending}
      >
        {sending ? "Sending..." : "Send Message"}
      </button>
      <p
        className={`form_status${status.type === "ok" ? " is-ok" : ""}${status.type === "err" ? " is-err" : ""}`}
        id="formStatus"
        role="status"
        aria-live="polite"
      >
        {status.text}
      </p>
    </form>
  );
}
