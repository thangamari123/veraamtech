import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light text-center px-4">
      <Helmet>
        <title>404 - Page Not Found | VEERAAM TECH</title>
      </Helmet>
      <div>
        <h1 className="text-9xl font-black font-heading text-gray-200 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-blue-800 transition-colors shadow-lg">
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
