'use client';

import { useEffect, useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  MessageSquare,
  Clock,
  Globe
} from 'lucide-react';

type Language = 'id' | 'en' | 'ja';

interface ContactProps {
  language: Language;
  isDark: boolean;
}

const contactContent = {
  id: {
    title: 'Hubungi Saya',
    subtitle: 'Mari Terhubung',
    description: 'Tertarik untuk berkolaborasi atau punya pertanyaan? Jangan ragu untuk menghubungi saya!',
    contactInfo: {
      title: 'Informasi Kontak',
      items: [
        {
          icon: Phone,
          label: 'Telepon',
          value: '+62 857-1460-8649',
          link: 'tel:+6285714608649',
          color: 'green'
        },
        {
          icon: Mail,
          label: 'Email',
          value: 'rizkygalang729@gmail.com',
          link: 'mailto:rizkygalang729@gmail.com',
          color: 'blue'
        },
        {
          icon: MapPin,
          label: 'Lokasi',
          value: 'Rawamangun, Jakarta Timur',
          link: 'https://maps.google.com/?q=Jl.+Poncol+Atas+No.87,+Jati,+Pulo+Gadung',
          color: 'red'
        }
      ]
    },
    mapTitle: 'Lokasi Saya',
    availability: 'Tersedia untuk proyek freelance dan kolaborasi',
    responseTime: 'Biasanya merespons dalam 24 jam'
  },
  en: {
    title: 'Contact Me',
    subtitle: 'Let\'s Connect',
    description: 'Interested in collaborating or have questions? Feel free to reach out!',
    contactInfo: {
      title: 'Contact Information',
      items: [
        {
          icon: Phone,
          label: 'Phone',
          value: '+62 857-1460-8649',
          link: 'tel:+6285714608649',
          color: 'green'
        },
        {
          icon: Mail,
          label: 'Email',
          value: 'rizkygalang729@gmail.com',
          link: 'mailto:rizkygalang729@gmail.com',
          color: 'blue'
        },
        {
          icon: MapPin,
          label: 'Location',
          value: 'Rawamangun, East Jakarta',
          link: 'https://maps.google.com/?q=Jl.+Poncol+Atas+No.87,+Jati,+Pulo+Gadung',
          color: 'red'
        }
      ]
    },
    mapTitle: 'My Location',
    availability: 'Available for freelance projects and collaborations',
    responseTime: 'Usually responds within 24 hours'
  },
  ja: {
    title: 'お問い合わせ',
    subtitle: '連絡を取る',
    description: 'コラボレーションに興味がありますか、または質問がありますか？お気軽にお問い合わせください！',
    contactInfo: {
      title: '連絡先情報',
      items: [
        {
          icon: Phone,
          label: '電話',
          value: '+62 857-1460-8649',
          link: 'tel:+6285714608649',
          color: 'green'
        },
        {
          icon: Mail,
          label: 'メール',
          value: 'rizkygalang729@gmail.com',
          link: 'mailto:rizkygalang729@gmail.com',
          color: 'blue'
        },
        {
          icon: MapPin,
          label: '所在地',
          value: 'ラワマングン、東ジャカルタ',
          link: 'https://maps.google.com/?q=Jl.+Poncol+Atas+No.87,+Jati,+Pulo+Gadung',
          color: 'red'
        }
      ]
    },
    mapTitle: '私の場所',
    availability: 'フリーランスプロジェクトとコラボレーションが可能',
    responseTime: '通常24時間以内に返信します'
  }
};

const colorClasses = {
  green: {
    light: 'bg-green-50 border-green-200 hover:border-green-400',
    dark: 'bg-green-500/10 border-green-500/30 hover:border-green-500/60',
    icon: 'text-green-600',
    iconDark: 'text-green-400'
  },
  blue: {
    light: 'bg-blue-50 border-blue-200 hover:border-blue-400',
    dark: 'bg-blue-500/10 border-blue-500/30 hover:border-blue-500/60',
    icon: 'text-blue-600',
    iconDark: 'text-blue-400'
  },
  red: {
    light: 'bg-red-50 border-red-200 hover:border-red-400',
    dark: 'bg-red-500/10 border-red-500/30 hover:border-red-500/60',
    icon: 'text-red-600',
    iconDark: 'text-red-400'
  }
};

