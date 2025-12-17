import { motion } from "framer-motion";
import { Globe, Code2, Smartphone, Server, Database, Zap } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Beautiful, responsive websites that capture your brand essence and engage your audience effectively.",
    gradient: "from-primary to-blue-500",
  },
  {
    icon: Code2,
    title: "Web Applications",
    description: "Powerful, scalable web applications built with modern technologies for optimal performance.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that deliver seamless experiences on any device.",
    gradient: "from-accent to-orange-500",
  },
  {
    icon: Server,
    title: "Hosting Services",
    description: "Reliable, secure hosting solutions with 99.9% uptime guarantee and 24/7 support.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Robust backend systems and APIs that power your applications with efficiency.",
    gradient: "from-red-500 to-rose-500",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed up your digital products with our expert performance tuning services.",
    gradient: "from-yellow-500 to-amber-500",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            What We Offer
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive digital solutions using cutting-edge technologies 
            to help your business thrive in the digital age.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="glass-card p-8 h-full hover-glow transition-all duration-500 group-hover:border-primary/30">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className="text-white" size={24} />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover gradient border effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-10`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
