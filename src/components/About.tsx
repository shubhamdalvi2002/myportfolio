import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

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
                I am a final-year <span className="text-white font-medium">MSc Computer Science student</span> with a strong interest in web development and building practical software solutions. Alongside my technical journey, I run a mutual fund consultancy platform, <a href="https://finncap-in.vercel.app/" target="_blank" rel="noreferrer" className="text-accent hover:text-white underline decoration-accent/30 hover:decoration-white transition-all duration-300 font-medium inline-flex items-center gap-0.5">FinAura Capital <ArrowUpRight size={14} className="shrink-0" /></a>, where I help clients understand investment options and make informed financial decisions.
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

          {/* Image Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 glass-card p-3 overflow-hidden relative group min-h-[450px] md:min-h-full flex flex-col justify-end"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent z-10 pointer-events-none" />
            <img
              src="https://lh3.googleusercontent.com/d/165KN0eFOsXd86rEWxmXaQhj-FEFmLlQd"
              alt="Shubham Dalvi"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-top opacity-95 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            <div className="relative z-20 p-6 text-left">
              <div className="font-display text-2.5xl text-white font-medium tracking-tight">Shubham Dalvi</div>
              <div className="font-sans text-xs text-accent mt-1.5 uppercase tracking-wider">Founder, FinAura Capital</div>
            </div>
          </motion.div>

          {/* Location/Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-6 glass-card p-12 bg-accent text-white"
          >
            <div className="h-full flex flex-col justify-between">
              <div className="font-sans text-[11px] uppercase tracking-widest opacity-60">Current Status</div>
              <div className="mt-8">
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
            transition={{ delay: 0.3 }}
            className="md:col-span-6 glass-card p-12"
          >
            <div className="font-sans text-[11px] uppercase tracking-widest text-white/30 mb-8">Interests</div>
            <div className="flex flex-wrap gap-3">
              {["FinTech", "AI/ML", "Cloud Architecture", "UI Design", "Stock Market"].map((item) => (
                <span key={item} className="px-4 py-2 rounded-full border border-white/10 font-sans text-xs text-white/60 hover:border-accent hover:text-white transition-colors duration-300">
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


