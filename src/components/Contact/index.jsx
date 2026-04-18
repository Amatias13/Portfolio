import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiPhone } from "react-icons/fi";
import { useLang } from "../../context/LangContext";
import { useTranslation } from "../../i18n/translations";
import { personal } from "../../data";
import "./styles.css";

/**
 * The Contact section is a straightforward, no-frills way for visitors to get in touch. 
 * It features a clear call-to-action with my email address, along with quick links to my GitHub and LinkedIn profiles. 
 * The design is clean and minimal, ensuring that the focus remains on making it easy for people to reach out or connect with me professionally.
 */
export default function Contact() {
  // language and translations
  const { lang } = useLang();
  const tr = useTranslation(lang);

  // Social links with icons
  const socials = [
    { icon: FiGithub, label: "GitHub", href: personal.github },
    { icon: FiLinkedin, label: "LinkedIn", href: personal.linkedin },
    { icon: FiPhone, label: personal.phone, href: `tel:${personal.phone.replace(/\s/g, "")}` },
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
