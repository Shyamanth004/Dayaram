import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import Data from './Data';  // Import the Data

const Home = () => {
  // Services (unchanged)
  const services = [
    { id: 1, name: "Odhis' Chenna Pudo", image: "/p1.jpg" },
    { id: 2, name: "Bengali Rasgulla", image: "/p2.jpg" },
    { id: 3, name: "Punjabi Kaju Katli", image: "/p3.jpg" },
    { id: 4, name: "Kakinada Kaja", image: "/p4.jpg" },
    { id: 5, name: "Mathuras' Peda", image: "/p5.jpg" },
    { id: 6, name: "Rajasthani Laddu", image: "/p6.jpg" }
  ];

  const productCategories = [
    { id: 1, name: "Cakes", image: "/cat1.jpg" }, // replace with actual image paths
    { id: 2, name: "Ice Cream", image: "/cat2.jpg" },
    { id: 3, name: "Dry Fruits", image: "/cat3.jpg" },
    { id: 4, name: "Biscuits", image: "/cat4.jpg" },
    { id: 5, name: "Fast Food", image: "/cat5.jpg" },
    { id: 6, name: "Juices", image: "/cat6.jpg" },
  ];

  const bestSellingProducts = Data.filter((product) => product.rating >= 4.5);  // Filter best-selling products

  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Track screen width

  const navigate = useNavigate();

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bestSellingProducts.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + bestSellingProducts.length) % bestSellingProducts.length);
  };

  // Swiping handlers
  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
  });

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const [scrollNav, setScrollNav] = useState(false);

  const changeNavBackground = () => {
    if (window.scrollY >= 1) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBackground);
    return () => {
      window.removeEventListener("scroll", changeNavBackground);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <Header /><br />

        {/* Best Selling Products Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative">
          <h2 className="permanent-marker-regular tracking-wider text-2xl sm:text-3xl lg:text-4xl font-bold mb-12">Our Best Sellers</h2>

          <div {...handlers} className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-4 lg:p-8 bg-[#faf2dd]">
              {/* Conditionally show 1 product in mobile, 3 products in large screens */}
              {bestSellingProducts.slice(currentIndex, currentIndex + (windowWidth < 768 ? 1 : 3)).map((best) => (
                <div
                  key={best.id}
                  className="relative group w-[350px] p-1 mx-auto overflow-hidden transform transition duration-500 ease-in-out hover:shadow-xl"
                >
                  <div className='relative'>
                    <img
                      src={best.image}
                      alt={best.name}
                      className="w-full h-56 mb-4 object-cover rounded-lg"
                    />
                    {!best.stock && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">Out of Stock</span>
                      </div>
                    )}
                  </div>
                  <h1 className="rubik-bubbles-regular text-left text-2xl mb-1">{best.name}</h1>
                  <h2 className="text-left text-amber-500 mb-1">{best.price}</h2>
                  {/* Display Star Rating */}
                  <div className="text-left px-1 w-[50px] rounded-full text-white bg-amber-500 mb-4">
                    <h1>{best.rating} ★</h1>
                  </div>
                  <p className='playpen-sans-text text-left mb-16'>{best.description}</p>
                  <button
                    onClick={() => handleProductClick(best.id)}
                    className={`fixed w-full h-12 rounded-full text-white  ${
                      best.stock
                        ? 'bg-[#F4C430]'
                        : 'bg-gray-500 cursor-not-allowed'
                    } hover:underline bottom-1 left-0`} disabled={!best.stock}
                  >
                    {best.stock ? 'Shop Now' : 'Out of Stock'}
                  </button>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 left-0 transform -translate-y-16">
              <button onClick={handlePrev} className="mx-2 px-4 py-2 lg:-translate-x-12 bg-[#F4C430] text-white rounded-full lg:hover:bg-[#DAA520] sm:active:bg-[#DAA520]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path></svg>
              </button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-16">
              <button onClick={handleNext} className="mx-2 px-4 py-2 lg:translate-x-12 bg-[#F4C430] text-white rounded-full hover:bg-[#DAA520]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
              </button>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 text-center">
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


        {/* Main Services Section */}
        <section
          className="relative py-12 px-4 sm:px-6 lg:px-8 mb-16"
          style={{
            backgroundImage: `url('/pr.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>

          <div className="relative max-w-7xl mx-auto text-center z-10">
            <h2 className="permanent-marker-regular tracking-wider text-2xl sm:text-3xl lg:text-4xl font-bold mb-20 text-white">
              Discover India’s Sweet Delights!
            </h2>

            {/* Grid for large screens */}
            <div className="hidden lg:grid grid-cols-3 gap-12">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="relative group w-64 h-64 mx-auto mb-12 rounded-full overflow-hidden shadow-lg transform transition duration-500 ease-in-out hover:scale-110"
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                    <div className="text-center text-white p-4">
                      <h1 className="text-xl font-bold mb-8">{service.name}</h1>
                      <Link
                        to="/varieties"
                        className="mt-4 px-6 py-2 bg-[#F4C430] text-white rounded-lg hover:bg-[#DAA520]"
                      >
                        Explore More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Flexbox for small screens with horizontal scrolling */}
            <div className="lg:hidden flex gap-4 overflow-x-scroll no-scrollbar scroll-smooth snap-x">
              <div className="grid grid-cols-3 gap-4 min-w-[900px] snap-center">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="flex-shrink-0 relative group w-56 h-56 mx-auto mb-12 rounded-full overflow-hidden shadow-lg transform transition duration-500 ease-in-out hover:scale-110"
                  >
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                      <div className="text-center text-white p-4">
                        <h1 className="text-xl font-bold mb-8">{service.name}</h1>
                        <Link
                          to="./varieties"
                          className="mt-4 px-6 py-2 bg-[#F4C430] text-white rounded-lg hover:bg-[#DAA520]"
                        >
                          Explore More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-10 px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-7xl p-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#faf2dd]">
            {/* Text Content */}
            <div className="text-center md:text-left">
              <h2 className="permanent-marker-regular text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
                Sugar-Free Sweets for All!
              </h2>
              <p className="playpen-sans-text text-gray-700 text-lg lg:text-xl mb-8">
                Now your sugar level can't stop you from indulging in our delicious sweets. Enjoy a range of sugar-free delicacies!
              </p>
              <Link
                to="/sugarfree"
                className="inline-block bg-[#F4C430] text-white py-3 px-8 text-lg rounded-full hover:bg-[#DAA520] transition duration-300">
                Explore Sugar-Free Sweets
              </Link>
            </div>
            {/* Image Content */}
            <div className="flex justify-center md:justify-end">
              <img
                src="/sugar.jpg"
                alt="Sugar-Free Sweets"
                className="w-full h-auto max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
        <section className="pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <h2 className="permanent-marker-regular tracking-wider text-2xl sm:text-3xl lg:text-4xl font-bold mb-16">
            Discover Our Sweet Selections!
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-10 gap-4 bg-[#faf2dd]">
            {productCategories.map((category) => (
              <div
                key={category.id}
                className="relative group w-full p-2 mx-auto mb- overflow-hidden rounded-lg bg-white shadow-lg transform transition duration-500 ease-in-out hover:scale-105"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-60 mb-4 object-cover rounded-lg"
                />
                <button
                  className="fixed w-1/2 h-12 rounded-full text-amber-500 bg-white border border-amber-500 hover:underline bottom-1 left-1/4"
                >
                  Shop Now
                </button>
              </div>
            ))}
          </div>
        </section>
        <Footer />
        <button
          onClick={handleScrollToTop}
          className={`${scrollNav ? "block" : "hidden"
            } fixed bottom-4 right-4 bg-[#F4C430] text-white rounded-full p-3 shadow-lg hover:bg-[#DAA520]`}
          style={{ zIndex: 1000 }} // Ensure the button is on top
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path d="M13.0001 7.82843V20H11.0001V7.82843L5.63614 13.1924L4.22192 11.7782L12.0001 4L19.7783 11.7782L18.3641 13.1924L13.0001 7.82843Z"></path></svg>
        </button>
      </div>
    </div>
  );
};

export default Home;
