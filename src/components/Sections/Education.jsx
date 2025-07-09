import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, MapPin, Calendar, BookOpen, Award, 
  TrendingUp, Users, Globe, Code, Brain, Zap
} from 'lucide-react';
import GlowingCard from '../UI/GlowingCard';

const Education = () => {
  const education = {
    degree: 'B.Tech Computer Science & Engineering',
    status: 'Work in Progress',
    period: '2024 - 2028',
    institution: "Vel's Institute of Science, Technology and Advanced Studies",
    campus: 'Pallvaram, Chennai',
    enrollment: 'Bachelor\'s enrollment: B.Tech',
    gpa: 'In Progress',
    achievements: [
      'Currently pursuing Computer Science & Engineering',
      'Focus on modern web technologies and AI/ML',
      'Active participation in hackathons and coding competitions',
      'Building real-world projects alongside academic studies'
    ]
  };

  const certifications = [
    {
      name: 'MERN Stack Development',
      issuer: 'Self-Learned',
      period: '2024 - Present',
      description: 'Full-stack development with MongoDB, Express.js, React, Node.js',
      icon: <Code className="w-5 h-5" />
    },
    {
      name: 'Data Structures & Algorithms',
      issuer: 'LeetCode',
      period: '2024 - Present',
      description: '200+ problems solved in Java with optimal solutions',
      icon: <Brain className="w-5 h-5" />
    },
    {
      name: 'AI/ML Integration',
      issuer: 'OpenAI & Self-Learned',
      period: '2024 - Present',
      description: 'GPT-4o integration and AI-powered features development',
      icon: <TrendingUp className="w-5 h-5" />
    }
  ];

  const achievements = [
    {
      title: 'Hackathon Participation',
      description: 'PromptRepo Hackathon - Inter-university team competition (participated)',
      icon: <Award className="w-5 h-5" />,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Rapid Prototyping',
      description: 'Delivered AI-powered prototype in under 24 hours',
      icon: <Zap className="w-5 h-5" />,
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Team Leadership',
      description: 'Mentored peers and coordinated interdisciplinary teams',
      icon: <Users className="w-5 h-5" />,
      color: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'Project Scaling',
      description: 'Launched and scaled MicroSaaS platform with 100+ users',
      icon: <Globe className="w-5 h-5" />,
      color: 'from-green-400 to-emerald-500'
    }
  ];

  return (
    <section id="education" className="relative py-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Education & Achievements
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm">
            Academic journey and professional achievements in technology and innovation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <GlowingCard className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{education.degree}</h3>
                  <div className="flex items-center space-x-2 text-cyan-400 text-xs mt-1">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                    <span>{education.status}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-2 text-gray-300 text-sm">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span className="font-medium">{education.institution}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300 text-sm">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Campus: {education.campus}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300 text-sm">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span>{education.period}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300 text-sm">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span>{education.enrollment}</span>
                </div>
              </div>

              <div className="border-t border-slate-700 pt-4">
                <h4 className="text-base font-semibold text-white mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {education.achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-2 text-gray-300 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </GlowingCard>
          </motion.div>

          {/* Certifications & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Certifications */}
            <GlowingCard className="p-4">
              <h3 className="text-lg font-bold text-white mb-4">Certifications & Skills</h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex items-start space-x-3 p-3 bg-slate-800/30 rounded-lg border border-slate-700 group-hover:border-cyan-500/50 transition-all duration-300">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {cert.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-sm group-hover:text-cyan-400 transition-colors">
                          {cert.name}
                        </h4>
                        <p className="text-gray-400 text-xs">{cert.issuer}</p>
                        <p className="text-gray-300 text-xs mt-1">{cert.description}</p>
                        <p className="text-cyan-400 text-xs mt-1">{cert.period}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlowingCard>

            {/* Achievements */}
            <GlowingCard className="p-4">
              <h3 className="text-lg font-bold text-white mb-4">Key Achievements</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="p-3 bg-slate-800/30 rounded-lg border border-slate-700 group-hover:border-cyan-500/50 transition-all duration-300">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className={`w-6 h-6 bg-gradient-to-r ${achievement.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          {achievement.icon}
                        </div>
                        <h4 className="text-white font-semibold text-sm group-hover:text-cyan-400 transition-colors">
                          {achievement.title}
                        </h4>
                      </div>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlowingCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
