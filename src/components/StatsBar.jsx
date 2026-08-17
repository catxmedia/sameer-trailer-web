import React from 'react';
import { companyProfile } from '../data/companyData';

export default function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="container">
        <div className="stats-grid">
          {companyProfile.keyStats.map((stat, index) => (
            <div key={index} className="stat-card-titanium">
              <div className="stat-val-titanium">{stat.value}</div>
              <div className="stat-label-titanium">{stat.label}</div>
              <div className="stat-desc-titanium">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
