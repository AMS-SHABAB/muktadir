:root {
  --font-main: 'Unbounded', 'Roboto', Arial, sans-serif;
  --color-bg: #0a0a0a;
  --color-fg: #fff;
  --bw-border: 2px solid #fff;
  --transition: 0.4s cubic-bezier(.77,0,.18,1);
}

html, body {
  margin: 0;
  padding: 0;
  font-family: var(--font-main);
  background: var(--color-bg);
  color: var(--color-fg);
  min-height: 100vh;
  overflow-x: hidden;
}

#noise-bg {
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 0;
  background: url('../images/noise.png'), #000;
  opacity: 0.15;
  mix-blend-mode: screen;
  animation: bwNoise 2.5s steps(10) infinite;
}
@keyframes bwNoise {
  0% { filter: grayscale(1) brightness(1);}
  100% { filter: grayscale(1) brightness(1.1);}
}

/* HEADER (Hero) */
.hero {
  position: relative;
  min-height: 72vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: stretch;
  background: #111;
  overflow: hidden;
  padding-bottom: 3em;
}
.hero-bg {
  position: absolute;
  inset: 0;
  background: url('../images/hero-demo.jpg') center/cover no-repeat, #111;
  opacity: 0.83;
  filter: grayscale(1) blur(1px) contrast(1.2);
  z-index: 1;
  animation: heroParallax 12s ease-in-out infinite alternate;
}
@keyframes heroParallax {
  0% { background-position: 50% 60%;}
  100% { background-position: 50% 45%;}
}
.hero-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3vw;
  margin-top: 8vh;
}
.hero-socials {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.1em;
}
.hero-socials a img {
  width: 28px; height: 28px; filter: grayscale(1) brightness(1.2);
  opacity: 0.6;
  transition: filter 0.2s, opacity 0.2s, transform 0.2s;
}
.hero-socials a:hover img {
  filter: invert(1) brightness(2);
  opacity: 1;
  transform: scale(1.2) rotate(-8deg);
}
.hero-text {
  text-align: left;
  max-width: 600px;
  padding-left: 2vw;
}
.hero-title {
  font-size: 3.5rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 1.05;
  color: #fff;
  margin: 0 0 0.2em 0;
  text-shadow: 0 0 14px #fff4, 0 0 2px #fff;
}
.hero-subtitle {
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  color: #fff;
  margin: 0 0 0.8em 0;
  text-shadow: 0 0 8px #fff2;
}
.hero-subtitle .paintbrush {
  font-family: serif;
  letter-spacing: 0.16em;
  border-bottom: 2px solid #fff;
  padding: 0 0.2em;
  font-style: italic;
  font-weight: 700;
}
.hero-desc {
  font-size: 1.1rem;
  opacity: 0.8;
  margin: 0.7em 0 0.6em 0;
  letter-spacing: 0.11em;
}

/* NAVBAR */
#navbar {
  position: absolute; top: 0; left: 0; width: 100%;
  display: flex; align-items: center; justify-content: space-between;
  background: rgba(0,0,0,0.75);
  border-bottom: var(--bw-border);
  padding: 0.8em 2vw;
  z-index: 10;
}
.nav-logo {
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.15em;
}
.nav-menu {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0; padding: 0;
}
.nav-menu li a {
  color: #fff;
  text-decoration: none;
  font-weight: 400;
  font-size: 1.12em;
  letter-spacing: 0.08em;
  border-bottom: 2px solid transparent;
  transition: border-bottom var(--transition), color var(--transition), background 0.2s;
  padding: 0.1em 0.4em;
  border-radius: 4px;
}
.nav-menu li a:hover, .nav-menu li a:focus {
  color: #000;
  background: #fff;
  border-bottom: 2px solid #000;
  box-shadow: 0 0 16px #fff2, 0 0 6px #fff;
}
#menu-toggle { display: none; }
/* Hamburger for mobile is styled below */

