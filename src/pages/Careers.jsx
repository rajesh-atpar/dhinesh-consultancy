import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, X, Briefcase, MapPin, Clock, DollarSign, Users, Zap, Heart } from 'lucide-react';
import Button from '../components/Button';

const Careers = () => {
  const [expandedJob, setExpandedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / New York',
      type: 'Full-time',
      salary: '$120k - $180k',
      description: 'We are looking for an experienced Full Stack Developer to join our engineering team. You will be responsible for developing and maintaining web applications using modern technologies.',
      requirements: [
        '5+ years of experience in full-stack development',
        'Proficiency in React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS, Azure)',
        'Strong problem-solving skills',
        'Excellent communication abilities',
      ],
    },
    {
      id: 2,
      title: 'DevOps Engineer',
      department: 'Operations',
      location: 'San Francisco',
      type: 'Full-time',
      salary: '$130k - $190k',
      description: 'Join our DevOps team to help build and maintain our infrastructure. You will work on CI/CD pipelines, containerization, and cloud infrastructure.',
      requirements: [
        '3+ years of DevOps experience',
        'Expertise in Docker, Kubernetes, and Terraform',
        'Experience with AWS or GCP',
        'Knowledge of monitoring and logging tools',
        'Scripting skills (Bash, Python)',
      ],
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote / London',
      type: 'Full-time',
      salary: '$90k - $130k',
      description: 'We are seeking a talented UX/UI Designer to create beautiful and intuitive user experiences. You will work closely with product and engineering teams.',
      requirements: [
        '4+ years of UX/UI design experience',
        'Proficiency in Figma, Sketch, or Adobe XD',
        'Strong portfolio showcasing design skills',
        'Understanding of user research methods',
        'Experience with design systems',
      ],
    },
    {
      id: 4,
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Remote',
      type: 'Full-time',
      salary: '$140k - $200k',
      description: 'Help us turn data into insights. You will work on machine learning models, data analysis, and predictive analytics projects.',
      requirements: [
        'Master\'s degree in Data Science or related field',
        '3+ years of experience in data science',
        'Proficiency in Python, R, and SQL',
        'Experience with ML frameworks (TensorFlow, PyTorch)',
        'Strong statistical analysis skills',
      ],
    },
  ];

  const benefits = [
    { icon: DollarSign, title: 'Competitive Salary', description: 'Top-tier compensation packages' },
    { icon: Heart, title: 'Health Benefits', description: 'Comprehensive medical coverage' },
    { icon: Zap, title: 'Flexible Hours', description: 'Work-life balance matters' },
    { icon: Users, title: 'Team Culture', description: 'Collaborative and supportive environment' },
  ];

  const handleApply = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

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
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Build the future of technology with us. We're looking for talented
              individuals who share our passion for innovation and excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
          >
            Why Work With Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="p-6 bg-gray-900 rounded-2xl hover:bg-gray-800 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-white text-black flex items-center justify-center mx-auto mb-4">
                  <benefit.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
          >
            Open Positions
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black rounded-2xl border border-gray-800 shadow-lg overflow-hidden"
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                        <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm font-medium rounded-full">
                          {job.department}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-gray-300 mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin size={18} />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={18} />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign size={18} />
                          <span>{job.salary}</span>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedJob === job.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={24} className="text-gray-300" />
                    </motion.div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedJob === job.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-gray-800 pt-6">
                        <p className="text-gray-300 mb-6 leading-relaxed">{job.description}</p>
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, reqIndex) => (
                              <li key={reqIndex} className="flex items-start gap-2 text-gray-300">
                                <span className="text-white mt-1">•</span>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button
                          onClick={() => handleApply(job)}
                          className="w-full sm:w-auto"
                        >
                          Apply Now
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-black border border-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-white">
                    Apply for {selectedJob?.title}
                  </h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Close"
                  >
                    <X size={24} />
                  </button>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Resume/CV *
                    </label>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Cover Letter
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent resize-none"
                      placeholder="Tell us why you're interested in this position..."
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button
                      type="submit"
                      className="flex-1"
                      onClick={(e) => {
                        e.preventDefault();
                        alert('Application submitted! (This is a demo)');
                        setIsModalOpen(false);
                      }}
                    >
                      Submit Application
                    </Button>
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Careers;
