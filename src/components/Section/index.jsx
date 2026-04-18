import { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import "./styles.css";

/**
 * The Section Label component is a styled label used to indicate the category or type of content within a section. 
 * It typically includes a line for visual separation and is designed to enhance the overall aesthetics of the section header.
 */
export function SectionLabel({ children }) {
  return (
    <div className="section-label">
      {children}
      <div className="section-label__line" />
    </div>
  );
}

/**
 * The Section Title component is a styled heading used to denote the title of a section. 
 * It is designed to be visually prominent and serves as a clear indicator of the content that follows within the section.
 */
export function SectionTitle({ children }) {
  return <h2 className="section-title">{children}</h2>;
}

/**
 * The Divider component is a simple horizontal line used to visually separate different sections or content areas within the portfolio website. 
 * It helps to create a clear distinction between different parts of the page, enhancing readability and organization.
 */
export function Divider() {
  return <div className="divider" />;
}


/**
 * The Section component serves as a reusable container for different sections of the portfolio website. 
 * It provides a consistent layout and animation for its child components, enhancing the overall user experience. 
 * The component uses framer-motion to animate its appearance as it comes into view, creating a smooth and engaging transition. 
 * It accepts an id prop for navigation purposes and renders any child components passed to it, allowing for flexible content organization within the portfolio.
 */
export default function Section({ id, children }) {
  // Create a ref for the section and determine if it is in view using framer-motion's useInView hook
  const ref = useRef(null);
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