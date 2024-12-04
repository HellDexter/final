import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function Hero() {
  const { t } = useTranslation('common');

  const slides = [
    {
      image: '/images/hero-main.png',
      title: t('hero.slide1.title', 'Inovativní průmyslová řešení'),
      description: t('hero.slide1.description', 'Špičkové technologie pro automatizaci a robotizaci výroby'),
    },
    {
      image: '/images/carport/herocar.jpg',
      title: t('hero.slide3.title', 'Ekologická energetická řešení'),
      description: t('hero.slide3.description', 'Solární carporty pro udržitelnou budoucnost'),
    },
    {
      image: '/images/laser-welding.png',
      title: t('products.welding-lasers.title', 'Svařovací lasery'),
      description: t('products.welding-lasers.description'),
    },
    {
      image: '/images/welding.png',
      title: t('products.robotic-welding.title', 'Robotická svařovací pracoviště'),
      description: t('products.robotic-welding.description'),
    },
    {
      image: '/images/grinding.png',
      title: t('products.robotic-grinding.title', 'Robotická brousící pracoviště'),
      description: t('products.robotic-grinding.description'),
    },
    {
      image: '/images/cleaning.png',
      title: t('products.cleaning-lasers.title', 'Čisticí lasery'),
      description: t('products.cleaning-lasers.description'),
    }
  ];

  return (
    <section className="relative h-[700px] md:h-[800px]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <div
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50" />
              </div>
              <div className="relative h-full flex items-center justify-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <motion.h1
                    key={`title-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    key={`desc-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-xl sm:text-2xl text-white mb-8"
                  >
                    {slide.description}
                  </motion.p>
                  <motion.div
                    key={`button-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <a
                      href="#products"
                      className="inline-block bg-primary text-secondary font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors"
                    >
                      {t('hero.cta')}
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a
          href="#products"
          className="text-white animate-bounce"
          aria-label="Scroll down"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
