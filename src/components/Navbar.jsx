import React from 'react';
import { companyProfile } from '../data/companyData';

export default function Navbar({ onOpenRfq }) {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#" className="brand-logo">
          <div className="logo-badge">ST</div>
          <div className="logo-text-wrap">
            <span className="logo-title">SAMEER TRAILER</span>
            <span className="logo-sub">MOTOR BODY PVT. LTD.</span>
          </div>
        </a>

        <nav>
          <ul className="nav-links">
            <li><a href="#products" className="nav-link">Vehicle Models</a></li>
            <li><a href="#advantages" className="nav-link">Engineering</a></li>
            <li><a href="#calculator" className="nav-link">Payload ROI</a></li>
            <li><a href="#plant-tour" className="nav-link">Plant Tour</a></li>
            <li><a href="#contact" className="nav-link">Contact Units</a></li>
          </ul>
        </nav>

        <div className="nav-actions">
          <a href={`tel:${companyProfile.primaryPhone}`} className="hotline-btn">
            <span>📞</span> {companyProfile.primaryPhone}
          </a>
          <button onClick={onOpenRfq} className="btn btn-primary">
            Request Quote
          </button>
        </div>
      </div>
    </header>
  );
}
