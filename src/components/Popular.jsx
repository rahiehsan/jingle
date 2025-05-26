import PopularInIndia from "./PopularInIndia";
import PopularInternational from "./PopularInternational";

const Popular = () => {
  return (
    <div>
      <PopularInIndia />
      <PopularInternational />
      <div className="flex items-center justify-center m-2">
        <button className="bg-black border-2 border-black hover:bg-white hover:text-black px-6 py-3 rounded-full border-radius-4 text-white font-semibold">
          All Destination
        </button>
      </div>
    </div>
  );
};
export default Popular;
