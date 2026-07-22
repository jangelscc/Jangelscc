import Script from "next/script";

const phoneDisplay = "(858) 663-2079";
const phoneHref = "tel:+18586632079";
const quoteForm = "#quote";
const yelpUrl = "https://www.yelp.com/biz/j-angel-s-carpet-cleaning-san-diego";
const googleReviewUrl =
  "https://g.page/r/CfDY5ewbKTjBEAE/review";

const yelpRating = "5.0";
const yelpReviewCount = "2";

const services = [
  {
    title: "Carpet Cleaning",
    text: "Deep cleaning for bedrooms, living rooms, stairs, hallways, and the high-traffic lanes that make a home feel worn down.",
  },
  {
    title: "Move-Out / Rental Refresh",
    text: "Carpet and spot refreshes for renters, landlords, and property managers who need a cleaner handoff before keys change hands.",
  },
  {
    title: "Upholstery & Couch Cleaning",
    text: "Couches, sectionals, dining chairs, and cushions cleaned for everyday soil, body oils, drink spills, and odors.",
  },
  {
    title: "Pet Stains & Odors",
    text: "Targeted treatment for pet accidents, spills, and problem areas that need extra attention before they settle in.",
  },
];

const workPhotos = [
  {
    src: "/yelp/yelp-work-photo-3.jpg",
    title: "Carpet Cleaning In Progress",
    alt: "J Angels Carpet Cleaning extraction cleaning a residential carpet",
    label: "Yelp photo",
  },
  {
    src: "/yelp/yelp-work-photo-4.jpg",
    title: "Fresh Carpet Lines",
    alt: "Fresh carpet cleaning lines after a J Angels carpet cleaning service",
    label: "Yelp photo",
  },
  {
    src: "/yelp/yelp-work-photo-1.jpg",
    title: "Room Carpet Refresh",
    alt: "Residential carpet cleaning progress photo from J Angels Carpet Cleaning",
    label: "Yelp photo",
  },
];

const yelpPhotos = [
  {
    src: "/yelp/yelp-work-photo-1.jpg",
    title: "Cleaning pass",
    alt: "Clear Yelp photo of a carpet cleaning pass by J Angels Carpet Cleaning",
  },
  {
    src: "/yelp/yelp-work-photo-3.jpg",
    title: "Extraction cleaning",
    alt: "Clear Yelp photo of extraction cleaning on residential carpet",
  },
  {
    src: "/yelp/yelp-work-photo-4.jpg",
    title: "Fresh lines",
    alt: "Clear Yelp photo showing fresh carpet cleaning lines",
  },
  {
    src: "/yelp/yelp-work-photo-5.jpg",
    title: "Carpet refresh",
    alt: "Clear Yelp photo of a J Angels Carpet Cleaning room refresh",
  },
];

