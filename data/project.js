/* ============================================================================
   ZENTRA Project — Budiman, Semenyih
   Project data (keep layout separate from data)
   ========================================================================== */

const projectConfig = {
  brand: "ZENTRA Property Group",
  tagline: "ONE PLATFORM. SMARTER SOLUTION. GREATER VALUE.",
  project: "Pusat Perindustrian Budiman, Semenyih",
  eyebrow: "Pusat Perindustrian",
  location: "Sungai Lalang, Semenyih, Selangor",
  developer: "Pujangga Budiman — Magna Bay Sdn Bhd (586989-H)",
  whatsapp: "60163119076",
  whatsappName: "Mr Tanah",
  phone: "016-3119076",
  whatsappMessage:
    "Hello ZENTRA Property Group. I would like to know more about Pusat Perindustrian Budiman, Semenyih."
};

/* ---- Hero benefits (right column, desktop) ---- */
const heroBenefits = [
  { n: "01", title: "Strategic Industrial Location", sub: "Sungai Lalang, Semenyih" },
  { n: "02", title: "Established Industrial Surroundings", sub: "Near Hi-Tech and Villaraya Industrial Areas" },
  { n: "03", title: "Excellent Connectivity", sub: "Easy Access via SILK & LEKAS Highways" },
  { n: "04", title: "Freehold Industrial Property", sub: "Semi-D & Detached Factory Options" },
  { n: "05", title: "Business Growth Potential", sub: "Strategic Semenyih Industrial Corridor" }
];

/* ---- Bottom-of-hero specification strip ---- */
const heroSpecs = [
  { label: "FREEHOLD", sub: "Industrial Title" },
  { label: "SEMI-D & DETACHED", sub: "Factory Options" },
  { label: "STRATEGIC LOCATION", sub: "Sungai Lalang, Semenyih" },
  { label: "EXCELLENT CONNECTIVITY", sub: "SILK & LEKAS Highways" },
  { label: "GROWTH POTENTIAL", sub: "Established Industrial Corridor" }
];

/* ---- Project highlights (cards) ---- */
const highlights = [
  { icon: "shield", title: "FREEHOLD", text: "Industrial title with individual ownership." },
  { icon: "building", title: "SEMI-D & DETACHED FACTORY", text: "Low-density development — 10 Semi-D and 5 Detached units only." },
  { icon: "layers", title: "2-STOREY FACTORY WITH OFFICE", text: "Showroom, office, factory and warehouse under one roof." },
  { icon: "pin", title: "STRATEGIC SEMENYIH LOCATION", text: "Sungai Lalang, beside Kawasan Perindustrian Hi-Tech and Taman Industri Villaraya." },
  { icon: "road", title: "SILK & LEKAS CONNECTIVITY", text: "Easy access via SILK Kajang Highway and LEKAS Highway." },
  { icon: "factory", title: "ESTABLISHED INDUSTRIAL CORRIDOR", text: "Surrounded by established industrial developments." }
];

/* ---- Property types (official data only) ---- */
const propertyTypes = [
  {
    code: "SEMI-D",
    name: "Semi-Detached Factory",
    units: "10 units available",
    land: "[OFFICIAL LAND AREA]",
    builtUp: "Approx. 13,500 – 14,400 sq ft",
    config: "2-Storey Factory with Office",
    specs: [
      ["Land Area", "[OFFICIAL LAND AREA]"],
      ["Built-up Area", "Approx. 13,500 – 14,400 sq ft"],
      ["Configuration", "2-Storey Factory with Office"],
      ["Main Switchboard", "150 AMP (3 Phase)"]
    ]
  },
  {
    code: "DETACHED",
    name: "Detached Factory",
    units: "5 units available",
    land: "[OFFICIAL LAND AREA]",
    builtUp: "Approx. 23,100 – 27,600 sq ft",
    config: "2-Storey Factory with Office",
    specs: [
      ["Land Area", "[OFFICIAL LAND AREA]"],
      ["Built-up Area", "Approx. 23,100 – 27,600 sq ft"],
      ["Configuration", "2-Storey Factory with Office"],
      ["Main Switchboard", "300 AMP (3 Phase)"]
    ]
  }
];

