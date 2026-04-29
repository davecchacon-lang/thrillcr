/**
 * ThrillCR — To,
    reviews: [{"name": "Brenda"s Night Tour", "flag": "🇩🇪", "country": "Germany", "date": "February 2026", "rating": 5, "text": "All around a great experience. They answered all our questions quickly via WhatsApp, pickup was smooth, and Brenda was a lovely, knowledgeable and customer-oriented guide. Highly recommend this night tour if you"re in Manuel Antonio. Great customer service throughout."}],
    reviews: [{"name": "Ronald"s Group", "flag": "🇺🇸", "country": "United States", "date": "March 2026", "rating": 5, "text": "Fantastic tour with Ronald as our guide. He speaks excellent English and loves sharing his knowledge of the area. Incredible skill at finding animals hiding in the trees — shared his scope for close-up views and sent photos after the trip. He made our experience magical."}],
    reviews: [{"name": "Hugo"s Riders", "flag": "🇫🇷", "country": "France", "date": "March 2026", "rating": 5, "text": "Just WOW. Our guide Hugo made this experience extraordinary. Kind, polite, caring — he taught us fascinating facts about the village of Londres, made sure we felt safe the whole time, and took photos and videos of us at the waterfall. To finish, delicious chicken at their restaurant. WE HIGHLY RECOMMEND THIS TOUR!"}, {"name": "Orlando"s Group", "flag": "🇺🇸", "country": "United States", "date": "February 2026", "rating": 5, "text": "The most incredible horseback riding tour through the jungle. From start to finish, absolutely excellent. Our driver Caesar was seamless and safe. Guide Orlando was knowledgeable, professional, and clearly passionate about what he does. The whole operation is top-notch."}, {"name": "Horse Lovers", "flag": "🇦🇺", "country": "Australia", "date": "January 2026", "rating": 5, "text": "The best horses we"ve had anywhere in Costa Rica — well-mannered and clearly well cared for. Great guide! The tour was so amazing my daughter and I went back the next day for another one. Our guide explained safety clearly and was enthusiastic about the whole adventure."}],
    reviews: [{"name": "River Family", "flag": "🇺🇸", "country": "United States", "date": "March 2026", "rating": 5, "text": "This was my family"s first time white water rafting. My ten-year-old was nervous but our guide kept her calm and made her feel safe the whole time. He was also hilarious — kept us laughing with team spirit and pura vida paddle high fives! Absolute highlight of the trip."}, {"name": "Josue"s Fan", "flag": "🇺🇸", "country": "United States", "date": "February 2026", "rating": 5, "text": "Rio Savegre was absolutely my favorite part of my entire Costa Rica trip. Our guide Josue was incredible and made the experience unforgettable. The guides also shared fascinating facts about the area on the drive to and from the river. Would come back in a heartbeat."}, {"name": "Adventure Seekers", "flag": "🇬🇧", "country": "United Kingdom", "date": "January 2026", "rating": 5, "text": "What a fun, exhilarating experience. Quick safety lesson, then straight into Class 2 and 3 rapids. We got soaked — which felt amazing on a hot day. Stopped for snacks and a swim. Lunch at the end was delicious. The whole team made this completely memorable."}]ur Catalog
 * 
 * HOW TO ADD A NEW TOUR:
 * 1. Copy any existing tour object
 * 2. Change the id, providerTourId, and all fields
 * 3. Save and upload to GitHub
 * 4. The experience page renders automatically
 *
 * PRICING: All prices are Rack + 13% IVA (already calculated in pricePerPerson)
 * PHOTOS: Use base64 string or a full https:// URL
 */

