"use client";

import { motion } from "framer-motion";
import config from "../../config";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SpecialService() {
  const ServiceCard = ({ icon: Icon, title, description, link }) => (
    <motion.div
      className="bg-[#1A1A1A] rounded-2xl p-6 flex flex-col justify-between space-y-20 md:space-y-36 shadow-lg"
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col space-y-4">
        <div className="bg-[#2A2A2A] w-12 h-12 flex items-center justify-center rounded-xl">
          <Icon size={24} className="text-orange-500" />
        </div>
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <div>
        <p className="text-gray-400">{description}</p>
        <Link
          href={link}
          className="flex items-center text-white font-semibold hover:text-orange-500 transition-colors"
        >
          <span>Learn More</span>
          <ArrowRight size={20} className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );

  return (
    <section className="text-white py-20 md:max-w-[75vw] mx-auto">
      <motion.div
        className="container mx-auto px-4"
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:space-x-4 my-10 md:my-20 text-center md:text-left"
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.span
            className="text-orange-500 font-bold rounded-full bg-[#232323] px-4 py-2 mb-4 md:mb-0"
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            {config.specialService.subheading}
          </motion.span>
          <motion.h2
            className="text-md md:text-3xl font-bold font-unbounded"
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            {config.specialService.heading}
          </motion.h2>
        </motion.div>

        <motion.div
          className="text-center md:text-right mb-20"
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <Link
            href="/pages/contact"
            className="bg-[#FF7A30] py-3 px-2 md:px-7 rounded-full transition-colors text-black"
          >
            VIEW ALL SERVICES ↗
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-2"
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          {config.specialService.cards.map((card) => {
            const IconComponent = require("lucide-react")[card.icon];
            return (
              <ServiceCard
                key={card.id}
                icon={IconComponent}
                title={card.title}
                description={card.description}
                link={card.link}
              />
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}