/* ---- Floor plans ---- */
const floorPlans = [
  { id: "ground", label: "GROUND FLOOR", img: "assets/img/site-plan.jpg",
    note: "Ground floor layout — common to Type A and Type A-1." },
  { id: "first", label: "FIRST FLOOR", img: "assets/img/render-tower.jpg",
    note: "First floor plan. [OFFICIAL FLOOR PLAN IMAGE]" },
  { id: "second", label: "SECOND FLOOR", img: "assets/img/render-front.jpg",
    note: "Second floor plan. [OFFICIAL FLOOR PLAN IMAGE]" }
];

/* ---- Connectivity (official brochure figures) ---- */
const connectivity = [
  { name: "Pekan Semenyih", time: "7 minutes", distance: "4.5 km" },
  { name: "LEKAS Highway", time: "9 minutes", distance: "6 km" },
  { name: "SILK Highway", time: "11 minutes", distance: "8.5 km" },
  { name: "Eco Majestic", time: "15 minutes", distance: "10 km" },
  { name: "Bandar Teknologi Kajang", time: "15 minutes", distance: "9.4 km" },
  { name: "Bandar Sungai Long", time: "17 minutes", distance: "16.3 km" },
  { name: "Bandar Baru Bangi", time: "25 minutes", distance: "20 km" },
  { name: "Pekan Kajang", time: "20 minutes", distance: "12 km" },
  { name: "KLIA", time: "45 minutes", distance: "48 km" },
  { name: "Port Klang", time: "65 minutes", distance: "[OFFICIAL DISTANCE]" }
];

/* ---- Why invest ---- */
const whyInvest = [
  { icon: "pin", title: "Strategic Industrial Location", text: "Positioned in Sungai Lalang, Semenyih — within an established industrial corridor." },
  { icon: "shield", title: "Freehold Industrial Property", text: "Freehold industrial title, offering long-term ownership security." },
  { icon: "factory", title: "Established Industrial Surroundings", text: "Beside Kawasan Perindustrian Hi-Tech and Taman Industri Villaraya." },
  { icon: "road", title: "Excellent Highway Connectivity", text: "Easy access via SILK Kajang Highway and LEKAS Highway." },
  { icon: "layers", title: "Designed for Modern Business Operations", text: "Showroom, office, factory and warehouse under one roof with fibre-optic infrastructure." }
];

/* ---- Gallery ---- */
const gallery = [
  { src: "assets/img/hero-bg.jpg",      cat: "exterior", title: "Main Building — Architectural Rendering" },
  { src: "assets/img/hero-aerial.jpg",   cat: "aerial",   title: "Overall Development — Aerial View" },
  { src: "assets/img/render-facade.jpg", cat: "exterior", title: "Modern Corporate Glass Facade" },
  { src: "assets/img/render-front.jpg",  cat: "exterior", title: "Front Elevation" },
  { src: "assets/img/render-street.jpg", cat: "exterior", title: "Street View — Guard House & Entrance" },
  { src: "assets/img/render-tower.jpg",  cat: "exterior", title: "Corner Tower Detail" },
  { src: "assets/img/site-plan.jpg",     cat: "plan",     title: "Site Plan — 15 Units" }
];

/* ---- Unit features (official brochure) ---- */
const unitFeatures = [
  "Individual guard house & perimeter landscaping",
  "8-person lift with lift lobby",
  "Hose reel system",
  "Motorised roller shutter",
  "Fibre-optic infrastructure ready",
  "EV charging point",
  "150 AMP (Semi-D) / 300 AMP (Detached) 3-phase",
  "2-tonne/m² warehouse floor loading",
  "66-ft main road frontage",
  "Freehold with individual title"
];

/* ---- Suitable for (official brochure) ---- */
const suitableFor = [
  "Manufacturing", "Furniture & Kitchen", "Aluminium & Glass",
  "Food Processing & Packaging", "Printing", "Machinery & Electronics Assembly",
  "Logistics & Warehousing", "E-commerce Fulfilment", "Building Materials",
  "Showroom + Warehouse", "Corporate HQ", "Clean Light & Medium Industries"
];

/* ---- Brochure ---- */
const brochure = {
  url: "https://drive.google.com/file/d/10TbDThf4QL9p3bOEM4GEH98dDAO2Oec-/view",
  label: "Pusat Perindustrian Budiman e-Brochure"
};

/* ---- Location highlights ---- */
const locationHighlights = [
  "Sungai Lalang / Jalan Semenyih Permata, Semenyih, Selangor",
  "Beside Kawasan Perindustrian Hi-Tech & Taman Industri Villaraya",
  "Easy access via SILK Kajang Highway & LEKAS Highway"
];
