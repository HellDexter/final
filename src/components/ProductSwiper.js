'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useTranslation } from 'next-i18next';

// Importujeme styly
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ProductSwiper({ products }) {
  const { t } = useTranslation('common');

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="products-swiper"
    >
      {products.map((product, index) => (
        <SwiperSlide key={product.id}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-64">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${product.image})` }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 hover:bg-opacity-30" />
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-secondary mb-4">
                {product.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {product.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, i) => (
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
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={`/products/${product.id}`}
                className="inline-block bg-primary text-secondary font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                {t('products.learnMore')}
              </Link>
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
