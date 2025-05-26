import { ServiceModal } from "../components";

const Services = () => {
  return (
    <div className="bg-gray-200 px-6 py-12 mx-auto">
      {/* Text Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold mb-5">OUR SERVICES</h1>
        <p className="text-lg max-w-6xl mx-auto">
          At Jingle Holiday Bazar, we are committed to ensuring that you save on
          every trip and every holiday booking you make with us by bringing to
          you the best price deals — be it flights, tours or hotels. Our unique
          budget-friendly solutions make your travel experience smooth,
          affordable, and unforgettable.
        </p>
      </div>

      {/* Service Cards or Modal */}
      <ServiceModal />
    </div>
  );
};

export default Services;
