import { WaLink } from "@/components/whatsapp-link";
import Image from "next/image";

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.5 3.5A11 11 0 0 0 2.1 17.2L1 23l5.9-1.1A11 11 0 0 0 20.5 3.5Zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.5.7.7-3.4-.2-.3A9.1 9.1 0 1 1 12 20.5Zm5-6.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4 15 15 0 0 0 1.5.6 3.6 3.6 0 0 0 1.7.1 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3Z"
      />
    </svg>
  );
}

function WaButton({
  children,
  source,
}: {
  children: React.ReactNode;
  source: string;
}) {
  return (
    <WaLink source={source} className="btn btn-wa">
      <WhatsAppIcon />
      {children}
    </WaLink>
  );
}

function PromoBanner({
  src,
  alt,
  kicker,
  title,
  text,
}: {
  src: string;
  alt: string;
  kicker: string;
  title: string;
  text: string;
}) {
  return (
    <section className="wrap">
      <WaLink source="photo-banner" className="banner">
        <Image src={src} alt={alt} width={1600} height={900} />
        <span className="banner-copy">
          <span className="banner-kicker">{kicker}</span>
          <strong>{title}</strong>
          <span>{text}</span>
        </span>
      </WaLink>
    </section>
  );
}

function SaleBanner({ src, alt }: { src: string; alt: string }) {
  return (
    <section className="wrap">
      <WaLink source="reddy-banner" className="sale-banner">
        <Image src={src} alt={alt} width={1400} height={280} />
      </WaLink>
    </section>
  );
}

