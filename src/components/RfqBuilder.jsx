import React, { useState, useEffect } from 'react';
import { productsData } from '../data/productsData';
import { companyProfile } from '../data/companyData';

export default function RfqBuilder({ selectedProduct, onClose }) {
  const [model, setModel] = useState(selectedProduct ? selectedProduct.title : productsData[0].title);
  const [quantity, setQuantity] = useState(1);
  const [axleType, setAxleType] = useState("Tridem (3-Axle 16T)");
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (selectedProduct) {
      setModel(selectedProduct.title);
    }
  }, [selectedProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `*NEW RFQ - SAMEER TRAILER WEBSITE*%0A%0A` +
      `*Name:* ${name || 'Transport Partner'}%0A` +
      `*Company:* ${company || 'N/A'}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Delivery Location:* ${location}%0A%0A` +
      `*Vehicle Model:* ${model}%0A` +
      `*Quantity:* ${quantity} Units%0A` +
      `*Axle Requirement:* ${axleType}%0A%0A` +
      `Please provide best direct factory quotation and delivery timeline.`;
    
    const waUrl = `https://wa.me/${companyProfile.whatsappNumber}?text=${msg}`;
    window.open(waUrl, '_blank');
    if (onClose) onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '650px' }}>
        <div className="modal-header">
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800 }}>
              ⚡ Direct Factory Quotation Builder
            </h3>
            <span style={{ color: 'var(--primary-orange)', fontSize: '0.85rem' }}>
              Instant WhatsApp quote dispatch to Sameer Trailer Sales Desk
            </span>
          </div>
          {onClose && <button onClick={onClose} className="modal-close-btn">✕</button>}
        </div>

        <div className="modal-body">
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div className="form-group">
              <label className="form-label">Select Trailer / Tipper Model</label>
              <select value={model} onChange={(e) => setModel(e.target.value)} className="form-select">
                {productsData.map(p => (
                  <option key={p.id} value={p.title}>{p.title}</option>
                ))}
              </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Quantity Required</label>
                <input 
                  type="number" 
                  min="1" 
                  max="100" 
                  value={quantity} 
                  onChange={(e) => setQuantity(e.target.value)} 
                  className="form-input" 
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Axle Setup</label>
                <select value={axleType} onChange={(e) => setAxleType(e.target.value)} className="form-select">
                  <option value="Tridem (3-Axle 16T)">Tridem (3-Axle 16T)</option>
                  <option value="Tandem (2-Axle 14T)">Tandem (2-Axle 14T)</option>
                  <option value="Multi-Axle Heavy Heavy Duty">Multi-Axle Heavy Heavy Duty</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Rajesh Sharma" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  className="form-input" 
                  required 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Mobile / WhatsApp Number</label>
                <input 
                  type="tel" 
                  placeholder="e.g. 98290XXXXX" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                  className="form-input" 
                  required 
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Company / Fleet Name (Optional)</label>
                <input 
                  type="text" 
                  placeholder="e.g. Sharma Transport Co." 
                  value={company} 
                  onChange={(e) => setCompany(e.target.value)} 
                  className="form-input" 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Delivery Location / City</label>
                <input 
                  type="text" 
                  placeholder="e.g. Bhilwara / Jaipur / Mumbai" 
                  value={location} 
                  onChange={(e) => setLocation(e.target.value)} 
                  className="form-input" 
                  required 
                />
              </div>
            </div>

            <button type="submit" className="btn btn-whatsapp" style={{ width: '100%', marginTop: '0.5rem', padding: '1rem' }}>
              💬 Dispatch Quote Request via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
