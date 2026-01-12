'use client';

import { useEffect, useState } from 'react';
import { 
  Zap, 
  Code2, 
  Database, 
  FileText, 
  Table, 
  Layers,
  Package,
  Wrench,
  ShoppingCart,
  Warehouse,
  ClipboardList,
  Server,
  Globe,
  FileCode
} from 'lucide-react';

type Language = 'id' | 'en' | 'ja';

interface SkillsProps {
  language: Language;
  isDark: boolean;
}

const skillsContent = {
  id: {
    title: 'Keahlian',
    subtitle: 'Kompetensi & Teknologi',
    categories: [
      {
        name: 'Web Development',
        icon: Globe,
        color: 'blue',
        skills: [
          { name: 'Next.js', icon: Zap },
          { name: 'Laravel', icon: Layers },
          { name: 'PHP', icon: Code2 },
          { name: 'TypeScript', icon: FileCode },
          { name: 'MySQL', icon: Database },
          { name: 'Tailwind CSS', icon: Code2 }
        ]
      },
      {
        name: 'Operasional & Teknis',
        icon: Wrench,
        color: 'orange',
        skills: [
          { name: 'Mesin Laser', icon: Zap },
          { name: 'Perkakas', icon: Wrench },
          { name: 'Warehouse Management', icon: Warehouse },
          { name: 'Purchasing', icon: ShoppingCart }
        ]
      },
      {
        name: 'Administrasi & Office',
        icon: ClipboardList,
        color: 'green',
        skills: [
          { name: 'Microsoft Word', icon: FileText },
          { name: 'Microsoft Excel', icon: Table },
          { name: 'Administrasi', icon: ClipboardList },
          { name: 'Data Entry', icon: Database }
        ]
      }
    ]
  },
  en: {
    title: 'Skills',
    subtitle: 'Competencies & Technologies',
    categories: [
      {
        name: 'Web Development',
        icon: Globe,
        color: 'blue',
        skills: [
          { name: 'Next.js', icon: Zap },
          { name: 'Laravel', icon: Layers },
          { name: 'PHP', icon: Code2 },
          { name: 'TypeScript', icon: FileCode },
          { name: 'MySQL', icon: Database },
          { name: 'Tailwind CSS', icon: Code2 }
        ]
      },
      {
        name: 'Operations & Technical',
        icon: Wrench,
        color: 'orange',
        skills: [
          { name: 'Laser Machine', icon: Zap },
          { name: 'Tools', icon: Wrench },
          { name: 'Warehouse Management', icon: Warehouse },
          { name: 'Purchasing', icon: ShoppingCart }
        ]
      },
      {
        name: 'Administration & Office',
        icon: ClipboardList,
        color: 'green',
        skills: [
          { name: 'Microsoft Word', icon: FileText },
          { name: 'Microsoft Excel', icon: Table },
          { name: 'Administration', icon: ClipboardList },
          { name: 'Data Entry', icon: Database }
        ]
      }
    ]
  },
  ja: {
    title: 'スキル',
    subtitle: '能力と技術',
    categories: [
      {
        name: 'Web開発',
        icon: Globe,
        color: 'blue',
        skills: [
          { name: 'Next.js', icon: Zap },
          { name: 'Laravel', icon: Layers },
          { name: 'PHP', icon: Code2 },
          { name: 'TypeScript', icon: FileCode },
          { name: 'MySQL', icon: Database },
          { name: 'Tailwind CSS', icon: Code2 }
        ]
      },
      {
        name: '運用・技術',
        icon: Wrench,
        color: 'orange',
        skills: [
          { name: 'レーザー機械', icon: Zap },
          { name: '工具', icon: Wrench },
          { name: '倉庫管理', icon: Warehouse },
          { name: '購買', icon: ShoppingCart }
        ]
      },
      {
        name: '管理・オフィス',
        icon: ClipboardList,
        color: 'green',
        skills: [
          { name: 'Microsoft Word', icon: FileText },
          { name: 'Microsoft Excel', icon: Table },
          { name: '管理業務', icon: ClipboardList },
          { name: 'データ入力', icon: Database }
        ]
      }
    ]
  }
};

