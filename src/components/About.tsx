import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-32 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[1px] bg-accent" />
            <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-accent">Biography</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display leading-[1.1] tracking-tighter max-w-4xl">
            A fusion of academic precision and creative engineering.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 glass-card p-12 flex flex-col justify-between"
          >
            <div className="space-y-8 max-w-2xl">
              <p className="font-sans text-lg md:text-xl text-white/60 leading-relaxed">
                I am a final-year <span className="text-white font-medium">MSc Computer Science student</span> with a strong interest in web development and building practical software solutions. Alongside my technical journey, I run a mutual fund consultancy platform, <span className="text-accent">FinAura Capital</span>, where I help clients understand investment options and make informed financial decisions.
              </p>
              <p className="font-sans text-lg md:text-xl text-white/60 leading-relaxed">
                This combination of technology and finance allows me to build solutions that are both technically strong and aligned with real-world financial needs. I am continuously improving my skills in both domains.
              </p>
            </div>
            <div className="mt-12 flex gap-12">
              <div>
                <div className="text-4xl font-display mb-2">FinAura</div>
                <div className="font-sans text-[10px] uppercase tracking-widest text-white/30">Capital Platform</div>
              </div>
              <div>
                <div className="text-4xl font-display mb-2">MSc</div>
                <div className="font-sans text-[10px] uppercase tracking-widest text-white/30">Computer Science</div>
              </div>
            </div>
          </motion.div>

          {/* Location/Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 glass-card p-12 bg-accent text-white"
          >
            <div className="h-full flex flex-col justify-between">
              <div className="font-sans text-[11px] uppercase tracking-widest opacity-60">Current Status</div>
              <div>
                <div className="text-3xl font-display mb-4">Available for innovative projects.</div>
                <div className="font-sans text-sm opacity-80">Based in Pune, India. Working globally.</div>
              </div>
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 glass-card p-12"
          >
            <div className="font-sans text-[11px] uppercase tracking-widest text-white/30 mb-8">Interests</div>
            <div className="flex flex-wrap gap-3">
              {["FinTech", "AI/ML", "Cloud Architecture", "UI Design", "Stock Market"].map((item) => (
                <span key={item} className="px-4 py-2 rounded-full border border-white/10 font-sans text-xs text-white/60">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Academic Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-12 glass-card p-12"
          >
            <div className="font-sans text-[11px] uppercase tracking-widest text-white/30 mb-8">Academic Achievements</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h4 className="text-2xl font-display mb-1">MSc Computer Science</h4>
                  <p className="font-sans text-sm text-accent mb-4">Nowrosjee Wadia College, Pune · 2025 — 2027</p>
                  <div className="space-y-3">
                    <p className="font-sans text-[10px] uppercase tracking-widest text-white/30">Relevant Coursework</p>
                    <div className="flex flex-wrap gap-2">
                      {["Advanced Software Engineering", "Cloud Computing", "FinTech Applications", "Distributed Systems", "Machine Learning"].map(course => (
                        <span key={course} className="text-[11px] text-white/60 bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-2xl font-display mb-1">BSc Computer Science</h4>
                  <p className="font-sans text-sm text-accent mb-4">Agasti College, Akole (SPPU) · 2021 — 2024</p>
                  <div className="space-y-3">
                    <p className="font-sans text-[10px] uppercase tracking-widest text-white/30">Relevant Coursework</p>
                    <div className="flex flex-wrap gap-2">
                      {["Data Structures & Algorithms", "Database Management", "Web Technologies", "Operating Systems", "Computer Networks"].map(course => (
                        <span key={course} className="text-[11px] text-white/60 bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


