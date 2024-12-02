import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductLandingPage = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5000/api/products', {
            headers: { 'ngrok-skip-browser-warning': 'true' },
        })
            .then(response => {
                setProducts(response.data);
                setFilteredProducts(response.data);
            })
            .catch(error => console.error(error))
            .finally(() => setIsLoading(false));
    }, []);

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        setFilteredProducts(
            products.filter(product =>
                product.name.toLowerCase().includes(query)
            )
        );
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Hero Section */}
            <section className="bg-blue-600 text-white text-center py-20 px-4">
                <h1 className="text-5xl font-extrabold mb-6">Discover Amazing Products</h1>
                <p className="text-xl mb-8">High-quality items at unbeatable prices. Shop with confidence today.</p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow hover:bg-gray-100">
                    Explore Now
                </button>
            </section>

            {/* About Section */}
            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">About Our Products</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        At Product Showcase, we pride ourselves on delivering exceptional products with a touch of elegance and practicality. From stylish bags to tech accessories, we’ve got something for everyone.
                    </p>
                    <img
                        src="https://via.placeholder.com/600x300"
                        alt="About"
                        className="mx-auto rounded-lg shadow-lg"
                    />
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-6 bg-gray-100">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 bg-white shadow rounded-md">
                            <h3 className="text-xl font-bold mb-2">Top Quality</h3>
                            <p className="text-gray-600">Our products are crafted with the finest materials for unmatched durability and style.</p>
                        </div>
                        <div className="p-6 bg-white shadow rounded-md">
                            <h3 className="text-xl font-bold mb-2">Affordable Prices</h3>
                            <p className="text-gray-600">Enjoy competitive pricing without compromising on quality.</p>
                        </div>
                        <div className="p-6 bg-white shadow rounded-md">
                            <h3 className="text-xl font-bold mb-2">Customer Satisfaction</h3>
                            <p className="text-gray-600">We prioritize your happiness, ensuring seamless shopping experiences every time.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>
                    <div className="mb-6 text-center">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={handleSearch}
                            className="px-4 py-2 border rounded-md w-full max-w-md"
                        />
                    </div>
                    {isLoading ? (
                        <div className="text-center text-gray-600">Loading...</div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {filteredProducts.map(product => (
                                <div key={product.id} className="bg-white p-4 rounded-md shadow hover:shadow-lg">
                                    <img
                                        src={product.image_url}
                                        alt={product.name}
                                        className="w-full h-48 object-cover rounded-md mb-4"
                                    />
                                    <h3 className="text-lg font-bold">{product.name}</h3>
                                    <p className="text-gray-600">{product.description}</p>
                                    <p className="text-blue-600 font-semibold">Rp {parseInt(product.price).toLocaleString()}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-6 bg-gray-100">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white shadow rounded-md">
                            <p className="text-gray-600 mb-4">
                                "The quality is fantastic! I've been using their products for months, and they still look brand new."
                            </p>
                            <h4 className="font-bold">- Sarah W.</h4>
                        </div>
                        <div className="p-6 bg-white shadow rounded-md">
                            <p className="text-gray-600 mb-4">
                                "Affordable and reliable! Their products never fail to impress."
                            </p>
                            <h4 className="font-bold">- Michael B.</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white text-center py-6">
                <p>&copy; 2024 Product Showcase. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default ProductLandingPage;
