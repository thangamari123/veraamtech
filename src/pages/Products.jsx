import React from 'react';
import { Helmet } from 'react-helmet-async';
import { products } from '../data/products';

const Products = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-light">
      <Helmet>
        <title>Our Products | VEERAAM TECH</title>
      </Helmet>
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl font-black font-heading text-gray-900 mb-4">Products</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl">
          Explore our wide range of premium LED and LCD display products engineered for performance and reliability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden bg-gray-100 relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {product.category}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold font-heading mb-3">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-2">{product.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <span className="block text-xs text-gray-500 mb-1">Pixel Pitch</span>
                    <span className="font-bold text-gray-900">{product.pixelPitch}</span>
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 mb-1">Brightness</span>
                    <span className="font-bold text-gray-900">{product.brightness}</span>
                  </div>
                </div>

                <button className="mt-auto w-full bg-blue-50 text-primary font-bold py-2.5 rounded-xl hover:bg-primary hover:text-white transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
