import React from 'react';
import { companyProfile } from '../data/companyData';

export default function Footer({ onOpenRfq }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand-logo">
              <div className="logo-badge">ST</div>
              <div className="logo-text-wrap">
                <span className="logo-title">SAMEER TRAILER</span>
                <span className="logo-sub">MOTOR BODY PVT. LTD.</span>
              </div>
            </div>
            <p>
              {companyProfile.hindiSlogan} — India's premier manufacturer of heavy-duty commercial trailers, tip trailers, bulkers, and specialized road tankers since 1991.
            </p>
            <p style={{ marginTop: '0.75rem', color: 'var(--primary-orange)', fontWeight: 600 }}>
              🌐 Official Domain: {companyProfile.domain}
            </p>
          </div>

          <div>
            <h4 className="footer-title">Vehicle Lines</h4>
            <ul className="footer-links">
              <li><a href="#products">Side Wall Trailers</a></li>
              <li><a href="#products">Tip Trailers & Tippers</a></li>
              <li><a href="#products">Pneumatic Bulkers</a></li>
              <li><a href="#products">Fuel & Oil Tankers</a></li>
              <li><a href="#products">ODC Girder Launchers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#advantages">Engineering Advantages</a></li>
              <li><a href="#calculator">Payload Calculator</a></li>
              <li><a href="#plant-tour">Manufacturing Tour</a></li>
              <li><a href="#contact">Plant Addresses</a></li>
              <li><a href="/Sameer_Trailer_Catalogue.pdf" target="_blank" rel="noopener noreferrer">PDF Catalogue</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Head Office Desk</h4>
            <p style={{ fontSize: '0.85rem', marginBottom: '0.5rem' }}>
              📍 Near FCI Godown, Ambedkar Nagar, Bhilwara (Raj.) 311001
            </p>
            <p style={{ fontSize: '0.85rem', marginBottom: '0.5rem' }}>
              ✉️ {companyProfile.officialEmail}
            </p>
            <p style={{ fontSize: '0.85rem', marginBottom: '1rem' }}>
              📞 Sales: {companyProfile.primaryPhone}
            </p>
            <button onClick={onOpenRfq} className="btn btn-primary" style={{ width: '100%', padding: '0.6rem' }}>
              Request Direct Factory Quote
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} SAMEER TRAILER MOTOR BODY PVT. LTD. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Privacy Policy</span>
            <span>Terms of Manufacturing</span>
            <span>Bhilwara, Rajasthan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
