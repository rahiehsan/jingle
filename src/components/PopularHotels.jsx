import { motion } from "framer-motion";
import img3 from "../assets/popularHotels/5.webp";
import img2 from "../assets/popularHotels/2.webp";
import img1 from "../assets/popularHotels/Taj-Aravali.webp";

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

const PopularHotels = () => {
  return (
    <div className="p-6">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">POPULAR HOTELS</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          At Jingle Holiday Bazar Brovide Best Hotel facilty National And
          International
        </p>
      </div>

      {/* Two-column layout */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left column with two stacked cards */}
        <div className="flex flex-col gap-8 w-full md:w-2/3">
          {/* Card 1 */}
          <div className="flex gap-6">
            <motion.figure
              className="relative w-1/3 rounded-lg overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
            >
              <img
                src={img1}
                alt="Aravali"
                className="w-full h-50 object-cover"
              />
            </motion.figure>
            <div className="w-2/3">
              <h2 className="text-xl font-semibold mb-2">
                Taj Aravali Resort & Spa
              </h2>
              <p className="text-gray-700 mb-4">
                Prices for Taj Aravali Resort and Spa one of the best hotels in
                India, starts at ₹ 12999+ per night
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex gap-6">
            <motion.figure
              className="relative w-1/3 rounded-lg overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
            >
              <img
                src={img2}
                alt="Hotel"
                className="w-full h-50 object-cover"
              />
            </motion.figure>
            <div className="w-2/3">
              <h2 className="text-xl font-semibold mb-2">
                Hotel Mountain face by Snow City Hotels
              </h2>
              <p className="text-gray-700 mb-4">
                Set in Manāli Hotel Mountain face by Snow City Hotels offers
                accommodation with a restaurant, free private parking, a shared
                lounge and a garden. ₹ 1,440+ per night
              </p>
            </div>
          </div>
        </div>

        {/* Right column with one full-width card */}
        <div className="flex flex-col w-full md:w-2/3">
          <motion.figure
            className="relative rounded-lg overflow-hidden mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
          >
            <img src={img3} alt="Leh" className="w-full h-80 object-cover" />
          </motion.figure>
          <div>
            <h2 className="text-xl font-semibold mb-2">Hideout Premiere</h2>
            <p className="text-gray-700 mb-4">
              Hideout Resorts is a collection of elegantly designed hotels and
              resorts in Goa that aim to give our guests the opportunity to
              enjoy Goa in all her glory. Whether it’s the beaches ₹ 4499+
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularHotels;
