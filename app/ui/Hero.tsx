'use client';

import { useEffect, useState, useRef } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

type Language = 'id' | 'en' | 'ja';

interface HeroProps {
  language: Language;
  isDark: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const heroContent = {
  id: {
    greeting: 'Halo, saya',
    name: 'Galang Rizky Arridho',
    roles: [
      'Web Developer',
      'Purchasing Staff',
      'Warehouse Management',
      'Administrative Staff',
      'Laser Machine Operator'
    ],
    description: 'Menggabungkan keahlian teknis web development dengan pengalaman operasional di purchasing, manajemen gudang, administrasi, dan operasi mesin laser. Siap memberikan solusi yang efisien dan terstruktur.',
    cta: 'Lihat Portofolio',
    ctaSecondary: 'Hubungi Saya',
    location: 'Rawamangun, Jakarta Timur',
    availability: 'Tersedia untuk kolaborasi'
  },
  en: {
    greeting: 'Hi, I\'m',
    name: 'Galang Rizky Arridho',
    roles: [
      'Web Developer',
      'Purchasing Staff',
      'Warehouse Management',
      'Administrative Staff',
      'Laser Machine Operator'
    ],
    description: 'Combining technical web development expertise with operational experience in purchasing, warehouse management, administration, and laser machine operations. Ready to deliver efficient and structured solutions.',
    cta: 'View Portfolio',
    ctaSecondary: 'Contact Me',
    location: 'Rawamangun, East Jakarta',
    availability: 'Available for collaboration'
  },
  ja: {
    greeting: 'こんにちは、',
    name: 'ガラン・リズキー・アリッド',
    roles: [
      'Web開発者',
      '購買スタッフ',
      '倉庫管理',
      '管理スタッフ',
      'レーザー機械オペレーター'
    ],
    description: 'Web開発の技術的専門知識と、購買、倉庫管理、管理、レーザー機械操作における運用経験を組み合わせています。効率的で構造化されたソリューションを提供する準備ができています。',
    cta: 'ポートフォリオを見る',
    ctaSecondary: 'お問い合わせ',
    location: 'ラワマングン、東ジャカルタ',
    availability: 'コラボレーション可能'
  },
};

const Hero = ({ language, isDark }: HeroProps) => {
  const [mounted, setMounted] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const content = heroContent[language];

  useEffect(() => {
    setMounted(true);
  }, []);

  // Typing Animation
  useEffect(() => {
    if (!mounted) return;

    const currentRole = content.roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseTime = isDeleting ? 300 : 1800;

    const handleTyping = () => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % content.roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, content.roles, mounted]);

  // Particle Network Animation
  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particleCount = window.innerWidth < 768 ? 30 : 60;
    const maxDistance = 120;

    // Initialize particles
    particlesRef.current = Array.from({ length: particleCount }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? 'rgba(96, 165, 250, 0.6)' : 'rgba(37, 99, 235, 0.5)';
        ctx.fill();

        // Draw connections
        particlesRef.current.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            const opacity = (1 - distance / maxDistance) * 0.3;
            ctx.strokeStyle = isDark 
              ? `rgba(96, 165, 250, ${opacity})` 
              : `rgba(37, 99, 235, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mounted, isDark]);

  if (!mounted) return null;

  return (
    <section 
      id="home" 
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        isDark ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />



      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20 relative z-10">
        <div className="grid grid-cols-1 gap-10">
          {/* Header Info */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <div className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm text-sm ${
              isDark ? 'bg-white/5 text-gray-300' : 'bg-gray-100 text-gray-700'
            }`}>
              <MapPin className="w-4 h-4 shrink-0" />
              <span>{content.location}</span>
            </div>
            <div className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm text-sm ${
              isDark ? 'bg-green-500/10 text-green-400' : 'bg-green-50 text-green-700'
            }`}>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0"></div>
              <span>{content.availability}</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 gap-6 sm:gap-8">
            <div className="flex flex-col gap-4">
              <p className={`text-sm sm:text-base font-medium ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`}>
                {content.greeting}
              </p>
              
              <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {content.name}
              </h1>
              
              <div className="min-h-64px flex items-center">
                <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  {displayedText}
                  <span className={`inline-block w-0.5 h-6 sm:h-8 ml-1 ${
                    isDark ? 'bg-blue-400' : 'bg-blue-600'
                  } animate-pulse`}></span>
                </h2>
              </div>
            </div>

            <p className={`text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {content.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-6">
              <a
                href="#projects"
                className={`group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                  isDark
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50'
                    : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                }`}
              >
                {content.cta}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className={`inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm text-sm sm:text-base ${
                  isDark
                    ? 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-200'
                }`}
              >
                {content.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;