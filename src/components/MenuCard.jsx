import { useState } from 'react';

function MenuCard({ item }) {
  const [hover, setHover] = useState(false);

  return (
    <div style={{
      background: '#111', border: `1px solid ${hover ? '#D4A017' : 'rgba(212,160,23,0.1)'}`,
      overflow: 'hidden', transition: 'all 0.4s', transform: hover ? 'translateY(-8px)' : 'translateY(0)',
      boxShadow: hover ? '0 24px 60px rgba(0,0,0,0.6)' : 'none'
    }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div style={{ height: '200px', overflow: 'hidden', position: 'relative', background: '#1a1a1a' }}>
        <img src={item.img} alt={item.name} loading="lazy" style={{
          width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s',
          transform: hover ? 'scale(1.08)' : 'scale(1)'
        }} onError={e => { e.target.style.display = 'none'; }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px', background: 'linear-gradient(transparent,#111)' }} />
        <div style={{
          position: 'absolute', top: '12px', left: '12px', background: 'rgba(8,8,8,0.75)',
          backdropFilter: 'blur(8px)', padding: '3px 10px', fontSize: '9px', letterSpacing: '2px',
          textTransform: 'uppercase', color: '#D4A017', border: '1px solid rgba(212,160,23,0.3)'
        }}>{item.tag}</div>
        <div style={{ position: 'absolute', top: '12px', right: '12px', width: '18px', height: '18px', border: '2px solid #27ae60', borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '8px', height: '8px', background: '#27ae60', borderRadius: '50%' }} />
        </div>
      </div>
      <div style={{ padding: '20px' }}>
        <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '18px', fontWeight: '700', marginBottom: '8px', lineHeight: '1.3' }}>{item.name}</h3>
        <p style={{ fontSize: '12px', color: '#666', lineHeight: '1.7', marginBottom: '16px' }}>{item.desc}</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid rgba(212,160,23,0.08)' }}>
          <span style={{ fontFamily: "'Anton',sans-serif", fontSize: '26px', color: '#D4A017', letterSpacing: '1px' }}>{item.price}</span>
          <button style={{
            background: 'transparent', border: '1px solid #D4A017', color: '#D4A017', padding: '7px 16px',
            fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', cursor: 'pointer',
            fontFamily: "'Inter',sans-serif", transition: 'all 0.3s'
          }} onMouseEnter={e => { e.currentTarget.style.background = '#D4A017'; e.currentTarget.style.color = '#080808'; }}
             onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#D4A017'; }}>
            Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;