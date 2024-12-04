import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Image from 'next/image';

export default function RoboticWelding() {
  const { t } = useTranslation('products');

  const technologies = ['MIG/MAG', 'TIG', 'LASER'];

  const technicalParams = {
    mig_mag: {
      title: 'Technické parametry MIG/MAG',
      params: [
        'Svařovací proud: 30-400 A',
        'Zatěžovatel 60%: 400 A',
        'Zatěžovatel 100%: 310 A',
        'Napájecí napětí: 3x400 V',
        'Jištění: 32 A',
        'Krytí: IP 23',
        'Rychlost podávání drátu: 0,5-25 m/min',
        'Průměr drátu: 0,6-1,6 mm',
        'Chlazení hořáku: vodní'
      ]
    },
    tig: {
      title: 'Technické parametry TIG',
      params: [
        'Svařovací proud: 3-350 A',
        'Zatěžovatel 60%: 350 A',
        'Zatěžovatel 100%: 300 A',
        'Napájecí napětí: 3x400 V',
        'Jištění: 25 A',
        'Krytí: IP 23',
        'Průměr elektrody: 1,0-4,0 mm',
        'Průměr drátu: 0,6-1,6 mm',
        'Chlazení hořáku: vodní'
      ]
    },
    laser: {
      title: 'Technické parametry LASER',
      params: [
        'Výkon laseru: 2000 W',
        'Vlnová délka: 1080 nm',
        'Průměr vlákna: 50 μm',
        'Napájecí napětí: 3x400 V',
        'Jištění: 32 A',
        'Krytí: IP 54',
        'Průměr drátu: 0,8-1,2 mm',
        'Chlazení: vodní',
        'Spotřeba chladící vody: 15 l/min'
      ]
    }
  };

  const features = [
    {
      title: 'Arc Seam Tracking',
      image: '/images/welding/features/arc-seam-tracking.jpg',
      description: 'Sledování pomocí Arc Seam Tracking pro svařování provádí měření na svařovacím oblouku a kompenzaci dráhy během svařování. TAST sleduje střed sváru pomocí kývavého pohybu. Vzdálenost svařovací elektrody pomocí měření napětí na oblouku.'
    },
    {
      title: 'Touch Sensing',
      image: '/images/welding/features/touch-sensing.jpg',
      description: 'Touch Sensing s elektrickým dotykovým senzorem může vyhledat kompenzovat posunuté a otočené výrobky. Je možné využít několik způsobů pro vyhledávání počátečního bodu, 2D a 3D posuny a rotace i pro kruhové otvory.'
    }
  ];

  const series = [
    {
      name: 'H',
      title: 'Modelová řada H',
      description: 'Robotické svařovací pracoviště na ocelové konstrukci ve tvaru písmene H. Robot je umístěn ve středu a obsluhuje dvě pracovní stanice. V jedné stanici robot svařuje, v druhé stanici obsluha vyndává hotový svařenec a připravuje další.',
      additionalInfo: 'Robotické svařovací pracoviště H se skládá ze dvou oddělených pracovišť. Každé pracoviště má vlastní ovládací prvky start a stop pracovního cyklu a vlastní bezpečnostní prvky. Přídavný svařovací drát možné podávat z cívky, nebo ze sudu. Délka svařovací stanice 3000 mm, průměr protočení 1200 mm.',
      images: [
        '/images/welding/h-series/detail1.JPG',
        '/images/welding/h-series/detail2.JPG',
        '/images/welding/h-series/detail3.jpg'
      ]
    },
    {
      name: 'E',
      title: 'Modelová řada E',
      description: 'Robotické svařovací pracoviště na ocelové konstrukci ve tvaru písmene E. Robot je umístěn na dráze, zavěšen na věži a obsluhuje dvě pracovní stanice. V jedné stanici robot svařuje, v druhé stanici obsluha vyndává hotový svařenec a připravuje další. Délka stanice je 2850 mm, průměr protočení 1200 mm.',
      additionalInfo: 'Snadnou demontáží středové přepážky je možné spojit pracovní stanice v jednu dlouhou 6200 mm. Robotické svařovací pracoviště E se skládá ze dvou oddělených pracovišť. Každé pracoviště má vlastní ovládací prvky start a stop pracovního cyklu a vlastní bezpečnostní prvky. Přídavný svařovací drát možné podávat z cívky, nebo ze sudu.',
      images: [
        '/images/welding/e-series/detail1.JPG',
        '/images/welding/e-series/detail2.JPG',
        '/images/welding/e-series/detail3.jpg'
      ]
    },
    {
      name: 'T',
      title: 'Modelová řada T',
      description: 'Robotické svařovací pracoviště T je na ocelovém svařovacím stole. Robot je umístěn na stole. Stůl je o rozměru 1500 x 1000 mm s otvory 22 mm pro použití standartních upínek pro svařování.',
      additionalInfo: 'Robotické svařovací pracoviště T má vlastní ovládací prvky start a stop pracovního cyklu a vlastní bezpečnostní prvky. Přídavný svařovací drát možné podávat z cívky, nebo ze sudu.',
      images: [
        '/images/welding/t-series/detail1.JPG',
        '/images/welding/t-series/detail2.jpg'
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
                backgroundImage: "url('/images/welding.png')",
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
                      {t('robotic-welding.title', 'Robotické svařování')}
                    </h1>
                    <p className="text-xl text-white">
                      {t('robotic-welding.description', 'Automatizované svařovací systémy pro maximální efektivitu a přesnost. Komplexní řešení robotického svařování pro moderní průmyslovou výrobu.')}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologie */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12"
            >
              Dostupné technologie svařování
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
                >
                  <h3 className="text-xl font-semibold">{tech}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technické parametry */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 text-center"
            >
              Technické parametry svařovacích technologií
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.values(technicalParams).map((tech, index) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6 shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-4 text-center">{tech.title}</h3>
                  <ul className="space-y-2">
                    {tech.params.map((param, paramIndex) => (
                      <li key={paramIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{param}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Modelové řady */}
        {series.map((serie, index) => (
          <section key={serie.name} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-12 text-center"
              >
                {serie.title}
              </motion.h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <p className="text-lg">{serie.description}</p>
                  <p className="text-lg">{serie.additionalInfo}</p>
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Technické parametry:</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Průmyslový robot FANUC ARC MATE 100iD 8L s dosahem 2032 mm</li>
                      <li>2x jednoosé polohovadlo s protiložiskem FANUC nosnost 1000 kg</li>
                      <li>Bezpečnostní optické závory REER</li>
                      <li>Bezpečnostní ocelové oplocení</li>
                      <li>Dotykové vyhledávání dílů</li>
                      <li>Automatická korekce dráhy</li>
                    </ul>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 gap-6"
                >
                  {serie.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="relative h-80 rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`${serie.title} - detail ${imgIndex + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>
        ))}

        {/* Doplňkové funkce */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 text-center"
            >
              Doplňkové funkce
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="relative h-64">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
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
      ...(await serverSideTranslations(locale, ['common', 'products'])),
    },
  };
}
