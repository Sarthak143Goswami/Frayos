import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FI } from '../assets/images';

function Hero() {
  const [vis, setVis] = useState(false);
  useEffect(() => { setTimeout(() => setVis(true), 150); }, []);

  return (
    <section id="home" style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', paddingTop: '68px' }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${FI.hero})`, backgroundSize: 'cover', backgroundPosition: 'center',
        filter: 'brightness(0.18) saturate(0.7)'
      }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 65% 50%,rgba(212,160,23,0.1) 0%,transparent 65%)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '240px', background: 'linear-gradient(transparent,#080808)' }} />
      
      <div className="hero-grid" style={{
        position: 'relative', zIndex: 2, padding: '0 6%', maxWidth: '1300px', margin: '0 auto', width: '100%',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center'
      }}>
        <div style={{ opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(40px)', transition: 'all 1s ease' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(212,160,23,0.08)',
            border: '1px solid rgba(212,160,23,0.25)', padding: '5px 16px', borderRadius: '100px',
            marginBottom: '24px', fontSize: '10px', letterSpacing: '3px', color: '#D4A017', textTransform: 'uppercase'
          }}>
            <span style={{ fontFamily: 'serif', fontSize: '16px' }}>ॐ</span>Indore's Crispiest QSR
          </div>
          <h1 style={{ fontFamily: "'Anton',sans-serif", fontSize: 'clamp(80px,11vw,155px)', lineHeight: '0.88', letterSpacing: '3px', marginBottom: '6px' }}>
            <span style={{ display: 'block', color: '#F5F0E8' }}>FRAYO</span>
            <span style={{ display: 'block', WebkitTextStroke: '2px #D4A017', WebkitTextFillColor: 'transparent', color: 'transparent' }}>PARLOUR</span>
          </h1>
          <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(16px,1.8vw,21px)', fontStyle: 'italic', color: 'rgba(245,240,232,0.55)', margin: '20px 0 36px', lineHeight: '1.6' }}>
            Where every bite is <span style={{ color: '#D4A017', fontStyle: 'normal' }}>bold, golden & legendary.</span><br />Crafted with premium ingredients. Served with soul.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '52px' }}>
            <Link to="/menu" style={{
              background: '#D4A017', color: '#080808', border: 'none', cursor: 'pointer',
              padding: '14px 36px', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase',
              fontWeight: '700', fontFamily: "'Inter',sans-serif", textDecoration: 'none', transition: 'all 0.3s'
            }} onMouseEnter={e => e.currentTarget.style.background = '#F0C040'} onMouseLeave={e => e.currentTarget.style.background = '#D4A017'}>
              Explore Menu →
            </Link>
            <Link to="/about" style={{
              background: 'transparent', color: '#F5F0E8', border: '1px solid rgba(245,240,232,0.25)',
              cursor: 'pointer', padding: '13px 36px', fontSize: '12px', letterSpacing: '2px',
              textTransform: 'uppercase', fontFamily: "'Inter',sans-serif", textDecoration: 'none', transition: 'all 0.3s'
            }} onMouseEnter={e => { e.currentTarget.style.borderColor = '#D4A017'; e.currentTarget.style.color = '#D4A017'; }}
               onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(245,240,232,0.25)'; e.currentTarget.style.color = '#F5F0E8'; }}>
              Our Story
            </Link>
          </div>
          <div style={{ display: 'flex', gap: '44px' }}>
            {[["100%", "Vegetarian"], ["25+", "Items"], ["∞", "Flavours"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "'Anton',sans-serif", fontSize: '40px', color: '#D4A017', lineHeight: '1' }}>{n}</div>
                <div style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#555', marginTop: '4px' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="hero-rings" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: vis ? 1 : 0, transition: 'opacity 1.2s 0.4s' }}>
          <div style={{ position: 'relative', width: '360px', height: '360px' }}>
            <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid rgba(212,160,23,0.12)', animation: 'spinA 20s linear infinite' }} />
            <div style={{ position: 'absolute', inset: '28px', borderRadius: '50%', border: '1px dashed rgba(212,160,23,0.08)', animation: 'spinB 15s linear infinite' }} />
            <div style={{ position: 'absolute', inset: '56px', borderRadius: '50%', border: '1px solid rgba(212,160,23,0.06)', animation: 'spinC 25s linear infinite' }} />
            <div style={{
              position: 'absolute', inset: '90px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(212,160,23,0.16) 0%,transparent 70%)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '6px'
            }}>
              <div style={{ fontFamily: 'serif', fontSize: '90px', color: '#D4A017', lineHeight: '1', animation: 'pulse 3s ease-in-out infinite' }}>ॐ</div>
              <div style={{ fontFamily: "'Anton',sans-serif", fontSize: '13px', letterSpacing: '6px', color: '#F5F0E8' }}>FRAYO</div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', opacity: 0.4 }}>
        <div style={{ fontSize: '9px', letterSpacing: '3px', color: '#D4A017', marginBottom: '6px' }}>SCROLL</div>
        <div style={{ width: '1px', height: '36px', background: 'linear-gradient(#D4A017,transparent)', margin: '0 auto' }} />
      </div>
    </section>
  );
}

export default Hero;