const TOURS = {

  // ─────────────────────────────────────────────
  // TUCANES TOURS — Manuel Antonio / Quepos
  // Provider ID: PROV-001
  // Contract: Signed ✓
  // ─────────────────────────────────────────────

  "TUC-001": {
    id: "TUC-001",
    providerId: "PROV-001",
    providerName: "Tucanes Tours",
    providerSince: "2011",
    zone: "Manuel Antonio",
    country: "Costa Rica",
    active: true,

    // ── DISPLAY ──
    title: {
      en: "Manuel Antonio National Park Tour",
      es: "Tour Parque Nacional Manuel Antonio"
    },
    category: "hiking",          // used for filter: hiking, rafting, canopy, surf, kayak, horseback, wildlife, cultural, fishing, bike, diving, transport
    badgeLabel: "Hiking / Wildlife",
    badgeIcon: "🌿",

    // ── PRICING ──
    rackUSD: 75.00,
    netUSD:  56.25,
    ivaRate: 0.13,
    get pricePerPerson() { return +(this.rackUSD * (1 + this.ivaRate)).toFixed(2); },

    // ── LOGISTICS ──
    durationHours: 3.5,
    durationLabel: { en: "3.5 hours", es: "3.5 horas" },
    difficulty: "moderate",      // easy, moderate, active, intense
    difficultyLabel: { en: "Moderate difficulty", es: "Dificultad moderada" },
    minPax: 2,
    maxPax: 100,
    minAgeYears: 6,
    maxWeightLbs: null,
    pickupIncluded: true,
    pickupZones: "Main hotels in Quepos and Manuel Antonio",
    startTimes: ["7:00 AM", "12:30 PM"],
    cancellationHours: 48,

    // ── SEASON ──
    seasonNote: { en: "Closed on Tuesdays", es: "Cerrado los martes" },
    operatesAllYear: true,

    // ── CONTENT ──
    description: {
      en: "Walk through one of Costa Rica's most famous national parks with a deeply knowledgeable bilingual guide. Manuel Antonio is renowned for extraordinary biodiversity — sloths, three species of monkeys, reptiles, hundreds of birds and some of the most beautiful beaches on the Pacific Coast. Your guides carry Swarovski and Pentax telescopes for up-close wildlife observation.",
      es: "Caminá por uno de los parques más famosos de Costa Rica con un guía bilingüe experto. Manuel Antonio es famoso por su biodiversidad extraordinaria — perezosos, tres especies de monos, reptiles, cientos de aves y algunas de las playas más hermosas del Pacífico."
    },

    highlights: [
      { icon: "🦥", en: "Sloths, monkeys & reptiles spotted with Swarovski telescopes", es: "Perezosos, monos y reptiles con telescopios Swarovski" },
      { icon: "🏖️", en: "20-minute stop at world-famous Third Beach — optional swim", es: "20 minutos en la mundialmente famosa Tercera Playa" },
      { icon: "🌿", en: "Expert bilingual guide with deep natural history knowledge", es: "Guía bilingüe experto con profundo conocimiento de la naturaleza" },
      { icon: "🚐", en: "Hotel pickup & drop-off from Quepos & Manuel Antonio", es: "Recogida y retorno desde Quepos y Manuel Antonio" },
      { icon: "📸", en: "Flat 2-mile trail — perfect for photography", es: "Sendero plano de 3 km — ideal para fotografía" },
      { icon: "🐒", en: "3 of 4 Costa Rican primate species live in this park", es: "3 de las 4 especies de primates de Costa Rica viven aquí" }
    ],

    included: [
      { en: "Hotel pickup & drop-off", es: "Recogida y retorno al hotel" },
      { en: "Expert bilingual guide", es: "Guía bilingüe experto" },
      { en: "Park entrance fee", es: "Entrada al parque" },
      { en: "Snacks during the hike", es: "Snacks durante la caminata" },
      { en: "Swarovski & Pentax telescopes", es: "Telescopios Swarovski y Pentax" },
      { en: "Insurance", es: "Seguro" }
    ],
    notIncluded: [
      { en: "Alcoholic beverages", es: "Bebidas alcohólicas" },
      { en: "Personal travel insurance", es: "Seguro de viaje personal" },
      { en: "Gratuities (optional)", es: "Propinas (opcionales)" }
    ],
    whatToBring: ["☀️ Suntan lotion", "📷 Camera", "🕶️ Sunglasses", "👟 Hiking shoes", "💧 Water bottle", "🩱 Bathing suit (optional)", "🏖️ Beach towel (optional)"],

    itinerary: [
      { time: "7:00 AM", title: { en: "Hotel pickup", es: "Recogida en el hotel" }, desc: { en: "Picked up at your hotel in Quepos or Manuel Antonio. Guide introduces the park en route.", es: "Recogida en tu hotel. El guía hace introducción al parque en camino." } },
      { time: "~7:30 AM", title: { en: "Park entrance & briefing", es: "Entrada al parque" }, desc: { en: "Arrive at the park. Safety briefing and overview of likely wildlife encounters.", es: "Llegada al parque. Orientación de seguridad y presentación de la fauna esperada." } },
      { time: "7:30–10:00 AM", title: { en: "Guided nature hike", es: "Caminata guiada" }, desc: { en: "Flat 2-mile trail through primary and secondary forest. Frequent stops with telescopes for wildlife. Sloths, monkeys, birds and reptiles commonly spotted.", es: "Sendero plano de 3 km por bosque primario y secundario. Paradas frecuentes con telescopios." } },
      { time: "~10:00 AM", title: { en: "Third Beach stop (20 min)", es: "Tercera Playa (20 min)" }, desc: { en: "Rest at one of the most beautiful beaches in Costa Rica. Optional swim.", es: "Descanso en una de las playas más hermosas de CR. Baño opcional." } },
      { time: "~10:30 AM", title: { en: "Return hike", es: "Regreso" }, desc: { en: "Continue the loop back through the forest with more wildlife opportunities.", es: "Continuación del recorrido de vuelta con más oportunidades de avistar fauna." } },
      { time: "~10:30 AM", title: { en: "Hotel drop-off", es: "Retorno al hotel" }, desc: { en: "Transportation back to your hotel. Tour ends ~3.5 hours after departure.", es: "Transporte de regreso. El tour termina ~3.5 horas después de la salida." } }
    ],

    importantInfo: [
      { type: "warning", icon: "⚠️", title: { en: "Closed on Tuesdays", es: "Cerrado los martes" }, body: { en: "Manuel Antonio National Park is closed every Tuesday.", es: "El Parque Nacional cierra todos los martes." } },
      { type: "info", icon: "👶", title: { en: "Family friendly", es: "Apto para familias" }, body: { en: "Children under 5 free. Ages 6+ pay regular rate. Flat trail suitable for children.", es: "Niños menores de 5 años gratis. La pista plana es apta para niños." } }
    ],

    photo: "https://images.pexels.com/photos/2739015/pexels-photo-2739015.jpeg?auto=compress&cs=tinysrgb&w=800",  // set to base64 or URL — null uses placeholder
    galleryPhotos: [],
    reviews: [{"name": "Jeremy"s Group", "flag": "🇺🇸", "country": "United States", "date": "February 2026", "rating": 5, "text": "Our guide was incredible at finding animals and explaining everything — sloths, birds, coatis, iguanas. He used the telescope to take photos and sent them all to us via Google Drive right after. We ended up with over an hour at the beach instead of 20 minutes. 100% recommend!"}, {"name": "Stephanie W.", "flag": "🇨🇦", "country": "Canada", "date": "January 2026", "rating": 5, "text": "Tucanes was very accommodating from the start. Our guide Stephanie was knowledgeable and friendly — she spotted both types of sloths, several monkey species and even a toucan. You will not be disappointed booking with them."}, {"name": "Carla"s Group", "flag": "🇩🇪", "country": "Germany", "date": "March 2026", "rating": 5, "text": "Our guide spotted dozens of animals: iguanas, hummingbirds, a cayman, monkeys, crabs and herons. She was incredibly knowledgeable about every species — names, adaptations, behaviors. She set up her monocular on a tripod so we could all get a close look at every animal. Exceptional."}]
  },

  // ─────────────────────────────────────────────
  "TUC-002": {
    id: "TUC-002", providerId: "PROV-001", providerName: "Tucanes Tours", providerSince: "2011",
    zone: "Manuel Antonio", country: "Costa Rica", active: true,
    title: { en: "Savegre River Rafting — Class III", es: "Rafting Río Savegre — Clase III" },
    category: "rafting", badgeLabel: "Rafting", badgeIcon: "🌊",
    rackUSD: 115, netUSD: 86.25, ivaRate: 0.13,
    get pricePerPerson() { return +(this.rackUSD * (1 + this.ivaRate)).toFixed(2); },
    durationHours: 5.5, durationLabel: { en: "5.5 hours", es: "5.5 horas" },
    difficulty: "moderate", difficultyLabel: { en: "Moderate (Class III)", es: "Moderado (Clase III)" },
    minPax: 2, maxPax: 48, minAgeYears: 8, maxWeightLbs: null,
    pickupIncluded: true, startTimes: ["8:00 AM", "12:00 PM"], cancellationHours: 48,
    seasonNote: { en: "Operates all year", es: "Opera todo el año" }, operatesAllYear: true,
    description: { en: "Navigate Class III rapids through spectacular jungle canyons on the Savegre River. One of the best rafting experiences in Costa Rica, accessible all year round. Guides kayak alongside you for safety. Includes a delicious lunch at the end.", es: "Navegá rápidos Clase III por cañones de selva espectaculares en el Río Savegre. Una de las mejores experiencias de rafting de CR, disponible todo el año. Guías en kayak a tu lado. Almuerzo incluido." },
    highlights: [
      { icon: "🌊", en: "Class III rapids all year — Class II in dry season", es: "Rápidos Clase III todo el año — Clase II en temporada seca" },
      { icon: "🏞️", en: "Spectacular jungle canyon scenery on the Savegre River", es: "Cañones de selva espectaculares en el Río Savegre" },
      { icon: "🛶", en: "Guides kayak alongside rafts for maximum safety", es: "Guías en kayak a tu lado para máxima seguridad" },
      { icon: "🍽️", en: "Delicious homemade lunch included at the end", es: "Almuerzo casero delicioso incluido al final" },
      { icon: "🚐", en: "Hotel pickup included — 1h20min scenic drive to the river", es: "Recogida en hotel — 1h20min de drive panorámico al río" },
      { icon: "📸", en: "Stunning nature and wildlife along the riverbanks", es: "Naturaleza impresionante y fauna en las orillas del río" }
    ],
    included: [
      { en: "Hotel pickup & drop-off", es: "Recogida y retorno" },
      { en: "Bilingual guide + safety kayakers", es: "Guía bilingüe + kayakistas de seguridad" },
      { en: "All rafting equipment & safety gear", es: "Equipo completo de rafting y seguridad" },
      { en: "Fruits, snacks & beverages", es: "Frutas, snacks y bebidas" },
      { en: "Lunch at the end of the tour", es: "Almuerzo al final del tour" },
      { en: "Insurance", es: "Seguro" }
    ],
    notIncluded: [
      { en: "Alcoholic beverages", es: "Bebidas alcohólicas" },
      { en: "Gratuities (optional)", es: "Propinas (opcionales)" }
    ],
    whatToBring: ["🕶️ Sunglasses with croakies cord", "🩱 Bathing suit", "📷 Waterproof camera", "👡 Sandals or water shoes", "🏖️ Beach towel", "👕 Change of clothes"],
    itinerary: [
      { time: "8:00 AM", title: { en: "Hotel pickup", es: "Recogida en el hotel" }, desc: { en: "Picked up at your hotel. 1h20min scenic drive to the Savegre River put-in.", es: "Recogida en el hotel. 1h20min de drive panorámico al Río Savegre." } },
      { time: "~9:20 AM", title: { en: "Safety briefing & practice", es: "Briefing de seguridad" }, desc: { en: "Arrive at the put-in. Safety talk and practice session before entering the river.", es: "Llegada al punto de entrada. Charla de seguridad y práctica." } },
      { time: "9:30 AM–12:00 PM", title: { en: "2.5 hours on the river", es: "2.5 horas en el río" }, desc: { en: "Navigate Class III rapids with occasional stops to rest and admire flora and fauna. Guides kayak alongside.", es: "Navegá rápidos Clase III con paradas para descansar y admirar flora y fauna." } },
      { time: "~12:00 PM", title: { en: "Lunch at base camp", es: "Almuerzo en el campamento" }, desc: { en: "Change clothes and enjoy a homemade lunch at base camp.", es: "Cambio de ropa y almuerzo casero en el campamento." } },
      { time: "~1:30 PM", title: { en: "Hotel drop-off", es: "Retorno al hotel" }, desc: { en: "30-minute drive back and drop-off at your hotel.", es: "30 minutos de regreso y retorno a tu hotel." } }
    ],
    importantInfo: [
      { type: "info", icon: "🧒", title: { en: "Minimum age: 8 years", es: "Edad mínima: 8 años" }, body: { en: "Children must be at least 8 years old to participate.", es: "Los niños deben tener al menos 8 años para participar." } }
    ],
    photo: "https://images.pexels.com/photos/2861659/pexels-photo-2861659.jpeg?auto=compress&cs=tinysrgb&w=800", galleryPhotos: []
  },

  "TUC-003": {
    id: "TUC-003", providerId: "PROV-001", providerName: "Tucanes Tours", providerSince: "2011",
    zone: "Manuel Antonio", country: "Costa Rica", active: true,
    title: { en: "Naranjo River Rafting — Class III/IV", es: "Rafting Río Naranjo — Clase III/IV" },
    category: "rafting", badgeLabel: "Rafting", badgeIcon: "🌊",
    rackUSD: 95, netUSD: 71.25, ivaRate: 0.13,
    get pricePerPerson() { return +(this.rackUSD * (1 + this.ivaRate)).toFixed(2); },
    durationHours: 4.5, durationLabel: { en: "4.5 hours", es: "4.5 horas" },
    difficulty: "active", difficultyLabel: { en: "Difficult (Class III-IV)", es: "Difícil (Clase III-IV)" },
    minPax: 2, maxPax: 48, minAgeYears: 10, maxWeightLbs: null,
    pickupIncluded: true, startTimes: ["8:00 AM", "11:30 AM"], cancellationHours: 48,
    seasonNote: { en: "Rainy season only: May–December", es: "Solo temporada lluviosa: mayo–diciembre" }, operatesAllYear: false,
    description: { en: "Experience the thrill of the Naranjo River through mountains, jungle gorges and palm plantations. Class III rapids with Class IV in peak rainy season. The river's steep course makes this a genuinely exciting adventure. Lunch included.", es: "Viví la emoción del Río Naranjo a través de montañas, cañones y plantaciones. Clase III con IV en temporada lluviosa. Almuerzo incluido." },
    highlights: [
      { icon: "🌊", en: "Class III-IV rapids through stunning jungle gorges", es: "Rápidos Clase III-IV por cañones de selva" },
      { icon: "🏔️", en: "River flows through mountains, jungle and palm plantations", es: "El río fluye por montañas, selva y palmeras" },
      { icon: "⚡", en: "More adrenaline than Savegre — ideal for thrill seekers", es: "Más adrenalina que el Savegre — ideal para buscadores de emociones" },
      { icon: "🍽️", en: "Lunch included at the end", es: "Almuerzo incluido al final" }
    ],
    included: [
      { en: "Hotel pickup & drop-off", es: "Recogida y retorno" },
      { en: "Equipment & safety gear", es: "Equipo y material de seguridad" },
      { en: "Bilingual guide", es: "Guía bilingüe" },
      { en: "Lunch", es: "Almuerzo" },
      { en: "Insurance", es: "Seguro" }
    ],
    notIncluded: [{ en: "Gratuities", es: "Propinas" }],
    whatToBring: ["🕶️ Sunglasses with croakies cord", "🩱 Bathing suit", "👟 Water shoes", "👕 Extra clothes", "🏖️ Beach towel"],
    itinerary: [],
    importantInfo: [
      { type: "warning", icon: "🌧️", title: { en: "Rainy season only", es: "Solo temporada lluviosa" }, body: { en: "This tour only operates May–December.", es: "Este tour solo opera de mayo a diciembre." } },
      { type: "info", icon: "🧒", title: { en: "Minimum age: 10 years", es: "Edad mínima: 10 años" }, body: { en: "Children must be at least 10 years old.", es: "Los niños deben tener al menos 10 años." } }
    ],
    photo: "https://images.pexels.com/photos/2861659/pexels-photo-2861659.jpeg?auto=compress&cs=tinysrgb&w=800", galleryPhotos: []
  },

  "TUC-004": {
    id: "TUC-004", providerId: "PROV-001", providerName: "Tucanes Tours", providerSince: "2011",
    zone: "Manuel Antonio", country: "Costa Rica", active: true,
    title: { en: "El Chorro — Extreme Rafting Class IV", es: "El Chorro — Rafting Extremo Clase IV" },
    category: "rafting", badgeLabel: "Extreme Rafting", badgeIcon: "💥",
    rackUSD: 115, netUSD: 86.25, ivaRate: 0.13,
    get pricePerPerson() { return +(this.rackUSD * (1 + this.ivaRate)).toFixed(2); },
    durationHours: 4, durationLabel: { en: "4 hours", es: "4 horas" },
    difficulty: "intense", difficultyLabel: { en: "Strenuous / Challenging", es: "Intenso / Desafiante" },
    minPax: 2, maxPax: 24, minAgeYears: 16, maxWeightLbs: null,
    pickupIncluded: true, startTimes: ["8:30 AM", "12:00 PM"], cancellationHours: 48,
    seasonNote: { en: "Dry season only: January–April", es: "Solo temporada seca: enero–abril" }, operatesAllYear: false,
    description: { en: "Conquer El Chorro — a Class IV gorge on the upper Naranjo River known as the 'jet gorge.' The most intense rafting experience in Manuel Antonio. Good physical condition required. No prior rafting experience needed.", es: "Conquistá El Chorro — un cañón Clase IV en el Río Naranjo. La experiencia de rafting más intensa de Manuel Antonio. Se requiere buena condición física." },
    highlights: [
      { icon: "💥", en: "Class IV gorge — the most intense rafting in Manuel Antonio", es: "Cañón Clase IV — el rafting más intenso de Manuel Antonio" },
      { icon: "🏞️", en: "Upper Naranjo River through a narrow 'jet gorge'", es: "Parte alta del Río Naranjo por un estrecho cañón" },
      { icon: "💪", en: "Good physical condition required — no prior experience needed", es: "Buena condición física requerida — sin experiencia previa necesaria" }
    ],
    included: [
      { en: "Hotel pickup & drop-off", es: "Recogida y retorno" },
      { en: "Equipment & safety gear", es: "Equipo y seguridad" },
      { en: "Bilingual guide", es: "Guía bilingüe" },
      { en: "Snacks at the end", es: "Snacks al final" },
      { en: "Insurance", es: "Seguro" }
    ],
    notIncluded: [{ en: "Lunch (snacks only)", es: "Almuerzo (solo snacks)" }],
    whatToBring: ["🕶️ Sunglasses with croakies cord", "🩱 Bathing suit", "👟 Water shoes", "👕 Extra clothes", "🏖️ Beach towel"],
    itinerary: [],
    importantInfo: [
      { type: "warning", icon: "☀️", title: { en: "Dry season only: Jan–April", es: "Solo temporada seca: ene–abril" }, body: { en: "El Chorro only operates January through April.", es: "El Chorro solo opera de enero a abril." } },
      { type: "warning", icon: "🔞", title: { en: "Minimum age: 16 years", es: "Edad mínima: 16 años" }, body: { en: "Participants must be at least 16 years old and in good physical condition.", es: "Los participantes deben tener al menos 16 años y buena condición física." } }
    ],
    photo: "https://images.pexels.com/photos/1266831/pexels-photo-1266831.jpeg?auto=compress&cs=tinysrgb&w=800", galleryPhotos: []
  },

  "TUC-005": {
    id: "TUC-005", providerId: "PROV-001", providerName: "Tucanes Tours", providerSince: "2011",
    zone: "Manuel Antonio", country: "Costa Rica", active: true,
    title: { en: "Damas Island Mangrove Kayaking", es: "Kayak en Manglares Isla Damas" },
    category: "kayak", badgeLabel: "Kayak", badgeIcon: "🚣",
    rackUSD: 85, netUSD: 63.75, ivaRate: 0.13,
    get pricePerPerson() { return +(this.rackUSD * (1 + this.ivaRate)).toFixed(2); },
    durationHours: 4, durationLabel: { en: "4 hours", es: "4 horas" },
    difficulty: "moderate", difficultyLabel: { en: "Moderate", es: "Moderado" },
    minPax: 2, maxPax: 25, minAgeYears: 6, maxWeightLbs: null,
    pickupIncluded: true, startTimes: ["According to tide"], cancellationHours: 48,
    seasonNote: { en: "All year", es: "Todo el año" }, operatesAllYear: true,
    description: { en: "Paddle through Costa Rica's unique mangrove ecosystem on the Paquita River around Damas Island. Spot herons, kingfishers, ospreys, anteaters, white-faced monkeys and exotic birds. No prior experience required. Kayaks for 1 or 2 passengers.", es: "Remá por el ecosistema de manglares en el Río Paquita. Garzas, martines pescadores, osos hormigueros, monos caras blancas y aves exóticas. Sin experiencia previa necesaria." },
    highlights: [
      { icon: "🐦", en: "Herons, kingfishers, ospreys and frigatebirds", es: "Garzas, martines pescadores y fragatas" },
      { icon: "🐒", en: "White-faced monkeys and anteaters in the mangroves", es: "Monos caras blancas y osos hormigueros en los manglares" },
      { icon: "🌿", en: "Paddle under natural tree tunnels through the canals", es: "Remá bajo túneles naturales de árboles por los canales" },
      { icon: "🍽️", en: "Meal included (breakfast, lunch or dinner per schedule)", es: "Comida incluida (desayuno, almuerzo o cena según horario)" }
    ],
    included: [
      { en: "Hotel pickup & drop-off", es: "Recogida y retorno" },
      { en: "Bilingual guide", es: "Guía bilingüe" },
      { en: "Kayak equipment", es: "Equipo de kayak" },
      { en: "Beverages", es: "Bebidas" },
      { en: "Meal (breakfast, lunch or dinner per schedule)", es: "Comida (desayuno, almuerzo o cena)" },
      { en: "Insurance", es: "Seguro" }
    ],
    notIncluded: [{ en: "Gratuities", es: "Propinas" }],
    whatToBring: ["☀️ Suntan lotion", "🕶️ Sunglasses", "📷 Waterproof camera", "🧢 Hat/visor", "🦟 Mosquito repellent", "🩱 Bathing suit", "🏖️ Beach towel"],
    itinerary: [],
    importantInfo: [
      { type: "info", icon: "🌊", title: { en: "Tide-dependent schedule", es: "Horario según marea" }, body: { en: "Start time depends on tides. We'll confirm your exact pickup time when booking.", es: "El horario depende de las mareas. Confirmamos la hora exacta al reservar." } }
    ],
    photo: "https://images.pexels.com/photos/1497584/pexels-photo-1497584.jpeg?auto=compress&cs=tinysrgb&w=800", galleryPhotos: []
  },

  "TUC-006": {
    id: "TUC-006", providerId: "PROV-001", providerName: "Tucanes Tours", providerSince: "2011",
    zone: "Manuel Antonio", country: "Costa Rica", active: true,
    title: { en: "Ocean Kayaking & Snorkeling", es: "Kayak en el Océano y Snorkel" },
    category: "kayak", badgeLabel: "Kayak", badgeIcon: "🚣",
    rackUSD: 85, netUSD: 63.75, ivaRate: 0.13,
    get pricePerPerson() { return +(this.rackUSD * (1 + this.ivaRate)).toFixed(2); },
    durationHours: 4, durationLabel: { en: "4 hours", es: "4 horas" },
    difficulty: "active", difficultyLabel: { en: "High", es: "Alto" },
    minPax: 2, maxPax: 25, minAgeYears: 8, maxWeightLbs: null,
    pickupIncluded: true, startTimes: ["8:00 AM", "2:00 PM"], cancellationHours: 48,
    seasonNote: { en: "Evening tour doesn't operate May–November", es: "El tour vespertino no opera mayo–noviembre" }, operatesAllYear: true,
    description: { en: "Paddle past islands and marine bird colonies to secluded Biesanz Bay for snorkeling. Parrotfish, starfish, angelfish and possible sea turtles. No experience required. Lunch included.", es: "Remá junto a islas y colonias de aves marinas hasta la Bahía Biesanz para hacer snorkel. Loros de mar, estrellas y posibles tortugas. Sin experiencia previa." },
    highlights: [
      { icon: "🐠", en: "Snorkel at Biesanz Bay — parrotfish, starfish, sea turtles", es: "Snorkel en Bahía Biesanz — peces loro, estrellas, tortugas" },
      { icon: "🏝️", en: "Paddle past islands and marine bird nesting colonies", es: "Remá junto a islas y colonias de aves marinas" },
      { icon: "🍽️", en: "Lunch or dinner included", es: "Almuerzo o cena incluido" }
    ],
    included: [
      { en: "Hotel pickup & drop-off", es: "Recogida y retorno" },
      { en: "Bilingual guide", es: "Guía bilingüe" },
      { en: "Kayak & snorkel equipment", es: "Equipo de kayak y snorkel" },
      { en: "Beverages", es: "Bebidas" },
      { en: "Lunch or dinner", es: "Almuerzo o cena" },
      { en: "Insurance", es: "Seguro" }
    ],
    notIncluded: [{ en: "Gratuities", es: "Propinas" }],
    whatToBring: ["☀️ Suntan lotion", "🕶️ Sunglasses", "🧢 Hat/visor", "🏖️ Beach towel"],
    itinerary: [],
    importantInfo: [
      { type: "info", icon: "🌊", title: { en: "Visibility varies by season", es: "Visibilidad varía por temporada" }, body: { en: "Water visibility depends on the season. Best December–April.", es: "La visibilidad del agua depende de la temporada. Mejor diciembre–abril." } }
    ],
    photo: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800", galleryPhotos: []
  },

  "TUC-007": {
    id: "TUC-007", providerId: "PROV-001", providerName: "Tucanes Tours", providerSince: "2011",
    zone: "Manuel Antonio", country: "Costa Rica", active: true,
    title: { en: "Horseback Riding through the Jungle", es: "Cabalgata por la Selva" },
    category: "horseback", badgeLabel: "Horseback", badgeIcon: "🐴",
    rackUSD: 89, netUSD: 66.75, ivaRate: 0.13,
    get pricePerPerson() { return +(this.rackUSD * (1 + this.ivaRate)).toFixed(2); },
    durationHours: 5.5, durationLabel: { en: "5.5 hours", es: "5.5 horas" },
    difficulty: "moderate", difficultyLabel: { en: "Moderate", es: "Moderado" },
    minPax: 2, maxPax: 20, minAgeYears: 7, maxWeightLbs: 265,
    pickupIncluded: true, startTimes: ["8:00 AM", "2:00 PM"], cancellationHours: 48,
    seasonNote: { en: "Evening tour doesn't operate May, Sep, Oct, Nov", es: "Tour vespertino no opera mayo, sep, oct, nov" }, operatesAllYear: true,
    description: { en: "Ride through secondary rainforest at 600m altitude with stunning valley views. The trail ends at a beautiful waterfall for a 30-minute swim stop. No experience required. Lunch included.", es: "Cabalgá por selva secundaria a 600m con vistas espectaculares al valle. El sendero termina en una hermosa cascada para nadar 30 minutos. Sin experiencia previa. Almuerzo incluido." },
    highlights: [
      { icon: "🌊", en: "30-minute swim stop at a beautiful waterfall", es: "30 minutos de baño en una hermosa cascada" },
      { icon: "🏔️", en: "600m altitude with stunning valley views", es: "600m de altitud con vistas espectaculares al valle" },
      { icon: "🐴", en: "No riding experience required — suitable for beginners", es: "Sin experiencia ecuestre necesaria — apto para principiantes" },
      { icon: "🍽️", en: "Delicious lunch with local ingredients included", es: "Almuerzo delicioso con ingredientes locales incluido" }
    ],
    included: [
      { en: "Hotel pickup & drop-off", es: "Recogida y retorno" },
      { en: "Bilingual guide", es: "Guía bilingüe" },
      { en: "Horse & riding equipment", es: "Caballo y equipo ecuestre" },
      { en: "Beverages", es: "Bebidas" },
      { en: "Lunch or dinner", es: "Almuerzo o cena" },
      { en: "Insurance", es: "Seguro" }
    ],
    notIncluded: [{ en: "Gratuities", es: "Propinas" }],
    whatToBring: ["☀️ Suntan lotion", "🕶️ Sunglasses", "📷 Camera", "🧢 Hat/visor", "👖 Long pants", "👟 Hiking shoes", "🦟 Mosquito repellent", "🩱 Bathing suit"],
    itinerary: [],
    importantInfo: [
      { type: "warning", icon: "⚖️", title: { en: "Maximum weight: 265 lbs (120 kg)", es: "Peso máximo: 265 lbs (120 kg)" }, body: { en: "For the safety of both riders and horses, maximum weight is 265 lbs.", es: "Por seguridad de jinetes y caballos, el peso máximo es 265 lbs." } },
      { type: "info", icon: "🧒", title: { en: "Minimum age: 7 years", es: "Edad mínima: 7 años" }, body: { en: "Children must be at least 7 years old.", es: "Los niños deben tener al menos 7 años." } }
    ],
    photo: "https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&w=800", galleryPhotos: []
  },

  "TUC-008": {
    id: "TUC-008", providerId: "PROV-001", providerName: "Tucanes Tours", providerSince: "2011",
    zone: "Manuel Antonio", country: "Costa Rica", active: true,
    title: { en: "Canopy Tour — 12 Lines & Tarzan Swing", es: "Canopy — 12 Cables y Columpio Tarzán" },
    category: "canopy", badgeLabel: "Canopy", badgeIcon: "🌲",
    rackUSD: 99, netUSD: 79.20, ivaRate: 0.13,
    get pricePerPerson() { return +(this.rackUSD * (1 + this.ivaRate)).toFixed(2); },
    durationHours: 3, durationLabel: { en: "3 hours", es: "3 horas" },
    difficulty: "moderate", difficultyLabel: { en: "Moderate", es: "Moderado" },
    minPax: 2, maxPax: 45, minAgeYears: 6, maxWeightLbs: 275,
    pickupIncluded: true, startTimes: ["7:30 AM", "11:00 AM", "2:30 PM"], cancellationHours: 48,
    seasonNote: { en: "All year · No 7:30am on Jan 1st", es: "Todo el año · Sin 7:30am el 1 de enero" }, operatesAllYear: true,
    description: { en: "Soar through the treetops on 12 ziplines and 22 platforms, including a Tarzan swing, rappel and treetop suspension bridge — all inside the same biological corridor as Manuel Antonio National Park. Meal included.", es: "Volá por los árboles en 12 tirolesas y 22 plataformas, con columpio Tarzán, rapel y puente colgante — dentro del mismo corredor biológico del Parque Nacional. Comida incluida." },
    highlights: [
      { icon: "🌲", en: "12 ziplines, 22 platforms, Tarzan swing & rappel", es: "12 tirolesas, 22 plataformas, columpio Tarzán y rapel" },
      { icon: "🌿", en: "Same biological corridor as Manuel Antonio National Park", es: "Mismo corredor biológico que el Parque Nacional" },
      { icon: "🌉", en: "Treetop suspension bridge with spectacular forest views", es: "Puente colgante entre árboles con vistas espectaculares" },
      { icon: "✅", en: "Perfect safety record with certified bilingual guides", es: "Récord de seguridad perfecto con guías bilingües certificados" }
    ],
    included: [
      { en: "Hotel pickup & drop-off", es: "Recogida y retorno" },
      { en: "Bilingual certified guides", es: "Guías bilingües certificados" },
      { en: "All safety equipment", es: "Todo el equipo de seguridad" },
      { en: "Beverages", es: "Bebidas" },
      { en: "One meal", es: "Una comida" },
      { en: "Insurance", es: "Seguro" }
    ],
    notIncluded: [{ en: "Gratuities", es: "Propinas" }],
    whatToBring: ["☀️ Suntan lotion", "📷 Camera", "👟 Hiking shoes or closed-toe shoes"],
    itinerary: [],
    importantInfo: [
      { type: "warning", icon: "⚖️", title: { en: "Maximum weight: 275 lbs (125 kg)", es: "Peso máximo: 275 lbs (125 kg)" }, body: { en: "For safety, maximum weight is 275 lbs.", es: "Por seguridad, el peso máximo es 275 lbs." } },
      { type: "info", icon: "🧒", title: { en: "Minimum age: 6 years", es: "Edad mínima: 6 años" }, body: { en: "Children must be at least 6 years old.", es: "Los niños deben tener al menos 6 años." } }
    ],
    photo: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800", galleryPhotos: []
  },

  "TUC-009": {
    id: "TUC-009", providerId: "PROV-001", providerName: "Tucanes Tours", providerSince: "2011",
    zone: "Manuel Antonio", country: "Costa Rica", active: true,
    title: { en: "Surf Lessons — All Levels Welcome", es: "Clases de Surf — Todos los Niveles" },
    category: "surf", badgeLabel: "Surf", badgeIcon: "🏄",
    rackUSD: 93.75, netUSD: 75, ivaRate: 0.13,
    get pricePerPerson() { return +(this.rackUSD * (1 + this.ivaRate)).toFixed(2); },
    durationHours: 3, durationLabel: { en: "3 hours", es: "3 horas" },
    difficulty: "easy", difficultyLabel: { en: "Easy — all levels", es: "Fácil — todos los niveles" },
    minPax: 2, maxPax: 16, minAgeYears: null, maxWeightLbs: null,
    pickupIncluded: true, startTimes: ["According to tide"], cancellationHours: 48,
    seasonNote: { en: "All year", es: "Todo el año" }, operatesAllYear: true,
    description: { en: "Learn to surf on one of the Pacific Coast's best spots. From beginners to intermediate and advanced surfers, certified instructors cater to all levels. Boards and all equipment provided. The beach also hosts local and national surf tournaments.", es: "Aprendé a surfear en uno de los mejores spots del Pacífico. Desde principiantes hasta avanzados, instructores certificados para todos los niveles. Tablas y equipo incluidos." },
    highlights: [
      { icon: "🏄", en: "Certified instructors for all levels — beginners welcome", es: "Instructores certificados para todos los niveles" },
      { icon: "🌊", en: "One of the best surf spots on the Pacific Coast", es: "Uno de los mejores spots de surf del Pacífico" },
      { icon: "🏆", en: "Venue for local and national surf tournaments", es: "Sede de torneos de surf locales y nacionales" },
      { icon: "🤿", en: "Boards and all equipment included", es: "Tablas y todo el equipo incluido" }
    ],
    included: [
      { en: "Hotel pickup & drop-off", es: "Recogida y retorno" },
      { en: "Certified bilingual instructors", es: "Instructores bilingües certificados" },
      { en: "Surfboards & equipment", es: "Tablas y equipo" },
      { en: "Snacks", es: "Snacks" },
      { en: "Insurance", es: "Seguro" }
    ],
    notIncluded: [{ en: "Gratuities", es: "Propinas" }],
    whatToBring: ["☀️ Suntan lotion", "🕶️ Sunglasses", "📷 Camera", "🧢 Hat/visor", "🩱 Bathing suit", "🏖️ Beach towel", "👕 Extra clothes"],
    itinerary: [],
    importantInfo: [
      { type: "info", icon: "🌊", title: { en: "Tide-dependent schedule", es: "Horario según marea" }, body: { en: "Start time depends on tides. We'll confirm exact time when booking.", es: "El horario depende de las mareas. Confirmamos al reservar." } }
    ],
    photo: "https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&w=800", galleryPhotos: []
  },

  "TUC-010": {
    id: "TUC-010", providerId: "PROV-001", providerName: "Tucanes Tours", providerSince: "2011",
    zone: "Manuel Antonio", country: "Costa Rica", active: true,
    title: { en: "Catamaran Adventure & Snorkeling", es: "Aventura en Catamarán y Snorkel" },
    category: "cultural", badgeLabel: "Sailing", badgeIcon: "⛵",
    rackUSD: 93.75, netUSD: 75, ivaRate: 0.13,
    get pricePerPerson() { return +(this.rackUSD * (1 + this.ivaRate)).toFixed(2); },
    durationHours: 5, durationLabel: { en: "5 hours", es: "5 horas" },
    difficulty: "easy", difficultyLabel: { en: "Moderate", es: "Moderado" },
    minPax: 2, maxPax: 100, minAgeYears: null, maxWeightLbs: null,
    pickupIncluded: true, startTimes: ["8:00 AM", "1:00 PM"], cancellationHours: 48,
    seasonNote: { en: "Evening tour doesn't operate May–November. Min 15 pax for operation.", es: "Tour vespertino no opera mayo–noviembre. Mín 15 personas." }, operatesAllYear: true,
    description: { en: "Sail around the back of Manuel Antonio National Park on a catamaran. Snorkel at secluded Biesanz Bay, spot dolphins and enjoy a BBQ lunch onboard while admiring the Pacific coastline.", es: "Navegá por detrás del Parque Nacional en catamarán. Snorkel en Bahía Biesanz, delfines y almuerzo BBQ a bordo." },
    highlights: [
      { icon: "⛵", en: "Sail around the back of Manuel Antonio National Park", es: "Navegá alrededor del Parque Nacional" },
      { icon: "🐬", en: "Dolphins possible — snorkeling at Biesanz Bay", es: "Delfines posibles — snorkel en Bahía Biesanz" },
      { icon: "🍖", en: "BBQ lunch onboard while admiring the Pacific", es: "Almuerzo BBQ a bordo con vistas al Pacífico" },
      { icon: "🏝️", en: "Islands, cliffs and rock formations along the coast", es: "Islas, acantilados y formaciones rocosas en la costa" }
    ],
    included: [
      { en: "Hotel pickup & drop-off", es: "Recogida y retorno" },
      { en: "Bilingual guide", es: "Guía bilingüe" },
      { en: "Snorkeling equipment", es: "Equipo de snorkel" },
      { en: "Snacks throughout the trip", es: "Snacks durante el viaje" },
      { en: "BBQ lunch onboard", es: "Almuerzo BBQ a bordo" },
      { en: "Beverages", es: "Bebidas" },
      { en: "Insurance", es: "Seguro" }
    ],
    notIncluded: [{ en: "Gratuities", es: "Propinas" }],
    whatToBring: ["🕶️ Sunglasses with croakies cord", "🩱 Bathing suit", "📷 Waterproof camera", "👡 Sandals", "🏖️ Beach towel"],
    itinerary: [],
    importantInfo: [
      { type: "info", icon: "👥", title: { en: "Minimum 15 guests for operation", es: "Mínimo 15 personas para operar" }, body: { en: "Ask us about availability for smaller groups.", es: "Consultanos disponibilidad para grupos pequeños." } }
    ],
    photo: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800", galleryPhotos: []
  },

  "TUC-011": {
    id: "TUC-011", providerId: "PROV-001", providerName: "Tucanes Tours", providerSince: "2011",
    zone: "Manuel Antonio", country: "Costa Rica", active: true,
    title: { en: "Jungle Night Walk", es: "Caminata Nocturna por la Selva" },
    category: "wildlife", badgeLabel: "Wildlife", badgeIcon: "🦎",
    rackUSD: 75, netUSD: 56.25, ivaRate: 0.13,
    get pricePerPerson() { return +(this.rackUSD * (1 + this.ivaRate)).toFixed(2); },
    durationHours: 3, durationLabel: { en: "3 hours", es: "3 horas" },
    difficulty: "easy", difficultyLabel: { en: "Easy", es: "Fácil" },
    minPax: 2, maxPax: null, minAgeYears: null, maxWeightLbs: null,
    pickupIncluded: true, startTimes: ["5:30 PM"], cancellationHours: 48,
    seasonNote: { en: "All year", es: "Todo el año" }, operatesAllYear: true,
    description: { en: "Explore a jungle habitat adjacent to Manuel Antonio National Park at night with a naturalist guide. Frogs, lizards, snakes, scorpions, spiders, mammals and nocturnal birds. The tropical rainforest at night is one of the most exciting experiences in Costa Rica.", es: "Explorá la selva adyacente al Parque Nacional de noche. Ranas, lagartijas, serpientes, escorpiones, arañas, mamíferos y aves nocturnas. La selva tropical de noche es una de las experiencias más emocionantes de CR." },
    highlights: [
      { icon: "🐸", en: "Frogs, lizards, snakes, scorpions & nocturnal birds", es: "Ranas, lagartijas, serpientes, escorpiones y aves nocturnas" },
      { icon: "🌙", en: "Same ecosystem as Manuel Antonio National Park", es: "El mismo ecosistema que el Parque Nacional" },
      { icon: "🔦", en: "Flashlights and all equipment provided", es: "Linternas y todo el equipo incluido" },
      { icon: "🎵", en: "Listen to the symphony of the tropical forest at night", es: "Escuchá la sinfonía de la selva tropical de noche" }
    ],
    included: [
      { en: "Hotel pickup & drop-off", es: "Recogida y retorno" },
      { en: "Naturalist guide", es: "Guía naturalista" },
      { en: "Flashlights & equipment", es: "Linternas y equipo" },
      { en: "Entrance fee", es: "Entrada" },
      { en: "Insurance", es: "Seguro" }
    ],
    notIncluded: [{ en: "Gratuities", es: "Propinas" }],
    whatToBring: ["🦟 Mosquito repellent", "👟 Closed-toe shoes", "👕 Long sleeves recommended", "📷 Camera with night mode"],
    itinerary: [],
    importantInfo: [],
    photo: "https://images.pexels.com/photos/975771/pexels-photo-975771.jpeg?auto=compress&cs=tinysrgb&w=800", galleryPhotos: []
  },

  "TUC-012": {
    id: "TUC-012", providerId: "PROV-001", providerName: "Tucanes Tours", providerSince: "2011",
    zone: "Manuel Antonio", country: "Costa Rica", active: true,
    title: { en: "Whale Watching Tour — Marino Ballena", es: "Tour de Avistamiento de Ballenas" },
    category: "wildlife", badgeLabel: "Wildlife", badgeIcon: "🐋",
    rackUSD: 165, netUSD: 132, ivaRate: 0.13,
    get pricePerPerson() { return +(this.rackUSD * (1 + this.ivaRate)).toFixed(2); },
    durationHours: 6, durationLabel: { en: "6 hours", es: "6 horas" },
    difficulty: "easy", difficultyLabel: { en: "Medium", es: "Medio" },
    minPax: 4, maxPax: null, minAgeYears: null, maxWeightLbs: null,
    pickupIncluded: true, startTimes: ["7:00 AM"], cancellationHours: 48,
    seasonNote: { en: "Seasonal: July 15 – October 15 only", es: "Temporada: solo 15 de julio al 15 de octubre" }, operatesAllYear: false,
    description: { en: "Watch humpback and pilot whales at Marino Ballena National Park in Uvita. Sail along the Pacific coast past stunning rock formations. Snorkeling included. Chances of sighting are very high in season.", es: "Avistá ballenas jorobadas y piloto en el Parque Marino Ballena en Uvita. Navegar por la costa del Pacífico. Snorkel incluido. Las posibilidades de avistamiento son muy altas en temporada." },
    highlights: [
      { icon: "🐋", en: "Humpback & pilot whales — very high chance of sighting", es: "Ballenas jorobadas y piloto — alta probabilidad de avistamiento" },
      { icon: "🌊", en: "Marino Ballena National Park — UNESCO-recognized waters", es: "Parque Marino Ballena — aguas reconocidas por la UNESCO" },
      { icon: "🤿", en: "Snorkeling included", es: "Snorkel incluido" },
      { icon: "🪨", en: "Spectacular rock formations: Roca Ballena, Tres Hermanas", es: "Formaciones rocosas: Roca Ballena, Tres Hermanas" }
    ],
    included: [
      { en: "Hotel pickup & drop-off from Manuel Antonio", es: "Recogida y retorno desde Manuel Antonio" },
      { en: "Naturalist guide", es: "Guía naturalista" },
      { en: "Park entrance fee", es: "Entrada al parque" },
      { en: "Boat tour", es: "Tour en lancha" },
      { en: "Snorkeling equipment", es: "Equipo de snorkel" },
      { en: "Snacks", es: "Snacks" },
      { en: "Insurance", es: "Seguro" }
    ],
    notIncluded: [{ en: "Gratuities", es: "Propinas" }, { en: "Whale sighting is not guaranteed", es: "El avistamiento no está garantizado" }],
    whatToBring: ["☀️ Sunscreen", "🕶️ Sunglasses", "📷 Camera", "🩱 Bathing suit", "🏖️ Beach towel"],
    itinerary: [],
    importantInfo: [
      { type: "warning", icon: "📅", title: { en: "Seasonal: July 15 – Oct 15 only", es: "Temporada: solo jul 15 – oct 15" }, body: { en: "This tour only operates during whale migration season.", es: "Este tour solo opera durante la temporada de migración de ballenas." } },
      { type: "info", icon: "👥", title: { en: "Minimum 4 guests", es: "Mínimo 4 personas" }, body: { en: "Minimum 4 guests, or pay equivalent of 4 rates.", es: "Mínimo 4 personas, o pagar equivalente a 4 tarifas." } }
    ],
    photo: "https://images.pexels.com/photos/2547565/pexels-photo-2547565.jpeg?auto=compress&cs=tinysrgb&w=800", galleryPhotos: []
  },

  "TUC-013": {
    id: "TUC-013", providerId: "PROV-001", providerName: "Tucanes Tours", providerSince: "2011",
    zone: "Manuel Antonio", country: "Costa Rica", active: true,
    title: { en: "Damas Island Mangrove Boat Tour", es: "Tour en Lancha por Manglares Isla Damas" },
    category: "wildlife", badgeLabel: "Wildlife", badgeIcon: "🐦",
    rackUSD: 87, netUSD: 65.25, ivaRate: 0.13,
    get pricePerPerson() { return +(this.rackUSD * (1 + this.ivaRate)).toFixed(2); },
    durationHours: 4, durationLabel: { en: "4 hours", es: "4 horas" },
    difficulty: "easy", difficultyLabel: { en: "Easy — ideal for seniors & families", es: "Fácil — ideal para adultos mayores y familias" },
    minPax: 2, maxPax: 60, minAgeYears: null, maxWeightLbs: null,
    pickupIncluded: true, startTimes: ["According to tide"], cancellationHours: 48,
    seasonNote: { en: "All year", es: "Todo el año" }, operatesAllYear: true,
    description: { en: "Navigate Damas Island's mangrove ecosystem by motorized boat. Ideal for seniors, children and nature lovers who prefer a relaxed pace. Spot herons, ospreys, monkeys and exotic birds. Meal included.", es: "Navegá el ecosistema de manglares de Isla Damas en lancha motorizada. Ideal para adultos mayores, niños y amantes de la naturaleza. Garzas, monos y aves exóticas. Comida incluida." },
    highlights: [
      { icon: "🚤", en: "Motorized boat — relaxed pace, no paddling required", es: "Lancha motorizada — ritmo relajado, sin remos" },
      { icon: "🐦", en: "Herons, kingfishers, ospreys and frigatebirds", es: "Garzas, martines pescadores y fragatas" },
      { icon: "👴", en: "Ideal for seniors, children and nature lovers", es: "Ideal para adultos mayores, niños y amantes de la naturaleza" },
      { icon: "🍽️", en: "Meal included (breakfast, lunch or dinner per schedule)", es: "Comida incluida (desayuno, almuerzo o cena)" }
    ],
    included: [
      { en: "Hotel pickup & drop-off", es: "Recogida y retorno" },
      { en: "Bilingual guide", es: "Guía bilingüe" },
      { en: "Beverages", es: "Bebidas" },
      { en: "Meal (per schedule)", es: "Comida (según horario)" },
      { en: "Insurance", es: "Seguro" }
    ],
    notIncluded: [{ en: "Gratuities", es: "Propinas" }],
    whatToBring: ["☀️ Suntan lotion", "🕶️ Sunglasses", "📷 Camera", "🧢 Hat/visor", "🦟 Mosquito repellent"],
    itinerary: [],
    importantInfo: [
      { type: "info", icon: "🌊", title: { en: "Tide-dependent schedule", es: "Horario según marea" }, body: { en: "Start time confirmed when booking.", es: "Horario confirmado al reservar." } }
    ],
    photo: "https://images.pexels.com/photos/1497584/pexels-photo-1497584.jpeg?auto=compress&cs=tinysrgb&w=800", galleryPhotos: []
  },

  "TUC-014": {
    id: "TUC-014", providerId: "PROV-001", providerName: "Tucanes Tours", providerSince: "2011",
    zone: "Manuel Antonio", country: "Costa Rica", active: true,
    title: { en: "Carara National Park Tour", es: "Tour Parque Nacional Carara" },
    category: "wildlife", badgeLabel: "Wildlife / Hiking", badgeIcon: "🦜",
    rackUSD: 119, netUSD: 95.20, ivaRate: 0.13,
    get pricePerPerson() { return +(this.rackUSD * (1 + this.ivaRate)).toFixed(2); },
    durationHours: 6, durationLabel: { en: "6 hours", es: "6 horas" },
    difficulty: "moderate", difficultyLabel: { en: "Moderate", es: "Moderado" },
    minPax: 4, maxPax: 18, minAgeYears: null, maxWeightLbs: null,
    pickupIncluded: true, startTimes: ["7:30 AM"], cancellationHours: 48,
    seasonNote: { en: "All year", es: "Todo el año" }, operatesAllYear: true,
    description: { en: "Visit Carara National Park — home to 48% of Costa Rica's bird species including the iconic Scarlet Macaw. Includes a stop at the Tarcoles Bridge to see the largest crocodile population in Costa Rica. Lunch included.", es: "Visitá el Parque Nacional Carara — hogar del 48% de las especies de aves de CR incluyendo la Lapa Roja. Incluye parada en el Puente de Tarcoles. Almuerzo incluido." },
    highlights: [
      { icon: "🦜", en: "Scarlet Macaws and 48% of Costa Rica's bird species", es: "Lapas Rojas y 48% de las especies de aves de CR" },
      { icon: "🐊", en: "Tarcoles Bridge — largest crocodile population in Costa Rica", es: "Puente de Tarcoles — mayor población de cocodrilos de CR" },
      { icon: "🌿", en: "Two 2-mile trails through diverse forest ecosystems", es: "Dos senderos de 3 km por ecosistemas forestales diversos" },
      { icon: "🍽️", en: "Homestyle lunch included at the end", es: "Almuerzo casero incluido al final" }
    ],
    included: [
      { en: "Hotel pickup & drop-off", es: "Recogida y retorno" },
      { en: "Bilingual guide", es: "Guía bilingüe" },
      { en: "Park entrance fee", es: "Entrada al parque" },
      { en: "Beverages", es: "Bebidas" },
      { en: "Lunch", es: "Almuerzo" },
      { en: "Insurance", es: "Seguro" }
    ],
    notIncluded: [{ en: "Gratuities", es: "Propinas" }],
    whatToBring: ["☀️ Suntan lotion", "🕶️ Sunglasses", "📷 Camera (with zoom)", "🧢 Hat/visor", "🦟 Mosquito repellent", "👟 Hiking shoes"],
    itinerary: [],
    importantInfo: [
      { type: "info", icon: "👥", title: { en: "Minimum 4 guests", es: "Mínimo 4 personas" }, body: { en: "Min 4 guests or pay equivalent of 4 rates.", es: "Mín 4 personas o pagar equivalente a 4 tarifas." } }
    ],
    photo: "https://images.pexels.com/photos/1123771/pexels-photo-1123771.jpeg?auto=compress&cs=tinysrgb&w=800", galleryPhotos: []
  },

  "TUC-015": {
    id: "TUC-015", providerId: "PROV-001", providerName: "Tucanes Tours", providerSince: "2011",
    zone: "Manuel Antonio", country: "Costa Rica", active: true,
    title: { en: "Chocolate, Vanilla & Coffee Farm Tour", es: "Tour de Cacao, Vainilla y Café" },
    category: "cultural", badgeLabel: "Cultural", badgeIcon: "🍫",
    rackUSD: 89, netUSD: 66.75, ivaRate: 0.13,
    get pricePerPerson() { return +(this.rackUSD * (1 + this.ivaRate)).toFixed(2); },
    durationHours: 5.5, durationLabel: { en: "5.5 hours", es: "5.5 horas" },
    difficulty: "easy", difficultyLabel: { en: "Easy", es: "Fácil" },
    minPax: 2, maxPax: null, minAgeYears: null, maxWeightLbs: null,
    pickupIncluded: true, startTimes: ["8:00 AM", "2:00 PM"], cancellationHours: 48,
    seasonNote: { en: "Evening tour closed May, Sep, Oct, Nov", es: "Tour vespertino cerrado mayo, sep, oct, nov" }, operatesAllYear: true,
    description: { en: "Visit a private organic farm in Londres where cacao, vanilla and coffee grow. Learn how chocolate is made from bean to bar, meet farm animals and enjoy a farm-to-table lunch. Organic wine from the farm included.", es: "Visitá una finca orgánica privada en Londres donde crecen cacao, vainilla y café. Aprendé cómo se hace el chocolate, conocé los animales de la finca y disfrutá un almuerzo de huerta a mesa. Vino orgánico de la finca incluido." },
    highlights: [
      { icon: "🍫", en: "Learn chocolate-making from cacao bean to finished bar", es: "Aprendé a hacer chocolate desde el grano hasta la barra" },
      { icon: "🌱", en: "Organic garden walk with cacao, vanilla & coffee plants", es: "Recorrido por jardín orgánico con cacao, vainilla y café" },
      { icon: "🐐", en: "Meet farm animals: rabbits, goats, ponies, horses, sheep", es: "Conocé animales: conejos, cabras, ponies, caballos, ovejas" },
      { icon: "🍽️", en: "Farm-to-table lunch and organic wine from the farm", es: "Almuerzo de huerta a mesa y vino orgánico de la finca" }
    ],
    included: [
      { en: "Hotel pickup & drop-off", es: "Recogida y retorno" },
      { en: "Bilingual guides", es: "Guías bilingües" },
      { en: "Farm tour & chocolate experience", es: "Recorrido por la finca y experiencia de chocolate" },
      { en: "Farm-to-table lunch", es: "Almuerzo de huerta a mesa" },
      { en: "Organic wine", es: "Vino orgánico" },
      { en: "Coffee-cacao-vanilla snacks", es: "Snacks de café, cacao y vainilla" },
      { en: "Insurance", es: "Seguro" }
    ],
    notIncluded: [{ en: "Gratuities", es: "Propinas" }],
    whatToBring: ["👟 Comfortable shoes", "📷 Camera", "🦟 Mosquito repellent"],
    itinerary: [],
    importantInfo: [],
    photo: "https://images.pexels.com/photos/2820884/pexels-photo-2820884.jpeg?auto=compress&cs=tinysrgb&w=800", galleryPhotos: []
  },

  "TUC-016": {
    id: "TUC-016", providerId: "PROV-001", providerName: "Tucanes Tours", providerSince: "2011",
    zone: "Manuel Antonio", country: "Costa Rica", active: true,
    title: { en: "Local Flavor Cooking Experience", es: "Experiencia de Cocina Local" },
    category: "cultural", badgeLabel: "Cultural", badgeIcon: "👨‍🍳",
    rackUSD: 85, netUSD: 63.75, ivaRate: 0.13,
    get pricePerPerson() { return +(this.rackUSD * (1 + this.ivaRate)).toFixed(2); },
    durationHours: 5.5, durationLabel: { en: "5.5 hours", es: "5.5 horas" },
    difficulty: "easy", difficultyLabel: { en: "Easy", es: "Fácil" },
    minPax: 2, maxPax: null, minAgeYears: null, maxWeightLbs: null,
    pickupIncluded: true, startTimes: ["8:00 AM", "2:00 PM"], cancellationHours: 48,
    seasonNote: { en: "Evening tour closed May, Sep, Oct, Nov", es: "Tour vespertino cerrado mayo, sep, oct, nov" }, operatesAllYear: true,
    description: { en: "Start at the Quepos farmers' market, then head to a private ranch in Londres to cook a traditional Costa Rican meal with local cooks. Make corn tortillas, ceviche, rice and chicken from scratch. Vegetarian options available.", es: "Empezá en el mercado de agricultores de Quepos, luego a una finca privada en Londres para cocinar comida tradicional costarricense. Tortillas, ceviche, arroz y pollo. Opciones vegetarianas disponibles." },
    highlights: [
      { icon: "🛒", en: "Start at the Quepos farmers' market to pick ingredients", es: "Empezá en el mercado de Quepos a escoger los ingredientes" },
      { icon: "👨‍🍳", en: "Cook tortillas, ceviche, rice and chicken from scratch", es: "Cocinás tortillas, ceviche, arroz y pollo desde cero" },
      { icon: "🥗", en: "Vegetarian options available", es: "Opciones vegetarianas disponibles" },
      { icon: "🍷", en: "Organic wine from the farm included", es: "Vino orgánico de la finca incluido" }
    ],
    included: [
      { en: "Hotel pickup & drop-off", es: "Recogida y retorno" },
      { en: "Bilingual guides", es: "Guías bilingües" },
      { en: "Market visit + cooking class", es: "Visita al mercado + clase de cocina" },
      { en: "Lunch (the meal you cook)", es: "Almuerzo (la comida que preparás)" },
      { en: "Organic wine", es: "Vino orgánico" },
      { en: "Insurance", es: "Seguro" }
    ],
    notIncluded: [{ en: "Gratuities", es: "Propinas" }],
    whatToBring: ["👟 Comfortable shoes", "📷 Camera"],
    itinerary: [],
    importantInfo: [
      { type: "info", icon: "🥗", title: { en: "Vegetarian friendly", es: "Apto para vegetarianos" }, body: { en: "Vegetarian options always available. Let us know when booking.", es: "Opciones vegetarianas siempre disponibles. Avisanos al reservar." } }
    ],
    photo: "https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg?auto=compress&cs=tinysrgb&w=800", galleryPhotos: []
  },

  "TUC-017": {
    id: "TUC-017", providerId: "PROV-001", providerName: "Tucanes Tours", providerSince: "2011",
    zone: "Manuel Antonio", country: "Costa Rica", active: true,
    title: { en: "Sport Fishing — Full Day (33ft Boat)", es: "Pesca Deportiva — Día Completo (Lancha 33ft)" },
    category: "fishing", badgeLabel: "Fishing", badgeIcon: "🎣",
    rackUSD: 1800, netUSD: 1600, ivaRate: 0.13,
    get pricePerPerson() { return +(this.rackUSD * (1 + this.ivaRate)).toFixed(2); },
    durationHours: 8, durationLabel: { en: "~8 hours", es: "~8 horas" },
    difficulty: "easy", difficultyLabel: { en: "N/A", es: "N/A" },
    minPax: 1, maxPax: 4, minAgeYears: null, maxWeightLbs: null,
    pricingNote: { en: "Price is per BOAT (up to 4 anglers), not per person", es: "Precio por LANCHA (hasta 4 pescadores), no por persona" },
    pickupIncluded: true, startTimes: ["By arrangement"], cancellationHours: 48,
    seasonNote: { en: "All year", es: "Todo el año" }, operatesAllYear: true,
    description: { en: "Quepos is one of the world's finest sport fishing locations. Inshore fishing for Roosterfish, Dorado and Snapper. Offshore reefs yield Amberjack, Tuna, Black Marlin and Sailfish. 33ft boat with captain and mate. All tackle, food and beverages included.", es: "Quepos es uno de los mejores destinos de pesca deportiva del mundo. Pesca en costa para Pez Gallo, Dorado y Pargo. En alta mar: Atún, Marlín Negro y Vela. Lancha 33ft con capitán." },
    highlights: [
      { icon: "🐟", en: "Roosterfish, Dorado, Snapper, Tuna, Black Marlin & Sailfish", es: "Pez Gallo, Dorado, Pargo, Atún, Marlín Negro y Vela" },
      { icon: "⚓", en: "33ft boat with captain and experienced mate on board", es: "Lancha de 33ft con capitán y marinero experimentado" },
      { icon: "🍺", en: "Beer, snacks, fruits, water, sodas, bait and lures included", es: "Cerveza, snacks, frutas, agua, sodas, carnadas y señuelos" },
      { icon: "🏆", en: "Quepos named one of world's best fishing locations by Marlin Magazine", es: "Quepos nombrado uno de los mejores destinos por Marlin Magazine" }
    ],
    included: [
      { en: "Hotel pickup & drop-off", es: "Recogida y retorno" },
      { en: "33ft boat + captain + mate", es: "Lancha 33ft + capitán + marinero" },
      { en: "All fishing tackle", es: "Todo el equipo de pesca" },
      { en: "Diesel", es: "Gasolina" },
      { en: "Beer, water, sodas, snacks, fruits", es: "Cerveza, agua, sodas, snacks, frutas" },
      { en: "Bait and lures", es: "Carnadas y señuelos" }
    ],
    notIncluded: [
      { en: "Fishing licenses (required)", es: "Licencias de pesca (requeridas)" },
      { en: "Gratuities", es: "Propinas" }
    ],
    whatToBring: ["☀️ Sunscreen", "🕶️ Sunglasses", "🧢 Hat", "📷 Camera", "🩱 Bathing suit", "🏖️ Beach towel"],
    itinerary: [],
    importantInfo: [
      { type: "warning", icon: "📋", title: { en: "Fishing license not included", es: "Licencia de pesca no incluida" }, body: { en: "Fishing licenses are required and not included in the price.", es: "Las licencias de pesca son requeridas y no están incluidas." } },
      { type: "info", icon: "⚓", title: { en: "Price per boat — up to 4 anglers", es: "Precio por lancha — hasta 4 pescadores" }, body: { en: "The price covers the full charter for 1-4 anglers.", es: "El precio cubre la lancha completa para 1-4 pescadores." } }
    ],
    photo: "https://images.pexels.com/photos/1430676/pexels-photo-1430676.jpeg?auto=compress&cs=tinysrgb&w=800", galleryPhotos: []
  },

  "TUC-018": {
    id: "TUC-018", providerId: "PROV-001", providerName: "Tucanes Tours", providerSince: "2011",
    zone: "Manuel Antonio", country: "Costa Rica", active: true,
    title: { en: "Sport Fishing — Half Day (33ft Boat)", es: "Pesca Deportiva — Medio Día (Lancha 33ft)" },
    category: "fishing", badgeLabel: "Fishing", badgeIcon: "🎣",
    rackUSD: 1500, netUSD: 1300, ivaRate: 0.13,
    get pricePerPerson() { return +(this.rackUSD * (1 + this.ivaRate)).toFixed(2); },
    durationHours: 5.5, durationLabel: { en: "~5.5 hours", es: "~5.5 horas" },
    difficulty: "easy", difficultyLabel: { en: "N/A", es: "N/A" },
    minPax: 1, maxPax: 4, minAgeYears: null, maxWeightLbs: null,
    pricingNote: { en: "Price is per BOAT (up to 4 anglers), not per person", es: "Precio por LANCHA (hasta 4 pescadores), no por persona" },
    pickupIncluded: true, startTimes: ["By arrangement"], cancellationHours: 48,
    seasonNote: { en: "All year", es: "Todo el año" }, operatesAllYear: true,
    description: { en: "Half-day sport fishing charter out of Quepos on a 33ft boat. Inshore fishing for Roosterfish, Dorado, Jack Crevalle and Snapper. All tackle, food and beverages included.", es: "Charter de pesca deportiva de medio día desde Quepos en lancha de 33ft. Todo el equipo de pesca, comida y bebidas incluidas." },
    highlights: [
      { icon: "🐟", en: "Roosterfish, Dorado, Jack Crevalle & Snapper", es: "Pez Gallo, Dorado, Jurel y Pargo" },
      { icon: "⚓", en: "33ft boat with captain and mate", es: "Lancha de 33ft con capitán y marinero" },
      { icon: "🍺", en: "All tackle, food and beverages included", es: "Todo el equipo, comida y bebidas incluidas" }
    ],
    included: [
      { en: "Hotel pickup & drop-off", es: "Recogida y retorno" },
      { en: "33ft boat + captain + mate", es: "Lancha 33ft + capitán + marinero" },
      { en: "All fishing tackle, bait & lures", es: "Equipo de pesca, carnadas y señuelos" },
      { en: "Diesel", es: "Gasolina" },
      { en: "Beer, water, sodas, snacks", es: "Cerveza, agua, sodas, snacks" }
    ],
    notIncluded: [
      { en: "Fishing licenses (required)", es: "Licencias de pesca (requeridas)" },
      { en: "Gratuities", es: "Propinas" }
    ],
    whatToBring: ["☀️ Sunscreen", "🕶️ Sunglasses", "🧢 Hat", "📷 Camera"],
    itinerary: [],
    importantInfo: [
      { type: "info", icon: "⚓", title: { en: "Price per boat — up to 4 anglers", es: "Precio por lancha" }, body: { en: "The price covers the full charter for 1-4 anglers.", es: "El precio cubre la lancha para 1-4 pescadores." } }
    ],
    photo: "https://images.pexels.com/photos/1430676/pexels-photo-1430676.jpeg?auto=compress&cs=tinysrgb&w=800", galleryPhotos: []
  },

  "TUC-019": {
    id: "TUC-019", providerId: "PROV-001", providerName: "Tucanes Tours", providerSince: "2011",
    zone: "Manuel Antonio", country: "Costa Rica", active: true,
    title: { en: "Damas Island Mangrove Fishing", es: "Pesca en Manglares Isla Damas" },
    category: "fishing", badgeLabel: "Fishing", badgeIcon: "🎣",
    rackUSD: 775, netUSD: 620, ivaRate: 0.13,
    get pricePerPerson() { return +(this.rackUSD * (1 + this.ivaRate)).toFixed(2); },
    durationHours: 6, durationLabel: { en: "6 hours", es: "6 horas" },
    difficulty: "easy", difficultyLabel: { en: "Easy", es: "Fácil" },
    minPax: 1, maxPax: 4, minAgeYears: null, maxWeightLbs: null,
    pricingNote: { en: "Price is per GROUP (up to 4 anglers)", es: "Precio por GRUPO (hasta 4 pescadores)" },
    pickupIncluded: true, startTimes: ["According to tides"], cancellationHours: 48,
    seasonNote: { en: "All year", es: "Todo el año" }, operatesAllYear: true,
    description: { en: "Fish in the Damas Island mangroves for red and black snappers, Pacific snooks and mangrove groupers. Multiple fishing techniques available. All boats equipped with light, medium and heavy tackle.", es: "Pescá en los manglares de Isla Damas. Pargos rojos y negros, róbalos del Pacífico y meros de manglar. Múltiples técnicas disponibles." },
    highlights: [
      { icon: "🐟", en: "Snappers, Pacific snooks & mangrove groupers", es: "Pargos, róbalos del Pacífico y meros de manglar" },
      { icon: "🎣", en: "Trolling, spinning, bottom fishing & live bait options", es: "Trolling, spinning, pesca de fondo y carnada viva" },
      { icon: "🚤", en: "Boats with canopy and comfortable seats", es: "Lanchas con toldo y asientos cómodos" }
    ],
    included: [
      { en: "Hotel pickup & drop-off", es: "Recogida y retorno" },
      { en: "Bilingual guide", es: "Guía bilingüe" },
      { en: "Fishing tackle & bait", es: "Equipo de pesca y carnadas" },
      { en: "Snacks & drinks", es: "Snacks y bebidas" }
    ],
    notIncluded: [{ en: "Gratuities", es: "Propinas" }],
    whatToBring: ["☀️ Sunscreen", "🕶️ Sunglasses", "🧢 Hat/visor", "📷 Waterproof camera", "🦟 Mosquito repellent"],
    itinerary: [],
    importantInfo: [],
    photo: "https://images.pexels.com/photos/2499699/pexels-photo-2499699.jpeg?auto=compress&cs=tinysrgb&w=800", galleryPhotos: []
  },

  "TUC-020": {
    id: "TUC-020", providerId: "PROV-001", providerName: "Tucanes Tours", providerSince: "2011",
    zone: "Manuel Antonio", country: "Costa Rica", active: true,
    title: { en: "Private Bird Watching Tour", es: "Tour Privado de Observación de Aves" },
    category: "wildlife", badgeLabel: "Wildlife", badgeIcon: "🦜",
    rackUSD: 375, netUSD: 375, ivaRate: 0.13,
    get pricePerPerson() { return +(this.rackUSD * (1 + this.ivaRate)).toFixed(2); },
    durationHours: 6.5, durationLabel: { en: "6.5 hours", es: "6.5 horas" },
    difficulty: "moderate", difficultyLabel: { en: "Moderate", es: "Moderado" },
    minPax: 2, maxPax: 8, minAgeYears: null, maxWeightLbs: null,
    pricingNote: { en: "Base price for 1-2 people. $75/additional person.", es: "Precio base para 1-2 personas. $75/persona adicional." },
    pickupIncluded: true, startTimes: ["5:00 AM"], cancellationHours: 48,
    seasonNote: { en: "All year", es: "Todo el año" }, operatesAllYear: true,
    description: { en: "Explore the pristine rainforest of Naranjito for birds. Over 250 identified species in the county — 70+ identifiable in one day. Spot Black-Mandible Toucans, White-Throated Shrike-Tanagers, hummingbirds and birds of prey with a professional naturalist guide.", es: "Explorá la selva virgen de Naranjito en busca de aves. Más de 250 especies identificadas — 70+ identificables en un día. Tucanes, tanagras, colibríes y rapaces con guía naturalista profesional." },
    highlights: [
      { icon: "🦜", en: "250+ bird species — 70+ identifiable in one day", es: "250+ especies de aves — 70+ identificables en un día" },
      { icon: "🔭", en: "Professional naturalist guide with binoculars & field guides", es: "Guía naturalista profesional con binoculares" },
      { icon: "🌅", en: "Early 5:00 AM start for maximum bird activity", es: "Salida temprana a las 5:00 AM para máxima actividad" }
    ],
    included: [
      { en: "Hotel pickup & drop-off", es: "Recogida y retorno" },
      { en: "Professional bilingual naturalist guide", es: "Guía naturalista bilingüe profesional" },
      { en: "Water & snacks", es: "Agua y snacks" }
    ],
    notIncluded: [
      { en: "Lunch (optional wood-fired CR lunch available)", es: "Almuerzo (almuerzo costarricense opcional disponible)" },
      { en: "Gratuities", es: "Propinas" }
    ],
    whatToBring: ["🦟 Insect repellent", "🧢 Hat", "🕶️ Sunglasses", "📷 Camera with zoom lens", "🔭 Binoculars (optional)", "👟 Hiking shoes"],
    itinerary: [],
    importantInfo: [
      { type: "info", icon: "🌅", title: { en: "Very early start: 5:00 AM", es: "Salida muy temprana: 5:00 AM" }, body: { en: "Early start is essential for bird watching — most activity at dawn.", es: "La salida temprana es esencial — mayor actividad al amanecer." } }
    ],
    photo: "https://images.pexels.com/photos/349758/hummingbird-bird-birds-349758.jpeg?auto=compress&cs=tinysrgb&w=800", galleryPhotos: []
  },

  "TUC-021": {
    id: "TUC-021", providerId: "PROV-001", providerName: "Tucanes Tours", providerSince: "2011",
    zone: "Manuel Antonio", country: "Costa Rica", active: true,
    title: { en: "Private Rainmaker Park Tour", es: "Tour Privado Parque Rainmaker" },
    category: "hiking", badgeLabel: "Hiking / Wildlife", badgeIcon: "⛰️",
    rackUSD: 375, netUSD: 375, ivaRate: 0.13,
    get pricePerPerson() { return +(this.rackUSD * (1 + this.ivaRate)).toFixed(2); },
    durationHours: 4.5, durationLabel: { en: "4.5 hours", es: "4.5 horas" },
    difficulty: "moderate", difficultyLabel: { en: "Moderate", es: "Moderado" },
    minPax: 2, maxPax: 8, minAgeYears: null, maxWeightLbs: null,
    pricingNote: { en: "Base price for 1-2 people. $75/additional person.", es: "Precio base para 1-2 personas. $75/persona adicional." },
    pickupIncluded: true, startTimes: ["7:30 AM", "12:30 PM"], cancellationHours: 48,
    seasonNote: { en: "All year", es: "Todo el año" }, operatesAllYear: true,
    description: { en: "Explore Rainmaker Park's river trails, waterfalls and natural pools. Highlight is the 250-meter canopy bridge system — 6 suspension bridges built to US engineering standards, 130 feet above the forest. Poison dart frogs, Morph butterflies and diverse wildlife.", es: "Explorá los senderos fluviales, cascadas y pozas naturales del Parque Rainmaker. El sistema de puentes colgantes de 250m — 130 pies sobre el bosque. Ranas dardo, mariposas Morph y fauna diversa." },
    highlights: [
      { icon: "🌉", en: "250m canopy bridge system — 130ft above the forest floor", es: "Sistema de puentes colgantes de 250m — 130ft sobre el bosque" },
      { icon: "💧", en: "Waterfalls, natural pools and a refreshing swim at the end", es: "Cascadas, pozas naturales y baño refrescante al final" },
      { icon: "🐸", en: "Poison dart frogs, Morph butterflies & diverse wildlife", es: "Ranas dardo venenosas, mariposas Morph y fauna diversa" }
    ],
    included: [
      { en: "Hotel pickup & drop-off", es: "Recogida y retorno" },
      { en: "Naturalist guide", es: "Guía naturalista" },
      { en: "Park entrance fee", es: "Entrada al parque" },
      { en: "Snacks, natural juices & water", es: "Snacks, jugos naturales y agua" }
    ],
    notIncluded: [{ en: "Gratuities", es: "Propinas" }],
    whatToBring: ["☀️ Suntan lotion", "📷 Camera", "🕶️ Sunglasses", "👟 Hiking shoes", "🩱 Bathing suit", "🏖️ Beach towel", "👕 Extra clothes"],
    itinerary: [],
    importantInfo: [],
    photo: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800", galleryPhotos: []
  },

  "TUC-022": {
    id: "TUC-022", providerId: "PROV-001", providerName: "Tucanes Tours", providerSince: "2011",
    zone: "Manuel Antonio", country: "Costa Rica", active: true,
    title: { en: "Los Campesinos Private Reserve Tour", es: "Tour Reserva Privada Los Campesinos" },
    category: "hiking", badgeLabel: "Hiking / Wildlife", badgeIcon: "🌿",
    rackUSD: 395, netUSD: 395, ivaRate: 0.13,
    get pricePerPerson() { return +(this.rackUSD * (1 + this.ivaRate)).toFixed(2); },
    durationHours: 6, durationLabel: { en: "6 hours", es: "6 horas" },
    difficulty: "moderate", difficultyLabel: { en: "Moderate", es: "Moderado" },
    minPax: 2, maxPax: 8, minAgeYears: null, maxWeightLbs: null,
    pricingNote: { en: "Base price for 1-2 people. $79/additional person.", es: "Precio base para 1-2 personas. $79/persona adicional." },
    pickupIncluded: true, startTimes: ["7:30 AM"], cancellationHours: 48,
    seasonNote: { en: "All year", es: "Todo el año" }, operatesAllYear: true,
    description: { en: "Explore a private reserve 90 minutes from Manuel Antonio. A 100-foot waterfall, hanging bridge 130 feet tall and 400 feet long, three waterfalls with natural pools and a typical Costa Rican lunch. Primary and secondary rainforest with diverse birds, reptiles and mammals.", es: "Explorá una reserva privada a 90 minutos de Manuel Antonio. Cascada de 30m, puente colgante de 40m de altura y 120m de largo, tres cascadas y almuerzo costarricense típico." },
    highlights: [
      { icon: "💧", en: "100-foot waterfall and 3 natural swimming pools", es: "Cascada de 30m y 3 pozas naturales para nadar" },
      { icon: "🌉", en: "Hanging bridge 130ft tall, 400ft long over the forest", es: "Puente colgante de 40m altura y 120m de largo" },
      { icon: "🦎", en: "Primary rainforest with birds, reptiles and mammals", es: "Bosque primario con aves, reptiles y mamíferos" },
      { icon: "🍽️", en: "Typical Costa Rican lunch included", es: "Almuerzo típico costarricense incluido" }
    ],
    included: [
      { en: "Hotel pickup & drop-off by SUV", es: "Recogida y retorno en SUV" },
      { en: "Naturalist guide", es: "Guía naturalista" },
      { en: "Park entrance fee", es: "Entrada a la reserva" },
      { en: "Water", es: "Agua" },
      { en: "Typical Costa Rican lunch", es: "Almuerzo típico costarricense" }
    ],
    notIncluded: [{ en: "Gratuities", es: "Propinas" }],
    whatToBring: ["☀️ Suntan lotion", "📷 Camera", "🕶️ Sunglasses", "👟 Hiking shoes", "🩱 Bathing suit", "🏖️ Beach towel", "👕 Extra clothes"],
    itinerary: [],
    importantInfo: [],
    photo: "https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=800", galleryPhotos: []
  }

};

// ─────────────────────────────────────────────
// HELPER: get tour by ID
// ─────────────────────────────────────────────
function getTour(id) {
  return TOURS[id] || null;
}

// ─────────────────────────────────────────────
// HELPER: get all active tours
// ─────────────────────────────────────────────
function getAllTours() {
  return Object.values(TOURS).filter(t => t.active);
}

// ─────────────────────────────────────────────
// HELPER: get tours by provider
// ─────────────────────────────────────────────
function getToursByProvider(providerId) {
  return Object.values(TOURS).filter(t => t.providerId === providerId && t.active);
}
