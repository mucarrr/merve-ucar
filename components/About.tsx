"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
            Hakkımda
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Matematik eğitimi arka planım sayesinde mantıksal düşünme ve problem çözme
                konusunda güçlü bir temele sahibim. Bu temel, beni yazılım geliştirmeye
                yönlendirdi ve karmaşık problemleri basit adımlara dönüştürme konusunda
                avantaj sağladı.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>Full Stack Developer</strong> olarak MERN stack (MongoDB, Express.js,
                React, Node.js) ile web uygulamaları geliştiriyorum. Next.js ile server-side
                rendering, Docker ile containerization ve RESTful API tasarımı konularında
                deneyimliyim.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Responsive tasarım, performans optimizasyonu ve modern web standartlarına
                önem veren bir geliştirici olarak, kullanıcı deneyimini ön planda tutarak
                çalışıyorum. Agile/Scrum metodolojileri ile ekip çalışmasına uyumlu,
                sürekli öğrenmeye açık ve projelerime mantıksal değer katmaya odaklıyım.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-amber-600 dark:text-amber-400">
                  📍 Konum
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Atina, Yunanistan
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-amber-600 dark:text-amber-400">
                  🎓 Eğitim
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Boğaziçi Üniversitesi</strong>
                  <br />
                  Matematik Eğitimi, Lisans
                  <br />
                  2007 - 2012
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-amber-600 dark:text-amber-400">
                  🌍 Diller
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Türkçe:</strong> Ana dil
                  <br />
                  <strong>İngilizce:</strong> B2
                  <br />
                  <strong>Yunanca:</strong> B2
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

