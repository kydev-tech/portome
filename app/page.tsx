'use client';

import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Hero from './ui/Hero';
import InfiniteMarquee from './Components/InfiniteMarquee';
import About from './ui/About';
import Experience from './ui/Experience';
import Skills from './ui/Skills';
import Projects from './ui/Projects';
import Contact from './ui/Contact';
import Footer from './Components/Footer';

type Language = 'id' | 'en' | 'ja';

const content = {
  id: {
    projects: {
      title: 'Projek Saya',
      description: 'Beberapa projek yang telah saya kerjakan...',
    },
    contact: {
      title: 'Hubungi Saya',
      description: 'Tertarik untuk berkolaborasi? Mari terhubung!',
    },
  },
  en: {
    projects: {
      title: 'My Projects',
      description: 'Some projects I have worked on...',
    },
    contact: {
      title: 'Contact Me',
      description: 'Interested in collaborating? Let\'s connect!',
    },
  },
  ja: {
    projects: {
      title: 'プロジェクト',
      description: '私が取り組んだプロジェクトの一部...',
    },
    contact: {
      title: 'お問い合わせ',
      description: 'コラボレーションに興味がありますか？ぜひ繋がりましょう！',
    },
  },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>('id');
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const t = content[language];

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} isDark={isDark} setIsDark={setIsDark} />
      
      <main className={`${isDark ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
        {/* Hero Section */}
        <Hero language={language} isDark={isDark} />

        {/* Infinite Marquee Section */}
        <InfiniteMarquee isDark={isDark} />

        {/* About Section */}
        <About language={language} isDark={isDark} />

        {/* Experience Section */}
        <Experience language={language} isDark={isDark} />

        {/* Skills Section */}
        <Skills language={language} isDark={isDark} />

        {/* Projects Section */}
        <Projects language={language} isDark={isDark} />

        {/* Contact Section */}
        <Contact language={language} isDark={isDark} />
      </main>

      {/* Footer */}
      <Footer language={language} isDark={isDark} />
    </>
  );
}