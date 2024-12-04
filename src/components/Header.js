import { useState, useEffect, Fragment } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, GlobeAltIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';

const languages = [
  { code: 'cs', name: 'Čeština', flag: '🇨🇿' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
];

const products = [
  { href: '/products/robotic-welding', key: 'robotic-welding' },
  { href: '/products/welding-lasers', key: 'welding-lasers' },
  { href: '/products/cleaning-lasers', key: 'cleaning-lasers' },
  { href: '/products/robotic-grinding', key: 'robotic-grinding' },
  { href: '/products/carport', key: 'carport' },
];

export default function Header() {
  const { t } = useTranslation('common');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (languageCode) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: languageCode });
  };

  const handleSectionClick = async (e, sectionId) => {
    e.preventDefault();
    
    // Pokud nejsme na hlavní stránce, nejdřív přejdeme na ni
    if (router.pathname !== '/') {
      await router.push('/');
    }
    
    // Počkáme na vykreslení stránky
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        const headerOffset = 96;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      setIsMenuOpen(false);
    }, router.pathname !== '/' ? 100 : 0);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary shadow-lg' : 'bg-primary'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logoRTI.jpg"
                alt="RTI Robotech Innovation Logo"
                width={200}
                height={80}
                className="h-20 w-auto my-2"
                priority
              />
            </Link>
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/#about"
              className="text-secondary hover:text-white transition-colors whitespace-nowrap font-medium"
              onClick={(e) => handleSectionClick(e, 'about')}
            >
              {t('nav.about')}
            </Link>

            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button className="text-secondary hover:text-white transition-colors inline-flex items-center whitespace-nowrap font-medium">
                {t('nav.products')}
                <ChevronDownIcon className="ml-1 h-5 w-5" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Menu.Items className="absolute left-0 mt-2 w-64 origin-top-left bg-white rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-100">
                  <div className="py-1">
                    {products.map((product) => (
                      <Menu.Item key={product.href}>
                        {({ active }) => (
                          <Link
                            href={product.href}
                            className={`${
                              active ? 'bg-gray-50 text-gray-900' : 'text-gray-700'
                            } group flex items-center px-4 py-3 text-sm hover:bg-gray-50 transition-colors whitespace-nowrap`}
                          >
                            {t(`products.${product.key}.title`)}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <Link
              href="/#services"
              className="text-secondary hover:text-white transition-colors whitespace-nowrap font-medium"
              onClick={(e) => handleSectionClick(e, 'services')}
            >
              {t('nav.services')}
            </Link>

            <Link 
              href="/#contact" 
              className="text-secondary hover:text-white transition-colors whitespace-nowrap font-medium"
              onClick={(e) => handleSectionClick(e, 'contact')}
            >
              {t('nav.contact')}
            </Link>
            
            <Menu as="div" className="relative ml-8">
              <Menu.Button className="flex items-center text-secondary hover:text-white transition-colors p-2 rounded-full hover:bg-secondary/10 whitespace-nowrap font-medium">
                <GlobeAltIcon className="w-5 h-5" />
                <span className="ml-2">{languages.find(lang => lang.code === router.locale)?.name}</span>
                <ChevronDownIcon className="w-4 h-4 ml-1" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-150"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right bg-white rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-2">
                    {languages.map((language) => (
                      <Menu.Item key={language.code}>
                        {({ active }) => (
                          <button
                            onClick={() => handleLanguageChange(language.code)}
                            className={`${
                              active ? 'bg-gray-50 text-gray-900' : 'text-gray-700'
                            } group flex w-full items-center px-4 py-3 text-sm hover:bg-gray-50 transition-colors whitespace-nowrap`}
                          >
                            <span className="mr-3 text-lg">{language.flag}</span>
                            <span>{language.name}</span>
                            {router.locale === language.code && (
                              <span className="ml-auto text-primary">✓</span>
                            )}
                          </button>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-secondary hover:text-white hover:bg-secondary/10"
            aria-label={isMenuOpen ? t('common.close') : t('nav.menu')}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Mobile menu panel */}
          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } md:hidden`}
          >
            <div className="absolute top-24 left-0 w-full bg-primary shadow-lg">
              <div className="px-4 pt-2 pb-3 space-y-1">
                <Link
                  href="/#about"
                  className="block px-3 py-2 text-base font-medium text-secondary hover:text-white"
                  onClick={(e) => {
                    handleSectionClick(e, 'about');
                    setIsMenuOpen(false);
                  }}
                >
                  {t('nav.about')}
                </Link>

                <Link
                  href="/#services"
                  className="block px-3 py-2 text-base font-medium text-secondary hover:text-white"
                  onClick={(e) => {
                    handleSectionClick(e, 'services');
                    setIsMenuOpen(false);
                  }}
                >
                  {t('nav.services')}
                </Link>

                <Link
                  href="/#contact"
                  className="block px-3 py-2 text-base font-medium text-secondary hover:text-white"
                  onClick={(e) => {
                    handleSectionClick(e, 'contact');
                    setIsMenuOpen(false);
                  }}
                >
                  {t('nav.contact')}
                </Link>
              </div>
              <div className="border-t border-secondary/10 pt-4 pb-3">
                <div className="px-4">
                  <p className="text-base font-medium text-secondary">
                    {t('nav.language')}
                  </p>
                  <div className="mt-2 space-y-1">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => {
                          handleLanguageChange(language.code);
                          setIsMenuOpen(false);
                        }}
                        className="flex w-full items-center px-3 py-2 text-base font-medium text-secondary hover:text-white"
                      >
                        <span className="mr-3 text-lg">{language.flag}</span>
                        <span>{language.name}</span>
                        {router.locale === language.code && (
                          <span className="ml-auto">✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
