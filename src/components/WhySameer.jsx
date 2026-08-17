import React from 'react';
import { companyProfile } from '../data/companyData';

export default function WhySameer() {
  return (
    <section id="advantages" className="section">
      <div className="container">
        <div className="section-header">
          <span className="badge">Why Sameer Trailer</span>
          <h2 className="section-title">The <span>6 Engineering Advantages</span></h2>
          <p className="section-desc">
            Designed for harsh Indian roads, heavy mining loads, and high mileage return.
          </p>
        </div>

        <div className="tour-grid">
          {companyProfile.engineeringAdvantages.map((adv, index) => (
            <div key={index} className="tour-card" style={{ borderTop: '3px solid var(--primary-orange)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{adv.icon}</div>
              <h3 className="tour-title">{adv.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
