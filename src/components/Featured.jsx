import { motion } from "framer-motion";
import img1 from "../assets/featured/leh.webp";
import img2 from "../assets/featured/Solang-Valley.webp";
import img3 from "../assets/featured/goa.webp";

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

const Featured = () => {
  return (
    <div className="p-6">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold mb-2">FEATURED TOURS IN INDIA</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          India is a vibrant land of startling contrasts where both the
          traditional and modern worlds meet. The world's seventh largest
          tourist nation by area and the second largest in terms of population.
        </p>
      </div>

      <div className="flex gap-8">
        {/* First tour: full column */}
        <div className="flex flex-col w-2/3">
          <motion.figure
            className="relative rounded-lg overflow-hidden mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
          >
            <img src={img1} alt="Leh" className="w-full h-90 object-cover" />
            <figcaption className="absolute bottom-0 left-0 w-full text-white text-center py-2 bg-black/40">
              Leh
            </figcaption>
          </motion.figure>
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Week At Thiksey Monastery
            </h2>
            <p className="text-gray-700 mb-4">
              This 12-storey complex hosts over 500 monks and is considered to
              be one of the most beautiful Buddhist monasteries in all of
              Ladakh. For Ladakh sightseeing, Thiksey Gompa will enlighten you
              with knowledge about some of the Buddhist culture, lifestyle,
              scriptures, statues and even paintings.
            </p>
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-white hover:text-black border-2 border-black transition">
              More Details
            </button>
          </div>
        </div>

        {/* Second and third tours stacked */}
        <div className="flex flex-col gap-8 w-2/3">
          {/* Second tour */}
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
                alt="Solang Valley"
                className="w-full h-60 object-cover"
              />
              <figcaption className="absolute bottom-0 left-0 w-full text-white text-center py-2 bg-black/40">
                Manali
              </figcaption>
            </motion.figure>
            <div className="w-2/3">
              <h2 className="text-xl font-semibold mb-2">
                Week At Solang Valley, Manali
              </h2>
              <p className="text-gray-700 mb-4">
                A mini valley located at about 8400 feet above sea level, Solang
                Nala is a short drive away from Manali. If you are looking for
                snow-based activities and sports, winters are the best time to
                visit.
              </p>
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-white hover:text-black border-2 border-black transition">
                Contact
              </button>
            </div>
          </div>

          {/* Third tour */}
          <div className="flex gap-6">
            <motion.figure
              className="relative w-1/3 rounded-lg overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
            >
              <img src={img3} alt="Goa" className="w-full h-60 object-cover" />
              <figcaption className="absolute bottom-0 left-0 w-full text-white text-center py-2 bg-black/40">
                Goa
              </figcaption>
            </motion.figure>
            <div className="w-2/3">
              <h2 className="text-xl font-semibold mb-2">
                Week At Beach in Goa
              </h2>
              <p className="text-gray-700 mb-4">
                Goa is the smallest state in India, Goa is synonymous to many
                captivating things that are best showcase of a life without
                stress and worries. The multitude of beaches in Goa.
              </p>
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-white hover:text-black border-2 border-black transition">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
