import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import Header from '../../components/Header';

export default function WeldingLasers() {
  const { t } = useTranslation('products');

  const advantages = [
    {
      title: 'Vysoká kvalita',
      description: 'Precizní a čistý svar s minimální tepelně ovlivněnou oblastí.'
    },
    {
      title: 'Rychlost',
      description: 'Vysoká rychlost svařování až 10x rychlejší než konvenční metody.'
    },
    {
      title: 'Flexibilita',
      description: 'Možnost svařování různých materiálů včetně kombinovaných spojů.'
    },
    {
      title: 'Automatizace',
      description: 'Snadná integrace do automatizovaných výrobních linek.'
    }
  ];

  const applications = [
    {
      title: 'Automobilový průmysl',
      items: [
        'Svařování karoserií',
        'Výfukové systémy',
        'Převodovky',
        'Palivové systémy'
      ]
    },
    {
      title: 'Strojírenství',
      items: [
        'Přesné strojní díly',
        'Hydraulické komponenty',
        'Převodové skříně',
        'Ložiskové domky'
      ]
    },
    {
      title: 'Elektronika',
      items: [
        'Bateriové systémy',
        'Konektory',
        'Senzorové systémy',
        'Elektronické pouzdra'
      ]
    }
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
                backgroundImage: "url('/images/laser-welding.png')",
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
                      {t('welding-lasers.title', 'Svařovací lasery')}
                    </h1>
                    <p className="text-xl text-white">
                      {t('welding-lasers.description', 'Špičkové laserové technologie pro přesné a efektivní svařování různých materiálů. Nabízíme řešení pro průmyslové aplikace s důrazem na kvalitu a přesnost.')}
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
                Laserové svařování
              </h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Laserové svařování představuje moderní a vysoce efektivní metodu spojování materiálů. 
                  Využívá koncentrovaný laserový paprsek, který vytváří přesné a kvalitní svary s minimálním 
                  tepelným ovlivněním okolního materiálu.
                </p>
                <p>
                  Naše systémy využívají nejnovější generaci vláknových a diodových laserů, které vynikají 
                  vysokou účinností, spolehlivostí a nízkými provozními náklady.
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
                Výhody laserového svařování
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-6"
                  >
                    <h3 className="text-xl font-bold text-secondary mb-3">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600">
                      {advantage.description}
                    </p>
                  </motion.div>
                ))}
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
