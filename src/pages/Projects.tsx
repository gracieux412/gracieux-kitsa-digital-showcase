import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ExternalLink, Fish, Heart, Globe, ShoppingCart, Building2, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Fish Farm Mobile App",
    description: "A comprehensive mobile application designed to revolutionize fish farm management. Features include real-time monitoring, feeding schedules, water quality tracking, inventory management, and harvest predictions powered by AI.",
    icon: Fish,
    tags: ["React Native", "Node.js", "IoT", "Machine Learning"],
    gradient: "from-blue-500 to-cyan-500",
    status: "Live",
    features: ["Real-time Monitoring", "AI Predictions", "Inventory Tracking", "Multi-farm Support"],
  },
  {
    title: "Refugee Rights App",
    description: "A humanitarian mobile platform dedicated to advocating for refugee rights. Provides legal resources, connects refugees with aid organizations, offers translation services, and facilitates community support networks.",
    icon: Heart,
    tags: ["Flutter", "Firebase", "AI Translation", "Cloud Functions"],
    gradient: "from-rose-500 to-pink-500",
    status: "In Development",
    features: ["Legal Resources", "Aid Connection", "Translation Services", "Community Forums"],
  },
  {
    title: "E-Commerce Platform",
    description: "A fully-featured e-commerce solution with modern design, secure payments, inventory management, and analytics dashboard. Built for scalability and optimal user experience.",
    icon: ShoppingCart,
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    gradient: "from-purple-500 to-violet-500",
    status: "Completed",
    features: ["Secure Payments", "Inventory System", "Analytics Dashboard", "Multi-vendor Support"],
  },
  {
    title: "Corporate Website Suite",
    description: "Professional corporate websites with modern design, CMS integration, SEO optimization, and responsive layouts. Perfect for businesses looking to establish a strong online presence.",
    icon: Building2,
    tags: ["React", "Sanity CMS", "SEO", "Analytics"],
    gradient: "from-emerald-500 to-green-500",
    status: "Ongoing",
    features: ["CMS Integration", "SEO Optimized", "Responsive Design", "Fast Loading"],
  },
  {
    title: "Environmental Monitoring",
    description: "An IoT-based environmental monitoring system that tracks air quality, weather patterns, and environmental metrics. Designed for municipalities and environmental agencies.",
    icon: Leaf,
    tags: ["IoT", "Python", "React", "Data Visualization"],
    gradient: "from-teal-500 to-cyan-500",
    status: "Completed",
    features: ["Real-time Data", "Alert System", "Historical Analytics", "API Access"],
  },
  {
    title: "Custom Web Applications",
    description: "Bespoke web applications tailored to specific business needs. From internal tools to customer-facing platforms, we build solutions that drive efficiency and growth.",
    icon: Globe,
    tags: ["Various Technologies", "Custom Solutions", "Scalable Architecture"],
    gradient: "from-amber-500 to-orange-500",
    status: "Ongoing",
    features: ["Custom Solutions", "Scalable", "Secure", "Maintainable"],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl"
            />
          </div>

          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
                Our Portfolio
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
                Projects That Make a{" "}
                <span className="gradient-text">Difference</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl">
                Explore our portfolio of innovative solutions that have transformed 
                businesses and empowered communities across the globe.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid gap-12">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Image/Visual */}
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className={`relative h-80 rounded-3xl bg-gradient-to-br ${project.gradient} overflow-hidden`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <project.icon className="text-white/20" size={200} />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                          project.status === "Live" 
                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                            : project.status === "In Development"
                            ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                            : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {project.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-lg bg-secondary text-muted-foreground text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button variant="heroOutline" size="lg">
                      View Details <ExternalLink size={18} />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Have a Project in Mind?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We'd love to hear about your ideas and discuss how we can bring them to life.
              </p>
              <Button variant="hero" size="xl" asChild>
                <a href="/contact">Start a Conversation</a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
