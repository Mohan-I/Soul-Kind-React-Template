import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/common/header';
import SoulKind from './pages/landing.js';
import About from './pages/about.js';
import Courses from './pages/courses.js';
import CursorChaser from './components/common/cursorChaser.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <CursorChaser />
      <Routes>
        <Route path="/" element={<SoulKind/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/courses" element={<Courses/>}/>
      </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