/* EVENTS */
.events-section {
  background: #0a0a0a;
  padding: 3em 0 2em 0;
}
.events-section h2 {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 2em;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 900;
}
.events-timeline {
  display: flex;
  flex-direction: row;
  gap: 2em;
  justify-content: center;
  flex-wrap: wrap;
}
.event-card {
  background: #111;
  border: 2px solid #fff;
  border-radius: 13px;
  padding: 1.2em 2em;
  min-width: 260px; max-width: 310px;
  text-align: left;
  box-shadow: 0 3px 18px #fff1;
  filter: grayscale(1);
  transition: background 0.3s, color 0.3s, filter 0.3s, box-shadow 0.3s;
  position: relative;
}
.event-card:hover {
  background: #fff;
  color: #000;
  filter: none;
  box-shadow: 0 6px 28px #fff8, 0 2px 10px #fff4;
  z-index: 2;
}
.event-date {
  font-size: 1.08em;
  font-weight: 700;
  margin-bottom: 0.3em;
  letter-spacing: 0.08em;
}
.event-title {
  font-size: 1.12em;
  font-weight: 700;
  margin-bottom: 0.2em;
}
.event-location {
  font-size: 1em;
  margin-bottom: 0.7em;
  font-style: italic;
  opacity: 0.8;
}
.event-doodle img {
  width: 42px;
  height: auto;
  opacity: 0.6;
  filter: grayscale(1);
  position: absolute;
  right: 1em; bottom: 1em;
  transition: transform 0.3s;
}
.event-card:hover .event-doodle img {
  opacity: 1;
  transform: scale(1.15) rotate(-7deg);
}

/* NEWS BANNER */
.news-banner {
  width: 100vw;
  min-height: 32px;
  margin: 0 auto;
  padding: 0.3em 0;
  background: #000;
  border-bottom: 2px solid #fff;
  font-weight: 700;
  letter-spacing: 0.08em;
  overflow: hidden;
}
.ticker {
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  font-size: 1.1rem;
  color: #fff;
  animation: tickerMove 24s linear infinite;
}
@keyframes tickerMove {
  0% { transform: translateX(0);}
  100% { transform: translateX(-60%);}
}

/* PORTFOLIO SECTIONS */
.portfolio-section {
  background: #0a0a0a;
  padding: 3em 0 2em 0;
}
.portfolio-section h2 {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 2em;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 900;
}

/* ART PORTFOLIO */
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5em;
  justify-items: center;
}
.art-card {
  background: #111;
  border: 2px solid #fff;
  border-radius: 15px;
  max-width: 350px;
  box-shadow: 0 2px 20px #fff2;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  filter: grayscale(1);
  position: relative;
  transition: transform 0.4s, box-shadow 0.4s, background 0.3s, border 0.3s, filter 0.3s;
}
.art-card img {
  width: 100%;
  height: 210px;
  object-fit: cover;
  filter: grayscale(1);
  transition: filter 0.3s, box-shadow 0.3s;
}
.art-card:hover img, .art-card:focus img {
  filter: invert(1) grayscale(0.1);
  box-shadow: 0 0 16px #fff;
}
.art-meta {
  padding: 1.2em 1.2em 0.3em 1.2em;
}
.art-title {
  font-size: 1.15em;
  font-weight: 800;
  letter-spacing: 0.1em;
  margin-bottom: 0.2em;
}
.art-date, .art-tags {
  font-size: 1em;
  color: #ccc;
  font-weight: 400;
}
.art-overlay {
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,0.98);
  color: #111;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.4s;
  padding: 2em 1em;
  text-align: center;
}
.art-card:hover .art-overlay, .art-card:focus .art-overlay {
  opacity: 1;
}
.view-details {
  display: inline-block;
  margin-top: 1em;
  padding: 0.6em 2em;
  border: 2px solid #111;
  background: transparent;
  color: #111;
  font-size: 1.05em;
  font-weight: 700;
  border-radius: 7px;
  letter-spacing: 0.09em;
  transition: background 0.2s, color 0.2s;
}
.view-details:hover {
  background: #111;
  color: #fff;
}

/* WRITING PORTFOLIO */
.writing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5em;
  justify-items: center;
}
.writing-card {
  background: #111;
  border: 2px solid #fff;
  border-radius: 13px;
  box-shadow: 0 3px 18px #fff2;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 350px;
  overflow: hidden;
  filter: grayscale(1);
  transition: transform 0.4s, box-shadow 0.4s, background 0.3s, border 0.3s, filter 0.3s;
  position: relative;
}
.writing-card img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  filter: grayscale(1);
  transition: filter 0.3s, box-shadow 0.3s;
}
.writing-card:hover img, .writing-card:focus img {
  filter: invert(1) grayscale(0.1);
  box-shadow: 0 0 12px #fff;
}
.writing-meta {
  padding: 1.1em 1.2em 1em 1.2em;
  display: flex;
  flex-direction: column;
  gap: 0.4em;
}
.writing-title {
  font-size: 1.12em;
  font-weight: 900;
  letter-spacing: 0.1em;
  margin-bottom: 0.1em;
}
.writing-type, .writing-date {
  font-size: 1em;
  color: #bbb;
}
.reading-link {
  margin-top: 0.5em;
  color: #fff;
  font-weight: 700;
  text-decoration: underline;
  font-size: 1.04em;
  letter-spacing: 0.04em;
  transition: color 0.2s, background 0.2s, border-radius 0.2s;
  border-radius: 3px;
  padding: 0.05em 0.2em;
  align-self: flex-start;
}
.reading-link:hover, .reading-link:focus {
  background: #fff;
  color: #000;
  border-radius: 6px;
}

/* BOOKING SECTION */
.booking-section {
  background: #111;
  padding: 3em 0 2em 0;
}
.booking-section h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1.7em;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  font-weight: 800;
}
.booking-form {
  display: flex;
  flex-direction: column;
  gap: 1em;
  max-width: 400px;
  margin: 0 auto;
}
.booking-form input,
.booking-form textarea {
  background: #0a0a0a;
  border: 2px solid #fff;
  border-radius: 7px;
  color: #fff;
  font-family: var(--font-main);
  padding: 0.7em 1em;
  font-size: 1.05em;
  resize: vertical;
  transition: background 0.3s, color 0.3s, border 0.3s;
}
.booking-form input:focus,
.booking-form textarea:focus {
  background: #fff;
  color: #000;
  border-color: #000;
}
.booking-form button {
  background: #fff;
  color: #000;
  border: none;
  border-radius: 8px;
  padding: 0.8em 0;
  font-size: 1.1em;
  font-weight: 800;
  letter-spacing: 0.05em;
  cursor: pointer;
  box-shadow: 0 2px 12px #fff3;
  transition: background var(--transition), color var(--transition), box-shadow var(--transition);
}
.booking-form button:hover {
  background: #000;
  color: #fff;
  box-shadow: 0 4px 24px #fff8;
}

/* FOOTER */
footer {
  background: #0a0a0a;
  border-top: 2px solid #fff;
  text-align: center;
  padding: 2em 0 1em 0;
}
.footer-socials {
  margin-bottom: 1.2em;
  display: flex;
  justify-content: center;
  gap: 2em;
}
.footer-socials a img {
  width: 38px;
  height: 38px;
  opacity: 0.8;
  filter: grayscale(1) brightness(1.2);
  transition: filter 0.2s, opacity 0.2s, transform 0.2s;
}
.footer-socials a:hover img {
  filter: invert(1) brightness(2);
  opacity: 1;
  transform: scale(1.15) rotate(-7deg);
}
.footer-text {
  color: #fff;
  font-size: 1.07em;
  letter-spacing: 0.04em;
}

/* RESPONSIVE */
@media (max-width: 1000px) {
  .hero-content { flex-direction: column; gap: 1.5em; align-items: flex-start;}
  .hero-socials { flex-direction: row; gap: 1.6em; margin-bottom: 1em;}
  .hero-text { padding-left: 0;}
}
@media (max-width: 700px) {
  .hero-title { font-size: 2.2rem;}
  .hero-subtitle { font-size: 1.2rem;}
  .events-timeline, .portfolio-grid, .writing-grid { flex-direction: column; gap: 1.2em; display: flex;}
  #navbar .nav-menu { display: none; position: absolute; background: #111; border-radius: 14px; right: 1vw; top: 54px; min-width: 180px; box-shadow: 0 4px 20px #fff5; z-index: 22; padding: 0.7em 0;}
  #navbar .nav-menu.open { display: flex; flex-direction: column;}
  #menu-toggle { display: block; z-index: 23; margin-left: auto; background: none; border: none; padding: 0.7em 0.9em;}
  .hamburger { width: 26px; height: 2px; background: #fff; display: block; position: relative; border-radius: 1px;}
  .hamburger::before, .hamburger::after { content: ''; position: absolute; width: 26px; height: 2px; background: #fff; border-radius: 1px; left: 0; transition: all var(--transition);}
  .hamburger::before { top: -7px; }
  .hamburger::after { top: 7px; }
  .footer-socials { gap: 1em;}
}
@media (max-width: 500px) {
  .art-card, .writing-card { max-width: 95vw;}
  .hero-title { font-size: 1.3rem;}
  .hero-subtitle { font-size: 1rem;}
}
