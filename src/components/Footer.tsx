import { motion } from "motion/react";
import { ArrowUp, Github, Linkedin, ExternalLink } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/shubham-dalvi-8bb31624b/", icon: Linkedin },
    { name: "GitHub", href: "https://github.com/shubhamdalvi2002", icon: Github },
    { name: "FinAura", href: "https://finncap-in.vercel.app/", icon: ExternalLink },
  ];

  return (
    <footer className="relative pt-32 pb-16 px-8 md:px-16 border-t border-white/5 overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 mb-24">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-8">
            <div className="font-display text-2xl font-bold tracking-tighter">
              SD<span className="text-accent">.</span>
            </div>
            <p className="font-sans text-white/40 max-w-sm leading-relaxed text-sm">
              Bridging the gap between sophisticated technical systems and strategic financial logic. 
              Designing the future of digital interactions.
            </p>
          </div>

          {/* Links Column */}
          <div className="space-y-6">
            <h4 className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/20">Navigation</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="font-sans text-[11px] uppercase tracking-widest text-white/40 hover:text-accent transition-colors block w-fit"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials Column */}
          <div className="space-y-6">
            <h4 className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/20">Connect</h4>
            <ul className="space-y-4">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a 
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 font-sans text-[11px] uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                  >
                    <social.icon size={14} className="group-hover:text-accent transition-colors" />
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/20">
              © {new Date().getFullYear()} Shubham Dalvi. All rights reserved.
            </div>
            <div className="flex gap-6">
              {["Privacy", "Terms"].map((link) => (
                <a key={link} href="#" className="font-sans text-[10px] uppercase tracking-widest text-white/10 hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <motion.button 
            onClick={scrollToTop}
            whileHover={{ y: -4 }}
            className="group flex items-center gap-3 font-sans text-[10px] uppercase tracking-[0.4em] text-white/30 hover:text-accent transition-colors"
          >
            Back to top
            <div className="p-3 rounded-full border border-white/10 group-hover:border-accent transition-colors">
              <ArrowUp size={14} />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

