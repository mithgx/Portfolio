'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, FileText, Download, Copy } from 'lucide-react';
import { fadeIn } from '@/lib/animations';
import { useState } from 'react';

export default function ContactPage() {
  const [showCopied, setShowCopied] = useState(false);

  const handleCopyEmail = async (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    await navigator.clipboard.writeText('mithileshg47@gmail.com');
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-background py-12 pt-24">
      <div className="container px-4 mx-auto max-w-4xl">
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-2">
            <Mail className="w-3 h-3" />
            Let's Connect
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly hello. 
            I'm always excited to connect with fellow developers and innovators.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            <div className="card-enhanced p-8">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed text-center">
                I'm always open to discussing new projects, creative ideas, or 
                opportunities to be part of your visions. Let's create something amazing together.
              </p>

              <div className="space-y-6">
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors w-full text-left group"
                  type="button"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">mithileshg47@gmail.com</p>
                  </div>
                  <Copy className="h-5 w-5 text-primary ml-auto" />
                </button>

                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors w-full text-left group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Resume</p>
                    <p className="text-sm text-muted-foreground">Download my resume</p>
                  </div>
                  <Download className="h-5 w-5 text-primary ml-auto" />
                </a>
              </div>
            </div>

            <div className="card-enhanced p-8">
              <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" asChild className="h-14 flex-col gap-2">
                  <a href="https://github.com/mithgx" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    <span className="text-xs">GitHub</span>
                  </a>
                </Button>
                <Button variant="outline" asChild className="h-14 flex-col gap-2">
                  <a href="https://www.linkedin.com/in/mithileshgopalakrishnan/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    <span className="text-xs">LinkedIn</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Response Promise */}
            <motion.div
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="card-enhanced p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <p className="font-medium text-sm">Quick Response</p>
              </div>
              <p className="text-sm text-muted-foreground">
                I typically respond to messages within 24 hours. Looking forward to hearing from you!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {showCopied && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg z-50 transition-opacity animate-fade-in-out">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Email copied to clipboard!
          </div>
        </div>
      )}
    </main>
  );
}