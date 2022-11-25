import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About'
import Contact from './Components/Contact';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Navbar from './Components/Navbar';
import Download from './Components/Download';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="nav-wrapper">
          <Navbar />
        </div>

        <div className="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Download' element={<Download/>}/>
            <Route path='/About' element={<About />} />
            <Route path='/Skills' element={<Skills />} />
            <Route path='/Resume' element={<Resume />} />
            <Route path='/Portfolio' element={<Portfolio />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>
        </div>

      </BrowserRouter>

    </div>
  );
}

export default App;
