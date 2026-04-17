import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./styles.css";

export default function Section({ id, children }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      className="section"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}

export function SectionLabel({ children }) {
  return (
    <div className="section-label">
      {children}
      <div className="section-label__line" />
    </div>
  );
}

export function SectionTitle({ children }) {
  return <h2 className="section-title">{children}</h2>;
}

export function Divider() {
  return <div className="divider" />;
}