function WaCenter({
  title,
  text,
  label,
  source,
  dark = false,
}: {
  title: string;
  text: string;
  label: string;
  source: string;
  dark?: boolean;
}) {
  return (
    <div className={dark ? "wa-center dark" : "wa-center"}>
      <h2>{title}</h2>
      <p>{text}</p>
      <WaButton source={source}>{label}</WaButton>
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <WaLink source="top-bar" className="promo-bar">
        Reddy Anna Door · 10% OFF on doors, locks and fitting · WhatsApp 77370 12198
      </WaLink>
      <header className="wrap nav">
        <a className="brand" href="#top">
          <span className="mark">R</span>
          Reddy Anna Door
        </a>
        <nav className="nav-links">
          <a href="#range">Range</a>
          <a href="#hardware">Hardware</a>
          <a href="#install">Installation</a>
        </nav>
        <WaLink source="header" className="btn btn-wa">
          <WhatsAppIcon />
          WhatsApp
        </WaLink>
      </header>

      <section className="wrap hero" id="top">
        <div>
          <p className="eyebrow">Reddy Anna Door</p>
          <h1>Ghar aur office ke darwaze, 10% off.</h1>
          <p className="lede">
            Wooden doors, steel security doors, glass entrances, locks aur
            hardware. Is mahine har order par 10% off. Size bhejo, rate WhatsApp
            par aa jayega.
          </p>
          <div className="hero-actions">
            <WaButton source="hero-button">
              WhatsApp par baat karo
            </WaButton>
            <a className="btn btn-line" href="#range">
              Range dekho
            </a>
          </div>
          <ul className="chips">
            <li>10% off</li>
            <li>10% off on locks</li>
            <li>10% off on fitting</li>
          </ul>
          <div className="stats">
            <div>
              <strong>12+</strong>
              <span>saal ka kaam</span>
            </div>
            <div>
              <strong>800+</strong>
              <span>doors fit kiye</span>
            </div>
            <div>
              <strong>Same day</strong>
              <span>WhatsApp reply</span>
            </div>
          </div>
        </div>
        <div className="hero-photo">
          <WaLink source="hero-image" className="photo-link">
            <Image
              src="/images/hero-door.jpg"
              alt="Premium wooden entrance door with brass handle"
              width={960}
              height={640}
              priority
            />
          </WaLink>
          <div className="badge">
            <strong>10% off</strong>
            <span>Reddy Anna Door · solid wood</span>
          </div>
        </div>
      </section>

      <SaleBanner
        src="/images/reddy-shop.jpg"
        alt="Reddy Anna 10 percent off, shop now"
      />

      <PromoBanner
        src="/images/banner-wood.jpg"
        alt="Wooden entrance door offer banner"
        kicker="Reddy Anna Door"
        title="10% off on door + hardware"
        text="Poora set lo, bill par seedha 10% off. Tap karke WhatsApp karo."
      />

      <section className="wrap offers" id="offers">
        <p className="eyebrow">Reddy Anna Door offers</p>
        <h2>Jagah jagah 10% off.</h2>
        <p className="sub">
          Door, lock aur fitting — teeno par 10% off. WhatsApp par confirm karo.
        </p>
        <div className="offer-grid">
          <article>
            <strong>10% off</strong>
            <p>Har wooden, steel aur glass door par seedha 10% off.</p>
          </article>
          <article>
            <strong>Free measure</strong>
            <p>Ghar ya shop ka size check, visit charge nahi.</p>
          </article>
          <article>
            <strong>Fitting included</strong>
            <p>Selected doors par frame fit aur alignment saath mein.</p>
          </article>
          <article>
            <strong>Extra keys</strong>
            <p>Main door lock ke saath ek extra key set.</p>
          </article>
        </div>
      </section>

      <section className="wrap">
        <WaCenter
          dark
          title="10% off WhatsApp par lo"
          text="Photo aur size bhejo. Reddy Anna Door ka rate isi chat mein aa jayega."
          label="Offer ke liye WhatsApp"
          source="whatsapp"
        />
      </section>

      <SaleBanner
        src="/images/reddy-contact.png"
        alt="Reddy Anna 10 percent off, contact us"
      />

      <section className="wrap section" id="range">
        <h2>Door range · 10% off</h2>
        <p className="sub">
          Main entrance se factory gate tak. Har door par 10% off, frame aur lock ke saath.
        </p>
        <WaCenter
          title="10% off wala door chahiye?"
          text="Wooden, steel ya glass — Reddy Anna Door se WhatsApp par lo."
          label="Door choose karo"
          source="whatsapp"
        />
        <div className="grid-3">
          <article className="card">
            <WaLink source="wooden-image" className="photo-link">
              <Image
                src="/images/hero-door.jpg"
                alt="Teak style wooden main door"
                width={800}
                height={520}
              />
            </WaLink>
            <div className="card-body">
              <span className="off-tag">10% off</span>
              <h3>Wooden doors</h3>
              <p>Main door, bedroom aur flush doors. Teak, engineering wood aur laminate finish.</p>
              <WaButton source="whatsapp">
                Wooden door poochho
              </WaButton>
            </div>
          </article>
          <article className="card">
            <WaLink source="steel-image" className="photo-link">
              <Image
                src="/images/steel-door.jpg"
                alt="Charcoal steel security door in a showroom"
                width={800}
                height={520}
              />
            </WaLink>
            <div className="card-body">
              <span className="off-tag">10% off</span>
              <h3>Steel security</h3>
              <p>Powder-coated steel doors with deadbolt. Home, shop aur godown ke liye.</p>
              <WaButton source="whatsapp">
                Steel door poochho
              </WaButton>
            </div>
          </article>
          <article className="card">
            <WaLink source="glass-image" className="photo-link">
              <Image
                src="/images/glass-door.jpg"
                alt="Black aluminium glass office entrance"
                width={800}
                height={520}
              />
            </WaLink>
            <div className="card-body">
              <span className="off-tag">10% off</span>
              <h3>Glass & aluminium</h3>
              <p>Office entrance, slim frame glass doors aur stainless pull handles.</p>
              <WaButton source="whatsapp">
                Glass door poochho
              </WaButton>
            </div>
          </article>
        </div>
        <WaCenter
          dark
          title="Size bhejo, 10% off lo."
          text="Height, width aur photo bhejo. Reddy Anna Door 10% off ke saath rate dega."
          label="Quote lo WhatsApp par"
          source="whatsapp"
        />
      </section>

      <SaleBanner
        src="/images/reddy-shop.jpg"
        alt="Reddy Anna shop now, 10 percent off"
      />

      <PromoBanner
        src="/images/banner-steel.jpg"
        alt="Steel security door banner"
        kicker="10% off"
        title="Steel door par 10% off"
        text="Shop aur ghar ke liye. Reddy Anna Door, free size check."
      />

      <section className="wrap section" id="hardware">
        <h2>Locks, handles, closers</h2>
        <p className="sub">
          Hardware set par bhi 10% off. Mortise lock, lever handle, hinge aur door closer.
        </p>
        <WaCenter
          title="Locks par bhi 10% off"
          text="Model number ya photo bhejo. Reddy Anna Door rate WhatsApp par dega."
          label="Hardware WhatsApp karo"
          source="whatsapp"
        />
        <div className="split">
          <WaLink source="hardware-image" className="photo-link">
            <Image
              src="/images/door-hardware.jpg"
              alt="Brass handle, mortise lock, hinges and door closer"
              width={900}
              height={680}
            />
          </WaLink>
          <div>
            <ul className="steps">
              <li>
                <span className="num">1</span>
                <div>
                  <h3>Mortise & deadbolt</h3>
                  <p>Main door ke liye heavy lock sets, extra key ke saath.</p>
                </div>
              </li>
              <li>
                <span className="num">2</span>
                <div>
                  <h3>Handles & hinges</h3>
                  <p>Brass aur stainless finish. Door weight ke hisaab se hinge.</p>
                  <WaButton source="whatsapp">
                    Handle poochho
                  </WaButton>
                </div>
              </li>
              <li>
                <span className="num">3</span>
                <div>
                  <h3>Door closers</h3>
                  <p>Office aur shop doors jo khud band ho jayein.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <WaCenter
          dark
          title="Hardware set, 10% off"
          text="Lock, handle aur hinge ek saath. Reddy Anna Door se 10% off par mangwao."
          label="Hardware poochho"
          source="whatsapp"
        />
      </section>

      <section className="wrap section" id="install">
        <div className="split">
          <div>
            <p className="eyebrow">Reddy Anna Door · 10% off</p>
            <h2>Measure, supply, fit.</h2>
            <p className="sub">
              Purana frame check karte hain, naya door site par laate hain, aur
              lock tak fit karke chhodte hain.
            </p>
            <WaButton source="whatsapp">
              Fitting ke liye WhatsApp
            </WaButton>
            <ul className="steps after-btn">
              <li>
                <span className="num">1</span>
                <div>
                  <h3>Site measure</h3>
                  <p>Opening ka exact size, floor level aur wall thickness.</p>
                </div>
              </li>
              <li>
                <span className="num">2</span>
                <div>
                  <h3>Make & finish</h3>
                  <p>Door, frame aur hardware aapke size par.</p>
                  <WaButton source="whatsapp">
                    Finish discuss karo
                  </WaButton>
                </div>
              </li>
              <li>
                <span className="num">3</span>
                <div>
                  <h3>Fit & handover</h3>
                  <p>Alignment, lock test, aur extra keys.</p>
                </div>
              </li>
            </ul>
          </div>
          <WaLink source="install-image" className="photo-link">
            <Image
              src="/images/door-install.jpg"
              alt="Door frame being fitted on site"
              width={960}
              height={640}
            />
          </WaLink>
        </div>
        <WaCenter
          dark
          title="Visit book karo, 10% off lo."
          text="Area aur time likh do. Reddy Anna Door fitting team WhatsApp par confirm karegi."
          label="Visit book karo"
          source="whatsapp"
        />
      </section>

      <PromoBanner
        src="/images/banner-hardware.jpg"
        alt="Door lock and handle banner"
        kicker="Reddy Anna Door · 10% off"
        title="Lock set par 10% off"
        text="Handle, hinge aur extra key. WhatsApp par hello sir likh ke bhejo."
      />

      <section className="wrap">
        <WaCenter
          title="Reddy Anna Door, 10% off"
          text="Koi bhi door ya hardware — hello sir likh ke WhatsApp karo."
          label="WhatsApp kholo"
          source="whatsapp"
        />
      </section>

      <SaleBanner
        src="/images/reddy-contact.png"
        alt="Reddy Anna contact us, 10 percent off"
      />

      <footer className="wrap footer">
        <span>Reddy Anna Door · 10% off on doors & hardware</span>
        <WaLink source="footer" className="footer-wa">
          WhatsApp: +91 77370 12198
        </WaLink>
        <a href="/admin">Admin</a>
      </footer>
    </main>
  );
}
