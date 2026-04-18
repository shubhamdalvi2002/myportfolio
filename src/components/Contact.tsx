import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[1px] bg-accent" />
                <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-accent">Contact</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-display leading-[1] tracking-tighter mb-12">
                Let's start <br /> <span className="text-editorial">something</span> great.
              </h2>
              <p className="font-sans text-xl text-white/40 leading-relaxed max-w-md">
                I'm currently available for new projects and collaborations. If you have an idea, let's bring it to life.
              </p>
            </motion.div>

            <div className="space-y-12">
              <div className="space-y-4">
                <h3 className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/30 mb-4">Direct Contact</h3>
                <a href="mailto:shubhamdalvi7218@gmail.com" className="group flex items-center justify-between py-6 border-b border-white/10 hover:border-accent transition-colors">
                  <div className="flex flex-col">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-white/30">Personal Email</span>
                    <span className="font-display text-xl md:text-2xl">shubhamdalvi7218@gmail.com</span>
                  </div>
                  <ArrowUpRight size={20} className="text-white/20 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
                <a href="mailto:finnauracapital@gmail.com" className="group flex items-center justify-between py-6 border-b border-white/10 hover:border-accent transition-colors">
                  <div className="flex flex-col">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-white/30">Business Email</span>
                    <span className="font-display text-xl md:text-2xl">finnauracapital@gmail.com</span>
                  </div>
                  <ArrowUpRight size={20} className="text-white/20 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
                <a href="https://wa.me/917218918236" target="_blank" rel="noreferrer" className="group flex items-center justify-between py-6 border-b border-white/10 hover:border-accent transition-colors">
                  <div className="flex flex-col">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-white/30">WhatsApp</span>
                    <span className="font-display text-xl md:text-2xl">+91 72189 18236</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-opacity">Chat Now</span>
                    <ArrowUpRight size={20} className="text-white/20 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                </a>
              </div>

              <div className="space-y-6">
                <h3 className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/30">Socials & Platforms</h3>
                <div className="flex flex-wrap gap-x-12 gap-y-6">
                  <a href="https://www.linkedin.com/in/shubham-dalvi-8bb31624b/" target="_blank" rel="noreferrer" className="group flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                    LinkedIn <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a href="https://github.com/shubhamdalvi2002" target="_blank" rel="noreferrer" className="group flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                    GitHub <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a href="https://finncap-in.vercel.app/" target="_blank" rel="noreferrer" className="group flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                    FinAura Capital <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-12"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="font-sans text-[10px] uppercase tracking-widest text-white/30">Your Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-accent transition-colors font-sans text-lg" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="font-sans text-[10px] uppercase tracking-widest text-white/30">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-accent transition-colors font-sans text-lg" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="font-sans text-[10px] uppercase tracking-widest text-white/30">Project Details</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-accent transition-colors font-sans text-lg resize-none" placeholder="Tell me about your vision..." />
              </div>
              <button className="w-full py-6 bg-white text-black font-sans text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-accent hover:text-white transition-all duration-500">
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

