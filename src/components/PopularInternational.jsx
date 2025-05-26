import img1 from "../assets/popularInternational/singapore.webp";
import img3 from "../assets/popularInternational/sydney.webp";
import img2 from "../assets/popularInternational/dubai.webp";

const PopularInternational = () => {
  return (
    <div className="p-6">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold mb-2">
          POPULAR DESTINATION INTERNATIONAL
        </h1>
        <p className="text-gray-600 w-4/5 md:w-2/3 mx-auto text-center">
          Mother Earth along with mankind have co-created some of the most
          spectacular places on this planet. From sprawling cities to
          spectacular national parks, it is hard to keep your bucket list
          stagnant. Keeping in mind iconic attractions, culture, food and ease
          of travel, these are the best places in the world to visit!
        </p>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[500px]">
        {/* 1st image: top-left */}
        <figure className="relative w-full h-full rounded-lg overflow-hidden">
          <img
            src={img1}
            alt="Singapore"
            className="w-full h-full object-cover"
          />
          <figcaption className="absolute bottom-0 left-0 w-full text-white text-center py-2">
            Singapore
          </figcaption>
        </figure>

        {/* 2nd image: bottom-left */}
        <div className="row-span-2 col-span-2">
          <figure className="relative w-full h-full rounded-lg overflow-hidden">
            <img
              src={img2}
              alt="Dubai"
              className="w-full h-full object-cover"
            />
            <figcaption className="absolute bottom-0 left-0 w-full text-white text-center py-2">
              Dubai
            </figcaption>
          </figure>
        </div>

        {/* 3rd image: right side, big */}

        <figure className="relative w-full h-full rounded-lg overflow-hidden">
          <img src={img3} alt="Sydney" className="w-full h-full object-cover" />
          <figcaption className="absolute bottom-0 left-0 w-full text-white text-center py-2">
            Sydeney
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default PopularInternational;
