'use client';

import { useEffect, useState } from 'react';
import { 
  Zap, 
  Code, 
  Layers, 
  Palette, 
  Database, 
  FileText, 
  Table, 
  FileCode 
} from 'lucide-react';

interface MarqueeProps {
  isDark: boolean;
}

const services = [
  { name: 'Next.js', Icon: Zap },
  { name: 'PHP', Icon: Code },
  { name: 'Laravel', Icon: Layers },
  { name: 'Tailwind CSS', Icon: Palette },
  { name: 'MySQL', Icon: Database },
  { name: 'Word', Icon: FileText },
  { name: 'Excel', Icon: Table },
  { name: 'TypeScript', Icon: FileCode },
];

const InfiniteMarquee = ({ isDark }: MarqueeProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Duplikasi services untuk infinite loop yang seamless
  const duplicatedServices = [...services, ...services, ...services];

  return (
    <section 
      className={`relative w-full py-8 overflow-hidden ${
        isDark ? 'bg-gray-800/50' : 'bg-gray-100/50'
      } border-y ${
        isDark ? 'border-gray-700' : 'border-gray-200'
      }`}
    >
      {/* linear Fade Edges */}
      <div 
        className={`absolute inset-y-0 left-0 w-24 md:w-32 z-10 pointer-events-none ${
          isDark 
            ? 'bg-linear-to-r from-gray-800/50 to-transparent' 
            : 'bg-linear-to-r from-gray-100/50 to-transparent'
        }`} 
      />
      <div 
        className={`absolute inset-y-0 right-0 w-24 md:w-32 z-10 pointer-events-none ${
          isDark 
            ? 'bg-linear-to-l from-gray-800/50 to-transparent' 
            : 'bg-linear-to-l from-gray-100/50 to-transparent'
        }`} 
      />

      {/* Marquee Container */}
      <div className="marquee-wrapper">
        <div className="marquee-content">
          {duplicatedServices.map((service, index) => {
            const Icon = service.Icon;
            return (
              <div key={index} className="marquee-item">
                <div
                  className={`inline-flex items-center gap-3 px-6 md:px-8 py-4 rounded-xl backdrop-blur-sm transition-transform duration-300 hover:scale-105 ${
                    isDark 
                      ? 'bg-gray-900/60 text-gray-200 border border-gray-700 hover:bg-gray-900/80 hover:border-blue-500/50' 
                      : 'bg-white/80 text-gray-800 border border-gray-200 hover:bg-white hover:border-blue-500/50'
                  }`}
                >
                  <Icon className={`w-5 h-5 md:w-6 md:h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  <span className="text-sm md:text-base lg:text-lg font-semibold whitespace-nowrap">
                    {service.name}
                  </span>
                </div>
                <span className={`text-2xl mx-6 md:mx-8 ${isDark ? 'text-gray-600' : 'text-gray-300'}`}>
                  •
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        .marquee-wrapper {
          display: flex;
          width: 100%;
          overflow: hidden;
        }

        .marquee-content {
          display: flex;
          flex-direction: row;
          animation: scroll 40s linear infinite;
          will-change: transform;
        }

        .marquee-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          flex-shrink: 0;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.333%);
          }
        }

        .marquee-wrapper:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default InfiniteMarquee;