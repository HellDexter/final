import { motion } from 'framer-motion';
import Image from 'next/image';
import { Tab } from '@headlessui/react';
import { useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function RoboticWelding() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Úvodní sekce */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Robotická svařovací pracoviště</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Společnost RTI Robotech innovation vyrábí a dodává svařovací pracoviště. Každé pracoviště je možné sestavit podle vašich požadavků. Krom toho nabízíme standartní modely.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Roboti můžou být vybaveni různými typy svařovací technologie: MIG/MAG, TIG, LASER.
          </p>
        </motion.div>

        {/* Modelové řady */}
        <Tab.Group onChange={setSelectedTab}>
          <Tab.List className="flex space-x-4 border-b border-gray-200 mb-12">
            {['Modelová řada H', 'Modelová řada E', 'Modelová řada T'].map((category, idx) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'py-4 px-8 text-lg font-medium leading-5 focus:outline-none transition-colors',
                    selected
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-500 hover:text-gray-700'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {/* Modelová řada H */}
            <Tab.Panel>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">Modelová řada H</h3>
                  <p className="text-gray-600">
                    Robotické svařovací pracoviště na ocelové konstrukci ve tvaru písmene H. Robot je umístěn ve středu a obsluhuje dvě pracovní stanice. V jedné stanici robot svařuje, v druhé stanici obsluha vyndává hotový svařenec a připravuje další.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold mb-4">Technické parametry:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Průmyslový robot FANUC ARC MATE 100iD 8L s dosahem 2032 mm</li>
                      <li>2x jednoosé polohovadlo s protiložiskem FANUC nosnost 1000 kg</li>
                      <li>Bezpečnostní optické závory REER</li>
                      <li>Bezpečnostní ocelové oplocení</li>
                      <li>Dotykové vyhledávání dílů</li>
                      <li>Automatická korekce dráhy</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                    <Image
                      src="/images/welding/h-series/main.jpg"
                      alt="Modelová řada H"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="aspect-w-4 aspect-h-3">
                      <Image
                        src="/images/welding/h-series/detail1.jpg"
                        alt="Detail 1"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                    <div className="aspect-w-4 aspect-h-3">
                      <Image
                        src="/images/welding/h-series/detail2.jpg"
                        alt="Detail 2"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                    <div className="aspect-w-4 aspect-h-3">
                      <Image
                        src="/images/welding/h-series/detail3.jpg"
                        alt="Detail 3"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Varianty svařování */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4">Varianta MIG/MAG</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Robotický svařovací zdroj Migatronic SIGMA Select 400 ROBO</li>
                    <li>Svařovací svazek + hořák ABICOR BINZEL 500 A vodou chlazený</li>
                    <li>Automatická čistící stanice hořáku</li>
                    <li>Automatická kalibrace hořáku</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4">Varianta TIG</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Robotický svařovací zdroj Migatronic PI 350 AC/DC ROBO s podavačem drátu</li>
                    <li>Svařovací svazek + hořák ABICOR BINZEL 300 A vodou chlazený</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4">Varianta LASER</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Robotický svařovací vláknový zdroj RAYCUS 2000 W s podavačem drátu</li>
                    <li>Svařovací svazek + svařovací laserová hlava RAYTOOLS</li>
                  </ul>
                </div>
              </div>

              {/* Obsah dodávky */}
              <div className="mt-12 bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4">Obsah dodávky:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Kompletní robotické pracoviště, včetně montáže a uvedení do provozu u zákazníka</li>
                  <li>Školení pro dvě osoby na obsluhu a programování v rozsahu 2 dny</li>
                </ul>
              </div>
            </Tab.Panel>

            {/* Modelová řada E */}
            <Tab.Panel>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">Modelová řada E</h3>
                  <p className="text-gray-600">
                    Robotické svařovací pracoviště na ocelové konstrukci ve tvaru písmene E. Robot je umístěn na dráze, 
                    zavěšen na věži a obsluhuje dvě pracovní stanice. V jedné stanici robot svařuje, v druhé stanici 
                    obsluha vyndává hotový svařenec a připravuje další.
                  </p>
                  <p className="text-gray-600">
                    Délka stanice je 2850 mm, průměr protočení 1200 mm. Snadnou demontáží středové přepážky je možné 
                    spojit pracovní stanice v jednu dlouhou 6200 mm.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold mb-4">Technické parametry:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Průmyslový robot FANUC ARC MATE 100iD 8L s dosahem 2032 mm</li>
                      <li>2x jednoosé polohovadlo s protiložiskem FANUC nosnost 1000 kg</li>
                      <li>Bezpečnostní optické závory REER</li>
                      <li>Bezpečnostní ocelové oplocení</li>
                      <li>Dotykové vyhledávání dílů</li>
                      <li>Automatická korekce dráhy</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                    <Image
                      src="/images/welding/e-series/main.jpg"
                      alt="Modelová řada E"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="aspect-w-4 aspect-h-3">
                      <Image
                        src="/images/welding/e-series/detail1.jpg"
                        alt="Detail 1"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                    <div className="aspect-w-4 aspect-h-3">
                      <Image
                        src="/images/welding/e-series/detail2.jpg"
                        alt="Detail 2"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                    <div className="aspect-w-4 aspect-h-3">
                      <Image
                        src="/images/welding/e-series/detail3.jpg"
                        alt="Detail 3"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Varianty svařování */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4">Varianta MIG/MAG</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Robotický svařovací zdroj Migatronic SIGMA Select 400 ROBO</li>
                    <li>Svařovací svazek + hořák ABICOR BINZEL 500 A vodou chlazený</li>
                    <li>Automatická čistící stanice hořáku</li>
                    <li>Automatická kalibrace hořáku</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4">Varianta TIG</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Robotický svařovací zdroj Migatronic PI 350 AC/DC ROBO s podavačem drátu</li>
                    <li>Svařovací svazek + hořák ABICOR BINZEL 300 A vodou chlazený</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4">Varianta LASER</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Robotický svařovací vláknový zdroj RAYCUS 2000 W s podavačem drátu</li>
                    <li>Svařovací svazek + svařovací laserová hlava RAYTOOLS</li>
                  </ul>
                </div>
              </div>

              {/* Obsah dodávky */}
              <div className="mt-12 bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4">Obsah dodávky:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Kompletní robotické pracoviště, včetně montáže a uvedení do provozu u zákazníka</li>
                  <li>Školení pro dvě osoby na obsluhu a programování v rozsahu 2 dny</li>
                </ul>
              </div>
            </Tab.Panel>

            {/* Modelová řada T */}
            <Tab.Panel>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">Modelová řada T</h3>
                  <p className="text-gray-600">
                    Robotické svařovací pracoviště T je na ocelovém svařovacím stole. Robot je umístěn na stole. 
                    Stůl je o rozměru 1500 x 1000 mm s otvory 22 mm pro použití standartních upínek pro svařování.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold mb-4">Technické parametry:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Průmyslový robot FANUC ARC MATE 100iD/10L s dosahem 1636 mm</li>
                      <li>Svařovací stůl plocha 1500x1000 mm s upínacími otvory 22 mm</li>
                      <li>Bezpečnostní scannery REER</li>
                      <li>Dotykové vyhledávání dílů</li>
                      <li>Automatická korekce dráhy</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                    <Image
                      src="/images/welding/t-series/main.jpg"
                      alt="Modelová řada T"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="aspect-w-4 aspect-h-3">
                      <Image
                        src="/images/welding/t-series/detail1.jpg"
                        alt="Detail 1"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                    <div className="aspect-w-4 aspect-h-3">
                      <Image
                        src="/images/welding/t-series/detail2.jpg"
                        alt="Detail 2"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                    <div className="aspect-w-4 aspect-h-3">
                      <Image
                        src="/images/welding/t-series/detail3.jpg"
                        alt="Detail 3"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Varianty svařování */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4">Varianta MIG/MAG</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Robotický svařovací zdroj Migatronic SIGMA Select 400 ROBO</li>
                    <li>Svařovací svazek + hořák ABICOR BINZEL 500 A vodou chlazený</li>
                    <li>Automatická čistící stanice hořáku</li>
                    <li>Automatická kalibrace hořáku</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4">Varianta TIG</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Robotický svařovací zdroj Migatronic PI 350 AC/DC ROBO s podavačem drátu</li>
                    <li>Svařovací svazek + hořák ABICOR BINZEL 300 A vodou chlazený</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4">Varianta LASER</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Robotický svařovací vláknový zdroj RAYCUS 2000 W s podavačem drátu</li>
                    <li>Svařovací svazek + svařovací laserová hlava RAYTOOLS</li>
                  </ul>
                </div>
              </div>

              {/* Obsah dodávky */}
              <div className="mt-12 bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4">Obsah dodávky:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Kompletní robotické pracoviště, včetně montáže a uvedení do provozu u zákazníka</li>
                  <li>Školení pro dvě osoby na obsluhu a programování v rozsahu 2 dny</li>
                </ul>
              </div>

              {/* OPCE */}
              <div className="mt-12 bg-primary/5 p-6 rounded-lg border border-primary/20">
                <h4 className="text-xl font-semibold mb-4 text-primary">OPCE:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Možné dodat v oplocení s bezpečnostní závorou REER</li>
                </ul>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>

        {/* Doplňkové funkce */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Doplňkové funkce</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Arc Seam Tracking */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9">
                <Image
                  src="/images/welding/features/arc-seam-tracking.jpg"
                  alt="Arc Seam Tracking"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-4">Arc Seam Tracking</h4>
                <p className="text-gray-600">
                  Sledování pomocí Arc Seam Tracking pro svařování provádí měření na svařovacím oblouku a kompenzaci dráhy během svařování. V naší nabídce je součástí vybavení svařovacího robota. TAST sleduje střed sváru pomocí kývavého pohybu. Vzdálenost svařovací elektrody pomocí měření napětí na oblouku.
                </p>
              </div>
            </motion.div>

            {/* Touch Sensing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9">
                <Image
                  src="/images/welding/features/touch-sensing.jpg"
                  alt="Touch Sensing"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-4">Touch Sensing</h4>
                <p className="text-gray-600">
                  Touch Sensing s elektrickým dotykovým senzorem může vyhledat kompenzovat posunuté a otočené výrobky. Je možné využít několik způsobů pro vyhledávání počátečního bodu, 2D a 3D posuny a rotace i pro kruhové otvory.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
