import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import Header from '../../components/Header';

export default function Carport() {
  const { t } = useTranslation('products');

  const benefits = [
    {
      title: 'Ochrana vozidla',
      description: 'Efektivní ochrana před sluncem, deštěm, sněhem a dalšími povětrnostními vlivy.'
    },
    {
      title: 'Solární energie',
      description: 'Integrované solární panely pro výrobu vlastní elektřiny a dobíjení elektromobilů.'
    },
    {
      title: 'Moderní design',
      description: 'Elegantní a nadčasový vzhled, který zvýší hodnotu vaší nemovitosti.'
    },
    {
      title: 'Variabilita',
      description: 'Možnost přizpůsobení velikosti a konfigurace podle vašich potřeb.'
    }
  ];

  const features = [
    {
      title: 'Solární systém',
      items: [
        'Vysoce účinné solární panely',
        'Inteligentní měnič napětí',
        'Monitoring výroby energie',
        'Možnost ukládání energie'
      ]
    },
    {
      title: 'Konstrukce',
      items: [
        'Robustní hliníková konstrukce',
        'UV stabilní střešní krytina',
        'LED osvětlení',
        'Odolnost proti větru a sněhu'
      ]
    },
    {
      title: 'Příslušenství',
      items: [
        'Nabíjecí stanice pro elektromobily',
        'Dešťové okapy a svody',
        'Integrované osvětlení',
        'Možnost bočního opláštění'
      ]
    }
  ];

  const specifications = [
    'Standardní rozměry: 3x5m, 3x6m, 6x6m',
    'Výška: 2,2 - 2,8m',
    'Výkon solárních panelů: až 5 kWp',
    'Nosnost střechy: 150 kg/m²',
    'Záruka: 10 let na konstrukci',
    'Certifikace: CE, ISO 9001'
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
                backgroundImage: "url('/images/carport/herocar.jpg')",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl font-bold text-white mb-6"
                >
                  Solární carport
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-white max-w-3xl"
                >
                  Moderní řešení pro parkování s integrovanými solárními panely
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* Hlavní obsah */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Popis produktu */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Solární Carport
              </h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Solární Carport představuje inovativní řešení pro parkování vozidel, které 
                  kombinuje ochranu před povětrnostními vlivy s výrobou čisté solární energie. 
                  Moderní design a kvalitní materiály zajišťují dlouhou životnost a estetický vzhled.
                </p>
                <p>
                  Systém je vybaven vysoce účinnými solárními panely a inteligentním řízením, 
                  které optimalizuje výrobu a využití energie. Volitelně lze doplnit o nabíjecí 
                  stanici pro elektromobily nebo systém pro ukládání energie.
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
                Hlavní výhody
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
                  {specifications.map((spec, index) => (
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
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Vlastnosti a příslušenství */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-secondary mb-8">
                Vlastnosti a příslušenství
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-6"
                  >
                    <h3 className="text-xl font-bold text-secondary mb-4">
                      {feature.title}
                    </h3>
                    <ul className="space-y-2">
                      {feature.items.map((item, i) => (
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
