import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileMenu = ({ isOpen, onClose, navItems, socialLinks, userImg }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 md:hidden"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
            className="fixed right-0 top-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-l border-cyan-500/20 overflow-y-auto"
          >
            <div className="p-6 pt-20 flex flex-col items-center">
              {/* User Image Floating */}
              {userImg && (
                <motion.img
                  src={userImg}
                  alt="Dhayanithi Anandan"
                  className="w-20 h-20 rounded-full object-cover mb-6 shadow-lg"
                  animate={{ y: [0, -8, 0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  style={{ border: 'none', background: 'none' }}
                />
              )}
              {/* Navigation Links */}
              <div className="space-y-4 w-full">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-lg font-medium py-3 px-4 rounded-lg hover:bg-slate-800/50 relative group cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                      onClose();
                    }}
                  >
                    {item.name}
                    <span className="absolute left-0 top-0 w-1 h-0 bg-gradient-to-b from-cyan-400 to-purple-500 transition-all duration-300 group-hover:h-full rounded-r" />
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 pt-8 border-t border-gray-700"
              >
                <h3 className="text-cyan-400 font-semibold mb-4">Connect with me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ 
                        scale: 1.1, 
                        boxShadow: "0 0 15px rgba(0, 245, 255, 0.5)" 
                      }}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-3 rounded-full border border-gray-700 hover:border-cyan-400"
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute top-20 right-6 w-20 h-20 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 rounded-full blur-xl" />
              <div className="absolute bottom-20 left-6 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-cyan-400/10 rounded-full blur-xl" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;