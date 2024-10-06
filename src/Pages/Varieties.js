import React, { useState, useContext, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import Data from "../Pages/Data";
import { CartContext } from "./Cartcontext";

const Varieties = () => {
  const productCategories = [
    { id: 1, name: "Cakes", image: "/cat1.jpg" }, // replace with actual image paths
    { id: 2, name: "Ice Cream", image: "/cat2.jpg" },
    { id: 3, name: "Dry Fruits", image: "/cat3.jpg" },
    { id: 4, name: "Biscuits", image: "/cat4.jpg" },
    { id: 5, name: "Fast Food", image: "/cat5.jpg" },
    { id: 6, name: "Juices", image: "/cat6.jpg" },
  ];
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = Data.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

  return (
    <>
      <Navbar />
      <div>
        <div className="py-10 bg-[#F4C430]">
        </div>
        <section className="bg-white pb-8 px-4 sm:px-6 lg:px-8">
          <h1 className="dancing-script text-5xl lg:text-7xl font-bold text-center py-16">❀ Sweets ❀</h1>
          <div className="max-w-7xl mx-auto text-center mb-8">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products..."
              className="w-[80%] lg:w-[50%] p-2 border border-gray-300 rounded-lg placeholder:text-gray-600"
            />
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="relative bg-white p-2  hover:shadow-lg mb-10">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className='bg-red-200 h-52 w-full mb-4 cursor-pointer rounded-lg hover:scale-105 transition duration-500'
                      onClick={() => handleProductClick(product.id)}
                    />

                    {!product.stock && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">Out of Stock</span>
                      </div>
                    )}
                  </div>
                  <h1 className="rubik-bubbles-regular text-left text-2xl mb-1 font-semibold">{product.name}</h1>
                  <h2 className="text-left text-amber-500 mb-2">{product.price}</h2>
                  <div className="text-left px-1 w-[50px] rounded-full text-white bg-amber-500 mb-8">
                    <h1>{product.rating} ★</h1>
                  </div>
                  <button
                    onClick={() => {
                      if (!product.stock) {
                        alert("This product is out of stock.");
                      } else {
                        addToCart(product);
                      }
                    }}
                    className={`w-full h-12 rounded-full text-white ${product.stock
                      ? 'bg-[#F4C430] hover:underline'
                      : 'bg-gray-500 cursor-not-allowed'
                      }`}
                    disabled={!product.stock}
                  >
                    {product.stock ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No products found</p>
            )}
          </div>
          <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
            <h2 className="permanent-marker-regular tracking-wider text-2xl sm:text-3xl lg:text-4xl font-bold mb-16">
              Discover Our Other Sweet Selections!
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
        </section>
      </div>
      <button
        onClick={handleScrollToTop}
        className={`${scrollNav ? "block" : "hidden"
          } fixed bottom-4 right-4 bg-[#F4C430] text-white rounded-full p-3 shadow-lg hover:bg-[#DAA520]`}
        style={{ zIndex: 1000 }} // Ensure the button is on top
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path d="M13.0001 7.82843V20H11.0001V7.82843L5.63614 13.1924L4.22192 11.7782L12.0001 4L19.7783 11.7782L18.3641 13.1924L13.0001 7.82843Z"></path></svg>
      </button>
      <Footer />
    </>
  );
};

export default Varieties;
