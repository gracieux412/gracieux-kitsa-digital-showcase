import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Target, Eye, Heart, Code, Lightbulb, Shield } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly explore new technologies and methodologies to deliver cutting-edge solutions.",
  },
  {
    icon: Heart,
    title: "Impact",
    description: "We build technology that makes a real difference in people's lives and communities.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We maintain the highest standards of honesty, transparency, and ethical conduct.",
  },
  {
    icon: Code,
    title: "Excellence",
    description: "We are committed to delivering exceptional quality in every project we undertake.",
  },
];

const timeline = [
  { year: "2019", event: "RyanPrime Founded", description: "Started with a vision to transform digital landscapes." },
  { year: "2020", event: "First Major Client", description: "Delivered our first enterprise-level web application." },
  { year: "2021", event: "Mobile Division Launch", description: "Expanded into mobile application development." },
  { year: "2022", event: "Fish Farm App Launch", description: "Released our innovative fish farm management solution." },
  { year: "2023", event: "Refugee Rights Initiative", description: "Began development of the refugee rights advocacy platform." },
  { year: "2024", event: "Hosting Services", description: "Launched comprehensive hosting and infrastructure services." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
              className="absolute -top-32 -right-32 w-96 h-96 border border-border/20 rounded-full"
            />
          </div>

          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
                About Us
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
                The Story Behind{" "}
                <span className="gradient-text">RyanPrime</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                Founded by Gracieux Kitsa, RyanPrime is more than a technology company—we're 
                a team of passionate innovators dedicated to building digital solutions that 
                transform businesses and empower communities around the world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-card p-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center mb-6">
                  <Target className="text-white" size={28} />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver innovative, high-quality digital solutions that empower businesses 
                  and organizations to achieve their goals while making a positive impact on 
                  communities worldwide. We leverage cutting-edge technologies to solve real-world 
                  problems and create lasting value.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-card p-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-orange-500 flex items-center justify-center mb-6">
                  <Eye className="text-white" size={28} />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be a leading force in digital transformation, recognized globally for our 
                  commitment to excellence, innovation, and social responsibility. We envision 
                  a world where technology serves as a bridge to opportunity and empowerment 
                  for all.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CEO Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square max-w-md mx-auto relative">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl" />
                  <div className="relative glass-card rounded-3xl overflow-hidden h-full flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center mb-6">
                        <span className="font-display text-5xl font-bold text-white">GK</span>
                      </div>
                      <h3 className="font-display text-2xl font-bold text-foreground">Gracieux Kitsa</h3>
                      <p className="text-primary font-medium">Founder & CEO</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
                  Leadership
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Meet Our <span className="gradient-text">Founder</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Gracieux Kitsa is a visionary technologist and entrepreneur with a passion 
                  for using technology to solve real-world problems. With years of experience 
                  in software development and digital innovation, he founded RyanPrime with 
                  a mission to create impactful digital solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Under his leadership, RyanPrime has delivered numerous successful projects 
                  across various industries, from agriculture technology to humanitarian 
                  applications. His commitment to excellence and social responsibility 
                  continues to drive the company's growth and impact.
                </p>
                <blockquote className="border-l-4 border-primary pl-6 text-foreground italic">
                  "Technology should not just be about profits—it should be about purpose. 
                  Every line of code we write should contribute to making the world a better place."
                </blockquote>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
                What Drives Us
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold">
                Our Core <span className="gradient-text">Values</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 text-center hover-glow"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center mb-4">
                    <value.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
                Our Journey
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold">
                Company <span className="gradient-text">Timeline</span>
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 pb-12 border-l-2 border-border last:pb-0"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-gradient-to-br from-primary to-blue-500" />
                  <span className="text-primary font-display font-bold text-lg">{item.year}</span>
                  <h3 className="font-display text-xl font-semibold text-foreground mt-1 mb-2">
                    {item.event}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
