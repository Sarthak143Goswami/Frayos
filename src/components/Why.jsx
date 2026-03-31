function Why() {
  const cards = [
    { i: "🌿", t: "100% Pure Veg", d: "Every item on our menu is purely vegetarian. Clean, bold flavours you can always trust." },
    { i: "🔥", t: "Crispy Every Time", d: "Premium preparation ensures the perfect crunch you crave — every single order, guaranteed." },
    { i: "🇮🇳", t: "Desi Meets Global", d: "From Thecha Fries to Makhani Poutine — India's boldest flavours in international formats." },
    { i: "⚡", t: "Fast & Fresh", d: "Street food speed meets café quality. Hot, crispy and ready within minutes of ordering." },
    { i: "❤️", t: "Community First", d: "Born in Indore, built for Indore. A local brand with a national vision and hometown heart." },
    { i: "ॐ", t: "Served With Soul", d: "The ॐ in our logo is our philosophy — food cooked with intention, gratitude and love." },
  ];

  return (
    <section style={{ padding: '100px 6%', background: '#0D0D0D', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', fontFamily: "'Anton',sans-serif", fontSize: '280px', color: 'rgba(212,160,23,0.025)',
        top: '50%', left: '50%', transform: 'translate(-50%,-50%)', letterSpacing: '20px',
        whiteSpace: 'nowrap', pointerEvents: 'none', userSelect: 'none'
      }}>FRAYO</div>
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <div style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: '#D4A017', marginBottom: '12px' }}>Why Choose Us</div>
        <h2 style={{ fontFamily: "'Anton',sans-serif", fontSize: 'clamp(42px,6vw,80px)', letterSpacing: '3px' }}>THE FRAYO PROMISE</h2>
        <div style={{ width: '60px', height: '2px', background: '#D4A017', margin: '16px auto 0' }} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '2px', maxWidth: '1200px', margin: '0 auto' }}>
        {cards.map((c, i) => (
          <div key={i} style={{
            background: '#111', padding: '44px 32px', borderBottom: '2px solid transparent',
            transition: 'all 0.4s', cursor: 'default'
          }} onMouseEnter={e => { e.currentTarget.style.background = '#161616'; e.currentTarget.style.borderBottomColor = '#D4A017'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
             onMouseLeave={e => { e.currentTarget.style.background = '#111'; e.currentTarget.style.borderBottomColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}>
            <div style={{ fontSize: '36px', marginBottom: '18px', fontFamily: 'serif' }}>{c.i}</div>
            <h3 style={{ fontFamily: "'Anton',sans-serif", fontSize: '20px', letterSpacing: '2px', color: '#D4A017', marginBottom: '10px' }}>{c.t}</h3>
            <p style={{ fontSize: '13px', color: '#777', lineHeight: '1.8' }}>{c.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Why;