'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Download, Maximize2, FileText, Eye } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/animations'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

const resumePath = '/resume.pdf'

export default function ResumePage() {
  const [open, setOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <FileText className="w-4 h-4" />
            Professional Profile
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Resume</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A comprehensive overview of my professional experience, skills, and achievements. 
            Download or preview to learn more about my background.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="btn-primary h-12 px-6">
              <a href={resumePath} download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="h-12 px-6">
                  <Eye className="mr-2 h-5 w-5" />
                  Preview Fullscreen
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-6xl p-0 overflow-hidden bg-background/95 backdrop-blur-xl">
                <VisuallyHidden asChild>
                  <DialogTitle>Resume Preview</DialogTitle>
                </VisuallyHidden>
                <iframe
                  src={`${resumePath}#toolbar=0`}
                  className="w-full h-[90vh] rounded-md"
                  title="Resume Preview"
                />
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto"
        >
          <div className="card-enhanced p-4 overflow-hidden">
            <iframe
              src={`${resumePath}#toolbar=0&navpanes=0&scrollbar=0`}
              className="w-full h-[600px] md:h-[800px] rounded-lg"
              style={{ border: 'none' }}
              title="Resume Preview"
            />
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-semibold mb-8">Quick Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="card-enhanced p-6">
              <div className="text-2xl font-bold text-primary mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="card-enhanced p-6">
              <div className="text-2xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="card-enhanced p-6">
              <div className="text-2xl font-bold text-primary mb-2">6+</div>
              <div className="text-sm text-muted-foreground">Hackathons Won</div>
            </div>
            <div className="card-enhanced p-6">
              <div className="text-2xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}