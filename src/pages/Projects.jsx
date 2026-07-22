import React from 'react';
import { Helmet } from 'react-helmet-async';

const Projects = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <Helmet>
        <title>Our Projects | VEERAAM TECH</title>
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold font-heading mb-6">Our Projects</h1>
        <p className="text-gray-600 max-w-3xl">Explore our extensive portfolio of premium installations across India.</p>
      </div>
    </div>
  );
};

export default Projects;