const neighborhoods = [
  "San Diego",
  "Pacific Beach",
  "Mira Mesa",
  "Mission Valley",
  "North Park",
  "Hillcrest",
  "City Heights",
  "Kearny Mesa",
  "Clairemont",
  "La Mesa",
  "Chula Vista",
  "El Cajon",
  "Spring Valley",
  "Bonita",
  "National City",
  "Santee",
  "Lemon Grove",
  "Coronado",
  "Poway",
  "Escondido",
  "East County",
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

          document.addEventListener('submit', function(event) {
            const form = event.target.closest('[data-quote-form]');
            if (!form) return;
            event.preventDefault();
            if (!form.reportValidity()) return;

            const data = new FormData(form);
            const rooms = data.get('rooms') ? 'Rooms/areas: ' + data.get('rooms') : '';
            const details = data.get('details') ? 'Details: ' + data.get('details') : '';
            const message = [
              "Hi J Angels, I'd like a free quote.",
              'Name: ' + data.get('name'),
              'Phone: ' + data.get('phone'),
              'ZIP code: ' + data.get('zip'),
              'Service: ' + data.get('service'),
              'Timing: ' + data.get('timing'),
              rooms,
              details,
              'I can send photos next.'
            ].filter(Boolean).join('\\n');

            if (typeof gtag === 'function') {
              gtag('event', 'quote_text_submit', {
                event_category: 'lead',
                event_label: data.get('service') || 'Quote form'
              });
            }

            window.location.href = 'sms:+18586632079?&body=' + encodeURIComponent(message);
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
          <a href="#reviews">Reviews</a>
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
            <p className="eyebrow">San Diego carpet & upholstery cleaning</p>
            <h1>Cleaner carpets, fresher couches, easier move-outs.</h1>
            <p className="hero-text">
              Local, family-run cleaning for San Diego homes, apartments, move-outs,
              area rugs, pet stains, and upholstery. Call or text photos and get a
              simple next step without the big-company runaround.
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
              <span>{yelpRating} Yelp rating</span>
              <span>Residential focused</span>
              <span>Move-out ready</span>
              <span>Call or text friendly</span>
            </div>
          </div>

          <aside className="estimate-card" aria-label="Fast quote information">
            <div className="result-preview image-preview">
              <figure className="preview-photo">
                <img
                  src="/yelp/yelp-before-carpet-1.jpg"
                  alt="J Angels Carpet Cleaning equipment set up for a residential carpet cleaning job"
                />
                <figcaption>Residential carpet</figcaption>
              </figure>
              <figure className="preview-photo">
                <img
                  src="/yelp/yelp-after-carpet-1.jpg"
                  alt="Fresh carpet cleaning lines after service"
                />
                <figcaption>After cleaning</figcaption>
              </figure>
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
          <strong>Need a home, couch, or rental refreshed this week?</strong>
          <span>Text photos, your ZIP code, and what needs cleaning. We will help you figure out the fastest option.</span>
          <a
            href={quoteForm}
            data-track="quote_form_click"
            data-label="Quote band form"
          >
            Start Quote
          </a>
        </section>

        <section id="quote" className="section quote-form-section">
          <div className="quote-form-copy">
            <p className="eyebrow">Free quote</p>
            <h2>Tell us what needs cleaning.</h2>
            <p>
              Fill this out and we will turn it into a text message to J Angels.
              Add photos after the text opens so we can quote faster.
            </p>
            <div className="quote-callout">
              <strong>Prefer talking?</strong>
              <a
                href={phoneHref}
                data-track="click_to_call"
                data-label="Quote form call"
              >
                Call {phoneDisplay}
              </a>
            </div>
          </div>

          <form className="quote-form-card" data-quote-form>
            <div className="form-row">
              <label>
                <span>Name</span>
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label>
                <span>Phone</span>
                <input name="phone" type="tel" autoComplete="tel" required />
              </label>
            </div>
            <div className="form-row">
              <label>
                <span>ZIP code</span>
                <input name="zip" type="text" inputMode="numeric" autoComplete="postal-code" required />
              </label>
              <label>
                <span>Service</span>
                <select name="service" required defaultValue="">
                  <option value="" disabled>Choose service</option>
                  <option>Carpet cleaning</option>
                  <option>Move-out / rental refresh</option>
                  <option>Upholstery / couch cleaning</option>
                  <option>Pet stains or odors</option>
                  <option>Area rug cleaning</option>
                </select>
              </label>
            </div>
            <label>
              <span>Rooms or areas</span>
              <input name="rooms" type="text" placeholder="Example: living room, 2 bedrooms, stairs, couch" />
            </label>
            <label>
              <span>When do you need it?</span>
              <select name="timing" required defaultValue="">
                <option value="" disabled>Choose timing</option>
                <option>As soon as possible</option>
                <option>This week</option>
                <option>This weekend</option>
                <option>Next week</option>
                <option>Just getting a price</option>
              </select>
            </label>
            <label>
              <span>Anything we should know?</span>
              <textarea
                name="details"
                rows={4}
                placeholder="Stains, pet odor, move-out deadline, parking notes, fabric type, etc."
              />
            </label>
            <button className="btn btn-gold quote-submit" type="submit" data-track="quote_text_submit_button" data-label="Quote form text">
              Text My Quote Request
            </button>
            <p className="form-note">
              Your phone will open a text to J Angels. You can review it and add
              photos before sending.
            </p>
          </form>
        </section>

        <section id="services" className="section">
          <div className="section-heading">
            <p className="eyebrow">Most requested services</p>
            <h2>Built for San Diego homes, rentals, and couches.</h2>
            <p>
              Whether you are getting ready for guests, turning over a rental, or
              trying to save a couch from stains and odors, the quote flow is made
              to be simple: send the details, get a clear reply, book the clean.
            </p>
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
            <p className="eyebrow">Yelp-visible project photos</p>
            <h2>Show the clean before customers even call.</h2>
            <p>
              People want proof before they invite someone into their home. These
              public work photos show the kind of carpet, rug, and property refresh
              jobs customers ask about most.
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
          <div className="photo-grid work-gallery" aria-label="Recent J Angels Carpet Cleaning work photos">
            {workPhotos.map((photo, index) => (
              <article
                className={`photo-tile image-tile ${index === 0 ? "image-tile-tall" : ""}`}
                key={photo.title}
              >
                <img src={photo.src} alt={photo.alt} />
                <span>{photo.label}</span>
                <strong>{photo.title}</strong>
              </article>
            ))}
          </div>
          <div className="yelp-photo-strip" aria-label="More public Yelp work photos">
            {yelpPhotos.map((photo) => (
              <figure key={photo.title}>
                <img src={photo.src} alt={photo.alt} />
                <figcaption>{photo.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="reviews" className="section reviews-section">
          <div className="section-heading">
            <p className="eyebrow">Yelp profile</p>
            <h2>Check the current public Yelp reviews directly.</h2>
            <p>
              Yelp currently shows J Angels Carpet Cleaning at {yelpRating} stars
              from {yelpReviewCount} active public reviews. To keep everything
              certified and up to date, customers can verify the reviews and
              public photos directly on Yelp.
            </p>
          </div>
          <div className="yelp-profile-card">
            <div>
              <span>{yelpRating} stars on Yelp</span>
              <strong>{yelpReviewCount} active public Yelp reviews and 14 public Yelp photos.</strong>
              <p>
                Review counts can change over time, so this link sends customers
                straight to the public Yelp profile instead of showing outdated
                or filtered review text on this page.
              </p>
            </div>
            <a
              className="btn btn-dark"
              href={yelpUrl}
              data-track="yelp_click"
              data-label="Yelp reviews"
            >
              Visit Yelp Profile
            </a>
          </div>
          <div className="google-review-strip">
            <div>
              <span>Google reviews</span>
              <h3>Google reviews are coming soon.</h3>
              <p>
                J Angels is building up Google reviews now. If we cleaned your
                carpet, couch, stairs, or rental, your review helps local San
                Diego customers know what to expect.
              </p>
            </div>
            <a
              className="btn btn-gold"
              href={googleReviewUrl}
              data-track="google_review_click"
              data-label="Google reviews"
            >
              Leave a Google Review
            </a>
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
              <li>You can call or text the same business number for quotes and questions.</li>
              <li>Photos help us quote faster, especially for stains, stairs, couches, and rentals.</li>
              <li>Residential work is the focus, with experience handling larger property jobs too.</li>
              <li>Clear communication before the job so you know what to expect.</li>
            </ul>
          </div>
          <div className="quote-panel">
            <p className="eyebrow">Free quote</p>
            <h2>Want a price without waiting around?</h2>
            <p>Call or text photos, your ZIP code, and what needs cleaning. We will help you figure out the next step.</p>
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
          <p className="area-note">
            Searching for carpet cleaning near you? Call or text your ZIP code and
            we can confirm availability for residential carpet cleaning, couch
            cleaning, area rugs, move-out cleaning, and rental refresh jobs across
            San Diego County.
          </p>
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
