import React, { useState } from 'react';

export default function PayloadCalculator() {
  const [fleetSize, setFleetSize] = useState(5);
  const [monthlyKm, setMonthlyKm] = useState(8000);
  const [freightRatePerTon, setFreightRatePerTon] = useState(1200);

  // HSFQ-450 saves ~1000kg (1 ton) tare weight per trailer
  const extraTonsPerTrip = 1.0;
  const tripsPerMonth = Math.round(monthlyKm / 800); // avg 800km per round trip
  const monthlyExtraRevenuePerVehicle = tripsPerMonth * freightRatePerTon * extraTonsPerTrip;
  const totalFleetAnnualExtraEarnings = Math.round(monthlyExtraRevenuePerVehicle * 12 * fleetSize);

  return (
    <section id="calculator" className="section" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        <div className="section-header">
          <span className="badge">Transport Financial ROI</span>
          <h2 className="section-title">HSFQ Steel <span>Payload Savings Calculator</span></h2>
          <p className="section-desc">
            Calculate how much extra revenue your fleet earns each year by saving 1,000 kg unladen tare weight with Sameer Trailer.
          </p>
        </div>

        <div className="calculator-card">
          <div className="calc-inputs">
            <div className="form-group">
              <label className="form-label">Number of Vehicles in Fleet: <strong>{fleetSize}</strong></label>
              <input 
                type="range" 
                min="1" 
                max="50" 
                value={fleetSize} 
                onChange={(e) => setFleetSize(Number(e.target.value))}
                style={{ accentColor: 'var(--primary-orange)' }}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Average Monthly Distance per Vehicle (km): <strong>{monthlyKm} km</strong></label>
              <input 
                type="range" 
                min="2000" 
                max="20000" 
                step="500" 
                value={monthlyKm} 
                onChange={(e) => setMonthlyKm(Number(e.target.value))}
                style={{ accentColor: 'var(--primary-orange)' }}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Average Freight Rate (₹ per Ton): <strong>₹{freightRatePerTon}</strong></label>
              <input 
                type="number" 
                value={freightRatePerTon} 
                onChange={(e) => setFreightRatePerTon(Number(e.target.value))}
                className="form-input"
              />
            </div>
          </div>

          <div className="calc-results">
            <div style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Estimated Fleet Annual Extra Earning
            </div>
            <div className="calc-amount">
              ₹{totalFleetAnnualExtraEarnings.toLocaleString('en-IN')}
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Based on +1.0 Ton legal payload capacity gain per trip with HSFQ-450 high-tensile steel construction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
