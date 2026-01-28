import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useState, Suspense, lazy } from 'react';
import Header from './components/common/header/header.js';
import SoulKind from './pages/landing.js';
import About from './pages/about/about.js';
import Courses from './pages/courses.js';
import CursorChaser from './components/common/cursorChaser.js';
import Careers from './pages/Careers/careers.js';
import BackToTop from './components/common/backTotop/backToTop.js';
import TermsConditions from './pages/T&C_privacy_p/Termsconditions.js';
import PrivacyPolicy from './pages/T&C_privacy_p/PrivacyPolicy.js';
import Footer from './components/common/footer/footer.js';
import Loader from './components/common/loader/loader.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Optional: Lazy load heavy components for better performance
// const About = lazy(() => import('./pages/about/about.js'));
// const Courses = lazy(() => import('./pages/courses.js'));
// const Careers = lazy(() => import('./pages/Careers/careers.js'));
// const TermsConditions = lazy(() => import('./pages/T&C_privacy_p/Termsconditions.js'));
// const PrivacyPolicy = lazy(() => import('./pages/T&C_privacy_p/PrivacyPolicy.js'));

// Component to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    
    // Reset AOS animations for new page
    AOS.refresh();
    
    // Show loader for navigation
    setIsNavigating(true);
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 500); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      delay: 100,
      disable: window.innerWidth < 768, // Disable on mobile for performance
    });

    // Handle initial page load
    const handleInitialLoad = () => {
      // Check if page is already loaded
      if (document.readyState === 'complete') {
        setIsLoading(false);
        setIsInitialLoad(false);
      } else {
        window.addEventListener('load', () => {
          setTimeout(() => {
            setIsLoading(false);
            setIsInitialLoad(false);
          }, 800); // Minimum show time for loader
        });
      }
    };

    handleInitialLoad();

    // Set a maximum loading time (fallback)
    const maxLoadTimer = setTimeout(() => {
      setIsLoading(false);
      setIsInitialLoad(false);
    }, 3000);

    return () => {
      clearTimeout(maxLoadTimer);
      window.removeEventListener('load', handleInitialLoad);
      AOS.refreshHard(); // Cleanup AOS
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {/* Show loader only on initial page load */}
        {isLoading && <Loader />}
        
        {/* Navigation loader overlay (subtle) */}
        <div 
          className={`navigation-loader ${isLoading ? 'active' : ''}`}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '3px',
            background: 'linear-gradient(90deg, var(--accent), var(--primary))',
            transform: 'translateX(-100%)',
            transition: 'transform 0.3s ease',
            zIndex: 9999,
            display: isLoading ? 'block' : 'none'
          }}
        />
        
        <ScrollToTop />
        <Header />
        <CursorChaser />
        
        {/* Suspense boundary for lazy loaded components */}
        <Suspense fallback={<Loader mini={true} />}>
          <Routes>
            <Route path="/" element={<SoulKind />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </Suspense>
        
        <Footer />
        <BackToTop />
      </BrowserRouter>
    </div>
  );
}

export default App;