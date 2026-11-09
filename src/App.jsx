import React, { useState, useEffect } from 'react'
import plannerImage from './assets/planner.jpg'
import './App.css'

const heroShowcaseItems = [
  {
    id: 'suya',
    title: 'Hot Beef Suya & Roasted Plantain (Dodo)',
    subtitle: 'Buea Street Suya Spot',
    description: 'Hot sizzling beef suya straight from the charcoal with spicy kankan pepper, sliced onions, and soft roast dodo',
    spice: '🌶️🌶️🌶️ Hot Kankan Pepper',
    stall: 'Hot Suya Spot',
    tokens: '1 Token',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1flMQnnL7zmUaTzM8n4rVW7TmBWZR_TBxC8etkdhGQXrVTHPgOfc44X3RS3PrEVLfqB9Kgk-5qIhzJd_lRtQLC2KnuV1LfVTMyC9J12DS6oHE4cZEcNSI75u9rVWqrsMwJ6fqCexId7K6FJncpbo841NH3dHhVT5UQfBe2U_OqeAsWZaaYHhSpyELWZ-dFlYmbNIjzMMdwaGo1bcYS5E6LSyxFXSegNsjeZenm38h',
  },
  {
    id: 'ndole',
    title: 'Sweet Eru, Achu & Ndolé Pots',
    subtitle: 'Better Country Chop',
    description: 'Traditional bubbling pots of Ndolé, yellow soup Achu with cow skin (canda), and sweet Eru with smoked fish',
    spice: '🍲 Pure Country Flavor',
    stall: 'Country Chop Spot',
    tokens: '1 Token',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSgTS-f-5UD74b60f9OTvEsDq5qnKqqF9ZAwH5-BH6XxtMtwpUMH3IPtpAdrnCY5moTpZpJYE7Dkhb5VUhZ3oCYXoanovtg_TgtBqOLqRBKWzA23PZSWYtwiY7aG_rX-d2NTR9McvEgNIDaUSE8NJLd31eED3iZHhwOL3z86kxgj7OnZnEQ9RU5rXRZ_4huiITed1TIxg6UXWeYbF8jkKG9IilH2AHbPoAyBLhkUe6',
  },
  {
    id: 'croaker',
    title: 'Limbe-Style Roasted Fish & Bobolo',
    subtitle: 'Fresh Roast Fish Stand',
    description: 'Fresh whole fish grilled on wire racks with hot ginger-garlic pepper, lime, and soft bobolo or miondo',
    spice: '🌶️🌶️ Fresh Hot Pepper',
    stall: 'Roast Fish Stand',
    tokens: '1 Token',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSR1PC3TO9FF2X7cPw8GrRsD8W3cYTCKuq3zuL-jYS3sjA9svTE4j8f7oSMoXLCZqOH29dNCuvf20PEgDbB-8KxfWau4uhnYK3pJ-8cTylsK0RNHP6Tv5bRwgfHFJ9kg27-ZV57PzyUn5lybAKp10UWD1-I8CDZO8VuT3O9ItYGlqvpCQ5m8eERnU2JDoFLvI6g0bQUiJJPBSPj6FfG7aQ-VkYlywD56BL8NFdlby3',
  },
  {
    id: 'puffpuff',
    title: 'Hot Round Puff-Puff & Cold Drinks',
    subtitle: 'Sweet Corner & Pastries',
    description: 'Golden hot puff-puff (beignets) dusted with sugar or chocolate sauce, cold drinks, and sweet pastries to cool down',
    spice: '🍩 Sweet & Chilled',
    stall: 'Sweet Corner',
    tokens: '1 Token',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_zGR8C_bIeNlvEBCM0IYOMMqm1OKOGRZ6JsGj4aeCS-azGX3WZDgePxWkLgKxYZR8D08ms_GHqJsGa007E7iJveOn_W8HRONiYlM38vLuVFaCevoYz9dgyX95aSXsdoZHJ5XnzpLf0-lvIMw6gC7TvkxlHivqe7vrFwEVUjPQpNCkbV-GQZOWuuNeU62ehQlgV52OTTBiYc8vFYD5IUV2vh6wsle1q9cRnBgJTRoi',
  },
]

// 4 Official Festival Tickets
const ticketTiers = [
  {
    id: 'starter',
    name: 'STARTER Ticket',
    series: 'SERIES CQ-26-T1',
    tierLabel: 'Tier 1',
    price: '2,000frs',
    priceNumber: 2000,
    tokens: 2,
    description: 'Starter pass with 2 tasting tokens to taste from any 2 vendors.',
    gate: 'GATE: TURNSTILE B',
    authText: 'CHOP-AUTH: VALID',
    isPopular: false,
    hasWine: false,
    perks: [
      { text: 'Tokens: 2', highlight: true, icon: 'token' },
      { text: 'Access to event', highlight: false, icon: 'check_circle' },
      { text: 'Taste from any 2 vendors', highlight: true, icon: 'storefront' },
    ],
    buttonText: 'Select Starter Ticket',
  },
  {
    id: 'explorer',
    name: 'EXPLORER Ticket',
    series: 'SERIES CQ-26-T2',
    tierLabel: 'Most Popular',
    price: '5,000frs',
    priceNumber: 5000,
    tokens: 6,
    description: 'Popular pass with 6 tasting tokens to taste from any 6 vendors.',
    gate: 'GATE: EXPRESS A',
    authText: 'FAST-TRACK: ACTIVE',
    isPopular: true,
    hasWine: false,
    perks: [
      { text: 'Tokens: 6', highlight: true, icon: 'token' },
      { text: 'Access to event', highlight: false, icon: 'check_circle' },
      { text: 'Taste from any 6 vendors', highlight: true, icon: 'storefront' },
    ],
    buttonText: 'Select Explorer Ticket',
  },
  {
    id: 'foodie',
    name: 'FOODIE Ticket',
    series: 'SERIES CQ-26-T3',
    tierLabel: 'Includes Wine',
    price: '10,000frs',
    priceNumber: 10000,
    tokens: 12,
    description: 'Feast pass with 12 tasting tokens, event access, and a bottle of wine.',
    gate: 'GATE: EXPRESS A',
    authText: 'PRIORITY: ACTIVE',
    isPopular: false,
    hasWine: true,
    perks: [
      { text: 'Tokens: 12', highlight: true, icon: 'token' },
      { text: 'Access to event', highlight: false, icon: 'check_circle' },
      { text: 'Taste from any 12 vendors', highlight: true, icon: 'storefront' },
      { text: 'A bottle of wine', highlight: true, icon: 'wine_bar', special: true },
    ],
    buttonText: 'Select Foodie Ticket',
  },
  {
    id: 'ultimate',
    name: 'Ultimate Ticket',
    series: 'SERIES CQ-26-VIP',
    tierLabel: 'Ultimate VIP',
    price: '15,000frs',
    priceNumber: 15000,
    tokens: 20,
    description: 'The maximum package: 20 tokens to taste from 20 vendors plus a bottle of wine.',
    gate: 'GATE: VIP SUITE ENTRY',
    authText: 'ALL-ACCESS: YES',
    isPopular: false,
    hasWine: true,
    perks: [
      { text: 'Token: 20', highlight: true, icon: 'token' },
      { text: 'Access to event', highlight: false, icon: 'check_circle' },
      { text: 'Taste from any 20 vendors', highlight: true, icon: 'storefront' },
      { text: 'A bottle of wine', highlight: true, icon: 'wine_bar', special: true },
    ],
    buttonText: 'Select Ultimate Ticket',
  },
]

// Event Date: Friday, December 18, 2026 at 14:00 Prompt
const TARGET_DATE = new Date('2026-12-18T14:00:00')
const PAGE_IDS = ['experience', 'food-hubs', 'token-guide', 'passes', 'festival-fun', 'about']

const getPageFromHash = () => {
  const page = window.location.hash.startsWith('#/')
    ? window.location.hash.slice(2)
    : 'experience'

  return PAGE_IDS.includes(page) ? page : 'experience'
}

