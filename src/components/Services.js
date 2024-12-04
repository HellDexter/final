import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';

export default function Services() {
  const { t } = useTranslation('common');

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('services.title', 'Naše služby')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('services.description', 'Komplexní řešení pro moderní průmysl')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Inženýring */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold mb-4">
              {t('services.engineering.title', 'Inženýring')}
            </h3>
            <p className="text-gray-600">
              {t('services.engineering.description', 'Zakázkový návrh a vývoj robotických a laserových systémů.')}
            </p>
          </motion.div>

          {/* Instalace */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold mb-4">
              {t('services.installation.title', 'Instalace')}
            </h3>
            <p className="text-gray-600">
              {t('services.installation.description', 'Profesionální instalace a integrace systémů do vaší výroby.')}
            </p>
          </motion.div>

          {/* Podpora */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold mb-4">
              {t('services.support.title', 'Podpora')}
            </h3>
            <p className="text-gray-600">
              {t('services.support.description', 'Nepřetržitá technická podpora a servisní služby.')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
