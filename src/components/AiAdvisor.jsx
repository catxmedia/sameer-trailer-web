import React, { useState } from 'react';
import { companyProfile } from '../data/companyData';

export default function AiAdvisor({ onOpenRfq }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: 'Namaste! I am Sameer Trailer’s AI Fleet Advisor. How can I assist you today? You can ask me about recommended vehicle models for mining, payload advantages of HSFQ-450 steel, or axle specifications.'
    }
  ]);
  const [input, setInput] = useState('');

  const quickPrompts = [
    "Best tipper for iron ore mining?",
    "What is the payload benefit of HSFQ-450 steel?",
    "How to request a direct factory quote?",
    "Tell me about Bhilwara Unit-1 and Unit-2"
  ];

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: query }];
    setMessages(newMessages);
    setInput('');

    // Generate intelligent responses
    setTimeout(() => {
      let reply = "";
      const q = query.toLowerCase();

      if (q.includes("mining") || q.includes("iron ore") || q.includes("quarry")) {
        reply = "For heavy mining and iron ore, we strongly recommend our 20 Cu.M Rock Body U-Shape Mining Tipper or 28-40 Cu.M Tridem Tip Trailer equipped with 170-Bar Hyva/Wipro hydraulic cylinders and 8mm floor / 6mm wall ST-52 high-impact steel.";
      } else if (q.includes("steel") || q.includes("hsfq") || q.includes("payload") || q.includes("weight")) {
        reply = "Sameer Trailer uses SAIL/Jindal HSFQ-450 high-tensile steel for main girders. This reduces unladen tare weight by 800 kg - 1,200 kg compared to standard steel, giving you +1.0 Ton legal extra payload per trip!";
      } else if (q.includes("unit") || q.includes("bhilwara") || q.includes("plant") || q.includes("factory")) {
        reply = "We operate 2 dedicated plants in Bhilwara, Rajasthan: Unit-1 (HQ & Main Assembly near FCI Godown) and Unit-2 (Heavy Expansion Facility on NH 48, Takhatpura with JMT 4-Roll Plate Rolling & Sa 2.5 Shot-Blasting Chamber).";
      } else if (q.includes("quote") || q.includes("price") || q.includes("cost") || q.includes("buy")) {
        reply = "You can click on the '⚡ Request Quote' button to build a custom trailer/tipper requirement and dispatch it directly to our Sales Desk on WhatsApp (+91 9928278071).";
      } else {
        reply = `Thank you for your query regarding "${query}". For detailed technical engineering consultations, you can reach our Sales Desk directly at ${companyProfile.primaryPhone} or click the WhatsApp Quote button below.`;
      }

      setMessages(prev => [...prev, { sender: 'ai', text: reply }]);
    }, 600);
  };

  return (
    <>
      {/* Floating AI Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="floating-btn" 
        style={{ 
          position: 'fixed', 
          bottom: '2rem', 
          left: '2rem', 
          zIndex: 995, 
          background: 'linear-gradient(135deg, #FF4500 0%, #F59E0B 100%)',
          boxShadow: '0 6px 25px rgba(255, 69, 0, 0.45)',
          border: 'none',
          cursor: 'pointer'
        }}
        title="AI Fleet Technical Advisor"
      >
        🤖
      </button>

      {/* AI Advisor Modal Drawer */}
      {isOpen && (
        <div 
          style={{
            position: 'fixed',
            bottom: '6rem',
            left: '2rem',
            width: '380px',
            maxWidth: 'calc(100vw - 4rem)',
            height: '520px',
            background: 'rgba(12, 15, 22, 0.96)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 69, 0, 0.4)',
            borderRadius: 'var(--radius-xl)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 35px rgba(255, 69, 0, 0.25)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}
        >
          {/* Header */}
          <div style={{
            padding: '1rem 1.25rem',
            background: 'var(--bg-surface)',
            borderBottom: '1px solid var(--border-dark)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ fontSize: '1.4rem' }}>🤖</span>
              <div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-white)' }}>
                  AI Fleet Advisor
                </h4>
                <span style={{ fontSize: '0.72rem', color: 'var(--brand-orange)', fontWeight: 600 }}>
                  Sameer Trailer Technical Assistant
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '1.2rem', cursor: 'pointer' }}
            >
              ✕
            </button>
          </div>

          {/* Messages Body */}
          <div style={{ padding: '1rem', flexGrow: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {messages.map((m, i) => (
              <div 
                key={i} 
                style={{
                  alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  padding: '0.75rem 1rem',
                  borderRadius: '14px',
                  background: m.sender === 'user' ? 'var(--brand-orange)' : 'var(--bg-card)',
                  border: m.sender === 'user' ? 'none' : '1px solid var(--border-dark)',
                  color: '#FFF',
                  fontSize: '0.88rem',
                  lineHeight: '1.45'
                }}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* Quick Prompts */}
          <div style={{ padding: '0.5rem 0.75rem', display: 'flex', gap: '0.4rem', overflowX: 'auto', borderTop: '1px solid var(--border-dark)' }}>
            {quickPrompts.map((qp, idx) => (
              <button 
                key={idx} 
                onClick={() => handleSend(qp)}
                style={{
                  whiteSpace: 'nowrap',
                  padding: '0.3rem 0.65rem',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--border-dark)',
                  borderRadius: '15px',
                  color: 'var(--text-secondary)',
                  fontSize: '0.75rem',
                  cursor: 'pointer'
                }}
              >
                💡 {qp}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div style={{ padding: '0.75rem', borderTop: '1px solid var(--border-dark)', display: 'flex', gap: '0.5rem' }}>
            <input 
              type="text" 
              placeholder="Ask AI technical question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              style={{
                flexGrow: 1,
                padding: '0.6rem 0.85rem',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-dark)',
                borderRadius: 'var(--radius-md)',
                color: '#FFF',
                fontSize: '0.85rem'
              }}
            />
            <button 
              onClick={() => handleSend()}
              className="btn btn-primary"
              style={{ padding: '0.6rem 1rem', fontSize: '0.85rem' }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
