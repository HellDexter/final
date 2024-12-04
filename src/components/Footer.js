import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const { t } = useTranslation('common');

  const socialLinks = [
    {
      name: 'facebook',
      href: 'https://facebook.com',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'twitter',
      href: 'https://twitter.com',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'linkedin',
      href: 'https://linkedin.com',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 2H4.188C2.98 2 2 2.98 2 4.188v15.624C2 21.02 2.98 22 4.188 22h15.624c1.208 0 2.188-.98 2.188-2.188V4.188C22 2.98 21.02 2 19.812 2zM8 19H5v-9h3v9zM6.5 8.25a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM19 19h-3v-4.6c0-1.4-.5-2.4-1.8-2.4-1 0-1.7.7-1.9 1.3-.1.3-.1.6-.1.9V19h-3s.1-9 0-9h3v1.2c.4-.6 1.2-1.5 2.9-1.5 2.1 0 3.9 1.4 3.9 4.4V19z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-primary">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center space-x-6 md:space-x-12 mb-8">
          <Link
            href="/"
            className="text-base text-secondary hover:text-white transition-colors"
          >
            {t('nav.home')}
          </Link>
          <Link
            href="/#about"
            className="text-base text-secondary hover:text-white transition-colors"
          >
            {t('nav.about')}
          </Link>
          <Link
            href="/#products"
            className="text-base text-secondary hover:text-white transition-colors"
          >
            {t('nav.products')}
          </Link>
          <Link
            href="/#services"
            className="text-base text-secondary hover:text-white transition-colors"
          >
            {t('nav.services')}
          </Link>
          <Link
            href="/#contact"
            className="text-base text-secondary hover:text-white transition-colors"
          >
            {t('nav.contact')}
          </Link>
        </nav>

        <div className="flex justify-center space-x-6 md:space-x-8 mb-8">
          {socialLinks.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-secondary hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              aria-label={t(`footer.social.${item.name}`)}
            >
              <span className="sr-only">{t(`footer.social.${item.name}`)}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </motion.a>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <p className="text-base text-secondary">
            {t('footer.copyright')}
          </p>
          <div className="flex space-x-8">
            <Link
              href="/privacy"
              className="text-base text-secondary hover:text-white transition-colors"
            >
              {t('footer.privacy')}
            </Link>
            <Link
              href="/terms"
              className="text-base text-secondary hover:text-white transition-colors"
            >
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
