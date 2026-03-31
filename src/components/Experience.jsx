function Experience() {
  return (
    <section style={{ padding: '100px 6%', background: '#0D0D0D' }}>
      <div className="exp-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', maxWidth: '1200px', margin: '0 auto', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: '#D4A017', marginBottom: '16px' }}>The Frayo Experience</div>
          <h2 style={{ fontFamily: "'Anton',sans-serif", fontSize: 'clamp(44px,6vw,80px)', lineHeight: '0.9', letterSpacing: '3px', marginBottom: '40px' }}>
            MORE<br /><span style={{ color: '#D4A017' }}>THAN</span><br />FOOD
          </h2>
          {[
            { i: "⚡", h: "Ready in Minutes", p: "Quick service speed — hot and fresh within minutes, not half an hour." },
            { i: "🎨", h: "Crafted to Impress", p: "Every plate is a visual feast. Great food should look as stunning as it tastes." },
            { i: "🎵", h: "Vibe That Hits Different", p: "Warm lighting, good music, curated ambience — a space you actually want to stay in." },
            { i: "ॐ", h: "Served With Soul", p: "Food prepared with intention, gratitude and deep reverence for the act of eating.", serif: true }
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex', gap: '16px', padding: '20px', marginBottom: '12px',
              background: '#111', borderLeft: '2px solid #D4A017', transition: 'transform 0.3s', cursor: 'default'
            }} onMouseEnter={e => e.currentTarget.style.transform = 'translateX(6px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}>
              <div style={{ fontSize: '22px', flexShrink: 0, fontFamily: item.serif ? 'serif' : 'sans-serif', paddingTop: '2px' }}>{item.i}</div>
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>{item.h}</h4>
                <p style={{ fontSize: '12px', color: '#666', lineHeight: '1.7' }}>{item.p}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div style={{ gridColumn: 'span 2', background: '#D4A017', padding: '40px 32px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'serif', fontSize: '52px', color: '#080808' }}>ॐ</div>
            <div style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(8,8,8,0.65)', marginTop: '8px' }}>Served With Soul, Every Time</div>
          </div>
          {[["100%", "Pure Veg"], ["25+", "Unique Items"], ["5★", "Early Reviews"], ["0", "Compromises"]].map(([n, l]) => (
            <div key={l} style={{
              background: '#111', border: '1px solid rgba(212,160,23,0.1)', padding: '28px 20px',
              textAlign: 'center', transition: 'border-color 0.3s'
            }} onMouseEnter={e => e.currentTarget.style.borderColor = '#D4A017'} onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(212,160,23,0.1)'}>
              <div style={{ fontFamily: "'Anton',sans-serif", fontSize: '44px', color: '#D4A017', lineHeight: '1' }}>{n}</div>
              <div style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#555', marginTop: '6px' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;