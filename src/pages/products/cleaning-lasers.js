import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import Header from '../../components/Header';

export default function CleaningLasers() {
  const { t } = useTranslation('products');

  const benefits = [
    {
      title: 'Ekologické čištění',
      description: 'Bez použití chemikálií a abrazivních materiálů, šetrné k životnímu prostředí.'
    },
    {
      title: 'Vysoká přesnost',
      description: 'Selektivní odstranění nečistot bez poškození základního materiálu.'
    },
    {
      title: 'Široké využití',
      description: 'Vhodné pro různé materiály a typy znečištění.'
    },
    {
      title: 'Nízké provozní náklady',
      description: 'Minimální spotřeba materiálu a energie, dlouhá životnost.'
    }
  ];

  const applications = [
    {
      title: 'Průmyslové čištění',
      items: [
        'Odstranění oxidů',
        'Čištění forem',
        'Příprava povrchů',
        'Odmaštění'
      ]
    },
    {
      title: 'Restaurování',
      items: [
        'Čištění památek',
        'Obnova povrchů',
        'Odstraňování nátěrů',
        'Konzervace'
      ]
    },
    {
      title: 'Speciální aplikace',
      items: [
        'Čištění elektroniky',
        'Příprava pro svařování',
        'Dekontaminace',
        'Značení a gravírování'
      ]
    }
  ];

  const features = [
    'Mobilní nebo stacionární provedení',
    'Výkon laseru 1kW až 8kW',
    'Různé typy laserových zdrojů',
    'Integrované odsávání',
    'Bezpečnostní prvky',
    'Možnost automatizace'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero sekce */}
        <section className="relative">
          <div className="relative h-[500px] lg:h-[600px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/cleaning.png')",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-3xl mx-auto text-center"
                  >
                    <h1 className="text-5xl font-bold text-white mb-6">
                      {t('cleaning-lasers.title', 'Čisticí lasery')}
                    </h1>
                    <p className="text-xl text-white">
                      {t('cleaning-lasers.description', 'Ekologické a efektivní čištění povrchů pomocí laserové technologie. Šetrné řešení pro průmyslové čištění a přípravu povrchů bez použití chemikálií.')}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hlavní obsah */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Popis technologie */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Laserové čištění
              </h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Laserové čištění je moderní a ekologická metoda čištění povrchů, která využívá 
                  přesně kontrolovaný laserový paprsek k odstranění nečistot, oxidů, barev a dalších 
                  povrchových vrstev bez poškození základního materiálu.
                </p>
                <p>
                  Technologie je založena na principu ablace, kdy laserový paprsek odpařuje nežádoucí 
                  materiál z povrchu. Proces je velmi přesný, šetrný k životnímu prostředí a nevyžaduje 
                  použití chemikálií ani abrazivních materiálů.
                </p>
              </div>
            </motion.div>

            {/* Výhody */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-secondary mb-8">
                Výhody laserového čištění
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-6"
                  >
                    <h3 className="text-xl font-bold text-secondary mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Technické parametry */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-secondary mb-8">
                Technické parametry
              </h2>
              <div className="bg-gray-50 rounded-lg p-8">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-600"
                    >
                      <svg
                        className="w-5 h-5 text-primary mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Aplikace */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-secondary mb-8">
                Oblasti použití
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {applications.map((application, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-6"
                  >
                    <h3 className="text-xl font-bold text-secondary mb-4">
                      {application.title}
                    </h3>
                    <ul className="space-y-2">
                      {application.items.map((item, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <svg
                            className="w-5 h-5 text-primary mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
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
      ...(await serverSideTranslations(locale, ['common', 'products'])),
    },
  };
}
