import { motion } from 'framer-motion';
import { ArrowRight, Code, Cloud, Database, Shield, Zap, Users, Award, Clock } from 'lucide-react';
import Button from '../components/Button';

const Home = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions that scale with your business needs.',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Migrate and optimize your infrastructure in the cloud.',
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform data into actionable insights and strategies.',
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security to protect your digital assets.',
    },
    {
      icon: Zap,
      title: 'DevOps & Automation',
      description: 'Streamline workflows and accelerate deployment cycles.',
    },
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'Strategic guidance to drive digital transformation.',
    },
  ];

  const technologies = [
    'React', 'Next.js', 'Node.js', 'Python', 'AWS', 'Docker',
    'Kubernetes', 'TypeScript', 'GraphQL', 'MongoDB', 'PostgreSQL', 'Redis'
  ];

  const highlights = [
    {
      icon: Award,
      title: 'Award-Winning',
      description: 'Recognized for excellence in innovation',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: '100+ skilled professionals',
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Agile methodology for rapid results',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'DC transformed our digital infrastructure. Their expertise and dedication are unmatched.',
    },
    {
      name: 'Michael Chen',
      role: 'CEO, StartupHub',
      content: 'Working with DC was a game-changer. They delivered beyond our expectations.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Director, Global Solutions',
      content: 'Professional, innovative, and results-driven. Highly recommend their services.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight"
            >
              Building Digital
              <br />
              <span className="text-gradient-accent">Excellence</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
            >
              Transforming businesses through innovative technology solutions
              and strategic consulting.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-4"
            >
              <Button to="/contact" size="lg" className="w-full sm:w-auto">
                Get Started
               
              </Button>
              <Button
                to="/about"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-8 rounded-2xl bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-white text-black flex items-center justify-center mb-6">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-300">
              Cutting-edge tools and frameworks we work with
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -4 }}
                className="px-6 py-3 bg-black rounded-full border border-gray-700 hover:border-white hover:shadow-lg transition-all duration-300"
              >
                <span className="text-white font-medium">{tech}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Why Choose Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center mx-auto mb-6">
                  <highlight.icon size={36} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-300">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Client Testimonials
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="p-8 bg-black rounded-2xl border border-gray-800 hover:border-gray-700 hover:shadow-xl transition-shadow duration-300"
              >
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
