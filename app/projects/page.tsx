'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { fadeIn } from '@/lib/animations';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background py-20">
      <div className="container px-4 mx-auto">
        {/* Projects Section */}
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          animate="show"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'P1',
                description: 'p1',
                image: '/project1.jpg',
                // tags: ['Next.js', 'Node.js', 'PostgreSQL'],
                tags: ['p'],
                demoLink: 'https://project1.demo',
                githubLink: 'https://github.com/yourusername/project1',
              },
              {
                title: 'P2',
                description: 'P2',
                image: '/project2.jpg',
                // tags: ['React', 'Socket.io', 'Express'],
                tags: ['p2'],
                demoLink: 'https://project2.demo',
                githubLink: 'https://github.com/yourusername/project2',
              },
              {
                title: 'p3',
                description: 'abc',
                image: '/project3.jpg',
                // tags: ['Next.js', 'Stripe', 'Prisma'],
                tags: ['p3'],
                demoLink: 'https://project3.demo',
                githubLink: 'https://github.com/yourusername/project3',
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeIn('up', 0.1 * index)}
                className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden"
              >
                <div className="aspect-video bg-muted" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
} 