import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Swiper components with no SSR
const SwiperComponent = dynamic(() => import('./ProductSwiper'), {
  ssr: false
});

export default function Products() {
  const { t } = useTranslation('common');

  const products = [
    {
      id: 'robotic-welding',
      image: '/images/welding.png',
      title: t('products.robotic-welding.title'),
      description: t('products.robotic-welding.description'),
      features: [
        t('products.robotic-welding.features.0'),
        t('products.robotic-welding.features.1'),
        t('products.robotic-welding.features.2'),
        t('products.robotic-welding.features.3'),
        t('products.robotic-welding.features.4'),
      ],
    },
    {
      id: 'robotic-grinding',
      image: '/images/grinding.png',
      title: t('products.robotic-grinding.title'),
      description: t('products.robotic-grinding.description'),
      features: [
        t('products.robotic-grinding.features.0'),
        t('products.robotic-grinding.features.1'),
        t('products.robotic-grinding.features.2'),
        t('products.robotic-grinding.features.3'),
        t('products.robotic-grinding.features.4'),
      ],
    },
    {
      id: 'welding-lasers',
      image: '/images/laser-welding.png',
      title: t('products.welding-lasers.title'),
      description: t('products.welding-lasers.description'),
      features: [
        t('products.welding-lasers.features.0'),
        t('products.welding-lasers.features.1'),
        t('products.welding-lasers.features.2'),
        t('products.welding-lasers.features.3'),
        t('products.welding-lasers.features.4'),
      ],
    },
    {
      id: 'cleaning-lasers',
      image: '/images/cleaning.png',
      title: t('products.cleaning-lasers.title'),
      description: t('products.cleaning-lasers.description'),
      features: [
        t('products.cleaning-lasers.features.0'),
        t('products.cleaning-lasers.features.1'),
        t('products.cleaning-lasers.features.2'),
        t('products.cleaning-lasers.features.3'),
        t('products.cleaning-lasers.features.4'),
      ],
    },
    {
      id: 'carport',
      image: '/images/carport/herocar.jpg',
      title: t('products.carport.title'),
      description: t('products.carport.description'),
      features: [
        t('products.carport.features.0'),
        t('products.carport.features.1'),
        t('products.carport.features.2'),
        t('products.carport.features.3'),
        t('products.carport.features.4'),
      ],
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary mb-4">
            {t('products.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('products.description')}
          </p>
        </motion.div>

        <SwiperComponent products={products} />
      </div>
    </section>
  );
}
