import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './layouts/Layout';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';
import logo from './assets/veraamtech-logo.webp';

// Lazy loading pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetails = lazy(() => import('./pages/ServiceDetails'));
const Products = lazy(() => import('./pages/Products'));
const Industries = lazy(() => import('./pages/Industries'));
const Projects = lazy(() => import('./pages/Projects'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Logo-only Loading component
const LoadingScreen = () => (
  <div className="flex items-center justify-center min-h-screen bg-[#04091a]">
    <div className="relative w-20 h-20 rounded-2xl bg-[#08152e] border border-cyan-400/30 flex items-center justify-center p-3 shadow-2xl animate-pulse">
      <img src={logo} alt="Loading..." className="w-full h-full object-contain" />
    </div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Preloader />
        <ScrollToTop />
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="services/:slug" element={<ServiceDetails />} />
              <Route path="products" element={<Products />} />
              <Route path="industries" element={<Industries />} />
              <Route path="projects" element={<Projects />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="blog" element={<Blog />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  );
}

export default App;
