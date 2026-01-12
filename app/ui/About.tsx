'use client';

import { useEffect, useState } from 'react';
import { User, Briefcase, Target, Award, Code2, TrendingUp } from 'lucide-react';

type Language = 'id' | 'en' | 'ja';

interface AboutProps {
  language: Language;
  isDark: boolean;
}

const aboutContent = {
  id: {
    title: 'Tentang Saya',
    subtitle: 'Mengenal Lebih Dekat',
    intro: 'Profesional yang berpengalaman dalam menggabungkan keahlian teknis dan operasional untuk menciptakan solusi yang efektif dan terukur.',
    description: 'Saya memiliki latar belakang unik yang menggabungkan kemampuan web development dengan pengalaman mendalam di bidang operasional. Dari mengelola sistem purchasing, warehouse management, hingga operasi mesin laser, saya terbiasa bekerja dalam lingkungan yang dinamis dan menuntut presisi tinggi.',
    profileTitle: 'Profil Singkat',
    highlights: [
      {
        icon: Code2,
        title: 'Web Development',
        description: 'Mengembangkan aplikasi web modern dengan teknologi terkini seperti Next.js, React, dan TypeScript.'
      },
      {
        icon: Briefcase,
        title: 'Manajemen Operasional',
        description: 'Pengalaman dalam purchasing, manajemen gudang, dan administrasi yang terstruktur.'
      },
      {
        icon: Target,
        title: 'Problem Solving',
        description: 'Kemampuan analitis untuk mengidentifikasi masalah dan mengimplementasikan solusi efisien.'
      },
      {
        icon: TrendingUp,
        title: 'Continuous Learning',
        description: 'Selalu mengikuti perkembangan teknologi dan best practices terbaru di industri.'
      }
    ],
    stats: [
      { label: 'Tahun Pengalaman', value: '5+' },
      { label: 'Project Selesai', value: '20+' },
      { label: 'Teknologi Dikuasai', value: '15+' },
      { label: 'Kepuasan Klien', value: '100%' }
    ]
  },
  en: {
    title: 'About Me',
    subtitle: 'Get to Know Me',
    intro: 'A professional experienced in combining technical and operational expertise to create effective and measurable solutions.',
    description: 'I have a unique background that combines web development capabilities with deep operational experience. From managing purchasing systems, warehouse management, to laser machine operations, I am accustomed to working in dynamic environments that demand high precision.',
    profileTitle: 'Brief Profile',
    highlights: [
      {
        icon: Code2,
        title: 'Web Development',
        description: 'Developing modern web applications with cutting-edge technologies like Next.js, React, and TypeScript.'
      },
      {
        icon: Briefcase,
        title: 'Operations Management',
        description: 'Experience in purchasing, warehouse management, and structured administration.'
      },
      {
        icon: Target,
        title: 'Problem Solving',
        description: 'Analytical skills to identify problems and implement efficient solutions.'
      },
      {
        icon: TrendingUp,
        title: 'Continuous Learning',
        description: 'Always keeping up with the latest technology developments and industry best practices.'
      }
    ],
    stats: [
      { label: 'Years Experience', value: '5+' },
      { label: 'Projects Completed', value: '20+' },
      { label: 'Technologies Mastered', value: '15+' },
      { label: 'Client Satisfaction', value: '100%' }
    ]
  },
  ja: {
    title: '私について',
    subtitle: '自己紹介',
    intro: '技術的専門知識と運用専門知識を組み合わせて、効果的で測定可能なソリューションを作成する経験豊富なプロフェッショナル。',
    description: 'Web開発能力と深い運用経験を組み合わせたユニークな経歴を持っています。購買システムの管理、倉庫管理、レーザー機械操作まで、高い精度を要求されるダイナミックな環境での作業に慣れています。',
    profileTitle: '簡単なプロフィール',
    highlights: [
      {
        icon: Code2,
        title: 'Web開発',
        description: 'Next.js、React、TypeScriptなどの最先端技術を使用した最新のWebアプリケーション開発。'
      },
      {
        icon: Briefcase,
        title: '運用管理',
        description: '購買、倉庫管理、構造化された管理における経験。'
      },
      {
        icon: Target,
        title: '問題解決',
        description: '問題を特定し、効率的なソリューションを実装する分析スキル。'
      },
      {
        icon: TrendingUp,
        title: '継続的学習',
        description: '最新の技術開発と業界のベストプラクティスを常に追求。'
      }
    ],
    stats: [
      { label: '経験年数', value: '5+' },
      { label: '完了プロジェクト', value: '20+' },
      { label: '習得技術', value: '15+' },
      { label: '顧客満足度', value: '100%' }
    ]
  }
};

const About = ({ language, isDark }: AboutProps) => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const content = aboutContent[language];

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <section 
      id="about" 
      className={`min-h-screen py-16 sm:py-20 lg:py-24 ${
        isDark ? 'bg-gray-900' : 'bg-white'
      } transition-colors duration-300`}
      aria-labelledby="about-heading"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header - SEO Optimized */}
        <header className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className={`text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 sm:mb-3 ${
            isDark ? 'text-blue-400' : 'text-blue-600'
          }`}>
            {content.subtitle}
          </p>
          <h2 
            id="about-heading"
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
            itemProp="name"
          >
            {content.title}
          </h2>
          <p 
            className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}
            itemProp="description"
          >
            {content.intro}
          </p>
        </header>

        {/* Main Content - Grid & Flexbox Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
          {/* Left Column - Profile Description */}
          <article className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className={`rounded-xl sm:rounded-2xl p-6 sm:p-8 h-full flex flex-col ${
              isDark ? 'bg-gray-800/50 border border-gray-700' : 'bg-gray-50 border border-gray-200'
            }`}>
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                <div className={`p-3 rounded-xl shrink-0 ${
                  isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'
                }`}>
                  <User className="w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {content.profileTitle}
                  </h3>
                  <p 
                    className={`text-sm sm:text-base leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}
                    itemProp="knowsAbout"
                  >
                    {content.description}
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Right Column - Highlights Grid */}
          <div className={`transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {content.highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <article
                    key={index}
                    className={`rounded-xl p-4 sm:p-6 transition-all duration-300 hover:scale-105 flex flex-col ${
                      isDark 
                        ? 'bg-gray-800/50 border border-gray-700 hover:border-blue-500/50' 
                        : 'bg-gray-50 border border-gray-200 hover:border-blue-500/50'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    itemProp="hasOccupation"
                    itemScope
                    itemType="https://schema.org/Occupation"
                  >
                    <Icon 
                      className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mb-2 sm:mb-3 ${
                        isDark ? 'text-blue-400' : 'text-blue-600'
                      }`} 
                      aria-hidden="true"
                    />
                    <h4 
                      className={`text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}
                      itemProp="name"
                    >
                      {highlight.title}
                    </h4>
                    <p 
                      className={`text-xs sm:text-sm leading-relaxed ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}
                      itemProp="description"
                    >
                      {highlight.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats Section - Flexbox Responsive */}
        <aside 
          className={`transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          aria-label="Statistics"
        >
          <div className={`rounded-xl sm:rounded-2xl p-6 sm:p-8 ${
            isDark ? 'bg-gray-800/50 border border-gray-700' : 'bg-gray-50 border border-gray-200'
          }`}>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12">
              {content.stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center min-w-120px sm:min-w-140px"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    {stat.value}
                  </div>
                  <div className={`text-xs sm:text-sm lg:text-base font-medium ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default About;