const Contact = ({ language, isDark }: ContactProps) => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const content = contactContent[language];

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <section 
      id="contact" 
      className={`min-h-screen py-16 sm:py-20 lg:py-24 ${
        isDark ? 'bg-gray-900' : 'bg-white'
      } transition-colors duration-300`}
      aria-labelledby="contact-heading"
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
            id="contact-heading"
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            {content.title}
          </h2>
          <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {content.description}
          </p>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <div className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className={`rounded-xl sm:rounded-2xl p-6 sm:p-8 ${
              isDark ? 'bg-gray-800/50 border border-gray-700' : 'bg-gray-50 border border-gray-200'
            }`}>
              <h3 className={`text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {content.contactInfo.title}
              </h3>

              {/* Contact Items */}
              <div className="space-y-4 sm:space-y-6">
                {content.contactInfo.items.map((item, index) => {
                  const Icon = item.icon;
                  const colors = colorClasses[item.color as keyof typeof colorClasses];
                  
                  return (
                    <a
                      key={index}
                      href={item.link}
                      target={item.icon === MapPin ? '_blank' : undefined}
                      rel={item.icon === MapPin ? 'noopener noreferrer' : undefined}
                      className={`flex items-start gap-4 p-4 sm:p-5 rounded-xl border-2 transition-all duration-300 hover:scale-[1.02] ${
                        isDark ? colors.dark : colors.light
                      }`}
                    >
                      <div className={`p-3 rounded-lg ${
                        isDark ? 'bg-gray-900/50' : 'bg-white'
                      }`}>
                        <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${
                          isDark ? colors.iconDark : colors.icon
                        }`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-xs sm:text-sm font-semibold uppercase tracking-wider mb-1 ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {item.label}
                        </p>
                        <p className={`text-sm sm:text-base font-medium break-all ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Additional Info */}
              <div className={`mt-6 sm:mt-8 pt-6 sm:pt-8 border-t space-y-3 ${
                isDark ? 'border-gray-700' : 'border-gray-200'
              }`}>
                <div className="flex items-center gap-3">
                  <Clock className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {content.responseTime}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className={`w-5 h-5 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {content.availability}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className={`transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className={`rounded-xl sm:rounded-2xl overflow-hidden ${
              isDark ? 'bg-gray-800/50 border border-gray-700' : 'bg-gray-50 border border-gray-200'
            }`}>
              <div className="p-6 sm:p-8">
                <h3 className={`text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {content.mapTitle}
                </h3>
                <div className="relative w-full rounded-lg overflow-hidden" style={{ paddingBottom: '75%' }}>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4853167208566!2d106.89855941014132!3d-6.199522960706203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4b0ad5cd459%3A0x433aea64800e770f!2sJl.%20Poncol%20Atas%20No.87%2C%20RT.20%2FRW.6%2C%20Jati%2C%20Kec.%20Pulo%20Gadung%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2013220!5e0!3m2!1sid!2sid!4v1767806960260!5m2!1sid!2sid"
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Map"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`mt-12 sm:mt-16 text-center transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className={`inline-flex flex-col sm:flex-row items-center gap-4 p-6 sm:p-8 rounded-xl sm:rounded-2xl ${
            isDark ? 'bg-blue-500/10 border border-blue-500/30' : 'bg-blue-50 border border-blue-200'
          }`}>
            <MessageSquare className={`w-8 h-8 sm:w-10 sm:h-10 ${
              isDark ? 'text-blue-400' : 'text-blue-600'
            }`} />
            <div className="text-center sm:text-left">
              <p className={`text-lg sm:text-xl font-bold mb-1 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {language === 'id' 
                  ? 'Punya proyek menarik?' 
                  : language === 'en' 
                  ? 'Have an interesting project?' 
                  : '面白いプロジェクトがありますか？'}
              </p>
              <p className={`text-sm sm:text-base ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {language === 'id' 
                  ? 'Mari diskusikan bagaimana saya bisa membantu Anda' 
                  : language === 'en' 
                  ? 'Let\'s discuss how I can help you' 
                  : '私があなたをどのように手伝えるか話し合いましょう'}
              </p>
            </div>
            <a
              href="mailto:rizkygalang729@gmail.com"
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${
                isDark
                  ? 'bg-blue-600 hover:bg-blue-500 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              <Send className="w-4 h-4" />
              {language === 'id' ? 'Kirim Email' : language === 'en' ? 'Send Email' : 'メールを送る'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;