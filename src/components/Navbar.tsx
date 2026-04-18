import { motion } from "motion/react";
import { Mail } from "lucide-react";

export default function Navbar() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-8 md:px-16 pointer-events-none"
    >
      <div className="flex items-center gap-4 pointer-events-auto">
        <a href="#hero" className="font-display text-xl font-bold tracking-tighter">
          SD<span className="text-accent">.</span>
        </a>
      </div>

      <div className="hidden md:flex items-center gap-12 pointer-events-auto">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="font-sans text-[11px] uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-8 pointer-events-auto">
        <a 
          href="#contact" 
          className="group flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.2em] text-white hover:text-accent transition-colors"
        >
          <span className="w-8 h-[1px] bg-white/20 group-hover:bg-accent transition-colors" />
          Let's Talk
        </a>
      </div>
    </motion.nav>
  );
}

