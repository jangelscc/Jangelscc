import Script from "next/script";

const phoneDisplay = "(858) 663-2079";
const phoneHref = "tel:+18586632079";
const quoteForm =
  "https://docs.google.com/forms/d/e/1FAIpQLScKG5xAzg5fhkcHYyV2IMu3HW8PqGfKz8UOzvlT1YKR2j0arg/viewform";
const yelpUrl = "https://www.yelp.com/biz/j-angel-s-carpet-cleaning-san-diego";
const googleReviewUrl =
  "https://g.page/r/CfDY5ewbKTjBEAE/review";

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

const reviews = [
  {
    name: "Patricia P.",
    date: "Customer review, Jul. 2025",
    quote: "Excellent spot treatment and fair pricing.",
    detail:
      "Mentioned fast replies, early arrival, friendly service, and a family-business feel.",
  },
  {
    name: "Melissa S.",
    date: "Customer review, May 2025",
    quote: "Prompt, professional, and like new again.",
    detail:
      "Recommended J Angels for prompt service and carpets that looked refreshed.",
  },
  {
    name: "Yesenia C.",
    date: "Customer review, May 2025",
    quote: "Amazing job. Super clean carpet.",
    detail:
      "Called out the cleaning result and customer service after a residential carpet job.",
  },
  {
    name: "Karen W.",
    date: "Customer review, Apr. 2025",
    quote: "Cleaner, fresh-smelling, and faster drying.",
    detail:
      "Highlighted professional service, punctuality, clear process, and tough stain results.",
  },
];

const workPhotos = [
  {
    src: "/work-stair-cleaning.webp",
    title: "Stair Carpet Cleaning",
    alt: "Stair carpet being cleaned with extraction tool",
    label: "Homes & stairs",
  },
  {
    src: "/work-upholstery-chairs.webp",
    title: "Upholstery Refresh",
    alt: "Clean upholstered dining chairs",
    label: "Couches & chairs",
  },
  {
    src: "/work-commercial-carpet.webp",
    title: "Property Carpet Refresh",
    alt: "Commercial carpet cleaning with extraction equipment",
    label: "Rentals & properties",
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
            <img
              className="hero-logo"
              src="/j-angels-logo.png"
              alt="J Angels Carpet Cleaning"
            />
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
              <span>Real customer feedback</span>
              <span>Residential focused</span>
              <span>Move-out ready</span>
              <span>Call or text friendly</span>
            </div>
          </div>

          <aside className="estimate-card" aria-label="Fast quote information">
            <div className="result-preview image-preview">
              <figure className="preview-photo">
                <img
                  src="/work-stair-cleaning.webp"
                  alt="Stair carpet cleaning in a San Diego home"
                />
                <figcaption>Stair cleaning</figcaption>
              </figure>
              <figure className="preview-photo">
                <img
                  src="/work-upholstery-chairs.webp"
                  alt="Upholstered dining chairs after cleaning"
                />
                <figcaption>Upholstery refresh</figcaption>
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
            <p className="eyebrow">Real results build trust</p>
            <h2>Show the clean before customers even call.</h2>
            <p>
              People want proof before they invite someone into their home. These
              are the kinds of jobs customers ask about most: stairs, upholstered
              furniture, rental carpets, and high-traffic areas that need a reset.
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
        </section>

        <section id="reviews" className="section reviews-section">
          <div className="section-heading">
            <p className="eyebrow">Customer feedback</p>
            <h2>Customers notice the timing, communication, and results.</h2>
            <p>
              Recent customers mention quick responses, on-time service, spot
              treatment, fair pricing, and carpets that look and smell fresh.
            </p>
          </div>
          <div className="review-layout">
            <div className="review-grid">
              {reviews.map((review) => (
                <article className="review-card" key={review.name}>
                  <div className="stars" aria-label="Five star review">5 stars</div>
                  <blockquote>&quot;{review.quote}&quot;</blockquote>
                  <p>{review.detail}</p>
                  <footer>
                    <strong>{review.name}</strong>
                    <span>{review.date}</span>
                  </footer>
                </article>
              ))}
            </div>
            <aside className="review-photo-card">
              <img
                src="/work-upholstery-chairs.webp"
                alt="Freshly cleaned upholstered chairs by J Angels Carpet Cleaning"
              />
              <div>
                <span>Real local feedback</span>
                <strong>Customer comments paired with real J Angels work photos.</strong>
                <p>
                  Yelp may place some reviews under &quot;not currently recommended,&quot;
                  so they may not always appear in the public rating.
                </p>
                <a
                  className="btn btn-dark"
                  href={yelpUrl}
                  data-track="yelp_click"
                  data-label="Yelp reviews"
                >
                  Visit Yelp Profile
                </a>
              </div>
            </aside>
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
