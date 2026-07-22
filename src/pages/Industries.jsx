import React from 'react';
import { Helmet } from 'react-helmet-async';
import { industries } from '../data/industries';
import { Link } from 'react-router-dom';

const Industries = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-light">
      <Helmet>
        <title>Industries We Serve | VEERAAM TECH</title>
      </Helmet>
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl font-black font-heading text-gray-900 mb-4">Industries</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl">
          We provide tailored visual solutions across various sectors, addressing unique challenges with state-of-the-art technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div key={industry.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={industry.image} 
                    alt={industry.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur text-primary rounded-xl flex items-center justify-center shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold font-heading mb-3">{industry.name}</h3>
                  <p className="text-gray-600 text-sm mb-6 flex-grow">{industry.description}</p>
                  <Link to={`/industries/${industry.slug}`} className="text-primary font-bold text-sm hover:text-accent transition-colors">
                    View Industry Solutions &rarr;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Industries;
