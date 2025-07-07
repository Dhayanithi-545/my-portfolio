import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, Github, Calendar, Code, Users, Zap,
  TrendingUp, Shield, Database, Globe, Smartphone, Palette
} from 'lucide-react';
import GlowingCard from '../UI/GlowingCard';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'collaborative', name: 'Collaborative' }
  ];

  const projects = [
    {
      id: 3,
      title: 'Finzy',
      description: 'A MicroSaaS task management platform for teams with JWT-secured authentication and productivity dashboards.',
      category: 'fullstack',
      period: '2025',
      tech: ['TypeScript', 'Supabase', 'JWT', 'React'],
      features: [
        '100+ task sessions across 3 teams in initial release week',
        'JWT-secured authentication system',
        'Productivity dashboards with real-time updates',
        'TypeScript frontend with Supabase backend'
      ],
      links: {
        github: '',
        live: 'https://finzy-circle.lovable.app/'
      },
      image: '/api/placeholder/400/250',
      status: 'completed'
    },
    {
      id: 1,
      title: 'LevelUp',
      description: 'A real-time, community-driven habit tracking platform that helps users build habits and level up their skills.',
      category: 'fullstack',
      period: 'March 2025 - Ongoing',
      tech: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'GPT-4o', 'OAuth2'],
      features: [
        'React.js dashboard with habit streaks and motivational progress bars',
        'Node.js backend with 50% faster response time via async DB ops',
        'GPT-4o integration for personalized habit suggestions (20% drop-off reduction)',
        'Real-time community chat space (15% session duration increase)'
      ],
      links: {
        github: 'https://github.com/kalviumcommunity/S74_Dhayanithi_Capstone_LevelUp',
        live: 'http://levelup-habits.netlify.app'
      },
      image: '/api/placeholder/400/250',
      status: 'active'
    },
    {
      id: 2,
      title: 'RichyPets',
      description: 'A comprehensive pet information platform enabling users to add their own pet details for community sharing.',
      category: 'fullstack',
      period: 'November 2024 - March 2025',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      features: [
        'JWT refresh mechanism reducing session failure by 30%',
        'Fuzzy search with MongoDB indexing serving 500+ pets',
        'Responsive React UI with 200ms latency using debounced input',
        'Async API calls for optimal performance'
      ],
      links: {
        github: 'https://github.com/kalviumcommunity/s74_Net_Worth_of_Famous_Pets',
        live: 'http://richypets.netlify.app'
      },
      image: '/api/placeholder/400/250',
      status: 'completed'
    },
    {
      id: 4,
      title: 'Solid',
      description: 'A real-time collaborative canvas for drawing, notes, and team brainstorming with multi-user sync.',
      category: 'collaborative',
      period: '2025',
      tech: ['TypeScript', 'Supabase', 'Websockets', 'React'],
      features: [
        'Real-time collaborative drawing and note-taking',
        'Multi-user synchronization',
        'Visual co-creation tools',
        'Modular component architecture'
      ],
      links: {
        github: '',
        live: 'https://solid-play.lovable.app'
      },
      image: '/api/placeholder/400/250',
      status: 'completed'
    },
    {
      id: 5,
      title: 'Camlet',
      description: 'A budget tracker app for students, built during the PromptRepo Hackathon as part of an inter-university team competition.',
      category: 'frontend',
      period: '2025',
      tech: ['React.js', 'JavaScript', 'CSS', 'Local Storage'],
      features: [
        'Student-focused budget tracking',
        'Inter-university team collaboration',
        'Hackathon-winning solution',
        'User-friendly interface design'
      ],
      links: {
        github: 'https://github.com/Dhayanithi-545/Camlet_Promptrepo',
        live: ''
      },
      image: '/api/placeholder/400/250',
      status: 'completed'
    },
    {
      id: 6,
      title: 'AI-Powered Prototype',
      description: 'Delivered an AI-powered prototype in under 24 hours using React.js and OpenAI APIs in Intra-College Hackathon.',
      category: 'ai',
      period: '2024',
      tech: ['React.js', 'OpenAI APIs', 'JavaScript', 'Rapid Prototyping'],
      features: [
        '24-hour development cycle',
        'OpenAI API integration',
        'Real-time user interaction',
        'Functional prototype delivery'
      ],
      links: {
        github: '',
        live: ''
      },
      image: '/api/placeholder/400/250',
      status: 'completed'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'fullstack': return <Code className="w-5 h-5" />;
      case 'frontend': return <Globe className="w-5 h-5" />;
      case 'ai': return <Zap className="w-5 h-5" />;
      case 'collaborative': return <Users className="w-5 h-5" />;
      default: return <Code className="w-5 h-5" />;
    }
  };

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
      
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
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A collection of innovative projects showcasing full-stack development, AI integration, and collaborative solutions
          </p>
        </motion.div>

        {/* Project filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'border-purple-400 bg-purple-400/10 text-purple-400'
                  : 'border-slate-600 text-gray-400 hover:border-purple-400 hover:text-purple-400'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {getCategoryIcon(filter.id)}
              <span className="font-medium">{filter.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="group"
            >
              <GlowingCard className="h-full hover:scale-105 transition-transform duration-300 p-4 md:p-6">
                {/* Project header */}
                <div className="relative mb-6">
                  <div className="w-full h-48 bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Code className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                  
                  {/* Status badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'active' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  }`}>
                    {project.status === 'active' ? 'Active' : 'Completed'}
                  </div>
                </div>

                {/* Project info */}
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Period */}
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{project.period}</span>
                  </div>

                  {/* Tech stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-xs text-cyan-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project links */}
                  <div className="flex space-x-4 pt-4">
                    <motion.a
                      href={project.links.github}
                      className="flex items-center space-x-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-gray-300 hover:text-white hover:border-purple-500 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">GitHub</span>
                    </motion.a>
                    <motion.a
                      href={project.links.live}
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-lg hover:from-purple-500 hover:to-cyan-400 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </GlowingCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
