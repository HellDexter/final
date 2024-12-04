import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Products from '../components/Products';
import About from '../components/About';
import Services from '../components/Services';
import { motion } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Products />
        <About />
        <Services />
        {/* Kontaktní sekce */}
        <section id="contact" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-center mb-12"
            >
              {t('contact.title')}
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Levá strana - Formulář a mapa */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                {/* Kontaktní formulář */}
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold mb-6">{t('contact.form.title')}</h3>
                  <form className="space-y-4" action="mailto:info@robotech-innovation.cz?cc=tomas.nadvornik@robotech-innovation.cz" method="post" encType="text/plain">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        {t('contact.form.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        {t('contact.form.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        {t('contact.form.message')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
                    >
                      {t('contact.form.submit')}
                    </button>
                  </form>
                </div>

                {/* Mapa */}
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold mb-6">{t('contact.map.title')}</h3>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.9584245618897!2d14.516772776891016!3d50.05161197152047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b928509d9cd3f%3A0x2c0f2a0df4391a6f!2zQ2h1ZGVuaWNrw6EgMTA1OS8zMCwgMTAyIDAwIFByYWhhIDEw!5e0!3m2!1scs!2scz!4v1701826645299!5m2!1scs!2scz"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Pravá strana - Kontaktní informace */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-8 rounded-lg shadow-lg space-y-8"
              >
                {/* Obecný kontakt */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">{t('contact.general.title')}</h3>
                  <div className="flex items-center">
                    <EnvelopeIcon className="h-6 w-6 text-primary mr-3" />
                    <a href="mailto:info@robotech-innovation.cz" className="hover:text-primary break-all">
                      info@robotech-innovation.cz
                    </a>
                  </div>
                </div>

                {/* Jednatelka */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">{t('contact.ceo.title')}</h3>
                  <p className="text-xl">{t('contact.ceo.name')}</p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <PhoneIcon className="h-6 w-6 text-primary mr-3" />
                      <a href="tel:+420776803155" className="hover:text-primary">
                        +420 776 803 155
                      </a>
                    </div>
                    <div className="flex items-center">
                      <EnvelopeIcon className="h-6 w-6 text-primary mr-3" />
                      <a href="mailto:monika.kerestanova@robotech-innovation.cz" className="hover:text-primary break-all">
                        monika.kerestanova@robotech-innovation.cz
                      </a>
                    </div>
                  </div>
                </div>

                {/* Obchodní oddělení */}
                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-2xl font-semibold">{t('contact.sales.title')}</h3>
                  <p className="text-xl">{t('contact.sales.name')}</p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <PhoneIcon className="h-6 w-6 text-primary mr-3" />
                      <a href="tel:+420775265819" className="hover:text-primary">
                        +420 775 265 819
                      </a>
                    </div>
                    <div className="flex items-center">
                      <EnvelopeIcon className="h-6 w-6 text-primary mr-3" />
                      <a href="mailto:tomas.nadvornik@robotech-innovation.cz" className="hover:text-primary break-all">
                        tomas.nadvornik@robotech-innovation.cz
                      </a>
                    </div>
                  </div>
                </div>

                {/* Adresa */}
                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-2xl font-semibold">{t('contact.address.title')}</h3>
                  <div className="flex items-start">
                    <MapPinIcon className="h-6 w-6 text-primary mr-3 mt-1" />
                    <p>
                      {t('contact.address.text')}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
