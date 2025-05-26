import {
  Navbar,
  Slider,
  Services,
  Popular,
  Featured,
  Gallery,
  PopularHotels,
  Footer,
} from "../components";
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Services />
      <Popular />
      <Featured />
      <Gallery />
      <PopularHotels />
      <Footer />
    </div>
  );
};
export default HomePage;
