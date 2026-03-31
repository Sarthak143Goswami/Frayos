function FindUsPage() {
  return (
    <section style={{ padding: '100px 6%', background: '#080808', textAlign: 'center', minHeight: '100vh', paddingTop: '120px' }}>
      <div style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: '#D4A017', marginBottom: '12px' }}>Visit Us</div>
      <h2 style={{ fontFamily: "'Anton',sans-serif", fontSize: 'clamp(42px,6vw,80px)', letterSpacing: '3px' }}>FIND FRAYO</h2>
      <div style={{ width: '60px', height: '2px', background: '#D4A017', margin: '16px auto 48px' }} />
      
      <div style={{ maxWidth: '800px', margin: '0 auto', background: '#0D0D0D', border: '1px solid rgba(212,160,23,0.18)', padding: '60px 48px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: '-20px', bottom: '-20px', fontSize: '180px', opacity: 0.02, pointerEvents: 'none', userSelect: 'none' }}>📍</div>
        <div style={{ fontSize: '44px', marginBottom: '16px' }}>📍</div>
        <div style={{ fontFamily: "'Anton',sans-serif", fontSize: '38px', letterSpacing: '4px', color: '#D4A017', marginBottom: '8px' }}>FRAYO PARLOUR</div>
        <div style={{ fontSize: '15px', color: '#666', lineHeight: '1.8', marginBottom: '36px' }}>
          Indore, Madhya Pradesh, India<br /><strong style={{ color: '#F5F0E8' }}>India's Crispiest QSR Destination</strong>
        </div>
        
        <div className="hours-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: 'rgba(212,160,23,0.08)', marginBottom: '36px' }}>
          {[["Mon – Thu", "11am – 10pm"], ["Fri – Sat", "11am – 11pm"], ["Sunday", "12pm – 10pm"]].map(([d, t]) => (
            <div key={d} style={{ background: '#111', padding: '20px', textAlign: 'center' }}>
              <div style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#555', marginBottom: '6px' }}>{d}</div>
              <div style={{ fontSize: '14px', fontWeight: '600' }}>{t}</div>
            </div>
          ))}
        </div>
        
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[["📞", "Call Us", "tel:+91"], ["💬", "WhatsApp", "https://wa.me/91"], ["📸", "Instagram", "https://instagram.com"], ["🗺️", "Directions", "#"]].map(([icon, label, href]) => (
            <a key={label} href={href} style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px',
              border: '1px solid rgba(212,160,23,0.2)', color: '#666', textDecoration: 'none',
              fontSize: '12px', letterSpacing: '1px', transition: 'all 0.3s'
            }} onMouseEnter={e => { e.currentTarget.style.borderColor = '#D4A017'; e.currentTarget.style.color = '#D4A017'; }}
               onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(212,160,23,0.2)'; e.currentTarget.style.color = '#666'; }}>
              {icon} {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FindUsPage;