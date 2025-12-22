    import React, { useState } from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import Header from './components/Layout/Header';
    import Footer from './components/Layout/Footer';
    import QuickContactModal from './components/Modals/QuickContactModal';
    import HomePage from './pages/HomePage';
    import AboutPage from './pages/AboutPage';
    import ServicesPage from './pages/ServicesPage';
    import GalleryPage from './pages/GalleryPage';
    import ContactPage from './pages/ContactPage';
    import ProjectDetailPage from './pages/ProjectDetailPage';
    
    function App() {
      const [isQuickContactOpen, setIsQuickContactOpen] = useState(false);
    
      return (
        <Router>
          <div className="min-h-screen flex flex-col">
            <Header onQuickContact={() => setIsQuickContactOpen(true)} />
            
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage onQuickContact={() => setIsQuickContactOpen(true)} />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/project/:id" element={<ProjectDetailPage />} />
              </Routes>
            </main>
    
            <Footer />
            
            <QuickContactModal 
              isOpen={isQuickContactOpen} 
              onClose={() => setIsQuickContactOpen(false)} 
            />
          </div>
        </Router>
      );
    }
    
    export default App;