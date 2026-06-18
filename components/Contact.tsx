"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
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

    window.addEventListener("languageChanged", handleLanguageChange);
    return () => window.removeEventListener("languageChanged", handleLanguageChange);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basit bir mailto link ile form gönderimi
    const subject =
      currentLanguage === "tr"
        ? `Portfolio İletişim: ${formData.name}`
        : `Portfolio Contact: ${formData.name}`;
    const nameLabel = currentLanguage === "tr" ? "İsim" : "Name";
    const emailLabel = currentLanguage === "tr" ? "Email" : "Email";
    const messageLabel = currentLanguage === "tr" ? "Mesaj" : "Message";
    const body = `${nameLabel}: ${formData.name}%0D%0A${emailLabel}: ${formData.email}%0D%0A%0D%0A${messageLabel}:%0D%0A${formData.message}`;
    window.location.href = `mailto:mucar2326@gmail.com?subject=${subject}&body=${body}`;
    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" ref={ref} className="section-padding bg-surface">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-16">{t.contactTitle}</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* İletişim Bilgileri */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="mb-6 text-2xl font-bold text-brand-dark dark:text-brand-light">
                {t.contactSubtitle}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {t.contactDescription}
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 dark:bg-brand-dark/20">
                    <FaEnvelope className="text-brand-dark dark:text-brand-light" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-500">{t.email}</p>
                    <a
                      href="mailto:mucar2326@gmail.com"
                      className="transition-colors hover:text-brand-dark dark:hover:text-brand-light"
                    >
                      mucar2326@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 dark:bg-brand-dark/20">
                    <FaMapMarkerAlt className="text-brand-dark dark:text-brand-light" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-500">{t.location}</p>
                    <p>{t.locationValue}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">{t.otherChannels}</p>
                <div className="flex gap-4">
                  <a
                    href="mailto:mucar2326@gmail.com"
                    aria-label="Send email to Merve Uçar"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-brand/10 dark:bg-gray-800 dark:hover:bg-brand-dark/20"
                  >
                    <FaEnvelope className="text-gray-700 dark:text-gray-300" aria-hidden="true" />
                  </a>
                  <a
                    href="https://github.com/mucarrr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Merve Uçar's GitHub profile"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-brand/10 dark:bg-gray-800 dark:hover:bg-brand-dark/20"
                  >
                    <FaGithub className="text-gray-700 dark:text-gray-300" aria-hidden="true" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ucar-merve/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Merve Uçar's LinkedIn profile"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-brand/10 dark:bg-gray-800 dark:hover:bg-brand-dark/20"
                  >
                    <FaLinkedin className="text-gray-700 dark:text-gray-300" aria-hidden="true" />
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
                className="card p-8"
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
                      className="input-field"
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
                      className="input-field"
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
                      className="input-field resize-none"
                      placeholder={t.formMessagePlaceholder}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full py-4"
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
