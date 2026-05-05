import { motion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "FinAura Capital",
      category: "Finance / Live Platform",
      description: "A live consultancy platform designed to guide users in mutual fund investments and informed financial decision-making.",
      image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&q=80&w=1200&h=800",
      tags: ["React", "Finance", "Consultancy"],
      link: "https://finncap-in.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-accent" />
              <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-accent">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-display leading-[1.1] tracking-tighter">
              Selected Works
            </h2>
          </div>
          <p className="font-sans text-white/40 max-w-sm mb-2">
            A curated selection of projects that demonstrate my technical range and design philosophy.
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-24 items-center group`}
            >
              <div className="flex-1 w-full">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-surface border border-white/5 shadow-2xl group-hover:shadow-accent/5 group-hover:border-white/10 transition-all duration-500"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 group-hover:-translate-y-3 group-hover:brightness-110 transition-all duration-1000 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-bg/20 group-hover:bg-transparent transition-colors duration-500" />
                  
                  {/* Subtle Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-linear-to-tr from-accent/5 to-transparent" />
                  </div>
                </motion.div>
              </div>

              <div className="flex-1 space-y-8">
                <div className="space-y-4">
                  <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-accent">{project.category}</span>
                  <h3 className="text-3xl md:text-5xl font-display tracking-tight">{project.title}</h3>
                </div>
                <p className="font-sans text-lg text-white/40 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-sans text-[10px] uppercase tracking-widest text-white/20 border border-white/10 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-6 md:gap-8 pt-4">
                  <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest hover:text-accent transition-colors">
                    View Project <ArrowUpRight size={16} />
                  </a>
                  <a href="https://github.com/shubhamdalvi2002" target="_blank" rel="noreferrer" className="flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                    Source Code <Github size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

