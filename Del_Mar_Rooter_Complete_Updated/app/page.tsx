"use client";

import { FormEvent, useEffect, useState } from "react";

const phoneNumber = "(760) 385-3797";
const phoneHref = "tel:+17603853797";

const services = [
  { number: "01", name: "Drains", summary: "Fast clog removal and clean-flow solutions.", description: "We diagnose and clear slow or blocked kitchen, bathroom, and main-line drains. Service may include professional drain cleaning and camera inspection to identify the cause and help prevent repeat clogs." },
  { number: "02", name: "Leaks", summary: "Accurate detection and dependable repairs.", description: "We locate and repair leaks from faucets, fixtures, supply lines, and hidden plumbing. After finding the source, we explain the repair options clearly and complete the work with dependable materials." },
  { number: "03", name: "Water Heaters", summary: "Repair, replacement, and maintenance.", description: "We service traditional tank and tankless water heaters, including troubleshooting, repairs, replacements, and routine maintenance to restore reliable hot water and efficient operation." },
  { number: "04", name: "Sewer & Repiping", summary: "Long-lasting whole-home plumbing work.", description: "We inspect sewer lines, repair damaged sections, and provide repiping solutions for aging pipes, recurring leaks, corrosion, and poor water pressure. Recommendations are based on the condition of your system." },
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState<(typeof services)[number] | null>(null);
  function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setSubmitted(true); }
  useEffect(() => {
    if (!selectedService) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedService(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selectedService]);
  return <main className="stage">
    <div className="blueprint" aria-label="Del Mar Rooter sample website">
      <img src="./del-mar-rooter.png" alt="Del Mar Rooter website serving Orange County" width="1728" height="3642" />

      <nav className="hotspots" aria-label="Main navigation">
        <a className="nav-services" href="#services" aria-label="Services"></a>
        <a className="nav-about" href="#about" aria-label="About"></a>
        <a className="nav-area" href="#service-area" aria-label="Service area"></a>
        <a className="nav-reviews" href="#reviews" aria-label="Reviews"></a>
        <a className="nav-contact" href="#contact" aria-label="Contact"></a>
        <a className="quote-link" href="#request" aria-label="Get a quote"></a>
      </nav>

      <a className="phone-hotspot phone-top" href={phoneHref} aria-label={`Call ${phoneNumber}`}>{phoneNumber}</a>
      <a className="phone-hotspot phone-emergency" href={phoneHref} aria-label={`Call ${phoneNumber}`}>{phoneNumber}</a>
      <a className="phone-hotspot phone-footer" href={phoneHref} aria-label={`Call ${phoneNumber}`}>{phoneNumber}</a>

      <form className="service-form" id="request" onSubmit={submit} aria-label="Request service">
        <input className="name-field" name="name" aria-label="Name" required />
        <input className="phone-field" name="phone" type="tel" aria-label="Phone" required />
        <textarea className="help-field" name="message" aria-label="How can we help?" required></textarea>
        <button className="send-field" aria-label="Send request"></button>
        {submitted && <div className="sent" role="status">Request received</div>}
      </form>

      <div id="services" className="anchor anchor-services"></div>
      <div id="about" className="anchor anchor-about"></div>
      <div id="reviews" className="anchor anchor-reviews"></div>
      <div id="service-area" className="anchor anchor-area"></div>
      <div id="contact" className="anchor anchor-contact"></div>
      <a className="book-hotspot" href="#request" aria-label="Book service"></a>
      <div className="desktop-service-hotspots" aria-label="Service descriptions">
        {services.map((service, index) => <button key={service.name} className={`desktop-service-${index + 1}`} type="button" onClick={() => setSelectedService(service)} aria-label={`Learn more about ${service.name}`}></button>)}
      </div>
    </div>

    <div className="mobile-site">
      <header className="m-header">
        <a className="m-brand" href="#m-top"><img src="./mobile-logo-rooter.png" alt="Del Mar Rooter" /></a>
        <a className="m-call" href={phoneHref}>Call Now</a>
      </header>

      <section className="m-hero" id="m-top">
        <p className="m-kicker">DEL MAR'S LOCAL ROOTER TEAM</p>
        <h1>DEL MAR<br/>ROOTER</h1>
        <h2>Your Local Rooter<br/>Problem Solvers.</h2>
        <p>Straight answers. Quality repairs. No surprises.</p>
        <div className="m-availability">◷ Available 24/7</div>
        <div className="m-actions">
          <a href="#m-request" className="m-primary">Get a Quote</a>
          <a href={phoneHref} className="m-secondary">{phoneNumber}</a>
        </div>
      </section>

      <section className="m-trust">
        <span>✓ Licensed & Insured</span><span>◷ Same-Day Service</span><span>◇ Upfront Pricing</span>
      </section>

      <section className="m-form-section" id="m-request">
        <p className="m-kicker dark">FAST, FRIENDLY HELP</p>
        <h2>Request Service</h2>
        <form onSubmit={submit}>
          <input name="mobile-name" placeholder="Name" aria-label="Name" required />
          <input name="mobile-phone" type="tel" placeholder="Phone" aria-label="Phone" required />
          <textarea name="mobile-message" placeholder="How can we help?" aria-label="How can we help?" required></textarea>
          <button>Send Request <span>→</span></button>
          {submitted && <p className="m-success" role="status">Request received. We'll be in touch.</p>}
        </form>
      </section>

      <section className="m-services" id="m-services">
        <p className="m-kicker">WHAT WE FIX</p><h2>Rooter<br/>Solutions</h2>
        <div className="m-service-grid">
          {services.map((service) => <button className="m-service-card" key={service.name} type="button" onClick={() => setSelectedService(service)} aria-label={`Learn more about ${service.name}`}><b>{service.number}</b><h3>{service.name}</h3><p>{service.summary}</p></button>)}
        </div>
      </section>

      <section className="m-why">
        <p className="m-kicker dark">WHY DEL MAR?</p><h2>Simple service.<br/>Done right.</h2>
        <ol><li><b>Call</b><span>Reach us 24/7.</span></li><li><b>Diagnose</b><span>We explain the issue and options.</span></li><li><b>Fix</b><span>Quality repairs done right.</span></li><li><b>Relax</b><span>Get back to what matters.</span></li></ol>
        <div className="m-stats"><span><b>20+</b> Years</span><span><b>1,500+</b> Jobs</span><span><b>4.9</b> Rating</span></div>
      </section>

      <section className="m-emergency"><strong>24/7</strong><h2>Emergency rooter<br/>service.</h2><a href={phoneHref}>Call {phoneNumber}</a></section>

      <section className="m-reviews"><p className="m-kicker dark">WHAT OUR NEIGHBORS SAY</p><blockquote>“Del Mar Rooter showed up quickly and fixed our leak the same day. Honest, professional, and easy to work with.”</blockquote><blockquote>“They explained everything clearly and the pricing was exactly what they quoted.”</blockquote></section>

      <section className="m-area"><a className="m-location-mark" href="https://www.google.com/maps/search/?api=1&query=Orange+County+California" target="_blank" rel="noreferrer" aria-label="View the Orange County service region in Google Maps"><span className="m-pin"><i></i></span><b>Orange County</b><small>California</small><em>View service region →</em></a><div><p className="m-kicker">LOCAL SERVICE</p><h2>Serving Orange County</h2><p>Rooter service throughout Orange County.</p></div></section>

      <section className="m-cta"><h2>Ready When You Need Us.</h2><a href="#m-request">Book Service →</a></section>
      <footer className="m-footer"><div className="m-brand"><img src="./mobile-logo-rooter.png" alt="Del Mar Rooter" /></div><a href={phoneHref}>{phoneNumber}</a><p>Available 24/7 · Orange County</p><small>© 2024 Del Mar Rooter. All Rights Reserved.</small></footer>
    </div>
    {selectedService && <div className="service-dialog-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedService(null); }}>
      <section className="service-dialog" role="dialog" aria-modal="true" aria-labelledby="service-dialog-title">
        <button className="service-dialog-close" type="button" onClick={() => setSelectedService(null)} aria-label="Close service description" autoFocus>×</button>
        <span>{selectedService.number}</span>
        <h2 id="service-dialog-title">{selectedService.name}</h2>
        <p>{selectedService.description}</p>
      </section>
    </div>}
  </main>;
}
