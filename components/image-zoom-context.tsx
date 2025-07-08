'use client';

import React, { createContext, useContext, useState } from 'react';

interface ImageZoomContextType {
  isImageZoomed: boolean;
  setIsImageZoomed: (zoomed: boolean) => void;
}

const ImageZoomContext = createContext<ImageZoomContextType | undefined>(undefined);

export const ImageZoomProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  return (
    <ImageZoomContext.Provider value={{ isImageZoomed, setIsImageZoomed }}>
      {children}
    </ImageZoomContext.Provider>
  );
};

export function useImageZoom() {
  const context = useContext(ImageZoomContext);
  if (!context) {
    throw new Error('useImageZoom must be used within an ImageZoomProvider');
  }
  return context;
} 