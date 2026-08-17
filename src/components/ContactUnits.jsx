import React from 'react';
import { companyProfile } from '../data/companyData';

export default function ContactUnits({ onOpenRfq }) {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="badge">Manufacturing Plants</span>
          <h2 className="section-title">Visit Our <span>Bhilwara Hubs</span></h2>
          <p className="section-desc">
            We welcome transport fleet owners, logistics operators, and mining managers for live plant inspection.
          </p>
        </div>

        <div className="units-grid">
          {companyProfile.units.map(unit => (
            <div key={unit.id} className="unit-card">
              <span className="badge unit-badge">{unit.badge}</span>
              <h3 className="unit-title">{unit.title}</h3>
              <p className="unit-address">📍 {unit.address}</p>

              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', color: 'var(--primary-orange)', marginBottom: '0.5rem' }}>
                Plant Infrastructure & Capabilities:
              </h4>
              <ul className="capabilities-list">
                {unit.capabilities.map((cap, i) => (
                  <li key={i}>{cap}</li>
                ))}
              </ul>

              <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(unit.mapQuery)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ flex: 1 }}
                >
                  🗺️ Google Maps
                </a>
                <a 
                  href={`tel:${unit.phones[0]}`} 
                  className="btn btn-outline"
                  style={{ flex: 1 }}
                >
                  📞 Call Desk
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
