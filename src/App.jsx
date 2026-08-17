import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import ProductCatalog from './components/ProductCatalog';
import ProductModal from './components/ProductModal';
import ManufacturingTour from './components/ManufacturingTour';
import WhySameer from './components/WhySameer';
import PayloadCalculator from './components/PayloadCalculator';
import ContactUnits from './components/ContactUnits';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import RfqBuilder from './components/RfqBuilder';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [rfqProduct, setRfqProduct] = useState(null);

  const handleOpenRfq = (product = null) => {
    setRfqProduct(product);
    setIsRfqOpen(true);
  };

  const handleCloseRfq = () => {
    setIsRfqOpen(false);
    setRfqProduct(null);
  };

  return (
    <div className="app-container">
      <Navbar onOpenRfq={() => handleOpenRfq()} />
      
      <main>
        <Hero onOpenRfq={() => handleOpenRfq()} />
        <StatsBar />
        
        <ProductCatalog 
          onSelectProduct={(product) => setSelectedProduct(product)}
          onOpenRfqForProduct={(product) => handleOpenRfq(product)}
        />
        
        <WhySameer />
        <PayloadCalculator />
        <ManufacturingTour />
        <ContactUnits onOpenRfq={() => handleOpenRfq()} />
      </main>

      <Footer onOpenRfq={() => handleOpenRfq()} />
      <FloatingActions onOpenRfq={() => handleOpenRfq()} />

      {/* Specification Viewer Modal */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)}
          onOpenRfq={(prod) => handleOpenRfq(prod)}
        />
      )}

      {/* Direct WhatsApp Quote Builder Modal */}
      {isRfqOpen && (
        <RfqBuilder 
          selectedProduct={rfqProduct} 
          onClose={handleCloseRfq} 
        />
      )}
    </div>
  );
}
