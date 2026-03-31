import { Link } from 'react-router-dom';

function Footer() {
  const cols = [
    {
      h: "Navigate",
      links: [
        ["Home", "/"], ["Menu", "/menu"], ["About", "/about"],
        ["Feedback", "/feedback"], ["Find Us", "/find-us"]
      ]
    },
    {
      h: "Menu",
      links: [
        ["French Fries", "/menu"], ["Masala Fries", "/menu"], ["Loaded Bites", "/menu"],
        ["Indian Specials", "/menu"], ["Global Fusions", "/menu"], ["Coming Soon", "/menu"]
      ]
    },
    {
      h: "Connect",
      links: [
        ["📍 Indore, MP", "/find-us"], ["📞 Call Us", "tel:+91"], ["💬 WhatsApp", "https://wa.me/91"],
        ["📸 Instagram", "#"], ["🤝 Catering", "#"], ["💼 Franchise", "#"]
      ]
    },
  ];

  return (
    <footer style={{ background: '#0A0A0A', borderTop: '1px solid rgba(212,160,23,0.1)', padding: '60px 6% 32px' }}>
      <div className="footer-grid" style={{
        display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '60px',
        marginBottom: '48px', maxWidth: '1300px', margin: '0 auto 48px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{
              width: '40px', height: '40px', borderRadius: '50%', border: '1.5px solid #D4A017',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '18px', color: '#D4A017', fontFamily: 'serif'
            }}>ॐ</div>
            <div>
              <div style={{ fontFamily: "'Anton',sans-serif", fontSize: '18px', letterSpacing: '4px', color: '#D4A017' }}>FRAYO</div>
              <div style={{ fontSize: '8px', letterSpacing: '4px', color: '#333' }}>PARLOUR</div>
            </div>
          </div>
          <p style={{ fontSize: '13px', color: '#444', lineHeight: '1.8', marginBottom: '20px' }}>
            Crispy. Bold. Legendary. Born in Indore, built for the world. Every bite is a promise of quality, flavour, and soul.
          </p>
          <div style={{ display: 'flex', gap: '8px' }}>
            {["📸", "👍", "🐦", "▶️"].map((s, i) => (
              <a key={i} href="#" style={{
                width: '34px', height: '34px', border: '1px solid rgba(212,160,23,0.18)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                textDecoration: 'none', transition: 'border-color 0.3s', fontSize: '15px'
              }} onMouseEnter={e => e.currentTarget.style.borderColor = '#D4A017'}
                 onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(212,160,23,0.18)'}>
                {s}
              </a>
            ))}
          </div>
        </div>
        {cols.map((col, i) => (
          <div key={i}>
            <h4 style={{ fontFamily: "'Anton',sans-serif", fontSize: '14px', letterSpacing: '3px', color: '#D4A017', marginBottom: '18px' }}>
              {col.h}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {col.links.map(([label, href]) => (
                href.startsWith('http') || href.startsWith('tel') ? (
                  <a key={label} href={href} style={{ fontSize: '13px', color: '#444', textDecoration: 'none', transition: 'color 0.3s' }}
                     onMouseEnter={e => e.target.style.color = '#D4A017'} onMouseLeave={e => e.target.style.color = '#444'}>
                    {label}
                  </a>
                ) : (
                  <Link key={label} to={href} style={{ fontSize: '13px', color: '#444', textDecoration: 'none', transition: 'color 0.3s' }}
                        onMouseEnter={e => e.target.style.color = '#D4A017'} onMouseLeave={e => e.target.style.color = '#444'}>
                    {label}
                  </Link>
                )
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{
        borderTop: '1px solid rgba(212,160,23,0.08)', paddingTop: '24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '12px', maxWidth: '1300px', margin: '0 auto'
      }}>
        <p style={{ fontSize: '12px', color: '#333' }}>© 2025 FRAYO Parlour. All rights reserved. Made with ❤️ in Indore.</p>
        <div style={{ fontFamily: 'serif', fontSize: '22px', color: '#D4A017' }}>ॐ</div>
        <p style={{ fontSize: '11px', color: '#333' }}>100% Vegetarian · Premium Ingredients · Bold Flavours</p>
      </div>
    </footer>
  );
}

export default Footer;