import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowUp } from 'react-icons/io';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Kontrola pozice scrollu
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll nahoru
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-[#0bee0b] shadow-lg hover:shadow-xl transition-shadow duration-300 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          >
            <IoIosArrowUp className="text-white text-2xl" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
