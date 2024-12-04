import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

export default function Contact() {
  const { t } = useTranslation('common');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Zde bude implementace odeslání formuláře
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulace odeslání
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: t('contact.info.address'),
      content: 'Průmyslová 1234, 123 45 Praha',
    },
    {
      icon: PhoneIcon,
      title: t('contact.info.phone'),
      content: '+420 123 456 789',
    },
    {
      icon: EnvelopeIcon,
      title: t('contact.info.email'),
      content: 'info@robotech-innovation.cz',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Kontaktní formulář */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t('contact.form.message')}
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-secondary bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Odesílání...' : t('contact.form.submit')}
                </button>
              </div>

              {submitStatus === 'success' && (
                <div className="text-green-600 text-center">
                  Zpráva byla úspěšně odeslána. Děkujeme za váš zájem.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-red-600 text-center">
                  Při odesílání zprávy došlo k chybě. Prosím zkuste to znovu.
                </div>
              )}
            </form>
          </motion.div>

          {/* Kontaktní informace */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="bg-primary rounded-lg p-3">
                    <item.icon className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-secondary">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-gray-600">{item.content}</p>
                </div>
              </div>
            ))}

            {/* Mapa */}
            <div className="mt-8 aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.7416453746287!2d14.4371658!3d50.0859756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDA1JzA5LjUiTiAxNMKwMjYnMTMuOCJF!5e0!3m2!1scs!2scz!4v1637764283772!5m2!1scs!2scz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
