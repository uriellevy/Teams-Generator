import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teams from './components/pages/teams/Teams';
import Home from './components/pages/home/Home';
import NavigationBar from './components/common/navigationBar/NavigationBar';
import { TeamsGeneratorProvider } from './context/teamsGeneratorContext';
import { AnimatePresence } from "framer-motion";
import Footer from './components/common/footer/Footer';


function App() {
  return (
    <div className="app">
      <TeamsGeneratorProvider>
        <BrowserRouter>
          <NavigationBar />
          <AnimatePresence >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/teams" element={<Teams />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </BrowserRouter>
      </TeamsGeneratorProvider>

    </div>
  );
}

export default App;
