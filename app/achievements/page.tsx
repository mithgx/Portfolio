'use client';

import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { fadeIn } from '@/lib/animations';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import { useState } from 'react';

export default function AchievementsPage() {
  const [openImage, setOpenImage] = useState<string | null>(null);

  const hackathonAchievements = [
    {
      title: 'First Place - Vashisht Hackathon',
      venue: 'IIITDM Kancheepuram, 2024',
      // description: 'Developed an innovative IoT solution for urban waste management',
      images: [
        '/vashisht_hackathon/vash2.jpg',        '/vashisht_hackathon/vash5.jpg',

        '/Vashisht_Hackathon/vash3.jpg',
        '/Vashisht_Hackathon/vash4.jpg','/Vashisht_Hackathon/vashist13.jpg',
        '/Vashisht_Hackathon/vashist11.jpg',
        
      
      ],
    },
    {
      title: 'First Place - Machine Learning Mania',
      venue: 'Anna University, 2024',
      // description: 'Created an AI-powered health monitoring system',
      images: [
        
        '/MLMania_Hackathon/ml2.jpg',
        '/MLMania_Hackathon/ml3.jpg',
        '/MLMania_Hackathon/mlmania.jpg',
        '/MLMania_Hackathon/annauni12.jpg',
      ],
    },
    {
      title: 'Winners - Data-A-Thon',
      venue: 'VIT, 2025',
      images: [
        '/Datathon/thon2.jpg',
        '/Datathon/thon.jpg'
      ],
    },
    {
      title: '7th Position @Leaderboard Data-A-Thon',
      venue: 'VIT, 2025',
      images: [
        '/hackathon3/IMG_5843.png',
        '/hackathon3/2.png',
        '/hackathon3/IMG_6402.jpg',
        '/hackathon3/IMG_6406.jpg',
      ],
    },
    {
      title: 'Finalist - CodeCycle ',
      venue: 'Anna University , 2024',
      images: [
        '/CodeCycle_Hackathon/CodeCycle24 x GT-0332.png',
        '/CodeCycle_Hackathon/CodeCycle24 x GT-0040.png',
        '/CodeCycle_Hackathon/annauni11.jpg',

      ],
    },
    {
      title: 'Finalist - DataQuest',
      venue: 'VIT, 2024',
      // description: 'Created an eco-friendly supply chain solution',
      images: [
        '/DataQuest_Hackathon/IMG_0660.png',
        '/DataQuest_Hackathon/IMG_0663.png',
        '/DataQuest_Hackathon/IMG_0674.jpg',
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-background py-20 achievements-page">
      <div className="container px-4 mx-auto">
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hackathon Achievements</h1>
          <p className="text-lg text-muted-foreground">
            Showcasing innovation and problem-solving through competitive coding
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-16">
          {hackathonAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              variants={fadeIn('up', 0.1 * index)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Trophy className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h2 className="text-2xl font-semibold">{achievement.title}</h2>
                      <p className="text-sm text-muted-foreground mt-1">
                        {achievement.venue}
                      </p>
                    </div>
                  </div>
                  {typeof (achievement as any).description === 'string' && (
                    <p className="text-muted-foreground">{(achievement as any).description}</p>
                  )}
                </div>

                <div className="relative rounded-lg overflow-hidden">
                  <Carousel className="relative w-full">
                    <CarouselContent className="no-animation">
                      {achievement.images.map((image, imageIndex) => (
                        <CarouselItem key={imageIndex} className="no-animation">
                          <div 
                            className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] flex items-center justify-center overflow-hidden bg-transparent cursor-pointer no-animation" 
                            onClick={() => setOpenImage(image)}
                          >
                            <Image
                              src={image}
                              alt={`${achievement.title} image ${imageIndex + 1}`}
                              fill
                              className="object-contain no-animation"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>

                    <CarouselPrevious
                      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-0 bg-transparent hover:bg-transparent shadow-none border-none"
                      variant="ghost"
                      size="icon"
                    />

                    <CarouselNext
                      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-0 bg-transparent hover:bg-transparent shadow-none border-none"
                      variant="ghost"
                      size="icon"
                    />
                  </Carousel>
                  <Dialog open={!!openImage} onOpenChange={() => setOpenImage(null)}>
                    <DialogContent className="max-w-4xl bg-transparent backdrop-blur-xl backdrop-saturate-150 border-none p-4 flex items-center justify-center">
                      {openImage && (
                        <div className="relative w-full h-[80vh] flex items-center justify-center">
                          <Image 
                            src={openImage} 
                            alt="Full Size" 
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
