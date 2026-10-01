import Image from "next/image";

const WHATSAPP_NUMBER = "919876543210";

function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

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
  message,
}: {
  children: React.ReactNode;
  message: string;
}) {
  return (
    <a
      className="btn btn-wa"
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <WhatsAppIcon />
      {children}
    </a>
  );
}

function WaCenter({
  title,
  text,
  label,
  message,
  dark = false,
}: {
  title: string;
  text: string;
  label: string;
  message: string;
  dark?: boolean;
}) {
  return (
    <div className={dark ? "wa-center dark" : "wa-center"}>
      <h2>{title}</h2>
      <p>{text}</p>
      <WaButton message={message}>{label}</WaButton>
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <header className="wrap nav">
        <a className="brand" href="#top">
          <span className="mark">D</span>
          DoorEqu
        </a>
        <nav className="nav-links">
          <a href="#range">Range</a>
          <a href="#hardware">Hardware</a>
          <a href="#install">Installation</a>
        </nav>
        <a
          className="btn btn-wa"
          href={waLink("Namaste, mujhe door equipment ka quote chahiye.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
      </header>

      <section className="wrap hero" id="top">
        <div>
          <p className="eyebrow">Door equipment</p>
          <h1>Ghar aur office ke liye mazboot darwaze.</h1>
          <p className="lede">
            Wooden doors, steel security doors, glass entrances, locks aur
            hardware — ek hi jagah. Size batao, photo bhejo, quote WhatsApp par
            mil jayega.
          </p>
          <div className="hero-actions">
            <WaButton message="Namaste, mujhe door equipment ka quote chahiye.">
              WhatsApp par baat karo
            </WaButton>
            <a className="btn btn-line" href="#range">
              Range dekho
            </a>
          </div>
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
          <Image
            src="/images/hero-door.jpg"
            alt="Premium wooden entrance door with brass handle"
            width={960}
            height={640}
            priority
          />
          <div className="badge">
            <strong>Solid wood</strong>
            <span>Brass lock aur handle ke saath</span>
          </div>
        </div>
      </section>

      <section className="wrap">
        <WaCenter
          dark
          title="Seedha WhatsApp karo"
          text="Photo aur size bhejo. Rate isi chat mein aa jayega."
          label="Abhi WhatsApp karo"
          message="Namaste DoorEqu, mujhe door ka quote chahiye."
        />
      </section>

      <section className="wrap section" id="range">
        <h2>Door range</h2>
        <p className="sub">
          Main entrance se factory gate tak. Har door ke saath frame, hinge aur
          lock ka option milta hai.
        </p>
        <WaCenter
          title="Kaunsa door chahiye?"
          text="Wooden, steel ya glass — WhatsApp par bata do."
          label="Door choose karo"
          message="Namaste, mujhe door range dekhni hai. Quote chahiye."
        />
        <div className="grid-3">
          <article className="card">
            <Image
              src="/images/hero-door.jpg"
              alt="Teak style wooden main door"
              width={800}
              height={520}
            />
            <div className="card-body">
              <h3>Wooden doors</h3>
              <p>Main door, bedroom aur flush doors. Teak, engineering wood aur laminate finish.</p>
              <WaButton message="Namaste, mujhe wooden door chahiye. Rate batao.">
                Wooden door poochho
              </WaButton>
            </div>
          </article>
          <article className="card">
            <Image
              src="/images/steel-door.jpg"
              alt="Charcoal steel security door in a showroom"
              width={800}
              height={520}
            />
            <div className="card-body">
              <h3>Steel security</h3>
              <p>Powder-coated steel doors with deadbolt. Home, shop aur godown ke liye.</p>
              <WaButton message="Namaste, mujhe steel security door chahiye. Rate batao.">
                Steel door poochho
              </WaButton>
            </div>
          </article>
          <article className="card">
            <Image
              src="/images/glass-door.jpg"
              alt="Black aluminium glass office entrance"
              width={800}
              height={520}
            />
            <div className="card-body">
              <h3>Glass & aluminium</h3>
              <p>Office entrance, slim frame glass doors aur stainless pull handles.</p>
              <WaButton message="Namaste, mujhe glass aluminium door chahiye. Rate batao.">
                Glass door poochho
              </WaButton>
            </div>
          </article>
        </div>
        <WaCenter
          dark
          title="Apna size WhatsApp karo."
          text="Door ki height, width aur photo bhejo. Material aur rate isi chat mein mil jayega."
          label="Quote lo WhatsApp par"
          message="Namaste DoorEqu, mujhe door ka quote chahiye. Size aur photo bhej raha hoon."
        />
      </section>

      <section className="wrap section" id="hardware">
        <h2>Locks, handles, closers</h2>
        <p className="sub">
          Sirf darwaza nahi — poora hardware set. Mortise lock, lever handle,
          hinge, door closer aur keys.
        </p>
        <WaCenter
          title="Lock ya handle chahiye?"
          text="Model number ya photo bhejo, set ka rate aa jayega."
          label="Hardware WhatsApp karo"
          message="Namaste, mujhe door hardware ka rate chahiye."
        />
        <div className="split">
          <Image
            src="/images/door-hardware.jpg"
            alt="Brass handle, mortise lock, hinges and door closer"
            width={900}
            height={680}
          />
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
                  <WaButton message="Namaste, mujhe door handle aur hinge chahiye.">
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
          title="Hardware ka set chahiye?"
          text="Lock, handle aur hinge ek saath mangwao. Model number ya photo bhej do."
          label="Hardware poochho"
          message="Namaste, mujhe door lock aur handle ka set chahiye. Photo bhej raha hoon."
        />
      </section>

      <section className="wrap section" id="install">
        <div className="split">
          <div>
            <p className="eyebrow">On-site fitting</p>
            <h2>Measure, supply, fit.</h2>
            <p className="sub">
              Purana frame check karte hain, naya door site par laate hain, aur
              lock tak fit karke chhodte hain.
            </p>
            <WaButton message="Namaste DoorEqu, mujhe door fitting ke liye site visit chahiye.">
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
                  <WaButton message="Namaste, mera door measure ho chuka hai. Finish discuss karni hai.">
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
          <Image
            src="/images/door-install.jpg"
            alt="Door frame being fitted on site"
            width={960}
            height={640}
          />
        </div>
        <WaCenter
          dark
          title="Free visit book karo."
          text="Area aur time likh do. Fitting team WhatsApp par confirm karegi."
          label="Visit book karo"
          message="Namaste DoorEqu, mujhe door fitting ke liye site visit chahiye."
        />
      </section>

      <section className="wrap">
        <WaCenter
          title="Abhi message karo"
          text="Koi bhi door ya hardware — ek message kaafi hai."
          label="WhatsApp kholo"
          message="Namaste DoorEqu, mujhe door equipment chahiye."
        />
      </section>

      <footer className="wrap footer">
        <span>DoorEqu · Door equipment & hardware</span>
        <span>WhatsApp: +91 98765 43210</span>
      </footer>
    </main>
  );
}
