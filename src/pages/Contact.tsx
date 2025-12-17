import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock, 
  Linkedin, 
  Twitter, 
  Github,
  MessageSquare,
  CheckCircle
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@ryanprime.com",
    description: "We'll respond within 24 hours",
    gradient: "from-primary to-blue-500",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 (555) 123-4567",
    description: "Mon-Fri from 9am to 6pm",
    gradient: "from-emerald-500 to-green-500",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "123 Tech Street",
    description: "Innovation City, IC 12345",
    gradient: "from-accent to-orange-500",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "9:00 AM - 6:00 PM",
    description: "Monday to Friday",
    gradient: "from-purple-500 to-pink-500",
  },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
              className="absolute top-20 -right-40 w-80 h-80 border border-primary/20 rounded-full"
            />
            <motion.div
              animate={{
                rotate: [360, 0],
              }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-20 -left-20 w-60 h-60 border border-accent/20 rounded-full"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl"
            />
          </div>

          <div className="container mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center mb-8"
              >
                <MessageSquare className="text-white" size={36} />
              </motion.div>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
                Get in Touch
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
                Let's Start a{" "}
                <span className="gradient-text">Conversation</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                Have a project in mind or just want to say hello? We'd love to hear from you. 
                Reach out and let's create something amazing together.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 text-center hover-glow group"
                >
                  <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${info.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {info.title}
                  </h3>
                  <p className="text-foreground font-medium mb-1">{info.value}</p>
                  <p className="text-muted-foreground text-sm">{info.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Additional Info */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Form - Takes 3 columns */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                <div className="glass-card p-8 md:p-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Your Name
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="bg-secondary/50 border-border/50 focus:border-primary h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Email Address
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="bg-secondary/50 border-border/50 focus:border-primary h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Subject
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        required
                        className="bg-secondary/50 border-border/50 focus:border-primary h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Your Message
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, ideas, or questions..."
                        required
                        rows={6}
                        className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="hero"
                      size="xl"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                        />
                      ) : (
                        <>
                          Send Message
                          <Send size={18} />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </motion.div>

              {/* Additional Info - Takes 2 columns */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:col-span-2 space-y-8"
              >
                {/* Why Choose Us */}
                <div className="glass-card p-8">
                  <h3 className="font-display text-xl font-bold text-foreground mb-6">
                    Why Work With Us?
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Expert team with years of experience",
                      "Custom solutions tailored to your needs",
                      "Transparent communication throughout",
                      "On-time delivery guaranteed",
                      "Ongoing support and maintenance",
                    ].map((item, index) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="text-primary shrink-0 mt-0.5" size={18} />
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Social Links */}
                <div className="glass-card p-8">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    Connect With Us
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Follow us on social media for updates, insights, and more.
                  </p>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                        aria-label={social.label}
                      >
                        <social.icon size={22} />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="glass-card p-8 bg-gradient-to-br from-primary/10 to-blue-500/10 border-primary/20">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    Need Quick Response?
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    For urgent inquiries, feel free to reach out directly:
                  </p>
                  <a 
                    href="mailto:hello@ryanprime.com"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                  >
                    <Mail size={18} />
                    hello@ryanprime.com
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden h-80 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-card to-secondary flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-primary mx-auto mb-4" size={48} />
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    Our Location
                  </h3>
                  <p className="text-muted-foreground">
                    123 Tech Street, Innovation City, IC 12345
                  </p>
                </div>
              </div>
              {/* Decorative grid pattern */}
              <div className="absolute inset-0 opacity-10" 
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300d4ff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
