import { motion } from "motion/react";
import Scene3D from "./Scene3D";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <Scene3D />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-white/40">
            MSc Computer Science Student | Mutual Fund Distributor
          </span>
        </motion.div>

        <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-display leading-[0.9] tracking-tighter mb-16">
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="block"
          >
            Shubham Dalvi
          </motion.span>
        </h1>

        <div className="flex flex-col md:flex-row md:items-center gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center gap-6"
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-white text-black font-sans text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-accent hover:text-white transition-all duration-500"
            >
              View Selected Work
            </a>
            <a
              href="#about"
              className="font-sans text-[11px] uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors"
            >
              Read Biography
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="hidden md:block h-[1px] flex-1 bg-white/10"
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 right-8 md:right-16 flex items-center gap-4"
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/20">Scroll to explore</span>
        <div className="w-12 h-[1px] bg-white/20" />
      </motion.div>
    </section>
  );
}


