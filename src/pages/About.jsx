import { motion } from 'framer-motion';
import { Target, Eye, TrendingUp, Users, Award, Globe } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: '2015',
      title: 'Foundation',
      description: 'Started with a vision to transform businesses through technology.',
    },
    {
      year: '2018',
      title: 'Expansion',
      description: 'Expanded services and opened offices in multiple cities.',
    },
    {
      year: '2020',
      title: 'Innovation',
      description: 'Launched AI and cloud solutions division.',
    },
    {
      year: '2023',
      title: 'Recognition',
      description: 'Awarded Best IT Consultancy of the Year.',
    },
    {
      year: '2024',
      title: 'Global Reach',
      description: 'Serving clients across 50+ countries worldwide.',
    },
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    },
    {
      name: 'Sarah Williams',
      role: 'CTO',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    },
    {
      name: 'Michael Chen',
      role: 'Head of Engineering',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
    },
    {
      name: 'David Kim',
      role: 'Head of Operations',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    },
    {
      name: 'Lisa Anderson',
      role: 'Head of Marketing',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
    },
  ];

  const stats = [
    { icon: Users, value: '100+', label: 'Team Members' },
    { icon: Globe, value: '50+', label: 'Countries' },
    { icon: Award, value: '500+', label: 'Projects Completed' },
    { icon: TrendingUp, value: '98%', label: 'Client Satisfaction' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-black to-gray-900 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              About Us
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We are a team of passionate technologists dedicated to delivering
              exceptional digital solutions that drive business success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-8"
            >
              Our Story
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-lg text-gray-300 leading-relaxed"
            >
              <p>
                Founded in 2015, Dhinesh Consultancy emerged from a simple belief:
                technology should empower businesses, not complicate them. What started
                as a small team of developers has grown into a global consultancy
                serving clients across industries.
              </p>
              <p>
                Our journey has been marked by continuous innovation, client success,
                and a commitment to excellence. We've helped hundreds of companies
                transform their digital infrastructure, streamline operations, and
                achieve their strategic goals.
              </p>
              <p>
                Today, we stand as a trusted partner for businesses seeking to navigate
                the complexities of modern technology. Our expertise spans custom
                development, cloud solutions, data analytics, and strategic consulting.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-10 bg-black rounded-2xl border border-gray-800 shadow-lg"
            >
              <div className="w-16 h-16 rounded-xl bg-white text-black flex items-center justify-center mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To empower businesses worldwide with innovative technology solutions
                that drive growth, efficiency, and competitive advantage. We strive to
                be the trusted partner that transforms digital challenges into
                opportunities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-10 bg-black rounded-2xl border border-gray-800 shadow-lg"
            >
              <div className="w-16 h-16 rounded-xl bg-white text-black flex items-center justify-center mb-6">
                <Eye size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To become the world's most trusted technology consultancy, recognized
                for excellence, innovation, and transformative impact. We envision a
                future where every business can leverage technology to achieve
                extraordinary results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={28} />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
          >
            Our Journey
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex gap-8 mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse md:flex-row'
                }`}
              >
                <div className="flex-shrink-0 w-24 text-right md:text-left">
                  <div className="text-2xl font-bold text-white">{item.year}</div>
                </div>
                <div className="flex-shrink-0 w-1 bg-gray-700 relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white" />
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
          >
            Our Team
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group p-6 bg-gray-900 rounded-2xl hover:bg-gray-800 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-gray-300">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
