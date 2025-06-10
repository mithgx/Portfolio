export const fadeIn = (direction: string, delay: number) => {
  return {
    hidden: {
      y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
      x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
        delay: delay * 0.2,
        duration: 0.3,
      },
    },
  };
};

export const staggerContainer = (staggerChildren: number, delayChildren: number) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren * 0.2,
        delayChildren: delayChildren * 0.2,
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };
};

export const textVariant = (delay: number) => {
  return {
    hidden: {
      y: 20,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
        delay: delay * 0.2,
        duration: 0.3,
      },
    },
  };
};

export const slideIn = (direction: string, type: string, delay: number, duration: number) => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
        delay: delay * 0.2,
        duration: duration * 0.3,
      },
    },
  };
};

export const scale = (delay: number, duration: number) => {
  return {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
        delay: delay * 0.2,
        duration: duration * 0.3,
      },
    },
  };
};