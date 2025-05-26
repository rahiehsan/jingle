import img1 from "../assets/popularInIndia/Jallianwala-Bagh.webp";
import img2 from "../assets/popularInIndia/Gangtok.webp";
import img3 from "../assets/popularInIndia/Taj-mahal.webp";

import { motion } from "framer-motion";

const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const PopularInIndia = () => {
  return (
    <div className="p-6">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold mb-2">
          POPULAR DESTINATION IN INDIA
        </h1>
        <p className="text-gray-600 w-4/5 md:w-2/3 mx-auto text-center">
          India is a vibrant land of startling contrasts where both the
          traditional and modern worlds meet. The world's seventh largest nation
          by area and the second largest in terms of population, India boasts a
          rich heritage that's the result of centuries of different cultures and
          religions leaving their mark.
        </p>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[500px]">
        {/* 1st image - Amritsar */}
        <motion.figure
          className="relative w-full h-full rounded-lg overflow-hidden row-span-2 col-span-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
        >
          <img
            src={img1}
            alt="Amritsar"
            className="w-full h-full object-cover"
          />
          <figcaption className="absolute bottom-0 left-0 w-full text-white text-center py-2 bg-black/40">
            Amritsar
          </figcaption>
        </motion.figure>

        {/* Gangtok */}
        <motion.figure
          className="relative w-full h-full rounded-lg overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
        >
          <img
            src={img2}
            alt="Gangtok"
            className="w-full h-full object-cover"
          />
          <figcaption className="absolute bottom-0 left-0 w-full text-white text-center py-2 bg-black/40">
            Gangtok
          </figcaption>
        </motion.figure>

        {/* Taj Mahal */}
        <motion.figure
          className="relative w-full h-full rounded-lg overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
        >
          <img
            src={img3}
            alt="Taj Mahal"
            className="w-full h-full object-cover"
          />
          <figcaption className="absolute bottom-0 left-0 w-full text-white text-center py-2 bg-black/40">
            Taj Mahal
          </figcaption>
        </motion.figure>
      </div>
    </div>
  );
};

export default PopularInIndia;
