'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight, Download, Github, Linkedin, Mail } from 'lucide-react';
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
  const letters = userData.role.split("");

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText('mithileshg47@gmail.com');
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 1000);
  };

  return (
    <main className="home">
      <div className="grid-mask"></div>
      <div className="home-content">
        <div className="home-content-text">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="location"
          >
            Based In {userData.location.toUpperCase()}
          </motion.div>

          <div className="title">
            {letters.map((letter, index) => (
              <motion.h1
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.02,
                }}
                className="title-letter"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.h1>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="sub-title"
          >
            <p>{userData.role_desc}</p>
          </motion.div>

          <div className="home-content-buttons">
            <motion.a
              href="/projects"
              className="primary-button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.3 }}
            >
              View Projects
              <ChevronRight className="btn-icon" />
            </motion.a>

            <motion.button
              className="secondary-button"
              onClick={handleCopyEmail}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.4 }}
            >
              Contact Me
              <Mail className="btn-icon" />
            </motion.button>
          </div>

          <motion.div
            className="home-content-links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.5 }}
          >
            <a 
              href={SOCIAL_LINKS[0].url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href={SOCIAL_LINKS[1].url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Linkedin className="h-6 w-6" />
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
