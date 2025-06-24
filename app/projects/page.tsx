'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Code2, ChevronRight, ChevronLeft, Fullscreen } from 'lucide-react';
import { fadeIn } from '@/lib/animations';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import type { CarouselApi } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'A comprehensive analytics platform with real-time data visualization, machine learning insights, and predictive analytics capabilities.',
      images: ['/project1.jpg', '/project1b.jpg'],
      tags: ['Next.js', 'TypeScript', 'Python', 'TensorFlow', 'PostgreSQL'],
      githubLink: 'https://github.com/mithgx/project1',
    }, 
    {
      title: 'DermAI  ',
      description: ' DermAI is an AI-powered project for classifying skin cancer from images, providing users with preliminary diagnostics, cancer-related information via a medical chatbot, and recommendations for nearby hospitals  ',
      images: ['Projects/DermAI/6.png',  'Projects/DermAI/3.png', 'Projects/DermAI/4.png', 'Projects/DermAI/5.png','Projects/DermAI/1.png', 'Projects/DermAI/2.png'],
      tags: ['Python', 'Streamlit', 'TensorFlow', 'NumPy','Folium','Firebase'],
      githubLink: 'https://github.com/mithgx/DermAI',
    },
    {
      title: 'Real-time Collaboration Suite',
      description: 'A modern collaboration platform with live document editing, video conferencing, and team management features.',
      images: ['/project2.jpg', '/project2b.jpg'],
      tags: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'WebRTC'],
      githubLink: 'https://github.com/mithgx/project2',
    },
    {
      title: 'Location Validator',
      description: 'Location Validator is a lightning-fast, offline tool for validating and cross-checking over a million location records (area, pincode, lat/long) in seconds. It ensures data privacy by processing everything locally—no internet or third-party services required—making it ideal for secure, large-scale location data validation.',
      images: ['Projects/LocationValidator/0.5.png', 'Projects/LocationValidator/1.png','Projects/LocationValidator/1.5.png','Projects/LocationValidator/2.png','Projects/LocationValidator/2.5.png','Projects/LocationValidator/5.png','Projects/LocationValidator/6.png','Projects/LocationValidator/7.png'],
      tags: ['Python', 'Flask', 'Pandas'],
      githubLink: 'https://github.com/mithgx/Location-Validator',
    },
   
    {
      title: 'IntruderMonitor',
      description: 'A real-time face detection system leveraging ESP32-CAM and quantized TinyML (TFLite) for efficient on-device inference and instant alerting. Integrates with a Python Flask backend and Telegram API for live monitoring, dashboard visualization, and remote notifications.',
      images: ['Projects/IntruderMonitor/1.png','Projects/IntruderMonitor/3.png','Projects/IntruderMonitor/4.png',],
      tags: ['Python', 'Embedded C', 'TFLite', 'OpenCV', 'MLflow'],
      githubLink: 'https://github.com/mithgx/IntruderMonitor-TinyML',
    },
    {
      title: 'Blockchain Voting System',
      description: 'A secure and transparent voting system built on blockchain technology with smart contracts and decentralized architecture.',
      images: ['/project6.jpg', '/project6b.jpg'],
      tags: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS'],
      githubLink: 'https://github.com/mithgx/project6',
    },
  ];

  const [api, setApi] = useState<CarouselApi>();
  const [openImage, setOpenImage] = useState<string | null>(null);
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const [zoomIndex, setZoomIndex] = useState(0);

  // Keyboard navigation for zoomed carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!openImage) return;
      if (e.key === 'Escape') {
        setOpenImage(null);
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [openImage, zoomIndex, currentImages]);

  const handleImageClick = (image: string, images: string[], idx: number) => {
    setCurrentImages(images);
    setOpenImage(image);
    setZoomIndex(idx);
  };
  const handlePrevImage = () => {
    if (zoomIndex > 0) {
      setZoomIndex(zoomIndex - 1);
      setOpenImage(currentImages[zoomIndex - 1]);
    }
  };
  const handleNextImage = () => {
    if (zoomIndex < currentImages.length - 1) {
      setZoomIndex(zoomIndex + 1);
      setOpenImage(currentImages[zoomIndex + 1]);
    }
  };

  return (
    <main className="min-h-screen bg-background py-12 pt-24">
      <div className="px-4 md:px-12 lg:px-24 mx-auto w-full">
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-2">
            <Code2 className="w-3 h-3" />
            My Work
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            Projects & <span className="gradient-text">Innovations</span>
          </h1>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Showcasing a collection of projects that demonstrate technical expertise, 
            creative problem-solving, and passion for building impactful solutions.
          </p>
        </motion.div>

        {/* All Projects */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          animate="show"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 min-h-[60vh]">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeIn('up', 0.1 * index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="group card-enhanced p-0 overflow-hidden rounded-2xl shadow-2xl bg-white dark:bg-zinc-900 flex flex-col h-full"
                style={{ minHeight: '520px' }}
              >
                <div className="relative rounded-xl overflow-hidden bg-muted/30 w-full h-80">
                  <Carousel 
                    className="relative w-full h-full"
                    setApi={setApi}
                    opts={{ loop: true }}
                  >
                    <CarouselContent className="no-animation">
                      {project.images.map((img, i) => (
                        <CarouselItem key={i} className="no-animation">
                          <div className="relative w-full h-80 flex items-center justify-center overflow-hidden bg-transparent group/image">
                            <Image
                              src={img}
                              alt={project.title + ' image ' + (i+1)}
                              fill
                              className="object-contain transition-transform duration-300 group-hover/image:scale-105"
                              priority={i === 0}
                            />
                            <button
                              type="button"
                              className="absolute top-3 right-3 z-20 bg-background/80 hover:bg-background/90 rounded-full p-2 shadow-lg border opacity-80 hover:opacity-100 transition"
                              onClick={() => handleImageClick(img, project.images, i)}
                              aria-label="View fullscreen"
                            >
                              <Fullscreen className="w-5 h-5" />
                            </button>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious
                      className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 p-0 h-8 w-8 md:h-10 md:w-10 bg-background/90 hover:bg-background shadow-lg border"
                    />
                    <CarouselNext
                      className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 p-0 h-8 w-8 md:h-10 md:w-10 bg-background/90 hover:bg-background shadow-lg border"
                    />
                  </Carousel>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-md text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" size="lg" asChild className="w-full mt-auto">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-16 p-8 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-border/50 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4">Interested in collaborating?</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
            I'm always open to discussing new projects and opportunities. Let's build something amazing together.
          </p>
          <Button asChild className="btn-primary text-lg px-8 py-4">
            <a href="/contact">
              Get In Touch
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>

        {/* Image Zoom Dialog */}
        <Dialog open={!!openImage} onOpenChange={() => setOpenImage(null)}>
          <DialogContent className="fixed left-1/2 top-20 z-[10000] max-w-4xl w-[95vw] md:w-[80vw] bg-background/95 backdrop-blur-xl backdrop-saturate-150 border-none p-2 md:p-4 flex items-center justify-center" style={{transform: 'translateX(-50%)'}}>
            <VisuallyHidden asChild>
              <DialogTitle>Full size image view</DialogTitle>
            </VisuallyHidden>
            {openImage && (
              <div className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center">
                <button
                  type="button"
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-background/80 hover:bg-background/90 shadow-lg border flex items-center justify-center"
                  onClick={handlePrevImage}
                  disabled={zoomIndex === 0}
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <Image
                  src={currentImages[zoomIndex]}
                  alt="Full Size"
                  fill
                  className="object-contain"
                  priority
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-background/80 hover:bg-background/90 shadow-lg border flex items-center justify-center"
                  onClick={handleNextImage}
                  disabled={zoomIndex === currentImages.length - 1}
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
}