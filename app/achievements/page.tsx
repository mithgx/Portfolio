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
import { useState, useEffect } from 'react';
import type { CarouselApi } from '@/components/ui/carousel';

export default function AchievementsPage() {
  const [openImage, setOpenImage] = useState<string | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (openImage) {
        if (e.key === 'Escape') {
          setOpenImage(null);
        }
        return;
      }

      if (e.key === 'ArrowLeft') {
        api?.scrollPrev();
      } else if (e.key === 'ArrowRight') {
        api?.scrollNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [api, openImage]);

  // Track current slide
  useEffect(() => {
    if (!api) return;

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const hackathonAchievements = [
    {
      title: 'First Place - Vashisht Hackathon',
      venue: 'IIITDM Kancheepuram, 2024',
      // description: 'Developed an innovative IoT solution for urban waste management',
      images: [
        '/Vashisht_Hackathon/vash2.jpg',
        '/Vashisht_Hackathon/vash5.jpg',

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
    <main className="min-h-screen bg-background py-8 md:py-20 overflow-hidden pt-20 md:pt-27">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">Hackathon Achievements</h1>
          <p className="text-base md:text-lg text-muted-foreground">
            Showcasing innovation and problem-solving through competitive coding
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8 md:space-y-16">
          {hackathonAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              variants={fadeIn('up', 0.1 * index)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group"
            >
              <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start gap-3 md:gap-4">
                    <Trophy className="h-6 w-6 md:h-8 md:w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h2 className="text-xl md:text-2xl font-semibold">{achievement.title}</h2>
                      <p className="text-xs md:text-sm text-muted-foreground mt-1">
                        {achievement.venue}
                      </p>
                    </div>
                  </div>
                  {typeof (achievement as any).description === 'string' && (
                    <p className="text-sm md:text-base text-muted-foreground">{(achievement as any).description}</p>
                  )}
                </div>

                <div className="relative rounded-lg overflow-hidden">
                  <Carousel 
                    className="relative w-full"
                    setApi={setApi}
                    opts={{
                      loop: true,
                    }}
                  >
                    <CarouselContent className="no-animation">
                      {achievement.images.map((image, imageIndex) => (
                        <CarouselItem key={imageIndex} className="no-animation">
                          <div 
                            className="relative w-full h-[180px] sm:h-[250px] md:h-[300px] flex items-center justify-center overflow-hidden bg-transparent cursor-pointer no-animation" 
                            onClick={() => setOpenImage(image)}
                          >
                            <Image
                              src={image}
                              alt={`${achievement.title} image ${imageIndex + 1}`}
                              fill
                              className="object-contain no-animation"
                              priority={index === 0}
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>

                    <CarouselPrevious
                      className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 z-10 p-0 h-8 w-8 md:h-10 md:w-10 bg-background/80 hover:bg-background/90 shadow-none border-none"
                    />

                    <CarouselNext
                      className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 z-10 p-0 h-8 w-8 md:h-10 md:w-10 bg-background/80 hover:bg-background/90 shadow-none border-none"
                    />
                  </Carousel>
                  <Dialog open={!!openImage} onOpenChange={() => setOpenImage(null)}>
                    <DialogContent className="max-w-4xl w-[95vw] md:w-[80vw] bg-transparent backdrop-blur-xl backdrop-saturate-150 border-none p-2 md:p-4 flex items-center justify-center">
                      {openImage && (
                        <div className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center">
                          <Image 
                            src={openImage} 
                            alt="Full Size" 
                            fill
                            className="object-contain"
                            priority
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
