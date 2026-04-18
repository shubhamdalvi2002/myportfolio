import { motion } from "motion/react";

export default function Experience() {
  const experiences = [
    {
      title: "Mutual Fund Distributor",
      company: "FinAura Capital",
      period: "2023 — Present",
      description: "Providing guidance on mutual fund investments, helping clients make informed financial decisions, and managing a digital financial consultancy platform.",
    },
  ];

  const education = [
    {
      degree: "MSc Computer Science",
      school: "Nowrosjee Wadia College, Pune",
      period: "2025 — 2027",
      description: "Currently pursuing advanced software engineering and specializing in intelligent systems and financial technology applications.",
    },
    {
      degree: "BSc Computer Science",
      school: "Agasti College, Akole (SPPU)",
      period: "2021 — 2024",
      description: "Foundation in algorithms, data structures, and full-stack web development. Affiliated with Savitribai Phule Pune University. Graduated with honors.",
    },
    {
      degree: "Higher Secondary Education",
      school: "Agasti JR College, Akole",
      period: "2018 — 2020",
      description: "Specialized in Physics, Chemistry, and Mathematics.",
    },
  ];

  return (
    <section id="experience" className="py-32 px-8 md:px-16 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Work Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[1px] bg-accent" />
                <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-accent">Career</span>
              </div>
              <h2 className="text-5xl font-display tracking-tighter">Experience</h2>
            </motion.div>

            <div className="space-y-16">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-display group-hover:text-accent transition-colors">{exp.title}</h3>
                    <span className="font-sans text-[11px] uppercase tracking-widest text-white/20">{exp.period}</span>
                  </div>
                  <div className="font-sans text-sm text-white/40 mb-4">{exp.company}</div>
                  <p className="font-sans text-white/60 leading-relaxed max-w-md">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[1px] bg-accent" />
                <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-accent">Academic</span>
              </div>
              <h2 className="text-5xl font-display tracking-tighter">Education</h2>
            </motion.div>

            <div className="space-y-16">
              {education.map((edu, idx) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-display group-hover:text-accent transition-colors">{edu.degree}</h3>
                    <span className="font-sans text-[11px] uppercase tracking-widest text-white/20">{edu.period}</span>
                  </div>
                  <div className="font-sans text-sm text-white/40 mb-4">{edu.school}</div>
                  <p className="font-sans text-white/60 leading-relaxed max-w-md">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 pt-32 border-t border-white/5"
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="w-12 h-[1px] bg-accent" />
            <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-accent">Recognition</span>
            <h2 className="text-4xl font-display tracking-tighter ml-4">Certifications</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Full Stack Development", issuer: "Meta", date: "2024" },
              { title: "Financial Markets", issuer: "Yale University", date: "2023" },
              { title: "Cloud Practitioner", issuer: "AWS", date: "2024" },
            ].map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 group hover:border-accent/30 transition-colors"
              >
                <div className="text-white/20 mb-4 group-hover:text-accent transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15l-2 5 2 2 2-2-2-5z"/><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <h4 className="font-display text-xl mb-2">{cert.title}</h4>
                <div className="flex justify-between items-center">
                  <span className="font-sans text-xs text-white/40">{cert.issuer}</span>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-white/20">{cert.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

