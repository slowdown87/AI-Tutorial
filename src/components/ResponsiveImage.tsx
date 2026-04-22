import React from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  [key: string]: any;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ src, alt, className = '', ...props }) => {
  // 生成WebP格式的图片路径
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img 
        src={src} 
        alt={alt} 
        loading="lazy" 
        className={`w-full h-auto ${className}`} 
        {...props} 
      />
    </picture>
  );
};

export default ResponsiveImage;
