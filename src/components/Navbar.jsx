import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/about', label: 'About' },
    { path: '/feedback', label: 'Reviews' },
    { path: '/find-us', label: 'Find Us' },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 5%', height: '68px',
        background: scrolled ? 'rgba(8,8,8,0.98)' : 'rgba(8,8,8,0.65)',
        backdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(212,160,23,0.12)',
        transition: 'background 0.4s'
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div style={{
            width: '44px', height: '44px', borderRadius: '50%', border: '1.5px solid #D4A017',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(212,160,23,0.08)', fontSize: '20px', color: '#D4A017', fontFamily: 'serif'
          }}>ॐ</div>
          <div>
            <div style={{ fontFamily: "'Anton',sans-serif", fontSize: '20px', letterSpacing: '4px', color: '#D4A017', lineHeight: '1' }}>FRAYO</div>
            <div style={{ fontSize: '8px', letterSpacing: '4px', color: '#555' }}>PARLOUR</div>
          </div>
        </Link>

        <div className="desk-nav" style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: location.pathname === link.path ? '#D4A017' : '#aaa',
                fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase',
                fontFamily: "'Inter',sans-serif", fontWeight: '500', textDecoration: 'none',
                transition: 'color 0.3s'
              }}
              onMouseEnter={e => e.target.style.color = '#D4A017'}
              onMouseLeave={e => e.target.style.color = location.pathname === link.path ? '#D4A017' : '#aaa'}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/feedback" style={{
            background: '#D4A017', color: '#080808', border: 'none', cursor: 'pointer',
            padding: '9px 22px', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase',
            fontWeight: '700', fontFamily: "'Inter',sans-serif", textDecoration: 'none',
            transition: 'background 0.3s'
          }} onMouseEnter={e => e.currentTarget.style.background = '#F0C040'} onMouseLeave={e => e.currentTarget.style.background = '#D4A017'}>
            Feedback
          </Link>
        </div>

        <button className="hamburger" onClick={() => setOpen(!open)} style={{
          display: 'none', background: 'none', border: 'none', cursor: 'pointer',
          flexDirection: 'column', gap: '5px', padding: '4px'
        }}>
          <span style={{ display: 'block', width: '22px', height: '2px', background: '#D4A017' }} />
          <span style={{ display: 'block', width: '22px', height: '2px', background: '#D4A017' }} />
          <span style={{ display: 'block', width: '22px', height: '2px', background: '#D4A017' }} />
        </button>
      </nav>

      {open && (
        <div style={{
          position: 'fixed', top: '68px', left: 0, right: 0,
          background: 'rgba(8,8,8,0.98)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(212,160,23,0.15)', padding: '24px 6%',
          zIndex: 999, display: 'flex', flexDirection: 'column', gap: '18px'
        }}>
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer', color: '#F5F0E8',
                fontFamily: "'Anton',sans-serif", fontSize: '22px', letterSpacing: '3px',
                textAlign: 'left', padding: '8px 0', textDecoration: 'none',
                borderBottom: '1px solid rgba(212,160,23,0.08)'
              }}
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default Navbar;