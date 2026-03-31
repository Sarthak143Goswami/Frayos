import { useState } from 'react';

function FeedbackPage() {
  const [ratings, setRatings] = useState({ overall: 0, food: 0, service: 0, value: 0, ambience: 0 });
  const [hov, setHov] = useState({ overall: 0, food: 0, service: 0, value: 0, ambience: 0 });
  const [form, setForm] = useState({ name: "", contact: "", comment: "", recommend: "" });
  const [loves, setLoves] = useState([]);
  const [improves, setImproves] = useState([]);
  const [done, setDone] = useState(false);

  const tog = (arr, set, v) => arr.includes(v) ? set(arr.filter(x => x !== v)) : set([...arr, v]);
  const submit = () => {
    if (!form.name.trim()) { alert("Please enter your name 🙏"); return; }
    setDone(true);
  };

  const rRows = [["overall", "Overall"], ["food", "Food Quality"], ["service", "Service"], ["value", "Value for Money"], ["ambience", "Ambience"]];
  const inp = { width: '100%', background: '#0D0D0D', border: '1px solid rgba(255,255,255,0.1)', color: '#F5F0E8', padding: '10px 14px', fontSize: '13px', fontFamily: "'Inter',sans-serif", outline: 'none' };

  return (
    <section style={{ padding: '100px 6%', background: '#0D0D0D', position: 'relative', overflow: 'hidden', minHeight: '100vh', paddingTop: '120px' }}>
      <div style={{ position: 'absolute', top: '-150px', right: '-150px', width: '500px', height: '500px', background: 'radial-gradient(circle,rgba(212,160,23,0.05) 0%,transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <div style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: '#D4A017', marginBottom: '12px' }}>Reviews & Feedback</div>
        <h2 style={{ fontFamily: "'Anton',sans-serif", fontSize: 'clamp(42px,6vw,80px)', letterSpacing: '3px' }}>YOUR VOICE<br />MATTERS</h2>
        <div style={{ width: '60px', height: '2px', background: '#D4A017', margin: '16px auto 0' }} />
      </div>

      <div className="fb-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', maxWidth: '1200px', margin: '0 auto', alignItems: 'start' }}>
        <div>
          <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(26px,3.5vw,42px)', fontStyle: 'italic', lineHeight: '1.3', marginBottom: '16px' }}>
            What Our <span style={{ color: '#D4A017', fontStyle: 'normal' }}>Guests Say</span>
          </h3>
          <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.8', marginBottom: '36px' }}>Every review shapes the FRAYO experience. We read every single one and act on your feedback.</p>
          {[
            { s: 5, t: "The Thecha Popcorn Fries were unreal! Never tasted anything like it in Indore. Absolutely coming back.", a: "Priya M." },
            { s: 5, t: "Makhani Poutine is genius. Like butter chicken but in fries form. The team is so warm and welcoming!", a: "Rohan K." },
            { s: 4, t: "Great vibe, great food. The SureCrisp fries really do stay crispy even 20 min later. Seriously impressed!", a: "Ankita S." }
          ].map((r, i) => (
            <div key={i} style={{ background: '#111', border: '1px solid rgba(212,160,23,0.08)', padding: '22px', marginBottom: '14px', transition: 'border-color 0.3s' }}
                 onMouseEnter={e => e.currentTarget.style.borderColor = '#D4A017'} onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(212,160,23,0.08)'}>
              <div style={{ color: '#D4A017', fontSize: '15px', marginBottom: '8px' }}>{"★".repeat(r.s)}{"☆".repeat(5 - r.s)}</div>
              <p style={{ fontSize: '13px', color: '#888', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '12px' }}>"{r.t}"</p>
              <div style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#F5F0E8', fontWeight: '600' }}>— {r.a}</div>
            </div>
          ))}
        </div>

        <div style={{ background: '#111', border: '1px solid rgba(212,160,23,0.12)', padding: '40px' }}>
          {!done ? (
            <>
              <div style={{ fontFamily: "'Anton',sans-serif", fontSize: '24px', letterSpacing: '2px', color: '#D4A017', marginBottom: '28px' }}>SHARE YOUR EXPERIENCE</div>
              <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '16px' }}>
                {[["name", "Your Name *", "e.g. Rahul Sharma"], ["contact", "Phone / Email", "Optional"]].map(([id, label, ph]) => (
                  <div key={id}>
                    <div style={{ fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: '#555', marginBottom: '6px' }}>{label}</div>
                    <input placeholder={ph} value={form[id]} onChange={e => setForm({ ...form, [id]: e.target.value })} style={inp}
                           onFocus={e => e.target.style.borderColor = '#D4A017'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: '#555', marginBottom: '14px' }}>Rate Your Experience</div>
                {rRows.map(([key, label]) => (
                  <div key={key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span style={{ fontSize: '12px', color: '#ccc', width: '120px', flexShrink: 0 }}>{label}</span>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      {[1, 2, 3, 4, 5].map(n => (
                        <span key={n} onClick={() => setRatings({ ...ratings, [key]: n })}
                              onMouseEnter={() => setHov({ ...hov, [key]: n })}
                              onMouseLeave={() => setHov({ ...hov, [key]: 0 })}
                              style={{
                                fontSize: '24px', cursor: 'pointer', color: (hov[key] || ratings[key]) >= n ? '#D4A017' : 'rgba(255,255,255,0.12)',
                                transition: 'all 0.15s', display: 'inline-block', transform: (hov[key] || ratings[key]) >= n ? 'scale(1.15)' : 'scale(1)'
                              }}>★</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: '#555', marginBottom: '10px' }}>What did you love most?</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {[["food", "🍟 Food"], ["service", "🤝 Service"], ["ambience", "✨ Ambience"], ["value", "💰 Value"], ["variety", "🌈 Variety"]].map(([v, l]) => (
                    <button key={v} onClick={() => tog(loves, setLoves, v)} style={{
                      background: loves.includes(v) ? 'rgba(212,160,23,0.2)' : 'transparent',
                      border: `1px solid ${loves.includes(v) ? '#D4A017' : 'rgba(255,255,255,0.1)'}`,
                      color: loves.includes(v) ? '#D4A017' : '#666', padding: '6px 12px', fontSize: '11px',
                      cursor: 'pointer', fontFamily: "'Inter',sans-serif", transition: 'all 0.3s'
                    }}>{l}</button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: '#555', marginBottom: '10px' }}>What should we improve?</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {[["speed", "⚡ Faster Service"], ["portions", "🍽️ Larger Portions"], ["menu", "📋 More Options"], ["pricing", "💲 Pricing"], ["seating", "🪑 More Seating"]].map(([v, l]) => (
                    <button key={v} onClick={() => tog(improves, setImproves, v)} style={{
                      background: improves.includes(v) ? 'rgba(212,160,23,0.15)' : 'transparent',
                      border: `1px solid ${improves.includes(v) ? '#D4A017' : 'rgba(255,255,255,0.08)'}`,
                      color: improves.includes(v) ? '#D4A017' : '#555', padding: '6px 12px', fontSize: '11px',
                      cursor: 'pointer', fontFamily: "'Inter',sans-serif", transition: 'all 0.3s'
                    }}>{l}</button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <div style={{ fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: '#555', marginBottom: '6px' }}>Tell Us More (Optional)</div>
                <textarea placeholder="Share your story — what made your visit special, or how we can do better..." value={form.comment}
                          onChange={e => setForm({ ...form, comment: e.target.value })} style={{ ...inp, height: '90px', resize: 'none' }}
                          onFocus={e => e.target.style.borderColor = '#D4A017'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: '#555', marginBottom: '6px' }}>Would you recommend FRAYO?</div>
                <select value={form.recommend} onChange={e => setForm({ ...form, recommend: e.target.value })} style={{ ...inp, cursor: 'pointer', color: form.recommend ? '#F5F0E8' : '#555' }}
                        onFocus={e => e.target.style.borderColor = '#D4A017'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}>
                  <option value="">Select...</option>
                  <option value="def">Definitely! 🙌</option>
                  <option value="prob">Probably yes</option>
                  <option value="maybe">Maybe</option>
                  <option value="no">Not yet</option>
                </select>
              </div>

              <button onClick={submit} style={{
                width: '100%', background: '#D4A017', color: '#080808', border: 'none', padding: '14px',
                fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: '700',
                fontFamily: "'Inter',sans-serif", cursor: 'pointer', transition: 'background 0.3s'
              }} onMouseEnter={e => e.currentTarget.style.background = '#F0C040'} onMouseLeave={e => e.currentTarget.style.background = '#D4A017'}>
                Submit Feedback 🙏
              </button>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <div style={{ fontSize: '56px', marginBottom: '20px' }}>🙏</div>
              <h3 style={{ fontFamily: "'Anton',sans-serif", fontSize: '32px', letterSpacing: '3px', color: '#D4A017', marginBottom: '12px' }}>THANK YOU!</h3>
              <p style={{ fontSize: '14px', color: '#777', lineHeight: '1.8' }}>Your feedback means the world to us.<br />We'll use it to make every FRAYO visit better than the last.</p>
              <button onClick={() => setDone(false)} style={{
                marginTop: '28px', background: 'transparent', border: '1px solid rgba(212,160,23,0.35)',
                color: '#D4A017', padding: '10px 24px', fontSize: '11px', letterSpacing: '2px',
                cursor: 'pointer', fontFamily: "'Inter',sans-serif"
              }}>Submit Another</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default FeedbackPage;