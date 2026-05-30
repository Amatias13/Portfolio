import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiPhone, FiSend, FiCheck, FiAlertCircle } from "react-icons/fi";
import { useLang } from "../../hooks/useLang";
import { useTranslation } from "../../i18n/translations";
import { personal } from "../../data";
import { sendContact } from "../../services/emailjs";
import "./styles.css";

export default function Contact() {
  const { lang } = useLang();
  const tr = useTranslation(lang);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const socials = [
    { icon: FiGithub,   label: "GitHub",   href: personal.github,  external: true },
    { icon: FiLinkedin, label: "LinkedIn", href: personal.linkedin, external: true },
    { icon: FiPhone,    label: personal.phone, href: `tel:+${personal.phone.replace(/\D/g, "")}`, external: false },
  ];

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    try {
      await sendContact(form);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <motion.div
      id="contacto"
      className="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="contact__label">{tr.contact.label}</div>
      <h2 className="contact__title">{tr.contact.title}</h2>
      <p className="contact__subtitle">{tr.contact.subtitle}</p>

      <div className="contact__layout">
        {/* Left — form */}
        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="contact__row">
            <div className="contact__field">
              <label className="contact__field-label">{tr.contact.form_name}</label>
              <input
                className="contact__input"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={tr.contact.placeholder_name}
                required
                disabled={status === "loading"}
              />
            </div>
            <div className="contact__field">
              <label className="contact__field-label">{tr.contact.form_email}</label>
              <input
                className="contact__input"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={tr.contact.placeholder_email}
                required
                disabled={status === "loading"}
              />
            </div>
          </div>

          <div className="contact__field">
            <label className="contact__field-label">{tr.contact.form_message}</label>
            <textarea
              className="contact__input contact__textarea"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={tr.contact.placeholder_message}
              required
              rows={5}
              disabled={status === "loading"}
            />
          </div>

          <button
            type="submit"
            className={`contact__submit contact__submit--${status}`}
            disabled={status === "loading" || status === "success"}
          >
            <AnimatePresence mode="wait">
              {status === "idle" && (
                <motion.span key="idle" className="contact__submit-inner" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <FiSend size={14} /> {tr.contact.form_send}
                </motion.span>
              )}
              {status === "loading" && (
                <motion.span key="loading" className="contact__submit-inner" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <span className="contact__spinner" /> {tr.contact.form_sending}
                </motion.span>
              )}
              {status === "success" && (
                <motion.span key="success" className="contact__submit-inner" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <FiCheck size={14} /> {tr.contact.form_sent}
                </motion.span>
              )}
              {status === "error" && (
                <motion.span key="error" className="contact__submit-inner" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <FiAlertCircle size={14} /> {tr.contact.form_error}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </form>

        {/* Right — info */}
        <div className="contact__info">
          <a href={`mailto:${personal.email}`} className="contact__email">
            {personal.email}
          </a>
          <div className="contact__socials">
            {socials.map(({ icon, label, href, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="contact__social-btn"
              >
                {React.createElement(icon, { size: 14 })}
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
