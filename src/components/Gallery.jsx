import { useState } from "react";
import { motion } from "framer-motion";
import GalleryCard from "./GalleryCard.jsx";
import galleryData from "../data/galleryData.jsx";

const regions = ["NORTH INDIA", "EAST INDIA", "WEST INDIA", "SOUTH INDIA"];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Gallery = () => {
  const [region, setRegion] = useState("NORTH INDIA");

  return (
    <div className="px-6 py-10">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">Gallery</h1>
        <p className="text-gray-600">
          A Jingle Holiday Bazar All Over India Destination Gallery
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <ul className="flex gap-4 flex-wrap text-lg font-medium">
          {regions.map((item) => (
            <li
              key={item}
              onClick={() => setRegion(item)}
              className={`cursor-pointer px-4 py-1 rounded-full transition 
                ${
                  region === item
                    ? "bg-black text-white"
                    : "hover:underline text-gray-700"
                }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <GalleryCard region={region} data={galleryData} />
      </motion.div>
    </div>
  );
};

export default Gallery;
