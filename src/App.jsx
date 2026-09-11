import React, { useMemo, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Cube,
  Hammer,
  HouseLine,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
  SolarPanel,
  Truck,
  WhatsappLogo,
} from '@phosphor-icons/react';

const phoneDisplay = '0775 629 947';
const whatsappNumber = '263775629947';
const catalogUrl = 'https://wa.me/p/7921122834675159/263716653186';

const models = [
  {
    id: 'room',
    label: '1 Room',
    short: 'Single room',
    description: 'A practical standalone room for work, rental, storage, or an extra bedroom.',
    variants: [
      { name: '3m × 3m room', price: 2800, note: 'Compact single-room unit' },
      { name: '6m × 3m room', price: 3800, note: 'Double-length single-room unit' },
      { name: '6m × 3m room with toilet', price: 5000, note: 'Private toilet included' },
    ],
  },
  {
    id: 'open',
    label: 'Open Plan',
    short: 'Open plan unit',
    description: 'Flexible open floor space for offices, shops, studios, classrooms, or custom layouts.',
    variants: [
      { name: '2-unit open plan', price: 8000, note: 'Quoted size: 6m × 6m or 12m × 6m' },
      { name: '3-unit open plan', price: 12000, note: 'Quoted size: 9m × 6m' },
      { name: '4-unit open plan', price: 16000, note: 'Quoted size: 12m × 6m' },
    ],
  },
  {
    id: 'two-room',
    label: '2 Rooms',
    short: 'Two-room unit',
    description: 'Two 3m × 3m rooms with optional plumbing and a kitchen sink.',
    variants: [
      { name: '2 rooms', price: 4500, note: 'Each room is 3m × 3m' },
      { name: '2 rooms with toilet', price: 5500, note: 'Private toilet included' },
      { name: '2 rooms, sink and toilet', price: 6000, note: 'Kitchen sink and toilet included' },
    ],
  },
  {
    id: 'three-room',
    label: '3 Rooms',
    short: 'Three-room unit',
    description: 'Two compact rooms plus one generous 6m × 3m room.',
    variants: [
      { name: '3 rooms', price: 8000, note: 'Two 3m × 3m rooms and one 6m × 3m room' },
      { name: '3 rooms with toilet', price: 9200, note: 'Private toilet included' },
    ],
  },
  {
    id: 'two-bed',
    label: '2 Bedroom',
    short: 'Two-bedroom home',
    description: 'A 6m × 6m home made from two units, available finished or unfurnished.',
    variants: [
      { name: '2 bedroom, unfurnished', price: 10000, note: '2 units forming a 6m × 6m home' },
      { name: '2 bedroom, furnished', price: 12000, note: 'Kitchen sink, ensuite, wardrobes and tiles' },
    ],
  },
  {
    id: 'three-bed',
    label: '3 Bedroom',
    short: 'Three-bedroom home',
    description: 'A family home formed from three units with a complete furnished option.',
    variants: [
      { name: '3 bedroom, unfurnished', price: 13000, note: 'Three-unit home' },
      { name: '3 bedroom, furnished', price: 15000, note: 'Kitchen sink, ensuite, wardrobes and tiles' },
    ],
  },
  {
    id: 'family',
    label: '3-4 Bedroom',
    short: 'Large family home',
    description: 'A four-unit family home with a high-spec furnished package available.',
    variants: [
      { name: '3-4 bedroom, unfurnished', price: 18000, note: 'Four-unit home' },
      { name: '3-4 bedroom, furnished', price: 26000, note: '2 ensuites, 6kVA solar, L-shape kitchen, wardrobes and tiles' },
    ],
  },
];

