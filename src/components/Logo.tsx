import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md',
  showText = true 
}) => {
  const sizeMap = {
    sm: { box: 'w-7 h-7 sm:w-8 sm:h-8', text: 'text-xs sm:text-sm', sub: 'text-[8px] sm:text-[9px]' },
    md: { box: 'w-9 h-9 sm:w-11 sm:h-11', text: 'text-base sm:text-xl', sub: 'text-[10px] sm:text-[11px]' },
    lg: { box: 'w-12 h-12 sm:w-16 sm:h-16', text: 'text-lg sm:text-2xl', sub: 'text-[10px] sm:text-xs' },
    xl: { box: 'w-16 h-16 sm:w-24 sm:h-24', text: 'text-2xl sm:text-3xl', sub: 'text-xs sm:text-sm' },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Emblem SVG */}
      <div className={`${currentSize.box} shrink-0 relative group`}>
        <svg 
          viewBox="0 0 500 500" 
          className="w-full h-full drop-shadow-md transition-transform duration-300 group-hover:scale-105"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background circle */}
          <circle cx="250" cy="250" r="240" fill="#FFFFFF" />
          
          {/* Double Ring Border */}
          <circle cx="250" cy="250" r="230" stroke="#1B4332" strokeWidth="6" />
          <circle cx="250" cy="250" r="220" stroke="#2D6A4F" strokeWidth="2.5" />

          {/* Top 'S' Vine Sprout */}
          <g transform="translate(180, 50)">
            {/* Top Dot */}
            <circle cx="65" cy="22" r="15" fill="#2D6A4F" />
            
            {/* Vine S Stem */}
            <path 
              d="M 65 35 C 10 90, 130 110, 45 190 C -10 240, 90 230, 85 195 C 80 150, 15 140, 60 70 Z" 
              fill="#2D6A4F" 
            />
            
            {/* Leaves */}
            {/* Top left leaf */}
            <path d="M 30 75 C 5 50, 0 85, 30 75 Z" fill="#40916C" />
            <path d="M 28 75 Q 12 65 5 52" stroke="#D8F3DC" strokeWidth="2" />
            
            {/* Mid right leaf */}
            <path d="M 68 115 C 115 100, 100 150, 68 115 Z" fill="#52B788" />
            
            {/* Bottom big left leaf */}
            <path d="M 25 170 C -35 175, 40 235, 75 200 Z" fill="#2D6A4F" />
          </g>

          {/* Overturned Amber Bottle with Globules */}
          <g transform="translate(270, 190)">
            {/* Bottle Body */}
            <path 
              d="M 20 25 L 80 25 Q 95 25 95 40 L 95 70 Q 95 85 80 85 L 20 85 Q 5 85 5 70 L 5 40 Q 5 25 20 25 Z" 
              fill="#78350F" 
              transform="rotate(20 50 55)"
            />
            {/* Bottle Cap */}
            <rect x="0" y="42" width="12" height="26" rx="3" fill="#451A03" transform="rotate(20 50 55)" />
            
            {/* Spilled Globules */}
            <circle cx="-5" cy="65" r="7" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />
            <circle cx="10" cy="72" r="6" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
            <circle cx="-18" cy="75" r="5" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
            <circle cx="22" cy="78" r="6.5" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
            <circle cx="-30" cy="72" r="5.5" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
            <circle cx="-10" cy="84" r="6" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />

            {/* Small leaf next to bottle */}
            <path d="M 40 70 C 85 60, 90 90, 40 70 Z" fill="#40916C" />
          </g>

          {/* Middle Text: Subhash */}
          <text 
            x="250" 
            y="340" 
            textAnchor="middle" 
            fill="#1B4332" 
            fontFamily="Georgia, serif" 
            fontWeight="bold" 
            fontSize="68"
            letterSpacing="-1"
          >
            Subhash
          </text>

          {/* Lines and HOMOEO CLINIC */}
          <line x1="85" y1="365" x2="150" y2="365" stroke="#1B4332" strokeWidth="2.5" />
          <text 
            x="250" 
            y="373" 
            textAnchor="middle" 
            fill="#2D6A4F" 
            fontFamily="'Montserrat', 'Inter', sans-serif" 
            fontWeight="700" 
            fontSize="26" 
            letterSpacing="3"
          >
            HOMOEO CLINIC
          </text>
          <line x1="350" y1="365" x2="415" y2="365" stroke="#1B4332" strokeWidth="2.5" />

          {/* Bottom Leaves Divider */}
          <g transform="translate(232, 392)">
            <path d="M 0 10 C 18 0, 18 20, 0 10 Z" fill="#2D6A4F" />
            <path d="M 36 10 C 18 0, 18 20, 36 10 Z" fill="#2D6A4F" />
          </g>
          <line x1="160" y1="402" x2="222" y2="402" stroke="#52B788" strokeWidth="1.5" />
          <line x1="278" y1="402" x2="340" y2="402" stroke="#52B788" strokeWidth="1.5" />

          {/* Curved Text along bottom arc: Gentle Care. Natural Cure. */}
          <path id="textArc" d="M 100 390 A 180 180 0 0 0 400 390" fill="none" />
          <text fill="#1B4332" fontSize="22" fontWeight="600" fontFamily="Georgia, serif">
            <textPath href="#textArc" startOffset="50%" textAnchor="middle">
              Gentle Care. Natural Cure.
            </textPath>
          </text>
        </svg>
      </div>

      {/* Brand Text (Optional display next to emblem) */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-display font-bold text-white tracking-tight ${currentSize.text}`}>
            Subhash <span className="text-emerald-400 font-semibold">Homoeo</span>
          </span>
          <span className={`text-emerald-300/80 font-medium tracking-wider uppercase ${currentSize.sub}`}>
            Clinic & Care Center
          </span>
        </div>
      )}
    </div>
  );
};
