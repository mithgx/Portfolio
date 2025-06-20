'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Mail, Github, Linkedin } from 'lucide-react';
import { fadeIn } from '@/lib/animations';
import { useState } from 'react';
import './home.css';
import { SOCIAL_LINKS } from '@/lib/constants';

const userData = {
  location: "Chennai, India",
  role: "Mithilesh Gopalakrishnan . S",
  role_desc: "Passionate about developing insights and turning ideas into reality"
};

export default function Home() {
  const [showCopied, setShowCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText('leshg47@gmail.com');
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  return (
    <main className="home">
      <div className="grid-mask"></div>
      <div className="home-content">
        <div className="home-content-text">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="location"
          >
            Based In {userData.location.toUpperCase()}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block md:inline">Hi, I'm</span>{' '}
              <span className="gradient-text block md:inline">Mithilesh</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="sub-title"
          >
            <p>{userData.role_desc}</p>
          </motion.div>

          <motion.div
            className="home-content-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <a
              href="/projects"
              className="primary-button"
            >
              View Projects
              <ChevronRight className="btn-icon" />
            </a>

            <button
              className="secondary-button"
              onClick={handleCopyEmail}
              type="button"
            >
              Contact Me
              <Mail className="btn-icon" />
            </button>
          </motion.div>

          <motion.div
            className="home-content-links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <a 
              href={SOCIAL_LINKS[0].url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href={SOCIAL_LINKS[1].url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>
      {showCopied && (
        <div className="copied-toast">
          Email copied to clipboard!
        </div>
      )}
    </main>
  );
}