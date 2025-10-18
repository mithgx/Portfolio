import React from 'react';

interface LeetCodeIconProps {
  className?: string;
  size?: number;
  variant?: 'simple' | 'outline' | 'filled' | 'minimal';
}

export const LeetCodeIcon: React.FC<LeetCodeIconProps> = ({ 
  className = "h-5 w-5", 
  size = 20,
  variant = 'simple'
}) => {
  const renderIcon = () => {
    switch (variant) {
      case 'outline':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
            <path d="M8.5 7.5c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5V9c0-.83-.67-1.5-1.5-1.5h-7z"/>
            <path d="M10 10h1v4h-1v-4zm2 0h1v4h-1v-4zm2 0h1v4h-1v-4z"/>
          </svg>
        );
      
      case 'filled':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <path d="M8.5 7.5c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5V9c0-.83-.67-1.5-1.5-1.5h-7zm0 1h7c.28 0 .5.22.5.5v6c0 .28-.22.5-.5.5h-7c-.28 0-.5-.22-.5-.5V9c0-.28.22-.5.5-.5z"/>
            <path d="M10 10h1v4h-1v-4zm2 0h1v4h-1v-4zm2 0h1v4h-1v-4z"/>
          </svg>
        );
      
      case 'minimal':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <rect x="8" y="7" width="8" height="10" rx="1"/>
            <rect x="9" y="9" width="1" height="5"/>
            <rect x="11" y="9" width="1" height="5"/>
            <rect x="13" y="9" width="1" height="5"/>
          </svg>
        );
      
      default:
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <path d="M8.5 7.5c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5V9c0-.83-.67-1.5-1.5-1.5h-7zm0 1h7c.28 0 .5.22.5.5v6c0 .28-.22.5-.5.5h-7c-.28 0-.5-.22-.5-.5V9c0-.28.22-.5.5-.5z"/>
            <path d="M10 10h1v4h-1v-4zm2 0h1v4h-1v-4zm2 0h1v4h-1v-4z"/>
          </svg>
        );
    }
  };

  return renderIcon();
};
