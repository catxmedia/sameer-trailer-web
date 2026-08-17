import React from 'react';
import { companyProfile } from '../data/companyData';

export default function FloatingActions({ onOpenRfq }) {
  const waUrl = `https://wa.me/${companyProfile.whatsappNumber}?text=Hello%20Sameer%20Trailer!%20I%20visited%20www.sameertrailer.com%20and%20want%20a%20price%20quotation.`;

  return (
    <div className="floating-actions">
      <a 
        href={`tel:${companyProfile.primaryPhone}`} 
        className="floating-btn" 
        style={{ background: 'var(--primary-orange)' }}
        title="Call Hotline"
      >
        📞
      </a>
      <a 
        href={waUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-btn" 
        style={{ background: '#25D366' }}
        title="Chat on WhatsApp"
      >
        💬
      </a>
    </div>
  );
}
