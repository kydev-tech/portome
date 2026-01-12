'use client';

import { useEffect, useState } from 'react';
import { 
  Globe, 
  Bot, 
  ExternalLink, 
  Github,
  Code2,
  Sparkles,
  Layers
} from 'lucide-react';

type Language = 'id' | 'en' | 'ja';

interface ProjectsProps {
  language: Language;
  isDark: boolean;
}

const projectsContent = {
  id: {
    title: 'Projek',
    subtitle: 'Karya & Pengembangan',
    categories: [
      {
        type: 'Web Development',
        icon: Globe,
        color: 'blue',
        description: 'Aplikasi web modern dan responsif',
        projects: [
          {
            name: 'Dawu Company Profile',
            description: 'Website company profile perusahaan Dawu',
            tech: ['Laravel', 'MySQL', 'Tailwind CSS', 'PHP'],
            link: 'https://dawu.co.id',
            github: 'private',
            image: '/assets/project/image.png'
          }
        ]
      }
    ]
  },
  en: {
    title: 'Projects',
    subtitle: 'Works & Development',
    categories: [
      {
        type: 'Web Development',
        icon: Globe,
        color: 'blue',
        description: 'Modern and responsive web applications',
        projects: [
          {
            name: 'Dawu Company Profile',
            description: 'Dawu company profile website',
            tech: ['Laravel', 'MySQL', 'Tailwind CSS', 'PHP'],
            link: 'https://dawu.co.id',
            github: 'private',
            image: '/assets/project/image.png'
          }
        ]
      }
    ]
  },
  ja: {
    title: 'プロジェクト',
    subtitle: '作品と開発',
    categories: [
      {
        type: 'Web開発',
        icon: Globe,
        color: 'blue',
        description: 'モダンでレスポンシブなWebアプリケーション',
        projects: [
          {
            name: 'Dawu Company Profile',
            description: 'Dawu社のコーポレートサイト',
            tech: ['Laravel', 'MySQL', 'Tailwind CSS', 'PHP'],
            link: 'https://dawu.co.id',
            github: 'private',
            image: '/assets/project/image.png'
          }
        ]
      }
    ]
  }
};

const colorClasses = {
  blue: {
    light: 'from-blue-500 to-cyan-500',
    dark: 'from-blue-600 to-cyan-600',
    text: 'text-blue-600',
    textDark: 'text-blue-400',
    bg: 'bg-blue-500/10',
    bgDark: 'bg-blue-500/20',
    border: 'border-blue-500/30',
    borderDark: 'border-blue-500/50'
  },
  purple: {
    light: 'from-purple-500 to-pink-500',
    dark: 'from-purple-600 to-pink-600',
    text: 'text-purple-600',
    textDark: 'text-purple-400',
    bg: 'bg-purple-500/10',
    bgDark: 'bg-purple-500/20',
    border: 'border-purple-500/30',
    borderDark: 'border-purple-500/50'
  }
};

const Projects = ({ language, isDark }: ProjectsProps) => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const content = projectsContent[language];

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <section 
      id="projects" 
      className={`min-h-screen py-16 sm:py-20 lg:py-24 ${
        isDark ? 'bg-gray-800' : 'bg-gray-50'
      } transition-colors duration-300`}
      aria-labelledby="projects-heading"
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
            id="projects-heading"
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            {content.title}
          </h2>
        </header>

        {/* Categories */}
        <div className="space-y-12 sm:space-y-16">
          {content.categories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            const colors = colorClasses[category.color as keyof typeof colorClasses];
            
            return (
              <div
                key={categoryIndex}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${categoryIndex * 200}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6 sm:mb-8">
                  <div className={`p-3 sm:p-4 rounded-xl ${
                    isDark ? colors.bgDark : colors.bg
                  }`}>
                    <CategoryIcon className={`w-6 h-6 sm:w-8 sm:h-8 ${
                      isDark ? colors.textDark : colors.text
                    }`} />
                  </div>
                  <div>
                    <h3 className={`text-2xl sm:text-3xl font-bold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {category.type}
                    </h3>
                    <p className={`text-sm sm:text-base ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {category.projects.map((project, projectIndex) => (
                    <article
                      key={projectIndex}
                      className={`group rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] ${
                        isDark 
                          ? 'bg-gray-900 border border-gray-700 hover:border-gray-600' 
                          : 'bg-white border border-gray-200 hover:border-gray-300'
                      }`}
                      style={{ transitionDelay: `${projectIndex * 100}ms` }}
                    >
                      {/* Project Image */}
                      {project.image && (
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={project.image} 
                            alt={project.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                      )}

                      {/* Gradient Header - hanya tampil jika tidak ada gambar */}
                      {!project.image && (
                        <div className={`h-2 bg-linear-to-r ${
                          isDark ? colors.dark : colors.light
                        }`}></div>
                      )}

                      {/* Content */}
                      <div className="p-4 sm:p-6">
                        {/* Project Name */}
                        <h4 className={`text-lg sm:text-xl font-bold mb-2 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {project.name}
                        </h4>

                        {/* Description */}
                        <p className={`text-sm sm:text-base mb-4 ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`text-xs px-2.5 py-1 rounded-lg font-medium ${
                                isDark 
                                  ? 'bg-gray-800 text-gray-300' 
                                  : 'bg-gray-100 text-gray-700'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Links */}
                        <div className="flex gap-3 pt-4 border-t border-gray-700/50">
                          {project.github === 'private' ? (
                            <>
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                                  isDark 
                                    ? 'text-blue-400 hover:text-blue-300' 
                                    : 'text-blue-600 hover:text-blue-700'
                                }`}
                                aria-label="View project"
                              >
                                <ExternalLink className="w-4 h-4" />
                                <span>Demo</span>
                              </a>
                              <span
                                className={`flex items-center gap-2 text-sm font-medium ${
                                  isDark 
                                    ? 'text-gray-600' 
                                    : 'text-gray-400'
                                }`}
                              >
                                <Github className="w-4 h-4" />
                                <span>Private</span>
                              </span>
                            </>
                          ) : (
                            <>
                              <a
                                href={project.link}
                                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                                  isDark 
                                    ? 'text-blue-400 hover:text-blue-300' 
                                    : 'text-blue-600 hover:text-blue-700'
                                }`}
                                aria-label="View project"
                              >
                                <ExternalLink className="w-4 h-4" />
                                <span>Demo</span>
                              </a>
                              <a
                                href={project.github}
                                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                                  isDark 
                                    ? 'text-gray-400 hover:text-gray-300' 
                                    : 'text-gray-600 hover:text-gray-700'
                                }`}
                                aria-label="View source code"
                              >
                                <Github className="w-4 h-4" />
                                <span>Code</span>
                              </a>
                            </>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;