function usd(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

function whatsappHref(subject = 'a prefab home') {
  const message = `Hello, I am interested in ${subject}. Please share the next steps, transport cost and available customization options.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function App() {
  const [modelIndex, setModelIndex] = useState(0);
  const [variantIndex, setVariantIndex] = useState(0);
  const selectedModel = models[modelIndex];
  const selectedVariant = selectedModel.variants[variantIndex] ?? selectedModel.variants[0];

  const startingPrices = useMemo(
    () => models.map((model) => Math.min(...model.variants.map((variant) => variant.price))),
    [],
  );

  function selectModel(index) {
    setModelIndex(index);
    setVariantIndex(0);
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Prefab Zimbabwe home">
          <span className="brand-mark"><HouseLine size={22} weight="fill" /></span>
          <span>Prefab<span>ZW</span></span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#models">Models</a>
          <a href="#build">Why prefab</a>
          <a href="#delivery">Delivery</a>
        </nav>
        <a className="header-action" href={whatsappHref()} target="_blank" rel="noreferrer" aria-label="WhatsApp Prefab Zimbabwe on 0775 629 947">
          <WhatsappLogo size={19} weight="fill" />
          <span>WhatsApp us</span>
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">Room to grow.<br /><strong>Built in steel.</strong></h1>
            <p>Custom prefab homes installed fast and delivered across Zimbabwe.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#models">View prices <ArrowRight size={19} /></a>
              <a className="text-link" href={catalogUrl} target="_blank" rel="noreferrer">View photo catalog <ArrowUpRight size={17} /></a>
            </div>
          </div>

          <div className="hero-media">
            <img src="/prefab-hero.jpg" alt="Contemporary modular home with a covered outdoor area" fetchPriority="high" />
            <div className="hero-price" aria-label="Prices start at 2,800 US dollars">
              <span>Starting from</span>
              <strong>USD 2,800</strong>
              <small>VAT exclusive</small>
            </div>
          </div>
        </section>

        <section className="benefit-rail" aria-label="Key benefits">
          <article><ShieldCheck size={28} /><div><strong>Steel structure</strong><span>Built for strength</span></div></article>
          <article><Hammer size={28} /><div><strong>Fast installation</strong><span>Less site disruption</span></div></article>
          <article><Ruler size={28} /><div><strong>Made to fit</strong><span>Custom room sizes</span></div></article>
          <article><Truck size={28} /><div><strong>Nationwide</strong><span>Delivery across Zimbabwe</span></div></article>
        </section>

        <section className="model-section" id="models" aria-labelledby="models-title">
          <div className="section-heading">
            <h2 id="models-title">Find your footprint</h2>
            <p>Select a layout for a quick quote, or scan the complete VAT-exclusive price board below.</p>
          </div>

          <div className="model-tabs" role="group" aria-label="Choose a prefab home configuration">
            {models.map((model, index) => (
              <button
                key={model.id}
                type="button"
                aria-pressed={modelIndex === index}
                onClick={() => selectModel(index)}
              >
                <span>{model.label}</span>
                <small>from {usd(startingPrices[index])}</small>
              </button>
            ))}
          </div>

          <div className="model-panel" id="model-panel" aria-live="polite">
            <div className="model-intro">
              <Cube size={38} weight="duotone" />
              <h3>{selectedModel.short}</h3>
              <p>{selectedModel.description}</p>
              <a href={whatsappHref(selectedVariant.name)} target="_blank" rel="noreferrer">
                Ask about this model <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="variant-list">
              {selectedModel.variants.map((variant, index) => (
                <button
                  type="button"
                  className={variantIndex === index ? 'variant active' : 'variant'}
                  key={variant.name}
                  onClick={() => setVariantIndex(index)}
                  aria-pressed={variantIndex === index}
                >
                  <span className="variant-check"><Check size={16} weight="bold" /></span>
                  <span className="variant-name"><strong>{variant.name}</strong><small>{variant.note}</small></span>
                  <strong className="variant-price">{usd(variant.price)}</strong>
                </button>
              ))}
            </div>

            <aside className="enquiry-ticket">
              <span>Your selection</span>
              <h3>{selectedVariant.name}</h3>
              <strong>{usd(selectedVariant.price)}</strong>
              <p>VAT exclusive. Transport outside Harare is quoted separately.</p>
              <a className="button button-dark" href={whatsappHref(selectedVariant.name)} target="_blank" rel="noreferrer">
                <WhatsappLogo size={20} weight="fill" /> Enquire now
              </a>
            </aside>
          </div>

          <div className="full-price-board" aria-labelledby="full-price-title">
            <div className="price-board-heading">
              <h3 id="full-price-title">Complete price board</h3>
              <p>All prices in USD, excluding VAT and transport outside Harare.</p>
            </div>
            <div className="price-groups">
              {models.map((model, modelPosition) => (
                <article className="price-group" key={model.id}>
                  <button type="button" onClick={() => selectModel(modelPosition)}>
                    <span>{model.label}</span>
                    <small>Customize this layout <ArrowRight size={14} /></small>
                  </button>
                  <div>
                    {model.variants.map((variant) => (
                      <p key={variant.name}>
                        <span><strong>{variant.name}</strong><small>{variant.note}</small></span>
                        <b>{usd(variant.price)}</b>
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="build-section" id="build">
          <div className="build-image">
            <img src="/steel-detail.jpg" alt="Steel structure under construction" />
          </div>
          <div className="build-copy">
            <h2>A proper home,<br />without the long build.</h2>
            <p>Start with a proven configuration, then adjust the room sizes, layout, plumbing, or finishes to fit your site and budget.</p>
            <div className="build-points">
              <div><span>01</span><strong>Choose your base layout</strong><p>From one room to a furnished four-unit family home.</p></div>
              <div><span>02</span><strong>Adapt the plan</strong><p>Modify room dimensions and finishes before fabrication.</p></div>
              <div><span>03</span><strong>Confirm delivery</strong><p>Transport outside Harare is calculated for your location.</p></div>
            </div>
          </div>
        </section>

        <section className="finish-section">
          <div className="finish-image">
            <img src="/prefab-interior.jpg" alt="Bright modern home interior with fitted kitchen and living area" />
          </div>
          <div className="finish-copy">
            <h2>Go basic.<br />Or move-in ready.</h2>
            <p>Selected furnished homes include the details that take a shell from functional to finished.</p>
            <div className="inclusion-grid">
              <span><Check size={18} /> Kitchen sink</span>
              <span><Check size={18} /> Ensuite</span>
              <span><Check size={18} /> Wardrobes</span>
              <span><Check size={18} /> Floor tiles</span>
              <span><SolarPanel size={18} /> 6kVA solar*</span>
              <span><Check size={18} /> L-shape kitchen*</span>
            </div>
            <small>*Included in the furnished 3-4 bedroom package.</small>
          </div>
        </section>

        <section className="delivery-section" id="delivery">
          <div className="delivery-map" aria-hidden="true">
            <span>HARARE</span>
            <div className="map-ring ring-one"></div>
            <div className="map-ring ring-two"></div>
            <div className="map-ring ring-three"></div>
          </div>
          <div className="delivery-copy">
            <MapPin size={34} weight="fill" />
            <h2>Harare built.<br />Zimbabwe delivered.</h2>
            <p>We deliver nationwide. Share your location on WhatsApp and we will confirm the transport charge for your site.</p>
            <a className="button button-primary" href={whatsappHref('nationwide prefab delivery')} target="_blank" rel="noreferrer">
              Get delivery quote <ArrowRight size={19} />
            </a>
          </div>
        </section>

        <section className="final-cta">
          <div>
            <h2>When do you want yours?</h2>
            <p>Tell us the model, location, and changes you need. We will help you plan the next step.</p>
          </div>
          <div className="final-actions">
            <a className="button button-primary" href={whatsappHref()} target="_blank" rel="noreferrer">
              <WhatsappLogo size={21} weight="fill" /> Start on WhatsApp
            </a>
            <a className="phone-link" href="tel:+263775629947"><Phone size={20} weight="fill" /> {phoneDisplay}</a>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <span className="brand-mark"><HouseLine size={22} weight="fill" /></span>
          <strong>PrefabZW</strong>
        </div>
        <p>Strong steel prefab rooms and homes, customized and delivered nationwide.</p>
        <div className="footer-links">
          <a href={catalogUrl} target="_blank" rel="noreferrer">WhatsApp pictures <ArrowUpRight size={15} /></a>
          <a href="tel:+263775629947">Call {phoneDisplay}</a>
        </div>
        <small>All listed prices are VAT exclusive. Transport outside Harare is charged separately.</small>
      </footer>

      <a className="mobile-whatsapp" href={whatsappHref(selectedVariant.name)} target="_blank" rel="noreferrer" aria-label="Enquire on WhatsApp">
        <WhatsappLogo size={25} weight="fill" />
        <span>Enquire</span>
      </a>
    </div>
  );
}

export default App;
