import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

export default function About() {
  const { t } = useTranslation('common');

  const specializations = [
    {
      key: 'roboticWelding',
      title: t('about.specializations.roboticWelding.title'),
      description: t('about.specializations.roboticWelding.description')
    },
    {
      key: 'roboticGrinding',
      title: t('about.specializations.roboticGrinding.title'),
      description: t('about.specializations.roboticGrinding.description')
    },
    {
      key: 'laserCleaning',
      title: t('about.specializations.laserCleaning.title'),
      description: t('about.specializations.laserCleaning.description')
    },
    {
      key: 'solarTech',
      title: t('about.specializations.solarTech.title'),
      description: t('about.specializations.solarTech.description')
    }
  ];

  const reasons = [
    {
      key: 'innovation',
      title: t('about.whyUs.innovation.title'),
      description: t('about.whyUs.innovation.description')
    },
    {
      key: 'customSolutions',
      title: t('about.whyUs.customSolutions.title'),
      description: t('about.whyUs.customSolutions.description')
    },
    {
      key: 'partnership',
      title: t('about.whyUs.partnership.title'),
      description: t('about.whyUs.partnership.description')
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hlavní sekce O nás */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('about.title')}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('about.mainDescription')}
          </p>
        </motion.div>

        {/* Naše specializace */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-gray-900 text-center mb-12"
          >
            {t('about.specializations.title')}
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializations.map((spec) => (
              <motion.div
                key={spec.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{spec.title}</h4>
                <p className="text-gray-600">{spec.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Proč si vybrat právě nás */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-gray-900 text-center mb-12"
          >
            {t('about.whyUs.title')}
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason) => (
              <motion.div
                key={reason.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{reason.title}</h4>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Kontaktní CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('about.contact.title')}</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('about.contact.description')}
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium 
                     hover:bg-primary-dark transition-colors duration-300"
          >
            {t('about.contact.button')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
