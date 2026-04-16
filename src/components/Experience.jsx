import Section, { SectionLabel, SectionTitle } from "./Section";
import { motion } from "framer-motion";
import { experience, education } from "../data";

function TimelineItem({ item, index }) {
  return (
    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} style={{ position: "relative", paddingBottom: "3rem", paddingLeft: "0" }}>
      {/* dot */}
      <div
        style={{
          position: "absolute",
          left: -34,
          top: 6,
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: item.current ? "var(--accent)" : "var(--muted)",
          border: "2px solid var(--bg)",
          boxShadow: item.current ? "0 0 0 4px rgba(108,99,255,0.2)" : "none",
        }}
      />

      <div style={{ fontSize: "0.68rem", letterSpacing: "0.1em", color: "var(--accent)", marginBottom: "0.4rem" }}>{item.period}</div>

      <div style={{ fontFamily: "Syne", fontWeight: 700, fontSize: "1.2rem", marginBottom: "0.2rem" }}>{item.company}</div>

      <div style={{ fontSize: "0.8rem", color: "var(--muted)", marginBottom: "1rem" }}>
        {item.role} · {item.location}
      </div>

      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {item.bullets.map((b, i) => (
          <li key={i} style={{ fontSize: "0.84rem", color: "var(--muted)", lineHeight: 1.65, paddingLeft: "1.1rem", position: "relative" }}>
            <span style={{ position: "absolute", left: 0, color: "var(--accent)", fontSize: "0.75rem" }}>→</span>
            {b}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <Section id="experiencia">
      <SectionLabel>Experiência</SectionLabel>
      <SectionTitle>Percurso profissional</SectionTitle>

      {/* Timeline */}
      <div style={{ position: "relative", paddingLeft: "2rem" }}>
        {/* vertical line */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 8,
            bottom: 0,
            width: 1,
            background: "linear-gradient(to bottom, var(--accent) 0%, rgba(108,99,255,0.1) 100%)",
          }}
        />

        {experience.map((item, i) => (
          <TimelineItem key={item.id} item={item} index={i} />
        ))}
      </div>

      {/* Education */}
      {education.length > 0 && (
        <div style={{ marginTop: "4rem" }}>
          <SectionLabel style={{ marginTop: "3rem" }}>Educação</SectionLabel>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
            {education.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius)",
                  padding: "1.75rem",
                  display: "flex",
                  gap: "1.5rem",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ fontSize: "1.8rem", flexShrink: 0 }}>🎓</div>
                <div>
                  <div style={{ fontFamily: "Syne", fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{edu.degree}</div>
                  <div style={{ fontSize: "0.82rem", color: "var(--muted)", marginBottom: "0.25rem" }}>
                    {edu.school} · {edu.location}
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "var(--accent)", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>{edu.period}</div>
                  {edu.description && <p style={{ fontSize: "0.83rem", color: "var(--muted)", lineHeight: 1.7 }}>{edu.description}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
