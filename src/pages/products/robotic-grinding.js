import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import Header from '../../components/Header';

export default function RoboticGrinding() {
  const { t } = useTranslation('products');

  const features = [
    {
      title: 'Vysoká přesnost',
      description: 'Robotické broušení zajišťuje konzistentní kvalitu povrchu a přesné dodržení geometrie.'
    },
    {
      title: 'Flexibilita',
      description: 'Možnost zpracování různých materiálů a tvarově složitých dílů.'
    },
    {
      title: 'Produktivita',
      description: 'Automatizovaný proces zvyšuje efektivitu a snižuje výrobní náklady.'
    },
    {
      title: 'Adaptivní řízení',
      description: 'Systém automaticky přizpůsobuje parametry broušení podle aktuálního stavu povrchu.'
    }
  ];

  const applications = [
    {
      title: 'Strojírenství',
      items: [
        'Broušení odlitků',
        'Opracování svařenců',
        'Finální úprava dílů',
        'Leštění forem'
      ]
    },
    {
      title: 'Automobilový průmysl',
      items: [
        'Broušení karoserií',
        'Úprava výfukových systémů',
        'Leštění nárazníků',
        'Opracování litých kol'
      ]
    },
    {
      title: 'Speciální aplikace',
      items: [
        'Broušení nástrojů',
        'Leštění chirurgických nástrojů',
        'Úprava turbínových lopatek',
        'Opracování titanových implantátů'
      ]
    }
  ];

  const components = [
    'Průmyslový robot s vysokou přesností',
    'Specializované brusné a leštící nástroje',
    'Systém pro výměnu nástrojů',
    'Senzory pro měření síly a polohy',
    'Odsávací systém',
    'Bezpečnostní prvky'
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
                backgroundImage: "url('/images/grinding.png')",
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
                      {t('robotic-grinding.title', 'Robotické broušení')}
                    </h1>
                    <p className="text-xl text-white">
                      {t('robotic-grinding.description', 'Automatizované brousicí systémy pro dokonalou povrchovou úpravu. Přesné a efektivní řešení pro průmyslové broušení a leštění materiálů.')}
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
                Robotické broušení
              </h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Robotické brousící pracoviště představují moderní řešení pro automatizaci 
                  brousicích a leštících procesů. Využívají pokročilé robotické systémy 
                  v kombinaci s adaptivním řízením pro dosažení nejvyšší kvality povrchové úpravy.
                </p>
                <p>
                  Systém je vybaven pokročilými senzory, které v reálném čase monitorují 
                  proces broušení a automaticky upravují parametry podle aktuálního stavu 
                  povrchu a požadovaného výsledku.
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
                Klíčové vlastnosti
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-6"
                  >
                    <h3 className="text-xl font-bold text-secondary mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Komponenty */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-secondary mb-8">
                Hlavní komponenty
              </h2>
              <div className="bg-gray-50 rounded-lg p-8">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {components.map((component, index) => (
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
                      {component}
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
