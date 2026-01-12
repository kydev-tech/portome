'use client';

import { useEffect, useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

type Language = 'id' | 'en' | 'ja';

interface ExperienceProps {
  language: Language;
  isDark: boolean;
}

const experienceContent = {
  id: {
    title: 'Pengalaman Kerja',
    subtitle: 'Perjalanan Profesional',
    experiences: [
      {
        company: 'CV. Mandiri Teknik',
        position: 'Helper',
        period: 'Desember 2024 - Maret 2025',
        location: 'Jakarta, Indonesia',
        type: 'Part-time',
        responsibilities: [
          'Membantu pembuatan website menggunakan PHP',
          'Maintenance dan troubleshooting website',
          'Implementasi fitur baru sesuai kebutuhan klien',
          'Dokumentasi teknis dan testing website'
        ]
      },
      {
        company: 'PT. Insvira Solusi Teknologi',
        position: 'Helper',
        period: 'Januari 2025 - Maret 2025 & Desember 2023 - September 2024',
        location: 'Jakarta, Indonesia',
        type: 'Full-time',
        responsibilities: [
          'Mengoperasikan mesin laser',
          'Melakukan pembelian dan pengelolaan kebutuhan karyawan',
          'Melakukan rekap absensi dan lemburan karyawan',
          'Koordinasi dengan tim untuk memenuhi target produksi',
          'Maintenance peralatan dan mesin',
          'Memastikan operasional berjalan efisien'
        ]
      },
      {
        company: 'Penjaga Gerai Makanan (Mie Ayam Sidoel)',
        position: 'Operator Gerai',
        period: '2023',
        location: 'Jakarta, Indonesia',
        type: 'Self-employed',
        responsibilities: [
          'Melayani pelanggan dan menerima pesanan',
          'Menyiapkan dan menyajikan mie ayam berkualitas',
          'Mengelola operasional harian gerai',
          'Membuka dan menutup usaha sesuai prosedur'
        ]
      }
    ]
  },
  en: {
    title: 'Work Experience',
    subtitle: 'Professional Journey',
    experiences: [
      {
        company: 'CV. Mandiri Teknik',
        position: 'Helper',
        period: 'December 2024 - March 2025',
        location: 'Jakarta, Indonesia',
        type: 'Part-time',
        responsibilities: [
          'Assisted in website development using PHP',
          'Website maintenance and troubleshooting',
          'Implemented new features based on client needs',
          'Technical documentation and website testing'
        ]
      },
      {
        company: 'PT. Insvira Solusi Teknologi',
        position: 'Helper',
        period: 'January 2025 - March 2025 & December 2023 - September 2024',
        location: 'Jakarta, Indonesia',
        type: 'Full-time',
        responsibilities: [
          'Operated laser machines',
          'Managed employee purchasing and needs',
          'Handled attendance and overtime records',
          'Coordinated with team to meet production targets',
          'Equipment and machine maintenance',
          'Ensured efficient operational workflow'
        ]
      },
      {
        company: 'Food Stall Operator (Mie Ayam Sidoel)',
        position: 'Stall Operator',
        period: '2023',
        location: 'Jakarta, Indonesia',
        type: 'Self-employed',
        responsibilities: [
          'Served customers and took orders',
          'Prepared and served quality chicken noodles',
          'Managed daily stall operations',
          'Opened and closed business according to procedures'
        ]
      }
    ]
  },
  ja: {
    title: '職務経験',
    subtitle: 'プロフェッショナルな道のり',
    experiences: [
      {
        company: 'CV. Mandiri Teknik',
        position: 'ヘルパー',
        period: '2024年12月 - 2025年3月',
        location: 'ジャカルタ、インドネシア',
        type: 'パートタイム',
        responsibilities: [
          'PHPを使用したウェブサイト開発の支援',
          'ウェブサイトのメンテナンスとトラブルシューティング',
          'クライアントのニーズに基づく新機能の実装',
          '技術文書作成とウェブサイトテスト'
        ]
      },
      {
        company: 'PT. Insvira Solusi Teknologi',
        position: 'ヘルパー',
        period: '2025年1月 - 2025年3月 & 2023年12月 - 2024年9月',
        location: 'ジャカルタ、インドネシア',
        type: 'フルタイム',
        responsibilities: [
          'レーザー加工機の操作',
          '従業員の購買とニーズの管理',
          '出勤と残業記録の処理',
          '生産目標達成のためのチーム調整',
          '設備と機械のメンテナンス',
          '効率的な運用ワークフローの確保'
        ]
      },
      {
        company: '飲食店運営（Mie Ayam Sidoel）',
        position: '店舗オペレーター',
        period: '2023年',
        location: 'ジャカルタ、インドネシア',
        type: '自営業',
        responsibilities: [
          '顧客対応と注文受付',
          '高品質なチキンヌードルの調理と提供',
          '日々の店舗運営管理',
          '手順に従った開店と閉店'
        ]
      }
    ]
  }
};

const Experience = ({ language, isDark }: ExperienceProps) => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const content = experienceContent[language];

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <section 
      id="experience" 
      className={`min-h-screen py-16 sm:py-20 lg:py-24 ${
        isDark ? 'bg-gray-800' : 'bg-gray-50'
      } transition-colors duration-300`}
      aria-labelledby="experience-heading"
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
            id="experience-heading"
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            {content.title}
          </h2>
        </header>

        {/* Timeline - Grid & Flexbox Responsive */}
        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className={`hidden md:block absolute left-8 top-0 bottom-0 w-0.5 ${
            isDark ? 'bg-gray-700' : 'bg-gray-300'
          }`} aria-hidden="true"></div>

          {/* Experience Cards */}
          <div className="space-y-6 sm:space-y-8">
            {content.experiences.map((exp, index) => (
              <article
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                itemProp="worksFor"
                itemScope
                itemType="https://schema.org/Organization"
              >
                {/* Timeline Dot - Hidden on mobile */}
                <div className={`hidden md:block absolute left-8 top-8 w-4 h-4 rounded-full border-4 transform -translate-x-1/2 ${
                  isDark ? 'bg-blue-500 border-gray-800' : 'bg-blue-600 border-gray-50'
                }`} aria-hidden="true"></div>

                {/* Card Content */}
                <div className={`md:ml-20 rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:scale-[1.02] ${
                  isDark 
                    ? 'bg-gray-900 border border-gray-700 hover:border-blue-500/50' 
                    : 'bg-white border border-gray-200 hover:border-blue-500/50'
                }`}>
                  {/* Header Section - Flexbox Responsive */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="flex-1">
                      <h3 
                        className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-2 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}
                        itemProp="name"
                      >
                        {exp.company}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-sm font-semibold ${
                          isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-700'
                        }`}>
                          <Briefcase className="w-4 h-4" aria-hidden="true" />
                          {exp.position}
                        </span>
                        <span className={`inline-flex items-center gap-1 text-xs sm:text-sm ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <span className={`px-2 py-1 rounded ${
                            isDark ? 'bg-gray-800' : 'bg-gray-100'
                          }`}>
                            {exp.type}
                          </span>
                        </span>
                      </div>
                    </div>

                    {/* Meta Info - Flexbox */}
                    <div className="flex flex-col gap-2 text-sm">
                      <div className={`flex items-center gap-2 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <Calendar className="w-4 h-4 shrink-0" aria-hidden="true" />
                        <time dateTime={exp.period}>{exp.period}</time>
                      </div>
                      <div className={`flex items-center gap-2 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
                        <span itemProp="address">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities - Grid Responsive */}
                  <div className={`border-t pt-4 sm:pt-6 ${
                    isDark ? 'border-gray-700' : 'border-gray-200'
                  }`}>
                    <h4 className={`text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {language === 'id' ? 'Tanggung Jawab:' : language === 'en' ? 'Responsibilities:' : '責任:'}
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li 
                          key={idx} 
                          className={`flex items-start gap-2 sm:gap-3 text-sm sm:text-base ${
                            isDark ? 'text-gray-300' : 'text-gray-700'
                          }`}
                        >
                          <CheckCircle2 
                            className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5 ${
                              isDark ? 'text-blue-400' : 'text-blue-600'
                            }`} 
                            aria-hidden="true"
                          />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;