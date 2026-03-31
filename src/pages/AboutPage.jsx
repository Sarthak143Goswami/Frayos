import sarthak from '../images/sarthak.png';
import ayush from '../images/ayush.png';

function AboutPage() {
  const founders = [
    {
      img: sarthak,
      name: "Sarthak Goswami",
      role: "Co-Founder & CEO",
      bio: "Left a career in IT to follow his passion for building something meaningful. Sarthak co-founded FRAYO with one clear mission — to serve people great food, create employment, and build a brand that Indore is proud of."
    },
    {
      img: ayush,
      name: "Ayush Kourav",
      role: "Co-Founder & COO",
      bio: "Left a B2B Marketing job to co-build FRAYO alongside Sarthak. Ayush brings sharp market instincts and operational drive to turn a crispy vision into a thriving, scalable reality."
    }
  ];

  return (
    <section style={{ padding: '100px 6%', background: '#080808', minHeight: '100vh', paddingTop: '120px' }}>
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <div style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: '#D4A017', marginBottom: '12px' }}>Our Story</div>
        <h2 style={{ fontFamily: "'Anton',sans-serif", fontSize: 'clamp(42px,6vw,80px)', letterSpacing: '3px' }}>ABOUT FRAYO</h2>
        <div style={{ width: '60px', height: '2px', background: '#D4A017', margin: '16px auto 0' }} />
      </div>

      <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', maxWidth: '1200px', margin: '0 auto 100px' }}>
        <div>
          <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(24px,3vw,38px)', fontStyle: 'italic', lineHeight: '1.4', marginBottom: '28px' }}>
            "We didn't just open a restaurant.<br />We started a <span style={{ color: '#D4A017', fontStyle: 'normal' }}>revolution</span> in flavour."
          </p>
          {[
            "FRAYO Parlour was born from a simple conviction: that Indore deserves world-class quick service food celebrating our love for bold flavours — without compromising on quality, values, or the joy of eating together.",
            "The ॐ in our logo is our promise — food prepared with intention, love, and a deep reverence for the experience of eating. Every meal is a small ritual that deserves to be done right.",
            "From a vision and a passion for crispy golden bites, FRAYO has been built to grow — from Indore to the world, one perfectly fried potato at a time."
          ].map((p, i) => (
            <p key={i} style={{ fontSize: '14px', color: '#777', lineHeight: '1.9', marginBottom: '16px' }}>{p}</p>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {[
            { n: "2025", l: "Est. Indore", acc: true },
            { n: "ॐ", l: "Our Soul", serif: true },
            { n: "100%", l: "Vegetarian" },
            { n: "∞", l: "Flavour Combos" }
          ].map((s, i) => (
            <div key={i} style={{
              background: s.acc ? '#D4A017' : '#111', border: s.acc ? 'none' : '1px solid rgba(212,160,23,0.12)',
              padding: '36px 24px', textAlign: 'center', transition: 'border-color 0.3s'
            }} onMouseEnter={e => !s.acc && (e.currentTarget.style.borderColor = '#D4A017')}
               onMouseLeave={e => !s.acc && (e.currentTarget.style.borderColor = 'rgba(212,160,23,0.12)')}>
              <div style={{
                fontFamily: s.serif ? 'serif' : "'Anton',sans-serif", fontSize: s.serif ? '62px' : '48px',
                color: s.acc ? '#080808' : '#D4A017', lineHeight: '1'
              }}>{s.n}</div>
              <div style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: s.acc ? 'rgba(8,8,8,0.6)' : '#555', marginTop: '8px' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h3 style={{ fontFamily: "'Anton',sans-serif", fontSize: 'clamp(32px,5vw,58px)', letterSpacing: '4px', marginBottom: '8px' }}>MEET THE FOUNDERS</h3>
        <p style={{ fontSize: '11px', letterSpacing: '4px', color: '#444', textTransform: 'uppercase' }}>The Visionaries Behind The Crunch</p>
      </div>

      <div className="founders-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '40px', maxWidth: '900px', margin: '0 auto' }}>
        {founders.map((f, i) => (
          <div key={i} style={{ overflow: 'hidden', transition: 'transform 0.4s', cursor: 'default' }}
               onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-8px)'}
               onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{ height: '420px', overflow: 'hidden', position: 'relative', background: '#111' }}>
              <img src={f.img} alt={f.name} style={{
                width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center',
                transition: 'transform 0.6s', display: 'block'
              }} onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
                 onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                 onError={e => {
                   e.target.style.display = 'none';
                   e.target.parentElement.style.background = '#1a1a1a';
                   e.target.parentElement.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:12px;color:#555"><div style="font-size:64px">👤</div><div style="font-size:12px;letter-spacing:2px;text-transform:uppercase">${f.name}</div></div>`;
                 }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(transparent,#111)' }} />
            </div>
            <div style={{ background: '#111', borderTop: '2px solid #D4A017', padding: '24px' }}>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '24px', fontWeight: '700', marginBottom: '4px' }}>{f.name}</div>
              <div style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#D4A017', marginBottom: '14px' }}>{f.role}</div>
              <p style={{ fontSize: '13px', color: '#777', lineHeight: '1.8' }}>{f.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutPage;