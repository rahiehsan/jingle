import { useState, useEffect } from "react";
import img1 from "../assets/badrinath-banner.webp";
import img2 from "../assets/jaipur.webp";
import img3 from "../assets/rameshwarm-banner.webp";

const images = [img1, img2, img3];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-20 relative w-full mx-auto h-[649px] overflow-hidden">
      {/* Image */}
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="w-full h-full object-cover transition-all duration-700"
      />

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

      {/* Overlay Text and Button */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Welcome to Jingle Holiday Bazaar Pvt Ltd.
        </h1>
        <button className="bg-black border-2 border-black hover:bg-white hover:text-black px-8 py-3 rounded-full border-radius-4 text-white font-bold">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Slider;
