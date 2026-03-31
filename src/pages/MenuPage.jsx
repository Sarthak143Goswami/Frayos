import { useState } from 'react';
import { MENU } from '../constants/menuData';
import MenuCard from '../components/MenuCard';
import ComingSoon from '../components/ComingSoon';

function MenuPage() {
  const [tab, setTab] = useState('fries');
  const tabs = [
    { id: 'fries', l: '🍟 Fries' },
    { id: 'indian', l: '🇮🇳 Indian' },
    { id: 'loaded', l: '🧀 Loaded' },
    { id: 'global', l: '🌍 Global' }
  ];

  return (
    <section style={{ padding: '100px 6%', background: '#080808', minHeight: '100vh', paddingTop: '120px' }}>
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <div style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: '#D4A017', marginBottom: '12px' }}>Our Menu</div>
        <h2 style={{ fontFamily: "'Anton',sans-serif", fontSize: 'clamp(42px,6vw,80px)', letterSpacing: '3px' }}>WHAT'S COOKING</h2>
        <p style={{ fontSize: '14px', color: '#555', marginTop: '12px', lineHeight: '1.7', maxWidth: '480px', margin: '12px auto 0' }}>
          Handcrafted signatures using premium ingredients. Every item a reason to return.
        </p>
        <div style={{ width: '60px', height: '2px', background: '#D4A017', margin: '20px auto 0' }} />
      </div>

      <div style={{ display: 'flex', gap: '4px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            background: tab === t.id ? '#D4A017' : 'transparent',
            border: `1px solid ${tab === t.id ? '#D4A017' : 'rgba(255,255,255,0.1)'}`,
            color: tab === t.id ? '#080808' : '#777', padding: '10px 28px', fontSize: '11px',
            letterSpacing: '2px', textTransform: 'uppercase', cursor: 'pointer',
            fontFamily: "'Inter',sans-serif", fontWeight: '600', transition: 'all 0.3s'
          }}>{t.l}</button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '24px', maxWidth: '1300px', margin: '0 auto' }}>
        {MENU[tab].map((item, i) => <MenuCard key={i} item={item} />)}
      </div>

      <ComingSoon />
    </section>
  );
}

export default MenuPage;