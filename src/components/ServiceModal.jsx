// ServiceModal.jsx
import { FaHome, FaPlane, FaBed } from "react-icons/fa";
import { ServiceCard } from "../components";

const ServiceModal = () => {
  const services = [
    {
      icon: (
        <FaHome
          className="text-3xl text-green-600 mb-2"
          title="Homestay Icon"
        />
      ),
      title: "Jingle Holiday Bazar Homestays",
      subtitle: "Book Villas, Apartments and Resorts",
      description: `Jingle Holiday Bazar.com ventured into Homestays in India in 2015, and is providing great homestay experiences to its customers as well as benefits to its hosts. If you are looking for a holiday with a difference, want to closely savour the local flavours of a place, and prefer the comforts of a homely environment,Jingle Holiday Bazar Homestays is the answer.Jingle Holiday Bazar already has over 3500 homestay properties and is expanding fast. It has a stronghold in South India and across most hill stations of North India, with these places providing unique homestay experiences to customers. Some of its most popular homestay destinations are Goa, Manali, Shimla, Coorg, Wayanad, among other places.`,
    },
    {
      icon: (
        <FaBed className="text-3xl text-green-600 mb-2" title="Hotel Icon" />
      ),
      title: "Jingle Holiday Bazar Hotel",
      subtitle: "Why to book Hotels with Jingle Holiday Bazar.com",
      description: `We are back in the post-pandemic world with a bouquet of hotels across Indian cities ranging from leisure to business ones with a new outlook. Jingle Holiday Bazar who has always been on the forefront of assuring a comfortable stay which is a bang for your bucks, is offering you online hotel booking that guarantees you hygienic, sanitised rooms across hotels in India. Explore a raft of interesting features such as Clean Pass stays, travel again offers and long stay discounts encouraging you to travel again, make your hotel booking while keeping your anxieties at bay.`,
    },
    {
      icon: (
        <FaPlane className="text-3xl text-green-600 mb-2" title="Flight Icon" />
      ),
      title: "Jingle Holiday Bazar Flight",
      subtitle: "Why to book Flights Online with Jingle Holiday Bazar.com",
      description: `Purchasing flight tickets and confirming your flight booking is the key aspect of planning a trip. Now whether you are travelling for business or on leisure, you cannot make an itinerary until you have first and foremost booked your flights. Procuring an air ticket is a mandatory first step once your travel plans are confirmed. It feels as though half the job is done the moment you secure confirmed flight ticket booking in your hand. The entire activity of searching air connectivity between two cities, checking the schedule of the flight and zeroing in on one that's most convenient to you can feel like a lot of work especially if you are in a hurry to book your flights.`,
    },
  ];

  return (
    <>
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-8 rounded-lg items-start">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default ServiceModal;
