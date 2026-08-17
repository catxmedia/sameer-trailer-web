import React from 'react';
import { companyProfile } from '../data/companyData';

export default function Hero({ onOpenRfq }) {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-slogan">
            <span>🇮🇳</span> {companyProfile.hindiSlogan}
          </div>
          
          <h1 className="hero-title">
            HEAVY COMMERCIAL TRAILERS & TIPPERS
            <span>ENGINEERED FOR MAXIMUM PAYLOAD</span>
          </h1>
          
          <p className="hero-sub">
            {companyProfile.englishSubtagline} Since {companyProfile.establishedYear}, we build high-tensile HSFQ-450 trailers, tippers, bulkers, and tankers under one roof in Bhilwara, Rajasthan.
          </p>

          <div className="hero-cta-group">
            <button onClick={onOpenRfq} className="btn btn-primary">
              ⚡ Get Direct Factory Quote
            </button>
            
            <a 
              href="/Sameer_Trailer_Catalogue.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              📥 Download Catalogue (PDF)
            </a>
          </div>

          <ul className="hero-features-list">
            <li className="hero-feature-item">
              <span className="hero-feature-icon">✓</span> HSFQ-450 Steel Chassis
            </li>
            <li className="hero-feature-item">
              <span className="hero-feature-icon">✓</span> Sa 2.5 Shot-Blasted Finish
            </li>
            <li className="hero-feature-item">
              <span className="hero-feature-icon">✓</span> York / TATA 18T Axles
            </li>
          </ul>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <img 
              src="/trucks/page1.png" 
              alt="Sameer Trailer Flagship Heavy Duty Dump Trailer" 
              className="hero-img"
            />
            <div className="hero-badge-overlay">
              <div className="overlay-stat">35+</div>
              <div className="overlay-label">
                Years Of Heavy Engineering<br/>
                <strong>Bhilwara, Rajasthan</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
