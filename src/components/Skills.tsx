import { motion } from "motion/react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Development",
      skills: ["React.js", "Node.js", "HTML / CSS", "JavaScript"],
    },
    {
      title: "Data & Logic",
      skills: ["MySQL", "Python", "Git & GitHub", "Problem Solving"],
    },
    {
      title: "Finance",
      skills: ["Financial Planning", "Mutual Funds", "Investment Advisory", "Market Analysis"],
    },
    {
      title: "Business",
      skills: ["Client Relations", "Consultancy", "Digital Strategy", "Platform Management"],
    },
  ];

  return (
    <section id="skills" className="py-32 px-8 md:px-16 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[1px] bg-accent" />
            <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-accent">Expertise</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display leading-[1.1] tracking-tighter">
            Technical <span className="text-editorial">Proficiency</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="font-display text-2xl mb-8 border-b border-white/10 pb-4">{category.title}</h3>
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-4 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform" />
                    <span className="font-sans text-sm text-white/40 group-hover:text-white transition-colors">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

