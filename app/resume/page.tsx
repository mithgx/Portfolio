'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Download, Maximize2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/animations'

const resumePath = '/resume.pdf'

export default function ResumePage() {
  const [open, setOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background py-10">
      <div className="container px-4 mx-auto">
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resume</h1>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <a href={resumePath} download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Maximize2 className="mr-2 h-5 w-5" />
                  Preview Fullscreen
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-6xl p-0 overflow-hidden">
                <iframe
                  src={`${resumePath}#toolbar=0`}
                  className="w-full h-[90vh] rounded-md"
                />
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          animate="show"
          className="max-w-md mx-auto rounded-xl overflow-hidden border shadow-xl"
        >
          <iframe
            src={`${resumePath}#toolbar=0&navpanes=0&scrollbar=0`}
            className="w-full h-[500px]"
            style={{ border: 'none' }}
          />
        </motion.div>
      </div>
    </main>
  )
}
