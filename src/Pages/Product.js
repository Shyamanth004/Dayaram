import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Data from '../Pages/Data';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { CartContext } from './Cartcontext';

const Product = () => {
    const productCategories = [
        { id: 1, name: "Cakes", image: "/cat1.jpg" }, // replace with actual image paths
        { id: 2, name: "Ice Cream", image: "/cat2.jpg" },
        { id: 3, name: "Dry Fruits", image: "/cat3.jpg" },
        { id: 4, name: "Biscuits", image: "/cat4.jpg" },
        { id: 5, name: "Fast Food", image: "/cat5.jpg" },
        { id: 6, name: "Juices", image: "/cat6.jpg" },
    ];
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
    const { id } = useParams();
    const product = Data.find((prod) => prod.id === parseInt(id));
    const { addToCart } = useContext(CartContext);

    const [selectedWeight, setSelectedWeight] = useState(1);

    if (!product) {
        return <div>Product not found</div>;
    }
    const calculatePrice = () => {
        const basePrice = parseInt(product.price.replace('₹', '').replace(' per kg', ''));
        return basePrice * selectedWeight;
    };

    const handleAddToCart = () => {
        if (!product.stock) {
            alert("This product is out of stock.");
        } else {
            addToCart({ ...product, selectedWeight, price: calculatePrice() });
            alert(`${product.name} of ${selectedWeight === 1 ? '1kg' : (selectedWeight * 1000) + 'g'} is added to cart`);
        }
    };

    return (
        <div>
            <Navbar />
            <div className='bg-[#F4C430] py-10'></div>
            <section className="py-10 min-h-screen max-h-auto bg-white">
                <div className="max-w-4xl mx-auto px-4 py-4 sm:px-6 lg:px-8 ">
                    <div className="relative">
                        <img
                            src={product.image}
                            alt={product.name}
                            className={`w-full h-96 mb-4 block object-contain rounded-lg shadow-lg ${!product.stock ? 'grayscale' : ''
                                }`}
                        />
                        {!product.stock && (
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                <span className="text-white text-4xl font-bold">Out of Stock</span>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col justify-center">
                        <h2 className="rubik-bubbles-regular text-3xl font-bold mb-4">{product.name}</h2>
                        <p className="playpen-sans-text text-lg mb-6">{product.description}</p>
                        <div className="mb-6">
                            <label className="text-lg font-semibold mb-4 block">Select Weight:</label>
                            <div className="flex space-x-4">
                                <div
                                    onClick={() => setSelectedWeight(0.25)}
                                    className={`p-4 border rounded-lg cursor-pointer ${selectedWeight === 0.25 ? 'border-amber-500' : 'border-gray-300'
                                        } ${!product.stock ? 'cursor-not-allowed' : ''}`}
                                >
                                    250g
                                </div>
                                <div
                                    onClick={() => setSelectedWeight(0.5)}
                                    className={`p-4 border rounded-lg cursor-pointer ${selectedWeight === 0.5 ? 'border-amber-500' : 'border-gray-300'
                                        } ${!product.stock ? 'cursor-not-allowed' : ''}`}
                                >
                                    500g
                                </div>
                                <div
                                    onClick={() => setSelectedWeight(1)}
                                    className={`p-4 border rounded-lg cursor-pointer ${selectedWeight === 1 ? 'border-amber-500' : 'border-gray-300'
                                        } ${!product.stock ? 'cursor-not-allowed' : ''}`}
                                >
                                    1kg
                                </div>
                            </div>
                        </div>
                        <p className="text-xl font-semibold text-amber-500 mb-4">
                            Price: ₹{calculatePrice()}
                        </p>
                        <button
                            onClick={handleAddToCart}
                            className={`${product.stock
                                ? 'bg-[#F4C430] hover:underline text-white'
                                : 'bg-gray-500 text-white cursor-not-allowed'
                                } px-4 py-2 rounded-lg`}
                            disabled={!product.stock}
                        >
                            {product.stock ? 'Add to Cart' : 'Out of Stock'}
                        </button>
                    </div>
                </div>
            </section>
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
            <section className="pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
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
            <button
                onClick={handleScrollToTop}
                className={`${scrollNav ? "block" : "hidden"
                    } fixed bottom-4 right-4 bg-[#F4C430] text-white rounded-full p-3 shadow-lg hover:bg-[#DAA520]`}
                style={{ zIndex: 1000 }} // Ensure the button is on top
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path d="M13.0001 7.82843V20H11.0001V7.82843L5.63614 13.1924L4.22192 11.7782L12.0001 4L19.7783 11.7782L18.3641 13.1924L13.0001 7.82843Z"></path></svg>
            </button>
            <Footer />
        </div>
    );
};

export default Product;
