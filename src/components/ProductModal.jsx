import React from 'react';

export default function ProductModal({ product, onClose, onOpenRfq }) {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800 }}>
              {product.title}
            </h3>
            <span style={{ color: 'var(--primary-orange)', fontWeight: 600, fontSize: '0.9rem' }}>
              {product.subtitle}
            </span>
          </div>
          <button onClick={onClose} className="modal-close-btn">✕</button>
        </div>

        <div className="modal-body">
          <div className="modal-grid">
            <div>
              <img 
                src={product.image} 
                alt={product.title} 
                style={{ width: '100%', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}
              />
              <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <button 
                  onClick={() => { onClose(); onOpenRfq(product); }} 
                  className="btn btn-primary" 
                  style={{ width: '100%' }}
                >
                  💬 Request Direct Factory Quotation
                </button>
              </div>
            </div>

            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: 'var(--text-white)', marginBottom: '0.75rem' }}>
                Technical Specification Blueprint
              </h4>
              <table className="specs-table">
                <tbody>
                  {Object.entries(product.specs).map(([key, val]) => (
                    <tr key={key}>
                      <th>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</th>
                      <td>{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