export default function App() {
  const [activeHeroDish, setActiveHeroDish] = useState(heroShowcaseItems[0])
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedPass, setSelectedPass] = useState(ticketTiers[1]) // Explorer Ticket default
  const [activeNav, setActiveNav] = useState(getPageFromHash)
  const [faqOpen, setFaqOpen] = useState([true, false, false, false])

  // Live countdown to Dec 18, 2026
  const calculateTimeLeft = () => {
    const now = new Date()
    const diff = TARGET_DATE - now
    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handlePageChange = () => {
      if (!window.location.hash.startsWith('#/')) return
      setActiveNav(getPageFromHash())
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('hashchange', handlePageChange)
    return () => window.removeEventListener('hashchange', handlePageChange)
  }, [])

  const handleSelectPass = (tier) => {
    setSelectedPass(tier)
  }

  const toggleFaq = (index) => {
    setFaqOpen((prev) => {
      const next = [...prev]
      next[index] = !next[index]
      return next
    })
  }

  const format2Digits = (num) => String(num).padStart(2, '0')

  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased min-h-screen selection:bg-primary-container selection:text-on-primary">
      {/* HEADER NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="min-h-20 w-full px-gutter-mobile lg:px-margin py-space-sm flex flex-wrap items-center justify-between gap-space-md">
          <a
            className="flex items-center gap-space-sm group"
            href="#/experience"
          >
            <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary-container transition-all">
              <span className="material-symbols-outlined text-[24px]">local_fire_department</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm uppercase tracking-wider text-on-surface leading-none">
                CHOPQUEST
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                Buea Street Feast
              </span>
            </div>
          </a>

          <nav className="order-3 w-full xl:order-none xl:w-auto flex items-center gap-space-xs overflow-x-auto whitespace-nowrap" aria-label="Main navigation">
            {[
              { id: 'experience', label: 'Experience' },
              { id: 'food-hubs', label: 'Wetin Dey For Chop' },
              { id: 'token-guide', label: 'How Tokens Work' },
              { id: 'passes', label: 'Festival Tickets' },
              { id: 'festival-fun', label: 'More Fun' },
              { id: 'about', label: 'About' },
            ].map((page) => (
              <a
                key={page.id}
                href={`#/${page.id}`}
                aria-current={activeNav === page.id ? 'page' : undefined}
                className={`px-space-md py-space-sm transition-all uppercase tracking-wide font-label-md rounded-lg ${
                  activeNav === page.id
                    ? 'text-on-surface bg-surface-container-high'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`}
              >
                {page.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-space-md">
            <a
              className="hidden sm:inline-flex items-center justify-center px-space-lg py-space-sm rounded-lg bg-gradient-to-r from-primary-container to-tertiary-container text-on-primary-container font-label-lg text-label-lg uppercase tracking-wider shadow-[0_8px_32px_-4px_rgba(255,75,38,0.35)] hover:shadow-[0_8px_32px_-2px_rgba(255,75,38,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              href="#/passes"
            >
              Get Festival Tickets
            </a>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="page-main w-full pt-32 xl:pt-20 bg-surface min-h-[calc(100vh-80px)]">
        <div className="flex flex-col w-full">
          {/* SECTION 1: EDITORIAL SPLIT HERO */}
          <section id="hero" style={{ display: activeNav === 'experience' ? undefined : 'none' }} className="relative w-full px-gutter-mobile lg:px-margin pt-space-xl pb-space-xl overflow-hidden">
            {/* Atmospheric Ambient Glows */}
            <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary-container/15 blur-3xl pointer-events-none"></div>
            <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center relative z-10">
              {/* Hero Left: High-Impact Typography & Action Suite */}
              <div className="lg:col-span-7 flex flex-col gap-space-lg">
                {/* Live Status Badge */}
                <div className="inline-flex items-center gap-space-sm px-space-md py-space-xs rounded-full bg-surface-container-high w-fit shadow-md">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse"></span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                    MOLYKO OMNISPORT STADIUM • DECEMBER 18, 2026
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-medium hidden sm:inline">
                    • BUEA STREET FEAST
                  </span>
                </div>

                {/* Headline & Editorial Tagline */}
                <div className="flex flex-col gap-space-xs">
                  <h1 className="font-display-xl text-display-xl uppercase tracking-tighter text-on-surface leading-none">
                    BUEA’S BIGGEST <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container via-tertiary-container to-secondary">
                      STREET FOOD CARNIVAL:
                    </span>
                    <br />
                    CHOPQUEST
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl pt-space-xs">
                    The biggest street food party in Buea! Hot soya, fresh roast fish with bobolo, sweet country pots, fast food, and heavy Afrobeats basslines live under Mount Fako's night sky. Belle go full!
                  </p>
                </div>

                {/* Value Proposition Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-sm max-w-lg">
                  <div className="flex items-center gap-space-xs p-space-sm rounded-lg bg-surface-container-low shadow-sm">
                    <span className="material-symbols-outlined text-primary-container text-[20px]">lunch_dining</span>
                    <span className="font-label-md text-label-md text-on-surface font-medium">Multiple Food Booths</span>
                  </div>
                  <div className="flex items-center gap-space-xs p-space-sm rounded-lg bg-surface-container-low shadow-sm">
                    <span className="material-symbols-outlined text-secondary text-[20px]">token</span>
                    <span className="font-label-md text-label-md text-on-surface font-medium">Tasting Tokens</span>
                  </div>
                  <div className="flex items-center gap-space-xs p-space-sm rounded-lg bg-surface-container-low shadow-sm col-span-2 sm:col-span-1">
                    <span className="material-symbols-outlined text-tertiary text-[20px]">qr_code_scanner</span>
                    <span className="font-label-md text-label-md text-on-surface font-medium">Instant MoMo QR</span>
                  </div>
                </div>

                {/* CTA Buttons Row */}
                <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                  <a
                    className="inline-flex items-center justify-center gap-space-sm px-space-xl py-space-md rounded-lg bg-gradient-to-r from-primary-container to-tertiary-container text-on-primary-container font-label-lg text-label-lg uppercase tracking-wider shadow-[0_8px_32px_-4px_rgba(255,75,38,0.35)] hover:shadow-[0_8px_32px_-2px_rgba(255,75,38,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all"
                    href="#/passes"
                  >
                    <span>Grab Festival Tickets</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </a>
                  <a
                    className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-md rounded-lg bg-surface-container-high text-secondary hover:text-on-surface hover:bg-surface-bright transition-all font-label-lg text-label-lg uppercase tracking-wider shadow-sm"
                    href="#/token-guide"
                  >
                    <span className="material-symbols-outlined text-[18px]">help_center</span>
                    <span>How Tokens Work</span>
                  </a>
                </div>

                {/* Live Countdown Clock Widget */}
                <div className="p-space-md rounded-xl bg-surface-container-lowest max-w-lg shadow-md flex items-center justify-between gap-space-sm">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
                      STADIUM GATES OPEN IN
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Friday 18 Dec 2026, 14:00 Prompt
                    </span>
                  </div>
                  <div className="flex items-center gap-space-xs text-secondary font-label-md">
                    <div className="flex flex-col items-center bg-surface-container px-space-sm py-1 rounded">
                      <span className="font-headline-sm text-headline-sm leading-none text-on-surface font-bold">
                        {format2Digits(timeLeft.days)}
                      </span>
                      <span className="text-[10px] text-on-surface-variant uppercase">Days</span>
                    </div>
                    <span className="font-bold text-on-surface-variant">:</span>
                    <div className="flex flex-col items-center bg-surface-container px-space-sm py-1 rounded">
                      <span className="font-headline-sm text-headline-sm leading-none text-on-surface font-bold">
                        {format2Digits(timeLeft.hours)}
                      </span>
                      <span className="text-[10px] text-on-surface-variant uppercase">Hours</span>
                    </div>
                    <span className="font-bold text-on-surface-variant">:</span>
                    <div className="flex flex-col items-center bg-surface-container px-space-sm py-1 rounded">
                      <span className="font-headline-sm text-headline-sm leading-none text-on-surface font-bold">
                        {format2Digits(timeLeft.minutes)}
                      </span>
                      <span className="text-[10px] text-on-surface-variant uppercase">Mins</span>
                    </div>
                    <span className="font-bold text-on-surface-variant">:</span>
                    <div className="flex flex-col items-center bg-surface-container px-space-sm py-1 rounded">
                      <span className="font-headline-sm text-headline-sm leading-none text-primary-container font-bold">
                        {format2Digits(timeLeft.seconds)}
                      </span>
                      <span className="text-[10px] text-on-surface-variant uppercase">Secs</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hero Right: Interactive Culinary Showcase Stage */}
              <div className="lg:col-span-5 flex flex-col gap-space-md relative">
                {/* Floating Interactive Master Plate */}
                <div className="relative rounded-2xl overflow-hidden bg-surface-container shadow-2xl transition-all duration-300">
                  <div className="relative h-96 w-full">
                    <img
                      className="w-full h-full object-cover transition-all duration-500"
                      src={activeHeroDish.image}
                      alt={activeHeroDish.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>

                    {/* Real-time Status Badges Floating */}
                    <div className="absolute top-space-md left-space-md flex flex-wrap gap-space-xs">
                      <span className="px-space-sm py-1 rounded bg-primary-container text-on-primary-container font-label-sm text-label-sm uppercase font-bold tracking-wider shadow-sm flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">local_fire_department</span>
                        {activeHeroDish.stall}
                      </span>
                      <span className="px-space-sm py-1 rounded bg-surface-container-highest/90 backdrop-blur-md text-secondary font-label-sm text-label-sm uppercase font-semibold">
                        {activeHeroDish.subtitle}
                      </span>
                    </div>

                    {/* Heat & Token Overlay */}
                    <div className="absolute bottom-space-md left-space-md right-space-md flex items-end justify-between">
                      <div>
                        <div className="flex items-center gap-1 text-primary-container text-xs mb-1">
                          <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">
                            {activeHeroDish.spice}
                          </span>
                        </div>
                        <h3 className="font-headline-md text-headline-md text-on-surface uppercase leading-tight">
                          {activeHeroDish.title}
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          {activeHeroDish.description}
                        </p>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                          FESTIVAL TASTER
                        </span>
                        <span className="px-space-md py-1.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md uppercase font-bold shadow-md">
                          {activeHeroDish.tokens}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Mini-Deck Thumbnails */}
                <div className="grid grid-cols-3 gap-space-sm">
                  {heroShowcaseItems.slice(1, 4).map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setActiveHeroDish(item)}
                      className={`p-space-sm rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-1 cursor-pointer transition-all ${
                        activeHeroDish.id === item.id
                          ? 'ring-2 ring-primary-container bg-surface-container'
                          : 'hover:bg-surface-container'
                      }`}
                    >
                      <div className="w-full h-16 rounded overflow-hidden relative">
                        <img className="w-full h-full object-cover" src={item.image} alt={item.title} />
                        <span className="absolute bottom-1 right-1 px-1 bg-surface-container-lowest/80 text-[10px] text-secondary font-bold rounded">
                          {item.tokens}
                        </span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface truncate font-semibold uppercase">
                        {item.title.split('&')[0]}
                      </span>
                      <span className="text-[10px] text-on-surface-variant truncate">{item.subtitle}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ANIMATED TICKER RIBBON */}
          <div style={{ display: activeNav === 'experience' ? undefined : 'none' }} className="w-full bg-surface-container-high py-space-sm overflow-hidden select-none shadow-sm">
            <div className="animate-marquee flex items-center gap-space-xl whitespace-nowrap">
              <span className="flex items-center gap-space-sm font-label-md text-label-md uppercase tracking-widest text-secondary font-bold">
                <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                HOT SOYA &amp; ROAST PORK (CHOFI)
              </span>
              <span className="flex items-center gap-space-sm font-label-md text-label-md uppercase tracking-widest text-on-surface font-semibold">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                FRESH ROAST FISH &amp; BOBOLO
              </span>
              <span className="flex items-center gap-space-sm font-label-md text-label-md uppercase tracking-widest text-primary font-bold">
                <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                STEAMING ACHU, ERU &amp; NDOLÉ
              </span>
              <span className="flex items-center gap-space-sm font-label-md text-label-md uppercase tracking-widest text-on-surface-variant font-semibold">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                HOT SHAWARMA, WINGS &amp; LOADED CHIPS
              </span>
              <span className="flex items-center gap-space-sm font-label-md text-label-md uppercase tracking-widest text-tertiary font-bold">
                <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                HOT PUFF-PUFF &amp; ICE COLD DRINKS
              </span>
              <span className="flex items-center gap-space-sm font-label-md text-label-md uppercase tracking-widest text-secondary font-bold">
                <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                DECEMBER 18, 2026 • BUEA
              </span>
            </div>
          </div>

          {/* SECTION 2: THE TASTING TOKEN OPERATING SYSTEM */}
          <section style={{ display: activeNav === 'experience' || activeNav === 'token-guide' ? undefined : 'none' }} className="w-full px-gutter-mobile lg:px-margin py-space-xl bg-surface-container-lowest" id="token-engine">
            <div className="flex flex-col gap-space-xl max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center gap-space-xs text-primary font-label-md text-label-md uppercase tracking-widest font-bold">
                    <span className="material-symbols-outlined text-[18px]">generating_tokens</span>
                    <span>Zero Line • Fast Chop Experience</span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
                    How The Tasting Token System Works
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                    No need to hold cash or count change at every spot! Every festival ticket comes loaded with tokens. Enter the stadium, hand 1 token to any booth, and get your sample plate right away.
                  </p>
                </div>
                <div className="flex items-center gap-space-sm px-space-md py-space-xs rounded-lg bg-surface-container text-secondary font-label-sm text-label-sm uppercase font-semibold">
                  <span className="material-symbols-outlined text-[18px]">bolt</span>
                  <span>1 Token = 1 Tasting Sample</span>
                </div>
              </div>

              {/* Interactive Flow Pipeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter relative">
                {/* Step 01 */}
                <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col gap-space-md shadow-md relative group hover:bg-surface-container transition-all">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">01</span>
                    <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary-container transition-all">
                      <span className="material-symbols-outlined text-[22px]">payments</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">Buy Ticket via MoMo</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Choose your ticket online. Pay in seconds with MTN Mobile Money or Orange Money. Your QR ticket drops immediately on your WhatsApp and SMS.
                    </p>
                  </div>
                  <div className="mt-auto pt-space-sm flex items-center gap-space-xs text-secondary font-label-sm text-label-sm uppercase font-semibold">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                    <span>Instant SMS &amp; WhatsApp QR</span>
                  </div>
                </div>

                {/* Step 02 */}
                <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col gap-space-md shadow-md relative group hover:bg-surface-container transition-all">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-headline-sm text-secondary font-bold">02</span>
                    <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary group-hover:bg-secondary-container group-hover:text-on-secondary-container transition-all">
                      <span className="material-symbols-outlined text-[22px]">tap_and_play</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">Scan &amp; Collect Tokens</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Reach Molyko Stadium Gate A, show your phone QR code to the scanner. Collect your festival wristband and your bag of tasting tokens in under 45 seconds.
                    </p>
                  </div>
                  <div className="mt-auto pt-space-sm flex items-center gap-space-xs text-secondary font-label-sm text-label-sm uppercase font-semibold">
                    <span className="material-symbols-outlined text-[16px]">timer</span>
                    <span>Quick Entry • No Wahala</span>
                  </div>
                </div>

                {/* Step 03 */}
                <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col gap-space-md shadow-md relative group hover:bg-surface-container transition-all">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-headline-sm text-tertiary font-bold">03</span>
                    <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-tertiary group-hover:bg-tertiary-container group-hover:text-on-tertiary-container transition-all">
                      <span className="material-symbols-outlined text-[22px]">restaurant</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">Drop Token, Chop Chop!</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Waka enter any food booth: hot soya, roast fish, Achu, or shawarma. Drop 1 token and collect your hot curated taster immediately.
                    </p>
                  </div>
                  <div className="mt-auto pt-space-sm flex items-center gap-space-xs text-secondary font-label-sm text-label-sm uppercase font-semibold">
                    <span className="material-symbols-outlined text-[16px]">done_all</span>
                    <span>Every Booth Accepts Tokens</span>
                  </div>
                </div>

                {/* Step 04 */}
                <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col gap-space-md shadow-md relative group hover:bg-surface-container transition-all">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">04</span>
                    <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-surface-bright transition-all">
                      <span className="material-symbols-outlined text-[22px]">takeout_dining</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">Belle Never Full? Order More!</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      If you like any food well-well, you can buy a full portion or takeaway plate with cash or MoMo QR, or top up extra tokens at any kiosk inside the field.
                    </p>
                  </div>
                  <div className="mt-auto pt-space-sm flex items-center gap-space-xs text-secondary font-label-sm text-label-sm uppercase font-semibold">
                    <span className="material-symbols-outlined text-[16px]">add_circle</span>
                    <span>Token Top-Up On Ground</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: WETIN DEY FOR CHOP */}
          <section style={{ display: activeNav === 'experience' || activeNav === 'food-hubs' ? undefined : 'none' }} className="w-full px-gutter-mobile lg:px-margin py-space-xl" id="food-hubs">
            <div className="flex flex-col gap-space-lg max-w-7xl mx-auto">
              {/* Section Title & Category Filter Badges */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-md text-label-md text-primary uppercase tracking-widest font-bold">
                    Wetin You Go Chop? • Food Lineup
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
                    What You Go Chop For CHOPQUEST
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                    No big grammar here! Walk around with your token, enter any booth you like, and taste better street food. From hot soya and fresh roast fish to sweet Achu and crispy shawarma — belle go full!
                  </p>
                </div>
                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-space-xs">
                  {[
                    { id: 'all', label: 'All Chops' },
                    { id: 'suya', label: 'Suya & Chofi' },
                    { id: 'country', label: 'Achu & Eru' },
                    { id: 'fish', label: 'Roast Fish' },
                    { id: 'fastfood', label: 'Fast Food' },
                    { id: 'sweet', label: 'Puff-Puff' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveFilter(tab.id)}
                      className={`px-space-md py-space-xs rounded-full font-label-sm text-label-sm uppercase font-bold transition-all ${
                        activeFilter === tab.id
                          ? 'bg-primary-container text-on-primary-container shadow-sm'
                          : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bento Grid Mosaic */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter">
                {/* BENTO LARGE: Hot Suya & Roast Pork (Chofi) */}
                <div
                  className={`lg:col-span-8 rounded-2xl bg-surface-container overflow-hidden shadow-xl flex flex-col justify-between relative group min-h-[440px] transition-all duration-300 ${
                    activeFilter !== 'all' && activeFilter !== 'suya' ? 'opacity-40 scale-[0.98]' : 'opacity-100'
                  }`}
                >
                  <div className="absolute inset-0">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9knV92WPOtEvRhVsHarNbYDuz4Dbtf2QwPuMdp-QOw5n-9jjsIcv3OQY3er_qO63XDEQaYplV4cDJOp0ZWrEScg5qxm-NiFalzAtZuUUw7f3E-dxn4o82e8UEp2X1U65WSazzGCMiyMWPySbvwoEK1BhFvTDdQchOy6RV30Jfg7CKJpMoR_7jcgUaPYMCup1rdOD6EWKmLbKmjg214g79n4crA-fvjbSxJq7Dv_9h"
                      alt="Hot Suya & Chofi on Grill"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent"></div>
                  </div>
                  <div className="relative z-10 p-space-lg flex justify-between items-start">
                    <div className="flex items-center gap-space-xs">
                      <span className="px-space-sm py-1 rounded bg-primary-container text-on-primary-container font-label-sm text-label-sm uppercase font-bold">
                        CHOP 01
                      </span>
                      <span className="px-space-sm py-1 rounded bg-surface-container-lowest/80 text-secondary font-label-sm text-label-sm uppercase">
                        Hot Grill &amp; Braziers
                      </span>
                    </div>
                    <div className="px-space-md py-1 rounded-full bg-surface-container-highest/90 text-on-surface font-label-sm text-label-sm font-semibold">
                      Status: <span className="text-secondary font-bold">Hot From Fire 🔥</span>
                    </div>
                  </div>
                  <div className="relative z-10 p-space-lg flex flex-col gap-space-xs">
                    <div className="flex items-center gap-space-xs text-primary-container font-label-sm text-label-sm font-bold uppercase">
                      <span>🌶️🌶️🌶️ Hot Kankan Pepper</span>
                      <span>•</span>
                      <span className="text-secondary">Sliced Raw Onions &amp; Soft Dodo</span>
                    </div>
                    <h3 className="font-headline-lg text-headline-lg text-on-surface uppercase leading-none">
                      Hot Beef Suya, Roast Pork (Chofi) &amp; Dodo
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                      Na here hot soya dey cry on top charcoal fire! Tender beef suya on skewers, sweet spicy roast pork (chofi), roasted plantain (dodo), and seasoned gizzards. Drop 1 token and collect your hot taster with plenty pepper.
                    </p>
                    <div className="flex items-center justify-between pt-space-sm">
                      <span className="font-label-md text-label-md text-secondary font-semibold">
                        Certified street grillers • Open to all token holders
                      </span>
                      <span className="font-label-md text-label-md text-on-surface uppercase bg-surface-container-high px-space-md py-1 rounded-lg">
                        1 Token Sample
                      </span>
                    </div>
                  </div>
                </div>

                {/* BENTO MEDIUM: Traditional Soups & Swallows (Country Chop) */}
                <div
                  className={`lg:col-span-4 rounded-2xl bg-surface-container overflow-hidden shadow-xl flex flex-col justify-between relative group min-h-[440px] transition-all duration-300 ${
                    activeFilter !== 'all' && activeFilter !== 'country' ? 'opacity-40 scale-[0.98]' : 'opacity-100'
                  }`}
                >
                  <div className="absolute inset-0">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbDAb19B7vnid_6cFW7FAfN31cehYaS9NLke_Y9tT2gbsVSmZph1Tc3Hef6QWc-3_qBG6Nr4CT4XdAprfwwgPmbl7EeONcAY3x14Y24W6dU8GCJ5c_JtrbWPGITsIHbz1TJZ3NPp6x5KjPGxEdONexL3fNGcABUGBmQejQi88yVt7ZAGem1bk7xT_iT12d2ziVIouuY5eO32hl37M4n1It0Sb9nMH38PIcQC6x5_Bn"
                      alt="Achu & Eru Country Chop"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent"></div>
                  </div>
                  <div className="relative z-10 p-space-lg flex justify-between items-start">
                    <span className="px-space-sm py-1 rounded bg-secondary text-on-secondary font-label-sm text-label-sm uppercase font-bold">
                      CHOP 02
                    </span>
                    <span className="px-space-sm py-1 rounded bg-surface-container-lowest/80 text-secondary font-label-sm text-label-sm uppercase">
                      Sweet Country Chop
                    </span>
                  </div>
                  <div className="relative z-10 p-space-lg flex flex-col gap-space-xs">
                    <div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm font-bold uppercase">
                      <span>🍲 Swallows &amp; Heritage Pots</span>
                      <span>•</span>
                      <span>Belle Full</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-surface uppercase leading-tight">
                      Steaming Achu, Sweet Eru &amp; Ndolé Pots
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Country chop wey sweet pass! Steaming yellow soup Achu with soft cow skin (canda), smooth Waterfufu with sweet green Eru simmered with smoked fish, and rich Ndolé with plantains.
                    </p>
                    <div className="pt-space-xs flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Home-style taste • Taste any booth
                      </span>
                      <span className="font-label-sm text-label-sm text-secondary font-bold">1 Token</span>
                    </div>
                  </div>
                </div>

                {/* BENTO MEDIUM: Roasted Fish & Bobolo */}
                <div
                  className={`lg:col-span-4 rounded-2xl bg-surface-container overflow-hidden shadow-xl flex flex-col justify-between relative group min-h-[360px] transition-all duration-300 ${
                    activeFilter !== 'all' && activeFilter !== 'fish' ? 'opacity-40 scale-[0.98]' : 'opacity-100'
                  }`}
                >
                  <div className="absolute inset-0">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5vNFUt5XK7Ek3rBU5dDINXnE_nZcVgWzsAdKcgl1_gjDlHJvz1MhyaxY9qHTNkJg8_-5PJJXOi7GuvpukhAL910k6dGHBundR1Qj5eOgODLqgvgUIF3emvdQKZeKCY0ampJd9obf4D2yrFuAutwiJGQptYLigicrXiLOwAGpwQjF4VgHqApJlGM0SY0fm51MJTFyCzt4JZyzcYXsh1imaA8qJ5kaiumpuyXoa3KCc"
                      alt="Limbe Style Roasted Fish"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent"></div>
                  </div>
                  <div className="relative z-10 p-space-md flex justify-between items-start">
                    <span className="px-space-sm py-1 rounded bg-tertiary text-on-tertiary font-label-sm text-label-sm uppercase font-bold">
                      CHOP 03
                    </span>
                    <span className="px-space-sm py-1 rounded bg-surface-container-lowest/80 text-on-surface font-label-sm text-label-sm uppercase">
                      Roast Fish Stand
                    </span>
                  </div>
                  <div className="relative z-10 p-space-md flex flex-col gap-space-xs">
                    <span className="font-label-sm text-label-sm text-tertiary font-bold uppercase">
                      Limbe-Style Roast Fish
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">
                      Roast Fish, Bobolo &amp; Hot Pepper
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Fresh whole croaker and bar fish grilled on hot wire racks with ginger-garlic pepper sauce. Served with hot bobolo, miondo, and fried dodo plantain.
                    </p>
                    <div className="flex items-center justify-between pt-space-xs">
                      <span className="font-label-sm text-label-sm text-secondary font-semibold">1 Token Portion</span>
                      <span className="material-symbols-outlined text-secondary text-[18px]">set_meal</span>
                    </div>
                  </div>
                </div>

                {/* BENTO SMALL: Fast Food, Shawarma & Loaded Chips */}
                <div
                  className={`lg:col-span-4 rounded-2xl bg-surface-container overflow-hidden shadow-xl flex flex-col justify-between relative group min-h-[360px] transition-all duration-300 ${
                    activeFilter !== 'all' && activeFilter !== 'fastfood' ? 'opacity-40 scale-[0.98]' : 'opacity-100'
                  }`}
                >
                  <div className="absolute inset-0">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRzdcHv4Esw1L9asFQfYiuwLH3Jy2Y08yBkrHG_1y8xcHU0PC0OSl0yP-_YUhUoFcdCRzbFmrvT7CoOWUXjKmQ2NTxnSRfaq-eBjsFj3n8knySOsEOaypOFwH4cHQBzDo-z4ITXJJIo02FoLYfijRu-_NiwuiSqh8IuGsvbHdnLxYjqcjhHqB_4i_LL5vjbXGjFxL5h46GuZMojWhc1j23vupadrtXIpRDLBFOnHev"
                      alt="Fast Food, Shawarma and Loaded Chips"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent"></div>
                  </div>
                  <div className="relative z-10 p-space-md flex justify-between items-start">
                    <span className="px-space-sm py-1 rounded bg-primary-container text-on-primary-container font-label-sm text-label-sm uppercase font-bold">
                      CHOP 04
                    </span>
                    <span className="px-space-sm py-1 rounded bg-surface-container-lowest/80 text-on-surface font-label-sm text-label-sm uppercase">
                      Street Fast Bites
                    </span>
                  </div>
                  <div className="relative z-10 p-space-md flex flex-col gap-space-xs">
                    <span className="font-label-sm text-label-sm text-primary font-bold uppercase">
                      Quick Chop &amp; Flex
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">
                      Shawarma, Loaded Chips &amp; Wings
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Hot beef and chicken shawarma wraps, loaded plantain fries, crunchy chicken wings, and juicy street burgers for quick eating while you groove to the music.
                    </p>
                    <div className="flex items-center justify-between pt-space-xs">
                      <span className="font-label-sm text-label-sm text-secondary font-semibold">1 Token Sample</span>
                      <span className="material-symbols-outlined text-secondary text-[18px]">fastfood</span>
                    </div>
                  </div>
                </div>

                {/* BENTO SMALL: Puff-Puff & Cold Drinks */}
                <div
                  className={`lg:col-span-4 rounded-2xl bg-surface-container overflow-hidden shadow-xl flex flex-col justify-between relative group min-h-[360px] transition-all duration-300 ${
                    activeFilter !== 'all' && activeFilter !== 'sweet' ? 'opacity-40 scale-[0.98]' : 'opacity-100'
                  }`}
                >
                  <div className="absolute inset-0">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAww4Je-L2sDzVjgHLNdywcWvBGcs6t50XCQ_uQu96Wr_RWt-dI7gBQxKN80avEmQjldhOEHXynJSaIIBDtUyhaXEFMClb0IyDf8MyCqL9uzj8-MWdvBYZZaYLM44hi4NXxSUr0r6KuMXOyJ8F4X89c8rfqnxThsoOoDJLHf4nb7PIvEs9YV9aZLcGcb0NOC4yXi0giZRpZPHGI4o-CWEwIV8vWNMYthqBw8n84GRls"
                      alt="Hot Round Puff-Puff & Sweets"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent"></div>
                  </div>
                  <div className="relative z-10 p-space-md flex justify-between items-start">
                    <span className="px-space-sm py-1 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase font-bold">
                      CHOP 05
                    </span>
                    <span className="px-space-sm py-1 rounded bg-surface-container-lowest/80 text-secondary font-label-sm text-label-sm uppercase">
                      Sweet Corner
                    </span>
                  </div>
                  <div className="relative z-10 p-space-md flex flex-col gap-space-xs">
                    <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">
                      Cool Down The Pepper
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">
                      Hot Round Puff-Puff &amp; Cold Drinks
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Golden hot puff-puff (beignets) dusted with sugar or chocolate sauce, cold soft drinks, ice slushies, and fruit cups to calm down the pepper for your body!
                    </p>
                    <div className="flex items-center justify-between pt-space-xs">
                      <span className="font-label-sm text-label-sm text-secondary font-semibold">1 Token Plate</span>
                      <span className="material-symbols-outlined text-secondary text-[18px]">bakery_dining</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-space-md rounded-2xl bg-surface-container-lowest p-space-lg md:p-space-xl">
                <div className="flex flex-col gap-space-xs mb-space-lg">
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
                    More Cameroon flavors
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface uppercase">
                    A few more to look forward to
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-sm">
                  <article className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
                    <span className="material-symbols-outlined text-secondary">soup_kitchen</span>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface uppercase">Koki &amp; plantain</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Steamed black-eyed peas with palm oil, often enjoyed with ripe plantain.
                    </p>
                  </article>
                  <article className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
                    <span className="material-symbols-outlined text-tertiary">outdoor_grill</span>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface uppercase">Cornchaff</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      A hearty corn-and-beans dish, cooked with palm oil and savory seasoning.
                    </p>
                  </article>
                  <article className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
                    <span className="material-symbols-outlined text-primary">local_fire_department</span>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface uppercase">Roast corn &amp; plums</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Smoky roasted corn paired with buttery African plums when in season.
                    </p>
                  </article>
                  <article className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
                    <span className="material-symbols-outlined text-secondary">restaurant</span>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface uppercase">Grilled chicken &amp; dodo</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Spiced grilled chicken served with sweet fried or roasted plantain.
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </section>

          {/* VENDOR CALL-OUT CARD */}
          <section
            style={{
              display: activeNav === 'experience' || activeNav === 'food-hubs' ? undefined : 'none',
              marginBottom: activeNav === 'food-hubs' ? '50px' : undefined,
            }}
            className="w-full px-gutter-mobile lg:px-margin py-space-sm"
          >
            <div className="max-w-7xl mx-auto p-space-md rounded-2xl bg-surface-container-high/60 border border-secondary/20 flex flex-col sm:flex-row items-center justify-between gap-space-md">
              <div className="flex items-center gap-space-md">
                <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container shrink-0">
                  <span className="material-symbols-outlined text-[26px]">storefront</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface uppercase leading-tight">
                    Are You A Food Vendor or Street Chef?
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Vendor registrations are currently open for December 18, 2026. Secure your official booth space at Molyko Stadium today.
                  </p>
                </div>
              </div>
              <a
                href="#/passes"
                className="whitespace-nowrap px-space-lg py-space-sm rounded-lg bg-secondary text-on-secondary font-label-md text-label-md uppercase font-bold hover:bg-secondary-fixed transition-all"
              >
                Inquire For Booth
              </a>
            </div>
          </section>

          {/* SECTION 4: 4 OFFICIAL FESTIVAL TICKETS */}
          <section style={{ display: activeNav === 'experience' || activeNav === 'passes' ? undefined : 'none' }} className="w-full px-gutter-mobile lg:px-margin py-space-xl bg-surface-container-lowest relative" id="passes-section">
            <div className="flex flex-col gap-space-xl max-w-7xl mx-auto">
              {/* Passes Headline */}
              <div className="text-center flex flex-col items-center gap-space-xs max-w-2xl mx-auto">
                <span className="font-label-md text-label-md text-primary uppercase tracking-widest font-bold">
                  Official Admission Tickets
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
                  Choose Your Festival Ticket
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Every ticket includes full event access and tokens to taste from vendors at Molyko Stadium on December 18, 2026. Higher tiers include a bottle of wine!
                </p>
              </div>

              {/* Passes Card Grid (4 Cards) */}
              <div className={activeNav === 'passes'
                ? 'ticket-page-list flex flex-col gap-space-md'
                : 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-gutter items-stretch'}
              >
                {ticketTiers.map((tier) => {
                  const isSelected = selectedPass.id === tier.id

                  return (
                    <div
                      key={tier.id}
                      className={`ticket-card ${activeNav === 'passes' ? 'ticket-row-card' : ''} flex flex-col rounded-2xl shadow-xl transition-all duration-300 relative group hover:-translate-y-1 ${
                        tier.isPopular
                          ? 'bg-surface-container shadow-2xl ring-2 ring-secondary/50'
                          : tier.id === 'ultimate'
                          ? 'bg-surface-container shadow-2xl ring-1 ring-primary-container/40'
                          : 'bg-surface-container-low'
                      } ${isSelected ? 'ring-2 ring-primary-container shadow-[0_0_24px_rgba(255,86,51,0.25)]' : ''}`}
                    >
                      {/* Featured Holographic Badge */}
                      {tier.isPopular && (
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-space-md py-1 rounded-full bg-gradient-to-r from-secondary to-tertiary text-on-secondary font-label-sm text-label-sm uppercase font-bold tracking-widest shadow-md whitespace-nowrap">
                          ★ MOST POPULAR ★
                        </div>
                      )}
                      {tier.id === 'ultimate' && (
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-space-md py-1 rounded-full bg-gradient-to-r from-primary-container to-secondary text-on-primary-container font-label-sm text-label-sm uppercase font-bold tracking-widest shadow-md whitespace-nowrap">
                          👑 20 TOKENS + WINE
                        </div>
                      )}
                      {tier.id === 'foodie' && (
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-space-md py-1 rounded-full bg-surface-container-high border border-secondary/40 text-secondary font-label-sm text-label-sm uppercase font-bold tracking-widest shadow-sm whitespace-nowrap">
                          🍷 WINE INCLUDED
                        </div>
                      )}

                      {/* Ticket Header */}
                      <div className={`${activeNav === 'passes' ? 'ticket-row-details' : ''} p-space-lg flex flex-col gap-space-md ${tier.isPopular || tier.id === 'ultimate' || tier.id === 'foodie' ? 'pt-space-xl' : ''}`}>
                        <div className="flex justify-end items-start">
                          {activeNav === 'passes' && <span className="ticket-series">{tier.series}</span>}
                          <span
                            className={`px-space-sm py-1 rounded font-label-sm text-label-sm uppercase font-semibold ${
                              tier.id === 'ultimate'
                                ? 'bg-primary-container/20 text-primary'
                                : tier.id === 'foodie'
                                ? 'bg-tertiary/20 text-tertiary'
                                : tier.id === 'explorer'
                                ? 'bg-secondary/20 text-secondary'
                                : 'bg-surface-container text-on-surface-variant'
                            }`}
                          >
                            {tier.tierLabel}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-headline-md text-headline-md text-on-surface uppercase">{tier.name}</h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">{tier.description}</p>
                        </div>
                        <div className="flex items-baseline gap-space-xs">
                          <span
                            className={`font-display-lg text-display-lg font-bold leading-none ${
                              tier.isPopular ? 'text-secondary' : tier.id === 'ultimate' ? 'text-primary' : 'text-on-surface'
                            }`}
                          >
                            {tier.priceNumber.toLocaleString()}
                          </span>
                          <span className="font-label-lg text-label-lg text-secondary font-bold uppercase">
                            frs
                          </span>
                        </div>

                        {/* Perks List */}
                        <div className="flex flex-col gap-space-xs pt-space-xs">
                          {tier.perks.map((perk, i) => (
                            <div
                              key={i}
                              className={`flex items-center gap-space-xs font-body-sm ${
                                perk.special ? 'text-secondary font-bold bg-secondary/10 px-2 py-1 rounded' : 'text-on-surface'
                              }`}
                            >
                              <span
                                className={`material-symbols-outlined text-[18px] ${
                                  perk.special
                                    ? 'text-secondary'
                                    : tier.id === 'ultimate'
                                    ? 'text-primary'
                                    : tier.id === 'foodie'
                                    ? 'text-tertiary'
                                    : tier.id === 'explorer'
                                    ? 'text-secondary'
                                    : 'text-primary'
                                }`}
                              >
                                {perk.icon || 'check_circle'}
                              </span>
                              <span>
                                {perk.highlight ? (
                                  <strong>{perk.text}</strong>
                                ) : (
                                  perk.text
                                )}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Perforated Notch Line */}
                      <div className="ticket-row-notch relative w-full flex items-center py-2">
                        <div className="w-5 h-5 rounded-full bg-surface-container-lowest -ml-2.5"></div>
                        <div
                          className={`flex-1 border-t-2 border-dashed mx-2 ${
                            tier.isPopular ? 'border-secondary/50' : 'border-outline-variant/40'
                          }`}
                        ></div>
                        <div className="w-5 h-5 rounded-full bg-surface-container-lowest -mr-2.5"></div>
                      </div>

                      {/* Ticket Stub (Bottom) */}
                      <div
                        className={`ticket-row-stub p-space-lg flex flex-col gap-space-md mt-auto rounded-b-2xl ${
                          tier.isPopular ? 'bg-surface-container-high/60' : 'bg-surface-container-high/40'
                        }`}
                      >
                        {activeNav === 'passes' && (
                          <div className="ticket-stub-meta">
                            <span>{tier.gate}</span>
                            <span>{tier.authText}</span>
                          </div>
                        )}
                        <button
                          onClick={() => handleSelectPass(tier)}
                          className={`w-full py-space-sm rounded-lg font-label-md text-label-md uppercase tracking-wider font-bold transition-all ${
                            tier.isPopular
                              ? 'bg-gradient-to-r from-primary-container to-tertiary-container text-on-primary-container shadow-md hover:scale-[1.02] active:scale-[0.98]'
                              : tier.id === 'ultimate'
                              ? 'bg-gradient-to-r from-primary-container to-secondary text-on-primary-container shadow-md hover:scale-[1.02] active:scale-[0.98]'
                              : tier.id === 'foodie'
                              ? 'bg-surface-bright text-secondary hover:bg-secondary hover:text-on-secondary'
                              : 'bg-surface-bright text-on-surface hover:bg-primary-container hover:text-on-primary-container'
                          }`}
                        >
                          {isSelected ? '✓ Ticket Selected' : tier.buttonText}
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* SECTION 5: MORE FESTIVAL ACTIVITIES */}
          <section
            id="festival-fun"
            style={{ display: activeNav === 'experience' || activeNav === 'festival-fun' ? undefined : 'none' }}
            className="w-full px-gutter-mobile lg:px-margin py-space-xl bg-surface-container-lowest relative overflow-hidden"
          >
            <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col gap-space-xs max-w-3xl">
                <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-bold">
                  More than just great food
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
                  Make a whole day of it
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Take a break between bites and jump into the fun. CHOPQUEST brings
                  together activities for friends, families, and anyone ready to play.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
                <article className="p-space-lg rounded-2xl bg-surface-container-low flex flex-col gap-space-md shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-primary-container/15 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[26px]">face_3</span>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">
                      Festival face painting
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Add a little color to your festival look with playful face-paint
                      designs for kids and grown-ups.
                    </p>
                  </div>
                </article>

                <article className="p-space-lg rounded-2xl bg-surface-container-low flex flex-col gap-space-md shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[26px]">view_in_ar</span>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">
                      VR games
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Step into virtual worlds, try immersive games, and challenge your
                      friends to beat your score.
                    </p>
                  </div>
                </article>

                <article className="p-space-lg rounded-2xl bg-surface-container-low flex flex-col gap-space-md shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-tertiary/15 flex items-center justify-center text-tertiary">
                    <span className="material-symbols-outlined text-[26px]">toys</span>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">
                      Kids’ playground
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Little festival-goers can enjoy a dedicated play area while the
                      whole family explores the event.
                    </p>
                  </div>
                </article>

                <article className="p-space-lg rounded-2xl bg-surface-container-low flex flex-col gap-space-md shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-primary-container/15 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[26px]">trophy</span>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">
                      Eating competitions
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Cheer on brave competitors as they take on delicious festival
                      challenges and battle for bragging rights.
                    </p>
                  </div>
                </article>

                <article className="p-space-lg rounded-2xl bg-surface-container-low flex flex-col gap-space-md shadow-md sm:col-span-2 lg:col-span-2">
                  <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[26px]">celebration</span>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">
                      And plenty more
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Catch the music, join in on pop-up games, meet up with friends, and
                      discover new surprises around the festival grounds.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* ABOUT PAGE */}
          <section
            id="about"
            style={{ display: activeNav === 'about' ? undefined : 'none' }}
            className="w-full px-gutter-mobile lg:px-margin py-space-xl min-h-[calc(100vh-80px)]"
          >
            <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
              <section className="rounded-2xl bg-surface-container-low p-space-xl md:p-12 shadow-xl">
                <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-bold">
                  What’s CHOPQUEST?
                </span>
                <h1 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight mt-space-sm">
                  A place to discover, taste, and connect
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant mt-space-md max-w-4xl">
                  CHOPQUEST is a food discovery event designed to bring people together
                  through food, flavour, creativity, and unforgettable culinary
                  experiences. It is a platform where food vendors, bakers, restaurants,
                  and other food businesses can showcase their specialties, introduce
                  people to unique flavours, and help attendees discover new favourites.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant mt-space-md max-w-4xl">
                  The event is built around culinary exploration. Attendees buy tasting
                  tickets, receive tokens, and use those tokens to sample dishes from
                  participating vendors—making it easy to try a variety of foods, explore
                  unfamiliar combinations, and discover businesses they may not have
                  known about.
                </p>

                <div className="mt-space-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-sm">
                  {[
                    'Give local food businesses visibility and opportunities to attract new customers',
                    'Celebrate culinary creativity',
                    'Encourage collaboration among food vendors and entrepreneurs',
                    'Create an exciting social experience for food lovers',
                    'Promote Buea as a destination for food experiences',
                  ].map((goal) => (
                    <div key={goal} className="flex items-start gap-space-sm rounded-xl bg-surface-container p-space-md">
                      <span className="material-symbols-outlined text-secondary">check_circle</span>
                      <span className="font-body-sm text-body-sm text-on-surface">{goal}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
                <div className="lg:col-span-4 rounded-2xl overflow-hidden bg-surface-container-low min-h-[360px]">
                  <img
                    src={plannerImage}
                    alt="CHOPQUEST organizer OBI STEPHANY"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="lg:col-span-8 rounded-2xl bg-surface-container-low p-space-xl md:p-10">
                  <span className="font-label-md text-label-md text-primary uppercase tracking-widest font-bold">
                    About the organizer
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight mt-space-sm">
                    OBI STEPHANY
                  </h2>
                  <div className="mt-space-md flex flex-col gap-space-md">
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      I am OBI STEPHANY, and I am passionate about creativity,
                      entrepreneurship, and bringing ideas to life. I enjoy exploring new
                      things, learning from different experiences, and challenging myself
                      to step outside my comfort zone. I believe meaningful opportunities
                      can begin with a simple idea and the courage to pursue it.
                    </p>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      I have a strong interest in food—not just as something we eat, but
                      as an experience that brings people together. I appreciate
                      creativity, originality, and the effort that goes into creating
                      something memorable. I am also interested in business development,
                      branding, marketing, and building platforms that allow people to
                      showcase their talents.
                    </p>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      I would describe myself as ambitious, curious, and willing to learn.
                      I may not have every answer or all the experience a challenge
                      requires, but I am open to learning, accepting corrections, and
                      working with people who bring different strengths and perspectives.
                    </p>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      I want to do more than talk about ideas: I want to make an effort
                      to turn them into reality. I see every project as an opportunity to
                      grow, create value, meet new people, and contribute meaningfully to
                      my community.
                    </p>
                  </div>
                </div>
              </section>

              <section className="rounded-2xl bg-surface-container-lowest p-space-xl md:p-10">
                <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-bold">
                  Why organize CHOPQUEST?
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight mt-space-sm">
                  Celebrating Buea’s culinary potential
                </h2>
                <div className="mt-space-md max-w-5xl flex flex-col gap-space-md">
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    I chose to organize CHOPQUEST because I believe Buea has culinary
                    potential that deserves to be explored, celebrated, and given greater
                    visibility. Talented food vendors, bakers, restaurants, and creative
                    individuals put care into what they make, but there are not always
                    enough platforms for them to showcase that creativity to a wider
                    audience.
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    CHOPQUEST is about creating an experience where people can discover
                    flavours they have never tried, explore different food combinations,
                    interact with food businesses, and perhaps find a new favourite. I
                    want attendees to arrive curious and leave with memorable experiences.
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    It is also an opportunity to support local food businesses by giving
                    them exposure, connecting them with potential customers, and creating
                    opportunities for collaboration. Attendees can enjoy food in a fun,
                    interactive environment; vendors can showcase their products, receive
                    feedback, and grow their visibility.
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Most importantly, I want to create something that contributes to
                    Buea’s food culture and entrepreneurial community. I know there will
                    be challenges, but I believe this idea can grow into something bigger.
                    I want CHOPQUEST to become a platform and an experience people look
                    forward to.
                  </p>
                </div>
              </section>
            </div>
          </section>

          {/* SECTION 7: FESTIVAL FAQ & FINAL TICKET RUSH */}
          <section id="faq" style={{ display: activeNav === 'experience' ? undefined : 'none' }} className="w-full px-gutter-mobile lg:px-margin py-space-xl">
            <div className="max-w-4xl mx-auto flex flex-col gap-space-xl">
              {/* FAQ Header */}
              <div className="text-center flex flex-col items-center gap-space-xs">
                <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-bold">
                  Frequently Asked Questions
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
                  Everything You Need To Know
                </h2>
              </div>
              {/* Accordion Items */}
              <div className="flex flex-col gap-space-sm">
                {[
                  {
                    q: 'Can I buy extra Tasting Tokens inside the stadium?',
                    a: 'Yes! If you finish the tokens that came with your ticket, you can instantly top up extra tokens in bundles (packs of 2, 6, or 12) at any of our  designated Token Kiosks using MTN MoMo, Orange Money, or cash.',
                  },
                  {
                    q: 'How does the QR verification at the Gate work?',
                    a: 'When you complete your ticket purchase, your ticket will be generated and you can download it. Simply present your phone screen at Gate. Our agent scan it instantly, you get your tokens in seconds!',
                  },
                  {
                    q: 'Which tickets come with a bottle of wine?',
                    a: 'Both the FOODIE Ticket (10,000frs with 12 tokens) and the Ultimate Ticket (15,000frs with 20 tokens) come with a bottle of wine included!',
                  },
                  {
                    q: "Can I purchase full meals if 1 sample isn't enough?",
                    a: 'Yes! Every vendor has a standardized 1-token tasting portion, but booths also offer full-portion feast platters.',
                  },
                ].map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-space-md rounded-xl bg-surface-container-low shadow-sm cursor-pointer transition-all"
                    onClick={() => toggleFaq(idx)}
                  >
                    <div className="flex items-center justify-between font-headline-sm text-headline-sm text-on-surface uppercase select-none">
                      <span>{faq.q}</span>
                      <span
                        className={`material-symbols-outlined text-secondary transition-transform duration-200 ${
                          faqOpen[idx] ? 'rotate-180' : ''
                        }`}
                      >
                        expand_more
                      </span>
                    </div>
                    {faqOpen[idx] && (
                      <p className="font-body-md text-body-md text-on-surface-variant pt-space-sm">{faq.a}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* FINAL HIGH-IMPACT EMBER CTA BANNER */}
              <div className="relative rounded-2xl overflow-hidden p-space-xl bg-gradient-to-r from-surface-container-high via-surface-container to-surface-container-lowest shadow-2xl flex flex-col md:flex-row items-center justify-between gap-space-lg">
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary-container/20 rounded-full blur-3xl pointer-events-none"></div>
                <div className="relative z-10 flex flex-col gap-space-xs max-w-lg">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                    MOLYKO OMNISPORT • DECEMBER 18, 2026
                  </span>
                  <h3 className="font-headline-lg text-headline-lg text-on-surface uppercase leading-tight">
                    Secure Your Festival Ticket Before Gates Ignite
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Lock in your tasting tokens now for instant express gate entry on December 18, 2026.
                  </p>
                </div>
                <div className="relative z-10 flex flex-col sm:flex-row items-center gap-space-sm w-full md:w-auto">
                  <a
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-space-sm px-space-xl py-space-md rounded-lg bg-gradient-to-r from-primary-container to-tertiary-container text-on-primary-container font-label-lg text-label-lg uppercase tracking-wider font-bold shadow-[0_8px_32px_-4px_rgba(255,75,38,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all"
                    href="#/passes"
                  >
                    <span>Get Ticket Now</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-surface-container-lowest text-on-surface">
        <div className="bg-surface-container-high py-space-sm px-gutter-mobile lg:px-margin">
          <div className="flex flex-wrap items-center justify-between gap-space-sm">
            <div className="flex items-center gap-space-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse"></span>
              <span className="font-label-md text-label-md uppercase tracking-wider text-primary">
                Live Gate Ignition:
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Gates Open Friday 18 Dec 2026
              </span>
            </div>
            <div className="flex items-center gap-space-md font-label-lg text-label-lg text-secondary">
              <div className="flex items-baseline gap-space-xs">
                <span className="font-headline-sm text-headline-sm">{format2Digits(timeLeft.days)}</span>
                <span className="text-body-sm font-body-sm text-on-surface-variant">D</span>
              </div>
              <div className="flex items-baseline gap-space-xs">
                <span className="font-headline-sm text-headline-sm">{format2Digits(timeLeft.hours)}</span>
                <span className="text-body-sm font-body-sm text-on-surface-variant">H</span>
              </div>
              <div className="flex items-baseline gap-space-xs">
                <span className="font-headline-sm text-headline-sm">{format2Digits(timeLeft.minutes)}</span>
                <span className="text-body-sm font-body-sm text-on-surface-variant">M</span>
              </div>
              <div className="flex items-baseline gap-space-xs">
                <span className="font-headline-sm text-headline-sm">{format2Digits(timeLeft.seconds)}</span>
                <span className="text-body-sm font-body-sm text-on-surface-variant">S</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-gutter-mobile lg:px-margin py-space-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter">
            <div className="lg:col-span-4 flex flex-col gap-space-md">
              <div className="flex items-center gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-on-primary-container">
                  <span className="material-symbols-outlined text-[24px]">outdoor_grill</span>
                </div>
                <span className="font-headline-md text-headline-md uppercase text-on-surface">CHOPQUEST</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
               The biggest street food party in Buea! Hot soya, fresh roast fish with bobolo, sweet country pots, fast food, and heavy Afrobeats basslines live under Mount Fako's night sky. Belle go full!
              </p>
               </div>

            <div className="lg:col-span-3 flex flex-col gap-space-sm">
              <span className="font-label-lg text-label-lg uppercase tracking-wider text-secondary">
                Grounds &amp; Location
              </span>
              <div className="flex items-start gap-space-xs text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">stadium</span>
                <div>
                  <p className="font-body-md text-body-md text-on-surface">Molyko Omnisport Stadium</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Buea, South West Region, Cameroon</p>
                </div>
              </div>
              <div className="flex items-center gap-space-xs text-on-surface-variant pt-space-xs">
                <span className="material-symbols-outlined text-secondary text-[20px]">verified</span>
                <span className="font-body-sm text-body-sm">Main Entrance</span>
              </div>
              <div className="flex items-center gap-space-xs text-on-surface-variant">
              </div>
            </div>

            <div className="lg:col-span-3 flex flex-col gap-space-sm">
              <span className="font-label-lg text-label-lg uppercase tracking-wider text-secondary">
                Mobile Money &amp; Payments
              </span>
             
              <div className="flex flex-col gap-space-xs pt-space-xs">
                <div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-secondary text-[20px]">account_balance_wallet</span>
                    <span className="font-label-md text-label-md text-on-surface">MTN Mobile Money</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary uppercase">Dial *126#</span>
                </div>
                <div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary-container text-[20px]">payments</span>
                    <span className="font-label-md text-label-md text-on-surface">Orange Money</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-tertiary uppercase">Dial #150#</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col gap-space-sm">
              <span className="font-label-lg text-label-lg uppercase tracking-wider text-secondary">Fast Access</span>
              <nav className="flex flex-col gap-space-xs">
                <a className="transition-colors text-on-surface font-semibold" href="#/experience">
                  Experience
                </a>
                <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#/food-hubs">
                  Wetin Dey For Chop
                </a>
                <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#/token-guide">
                  How Tokens Work
                </a>
                <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#/passes">
                  Festival Tickets
                </a>
                
                
              </nav>
            </div>
          </div>

          <div className="mt-space-xl pt-space-md bg-surface-container-lowest flex flex-col sm:flex-row items-center justify-between gap-space-md border-t border-surface-container-high">
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              © 2026 CHOPQUEST Festival Organization. Buea, Cameroon. All rights reserved.
            </span>
           
          </div>
        </div>
      </footer>
    </div>
  )
}
