import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiPhone } from "react-icons/fi";
import { useLang } from "../../context/LangContext";
import { useTranslation } from "../../i18n/translations";
import { personal } from "../../data";
import "./styles.css";

export default function Contact() {
  const { lang } = useLang();
  const tr       = useTranslation(lang);

  const socials = [
    { icon: FiGithub,   label: "GitHub",        href: personal.github },
    { icon: FiLinkedin, label: "LinkedIn",       href: personal.linkedin },
    { icon: FiPhone,    label: personal.phone,   href: `tel:${personal.phone.replace(/\s/g, "")}` },
  ];

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

      <a href={`mailto:${personal.email}`} className="contact__email">
        {personal.email}
      </a>

      <div className="contact__socials">
        {socials.map(({ icon, label, href }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" className="contact__social-btn">
            {React.createElement(icon, { size: 14 })}
            {label}
          </a>
        ))}
      </div>
    </motion.div>
  );
}
