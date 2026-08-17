import React from 'react';

export default function ManufacturingTour() {
  const steps = [
    {
      num: "01",
      title: "JMT 4-Roll CNC Plate Rolling & Plasma Cut",
      desc: "Heavy plate rolling and high-precision CNC plasma cutting for main chassis girders and dished tanker ends."
    },
    {
      num: "02",
      title: "Submerged Arc Beam Welding (SAW)",
      desc: "Automatic dual-torch submerged arc welding ensuring 100% penetration welds on all main frame girders."
    },
    {
      num: "03",
      title: "Sa 2.5 Automated Shot-Blasting Chamber",
      desc: "Surface cleaning to Sa 2.5 white metal standard removing all scale and rust before primer coating."
    },
    {
      num: "04",
      title: "Climate-Controlled PU Paint Booth & Trial Track",
      desc: "500-hour salt-spray tested Polyurethane (PU) paint application followed by multi-axle alignment check on trial track."
    }
  ];

  return (
    <section id="plant-tour" className="section" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        <div className="section-header">
          <span className="badge">In-House Manufacturing</span>
          <h2 className="section-title">4-Step <span>Precision Engineering</span> Walkthrough</h2>
          <p className="section-desc">
            Everything is designed, fabricated, painted, and tested under one roof across our 2 plants in Bhilwara.
          </p>
        </div>

        <div className="tour-grid">
          {steps.map((step) => (
            <div key={step.num} className="tour-card">
              <span className="step-num">{step.num}</span>
              <h3 className="tour-title">{step.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
