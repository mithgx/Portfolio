'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Code2, ChevronRight } from 'lucide-react';
import { fadeIn } from '@/lib/animations';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'A comprehensive analytics platform with real-time data visualization, machine learning insights, and predictive analytics capabilities.',
      image: '/project1.jpg',
      tags: ['Next.js', 'TypeScript', 'Python', 'TensorFlow', 'PostgreSQL'],
      githubLink: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Real-time Collaboration Suite',
      description: 'A modern collaboration platform with live document editing, video conferencing, and team management features.',
      image: '/project2.jpg',
      tags: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'WebRTC'],
      githubLink: 'https://github.com/yourusername/project2',
    },
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, inventory management, and advanced analytics.',
      image: '/project3.jpg',
      tags: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL', 'Redis'],
      githubLink: 'https://github.com/yourusername/project3',
    },
    {
      title: 'IoT Monitoring System',
      description: 'A comprehensive IoT dashboard for monitoring and controlling smart devices with real-time alerts and automation.',
      image: '/project4.jpg',
      tags: ['React', 'MQTT', 'InfluxDB', 'Grafana', 'Docker'],
      githubLink: 'https://github.com/yourusername/project4',
    },
    {
      title: 'Machine Learning Pipeline',
      description: 'An automated ML pipeline for data preprocessing, model training, and deployment with monitoring capabilities.',
      image: '/project5.jpg',
      tags: ['Python', 'Scikit-learn', 'Docker', 'Kubernetes', 'MLflow'],
      githubLink: 'https://github.com/yourusername/project5',
    },
    {
      title: 'Blockchain Voting System',
      description: 'A secure and transparent voting system built on blockchain technology with smart contracts and decentralized architecture.',
      image: '/project6.jpg',
      tags: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS'],
      githubLink: 'https://github.com/yourusername/project6',
    },
  ];

  return (
    <main className="min-h-screen bg-background py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Code2 className="w-4 h-4" />
            My Work
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Projects & <span className="gradient-text">Innovations</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeIn('up', 0.1 * index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="group card-enhanced p-0 overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  <Button variant="outline" size="sm" asChild className="w-full">
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
          className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-border/50"
        >
          <h3 className="text-2xl font-semibold mb-4">Interested in collaborating?</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            I'm always open to discussing new projects and opportunities. Let's build something amazing together.
          </p>
          <Button asChild className="btn-primary">
            <a href="/contact">
              Get In Touch
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </main>
  );
}