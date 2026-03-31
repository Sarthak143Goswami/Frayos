import { CS } from '../constants/menuData';

function ComingSoon() {
  return (
    <div style={{ marginTop: '100px', textAlign: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '14px' }}>
        <div style={{ width: '60px', height: '1px', background: 'rgba(212,160,23,0.25)' }} />
        <h3 style={{ fontFamily: "'Anton',sans-serif", fontSize: 'clamp(28px,4vw,48px)', letterSpacing: '4px', color: '#D4A017' }}>✨ COMING SOON</h3>
        <div style={{ width: '60px', height: '1px', background: 'rgba(212,160,23,0.25)' }} />
      </div>
      <p style={{ color: '#444', fontSize: '13px', letterSpacing: '1px', marginBottom: '40px' }}>
        Something extraordinary is in the works. Stay tuned — your taste buds will thank you.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(155px,1fr))', gap: '14px', maxWidth: '1000px', margin: '0 auto' }}>
        {CS.map((c, i) => (
          <div key={i} style={{
            background: '#0D0D0D', border: '1px dashed rgba(212,160,23,0.18)', padding: '30px 16px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
            transition: 'border-color 0.3s', cursor: 'default'
          }} onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(212,160,23,0.45)'}
             onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(212,160,23,0.18)'}>
            <div style={{ fontSize: '34px', filter: 'blur(2px) grayscale(0.3)' }}>{c.e}</div>
            <div style={{ fontFamily: "'Anton',sans-serif", fontSize: '12px', letterSpacing: '2px', color: '#444' }}>{c.n}</div>
            <div style={{ background: 'rgba(212,160,23,0.07)', border: '1px solid rgba(212,160,23,0.2)', color: '#D4A017', fontSize: '9px', letterSpacing: '3px', padding: '3px 10px' }}>SOON</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComingSoon;