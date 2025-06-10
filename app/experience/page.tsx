"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";
import { EXPERIENCE, EDUCATION } from "@/lib/constants";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-background py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Experience & Education</h1>
          <p className="text-lg text-muted-foreground">
            My professional journey and academic background
          </p>
        </motion.div>

        <Tabs defaultValue="experience" className="max-w-4xl mx-auto">
          <TabsList className="mb-8 flex justify-center">
            <TabsTrigger value="experience">Professional Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>

          <TabsContent value="experience">
            <div className="space-y-8">
              {EXPERIENCE.map((job, idx) => (
                <motion.div
                  key={job.company + job.position}
                  variants={fadeIn("up", 0.1 * idx)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex items-center gap-6 p-6 rounded-lg border bg-card text-card-foreground"
                >
                  <div className="flex-shrink-0">
                    {/* Company logo: using placeholder */}
                    <Image
                      src={"/bct.jpeg"}
                      alt={job.company + " logo"}
                      width={100}
                      height={100}
                      className="rounded-md object-contain bg-white border"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{job.position}</h3>
                    <p className="text-primary mb-1">{job.company}</p>
                    <p className="text-sm text-muted-foreground mb-2">{job.duration}</p>
                    <ul className="list-disc list-inside text-muted-foreground mb-2 ">
                      {job.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                    {job.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="education">
            <div className="space-y-8">
              {EDUCATION.map((edu, idx) => (
                <motion.div
                  key={edu.institution}
                  variants={fadeIn("up", 0.1 * idx)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex items-center gap-6 p-6 rounded-lg border bg-card text-card-foreground"
                >
                  <div className="flex-shrink-0">
                    <Image
                      src={edu.logo}
                      alt={edu.institution + " logo"}
                      width={100}
                      height={100}
                      className="rounded-md object-contain bg-white border"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{edu.institution}</h3>
                    <p className="text-primary mb-1">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
} 