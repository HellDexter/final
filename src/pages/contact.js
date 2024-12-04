import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Header from '../components/Header';

export default function Contact() {
  const { t } = useTranslation('common');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        {/* Hero sekce */}
        <section className="relative py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-white text-center mb-8"
            >
              Kontaktujte nás
            </motion.h1>
          </div>
        </section>

        {/* Kontaktní informace */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-lg shadow-lg space-y-8"
            >
              {/* Jednatelka */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Jednatelka</h2>
                <p className="text-xl">Monika Kerešťanová</p>
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
                <h2 className="text-2xl font-semibold">Obchodní oddělení</h2>
                <p className="text-xl">Tomáš Nádvorník</p>
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
                <h2 className="text-2xl font-semibold">Adresa</h2>
                <div className="flex items-start">
                  <MapPinIcon className="h-6 w-6 text-primary mr-3 mt-1" />
                  <p>
                    Chudenická 1059/30, Praha Hostivař, psč: 102 00, Česká republika
                  </p>
                </div>
              </div>
            </motion.div>
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
