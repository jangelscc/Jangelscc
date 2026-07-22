import Script from "next/script";

const phoneDisplay = "(858) 663-2079";
const phoneHref = "tel:+18586632079";
const quoteForm =
  "https://docs.google.com/forms/d/e/1FAIpQLScKG5xAzg5fhkcHYyV2IMu3HW8PqGfKz8UOzvlT1YKR2j0arg/viewform";

const services = [
  {
    title: "Carpet Cleaning",
    text: "Bedrooms, living rooms, stairs, hallways, and high-traffic areas cleaned for a fresher home.",
  },
  {
    title: "Move-Out / Rental Refresh",
    text: "A cleaner handoff for renters, landlords, property managers, and last-minute rental turnovers.",
  },
  {
    title: "Upholstery & Couch Cleaning",
    text: "Couches, sectionals, chairs, and cushions cleaned for everyday soil, body oils, and odors.",
  },
  {
    title: "Pet Stains & Odors",
    text: "Targeted spot treatment for pet accidents, spills, and problem areas that need extra attention.",
  },
];

const neighborhoods = [
  "San Diego",
  "La Mesa",
  "Chula Vista",
  "El Cajon",
  "National City",
  "Santee",
  "Lemon Grove",
  "Clairemont",
];

export default function Home() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-Q2FKB8GYNN"
        strategy="afterInteractive"
      />
      <Script id="j-angels-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Q2FKB8GYNN');

          document.addEventListener('click', function(event) {
            const target = event.target.closest('[data-track]');
            if (!target || typeof gtag !== 'function') return;
            gtag('event', target.getAttribute('data-track'), {
              event_category: 'lead',
              event_label: target.getAttribute('data-label') || target.textContent.trim()
            });
          });
        `}
      </Script>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="J Angels Carpet Cleaning home">
          <img
            className="brand-logo"
            src="/j-angels-logo.png"
            alt="J Angels Carpet Cleaning logo"
          />
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#results">Results</a>
          <a href="#process">How it works</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="header-actions">
          <a
            className="phone-link"
            href={phoneHref}
            data-track="click_to_call"
            data-label="Header phone"
          >
            {phoneDisplay}
          </a>
          <a
            className="btn btn-gold"
            href={quoteForm}
            data-track="quote_form_click"
            data-label="Header quote"
          >
            Get Free Quote
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <img
              className="hero-logo"
              src="/j-angels-logo.png"
              alt="J Angels Carpet Cleaning"
            />
            <p className="eyebrow">San Diego carpet & upholstery cleaning</p>
            <h1>Cleaner carpets, fresher couches, easier move-outs.</h1>
            <p className="hero-text">
              Local, family-run cleaning for homes, apartments, rentals, area rugs,
              pet stains, and upholstery. Call or text photos for a simple quote.
            </p>
            <div className="hero-actions">
              <a
                className="btn btn-gold"
                href={phoneHref}
                data-track="click_to_call"
                data-label="Hero call"
              >
                Call Now
              </a>
              <a
                className="btn btn-white"
                href={quoteForm}
                data-track="quote_form_click"
                data-label="Hero quote"
              >
                Request Quote
              </a>
            </div>
            <div className="trust-row" aria-label="Business highlights">
              <span>Residential focused</span>
              <span>Move-out ready</span>
              <span>Call or text friendly</span>
            </div>
          </div>

          <aside className="estimate-card" aria-label="Fast quote information">
            <div className="result-preview">
              <div className="carpet-panel before-panel">
                <span>Before</span>
              </div>
              <div className="carpet-panel after-panel">
                <span>After</span>
              </div>
            </div>
            <div className="estimate-body">
              <strong>Fast free quote</strong>
              <p>Text your photos, ZIP code, and what needs cleaning.</p>
              <a
                href={phoneHref}
                data-track="click_to_call"
                data-label="Hero card phone"
              >
                {phoneDisplay}
              </a>
            </div>
          </aside>
        </section>

        <section className="quick-quote">
          <strong>Need a home, couch, or rental refreshed?</strong>
          <span>Send a few photos and we will point you to the fastest next step.</span>
          <a
            href={phoneHref}
            data-track="click_to_call"
            data-label="Quote band call"
          >
            Call/Text Now
          </a>
        </section>

        <section id="services" className="section">
          <div className="section-heading">
            <p className="eyebrow">Most requested services</p>
            <h2>Built for San Diego homes, rentals, and couches.</h2>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="results" className="section results-section">
          <div className="results-copy">
            <p className="eyebrow">Real results build trust</p>
            <h2>Before & after photos will make this page pop.</h2>
            <p>
              This section is ready for your real job photos from Google Drive. The
              goal is simple: visitors should see the transformation and immediately
              know it is worth calling.
            </p>
            <a
              className="btn btn-dark"
              href={quoteForm}
              data-track="quote_form_click"
              data-label="Results quote"
            >
              Get My Quote
            </a>
          </div>
          <div className="photo-grid" aria-label="Before and after photo placeholders">
            <article className="photo-tile before-tile">
              <span>Before</span>
              <strong>Traffic lanes, spots, and worn areas</strong>
            </article>
            <article className="photo-tile after-tile">
              <span>After</span>
              <strong>Fresh, groomed, comfortable rooms</strong>
            </article>
            <article className="photo-tile before-tile">
              <span>Before</span>
              <strong>Couches, rentals, and pet problem areas</strong>
            </article>
            <article className="photo-tile after-tile">
              <span>After</span>
              <strong>Cleaner spaces ready to enjoy</strong>
            </article>
          </div>
        </section>

        <section id="process" className="section process-section">
          <div className="section-heading">
            <p className="eyebrow">Simple booking flow</p>
            <h2>Three steps from dirty carpet to fresh space.</h2>
          </div>
          <div className="process-grid">
            <article>
              <span>1</span>
              <h3>Send the details</h3>
              <p>Call, text, or use the quote form with your service, ZIP code, and photos if you have them.</p>
            </article>
            <article>
              <span>2</span>
              <h3>Get a clear quote</h3>
              <p>We reply with a simple estimate and scheduling options for your home or rental refresh.</p>
            </article>
            <article>
              <span>3</span>
              <h3>Enjoy the refresh</h3>
              <p>We arrive ready to clean, treat problem areas, and leave the space feeling comfortable again.</p>
            </article>
          </div>
        </section>

        <section className="section why-section">
          <div className="why-copy">
            <p className="eyebrow">Why J Angels</p>
            <h2>Local service without the big-company runaround.</h2>
            <ul>
              <li>Family-run San Diego business</li>
              <li>Fast call/text quote flow</li>
              <li>Residential, rental, couch, and pet-stain focus</li>
              <li>Clear communication before the job</li>
            </ul>
          </div>
          <div className="quote-panel">
            <p className="eyebrow">Free quote</p>
            <h2>Want a price?</h2>
            <p>Call or text photos and your ZIP code. We will help you figure out the next step.</p>
            <a
              className="btn btn-gold"
              href={phoneHref}
              data-track="click_to_call"
              data-label="Quote panel call"
            >
              Call {phoneDisplay}
            </a>
            <a
              className="btn btn-white"
              href={quoteForm}
              data-track="quote_form_click"
              data-label="Quote panel form"
            >
              Use Quote Form
            </a>
          </div>
        </section>

        <section className="section area-section">
          <div className="section-heading">
            <p className="eyebrow">Service area</p>
            <h2>Serving San Diego County.</h2>
          </div>
          <div className="area-list" aria-label="San Diego service areas">
            {neighborhoods.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </section>

        <section id="faq" className="section faq-section">
          <div className="section-heading">
            <p className="eyebrow">Quick answers</p>
            <h2>Questions customers ask before booking.</h2>
          </div>
          <div className="faq-grid">
            <article>
              <h3>Can I text photos for a quote?</h3>
              <p>Yes. Photos help us understand the size, stains, and fabric so we can reply faster.</p>
            </article>
            <article>
              <h3>Do you clean couches?</h3>
              <p>Yes. We clean couches, sectionals, chairs, cushions, and upholstery when the material is suitable.</p>
            </article>
            <article>
              <h3>Do you help with move-outs?</h3>
              <p>Yes. Move-out and rental refresh cleaning is one of the main services we are focusing on.</p>
            </article>
            <article>
              <h3>What areas do you serve?</h3>
              <p>We serve San Diego County. Send your ZIP code and we can confirm availability.</p>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer">
        <img
          className="footer-logo"
          src="/j-angels-logo.png"
          alt="J Angels Carpet Cleaning logo"
        />
        <strong>J Angels Carpet Cleaning</strong>
        <span>Serving San Diego County</span>
        <a
          href={phoneHref}
          data-track="click_to_call"
          data-label="Footer phone"
        >
          {phoneDisplay}
        </a>
        <a href="mailto:j.angels.cc@gmail.com">j.angels.cc@gmail.com</a>
      </footer>

      <div className="mobile-cta" aria-label="Quick contact actions">
        <a
          href={phoneHref}
          data-track="click_to_call"
          data-label="Mobile sticky call"
        >
          Call Now
        </a>
        <a
          href={quoteForm}
          data-track="quote_form_click"
          data-label="Mobile sticky quote"
        >
          Quote
        </a>
      </div>
    </>
  );
}
