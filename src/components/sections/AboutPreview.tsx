import { motion } from "framer-motion";
import { CheckCircle, Award, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { icon: Award, value: "5+", label: "Years Experience" },
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Clock, value: "100+", label: "Projects Completed" },
];

const highlights = [
  "Custom solutions tailored to your needs",
  "Modern tech stack & best practices",
  "Agile development methodology",
  "Ongoing support & maintenance",
];

export const AboutPreview = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 -right-64 w-[500px] h-[500px] border border-border/20 rounded-full pointer-events-none"
      />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              About RyanPrime
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Led by Vision,{" "}
              <span className="gradient-text">Driven by Innovation</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Founded and led by <span className="text-foreground font-medium">Gracieux Kitsa</span>, 
              RyanPrime is a technology company dedicated to building digital solutions that matter. 
              From empowering fish farms with smart technology to advocating for refugee rights 
              through innovative applications, we believe technology should serve humanity.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="text-primary shrink-0" size={20} />
                  <span className="text-foreground text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            <Button asChild variant="hero" size="lg">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main card */}
            <div className="glass-card p-8 md:p-12">
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center mb-4">
                      <stat.icon className="text-primary" size={24} />
                    </div>
                    <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative quote */}
              <div className="mt-10 pt-8 border-t border-border/50">
                <blockquote className="text-muted-foreground italic text-center">
                  "Technology should empower people and solve real-world problems."
                </blockquote>
                <p className="text-center mt-4 text-foreground font-medium">
                  — Gracieux Kitsa, CEO
                </p>
              </div>
            </div>

            {/* Floating decoration */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl bg-gradient-to-br from-accent to-orange-500 opacity-20 blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
