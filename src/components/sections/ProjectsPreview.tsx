import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Fish, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const featuredProjects = [
  {
    title: "Fish Farm Mobile App",
    description: "A comprehensive mobile application for fish farm management, tracking, and optimization. Helping farmers increase productivity and sustainability.",
    icon: Fish,
    tags: ["React Native", "Node.js", "IoT"],
    gradient: "from-blue-500 to-cyan-500",
    status: "Live",
  },
  {
    title: "Refugee Rights App",
    description: "A mobile platform dedicated to advocating for refugee rights, providing resources, legal information, and community support.",
    icon: Heart,
    tags: ["Flutter", "Firebase", "AI"],
    gradient: "from-rose-500 to-pink-500",
    status: "In Development",
  },
];

export const ProjectsPreview = () => {
  return (
    <section className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Our Work
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We build solutions that make a difference. Here are some of our 
            highlighted projects that showcase our commitment to innovation.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="glass-card overflow-hidden h-full">
                {/* Gradient Header */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="text-white/30" size={120} />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "Live" 
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-accent/20 text-accent border border-accent/30"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-gradient-to-t from-card to-transparent"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-secondary text-muted-foreground text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <button className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                    View Project <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button asChild variant="heroOutline" size="lg">
            <Link to="/projects">
              View All Projects
              <ArrowRight size={18} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
