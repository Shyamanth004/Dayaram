import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// Custom marker icon (to handle default icon issues with react-leaflet)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const About = () => {
  const aboutBlocks = [
    {
      image: "/ab1.jpg",
      title: "Our Mission",
      description:
        "At Sugary Trails, we promise more than confections. We promise memories. Whether you’re celebrating a birthday, a promotion, or simply the joy of being alive, our sweets are there to sweeten the moment. And as you leave, clutching a pink box tied with satin ribbon, you’ll carry a piece of our warmth with you.",
    },
    {
      image: "/ab2.jpg",
      title: "Our Vision",
      description:
        "In the cozy kitchen, the air thick with anticipation, generations gather. Children perch on countertops, eyes wide as they watch flour transform into dough. Grandparents, their hands weathered and wise, measure spices by intuition. And in the center of it all—the heart of the home—sits a platter of sweets.",
    },
    {
      image: "/ab3.jpg",
      title: "Our Values",
      description:
        "Step inside our cozy haven, and you’ll find shelves adorned with colorful jars of jalebis, trays of buttery pedas, and stacks of fragrant coconut laddoos. Whether you’re celebrating a special occasion or simply craving a sweet escape, Siblings’ Sweet Haven promises to make your heart a little lighter and your taste buds dance with joy.",
    },
  ];

  // Coordinates of the three branches
  const branchLocations = [
    { coords: [17.70906576497711, 83.29708599563693], name: "Branch 1" },
    { coords: [17.738279033374354, 83.31247342447398], name: "Branch 2" },
    { coords: [17.73715120923901, 83.32183755331033], name: "Branch 3" },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <div className="py-10 bg-[#F4C430]"> 
        </div>

        <section className="py-16 max-w-7xl mx-auto">
          {aboutBlocks.map((block, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center justify-between mb-12 lg:mb-24 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="w-[95%] lg:w-1/2 h-64 lg:h-80 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-700 ease-in-out hover:scale-105 animate-slide-In">
                <img src={block.image} alt={block.title} className="w-full h-full object-cover" />
              </div>
              <div className="w-full lg:w-1/2 lg:pl-8 mt-8 lg:mt-0 text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-4 animate-fade-in">{block.title}</h3>
                <p className="playpen-sans-text text-lg px-2 lg:px-0 lg:pr-3 text-gray-700 animate-fade-in">
                  {block.description}
                </p>
              </div>
            </div>
          ))}
          {/* Trust Section */}
          <section className="py-16 mb-16 px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-20">You Can Trust Us</h1>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
                        {/* Icon 1 */}
                        <div className="flex flex-col items-center">
                            <img src="/since.png" alt="Since 1975" className="w-20 h-20 mb-4" />
                            <p className="text-lg font-medium">Since 1975</p>
                        </div>

                        {/* Icon 2 */}
                        <div className="flex flex-col items-center">
                            <img src="/makeinindia.jpg" alt="Make in India" className="w-36 h-20 mb-4" />
                            <p className="text-lg font-medium">Make in India</p>
                        </div>

                        {/* Icon 3 */}
                        <div className="flex flex-col items-center">
                            <img src="/eco.jpg" alt="Eco Friendly" className="w-24 h-20 mb-4" />
                            <p className="text-lg font-medium">Eco Friendly</p>
                        </div>

                        {/* Icon 4 */}
                        <div className="flex flex-col items-center">
                            <img src="/iso.jpg" alt="ISO Certified" className="w-20 h-20 mb-4" />
                            <p className="text-lg font-medium">ISO Certified</p>
                        </div>
                    </div>
                </div>
            </section>

          {/* Tribute Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between my-12 lg:my-24 p-8 bg-[#faf2dd]">
            <div className="w-[70%] lg:w-2/5 h-96 lg:h-[600px] overflow-hidden rounded-full shadow-lg transform transition-transform duration-700 ease-in-out">
              <img
                src="/owner-portrait.jpg" // Replace with actual portrait image path
                alt="Owner's Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2 lg:pl-8 mt-8 lg:mt-0 text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4">In Loving Memory</h3>
              <p className="text-lg px-2 lg:px-0 lg:pr-3 text-gray-700">
                "Our beloved founder, whose passion for sweets and dedication to bringing joy to people's lives through his
                creations, will always be remembered. His vision lives on in every sweet delight we serve. Thank you for
                making our world sweeter, every single day."
              </p>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full h-[500px] my-12">
            <h3 className="permanent-marker-regular text-3xl font-bold mb-10 text-center">Visit Our Branches</h3>
            <MapContainer center={[17.738279033374354, 83.31247342447398]} zoom={13} className="w-full h-full">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {branchLocations.map((branch, index) => (
                <Marker key={index} position={branch.coords}>
                  <Popup>{branch.name}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
