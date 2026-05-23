// Variation B — Technical Brutalist
// Strict grid, monospace, terminal energy. Same warm neutral palette.

const { useState: useStateB, useEffect: useEffectB, useRef: useRefB } = React;

function VariationB() {
  const [lang, setLang] = useStateB('pt');
  const [dark, setDark] = useStateB(true); // boots dark for the terminal vibe
  const [activeFilter, setActiveFilter] = useStateB('all');
  const [hoverProject, setHoverProject] = useStateB(null);
  const [time, setTime] = useStateB('');

  // Live time in the status bar
  useEffectB(() => {
    const tick = () => {
      const d = new Date();
      const pad = (n) => String(n).padStart(2, '0');
      setTime(`${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const t = (k) => {
    const v = COPY[k];
    if (!v) return k;
    return typeof v === 'string' ? v : v[lang];
  };
  const tx = (obj) => (typeof obj === 'string' ? obj : obj[lang]);

  const palette = dark
    ? { bg: '#0f0e0a', fg: '#eae5d8', muted: '#6a6558', rule: '#26221b', card: '#15130d',
        accent: '#d6a86b', alt: '#5b8a8f' }
    : { bg: '#f0ece0', fg: '#1a1814', muted: '#7a7468', rule: '#cdc6b3', card: '#e6dec7',
        accent: '#a14a1c', alt: '#3d6a6d' };

  const filters = [
    { id: 'all', label: { pt: 'todos', en: 'all' } },
    { id: 'Fintech', label: { pt: 'fintech', en: 'fintech' } },
    { id: 'Health & Sport', label: { pt: 'saúde', en: 'health' } },
    { id: 'Sport · Social', label: { pt: 'social', en: 'social' } },
  ];

  const visibleProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    return tx({ pt: p.category.en, en: p.category.en }) === activeFilter;
  });

  return (
    <div className="vb-root" style={{ background: palette.bg, color: palette.fg }}>
      <style>{vbStyles(palette)}</style>

      {/* Top status bar — looks like an editor chrome */}
      <header className="vb-status">
        <div className="vb-status-left">
          <span className="vb-status-dot" />
          <span className="vb-status-path">~/raphael-benzecry/<b>portfolio.mdx</b></span>
        </div>
        <div className="vb-status-center">
          <span>main</span>
          <span className="vb-sep">·</span>
          <span>READY</span>
        </div>
        <div className="vb-status-right">
          <span>{time}</span>
          <span className="vb-sep">·</span>
          <span>BRT−03:00</span>
          <button
            className="vb-status-btn"
            onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
          >
            lang:{lang}
          </button>
          <button className="vb-status-btn" onClick={() => setDark(!dark)}>
            theme:{dark ? 'dark' : 'light'}
          </button>
        </div>
      </header>

      {/* Top rule */}
      <div className="vb-rule" />

      {/* Hero / shell prompt */}
      <section className="vb-hero">
        <div className="vb-hero-left">
          <pre className="vb-prompt">
{`> whoami`}
          </pre>
          <h1 className="vb-name">
            <span>Raphael</span>
            <span>Benzecry</span>
            <span className="vb-name-caret">_</span>
          </h1>
          <div className="vb-role">
            <span className="vb-role-bracket">[</span>
            <span>mobile_engineer</span>
            <span className="vb-comma">,</span>
            <span>tech_lead</span>
            <span className="vb-role-bracket">]</span>
          </div>
          <p className="vb-tagline">{t('tagline')}</p>
          <div className="vb-meta-line">
            <span>{tx(COPY.city)}</span>
            <span className="vb-sep">·</span>
            <span>{COPY.phone}</span>
            <span className="vb-sep">·</span>
            <span>{COPY.email}</span>
          </div>

          <div className="vb-hero-actions">
            <a className="vb-btn vb-btn-primary" href="#contact">
              <span>./contact</span>
              <span className="vb-key">↵</span>
            </a>
            <a className="vb-btn" href="#">
              <span>cat resume.pdf</span>
              <span className="vb-key">↓</span>
            </a>
          </div>
        </div>

        <aside className="vb-hero-right">
          <div className="vb-card">
            <div className="vb-card-head">
              <span>profile.json</span>
              <span className="vb-card-dots">● ● ●</span>
            </div>
            <div className="vb-card-body vb-json">
              <div><span className="vb-k">"name"</span>: <span className="vb-s">"{tx(COPY.name)}"</span>,</div>
              <div><span className="vb-k">"role"</span>: <span className="vb-s">"{lang === 'pt' ? 'Eng. Mobile Sênior' : 'Senior Mobile Eng.'}"</span>,</div>
              <div><span className="vb-k">"location"</span>: <span className="vb-s">"{tx(COPY.city)}"</span>,</div>
              <div><span className="vb-k">"yoe"</span>: <span className="vb-n">6</span>,</div>
              <div><span className="vb-k">"domains"</span>: [</div>
              <div className="vb-ind"><span className="vb-s">"fintech"</span>, <span className="vb-s">"logistics"</span>, <span className="vb-s">"high-scale"</span></div>
              <div>],</div>
              <div><span className="vb-k">"stack"</span>: [<span className="vb-s">"React Native"</span>, <span className="vb-s">"SwiftUI"</span>, <span className="vb-s">"KMP"</span>],</div>
              <div><span className="vb-k">"available"</span>: <span className="vb-b">true</span></div>
            </div>
          </div>

          <div className="vb-portrait">
            <img className="vb-profile-img" src="55861844.jpg" alt="Raphael Benzecry" style={{ aspectRatio: '1 / 1', width: '100%', objectFit: 'cover', objectPosition: 'center top', border: `1px solid ${palette.rule}` }} />
            <div className="vb-portrait-tags">
              <span>#available</span>
              <span>#remote-friendly</span>
              <span>#senior-mobile</span>
            </div>
          </div>
        </aside>
      </section>

      <Divider label={`/// SELECTED.WORK · ${PROJECTS.length} ITEMS`} palette={palette} />

      {/* Work */}
      <section id="work" className="vb-work">
        <div className="vb-section-head">
          <div className="vb-section-no">§ 01</div>
          <h2>{t('selectedWork')}</h2>
          <div className="vb-filters">
            {filters.map((f) => (
              <button
                key={f.id}
                className={`vb-filter ${activeFilter === f.id ? 'on' : ''}`}
                onClick={() => setActiveFilter(f.id)}
              >
                {tx(f.label)}
              </button>
            ))}
          </div>
        </div>

        <div className="vb-work-grid">
          {visibleProjects.map((p, i) => (
            <article
              key={p.id}
              className="vb-proj"
              onMouseEnter={() => setHoverProject(p.id)}
              onMouseLeave={() => setHoverProject(null)}
            >
              <div className="vb-proj-num">/{String(i + 1).padStart(3, '0')}</div>
              <div className="vb-proj-cover">
                <Stripe ratio="16 / 10" label={p.name.toLowerCase()} palette={palette} hue={p.hue} />
                <div className="vb-proj-overlay" data-active={hoverProject === p.id}>
                  <div className="vb-proj-overlay-text">$ open {p.id}.app</div>
                </div>
              </div>
              <div className="vb-proj-info">
                <div className="vb-proj-titlerow">
                  <h3>{p.name}</h3>
                  <span className="vb-proj-year">{p.year}</span>
                </div>
                <div className="vb-proj-cat">
                  <span className="vb-tag">{tx(p.category)}</span>
                  <span className="vb-tag">{tx(p.role)}</span>
                </div>
                <p>{tx(p.blurb)}</p>
                <div className="vb-proj-stack">
                  {p.stack.map((s) => (
                    <span key={s} className="vb-chip">{s}</span>
                  ))}
                </div>
                <table className="vb-metrics">
                  <tbody>
                    {p.metrics.map((m, k) => (
                      <tr key={k}>
                        <td>{tx(m.k)}</td>
                        <td className="vb-metric-dots" />
                        <td className="vb-metric-v">{m.v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <a className="vb-proj-link" href="#">
                  → read_case_study()
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Divider label="/// ABOUT.ME" palette={palette} />

      {/* About */}
      <section id="about" className="vb-about">
        <div className="vb-section-head">
          <div className="vb-section-no">§ 02</div>
          <h2>{t('about')}</h2>
        </div>
        <div className="vb-about-grid">
          <div className="vb-about-text">
            <p className="vb-about-lead">
              {lang === 'pt'
                ? 'Engenheiro mobile que pensa como product owner — e product owner que código pra entender o usuário.'
                : 'Mobile engineer who thinks like a product owner — and product owner who codes to understand the user.'}
            </p>
            <p>{t('aboutP1')}</p>
            <p>{t('aboutP2')}</p>
          </div>
          <div className="vb-about-side">
            <img className="vb-profile-img" src="55861844.jpg" alt="Raphael Benzecry" style={{ aspectRatio: '3 / 4', width: '100%', objectFit: 'cover', objectPosition: 'center top', border: `1px solid ${palette.rule}` }} />
            <div className="vb-about-facts">
              <div><span>NOW</span><span>{lang === 'pt' ? '@ PicPay · módulo Business Cards' : '@ PicPay · Business Cards module'}</span></div>
              <div><span>FAV</span><span>Muay Thai · KMP · SwiftUI</span></div>
              <div><span>LIVES</span><span>{tx(COPY.city)}</span></div>
              <div><span>YEARS</span><span>6+ {lang === 'pt' ? 'anos em mobile' : 'years in mobile'}</span></div>
            </div>
          </div>
        </div>

        <div className="vb-skills">
          <div className="vb-skills-head">
            <span>// stack.ts</span>
            <span>{lang === 'pt' ? 'ferramentas que uso semanalmente' : 'tools I use weekly'}</span>
          </div>
          <div className="vb-skills-grid">
            {SKILLS.map((g) => (
              <div key={tx(g.group)} className="vb-skill-block">
                <div className="vb-skill-head">{tx(g.group).toLowerCase()}</div>
                <ul>
                  {g.items.map((it, k) => (
                    <li key={k}>
                      <span className="vb-skill-dash">─</span>
                      {typeof it === 'string' ? it : tx(it)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider label="/// CAREER.LOG" palette={palette} />

      {/* Experience */}
      <section id="experience" className="vb-exp">
        <div className="vb-section-head">
          <div className="vb-section-no">§ 03</div>
          <h2>{t('experience')}</h2>
        </div>

        <div className="vb-exp-grid">
          {EXPERIENCE.map((e, i) => (
            <div key={i} className="vb-exp-row">
              <div className="vb-exp-period">
                <span className="vb-exp-bar">│</span>
                <span>{tx(e.periodI18n)}</span>
              </div>
              <div className="vb-exp-co">
                <h4>{e.company}</h4>
                <div className="vb-exp-role">{tx(e.role)} · {e.location}</div>
              </div>
              <ul className="vb-exp-bullets">
                {tx(e.bullets).map((b, k) => (
                  <li key={k}>
                    <span className="vb-exp-glyph">▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Divider label="/// EDUCATION + LANGUAGES" palette={palette} />

      {/* Education + Languages */}
      <section id="education" className="vb-edu">
        <div className="vb-edu-grid">
          <div className="vb-edu-col">
            <div className="vb-section-head vb-section-head-inline">
              <div className="vb-section-no">§ 04</div>
              <h2>{t('education')}</h2>
            </div>
            <div className="vb-edu-list">
              {EDUCATION.map((e, i) => (
                <div key={i} className="vb-edu-row">
                  <div className="vb-edu-period">
                    <span className="vb-exp-bar">│</span>
                    <span>{e.period}</span>
                  </div>
                  <div>
                    <h4>{e.school}</h4>
                    <div className="vb-edu-meta">{tx(e.degree)} · {e.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="vb-edu-col">
            <div className="vb-section-head vb-section-head-inline">
              <div className="vb-section-no">§ 05</div>
              <h2>{t('languages')}</h2>
            </div>
            <div className="vb-lang-list">
              {LANGUAGES.map((l, i) => (
                <div key={i} className="vb-lang-row">
                  <div className="vb-lang-info">
                    <h4>{tx(l.lang)}</h4>
                    <div className="vb-lang-level">{tx(l.level)}</div>
                  </div>
                  <div className="vb-lang-dots">
                    {[1,2,3,4,5].map((n) => (
                      <span key={n} className={n <= l.dots ? 'on' : ''} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider label="/// CONTACT.SH" palette={palette} />

      {/* Contact */}
      <section id="contact" className="vb-contact">
        <div className="vb-section-head">
          <div className="vb-section-no">§ 06</div>
          <h2>{t('contact')}</h2>
        </div>

        <div className="vb-terminal">
          <div className="vb-term-head">
            <span className="vb-card-dots">● ● ●</span>
            <span>raphael@portfolio: ~ — zsh — 80×24</span>
            <span />
          </div>
          <div className="vb-term-body">
            <div><span className="vb-term-prompt">raphael@portfolio</span> <span className="vb-term-tilde">~</span> $ cat /etc/contacts</div>
            <div className="vb-term-out">
              {`{ "email": "${COPY.email}", "phone": "${COPY.phone}", "linkedin": "${COPY.linkedin}", "github": "${COPY.github}" }`}
            </div>
            <div><span className="vb-term-prompt">raphael@portfolio</span> <span className="vb-term-tilde">~</span> $ echo $STATUS</div>
            <div className="vb-term-out">{t('contactBlurb')}</div>
            <div className="vb-term-line">
              <span className="vb-term-prompt">raphael@portfolio</span> <span className="vb-term-tilde">~</span> $ <span className="vb-term-cursor">▮</span>
            </div>
          </div>
        </div>

        <div className="vb-contact-grid">
          <a className="vb-contact-card vb-cc-primary" href={`mailto:${COPY.email}`}>
            <div className="vb-cc-label">// email</div>
            <div className="vb-cc-value">{COPY.email}</div>
            <div className="vb-cc-arrow">↗</div>
          </a>
          <a className="vb-contact-card" href={`tel:${COPY.phone.replace(/\s/g,'')}`}>
            <div className="vb-cc-label">// phone</div>
            <div className="vb-cc-value">{COPY.phone}</div>
            <div className="vb-cc-arrow">↗</div>
          </a>
          <a className="vb-contact-card" href="#">
            <div className="vb-cc-label">// linkedin</div>
            <div className="vb-cc-value">{COPY.linkedin}</div>
            <div className="vb-cc-arrow">↗</div>
          </a>
          <a className="vb-contact-card" href="#">
            <div className="vb-cc-label">// github</div>
            <div className="vb-cc-value">{COPY.github}</div>
            <div className="vb-cc-arrow">↗</div>
          </a>
          <a className="vb-contact-card vb-cc-cv" href="#">
            <div className="vb-cc-label">// resume.pdf</div>
            <div className="vb-cc-value">{t('resume')}</div>
            <div className="vb-cc-arrow">↓</div>
          </a>
        </div>

        <footer className="vb-foot">
          <span>© 2026 raphael benzecry</span>
          <span>build: 2.4.0+sha.a3f5e</span>
          <span>last_commit: 2026-05-13</span>
          <span>{lang === 'pt' ? 'feito à mão em campinas' : 'handcrafted in campinas'}</span>
        </footer>
      </section>
    </div>
  );
}

function Divider({ label, palette }) {
  return (
    <div className="vb-divider">
      <div className="vb-divider-rule" />
      <span className="vb-divider-label">{label}</span>
      <div className="vb-divider-rule" />
    </div>
  );
}

function Stripe({ ratio, label, palette, hue = 30 }) {
  const isDark = palette.bg.startsWith('#0') || palette.bg.startsWith('#1');
  const a = isDark ? `oklch(0.32 0.05 ${hue})` : `oklch(0.85 0.04 ${hue})`;
  const b = isDark ? `oklch(0.26 0.045 ${hue})` : `oklch(0.92 0.03 ${hue})`;
  return (
    <div
      className="vb-stripe"
      style={{
        aspectRatio: ratio,
        background: `repeating-linear-gradient(45deg, ${a} 0 10px, ${b} 10px 20px)`,
      }}
    >
      <span className="vb-stripe-tag">[ {label} ]</span>
      <span className="vb-stripe-cross">+</span>
      <span className="vb-stripe-cross vb-tr">+</span>
      <span className="vb-stripe-cross vb-bl">+</span>
      <span className="vb-stripe-cross vb-br">+</span>
    </div>
  );
}

function vbStyles(p) {
  return `
    .vb-root{ font-family:'JetBrains Mono','IBM Plex Mono', monospace; font-size:14px; line-height:1.55;
      min-height:100%; padding:0; transition: background .3s, color .3s; }
    .vb-root *{ box-sizing:border-box; }
    .vb-rule{ height:1px; background:${p.rule}; }

    /* Status bar */
    .vb-status{ display:flex; justify-content:space-between; align-items:center; padding:10px 24px;
      font-size:11px; letter-spacing:.04em; border-bottom:1px solid ${p.rule}; background:${p.bg};
      position:sticky; top:0; z-index:5; }
    .vb-status-left, .vb-status-center, .vb-status-right{ display:flex; align-items:center; gap:10px; color:${p.muted}; }
    .vb-status-path b{ color:${p.fg}; font-weight:600; }
    .vb-status-dot{ width:8px; height:8px; border-radius:50%; background:${p.accent};
      box-shadow:0 0 0 3px ${p.accent}22; }
    .vb-sep{ opacity:.5; }
    .vb-status-btn{ background:transparent; border:1px solid ${p.rule}; color:${p.fg}; padding:3px 8px;
      font:inherit; font-size:11px; cursor:pointer; border-radius:3px; transition:background .15s; }
    .vb-status-btn:hover{ background:${p.card}; }

    /* Hero */
    .vb-hero{ display:grid; grid-template-columns:1.2fr 1fr; gap:48px; padding:64px 64px 80px;
      border-bottom:1px solid ${p.rule}; }
    .vb-hero-left{ display:flex; flex-direction:column; gap:24px; }
    .vb-prompt{ font-family:inherit; font-size:13px; color:${p.muted}; margin:0; }
    .vb-name{ font-family:'JetBrains Mono', monospace; font-size:120px; line-height:.92; margin:0;
      font-weight:700; letter-spacing:-.03em; display:flex; flex-direction:column; }
    .vb-name span{ display:block; }
    .vb-name-caret{ display:inline-block !important; color:${p.accent}; animation:vbBlink 1s steps(2,end) infinite;
      width:.5em; height:.85em; line-height:1; }
    @keyframes vbBlink{ 50%{ opacity:0; } }
    .vb-role{ font-size:18px; color:${p.muted}; letter-spacing:.02em; display:flex; gap:8px; flex-wrap:wrap; }
    .vb-role-bracket{ color:${p.accent}; }
    .vb-comma{ color:${p.muted}; }
    .vb-tagline{ font-size:18px; line-height:1.5; max-width:50ch; margin:8px 0 0; color:${p.fg}; opacity:.9; }
    .vb-hero-actions{ display:flex; gap:12px; margin-top:16px; }
    .vb-btn{ display:inline-flex; align-items:center; gap:12px; padding:14px 18px;
      border:1px solid ${p.fg}; color:${p.fg}; text-decoration:none; font:inherit; font-size:13px;
      border-radius:0; transition:transform .15s, background .15s; }
    .vb-btn:hover{ transform:translate(-2px, -2px); box-shadow:4px 4px 0 ${p.fg}; }
    .vb-btn-primary{ background:${p.fg}; color:${p.bg}; }
    .vb-btn-primary:hover{ box-shadow:4px 4px 0 ${p.accent}; }
    .vb-key{ font-size:11px; opacity:.7; padding:2px 6px; border:1px solid currentColor; border-radius:3px; }

    /* Hero right */
    .vb-hero-right{ display:flex; flex-direction:column; gap:24px; }
    .vb-card{ border:1px solid ${p.rule}; border-radius:6px; overflow:hidden; background:${p.card}; }
    .vb-card-head{ display:flex; justify-content:space-between; align-items:center; padding:8px 14px;
      border-bottom:1px solid ${p.rule}; font-size:11px; color:${p.muted}; }
    .vb-card-dots{ letter-spacing:.2em; opacity:.5; }
    .vb-card-body{ padding:18px; font-size:13px; line-height:1.7; }
    .vb-json .vb-k{ color:${p.alt}; }
    .vb-json .vb-s{ color:${p.accent}; }
    .vb-json .vb-n, .vb-json .vb-b{ color:${p.fg}; }
    .vb-ind{ padding-left:18px; }

    .vb-portrait{ position:relative; }
    .vb-portrait-tags{ display:flex; gap:8px; margin-top:12px; flex-wrap:wrap; font-size:11px; color:${p.muted}; }

    /* Divider */
    .vb-divider{ display:flex; align-items:center; gap:16px; padding:24px 64px; }
    .vb-divider-rule{ flex:1; height:1px; background:${p.rule}; }
    .vb-divider-label{ font-size:11px; letter-spacing:.15em; color:${p.muted}; }

    /* Section head */
    .vb-section-head{ display:flex; align-items:baseline; gap:24px; padding:0 64px; margin-bottom:48px;
      flex-wrap:wrap; }
    .vb-section-no{ font-size:13px; color:${p.muted}; letter-spacing:.08em; }
    .vb-section-head h2{ font-size:42px; margin:0; font-weight:700; letter-spacing:-.02em; }

    .vb-filters{ display:flex; gap:6px; margin-left:auto; }
    .vb-filter{ background:transparent; border:1px solid ${p.rule}; color:${p.muted}; padding:6px 12px;
      font:inherit; font-size:12px; cursor:pointer; border-radius:3px; transition:all .15s; }
    .vb-filter:hover{ border-color:${p.fg}; color:${p.fg}; }
    .vb-filter.on{ background:${p.fg}; color:${p.bg}; border-color:${p.fg}; }

    /* Work */
    .vb-work{ padding:32px 64px 80px; }
    .vb-work-grid{ display:flex; flex-direction:column; gap:32px; }
    .vb-proj{ display:grid; grid-template-columns:60px 1.4fr 1fr; gap:32px; padding:32px;
      border:1px solid ${p.rule}; background:${p.card}; transition:border-color .2s; align-items:start; }
    .vb-proj:hover{ border-color:${p.fg}; }
    .vb-proj-num{ font-size:13px; color:${p.muted}; padding-top:4px; }
    .vb-proj-cover{ position:relative; overflow:hidden; }
    .vb-proj-overlay{ position:absolute; inset:0; background:${p.fg}; color:${p.bg}; display:flex;
      align-items:center; justify-content:center; opacity:0; transition:opacity .25s; font-size:13px; }
    .vb-proj-overlay[data-active='true']{ opacity:.95; }
    .vb-proj-info h3{ font-size:32px; margin:0 0 4px; font-weight:700; letter-spacing:-.02em; line-height:1; }
    .vb-proj-titlerow{ display:flex; align-items:baseline; justify-content:space-between; gap:16px; margin-bottom:12px; }
    .vb-proj-year{ font-size:12px; color:${p.muted}; }
    .vb-proj-cat{ display:flex; gap:6px; margin-bottom:16px; }
    .vb-tag{ font-size:11px; padding:3px 8px; border:1px solid ${p.rule}; color:${p.muted}; }
    .vb-proj-info p{ font-size:14px; line-height:1.6; margin:0 0 18px; opacity:.9; }
    .vb-proj-stack{ display:flex; gap:6px; margin-bottom:18px; flex-wrap:wrap; }
    .vb-chip{ font-size:11px; padding:3px 10px; background:${p.bg}; border:1px solid ${p.rule}; }
    .vb-metrics{ width:100%; border-collapse:collapse; margin-bottom:20px; font-size:12px; }
    .vb-metrics td{ padding:6px 0; }
    .vb-metrics tr{ border-bottom:1px dotted ${p.rule}; }
    .vb-metrics tr:last-child{ border-bottom:0; }
    .vb-metric-dots{ width:60%; opacity:.3; overflow:hidden; white-space:nowrap; color:${p.muted};
      background: radial-gradient(circle at 1px 50%, ${p.muted} .8px, transparent 1px) repeat-x;
      background-size:5px 100%; }
    .vb-metric-v{ text-align:right; color:${p.fg}; font-weight:600; }
    .vb-proj-link{ font-size:13px; color:${p.accent}; text-decoration:none; border-bottom:1px solid ${p.accent}; padding-bottom:2px; }
    .vb-proj-link:hover{ color:${p.fg}; border-color:${p.fg}; }

    /* About */
    .vb-about{ padding:32px 64px 80px; }
    .vb-about-grid{ display:grid; grid-template-columns:1.6fr 1fr; gap:48px; margin-bottom:64px; }
    .vb-about-lead{ font-size:24px; line-height:1.4; margin:0 0 24px; letter-spacing:-.01em; }
    .vb-about-text p{ font-size:14px; line-height:1.7; margin:0 0 16px; opacity:.9; max-width:60ch; }
    .vb-about-side{ display:flex; flex-direction:column; gap:16px; }
    .vb-about-facts{ display:flex; flex-direction:column; }
    .vb-about-facts > div{ display:grid; grid-template-columns:60px 1fr; padding:10px 0;
      border-bottom:1px dashed ${p.rule}; font-size:12px; gap:12px; }
    .vb-about-facts > div:last-child{ border-bottom:0; }
    .vb-about-facts span:first-child{ color:${p.accent}; letter-spacing:.1em; }

    .vb-skills{ border-top:1px solid ${p.rule}; padding-top:32px; }
    .vb-skills-head{ display:flex; justify-content:space-between; font-size:12px; color:${p.muted};
      margin-bottom:24px; }
    .vb-skills-grid{ display:grid; grid-template-columns:repeat(4, 1fr); gap:32px; }
    .vb-skill-block .vb-skill-head{ font-size:11px; color:${p.accent}; letter-spacing:.1em;
      padding-bottom:8px; border-bottom:1px solid ${p.rule}; margin-bottom:12px; text-transform:uppercase; }
    .vb-skill-block ul{ list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:6px; }
    .vb-skill-block li{ font-size:13px; display:flex; gap:8px; }
    .vb-skill-dash{ color:${p.muted}; }

    /* Experience */
    .vb-exp{ padding:32px 64px 80px; }
    .vb-exp-grid{ display:flex; flex-direction:column; }
    .vb-exp-row{ display:grid; grid-template-columns:180px 240px 1fr; gap:32px; padding:24px 0;
      border-top:1px solid ${p.rule}; align-items:start; }
    .vb-exp-row:last-child{ border-bottom:1px solid ${p.rule}; }
    .vb-exp-period{ display:flex; gap:10px; font-size:13px; color:${p.muted}; }
    .vb-exp-bar{ color:${p.accent}; }
    .vb-exp-co h4{ font-size:18px; margin:0 0 4px; font-weight:700; letter-spacing:-.01em; }
    .vb-exp-role{ font-size:12px; color:${p.muted}; }
    .vb-exp-bullets{ list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:8px; }
    .vb-exp-bullets li{ font-size:13px; line-height:1.6; display:grid; grid-template-columns:18px 1fr; gap:8px; }
    .vb-exp-glyph{ color:${p.accent}; }

    /* Contact */
    .vb-contact{ padding:32px 64px 64px; }
    .vb-terminal{ border:1px solid ${p.rule}; background:${p.card}; margin-bottom:32px; font-size:13px; }
    .vb-term-head{ display:grid; grid-template-columns:1fr 1fr 1fr; padding:8px 14px;
      border-bottom:1px solid ${p.rule}; font-size:11px; color:${p.muted}; }
    .vb-term-head > :nth-child(2){ text-align:center; }
    .vb-term-body{ padding:18px; line-height:1.8; }
    .vb-term-prompt{ color:${p.alt}; }
    .vb-term-tilde{ color:${p.accent}; }
    .vb-term-out{ color:${p.fg}; padding-left:16px; opacity:.85; }
    .vb-term-cursor{ color:${p.accent}; animation:vbBlink 1s steps(2,end) infinite; }
    .vb-term-line{ margin-top:4px; }

    /* Meta line under tagline */
    .vb-meta-line{ display:flex; gap:12px; flex-wrap:wrap; font-size:12px; color:${p.muted}; margin-top:8px; }
    .vb-meta-line .vb-sep{ opacity:.4; }

    /* Education + Languages */
    .vb-edu{ padding:32px 64px 80px; }
    .vb-edu-grid{ display:grid; grid-template-columns:1fr 1fr; gap:64px; }
    .vb-section-head-inline{ padding:0; margin-bottom:24px; }
    .vb-edu-list, .vb-lang-list{ display:flex; flex-direction:column; }
    .vb-edu-row, .vb-lang-row{ display:grid; grid-template-columns:140px 1fr; gap:24px; padding:20px 0;
      border-top:1px solid ${p.rule}; align-items:center; }
    .vb-edu-row:last-child, .vb-lang-row:last-child{ border-bottom:1px solid ${p.rule}; }
    .vb-edu-row h4, .vb-lang-row h4{ font-size:16px; margin:0 0 4px; font-weight:700; letter-spacing:-.01em; }
    .vb-edu-period{ display:flex; gap:10px; font-size:12px; color:${p.muted}; }
    .vb-edu-meta, .vb-lang-level{ font-size:12px; color:${p.muted}; }
    .vb-lang-row{ grid-template-columns:1fr auto; }
    .vb-lang-dots{ display:flex; gap:5px; }
    .vb-lang-dots span{ width:9px; height:9px; border-radius:50%; border:1px solid ${p.muted}; }
    .vb-lang-dots span.on{ background:${p.accent}; border-color:${p.accent}; }

    .vb-contact-grid{ display:grid; grid-template-columns:repeat(5, 1fr); gap:8px; }
    .vb-contact-card{ position:relative; padding:24px; border:1px solid ${p.rule}; background:${p.card};
      text-decoration:none; color:${p.fg}; display:flex; flex-direction:column; gap:8px; min-height:130px;
      transition:transform .15s, border-color .15s; }
    .vb-contact-card:hover{ transform:translate(-2px, -2px); box-shadow:4px 4px 0 ${p.fg}; border-color:${p.fg}; }
    .vb-cc-label{ font-size:11px; color:${p.muted}; }
    .vb-cc-value{ font-size:18px; margin-top:auto; font-weight:600; letter-spacing:-.01em; }
    .vb-cc-arrow{ position:absolute; top:18px; right:18px; }
    .vb-cc-primary{ background:${p.fg}; color:${p.bg}; }
    .vb-cc-primary .vb-cc-label{ color:${p.bg}; opacity:.7; }
    .vb-cc-cv{ background:${p.accent}; color:#fff; border-color:${p.accent}; }
    .vb-cc-cv .vb-cc-label{ color:#fff; opacity:.7; }
    .vb-cc-cv:hover{ box-shadow:4px 4px 0 ${p.accent}; }

    .vb-foot{ display:flex; justify-content:space-between; gap:16px; padding:32px 0 0;
      margin-top:48px; border-top:1px solid ${p.rule}; font-size:11px; color:${p.muted}; flex-wrap:wrap; }

    /* Stripe placeholder */
    .vb-stripe{ position:relative; width:100%; border:1px solid ${p.rule}; overflow:hidden; }
    .vb-stripe-tag{ position:absolute; bottom:8px; left:8px; font-size:10px; color:${p.fg};
      background:${p.bg}; padding:3px 6px; border:1px solid ${p.rule}; letter-spacing:.04em; }
    .vb-stripe-cross{ position:absolute; top:-7px; left:-7px; font-size:14px; color:${p.fg};
      background:${p.bg}; width:14px; height:14px; display:flex; align-items:center; justify-content:center; line-height:1; }
    .vb-stripe-cross.vb-tr{ top:-7px; left:auto; right:-7px; }
    .vb-stripe-cross.vb-bl{ top:auto; bottom:-7px; left:-7px; }
    .vb-stripe-cross.vb-br{ top:auto; bottom:-7px; left:auto; right:-7px; }
  `;
}

window.VariationB = VariationB;
