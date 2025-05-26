import { useEffect } from "react";

const GalleryCard = ({ region, data = [] }) => {
  const filteredData = data.filter((item) => item.region === region);

  // useEffect(() => {}, [data, region]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {filteredData.map(({ id, img, caption }) => (
        <figure
          key={id}
          className="relative rounded-lg overflow-hidden shadow-lg"
        >
          <img src={img} alt={caption} className="w-full h-64 object-cover" />

          <figcaption className="absolute bottom-0 left-0 w-full text-white text-center py-2 bg-black/40">
            {caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default GalleryCard;
