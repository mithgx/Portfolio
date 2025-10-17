'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, FileText, Download, Copy } from 'lucide-react';
import { LeetCodeIcon } from '@/components/ui/leetcode-icon';
import { fadeIn } from '@/lib/animations';
import { useState } from 'react';

export default function ContactPage() {
  const [showCopied, setShowCopied] = useState(false);
  const [lightbox, setLightbox] = useState<{
    open: boolean;
    type: 'video' | 'image';
    src: string;
    caption?: string;
  }>({ open: false, type: 'image', src: '' });

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
            {/* I'm always excited to connect with fellow developers and innovators. */}
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
                opportunities to be part of your visions.               </p>

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
                  href="/Mithilesh Resume.pdf"
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
              <div className="grid grid-cols-3 gap-4">
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
                <Button variant="outline" asChild className="h-14 flex-col gap-2">
                  <a href="https://leetcode.com/u/mithileshg47/" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="/icons8-leetcode-external-tal-revivo-light-tal-revivo-16.png" 
                      alt="LeetCode" 
                      className="h-5 w-5" 
                    />
                    <span className="text-xs">LeetCode</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* SideQuest - Cubing */}
            <div className="card-enhanced p-8 bg-white dark:bg-neutral-950">
              <h3 className="text-xl font-semibold mb-2">SideQuest - Cubing</h3>
              <p className="text-sm text-muted-foreground mb-6">A glimpse of my cubing journey — solves and podiums.</p>
              {/* Masonry Grid */}
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
                {/* Video 1 */}
                <div 
                  className="masonry-item mb-4 group cursor-pointer rounded-xl overflow-hidden bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition-shadow"
                  onClick={() => setLightbox({ open: true, type: 'video', src: '/Media/cube0.mp4', caption: '3x3 PB – 9.21s' })}
                >
                  <video 
                    src="/Media/cube0.mp4" 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="w-full h-auto block transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="px-3 py-2 text-xs text-muted-foreground">3x3 PB – 9.21s</div>
                </div>
                {/* Video 2 */}
                <div 
                  className="masonry-item mb-4 group cursor-pointer rounded-xl overflow-hidden bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition-shadow"
                  onClick={() => setLightbox({ open: true, type: 'video', src: '/Media/cube1.mp4', caption: 'OH Solve – 21.34s' })}
                >
                  <video 
                    src="/Media/cube1.mp4" 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="w-full h-auto block transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="px-3 py-2 text-xs text-muted-foreground">OH Solve – 21.34s</div>
                </div>
                {/* Video 3 */}
                <div 
                  className="masonry-item mb-4 group cursor-pointer rounded-xl overflow-hidden bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition-shadow"
                  onClick={() => setLightbox({ open: true, type: 'video', src: '/Media/cube2.MP4', caption: '4x4 Solve – 1:15' })}
                >
                  <video 
                    src="/Media/cube2.MP4" 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="w-full h-auto block transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="px-3 py-2 text-xs text-muted-foreground">4x4 Solve – 1:15</div>
                </div>
                {/* Image 1 */}
                <div 
                  className="masonry-item mb-4 group cursor-pointer rounded-xl overflow-hidden bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition-shadow"
                  onClick={() => setLightbox({ open: true, type: 'image', src: '/Media/cubepic1.jpg', caption: 'VIT Cubing League Winner' })}
                >
                  <img 
                    src="/Media/cubepic1.jpg" 
                    alt="VIT Cubing League Winner"
                    className="w-full h-auto block object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="px-3 py-2 text-xs text-muted-foreground">VIT Cubing League Winner</div>
                </div>
                {/* Video 4 */}
                <div 
                  className="masonry-item mb-4 group cursor-pointer rounded-xl overflow-hidden bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition-shadow"
                  onClick={() => setLightbox({ open: true, type: 'video', src: '/Media/cube3.MP4', caption: '3x3 Ao5 – 12.34' })}
                >
                  <video 
                    src="/Media/cube3.MP4" 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="w-full h-auto block transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="px-3 py-2 text-xs text-muted-foreground">3x3 Ao5 – 12.34</div>
                </div>
                {/* Video 5 */}
                <div 
                  className="masonry-item mb-4 group cursor-pointer rounded-xl overflow-hidden bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition-shadow"
                  onClick={() => setLightbox({ open: true, type: 'video', src: '/Media/cube4.mp4', caption: 'Practice Session' })}
                >
                  <video 
                    src="/Media/cube4.mp4" 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="w-full h-auto block transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="px-3 py-2 text-xs text-muted-foreground">Practice Session</div>
                </div>
                {/* Image 2 */}
                <div 
                  className="masonry-item mb-4 group cursor-pointer rounded-xl overflow-hidden bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition-shadow"
                  onClick={() => setLightbox({ open: true, type: 'image', src: '/Media/cubepic2.jpg', caption: 'Event Winner' })}
                >
                  <img 
                    src="/Media/cubepic2.jpg" 
                    alt="Event Winner"
                    className="w-full h-auto block object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="px-3 py-2 text-xs text-muted-foreground">Event Winner</div>
                </div>
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

      {/* Lightbox Overlay */}
      {lightbox.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-100 animate-fade-in"
            onClick={() => setLightbox({ open: false, type: 'image', src: '' })}
          />
          <div className="relative z-10 max-w-5xl w-[92vw] md:w-[85vw] lg:w-[70vw]">
            <button 
              aria-label="Close"
              className="absolute -top-12 right-0 md:-top-12 md:right-0 text-white/90 hover:text-white transition-colors"
              onClick={() => setLightbox({ open: false, type: 'image', src: '' })}
            >
              ✕
            </button>
            <div className="rounded-xl overflow-hidden shadow-2xl bg-black">
              {lightbox.type === 'video' ? (
                <video 
                  src={lightbox.src} 
                  autoPlay 
                  muted 
                  loop 
                  controls 
                  playsInline
                  className="w-full h-auto"
                />
              ) : (
                <img src={lightbox.src} alt={lightbox.caption || 'media'} className="w-full h-auto" />
              )}
            </div>
            {lightbox.caption && (
              <div className="mt-3 text-center text-xs text-white/90">{lightbox.caption}</div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}