const colorClasses = {
  blue: {
    light: 'bg-blue-50 border-blue-200 hover:border-blue-400',
    dark: 'bg-blue-500/10 border-blue-500/30 hover:border-blue-500/60',
    iconLight: 'text-blue-600',
    iconDark: 'text-blue-400',
    headerLight: 'bg-blue-100 text-blue-700',
    headerDark: 'bg-blue-500/20 text-blue-300'
  },
  orange: {
    light: 'bg-orange-50 border-orange-200 hover:border-orange-400',
    dark: 'bg-orange-500/10 border-orange-500/30 hover:border-orange-500/60',
    iconLight: 'text-orange-600',
    iconDark: 'text-orange-400',
    headerLight: 'bg-orange-100 text-orange-700',
    headerDark: 'bg-orange-500/20 text-orange-300'
  },
  green: {
    light: 'bg-green-50 border-green-200 hover:border-green-400',
    dark: 'bg-green-500/10 border-green-500/30 hover:border-green-500/60',
    iconLight: 'text-green-600',
    iconDark: 'text-green-400',
    headerLight: 'bg-green-100 text-green-700',
    headerDark: 'bg-green-500/20 text-green-300'
  }
};

const Skills = ({ language, isDark }: SkillsProps) => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const content = skillsContent[language];

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <section 
      id="skills" 
      className={`min-h-screen py-16 sm:py-20 lg:py-24 ${
        isDark ? 'bg-gray-900' : 'bg-white'
      } transition-colors duration-300`}
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <header className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className={`text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 sm:mb-3 ${
            isDark ? 'text-blue-400' : 'text-blue-600'
          }`}>
            {content.subtitle}
          </p>
          <h2 
            id="skills-heading"
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            {content.title}
          </h2>
        </header>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {content.categories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            const colors = colorClasses[category.color as keyof typeof colorClasses];
            
            return (
              <article
                key={categoryIndex}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${categoryIndex * 150}ms` }}
              >
                <div className={`rounded-xl sm:rounded-2xl border-2 overflow-hidden h-full flex flex-col transition-all duration-300 ${
                  isDark ? colors.dark : colors.light
                }`}>
                  {/* Category Header */}
                  <div className={`p-4 sm:p-6 ${
                    isDark ? colors.headerDark : colors.headerLight
                  }`}>
                    <div className="flex items-center gap-3">
                      <CategoryIcon className="w-6 h-6 sm:w-8 sm:h-8 shrink-0" />
                      <h3 className="text-lg sm:text-xl font-bold">
                        {category.name}
                      </h3>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="p-4 sm:p-6 flex-1">
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      {category.skills.map((skill, skillIndex) => {
                        const SkillIcon = skill.icon;
                        return (
                          <div
                            key={skillIndex}
                            className={`flex items-center gap-2 p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                              isDark 
                                ? 'bg-gray-800/50 hover:bg-gray-800' 
                                : 'bg-white hover:bg-gray-50'
                            }`}
                          >
                            <SkillIcon 
                              className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 ${
                                isDark ? colors.iconDark : colors.iconLight
                              }`}
                            />
                            <span className={`text-xs sm:text-sm font-medium ${
                              isDark ? 'text-gray-200' : 'text-gray-700'
                            }`}>
                              {skill.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className={`mt-12 sm:mt-16 text-center transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className={`text-sm sm:text-base ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {language === 'id' 
              ? 'Terus belajar dan berkembang dengan teknologi dan metode terbaru'
              : language === 'en'
              ? 'Continuously learning and evolving with the latest technologies and methods'
              : '最新の技術と方法で継続的に学習し成長しています'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;