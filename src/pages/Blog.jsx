import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <Helmet>
        <title>Blog | VEERAAM TECH</title>
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold font-heading mb-6">Insights & Blog</h1>
        <p className="text-gray-600 max-w-3xl">Read our latest articles on display technology, industry trends, and more.</p>
      </div>
    </div>
  );
};

export default Blog;
