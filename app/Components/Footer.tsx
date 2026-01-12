'use client';

import { useEffect, useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone,
  MapPin,
  Heart,
  Code2,
  Instagram
} from 'lucide-react';

type Language = 'id' | 'en' | 'ja';

interface FooterProps {
  language: Language;
  isDark: boolean;
}

const footerContent = {
  id: {
    tagline: 'Membangun solusi digital dengan passion dan dedikasi',
    quickLinks: {
      title: 'Navigasi Cepat',
      links: [
        { name: 'Beranda', href: '#home' },
        { name: 'Tentang', href: '#about' },
        { name: 'Pengalaman', href: '#experience' },
        { name: 'Keahlian', href: '#skills' },
        { name: 'Projek', href: '#projects' },
        { name: 'Kontak', href: '#contact' }
      ]
    },
    contact: {
      title: 'Kontak',
      items: [
        { icon: Phone, text: '+62 857-1460-8649', href: 'tel:+6285714608649' },
        { icon: Mail, text: 'rizkygalang729@gmail.com', href: 'mailto:rizkygalang729@gmail.com' },
        { icon: MapPin, text: 'Rawamangun, Jakarta Timur', href: '#' }
      ]
    },
    social: {
      title: 'Social Media'
    },
    copyright: 'Hak Cipta © 2025 Galang Rizky Arridho. Dibuat dengan',
    rights: 'Semua hak dilindungi.'
  },
  en: {
    tagline: 'Building digital solutions with passion and dedication',
    quickLinks: {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    contact: {
      title: 'Contact',
      items: [
        { icon: Phone, text: '+62 857-1460-8649', href: 'tel:+6285714608649' },
        { icon: Mail, text: 'rizkygalang729@gmail.com', href: 'mailto:rizkygalang729@gmail.com' },
        { icon: MapPin, text: 'Rawamangun, East Jakarta', href: '#' }
      ]
    },
    social: {
      title: 'Social Media'
    },
    copyright: 'Copyright © 2025 Galang Rizky Arridho. Made with',
    rights: 'All rights reserved.'
  },
  ja: {
    tagline: '情熱と献身でデジタルソリューションを構築',
    quickLinks: {
      title: 'クイックリンク',
      links: [
        { name: 'ホーム', href: '#home' },
        { name: '私について', href: '#about' },
        { name: '経験', href: '#experience' },
        { name: 'スキル', href: '#skills' },
        { name: 'プロジェクト', href: '#projects' },
        { name: '連絡先', href: '#contact' }
      ]
    },
    contact: {
      title: '連絡先',
      items: [
        { icon: Phone, text: '+62 857-1460-8649', href: 'tel:+6285714608649' },
        { icon: Mail, text: 'rizkygalang729@gmail.com', href: 'mailto:rizkygalang729@gmail.com' },
        { icon: MapPin, text: 'ラワマングン、東ジャカルタ', href: '#' }
      ]
    },
    social: {
      title: 'ソーシャルメディア'
    },
    copyright: '著作権 © 2025 Galang Rizky Arridho. 作成：',
    rights: '全著作権所有。'
  }
};

const socialLinks = [
  { icon: Github, href: 'https://github.com/kydev-tech/', label: 'GitHub', color: 'hover:text-gray-400' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/galang-rizky-9a06522a8', label: 'LinkedIn', color: 'hover:text-blue-400' },
  { icon: Instagram, href: 'https://www.instagram.com/kylangs12', label: 'Instagram', color: 'hover:text-pink-400' }
];

const Footer = ({ language, isDark }: FooterProps) => {
  const [mounted, setMounted] = useState(false);
  const content = footerContent[language];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <footer className="relative">
      {/* Wave SVG */}
      <div className="relative">
        <svg 
          className="w-full h-auto" 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" 
            fill={isDark ? '#1f2937' : '#f9fafb'}
          />
        </svg>
      </div>

      {/* Footer Content */}
      <div className={`${isDark ? 'bg-gray-800' : 'bg-gray-100'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Portfolio
              </h3>
              <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {content.tagline}
              </p>
              <div className="flex items-center gap-2">
                <Code2 className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Galang Rizky Arridho
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {content.quickLinks.title}
              </h4>
              <ul className="space-y-2">
                {content.quickLinks.links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className={`text-sm transition-colors duration-200 ${
                        isDark 
                          ? 'text-gray-400 hover:text-blue-400' 
                          : 'text-gray-600 hover:text-blue-600'
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {content.contact.title}
              </h4>
              <ul className="space-y-3">
                {content.contact.items.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li key={index}>
                      <a 
                        href={item.href}
                        className={`flex items-start gap-2 text-sm transition-colors duration-200 ${
                          isDark 
                            ? 'text-gray-400 hover:text-blue-400' 
                            : 'text-gray-600 hover:text-blue-600'
                        }`}
                      >
                        <Icon className="w-4 h-4 mt-0.5 shrink-0" />
                        <span className="break-all">{item.text}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {content.social.title}
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`p-3 rounded-lg transition-all duration-300 ${
                        isDark 
                          ? 'bg-gray-900 text-gray-400 hover:bg-gray-700' 
                          : 'bg-white text-gray-600 hover:bg-gray-50'
                      } ${social.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className={`border-t mb-6 ${isDark ? 'border-gray-700' : 'border-gray-300'}`}></div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className={`text-sm text-center sm:text-left ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {content.copyright}
              <Heart className="inline-block w-4 h-4 mx-1 text-red-500 fill-red-500" />
              {language === 'id' ? 'dan' : language === 'en' ? 'and' : 'と'}
              <Code2 className="inline-block w-4 h-4 mx-1" />
            </p>
            <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              {content.rights}
            </p>
          </div>

          {/* Back to Top Button */}
          <div className="text-center mt-6">
            <a
              href="#home"
              className={`inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isDark 
                  ? 'bg-blue-600 hover:bg-blue-500 text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              {language === 'id' ? 'Kembali ke Atas' : language === 'en' ? 'Back to Top' : 'トップへ戻る'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;