import React from 'react';
import { Helmet } from 'react-helmet-async';

const Gallery = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <Helmet>
        <title>Gallery | VEERAAM TECH</title>
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold font-heading mb-6">Gallery</h1>
        <p className="text-gray-600 max-w-3xl">Explore images and videos of our LED display installations.</p>
      </div>
    </div>
  );
};

export default Gallery;
