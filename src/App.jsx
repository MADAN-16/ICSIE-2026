import React, { Suspense, lazy } from 'react';
import Header from './components/Sections/Header';
import Hero from './components/Sections/Hero';

// Lazy load non-critical components
const About = lazy(() => import('./components/Sections/About'));
const Speakers = lazy(() => import('./components/Sections/Speakers'));
const CallForPapers = lazy(() => import('./components/Sections/CallForPapers'));
const SubmissionGuidelines = lazy(() => import('./components/Sections/SubmissionGuidelines'));
const Registration = lazy(() => import('./components/Sections/Registration'));
const Contact = lazy(() => import('./components/Sections/Contact'));
const Footer = lazy(() => import('./components/Sections/Footer'));

function App() {
  return (
    <div className="min-h-screen bg-luxury-black text-white relative">
      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        
        <Suspense fallback={<div className="py-20 text-center text-slate-500">Loading content...</div>}>
          <About />
          <Speakers />
          <CallForPapers />
          <SubmissionGuidelines />
          <Registration />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}

export default App;