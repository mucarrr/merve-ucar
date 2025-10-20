"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import useLanguage from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useLanguage();
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const t = translations[currentLanguage as keyof typeof translations];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success">("idle");

  useEffect(() => {
    setCurrentLanguage(language);
  }, [language]);

  useEffect(() => {
    const handleLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent;
      setCurrentLanguage(customEvent.detail);
    };
    
    window.addEventListener('languageChanged', handleLanguageChange);
    return () => window.removeEventListener('languageChanged', handleLanguageChange);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basit bir mailto link ile form gönderimi
    const subject = currentLanguage === 'tr' 
      ? `Portfolio İletişim: ${formData.name}`
      : `Portfolio Contact: ${formData.name}`;
    const nameLabel = currentLanguage === 'tr' ? 'İsim' : 'Name';
    const emailLabel = currentLanguage === 'tr' ? 'Email' : 'Email';
    const messageLabel = currentLanguage === 'tr' ? 'Mesaj' : 'Message';
    const body = `${nameLabel}: ${formData.name}%0D%0A${emailLabel}: ${formData.email}%0D%0A%0D%0A${messageLabel}:%0D%0A${formData.message}`;
    window.location.href = `mailto:mucar2326@gmail.com?subject=${subject}&body=${body}`;
    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            {t.contactTitle}
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* İletişim Bilgileri */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold mb-6 text-amber-600 dark:text-amber-400">
                {t.contactSubtitle}
              </h3>
    <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
      {t.contactDescription}
    </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-500">{t.email}</p>
                    <a
                      href="mailto:mucar2326@gmail.com"
                      className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                    >
                      mucar2326@gmail.com
                    </a>
                  </div>
                </div>


                <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-500">{t.location}</p>
                    <p>{t.locationValue}</p>
                  </div>
                </div>
              </div>


              <div className="pt-6">
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                  {t.otherChannels}
                </p>
                <div className="flex gap-4">
                  <a
                    href="mailto:mucar2326@gmail.com"
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors"
                  >
                    <FaEnvelope className="text-gray-700 dark:text-gray-300" />
                  </a>
                  <a
                    href="https://github.com/mucarrr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors"
                  >
                    <FaGithub className="text-gray-700 dark:text-gray-300" />
                  </a>
                  <a
                    href="https://linkedin.com/in/merve-ucar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors"
                  >
                    <FaLinkedin className="text-gray-700 dark:text-gray-300" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* İletişim Formu */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800"
              >
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      {t.formName}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all"
                      placeholder={t.formNamePlaceholder}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      {t.formEmail}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all"
                      placeholder={t.formEmailPlaceholder}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      {t.formMessage}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all resize-none"
                      placeholder={t.formMessagePlaceholder}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    {t.formSubmit}
                  </button>

                  {status === "success" && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-600 dark:text-green-400 text-center"
                    >
                      {t.formSuccess}
                    </motion.p>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

