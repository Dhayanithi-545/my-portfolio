import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Brain, Rocket, Award, Target } from 'lucide-react';
import GlowingCard from '../UI/GlowingCard';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "MERN Stack expertise with scalable architecture"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Enthusiast",
      description: "Building GPT-powered features and AI solutions"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Real-time Applications",
      description: "Creating dynamic, responsive web experiences"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Problem Solver",
      description: "500+ DSA problems solved with optimal solutions"
    }
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Personal info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <GlowingCard className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Dhayanithi Anandan</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Full-stack developer (MERN) and AI enthusiast building scalable, real-time web apps with GPT-powered features. 
                Skilled in Java, Python, and cloud-based deployment using modern dev platforms like Databutton, Replit, and Lovable.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Passionate about creating innovative solutions that make a difference. I love tackling complex problems 
                and turning ideas into reality through clean, efficient code and cutting-edge technologies.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                  <div className="text-2xl font-bold text-cyan-400">3+</div>
                  <div className="text-sm text-gray-400">Years Learning</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                  <div className="text-2xl font-bold text-purple-400">10+</div>
                  <div className="text-sm text-gray-400">Projects Built</div>
                </div>
              </div>
            </GlowingCard>
          </motion.div>

          {/* Right side - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="group"
              >
                <GlowingCard className="p-6 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-400 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional info section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <GlowingCard className="p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Hackathon Winner</h4>
                <p className="text-gray-400 text-sm">Delivered AI-powered prototypes in under 24 hours</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Clean Code</h4>
                <p className="text-gray-400 text-sm">Maintaining testable, scalable code across projects</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Team Leader</h4>
                <p className="text-gray-400 text-sm">Mentoring peers and coordinating interdisciplinary teams</p>
              </div>
            </div>
          </GlowingCard>
        </motion.div>
      </div>
    </section>
  );
};

export default About;