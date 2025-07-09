import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Database, Globe, GitBranch, Terminal, Palette,
  Zap, Shield, Layers, Cpu, Cloud, Smartphone
} from 'lucide-react';
import GlowingCard from '../UI/GlowingCard';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAll, setShowAll] = useState(true); // Show all by default

  const skillCategories = [
    { id: 'all', name: 'All Skills', icon: <Code className="w-4 h-4" /> },
    { id: 'frontend', name: 'Frontend', icon: <Globe className="w-4 h-4" /> },
    { id: 'backend', name: 'Backend', icon: <Database className="w-4 h-4" /> },
    { id: 'languages', name: 'Languages', icon: <Cpu className="w-4 h-4" /> },
    { id: 'tools', name: 'Tools', icon: <Terminal className="w-4 h-4" /> }
  ];

  const skills = [
    {
      name: 'React.js',
      level: 85,
      category: 'frontend',
      icon: <Globe className="w-5 h-5" />,
      color: 'from-cyan-400 to-blue-500'
    },
    {
      name: 'Node.js',
      level: 80,
      category: 'backend',
      icon: <Database className="w-5 h-5" />,
      color: 'from-green-400 to-emerald-500'
    },
    {
      name: 'MongoDB',
      level: 75,
      category: 'backend',
      icon: <Database className="w-5 h-5" />,
      color: 'from-green-500 to-teal-500'
    },
    {
      name: 'Express.js',
      level: 80,
      category: 'backend',
      icon: <Layers className="w-5 h-5" />,
      color: 'from-gray-400 to-gray-600'
    },
    {
      name: 'JavaScript (ES6+)',
      level: 90,
      category: 'languages',
      icon: <Code className="w-5 h-5" />,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      name: 'Java (DSA)',
      level: 85,
      category: 'languages',
      icon: <Cpu className="w-5 h-5" />,
      color: 'from-red-400 to-red-600'
    },
    {
      name: 'Python',
      level: 80,
      category: 'languages',
      icon: <Code className="w-5 h-5" />,
      color: 'from-blue-400 to-indigo-500'
    },
    {
      name: 'Git & GitHub',
      level: 85,
      category: 'tools',
      icon: <GitBranch className="w-5 h-5" />,
      color: 'from-orange-400 to-red-500'
    },
    {
      name: 'VS Code',
      level: 90,
      category: 'tools',
      icon: <Terminal className="w-5 h-5" />,
      color: 'from-blue-400 to-purple-500'
    },
    {
      name: 'Postman',
      level: 75,
      category: 'tools',
      icon: <Zap className="w-5 h-5" />,
      color: 'from-orange-400 to-yellow-500'
    },
    {
      name: 'Figma',
      level: 70,
      category: 'tools',
      icon: <Palette className="w-5 h-5" />,
      color: 'from-purple-400 to-pink-500'
    },
    {
      name: 'Netlify',
      level: 80,
      category: 'tools',
      icon: <Cloud className="w-5 h-5" />,
      color: 'from-green-400 to-teal-500'
    },
    {
      name: 'Vercel',
      level: 80,
      category: 'tools',
      icon: <Cloud className="w-5 h-5" />,
      color: 'from-black to-gray-600'
    },
    {
      name: 'Render',
      level: 75,
      category: 'tools',
      icon: <Cloud className="w-5 h-5" />,
      color: 'from-blue-400 to-cyan-500'
    },
    {
      name: 'JWT',
      level: 85,
      category: 'backend',
      icon: <Shield className="w-5 h-5" />,
      color: 'from-purple-400 to-indigo-500'
    },
    {
      name: 'OAuth2',
      level: 75,
      category: 'backend',
      icon: <Shield className="w-5 h-5" />,
      color: 'from-green-400 to-emerald-500'
    }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  // Show all skills by default
  const skillsToShow = filteredSkills;

  return (
    <section id="skills" className="relative py-16 overflow-hidden">
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
              Technical Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm">
            Proficient in modern web technologies with a focus on scalable, real-time applications
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full border-2 transition-all duration-300 text-sm ${
                activeCategory === category.id
                  ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                  : 'border-slate-600 text-gray-400 hover:border-cyan-400 hover:text-cyan-400'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              <span className="font-medium">{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {skillsToShow.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="group"
            >
              <GlowingCard className="p-4 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className={`w-8 h-8 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {skill.icon}
                    </div>
                    <h3 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-xs font-medium text-cyan-400">
                    {skill.level}%
                  </span>
                </div>
                
                <div className="w-full bg-slate-700 rounded-full h-1.5 mb-1">
                  <motion.div
                    className={`h-1.5 bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
                
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </GlowingCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional skills info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <GlowingCard className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Data Structures & Algorithms</h3>
                <div className="grid grid-cols-2 gap-2">
                  {['Recursion', 'Backtracking', 'Arrays', 'Strings', 'Subsets', 'Permutations'].map((topic, index) => (
                    <motion.div
                      key={topic}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                      <span className="text-gray-300 text-sm">{topic}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Development Platforms</h3>
                <div className="grid grid-cols-2 gap-2">
                  {['Databutton', 'Replit', 'Lovable', 'n8n'].map((platform, index) => (
                    <motion.div
                      key={platform}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      <span className="text-gray-300 text-sm">{platform}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </GlowingCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
