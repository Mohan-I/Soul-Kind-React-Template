import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NewsletterBanner /> */}
        <Header />
        <CursorChaser />
        <Routes>
          <Route path="/" element={<SoulKind />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/careers" element={<Careers />} />

          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        </Routes>
        <Footer />
        <BackToTop />
      </BrowserRouter>
    </div>
  );
}

export default App;
