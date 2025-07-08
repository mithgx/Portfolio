'use client';

import { motion, time } from 'framer-motion';
import { Trophy, ChevronLeft, ChevronRight, Award, Medal, Star, Fullscreen } from 'lucide-react';
import { fadeIn } from '@/lib/animations';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { useState, useEffect } from 'react';
import type { CarouselApi } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useImageZoom } from '@/components/image-zoom-context';

export default function AchievementsPage() {
  // All hooks at the top, no early returns!
  const [openImage, setOpenImage] = useState<string | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const { isImageZoomed, setIsImageZoomed } = useImageZoom();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (openImage) {
        if (e.key === 'Escape') {
          setOpenImage(null);
        } else if (e.key === 'ArrowLeft') {
          const currentIndex = currentImages.indexOf(openImage);
          if (currentIndex > 0) {
            setOpenImage(currentImages[currentIndex - 1]);
          }
        } else if (e.key === 'ArrowRight') {
          const currentIndex = currentImages.indexOf(openImage);
          if (currentIndex < currentImages.length - 1) {
            setOpenImage(currentImages[currentIndex + 1]);
          }
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
  }, [api, openImage, currentImages]);

  useEffect(() => {
    if (!api) return;
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    setIsImageZoomed(!!openImage);
  }, [openImage, setIsImageZoomed]);

  const handleImageClick = (image: string, images: string[]) => {
    setCurrentImages(images);
    setOpenImage(image);
  };

  const handlePrevImage = () => {
    const currentIndex = currentImages.indexOf(openImage!);
    if (currentIndex > 0) {
      setOpenImage(currentImages[currentIndex - 1]);
    }
  };

  const handleNextImage = () => {
    const currentIndex = currentImages.indexOf(openImage!);
    if (currentIndex < currentImages.length - 1) {
      setOpenImage(currentImages[currentIndex + 1]);
    }
  };

  const getAchievementIcon = (title: string) => {
    if (title.includes('First Place') || title.includes('Winners')) {
      return <Trophy className="h-6 w-6 md:h-8 md:w-8 text-yellow-500" />;
    } else if (title.includes('Position') || title.includes('Leaderboard')) {
      // Use Award icon with blue color for 7th place @ leaderboard
      return <Award className="h-6 w-6 md:h-8 md:w-8 text-blue-500" />;
    } else {
      return <Award className="h-6 w-6 md:h-8 md:w-8 text-blue-500" />;
    }
  };

  const getAchievementBadge = (title: string) => {
    if (title.includes('First Place') || title.includes('Winners')) {
      return <Badge className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20">🏆 Winner</Badge>;
    } else if (title.includes('Position') || title.includes('Leaderboard')) {
      return <Badge className="bg-orange-500/10 text-orange-600 border-orange-500/20">🥉 Top Performer</Badge>;
    } else {
      return <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">🎯 Finalist</Badge>;
    }
  };

  const hackathonAchievements = [
    {
      title: 'First Place - Vashisht Hackathon',
      venue: 'IIITDM Kancheepuram, 2024',
      images: [
        '/Vashisht_Hackathon/vash2.jpg',
        '/Vashisht_Hackathon/vash5.jpg',
        '/Vashisht_Hackathon/vash3.jpg',
        '/Vashisht_Hackathon/vash4.jpg',
        '/Vashisht_Hackathon/vashist13.jpg',
        '/Vashisht_Hackathon/vashist11.jpg',
      ],
      details: [
        'Conducted advanced traffic analysis on 1M+ ADAS and CAS data points, using spatio-temporal techniques to identify accident hotspots.',
        'Created insightful dashboards and a detailed report incorporating real-time traffic data, enabling data-driven insights for urban mobility and road safety.'
      ]
    },
    {
      title: 'First Place - Machine Learning Mania',
      venue: 'Anna University, 2024',
      images: [
        '/MLMania_Hackathon/ml2.jpg',
        '/MLMania_Hackathon/ml3.jpg',
        '/MLMania_Hackathon/mlmania.jpg',
        '/MLMania_Hackathon/annauni12.jpg',
      ],
      details: [
        'Built classification models achieving 94% accuracy through rigorous data cleaning and feature engineering.',
        'Focused on extracting meaningful patterns and optimizing predictive performance on real-world datasets.'
        ]
    },
    {
      title: 'Winners - Data-A-Thon',
      venue: 'VIT, 2025',
      images: [
        '/Datathon/thon2.jpg',
        '/Datathon/thon.jpg'
      ],
      details: [
        'After hunting down clues across the university campus in the scorching heat to unlock the dataset, we developed a CNN model that achieved 91% accuracy on a complex image classification task.',
        'The model was complemented with real-time result visualizations to interpret predictions effectively.'  
      
      ]
    },
    {
      title: '7th Position @ Leaderboard DataSet \'24',
      venue: 'VIT, 2025',
      images: [
        '/hackathon3/IMG_5843.png',
        '/hackathon3/2.png',
        '/hackathon3/IMG_6402.jpg',
        '/hackathon3/IMG_6406.jpg',
      ],
      details:[
        'In this challenge with 150+ participants, we addressed a problem on predicting and managing user traffic surges in 5G networks.',
        ' We created a synthetic telecom dataset, built an LSTM-based prediction model, and integrated it into a web app featuring network data visualizations and a custom chatbot (Grok) trained on network-related queries.'
      ]
    },
    {
      title: 'Finalist - CodeCycle',
      venue: 'Anna University, 2024',
      images: [
        '/CodeCycle_Hackathon/CodeCycle24 x GT-0332.png',
        '/CodeCycle_Hackathon/CodeCycle24 x GT-0040.png',
        '/CodeCycle_Hackathon/annauni11.jpg',
      ],
      details:[
        'A two-phase hackathon where the first round focused on cryptography, deep learning, and JavaScript.',
        ' Our team qualified for the finals, where we built ThunAi — a real-time women’s safety app with live location tracking, secure Firebase storage, and an SOS alert system.'
      ]
    },
    {
      title: 'Finalist - DataQuest',
      venue: 'VIT, 2024',
      images: [
        '/DataQuest_Hackathon/IMG_0660.png',
        '/DataQuest_Hackathon/IMG_0663.png',
        '/DataQuest_Hackathon/IMG_0674.jpg',
      ],
      details:[
        'Performed EDA and developed impactful visualizations on customer credit finance data, focusing on patterns linked to user behavior.',
        'In the finals, we presented the classic customer churn prediction system, showcasing actionable insights and key financial indicators to support strategic decisions.'
      ]
    },
  ];

  return (
    <main className="min-h-screen bg-background py-12 pt-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-2">
            <Trophy className="w-3 h-3" />
            Competitive Achievements
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            Hackathon <span className="gradient-text">Highlights</span>
          </h1>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
          Participated in 15+ hackathons — fortunate to have secured a few wins, and even more grateful for the experience.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-8 md:space-y-16">
          {hackathonAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              variants={fadeIn('up', 0.1 * index)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group"
            >
              <div className="card-enhanced p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-start gap-3 md:gap-4">
                      {getAchievementIcon(achievement.title)}
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                          <h2 className="text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors">
                            {achievement.title}
                          </h2>
                        </div>
                        <p className="text-sm md:text-base text-muted-foreground">
                          {achievement.venue}
                        </p>
                        {achievement.details && (
                          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm md:text-base text-muted-foreground">
                            {achievement.details.map((point, idx) => (
                              <li key={idx}>{point}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="relative rounded-xl overflow-hidden bg-muted/30">
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
                              className="relative w-full h-[200px] sm:h-[280px] md:h-[320px] flex items-center justify-center overflow-hidden bg-transparent cursor-pointer no-animation group/image" 
                              onClick={() => handleImageClick(image, achievement.images)}
                            >
                              <Image
                                src={image}
                                alt={`${achievement.title} image ${imageIndex + 1}`}
                                fill
                                className="object-contain no-animation transition-transform duration-300 group-hover/image:scale-105"
                                priority={index === 0}
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                                <div className="opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 bg-white/90 dark:bg-black/90 rounded-full p-2">
                                  <Fullscreen className="w-5 h-5" />
                                </div>
                              </div>
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
         
       
        </motion.div>

        <Dialog open={!!openImage} onOpenChange={() => setOpenImage(null)}>
          <DialogContent className="max-w-4xl w-[95vw] md:w-[80vw] bg-background/95 backdrop-blur-xl backdrop-saturate-150 border-none p-2 md:p-4 flex items-center justify-center">
            <VisuallyHidden asChild>
              <DialogTitle>Full size image view</DialogTitle>
            </VisuallyHidden>
            {openImage && (
              <div className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-background/80 hover:bg-background/90 shadow-lg border"
                  onClick={handlePrevImage}
                  disabled={currentImages.indexOf(openImage) === 0}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Image 
                  src={openImage} 
                  alt="Full Size" 
                  fill
                  className="object-contain"
                  priority
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-background/80 hover:bg-background/90 shadow-lg border"
                  onClick={handleNextImage}
                  disabled={currentImages.indexOf(openImage) === currentImages.length - 1}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
}