"use client";

import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import { education, certifications } from "@/data/profile";
import { staggerContainer, staggerItem } from "../animations/variants";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="EDUCATION" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Education */}
          {education.map((edu) => (
            <motion.div
              key={edu.institution}
              variants={staggerItem}
              whileHover={{ borderColor: "var(--accent)" }}
              className="border border-[#1a1a1a] bg-[#0a0a0a] p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🎓</span>
                <span className="text-accent text-sm font-[family-name:var(--font-jetbrains-mono)]">
                  {edu.period}
                </span>
              </div>

              <h3 className="text-lg font-bold font-[family-name:var(--font-space-grotesk)] mb-2">
                {edu.institution}
              </h3>

              <p className="text-[#888] text-sm mb-2">{edu.degree}</p>
              <p className="text-[#666] text-sm">{edu.gpa}</p>
            </motion.div>
          ))}

          {/* Certifications Section */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {certifications.map((cert) => (
              <motion.div
                key={cert.name}
                variants={staggerItem}
                whileHover={{ borderColor: "var(--accent)" }}
                className="border border-[#1a1a1a] bg-[#0a0a0a] p-6 rounded-lg transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">📜</span>
                  <span className="text-accent text-sm font-[family-name:var(--font-jetbrains-mono)]">
                    {cert.period}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-[family-name:var(--font-space-grotesk)] mb-2 text-white">
                  {cert.name}
                </h3>

                <p className="text-[#888] text-sm mb-4">
                  {cert.score}
                </p>

                {/* Bagian Tombol View Certificate */}
                {cert.link && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors text-sm font-medium group"
                  >
                    View Certificate
                    <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200">
                      ↗
                    </span>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}