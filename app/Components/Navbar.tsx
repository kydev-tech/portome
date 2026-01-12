'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Sun, Moon } from 'lucide-react';

type Language = 'id' | 'en' | 'ja';

const translations = {
  id: {
    home: 'Beranda',
    about: 'Tentang',
    experience: 'Pengalaman',
    skills: 'Keahlian',
    projects: 'Projek',
    contact: 'Kontak',
  },
  en: {
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
  },
  ja: {
    home: 'ホーム',
    about: '私について',
    experience: '経験',
    skills: 'スキル',
    projects: 'プロジェクト',
    contact: '連絡先',
  },
};

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
}

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'id', label: 'Indonesia', flag: '🇮🇩' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
];

const Navbar = ({ language, setLanguage, isDark, setIsDark }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const t = translations[language];

  const navLinks = [
    { href: '#home', label: t.home },
    { href: '#about', label: t.about },
    { href: '#experience', label: t.experience },
    { href: '#skills', label: t.skills },
    { href: '#projects', label: t.projects },
    { href: '#contact', label: t.contact },
  ];

  const currentLang = languages.find(lang => lang.code === language) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (code: Language) => {
    setLanguage(code);
    setIsLangOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full ${isDark ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-md shadow-sm z-50 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} hover:text-blue-600 transition-colors`}>
            Portfolio
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className={`${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} font-medium transition-colors duration-200`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Controls: Language Dropdown + Dark Mode */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Language Dropdown */}
            <div className="relative" ref={langDropdownRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 ${
                  isDark 
                    ? 'bg-gray-800/80 text-gray-200 hover:bg-gray-700/80 border border-gray-700' 
                    : 'bg-gray-100/80 text-gray-700 hover:bg-gray-200/80 border border-gray-200'
                }`}
                aria-label="Select language"
              >
                <span className="text-xl">{currentLang.flag}</span>
                <span className="font-medium text-sm">{currentLang.code.toUpperCase()}</span>
                <svg 
                  className={`w-3.5 h-3.5 transition-transform ${isLangOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isLangOpen && (
                <div className={`absolute right-0 mt-2 w-48 rounded-xl shadow-xl overflow-hidden ${
                  isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
                }`}>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 transition-colors ${
                        language === lang.code
                          ? isDark
                            ? 'bg-blue-900/50 text-blue-200'
                            : 'bg-blue-50 text-blue-600'
                          : isDark
                          ? 'text-gray-300 hover:bg-gray-700/50'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span className="font-medium text-sm">{lang.label}</span>
                      {language === lang.code && (
                        <span className="ml-auto text-blue-500">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2.5 rounded-xl transition-all duration-200 ${
                isDark
                  ? 'bg-gray-800/80 text-yellow-400 hover:bg-gray-700/80 border border-gray-700'
                  : 'bg-gray-100/80 text-gray-700 hover:bg-gray-200/80 border border-gray-200'
              }`}
              aria-label="Toggle dark mode"
            >
              {isDark ? <Moon className="w-4.5 h-4.5" /> : <Sun className="w-4.5 h-4.5" />}
            </button>
          </div>

          {/* Mobile Controls: Language + Dark Mode + Hamburger */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Language Dropdown */}
            <div className="relative" ref={langDropdownRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 ${
                  isDark 
                    ? 'bg-gray-800/80 hover:bg-gray-700/80' 
                    : 'bg-gray-100/80 hover:bg-gray-200/80'
                }`}
                aria-label="Select language"
              >
                <span className="text-xl">{currentLang.flag}</span>
              </button>

              {/* Mobile Dropdown Menu */}
              {isLangOpen && (
                <div className={`absolute right-0 mt-2 w-40 rounded-2xl shadow-2xl overflow-hidden ${
                  isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
                }`}>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full flex items-center space-x-2.5 px-3 py-2.5 transition-colors ${
                        language === lang.code
                          ? isDark
                            ? 'bg-blue-900/50 text-blue-200'
                            : 'bg-blue-50 text-blue-600'
                          : isDark
                          ? 'text-gray-300 hover:bg-gray-700/50'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span className="font-medium text-xs">{lang.label}</span>
                      {language === lang.code && (
                        <span className="ml-auto text-blue-500 text-xs">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Dark Mode Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 ${
                isDark
                  ? 'bg-gray-800/80 text-yellow-400 hover:bg-gray-700/80'
                  : 'bg-gray-100/80 text-gray-700 hover:bg-gray-200/80'
              }`}
              aria-label="Toggle dark mode"
            >
              {isDark ? <Moon className="w-4.5 h-4.5" /> : <Sun className="w-4.5 h-4.5" />}
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 ${
                isDark 
                  ? 'bg-gray-800/80 text-gray-300 hover:bg-gray-700/80' 
                  : 'bg-gray-100/80 text-gray-700 hover:bg-gray-200/80'
              }`}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className={`md:hidden ${isDark ? 'bg-gray-900/95 border-gray-800' : 'bg-white/95 border-gray-100'} border-t backdrop-blur-md`}>
          <ul className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                    isDark ? 'text-gray-300 hover:bg-gray-800/80 hover:text-blue-400' : 'text-gray-700 hover:bg-gray-100/80 hover:text-blue-600'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;