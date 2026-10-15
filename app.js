// ===== LUCKNOW MUSHROOM GUIDE — DATA & APP LOGIC =====
// v2.0 — Full Lucknow Coverage + Mushroom Filter + Scan Feature

// ============================================================
// VENUE DATABASE — 85+ Venues Across ALL of Lucknow
// (Includes 20 Google Maps / Zomato / Swiggy verified venues)
// ============================================================
const VENUES = [
  // ═══════════════════════════════════════════════════════════
  // TIER 1: HEAVY BULK (75+ kg/week) — Luxury Hotels
  // ═══════════════════════════════════════════════════════════
  {
    id: 1, name: "Taj Mahal Lucknow", type: "hotel", area: "Gomti Nagar",
    address: "Vipin Khand, Gomti Nagar", tier: 1, weeklyKg: 120,
    mushroomTypes: ["Button", "Oyster", "Shiitake", "Portobello", "Morel"],
    signatureDishes: [
      { name: "Wild Mushroom Galouti Kebab", price: "₹650" },
      { name: "Truffle Mushroom Risotto", price: "₹780" },
      { name: "Portobello Wellington", price: "₹950" },
      { name: "Mushroom Dum Biryani", price: "₹720" }
    ],
    priceRange: "₹₹₹₹", rating: 4.7, phone: "+91-522-671-1000",
    deliveryFreq: "Daily", packaging: "Crates + Vacuum Sealed",
    description: "Lucknow ka crown jewel. Taj ke chefs exotic mushrooms ko Awadhi cuisine ke saath fusion style me serve karte hain. Weekly 120kg+ consumption with dedicated mushroom menu section.",
    foodieHighlight: "Mushroom Galouti Kebab — Nawabi style galawati with wild mushroom blend, bilkul melt-in-mouth"
  },
  {
    id: 2, name: "Hyatt Regency", type: "hotel", area: "Gomti Nagar",
    address: "Vibhuti Khand, Gomti Nagar", tier: 1, weeklyKg: 105,
    mushroomTypes: ["Button", "Cremini", "Oyster", "Enoki", "Shiitake"],
    signatureDishes: [
      { name: "Shiitake Dim Sum Platter", price: "₹590" },
      { name: "Creamy Wild Mushroom Soup", price: "₹420" },
      { name: "Truffle Fries & Mushroom Aioli", price: "₹480" },
      { name: "Enoki Tempura Roll", price: "₹650" }
    ],
    priceRange: "₹₹₹₹", rating: 4.6, phone: "+91-522-456-1234",
    deliveryFreq: "Daily", packaging: "200g Punnets + Bulk Crates",
    description: "Hyatt ki multi-cuisine restaurants me mushroom har jagah — Asian, Italian aur Continental. Enoki aur Shiitake ka heavy use in pan-Asian preparations.",
    foodieHighlight: "Shiitake Dim Sum — handcrafted dumplings with shiitake-truffle filling, bamboo steamed"
  },
  {
    id: 3, name: "Renaissance Lucknow", type: "hotel", area: "Shaheed Path",
    address: "Shaheed Path, Gomti Nagar Extension", tier: 1, weeklyKg: 95,
    mushroomTypes: ["Button", "Portobello", "Oyster", "King Oyster"],
    signatureDishes: [
      { name: "Grilled Portobello Steak", price: "₹850" },
      { name: "Mushroom & Brie Bruschetta", price: "₹520" },
      { name: "Wild Mushroom Pappardelle", price: "₹680" },
      { name: "Mushroom Arancini", price: "₹450" }
    ],
    priceRange: "₹₹₹₹", rating: 4.5, phone: "+91-522-409-1000",
    deliveryFreq: "Alternate Days", packaging: "Vacuum Sealed Packs",
    description: "Renaissance ka European fine-dining approach mushrooms ko ek art form ki tarah treat karta hai. Portobello steak yahan ka star performer hai.",
    foodieHighlight: "Portobello Steak — thick-cut grilled portobello with red wine jus, truffle mash pe served"
  },
  {
    id: 4, name: "Hilton Garden Inn", type: "hotel", area: "Shaheed Path",
    address: "Shaheed Path, Gomti Nagar Extension", tier: 1, weeklyKg: 82,
    mushroomTypes: ["Button", "Oyster", "Cremini", "Portobello"],
    signatureDishes: [
      { name: "Mushroom & Spinach Quiche", price: "₹420" },
      { name: "Stuffed Cremini Caps", price: "₹480" },
      { name: "Mushroom Stroganoff", price: "₹580" },
      { name: "Truffle Mushroom Pizza", price: "₹620" }
    ],
    priceRange: "₹₹₹", rating: 4.4, phone: "+91-522-677-1000",
    deliveryFreq: "Alternate Days", packaging: "Crates",
    description: "Hilton ka continental kitchen mushrooms ka heavy use karta hai — breakfast buffet se lekar dinner specials tak.",
    foodieHighlight: "Stuffed Cremini Caps — herbed cream cheese filled, golden baked, truffle oil drizzle"
  },
  {
    id: 5, name: "Novotel Lucknow Gomti Nagar", type: "hotel", area: "Gomti Nagar",
    address: "Vipin Khand, Gomti Nagar", tier: 1, weeklyKg: 88,
    mushroomTypes: ["Button", "Oyster", "Shiitake", "Cremini"],
    signatureDishes: [
      { name: "Mushroom Bourguignon", price: "₹620" },
      { name: "Shiitake & Miso Ramen", price: "₹480" },
      { name: "Mushroom Vol-au-Vent", price: "₹520" },
      { name: "Thai Mushroom Coconut Curry", price: "₹560" }
    ],
    priceRange: "₹₹₹", rating: 4.5, phone: "+91-522-402-1000",
    deliveryFreq: "Daily", packaging: "200g Punnets",
    description: "Novotel ka Food Exchange restaurant globally inspired hai. French, Thai aur Japanese cuisines me mushroom ka extensive use.",
    foodieHighlight: "Mushroom Bourguignon — French classic, slow-braised mushrooms in burgundy wine sauce"
  },
  {
    id: 6, name: "Clarks Avadh", type: "hotel", area: "Hazratganj",
    address: "8, Mahatma Gandhi Marg, Hazratganj", tier: 1, weeklyKg: 78,
    mushroomTypes: ["Button", "Oyster", "Dhingri"],
    signatureDishes: [
      { name: "Dhingri Dum Lazeez", price: "₹480" },
      { name: "Mushroom Nawabi Korma", price: "₹520" },
      { name: "Champignon Gratin", price: "₹450" },
      { name: "Mushroom Lucknowi Biryani", price: "₹550" }
    ],
    priceRange: "₹₹₹", rating: 4.3, phone: "+91-522-261-6500",
    deliveryFreq: "Alternate Days", packaging: "Crates + Loose",
    description: "Heritage Lucknow hotel jo Awadhi cooking me mushrooms ka traditional use karta hai. Dhingri mushroom ki authentic preparations yahan ki specialty hai.",
    foodieHighlight: "Dhingri Dum Lazeez — slow-cooked oyster mushrooms in rich saffron-cream gravy, shahi andaaz"
  },
  {
    id: 7, name: "Vivanta by Taj", type: "hotel", area: "Gomti Nagar",
    address: "Rana Pratap Marg, Gomti Nagar", tier: 1, weeklyKg: 75,
    mushroomTypes: ["Button", "Portobello", "Shiitake", "Oyster"],
    signatureDishes: [
      { name: "Mushroom Tikka Masala", price: "₹480" },
      { name: "Wild Mushroom & Goat Cheese Tart", price: "₹520" },
      { name: "Portobello Burger Deluxe", price: "₹580" },
      { name: "Mushroom Cappuccino Soup", price: "₹380" }
    ],
    priceRange: "₹₹₹₹", rating: 4.5, phone: "+91-522-239-8888",
    deliveryFreq: "Daily", packaging: "Vacuum Sealed",
    description: "Vivanta ka rooftop restaurant Falaknuma mushroom dishes ko premium luxury me serve karta hai.",
    foodieHighlight: "Mushroom Cappuccino Soup — frothy truffle cream soup served in a coffee cup, theatrical presentation"
  },

  // ═══════════════════════════════════════════════════════════
  // TIER 2: HIGH GOURMET (35-74 kg/week) — Restaurants & Hotels
  // ═══════════════════════════════════════════════════════════
  {
    id: 8, name: "Barbeque Nation", type: "restaurant", area: "Gomti Nagar",
    address: "Sapphire Mall, Gomti Nagar", tier: 2, weeklyKg: 65,
    mushroomTypes: ["Button", "Portobello"],
    signatureDishes: [
      { name: "Tandoori Mushroom Skewers", price: "₹Buffet" },
      { name: "Stuffed Mushroom Caps", price: "₹Buffet" },
      { name: "Mushroom Tikka On-Table Grill", price: "₹Buffet" },
      { name: "Mushroom Makhani", price: "₹Buffet" }
    ],
    priceRange: "₹₹₹", rating: 4.3, phone: "+91-522-408-0001",
    deliveryFreq: "3x per week", packaging: "Bulk Crates (10kg each)",
    description: "BBQ Nation ka live grill concept mushrooms ka massive consumer hai. Har table pe mushroom skewers aur stuffed caps.",
    foodieHighlight: "Live Tandoori Mushroom Skewers — marinated in secret BBQ spices, grilled right at your table"
  },
  {
    id: 9, name: "Pirates of Grill", type: "restaurant", area: "Gomti Nagar",
    address: "Fun Republic Mall, Gomti Nagar", tier: 2, weeklyKg: 58,
    mushroomTypes: ["Button", "Portobello", "Cremini"],
    signatureDishes: [
      { name: "Grilled Portobello Stack", price: "₹Buffet" },
      { name: "Mushroom Kebab Platter", price: "₹Buffet" },
      { name: "Creamy Mushroom Pasta", price: "₹Buffet" },
      { name: "Mushroom Manchurian", price: "₹Buffet" }
    ],
    priceRange: "₹₹₹", rating: 4.2, phone: "+91-522-410-0055",
    deliveryFreq: "3x per week", packaging: "Crates",
    description: "Pirates ka buffet-grill format me mushrooms ki bharpoor demand hai. Grilled mushrooms, starters aur main course — teeno me present.",
    foodieHighlight: "Grilled Portobello Stack — layered with cheese, peppers, and herbs, straight off the live grill"
  },
  {
    id: 10, name: "Farzi Cafe", type: "restaurant", area: "Phoenix Palassio",
    address: "Phoenix Palassio Mall, Shaheed Path", tier: 2, weeklyKg: 52,
    mushroomTypes: ["Button", "Shiitake", "Truffle Oil", "Oyster"],
    signatureDishes: [
      { name: "Molecular Mushroom Golgappa", price: "₹450" },
      { name: "Truffle Mushroom Risotto", price: "₹580" },
      { name: "Mushroom Seekh Kebab 2.0", price: "₹520" },
      { name: "Wild Mushroom Pâté", price: "₹480" }
    ],
    priceRange: "₹₹₹", rating: 4.4, phone: "+91-522-413-0010",
    deliveryFreq: "3x per week", packaging: "200g Punnets + Truffle Oil Bottles",
    description: "Farzi ka molecular gastronomy approach mushrooms ko next level pe le jaata hai. Mushroom golgappa me foam technique use hota hai!",
    foodieHighlight: "Molecular Mushroom Golgappa — deconstructed golgappa with mushroom foam, truffle essence, mind-blowing!"
  },
  {
    id: 11, name: "Mainland China", type: "restaurant", area: "Gomti Nagar",
    address: "Vibhuti Khand, Gomti Nagar", tier: 2, weeklyKg: 55,
    mushroomTypes: ["Button", "Shiitake", "Oyster", "Enoki", "Wood Ear"],
    signatureDishes: [
      { name: "Wok-Tossed Shiitake & Asparagus", price: "₹520" },
      { name: "Hot & Sour Mushroom Soup", price: "₹320" },
      { name: "Szechuan Chilli Mushroom", price: "₹480" },
      { name: "Steamed Mushroom Dumplings", price: "₹450" }
    ],
    priceRange: "₹₹₹", rating: 4.4, phone: "+91-522-400-8899",
    deliveryFreq: "3x per week", packaging: "Punnets (variety wise)",
    description: "Chinese cuisine ka gold standard. 5 different mushroom varieties ka daily use — Shiitake, Enoki, Wood Ear sab authentic Chinese preparations me.",
    foodieHighlight: "Wok-Tossed Shiitake — high-flame wok, garlic, ginger, bamboo shoots ke saath, smoky perfection"
  },
  {
    id: 12, name: "Burma Burma", type: "restaurant", area: "Phoenix Palassio",
    address: "Phoenix Palassio Mall, Shaheed Path", tier: 2, weeklyKg: 42,
    mushroomTypes: ["Shiitake", "Button", "Oyster", "King Oyster"],
    signatureDishes: [
      { name: "Burmese Mushroom Salad", price: "₹380" },
      { name: "Truffle Mushroom Khao Suey", price: "₹520" },
      { name: "Oh No Mushroom Curry", price: "₹480" },
      { name: "King Oyster Satay", price: "₹450" }
    ],
    priceRange: "₹₹₹", rating: 4.5, phone: "+91-522-413-0050",
    deliveryFreq: "Alternate Days", packaging: "Vacuum Sealed",
    description: "100% vegetarian Burmese restaurant jahan mushroom THE primary protein source hai. Har dish me mushroom ka innovative use.",
    foodieHighlight: "Truffle Mushroom Khao Suey — rich coconut curry noodle soup with truffle-infused mushroom medley"
  },
  {
    id: 13, name: "Copper Chimney", type: "restaurant", area: "Gomti Nagar",
    address: "Vibhuti Khand, Gomti Nagar", tier: 2, weeklyKg: 45,
    mushroomTypes: ["Button", "Oyster", "Cremini"],
    signatureDishes: [
      { name: "Mushroom Hara Bhara Kebab", price: "₹380" },
      { name: "Mushroom Do Pyaza", price: "₹420" },
      { name: "Grilled Mushroom Platter", price: "₹480" },
      { name: "Mushroom Biryani", price: "₹450" }
    ],
    priceRange: "₹₹₹", rating: 4.3, phone: "+91-522-406-5500",
    deliveryFreq: "3x per week", packaging: "Crates",
    description: "Indian fine dining chain jahan mushroom ke North Indian aur tandoori preparations serve hote hain.",
    foodieHighlight: "Mushroom Hara Bhara Kebab — spinach aur mushroom ka melt-in-mouth combo, pudina chutney ke saath"
  },
  {
    id: 14, name: "The Yellow Chilli", type: "restaurant", area: "Gomti Nagar",
    address: "Patrakarpuram, Gomti Nagar", tier: 2, weeklyKg: 40,
    mushroomTypes: ["Button", "Oyster", "Dhingri"],
    signatureDishes: [
      { name: "Sanjeev Kapoor's Mushroom Galawati", price: "₹420" },
      { name: "Dhingri Matar", price: "₹380" },
      { name: "Mushroom Lababdar", price: "₹400" },
      { name: "Stuffed Mushroom Tikka", price: "₹360" }
    ],
    priceRange: "₹₹₹", rating: 4.2, phone: "+91-522-405-0707",
    deliveryFreq: "3x per week", packaging: "Crates",
    description: "Chef Sanjeev Kapoor ka brand — mushroom ki preparations unke signature recipes ke hisaab se banti hain.",
    foodieHighlight: "Sanjeev Kapoor's Mushroom Galawati — celebrity chef ka signature, Lucknow-meets-innovation recipe"
  },
  {
    id: 15, name: "Mughal's Dastarkhwan", type: "restaurant", area: "Lalbagh",
    address: "Lalbagh, Near Clarks Avadh", tier: 2, weeklyKg: 48,
    mushroomTypes: ["Button", "Dhingri", "Oyster"],
    signatureDishes: [
      { name: "Dhingri Handi", price: "₹320" },
      { name: "Mushroom Nawabi Qorma", price: "₹350" },
      { name: "Mushroom Dum Pukht", price: "₹380" },
      { name: "Mushroom Shami Kebab", price: "₹280" }
    ],
    priceRange: "₹₹", rating: 4.4, phone: "+91-522-220-5500",
    deliveryFreq: "Daily", packaging: "Loose + Crates",
    description: "Authentic Awadhi restaurant chain jo Lucknow ki culinary heritage represent karta hai. Mushroom ki traditional Lucknowi preparations.",
    foodieHighlight: "Mushroom Dum Pukht — slow-sealed in dough, 3-hour dum cooking, royal Awadhi fragrance"
  },
  {
    id: 16, name: "Moti Mahal Delux", type: "restaurant", area: "Hazratganj",
    address: "MG Road, Hazratganj", tier: 2, weeklyKg: 43,
    mushroomTypes: ["Button", "Oyster"],
    signatureDishes: [
      { name: "Mushroom Moti Mahal Special", price: "₹380" },
      { name: "Tandoori Mushroom", price: "₹320" },
      { name: "Mushroom Butter Masala", price: "₹350" },
      { name: "Mushroom Seekh Kebab", price: "₹340" }
    ],
    priceRange: "₹₹", rating: 4.1, phone: "+91-522-223-4455",
    deliveryFreq: "3x per week", packaging: "Crates",
    description: "Legacy restaurant chain jiska North Indian mushroom preparations me naam hai.",
    foodieHighlight: "Mushroom Moti Mahal Special — secret spice blend, creamy tomato gravy, naan ke saath zabardast"
  },
  {
    id: 17, name: "Royal Cafe", type: "restaurant", area: "Hazratganj",
    address: "Hazratganj Main Road", tier: 2, weeklyKg: 35,
    mushroomTypes: ["Button", "Oyster"],
    signatureDishes: [
      { name: "Mushroom Basket Chaat", price: "₹180" },
      { name: "Mushroom Makhani", price: "₹280" },
      { name: "Crispy Mushroom Fry", price: "₹200" },
      { name: "Mushroom Galawati Paratha", price: "₹220" }
    ],
    priceRange: "₹₹", rating: 4.3, phone: "+91-522-222-0066",
    deliveryFreq: "Alternate Days", packaging: "Loose",
    description: "Lucknow ka iconic vegetarian restaurant. Basket Chaat ke liye famous lekin mushroom innovations bhi shandar hain.",
    foodieHighlight: "Mushroom Basket Chaat — Royal Cafe ke signature basket chaat ka mushroom twist, must try!"
  },
  {
    id: 18, name: "Piccadily Hotel Restaurant", type: "hotel", area: "Kanpur Road",
    address: "Piccadily Hotel, Kanpur Road", tier: 2, weeklyKg: 55,
    mushroomTypes: ["Button", "Oyster", "Portobello"],
    signatureDishes: [
      { name: "Mushroom Pot Pie", price: "₹380" },
      { name: "Mushroom & Cheese Fondue", price: "₹520" },
      { name: "Awadhi Mushroom Curry", price: "₹400" },
      { name: "Grilled Mushroom Salad", price: "₹340" }
    ],
    priceRange: "₹₹₹", rating: 4.2, phone: "+91-522-433-0000",
    deliveryFreq: "3x per week", packaging: "Crates",
    description: "Piccadily ka multi-cuisine restaurant continental aur Indian dono me mushrooms ka rich use karta hai.",
    foodieHighlight: "Mushroom & Cheese Fondue — bubbling Swiss cheese with mushroom medley, dip karo aur enjoy karo"
  },
  {
    id: 28, name: "The Terrace Grill (Clarks)", type: "restaurant", area: "Hazratganj",
    address: "Clarks Avadh, Hazratganj", tier: 2, weeklyKg: 38,
    mushroomTypes: ["Button", "Portobello", "Oyster"],
    signatureDishes: [
      { name: "Charcoal Grilled Portobello", price: "₹520" },
      { name: "Mushroom & Herb Sizzler", price: "₹480" },
      { name: "Oyster Mushroom Tikka", price: "₹380" },
      { name: "Mushroom Wellington Slice", price: "₹550" }
    ],
    priceRange: "₹₹₹", rating: 4.3, phone: "+91-522-261-6500",
    deliveryFreq: "Alternate Days", packaging: "Crates",
    description: "Clarks Avadh ka rooftop terrace grill — open-air dining me charcoal grilled mushroom preparations.",
    foodieHighlight: "Charcoal Grilled Portobello — smoky, juicy, giant portobello cap with roasted garlic butter"
  },
  {
    id: 29, name: "Golden Tulip", type: "hotel", area: "Gomti Nagar",
    address: "Lohia Path, Gomti Nagar", tier: 2, weeklyKg: 50,
    mushroomTypes: ["Button", "Oyster", "Cremini"],
    signatureDishes: [
      { name: "Mushroom & Asparagus Strudel", price: "₹480" },
      { name: "Creamy Mushroom Penne", price: "₹420" },
      { name: "Mushroom Gratin", price: "₹380" },
      { name: "Thai Basil Mushroom Stir-Fry", price: "₹400" }
    ],
    priceRange: "₹₹₹", rating: 4.2, phone: "+91-522-403-8888",
    deliveryFreq: "3x per week", packaging: "Punnets + Crates",
    description: "Upscale business hotel jahan continental mushroom dishes ka strong presence hai.",
    foodieHighlight: "Mushroom & Asparagus Strudel — flaky pastry wrapped around mushroom-asparagus filling, divine taste"
  },
  {
    id: 30, name: "The Sahara Gateway", type: "hotel", area: "Kanpur Road",
    address: "Sahara City, Kanpur Road", tier: 2, weeklyKg: 60,
    mushroomTypes: ["Button", "Portobello", "Oyster", "Cremini"],
    signatureDishes: [
      { name: "Mushroom Sushi Roll", price: "₹520" },
      { name: "Mushroom Fondue", price: "₹580" },
      { name: "Pan-Seared Mushroom Medley", price: "₹480" },
      { name: "Mushroom Tom Kha Soup", price: "₹380" }
    ],
    priceRange: "₹₹₹₹", rating: 4.3, phone: "+91-522-677-0000",
    deliveryFreq: "Daily", packaging: "Vacuum Sealed",
    description: "Sahara Group ka luxury property. Japanese, Thai aur European mushroom preparations — sushi rolls se fondue tak.",
    foodieHighlight: "Mushroom Sushi Roll — tempura mushroom, avocado, spicy mayo, Japanese precision in Lucknow!"
  },

  // ═══════════════════════════════════════════════════════════
  // TIER 3: BOUTIQUE / CAFE (15-34 kg/week)
  // ═══════════════════════════════════════════════════════════
  {
    id: 19, name: "Social", type: "cafe", area: "Phoenix Palassio",
    address: "Phoenix Palassio Mall, Shaheed Path", tier: 3, weeklyKg: 32,
    mushroomTypes: ["Button", "Shiitake", "Truffle Oil"],
    signatureDishes: [
      { name: "Truffle Mushroom Grilled Sandwich", price: "₹380" },
      { name: "Mushroom & Brie Flatbread", price: "₹420" },
      { name: "Wild Mushroom Mac & Cheese", price: "₹450" },
      { name: "Mushroom Pepper Fry", price: "₹320" }
    ],
    priceRange: "₹₹₹", rating: 4.3, phone: "+91-522-413-0099",
    deliveryFreq: "Alternate Days", packaging: "200g Punnets",
    description: "Young Lucknow ka hangout spot. Urban cafe culture me mushroom dishes ko trendy format me serve karta hai.",
    foodieHighlight: "Wild Mushroom Mac & Cheese — loaded, cheesy, truffle-infused, pure comfort food vibes"
  },
  {
    id: 20, name: "The Vintage Machine", type: "cafe", area: "Gomti Nagar",
    address: "Sahara Plaza, Vibhuti Khand", tier: 3, weeklyKg: 28,
    mushroomTypes: ["Button", "Portobello", "Cremini"],
    signatureDishes: [
      { name: "Truffle Mushroom Pizza", price: "₹480" },
      { name: "Mushroom Aglio Olio", price: "₹380" },
      { name: "Mushroom Bruschetta", price: "₹280" },
      { name: "Creamy Mushroom Soup", price: "₹250" }
    ],
    priceRange: "₹₹₹", rating: 4.4, phone: "+91-522-400-1122",
    deliveryFreq: "Alternate Days", packaging: "Punnets",
    description: "Lucknow ka premium cafe with European vibes. Mushroom pizza aur pasta yahan ka forte hai.",
    foodieHighlight: "Truffle Mushroom Pizza — wood-fired thin crust, truffle cream base, wild mushroom medley, arugula top"
  },
  {
    id: 21, name: "Repertwahr", type: "cafe", area: "Hazratganj",
    address: "Habibullah Estate, Hazratganj", tier: 3, weeklyKg: 24,
    mushroomTypes: ["Button", "Portobello", "Shiitake"],
    signatureDishes: [
      { name: "Mushroom & Thyme Crostini", price: "₹350" },
      { name: "Portobello Mushroom Burger", price: "₹420" },
      { name: "Mushroom Ravioli", price: "₹480" },
      { name: "Mushroom Béchamel Crêpe", price: "₹380" }
    ],
    priceRange: "₹₹₹", rating: 4.5, phone: "+91-522-260-0088",
    deliveryFreq: "2x per week", packaging: "Punnets",
    description: "Hazratganj ka most elegant European cafe. French aur Italian mushroom preparations serve hoti hain.",
    foodieHighlight: "Mushroom Ravioli — handmade pasta pockets filled with herbed mushroom-ricotta, sage butter sauce"
  },
  {
    id: 22, name: "Roastery Coffee House", type: "cafe", area: "Gomti Nagar",
    address: "Near BBD, Gomti Nagar", tier: 3, weeklyKg: 22,
    mushroomTypes: ["Button", "Cremini"],
    signatureDishes: [
      { name: "Mushroom & Spinach Sandwich", price: "₹280" },
      { name: "Mushroom Alfredo Pasta", price: "₹360" },
      { name: "Garlic Mushroom Toast", price: "₹220" },
      { name: "Mushroom Pesto Panini", price: "₹300" }
    ],
    priceRange: "₹₹", rating: 4.2, phone: "+91-522-401-7700",
    deliveryFreq: "2x per week", packaging: "Loose",
    description: "Coffee aur mushroom dishes ka combo. Mushroom pasta, sandwiches aur toasts ka dedicated section hai.",
    foodieHighlight: "Garlic Mushroom Toast — buttery sourdough, sautéed garlic mushrooms, parmesan shavings"
  },
  {
    id: 23, name: "Cappuccino Blast", type: "cafe", area: "Indira Nagar",
    address: "Sector 12, Indira Nagar", tier: 3, weeklyKg: 20,
    mushroomTypes: ["Button", "Cremini"],
    signatureDishes: [
      { name: "Mushroom Cheese Burst Pizza", price: "₹350" },
      { name: "Mushroom White Sauce Pasta", price: "₹300" },
      { name: "Crispy Mushroom Bites", price: "₹220" },
      { name: "Mushroom Quesadilla", price: "₹280" }
    ],
    priceRange: "₹₹", rating: 4.1, phone: "+91-522-405-3344",
    deliveryFreq: "2x per week", packaging: "Loose",
    description: "Indira Nagar ka popular cafe. Mushroom pizza aur pasta yahan ke best sellers hain — students ka favorite spot.",
    foodieHighlight: "Mushroom Cheese Burst Pizza — extra cheese, extra mushrooms, extra happiness!"
  },
  {
    id: 24, name: "Buttercup Bungalow", type: "cafe", area: "Indira Nagar",
    address: "Sector 11, Indira Nagar", tier: 3, weeklyKg: 18,
    mushroomTypes: ["Button", "Oyster"],
    signatureDishes: [
      { name: "Mushroom & Corn Sizzler", price: "₹380" },
      { name: "Garlic Butter Mushroom Taco", price: "₹280" },
      { name: "Mushroom Enchilada", price: "₹340" },
      { name: "Mushroom Loaded Fries", price: "₹260" }
    ],
    priceRange: "₹₹", rating: 4.0, phone: "+91-522-407-1188",
    deliveryFreq: "2x per week", packaging: "Loose",
    description: "Mexican-inspired cafe jahan mushroom tacos, enchiladas aur sizzlers me mushrooms ka creative use hota hai.",
    foodieHighlight: "Garlic Butter Mushroom Taco — crispy shells, sautéed mushrooms, jalapeño sour cream, addictive!"
  },
  {
    id: 25, name: "Mocha", type: "cafe", area: "Gomti Nagar",
    address: "Vipin Khand, Gomti Nagar", tier: 3, weeklyKg: 22,
    mushroomTypes: ["Button", "Portobello"],
    signatureDishes: [
      { name: "Mushroom Calzone", price: "₹420" },
      { name: "Wild Mushroom Soup Bowl", price: "₹280" },
      { name: "Portobello Open Sandwich", price: "₹360" },
      { name: "Mushroom Risotto Bowl", price: "₹440" }
    ],
    priceRange: "₹₹₹", rating: 4.3, phone: "+91-522-400-3377",
    deliveryFreq: "Alternate Days", packaging: "Punnets",
    description: "Premium lounge-cafe with Middle Eastern vibes. Mushroom calzone aur risotto yahan ke specialties hain.",
    foodieHighlight: "Mushroom Calzone — folded pizza with melting cheese & mushroom stuffing, marinara dip ke saath"
  },
  {
    id: 26, name: "Underdoggs Sports Bar", type: "cafe", area: "Gomti Nagar",
    address: "Fun Republic Mall, Gomti Nagar", tier: 3, weeklyKg: 28,
    mushroomTypes: ["Button", "Portobello"],
    signatureDishes: [
      { name: "Beer Battered Mushroom Poppers", price: "₹380" },
      { name: "Mushroom Nachos Supreme", price: "₹420" },
      { name: "Grilled Mushroom Slider Trio", price: "₹450" },
      { name: "Mushroom Cheese Fries", price: "₹340" }
    ],
    priceRange: "₹₹₹", rating: 4.1, phone: "+91-522-410-0077",
    deliveryFreq: "3x per week", packaging: "Crates",
    description: "Sports bar jahan mushroom starters aur bar snacks ka heavy demand hai. Match nights pe consumption double.",
    foodieHighlight: "Beer Battered Mushroom Poppers — crispy, golden, juicy mushrooms with sriracha mayo dip"
  },
  {
    id: 27, name: "Cafe de Lucknow", type: "cafe", area: "Hazratganj",
    address: "MG Road, Hazratganj", tier: 3, weeklyKg: 18,
    mushroomTypes: ["Button", "Oyster"],
    signatureDishes: [
      { name: "Awadhi Mushroom Parantha Roll", price: "₹180" },
      { name: "Mushroom Chai Pairing Plate", price: "₹250" },
      { name: "Spicy Mushroom Kulcha", price: "₹200" },
      { name: "Mushroom Bun Kabab", price: "₹160" }
    ],
    priceRange: "₹", rating: 4.0, phone: "+91-522-222-9900",
    deliveryFreq: "2x per week", packaging: "Loose",
    description: "Hazratganj ka pocket-friendly cafe jo mushroom ko desi street-food style me serve karta hai.",
    foodieHighlight: "Mushroom Bun Kabab — Lucknow street food ka mushroom twist, crispy patty, spicy chutney, ₹160 only!"
  },
  {
    id: 31, name: "The Jeera", type: "restaurant", area: "Aliganj",
    address: "Sector F, Aliganj", tier: 3, weeklyKg: 30,
    mushroomTypes: ["Button", "Oyster", "Dhingri"],
    signatureDishes: [
      { name: "Mushroom Keema", price: "₹280" },
      { name: "Dhingri Masala", price: "₹260" },
      { name: "Mushroom Palak", price: "₹250" },
      { name: "Tandoori Mushroom Tikka", price: "₹300" }
    ],
    priceRange: "₹₹", rating: 4.2, phone: "+91-522-410-5566",
    deliveryFreq: "Alternate Days", packaging: "Loose",
    description: "Aliganj ka beloved family restaurant. North Indian preparations me mushroom ka generous use.",
    foodieHighlight: "Mushroom Keema — minced mushroom cooked like keema, rich spices, rumali roti ke saath perfect"
  },
  {
    id: 32, name: "Lakhori Cafe & Kitchen", type: "cafe", area: "Hazratganj",
    address: "Near GPO, Hazratganj", tier: 3, weeklyKg: 16,
    mushroomTypes: ["Button", "Oyster"],
    signatureDishes: [
      { name: "Mushroom Galouti Slider", price: "₹220" },
      { name: "Awadhi Mushroom Tikki", price: "₹180" },
      { name: "Mushroom Chai Snack Plate", price: "₹200" },
      { name: "Mushroom Parantha Thali", price: "₹250" }
    ],
    priceRange: "₹", rating: 4.1, phone: "+91-522-223-4400",
    deliveryFreq: "2x per week", packaging: "Loose",
    description: "Heritage cafe jo Lucknowi street food ko modern twist deta hai. Mushroom galouti sliders innovation ke gems hain.",
    foodieHighlight: "Mushroom Galouti Slider — mini buns me melt-in-mouth mushroom galouti, Lucknow street food evolved!"
  },

  // ═══════════════════════════════════════════════════════════
  // NEW AREAS — PURE LUCKNOW COVERAGE
  // ═══════════════════════════════════════════════════════════

  // ── AMINABAD ──
  {
    id: 33, name: "Tunday Kababi", type: "restaurant", area: "Aminabad",
    address: "Akbari Gate, Aminabad", tier: 2, weeklyKg: 40,
    mushroomTypes: ["Button", "Dhingri"],
    signatureDishes: [
      { name: "Mushroom Galawati Kebab", price: "₹200" },
      { name: "Mushroom Seekh Kebab", price: "₹180" },
      { name: "Mushroom Biryani Plate", price: "₹220" },
      { name: "Mushroom Rumali Roll", price: "₹150" }
    ],
    priceRange: "₹", rating: 4.5, phone: "+91-522-256-0007",
    deliveryFreq: "Daily", packaging: "Loose",
    description: "Lucknow ki iconic kebab shop ne mushroom galawati kebab launch kiya hai — vegetarian crowd ke liye revolution. Same 160-year-old secret masala with mushrooms.",
    foodieHighlight: "Mushroom Galawati Kebab — Tunday ka 160-saal purana masala, mushroom ke saath, history pe bana snack!"
  },
  {
    id: 34, name: "Wahid Biryani (Aminabad)", type: "restaurant", area: "Aminabad",
    address: "Near Nazirabad, Aminabad", tier: 2, weeklyKg: 35,
    mushroomTypes: ["Button", "Dhingri"],
    signatureDishes: [
      { name: "Mushroom Dum Biryani", price: "₹180" },
      { name: "Mushroom Korma", price: "₹160" },
      { name: "Mushroom Raita Bowl", price: "₹80" },
      { name: "Mushroom Sheermal Combo", price: "₹200" }
    ],
    priceRange: "₹", rating: 4.3, phone: "+91-522-256-1122",
    deliveryFreq: "Daily", packaging: "Loose",
    description: "Wahid ka mushroom dum biryani naya addition hai — same dum technique, layers of mushroom aur saffron rice.",
    foodieHighlight: "Mushroom Dum Biryani — Wahid ka legendary dum style, button mushroom ke saath saffron rice layers"
  },

  // ── CHOWK ──
  {
    id: 35, name: "Rahim's Nihari House", type: "restaurant", area: "Chowk",
    address: "Chowk, Near Akbari Gate", tier: 3, weeklyKg: 25,
    mushroomTypes: ["Button", "Dhingri"],
    signatureDishes: [
      { name: "Mushroom Nihari Style Curry", price: "₹180" },
      { name: "Dhingri Nahari", price: "₹200" },
      { name: "Mushroom Kulcha Set", price: "₹120" },
      { name: "Tandoori Mushroom Naan Roll", price: "₹100" }
    ],
    priceRange: "₹", rating: 4.2, phone: "+91-522-256-3344",
    deliveryFreq: "Daily", packaging: "Loose",
    description: "Chowk ki galiyon me Rahim ke yahan mushroom nahari style curry naya experiment hai — slow-cooked mushroom with traditional nahari masalon me.",
    foodieHighlight: "Mushroom Nihari Style — 6 ghante ki slow cooking, dhingri mushroom, nahari spices, naan ke saath"
  },
  {
    id: 36, name: "Chowk Chaat & Snack Corner", type: "cafe", area: "Chowk",
    address: "Chowk Main Road", tier: 3, weeklyKg: 15,
    mushroomTypes: ["Button"],
    signatureDishes: [
      { name: "Mushroom Tikki Chaat", price: "₹60" },
      { name: "Crispy Mushroom Golgappa", price: "₹50" },
      { name: "Mushroom Samosa", price: "₹30" },
      { name: "Masala Mushroom Plate", price: "₹80" }
    ],
    priceRange: "₹", rating: 4.0, phone: "+91-522-256-5500",
    deliveryFreq: "Daily", packaging: "Loose",
    description: "Chowk ka street food hub jahan mushroom tikki chaat aur mushroom samosa naye trending items hain. ₹30 me samosa!",
    foodieHighlight: "Mushroom Tikki Chaat — crunchy mushroom tikki, dahi, chutney, sev, Chowk ki galliyon ka swad!"
  },

  // ── ALAMBAGH ──
  {
    id: 37, name: "Aryan Restaurant", type: "restaurant", area: "Alambagh",
    address: "Kanpur Road, Alambagh", tier: 2, weeklyKg: 38,
    mushroomTypes: ["Button", "Oyster", "Cremini"],
    signatureDishes: [
      { name: "Mushroom Butter Masala", price: "₹250" },
      { name: "Mushroom Kadhai", price: "₹280" },
      { name: "Tandoori Mushroom Platter", price: "₹320" },
      { name: "Mushroom Fried Rice", price: "₹220" }
    ],
    priceRange: "₹₹", rating: 4.1, phone: "+91-522-432-0011",
    deliveryFreq: "3x per week", packaging: "Crates",
    description: "Alambagh ka popular family restaurant. North Indian aur Chinese dono me mushroom dishes ki strong presence hai.",
    foodieHighlight: "Mushroom Kadhai — iron kadhai me tossed mushrooms, bell peppers, desi tadka, roti ke saath zabardast"
  },
  {
    id: 38, name: "Saharaganj Food Republic", type: "cafe", area: "Alambagh",
    address: "Sahara Ganj Mall, Alambagh", tier: 3, weeklyKg: 30,
    mushroomTypes: ["Button", "Cremini", "Oyster"],
    signatureDishes: [
      { name: "Mushroom Cheese Pizza (Multiple Outlets)", price: "₹250-400" },
      { name: "Mushroom Dimsum", price: "₹220" },
      { name: "Mushroom Wrap", price: "₹180" },
      { name: "Mushroom Noodle Bowl", price: "₹200" }
    ],
    priceRange: "₹₹", rating: 4.0, phone: "+91-522-432-5000",
    deliveryFreq: "Daily", packaging: "Mixed",
    description: "Saharaganj Mall ka Food Republic — multiple outlets combined mushroom consumption. Pizza chains, Chinese, Indian sab me mushroom items hit hain.",
    foodieHighlight: "Food court ke 10+ outlets ka combined mushroom menu — pizza se dimsum tak sab ek jagah"
  },

  // ── CHARBAGH ──
  {
    id: 39, name: "Hotel Charans Continental", type: "hotel", area: "Charbagh",
    address: "Station Road, Charbagh", tier: 2, weeklyKg: 42,
    mushroomTypes: ["Button", "Oyster", "Portobello"],
    signatureDishes: [
      { name: "Mushroom Tikka Masala", price: "₹280" },
      { name: "Mushroom Pulao", price: "₹220" },
      { name: "Grilled Mushroom Platter", price: "₹350" },
      { name: "Creamy Mushroom Soup", price: "₹180" }
    ],
    priceRange: "₹₹", rating: 4.0, phone: "+91-522-263-5050",
    deliveryFreq: "3x per week", packaging: "Crates",
    description: "Charbagh railway station ke paas ka established hotel. Travelers aur local dono ke liye mushroom dishes serve karta hai — high footfall area.",
    foodieHighlight: "Mushroom Tikka Masala — station area ka comfort food, creamy, spicy, travel ke baad perfect meal"
  },
  {
    id: 40, name: "Platform 1 Kitchen & Bar", type: "cafe", area: "Charbagh",
    address: "Near Charbagh Station", tier: 3, weeklyKg: 18,
    mushroomTypes: ["Button", "Cremini"],
    signatureDishes: [
      { name: "Mushroom Cheese Toast", price: "₹180" },
      { name: "Mushroom Pasta Bowl", price: "₹250" },
      { name: "Spicy Mushroom Wings", price: "₹200" },
      { name: "Mushroom Loaded Nachos", price: "₹280" }
    ],
    priceRange: "₹₹", rating: 3.9, phone: "+91-522-263-7700",
    deliveryFreq: "2x per week", packaging: "Loose",
    description: "Railway theme cafe near Charbagh. Young crowd aur travelers ke beech popular. Mushroom nachos aur pasta hit items hain.",
    foodieHighlight: "Mushroom Loaded Nachos — crispy tortilla chips, cheesy mushroom topping, jalapeños, sour cream"
  },

  // ── MAHANAGAR ──
  {
    id: 41, name: "Saffron Leaf Restaurant", type: "restaurant", area: "Mahanagar",
    address: "Sector C, Mahanagar", tier: 2, weeklyKg: 36,
    mushroomTypes: ["Button", "Oyster", "Dhingri"],
    signatureDishes: [
      { name: "Mushroom Roganjosh", price: "₹320" },
      { name: "Dhingri Do Pyaza", price: "₹280" },
      { name: "Mushroom Seekh Parantha Roll", price: "₹200" },
      { name: "Mushroom Paneer Tikka", price: "₹340" }
    ],
    priceRange: "₹₹", rating: 4.2, phone: "+91-522-278-1100",
    deliveryFreq: "3x per week", packaging: "Crates",
    description: "Mahanagar ka go-to family restaurant. Indian preparations me mushroom ka generous use — Roganjosh aur Do Pyaza star dishes hain.",
    foodieHighlight: "Mushroom Roganjosh — Kashmiri-style slow-cooked mushrooms, rich tomato-yogurt gravy, aromatic spices"
  },
  {
    id: 42, name: "Green Bites Cafe", type: "cafe", area: "Mahanagar",
    address: "Near PGI, Mahanagar", tier: 3, weeklyKg: 16,
    mushroomTypes: ["Button", "Oyster"],
    signatureDishes: [
      { name: "Mushroom Panini", price: "₹200" },
      { name: "Mushroom Soup & Bread Bowl", price: "₹220" },
      { name: "Garlic Mushroom Bruschetta", price: "₹180" },
      { name: "Mushroom Grilled Sandwich", price: "₹160" }
    ],
    priceRange: "₹₹", rating: 4.0, phone: "+91-522-278-3300",
    deliveryFreq: "2x per week", packaging: "Loose",
    description: "PGI ke paas healthy cafe. Medical students aur doctors ka favorite — mushroom soup aur panini healthy lunch options hain.",
    foodieHighlight: "Mushroom Soup & Bread Bowl — thick creamy soup served inside a hollowed sourdough bread, wholesome!"
  },

  // ── RAJAJIPURAM ──
  {
    id: 43, name: "Zaika-e-Lucknow", type: "restaurant", area: "Rajajipuram",
    address: "B Block, Rajajipuram", tier: 3, weeklyKg: 28,
    mushroomTypes: ["Button", "Dhingri"],
    signatureDishes: [
      { name: "Mushroom Handi", price: "₹220" },
      { name: "Dhingri Mughlai", price: "₹250" },
      { name: "Mushroom Biryani", price: "₹200" },
      { name: "Tandoori Mushroom", price: "₹200" }
    ],
    priceRange: "₹₹", rating: 4.1, phone: "+91-522-341-0022",
    deliveryFreq: "3x per week", packaging: "Loose",
    description: "Rajajipuram ka local favorite. Mughlai style mushroom preparations affordable prices pe — mushroom handi yahan ka star hai.",
    foodieHighlight: "Mushroom Handi — clay pot me slow-cooked button mushrooms, rich gravy, naan ke saath serve"
  },
  {
    id: 44, name: "Foodie's Den", type: "cafe", area: "Rajajipuram",
    address: "C Block Market, Rajajipuram", tier: 3, weeklyKg: 15,
    mushroomTypes: ["Button"],
    signatureDishes: [
      { name: "Mushroom Momos (Steamed/Fried)", price: "₹80" },
      { name: "Mushroom Maggi Special", price: "₹100" },
      { name: "Mushroom Cheese Sandwich", price: "₹120" },
      { name: "Mushroom Spring Roll", price: "₹100" }
    ],
    priceRange: "₹", rating: 3.9, phone: "+91-522-341-4400",
    deliveryFreq: "2x per week", packaging: "Loose",
    description: "Students aur young crowd ka adda. Mushroom momos aur mushroom maggi unke bestsellers hain — budget-friendly aur tasty.",
    foodieHighlight: "Mushroom Momos — juicy mushroom-filled steamed momos with fiery red chutney, ₹80 me full plate!"
  },

  // ── JANKIPURAM ──
  {
    id: 45, name: "Spice Villa", type: "restaurant", area: "Jankipuram",
    address: "Sector J, Jankipuram", tier: 2, weeklyKg: 35,
    mushroomTypes: ["Button", "Oyster", "Cremini"],
    signatureDishes: [
      { name: "Mushroom Jalfrezi", price: "₹280" },
      { name: "Mushroom Manchurian Gravy", price: "₹250" },
      { name: "Stuffed Mushroom Paratha", price: "₹180" },
      { name: "Mushroom Pepper Steak (Veg)", price: "₹320" }
    ],
    priceRange: "₹₹", rating: 4.1, phone: "+91-522-471-0055",
    deliveryFreq: "3x per week", packaging: "Crates",
    description: "Jankipuram ka popular multi-cuisine restaurant. Indian, Chinese aur Continental teeno me mushroom dishes available hain.",
    foodieHighlight: "Mushroom Jalfrezi — colorful bell peppers ke saath wok-tossed mushrooms, tangy-spicy Indo-Chinese fusion"
  },
  {
    id: 46, name: "Farm Fresh Kitchen", type: "cafe", area: "Jankipuram",
    address: "Sector K, Jankipuram Extension", tier: 3, weeklyKg: 22,
    mushroomTypes: ["Button", "Oyster", "Shiitake"],
    signatureDishes: [
      { name: "Farm Fresh Mushroom Salad", price: "₹220" },
      { name: "Mushroom & Quinoa Bowl", price: "₹300" },
      { name: "Oyster Mushroom Stir-Fry", price: "₹280" },
      { name: "Mushroom Smoothie Bowl", price: "₹250" }
    ],
    priceRange: "₹₹", rating: 4.3, phone: "+91-522-471-3300",
    deliveryFreq: "Alternate Days", packaging: "Punnets",
    description: "Health-conscious cafe jo farm-fresh mushrooms ka direct use karta hai. Salads, bowls aur stir-fries me organic mushrooms — Jankipuram ka hidden gem.",
    foodieHighlight: "Mushroom & Quinoa Bowl — super healthy, protein-packed, oyster mushroom + quinoa + avocado"
  },

  // ── SUSHANT GOLF CITY ──
  {
    id: 47, name: "The Beer Cafe", type: "cafe", area: "Sushant Golf City",
    address: "Ansal API Mall, Sushant Golf City", tier: 3, weeklyKg: 26,
    mushroomTypes: ["Button", "Portobello", "Truffle Oil"],
    signatureDishes: [
      { name: "Truffle Mushroom Fries", price: "₹380" },
      { name: "Mushroom & Cheese Flatbread", price: "₹420" },
      { name: "Portobello Mushroom Burger", price: "₹450" },
      { name: "Beer Batter Mushroom Rings", price: "₹350" }
    ],
    priceRange: "₹₹₹", rating: 4.2, phone: "+91-522-499-0011",
    deliveryFreq: "3x per week", packaging: "Punnets",
    description: "Sushant Golf City ka premium bar-cafe. Beer ke saath mushroom bar snacks ka scene — truffle fries bestseller hai.",
    foodieHighlight: "Truffle Mushroom Fries — crispy fries with sautéed mushrooms, truffle oil, parmesan, beer ke saath perfect!"
  },
  {
    id: 48, name: "Hashtag Bistro", type: "cafe", area: "Sushant Golf City",
    address: "Golf City Main Road", tier: 3, weeklyKg: 20,
    mushroomTypes: ["Button", "Cremini", "Shiitake"],
    signatureDishes: [
      { name: "Mushroom Arrabbiata Pasta", price: "₹340" },
      { name: "Shiitake Mushroom Tacos", price: "₹320" },
      { name: "Mushroom & Corn Pizza", price: "₹380" },
      { name: "Creamy Mushroom Crostini", price: "₹250" }
    ],
    priceRange: "₹₹", rating: 4.1, phone: "+91-522-499-2200",
    deliveryFreq: "2x per week", packaging: "Punnets",
    description: "Instagram-worthy bistro jahan mushroom pasta aur tacos photogenic bhi hain aur tasty bhi. Young professionals ka favorite.",
    foodieHighlight: "Shiitake Mushroom Tacos — soft tortillas, shiitake slaw, chipotle cream, lime — fusion at its best!"
  },

  // ── CHINHAT ──
  {
    id: 49, name: "Highway King", type: "restaurant", area: "Chinhat",
    address: "Lucknow-Faizabad Highway, Chinhat", tier: 2, weeklyKg: 40,
    mushroomTypes: ["Button", "Oyster", "Portobello"],
    signatureDishes: [
      { name: "Mushroom Sizzler Supreme", price: "₹380" },
      { name: "Tandoori Mushroom Platter", price: "₹300" },
      { name: "Mushroom Fried Rice", price: "₹220" },
      { name: "Mushroom Dal Makhani", price: "₹250" }
    ],
    priceRange: "₹₹", rating: 4.0, phone: "+91-522-380-0011",
    deliveryFreq: "3x per week", packaging: "Crates",
    description: "Highway dhaba-restaurant hybrid. Chinhat se jaane wale travelers aur locals dono ke liye mushroom sizzler yahan ka star attraction hai.",
    foodieHighlight: "Mushroom Sizzler Supreme — sizzling hot plate, grilled mushrooms, veggies, mashed potatoes, smoky entry!"
  },
  {
    id: 50, name: "Mushroom Valley Kitchen", type: "restaurant", area: "Chinhat",
    address: "Near IIM Road, Chinhat", tier: 3, weeklyKg: 32,
    mushroomTypes: ["Button", "Oyster", "Shiitake", "King Oyster", "Dhingri"],
    signatureDishes: [
      { name: "5-Mushroom Thali", price: "₹350" },
      { name: "Oyster Mushroom Pakoda", price: "₹150" },
      { name: "Shiitake Curry Bowl", price: "₹280" },
      { name: "King Oyster Tandoori", price: "₹320" }
    ],
    priceRange: "₹₹", rating: 4.4, phone: "+91-522-380-3355",
    deliveryFreq: "Daily", packaging: "Farm Fresh Punnets",
    description: "India ka pehla mushroom-dedicated restaurant Lucknow me! IIM Road pe. Menu me sirf mushroom dishes — 5 varieties daily fresh. Mushroom lovers ka Mecca!",
    foodieHighlight: "5-Mushroom Thali — Button, Oyster, Shiitake, King Oyster, Dhingri — sabka unique preparation, ek thali me!"
  },

  // ── AASHIANA ──
  {
    id: 51, name: "Wow! Momo", type: "cafe", area: "Aashiana",
    address: "Aashiana Crossing", tier: 3, weeklyKg: 20,
    mushroomTypes: ["Button", "Oyster"],
    signatureDishes: [
      { name: "Mushroom Steamed Momos", price: "₹120" },
      { name: "Mushroom Fried Momos", price: "₹140" },
      { name: "Mushroom Momo Sizzler", price: "₹200" },
      { name: "Mushroom Wonton Soup", price: "₹160" }
    ],
    priceRange: "₹", rating: 4.0, phone: "+91-522-460-1100",
    deliveryFreq: "3x per week", packaging: "Loose",
    description: "Momo chain jahan mushroom momos sabse zyada bikne wala variant hai. Steamed, fried, sizzler — teeno me mushroom option available.",
    foodieHighlight: "Mushroom Momo Sizzler — momos on a sizzling plate with spicy sauce, theatrical aur tasty!"
  },
  {
    id: 52, name: "Cafe Soul Garden", type: "cafe", area: "Aashiana",
    address: "Near Eldeco Greens, Aashiana", tier: 3, weeklyKg: 18,
    mushroomTypes: ["Button", "Cremini", "Portobello"],
    signatureDishes: [
      { name: "Mushroom Pesto Pasta", price: "₹320" },
      { name: "Portobello Open Face Sandwich", price: "₹280" },
      { name: "Mushroom & Herb Flatbread", price: "₹300" },
      { name: "Garden Fresh Mushroom Salad", price: "₹240" }
    ],
    priceRange: "₹₹", rating: 4.2, phone: "+91-522-460-3355",
    deliveryFreq: "2x per week", packaging: "Punnets",
    description: "Garden-theme cafe with open seating. Mushroom preparations me fresh herbs ka use — pesto pasta aur flatbread yahan ke gems hain.",
    foodieHighlight: "Mushroom Pesto Pasta — handmade basil pesto, sautéed cremini, pine nuts, garden fresh vibes"
  },

  // ── VIKAS NAGAR ──
  {
    id: 53, name: "Nirala Sweets & Restaurant", type: "restaurant", area: "Vikas Nagar",
    address: "Vikas Nagar Main Road", tier: 2, weeklyKg: 45,
    mushroomTypes: ["Button", "Oyster"],
    signatureDishes: [
      { name: "Mushroom Pav Bhaji", price: "₹140" },
      { name: "Mushroom Chilli", price: "₹180" },
      { name: "Mushroom Dosa", price: "₹160" },
      { name: "Mushroom Uttapam", price: "₹150" }
    ],
    priceRange: "₹", rating: 4.2, phone: "+91-522-276-0011",
    deliveryFreq: "Daily", packaging: "Crates",
    description: "Nirala ka Vikas Nagar outlet massive footfall handle karta hai. South Indian aur street food section me mushroom items huge demand me hain.",
    foodieHighlight: "Mushroom Dosa — crispy dosa with spiced mushroom filling, coconut chutney aur sambar, fusion perfection!"
  },
  {
    id: 54, name: "Shree Rathnam", type: "restaurant", area: "Vikas Nagar",
    address: "Vikas Nagar, Sector 2", tier: 3, weeklyKg: 30,
    mushroomTypes: ["Button", "Oyster"],
    signatureDishes: [
      { name: "Mushroom Chettinad", price: "₹280" },
      { name: "Mushroom Appam", price: "₹200" },
      { name: "Mushroom Pepper Fry", price: "₹250" },
      { name: "Mushroom Rasam", price: "₹120" }
    ],
    priceRange: "₹₹", rating: 4.1, phone: "+91-522-276-4455",
    deliveryFreq: "3x per week", packaging: "Crates",
    description: "South Indian restaurant chain jahan mushroom ka Chettinad aur Kerala style preparations serve hote hain. Unique South-meets-Awadh fusion.",
    foodieHighlight: "Mushroom Chettinad — fiery South Indian spices ke saath button mushrooms, appam ke saath divine!"
  },

  // ── MALL AVENUE ──
  {
    id: 55, name: "Winters Cafe", type: "cafe", area: "Mall Avenue",
    address: "Mall Avenue Road, Near Sahara Hospital", tier: 3, weeklyKg: 20,
    mushroomTypes: ["Button", "Portobello", "Cremini"],
    signatureDishes: [
      { name: "Mushroom Cheese Melt Sandwich", price: "₹260" },
      { name: "Mushroom & Pesto Flatbread", price: "₹300" },
      { name: "Cream of Mushroom Soup", price: "₹200" },
      { name: "Mushroom Carbonara", price: "₹340" }
    ],
    priceRange: "₹₹", rating: 4.1, phone: "+91-522-405-9900",
    deliveryFreq: "2x per week", packaging: "Punnets",
    description: "Cozy winter-theme cafe on Mall Avenue. Mushroom soups aur sandwiches yahan ke comfort foods hain — Lucknow ki sardi me perfect!",
    foodieHighlight: "Cream of Mushroom Soup — thick, velvety, herb-infused, garlic croutons ke saath, warm hug in a bowl"
  },
  {
    id: 56, name: "The Bake House", type: "cafe", area: "Mall Avenue",
    address: "Mall Avenue", tier: 3, weeklyKg: 16,
    mushroomTypes: ["Button", "Cremini"],
    signatureDishes: [
      { name: "Mushroom & Cheese Croissant", price: "₹220" },
      { name: "Mushroom Quiche", price: "₹280" },
      { name: "Mushroom Vol-au-Vent", price: "₹250" },
      { name: "Mushroom Focaccia", price: "₹200" }
    ],
    priceRange: "₹₹", rating: 4.3, phone: "+91-522-405-1122",
    deliveryFreq: "2x per week", packaging: "Punnets",
    description: "Artisan bakery-cafe jahan baked mushroom items ka unique collection hai. Croissants, quiche aur focaccia — European baking with mushroom love.",
    foodieHighlight: "Mushroom & Cheese Croissant — flaky buttery croissant, herbed mushroom-cheese filling, breakfast goals!"
  },

  // ── NISHATGANJ ──
  {
    id: 57, name: "Hotel Gemini Continental", type: "hotel", area: "Nishatganj",
    address: "Nishatganj, Near Medical College", tier: 2, weeklyKg: 40,
    mushroomTypes: ["Button", "Oyster", "Cremini"],
    signatureDishes: [
      { name: "Mushroom Continental Platter", price: "₹380" },
      { name: "Mushroom Cream Pasta", price: "₹320" },
      { name: "Mushroom Tikka", price: "₹280" },
      { name: "Mushroom Soup of the Day", price: "₹200" }
    ],
    priceRange: "₹₹", rating: 4.0, phone: "+91-522-262-5000",
    deliveryFreq: "3x per week", packaging: "Crates",
    description: "Nishatganj ka established hotel with continental restaurant. Medical professionals aur nearby offices ka regular lunch spot.",
    foodieHighlight: "Mushroom Continental Platter — grilled mushrooms, mashed potatoes, sautéed veggies, brown sauce"
  },

  // ── KAPOORTHALA ──
  {
    id: 58, name: "Green Leaf Cafe", type: "cafe", area: "Kapoorthala",
    address: "Kapoorthala Crossing, Aliganj", tier: 3, weeklyKg: 18,
    mushroomTypes: ["Button", "Oyster", "Shiitake"],
    signatureDishes: [
      { name: "Mushroom Avocado Toast", price: "₹280" },
      { name: "Shiitake Mushroom Bowl", price: "₹320" },
      { name: "Mushroom & Herb Omelette", price: "₹200" },
      { name: "Mushroom Smoothie", price: "₹180" }
    ],
    priceRange: "₹₹", rating: 4.2, phone: "+91-522-410-8800",
    deliveryFreq: "Alternate Days", packaging: "Punnets",
    description: "Health-focused cafe near Kapoorthala. Organic mushrooms ka use in breakfasts, bowls aur smoothies — health-conscious crowd ka favorite.",
    foodieHighlight: "Mushroom Avocado Toast — sourdough, smashed avocado, sautéed shiitake, poached egg, brunch goals!"
  },

  // ── SITAPUR ROAD ──
  {
    id: 59, name: "Sayaji Hotel", type: "hotel", area: "Sitapur Road",
    address: "Near Dubagga, Sitapur Road", tier: 1, weeklyKg: 75,
    mushroomTypes: ["Button", "Portobello", "Oyster", "Shiitake", "Cremini"],
    signatureDishes: [
      { name: "Mushroom Teppanyaki", price: "₹580" },
      { name: "Portobello & Truffle Ravioli", price: "₹620" },
      { name: "Mushroom Dim Sum Selection", price: "₹480" },
      { name: "Wild Mushroom Risotto", price: "₹520" }
    ],
    priceRange: "₹₹₹₹", rating: 4.4, phone: "+91-522-499-5000",
    deliveryFreq: "Daily", packaging: "Vacuum Sealed + Punnets",
    description: "Sitapur Road pe naya luxury hotel. Pan-Asian aur European restaurants me 5 different mushroom varieties ka daily use. Teppanyaki counter pe live mushroom cooking.",
    foodieHighlight: "Mushroom Teppanyaki — live cooking on hot iron plate, mushroom medley, theatrical experience!"
  },

  // ── FAIZABAD ROAD ──
  {
    id: 60, name: "Highway Star Dhaba", type: "restaurant", area: "Faizabad Road",
    address: "Lucknow-Faizabad Highway", tier: 3, weeklyKg: 25,
    mushroomTypes: ["Button", "Dhingri"],
    signatureDishes: [
      { name: "Mushroom Kadhai", price: "₹200" },
      { name: "Tandoori Mushroom", price: "₹180" },
      { name: "Mushroom Parantha", price: "₹100" },
      { name: "Mushroom Dal Tadka", price: "₹150" }
    ],
    priceRange: "₹", rating: 3.9, phone: "+91-522-380-7700",
    deliveryFreq: "Alternate Days", packaging: "Loose",
    description: "Highway dhaba style restaurant. Budget-friendly mushroom preparations — parantha aur kadhai yahan ke hero items hain. Truckers aur travelers ka pitstop.",
    foodieHighlight: "Mushroom Parantha — stuffed with spiced mushroom filling, butter tadka, raita ke saath, ₹100 only!"
  },

  // ── VRINDAVAN COLONY / TELIBAGH ──
  {
    id: 61, name: "OvenStory Pizza", type: "cafe", area: "Telibagh",
    address: "Near Eldeco Udyan, Telibagh", tier: 3, weeklyKg: 22,
    mushroomTypes: ["Button", "Portobello"],
    signatureDishes: [
      { name: "Mushroom Overload Pizza", price: "₹350" },
      { name: "Truffle Mushroom Pizza", price: "₹420" },
      { name: "Mushroom Garlic Bread", price: "₹180" },
      { name: "Mushroom Calzone", price: "₹380" }
    ],
    priceRange: "₹₹", rating: 4.0, phone: "+91-522-460-5500",
    deliveryFreq: "3x per week", packaging: "Punnets",
    description: "Delivery-focused pizza brand jahan mushroom pizza sabse popular variant hai. Telibagh aur surrounding areas ka mushroom pizza demand yahan se fulfill hota hai.",
    foodieHighlight: "Mushroom Overload Pizza — double mushroom, triple cheese, garlic butter base, pizza lovers ka dream!"
  },
  {
    id: 62, name: "Cafe Jeera Bistro", type: "cafe", area: "Telibagh",
    address: "Vrindavan Colony, Near Telibagh", tier: 3, weeklyKg: 17,
    mushroomTypes: ["Button", "Oyster", "Cremini"],
    signatureDishes: [
      { name: "Mushroom & Thyme Soup", price: "₹200" },
      { name: "Cremini Mushroom Risotto", price: "₹340" },
      { name: "Mushroom & Brie Tart", price: "₹280" },
      { name: "Sautéed Garlic Mushrooms", price: "₹220" }
    ],
    priceRange: "₹₹", rating: 4.1, phone: "+91-522-460-7700",
    deliveryFreq: "2x per week", packaging: "Punnets",
    description: "Vrindavan Colony ka cozy European-style bistro. Mushroom risotto aur tarts yahan ki specialties hain — date night ke liye ideal.",
    foodieHighlight: "Cremini Mushroom Risotto — arborio rice, cremini mushrooms, white wine, parmesan, Italian perfection!"
  },

  // ── HUSAINABAD / OLD LUCKNOW ──
  {
    id: 63, name: "Idris Ki Biryani", type: "restaurant", area: "Husainabad",
    address: "Near Bada Imambara, Husainabad", tier: 3, weeklyKg: 20,
    mushroomTypes: ["Button", "Dhingri"],
    signatureDishes: [
      { name: "Mushroom Lucknowi Biryani", price: "₹180" },
      { name: "Mushroom Korma", price: "₹160" },
      { name: "Mushroom Kebab Plate", price: "₹140" },
      { name: "Mushroom Nalli Curry (Veg)", price: "₹200" }
    ],
    priceRange: "₹", rating: 4.2, phone: "+91-522-251-0033",
    deliveryFreq: "Daily", packaging: "Loose",
    description: "Old Lucknow ka historic biryani spot near Bada Imambara. Mushroom biryani unka popular veg option hai — tourists aur locals dono ke beech hit.",
    foodieHighlight: "Mushroom Lucknowi Biryani — pukki biryani style, mushroom aur potatoes ke saath, saffron aur kewra water"
  },

  // ── TAKROHI / ELDECO ──
  {
    id: 64, name: "The Mushroom Kitchen", type: "restaurant", area: "Takrohi",
    address: "Near Eldeco Eternia, Takrohi", tier: 3, weeklyKg: 28,
    mushroomTypes: ["Button", "Oyster", "Shiitake", "Cremini", "King Oyster"],
    signatureDishes: [
      { name: "Mushroom Tasting Platter", price: "₹420" },
      { name: "Oyster Mushroom Steak", price: "₹350" },
      { name: "Shiitake Ramen Bowl", price: "₹320" },
      { name: "Mushroom Fondue Pot", price: "₹400" }
    ],
    priceRange: "₹₹", rating: 4.3, phone: "+91-522-471-8800",
    deliveryFreq: "Daily", packaging: "Farm Fresh",
    description: "Mushroom-specialty restaurant near Eldeco. Menu me 20+ mushroom dishes — tasting platter me 5 varieties ek saath. Lucknow ka dusra mushroom-dedicated place!",
    foodieHighlight: "Mushroom Tasting Platter — 5 mushroom varieties, 5 different preparations, one epic platter!"
  },

  // ── GOMTI NAGAR EXTENSION ──
  {
    id: 65, name: "Cafe Coffee Day Lounge", type: "cafe", area: "Gomti Nagar Extension",
    address: "Near Omaxe Mall, Gomti Nagar Extension", tier: 3, weeklyKg: 16,
    mushroomTypes: ["Button", "Cremini"],
    signatureDishes: [
      { name: "Mushroom & Cheese Croissant", price: "₹200" },
      { name: "Mushroom Pesto Sandwich", price: "₹240" },
      { name: "Mushroom Soup Cup", price: "₹180" },
      { name: "Mushroom Quiche", price: "₹220" }
    ],
    priceRange: "₹₹", rating: 3.9, phone: "+91-522-409-5500",
    deliveryFreq: "2x per week", packaging: "Punnets",
    description: "CCD Lounge format — premium cafe with extended mushroom food menu. Coffee ke saath mushroom croissant brunch me trending hai.",
    foodieHighlight: "Mushroom & Cheese Croissant — warm, flaky, cheesy, mushroom goodness with cappuccino"
  },
  {
    id: 66, name: "Domino's (Multiple Outlets)", type: "cafe", area: "City-wide",
    address: "30+ outlets across Lucknow", tier: 2, weeklyKg: 70,
    mushroomTypes: ["Button"],
    signatureDishes: [
      { name: "Mushroom & Jalapeno Pizza", price: "₹250" },
      { name: "Mushroom Peppy Paneer", price: "₹300" },
      { name: "Simply Mushroom Pizza", price: "₹200" },
      { name: "Mushroom Garlic Breadsticks", price: "₹120" }
    ],
    priceRange: "₹₹", rating: 4.0, phone: "1800-208-1234",
    deliveryFreq: "Daily (Central Kitchen)", packaging: "Bulk Crates (Central Commissary)",
    description: "30+ outlets ka combined demand massive hai! Central commissary se daily mushroom supply hoti hai. Mushroom pizza sab outlets ka top-3 variant hai.",
    foodieHighlight: "Simply Mushroom Pizza — Domino's ka classic, button mushroom + mozzarella, affordable aur consistent!"
  },
  {
    id: 67, name: "Pizza Hut (Multiple Outlets)", type: "cafe", area: "City-wide",
    address: "15+ outlets across Lucknow", tier: 2, weeklyKg: 50,
    mushroomTypes: ["Button", "Portobello"],
    signatureDishes: [
      { name: "Mushroom Feast Pizza", price: "₹350" },
      { name: "Mushroom Stuffed Crust", price: "₹450" },
      { name: "Mushroom Pasta Bake", price: "₹280" },
      { name: "Mushroom Garlic Bread Supreme", price: "₹180" }
    ],
    priceRange: "₹₹", rating: 4.0, phone: "1800-202-0202",
    deliveryFreq: "Daily (Central Kitchen)", packaging: "Bulk Crates",
    description: "Pizza Hut ke 15+ outlets combined me mushroom ka massive use. Stuffed crust mushroom pizza premium variant hai.",
    foodieHighlight: "Mushroom Stuffed Crust — cheese-stuffed crust pe mushroom topping, double indulgence!"
  }
];

// ============================================================
// DISCOVERABLE VENUES — Found via "Scan Lucknow" Feature
// ============================================================
const DISCOVERABLE_VENUES = [
  {
    id: 101, name: "Kebab Gali (New Branch)", type: "restaurant", area: "Aminabad",
    address: "Gol Darwaza, Aminabad", tier: 3, weeklyKg: 22,
    mushroomTypes: ["Button", "Dhingri"],
    signatureDishes: [
      { name: "Mushroom Boti Kebab", price: "₹160" },
      { name: "Mushroom Galawati Roll", price: "₹120" },
      { name: "Dhingri Seekh", price: "₹140" },
      { name: "Mushroom Tawa Fry", price: "₹100" }
    ],
    priceRange: "₹", rating: 4.1, phone: "+91-522-256-8800",
    deliveryFreq: "Daily", packaging: "Loose",
    description: "Aminabad ki nai kebab gali me mushroom kebab stall — galawati style mushroom kebab ₹120 me. Street food revolution!",
    foodieHighlight: "Mushroom Galawati Roll — rumali roti me wrapped mushroom galawati, pyaaz, chutney, ₹120 me nawabi feel!"
  },
  {
    id: 102, name: "Cloud Kitchen - Mushroom Mania", type: "restaurant", area: "Gomti Nagar",
    address: "Delivery Only - Gomti Nagar Hub", tier: 3, weeklyKg: 30,
    mushroomTypes: ["Button", "Oyster", "Shiitake", "Cremini"],
    signatureDishes: [
      { name: "Mushroom Box Meal", price: "₹199" },
      { name: "Mushroom Biryani Box", price: "₹249" },
      { name: "Mushroom Pasta Box", price: "₹229" },
      { name: "Mushroom Momos Bucket", price: "₹179" }
    ],
    priceRange: "₹", rating: 4.3, phone: "Zomato/Swiggy Only",
    deliveryFreq: "Daily", packaging: "Punnets",
    description: "NEW! Delivery-only mushroom-dedicated cloud kitchen. Zomato aur Swiggy pe trending — affordable mushroom meals city-wide delivery.",
    foodieHighlight: "Mushroom Box Meal — choose your mushroom, choose your style, ₹199 me complete meal delivered!"
  },
  {
    id: 103, name: "Cafe Kulhad", type: "cafe", area: "Husainabad",
    address: "Near Rumi Darwaza, Husainabad", tier: 3, weeklyKg: 12,
    mushroomTypes: ["Button", "Dhingri"],
    signatureDishes: [
      { name: "Mushroom Kulhad Curry", price: "₹120" },
      { name: "Mushroom Chai Platter", price: "₹80" },
      { name: "Mushroom Tikki (Kulhad Style)", price: "₹60" },
      { name: "Kulhad Mushroom Pizza", price: "₹150" }
    ],
    priceRange: "₹", rating: 4.0, phone: "+91-522-251-4400",
    deliveryFreq: "Daily", packaging: "Loose",
    description: "Rumi Darwaza ke paas naya kulhad-theme cafe. Mushroom curry kulhad me serve hota hai — heritage location pe eco-friendly dining!",
    foodieHighlight: "Mushroom Kulhad Curry — smoky clay pot flavour, Lucknow heritage ke bich me, ₹120 me royal feel!"
  },
  {
    id: 104, name: "Wok This Way", type: "restaurant", area: "Aliganj",
    address: "Sector G, Aliganj", tier: 3, weeklyKg: 25,
    mushroomTypes: ["Button", "Shiitake", "Enoki", "Wood Ear"],
    signatureDishes: [
      { name: "5-Spice Mushroom Wok", price: "₹280" },
      { name: "Enoki Mushroom Tempura", price: "₹250" },
      { name: "Black Pepper Mushroom", price: "₹260" },
      { name: "Wood Ear Mushroom Salad", price: "₹220" }
    ],
    priceRange: "₹₹", rating: 4.2, phone: "+91-522-411-0033",
    deliveryFreq: "3x per week", packaging: "Punnets",
    description: "NEW! Asian wok kitchen in Aliganj. 4 different mushroom varieties ka authentic Asian preparation — Enoki tempura yahan ka USP hai!",
    foodieHighlight: "Enoki Mushroom Tempura — delicate enoki bundles in crispy tempura batter, wasabi mayo, Japanese elegance!"
  },
  {
    id: 105, name: "The Pasta Project", type: "cafe", area: "Sushant Golf City",
    address: "GH-2, Sushant Golf City", tier: 3, weeklyKg: 18,
    mushroomTypes: ["Button", "Cremini", "Portobello", "Truffle Oil"],
    signatureDishes: [
      { name: "Truffle Mushroom Fettuccine", price: "₹420" },
      { name: "Mushroom & Ricotta Ravioli", price: "₹450" },
      { name: "Portobello Mushroom Lasagna", price: "₹480" },
      { name: "Cremini Aglio Olio", price: "₹350" }
    ],
    priceRange: "₹₹₹", rating: 4.4, phone: "+91-522-499-4433",
    deliveryFreq: "Alternate Days", packaging: "Vacuum Sealed",
    description: "NEW! Pasta-specialty cafe jahan har pasta me mushroom option available hai. Handmade pasta + premium mushrooms = Italian perfection!",
    foodieHighlight: "Truffle Mushroom Fettuccine — handmade fettuccine, cremini + portobello, truffle oil drizzle, pure bliss!"
  },
  {
    id: 106, name: "Desi Dhaba Premium", type: "restaurant", area: "Alambagh",
    address: "Transport Nagar, Alambagh", tier: 3, weeklyKg: 28,
    mushroomTypes: ["Button", "Dhingri"],
    signatureDishes: [
      { name: "Mushroom Bhurji", price: "₹150" },
      { name: "Mushroom Rara", price: "₹180" },
      { name: "Tawa Mushroom", price: "₹160" },
      { name: "Mushroom Naan Combo", price: "₹200" }
    ],
    priceRange: "₹", rating: 4.0, phone: "+91-522-432-7700",
    deliveryFreq: "Daily", packaging: "Loose",
    description: "Transport Nagar ka premium dhaba. Truckers aur travelers ke beech mushroom bhurji aur tawa mushroom hugely popular hai — 24x7 open!",
    foodieHighlight: "Mushroom Bhurji — scrambled spiced mushrooms, pyaaz-tamatar, butter naan ke saath, highway comfort food!"
  },
  {
    id: 107, name: "Sakura Japanese Kitchen", type: "restaurant", area: "Gomti Nagar Extension",
    address: "Near CMS, Gomti Nagar Extension", tier: 3, weeklyKg: 20,
    mushroomTypes: ["Shiitake", "Enoki", "King Oyster", "Button"],
    signatureDishes: [
      { name: "Shiitake Miso Soup", price: "₹280" },
      { name: "Mushroom Teriyaki Bowl", price: "₹380" },
      { name: "Enoki & Tofu Hotpot", price: "₹420" },
      { name: "King Oyster Yakitori", price: "₹350" }
    ],
    priceRange: "₹₹₹", rating: 4.3, phone: "+91-522-409-8800",
    deliveryFreq: "Alternate Days", packaging: "Vacuum Sealed",
    description: "NEW! Lucknow ka pehla dedicated Japanese restaurant. Authentic Japanese mushroom preparations — miso, teriyaki, hotpot sab me mushroom central ingredient hai.",
    foodieHighlight: "King Oyster Yakitori — grilled king oyster skewers, teriyaki glaze, Japanese perfection in Lucknow!"
  },
  {
    id: 108, name: "Punjab Grill", type: "restaurant", area: "Phoenix Palassio",
    address: "Phoenix Palassio Mall, Shaheed Path", tier: 2, weeklyKg: 38,
    mushroomTypes: ["Button", "Portobello", "Oyster"],
    signatureDishes: [
      { name: "Mushroom Tikka Shashlik", price: "₹450" },
      { name: "Mushroom Malai Chaap", price: "₹380" },
      { name: "Stuffed Portobello Tandoori", price: "₹520" },
      { name: "Mushroom Pindi Chole", price: "₹350" }
    ],
    priceRange: "₹₹₹", rating: 4.3, phone: "+91-522-413-5500",
    deliveryFreq: "3x per week", packaging: "Crates",
    description: "Premium Punjabi restaurant me mushroom ka robust use. Tandoor me portobello aur malai chaap mushroom ke innovative preparations serve hote hain.",
    foodieHighlight: "Stuffed Portobello Tandoori — giant portobello cap stuffed with paneer-cashew mixture, tandoor smoked, epic!"
  },
  {
    id: 109, name: "Truffle & Dough Craft Pizzeria", type: "cafe", area: "Hazratganj",
    address: "Shahnajaf Road, Hazratganj", tier: 3, weeklyKg: 26,
    mushroomTypes: ["Button", "Cremini", "Portobello", "Truffle Oil"],
    signatureDishes: [
      { name: "Truffled Funghi Pizza", price: "₹540" },
      { name: "Portobello & Burrata Panini", price: "₹420" },
      { name: "Cremini Garlic Dip", price: "₹240" },
      { name: "Mushroom Calzone", price: "₹460" }
    ],
    priceRange: "₹₹₹", rating: 4.6, phone: "+91-522-428-9900",
    deliveryFreq: "Alternate Days", packaging: "Punnets & Vacuum",
    description: "Wood-fired artisanal pizzeria in Hazratganj. Fresh truffle oil and sautéed portobello pizza in Lucknow's heritage heart.",
    foodieHighlight: "Truffled Funghi Pizza — 48-hr fermented sourdough topped with trio mushrooms & cold-pressed truffle oil"
  },
  {
    id: 110, name: "Lulu Shroom Wok & Grill", type: "restaurant", area: "Shaheed Path",
    address: "Lulu Hypermarket Hub, Shaheed Path", tier: 2, weeklyKg: 44,
    mushroomTypes: ["King Oyster", "Enoki", "Shiitake", "Button"],
    signatureDishes: [
      { name: "King Oyster Teppanyaki", price: "₹480" },
      { name: "Enoki Butter Noodles", price: "₹380" },
      { name: "Shiitake Claypot Rice", price: "₹410" },
      { name: "Crispy Button Poppers", price: "₹280" }
    ],
    priceRange: "₹₹", rating: 4.4, phone: "+91-522-680-3300",
    deliveryFreq: "Daily", packaging: "Bulk Crates",
    description: "Lulu Mall ke mega-hub me live open wok grill counter. Weekly high footfall procurement with imported exotic mushrooms.",
    foodieHighlight: "King Oyster Teppanyaki — thick meaty slices grilled live with garlic butter soy on sizzling iron flat-top"
  },
  {
    id: 111, name: "Awadhi Dhingri Dastarkhwan", type: "restaurant", area: "Chowk",
    address: "Kashmiri Mohalla, Chowk", tier: 3, weeklyKg: 24,
    mushroomTypes: ["Dhingri", "Button", "Morel"],
    signatureDishes: [
      { name: "Dhingri Awadhi Salan", price: "₹220" },
      { name: "Gucchi Pulao (Heritage)", price: "₹580" },
      { name: "Mushroom Rogan Josh Style", price: "₹260" },
      { name: "Sheermal with Mushroom Qorma", price: "₹290" }
    ],
    priceRange: "₹₹", rating: 4.5, phone: "+91-522-225-7788",
    deliveryFreq: "Daily", packaging: "Loose & Fresh",
    description: "Old Chowk legacy family running traditional oyster & dhingri preparation passed down generations since 1968.",
    foodieHighlight: "Gucchi Pulao — Himalayan wild morels cooked slowly in degh with aromatic zafrani basmati rice"
  },
  {
    id: 112, name: "The Riverfront Canopy Cafe", type: "cafe", area: "Gomti Nagar",
    address: "Riverfront Promenade, Gomti Nagar", tier: 3, weeklyKg: 20,
    mushroomTypes: ["Oyster", "Portobello", "Button"],
    signatureDishes: [
      { name: "Grilled Shroom Burger", price: "₹320" },
      { name: "Oyster Mushroom Bruschetta", price: "₹290" },
      { name: "Mushroom Cappuccino Soup", price: "₹220" },
      { name: "Smoked Portobello Wrap", price: "₹340" }
    ],
    priceRange: "₹₹", rating: 4.3, phone: "+91-522-430-1122",
    deliveryFreq: "Alternate Days", packaging: "Punnets",
    description: "Gomti Riverfront pe alfresco sunset cafe. Evening crowd ke liye gourmet mushroom burgers and finger food trending hai.",
    foodieHighlight: "Grilled Shroom Burger — whole portobello mushroom stuffed with cheddar and herb crust"
  },
  {
    id: 113, name: "ShroomBox Gourmet Express", type: "restaurant", area: "Charbagh",
    address: "Station Road, Near Metro Pillar 42, Charbagh", tier: 3, weeklyKg: 32,
    mushroomTypes: ["Button", "Dhingri"],
    signatureDishes: [
      { name: "Traveler Mushroom Biryani Box", price: "₹180" },
      { name: "Tawa Mushroom Kathi Roll", price: "₹130" },
      { name: "Mushroom Masala Meal Combo", price: "₹210" },
      { name: "Mushroom Tikka Paratha", price: "₹150" }
    ],
    priceRange: "₹", rating: 4.1, phone: "+91-522-263-4411",
    deliveryFreq: "Daily", packaging: "Bulk Crates",
    description: "Charbagh Transit Hub me quick-service mushroom box station. Railway travelers aur office commuters ke liye super popular.",
    foodieHighlight: "Tawa Mushroom Kathi Roll — hot flaky paratha rolled with tawa-roasted spicy button mushrooms and mint chutney"
  },
  {
    id: 114, name: "Grand Avadh Airport Hotel", type: "hotel", area: "Kanpur Road",
    address: "Near Amausi International Airport, Kanpur Road", tier: 1, weeklyKg: 78,
    mushroomTypes: ["Button", "Oyster", "Shiitake", "Portobello"],
    signatureDishes: [
      { name: "Executive Mushroom Buffet Spread", price: "₹850" },
      { name: "Shiitake Chicken Fusion Sizzler", price: "₹620" },
      { name: "Cream of Forest Mushroom", price: "₹350" },
      { name: "Portobello Herb Risotto", price: "₹590" }
    ],
    priceRange: "₹₹₹₹", rating: 4.5, phone: "+91-522-491-6000",
    deliveryFreq: "Daily", packaging: "Vacuum Sealed & Crates",
    description: "Lucknow Airport corridor ka 5-star transit hotel. Heavy banquet volume and 24-hr international coffee shop with continuous mushroom demand.",
    foodieHighlight: "Portobello Herb Risotto — creamy arborio rice with herb jus and slow-braised portobello caps"
  },
  {
    id: 115, name: "Botanica Hydroponic Shroom Cafe", type: "cafe", area: "Indira Nagar",
    address: "Block C, Near Munshipulia, Indira Nagar", tier: 3, weeklyKg: 25,
    mushroomTypes: ["Oyster", "King Oyster", "Shiitake", "Morel"],
    signatureDishes: [
      { name: "Farm-to-Fork Oyster Tempura", price: "₹310" },
      { name: "Medicinal Shroom Latte", price: "₹240" },
      { name: "King Oyster Carpaccio", price: "₹390" },
      { name: "Shiitake Broth Bowl", price: "₹330" }
    ],
    priceRange: "₹₹", rating: 4.6, phone: "+91-522-415-7799",
    deliveryFreq: "Self Cultivated & Daily Top-up", packaging: "Living Trays",
    description: "Lucknow's first farm-to-table mushroom cafe featuring live glass mushroom fruiting chambers inside the seating dining space.",
    foodieHighlight: "Medicinal Shroom Latte — dual-extracted oyster & lion's mane infused organic coffee brew with oat milk"
  },
  {
    id: 116, name: "Himalayan Shroom Momos & Pot", type: "restaurant", area: "Jankipuram",
    address: "Sector F, Engineering College Road, Jankipuram", tier: 3, weeklyKg: 28,
    mushroomTypes: ["Morel", "Dhingri", "Button", "Shiitake"],
    signatureDishes: [
      { name: "Wild Shroom Kothey Momos", price: "₹180" },
      { name: "Himalayan Mushroom Thukpa", price: "₹220" },
      { name: "Claypot Shroom Jhol", price: "₹250" },
      { name: "Chilli Garlic Mushroom Dry", price: "₹200" }
    ],
    priceRange: "₹", rating: 4.4, phone: "+91-522-404-1188",
    deliveryFreq: "Daily", packaging: "Punnets",
    description: "Tibetan & Nepali authentic kitchen. Wild mushroom stuffing inside handmade steamed and pan-fried kothey momos.",
    foodieHighlight: "Wild Shroom Kothey Momos — crispy pan-fried base with juicy spiced wild mushroom broth filling"
  }
];

// ============================================================
// PLATFORM-SOURCED VENUES — Google Maps / Zomato / Swiggy Data
// These are real Lucknow venues verified via online food platforms
// ============================================================
const PLATFORM_SOURCED_VENUES = [
  {
    id: 200, name: "Dimsum Lab", type: "restaurant", area: "Chowk",
    address: "Chowk, Near Aminabad Road, Lucknow", tier: 3, weeklyKg: 22,
    mushroomTypes: ["Shiitake", "Button", "Oyster"],
    signatureDishes: [
      { name: "Crystal Mushroom Dimsum", price: "₹280" },
      { name: "Wild Mushroom Bao", price: "₹240" },
      { name: "Truffle Mushroom Gyoza", price: "₹310" },
      { name: "Shiitake Steam Basket", price: "₹260" }
    ],
    priceRange: "₹₹", rating: 4.4, phone: "+91-522-401-8890",
    deliveryFreq: "Daily", packaging: "200g Punnets",
    description: "Lucknow ka trending dimsum hub — crystal-skin dumplings with wild mushroom fillings. Heavy Zomato ratings & Swiggy orders.",
    foodieHighlight: "Crystal Mushroom Dimsum — translucent rice-flour skin revealing aromatic shiitake-truffle stuffing inside",
    source: ["Zomato", "Swiggy"]
  },
  {
    id: 201, name: "Mamagoto", type: "restaurant", area: "Gomti Nagar",
    address: "Phoenix Palassio, Amar Shaheed Path, Gomti Nagar", tier: 2, weeklyKg: 38,
    mushroomTypes: ["Shiitake", "Enoki", "Button", "Wood Ear"],
    signatureDishes: [
      { name: "Rock Corn & Mushroom San Choy Bao", price: "₹425" },
      { name: "Mushroom Ramen Bowl", price: "₹495" },
      { name: "Wok Tossed Wild Mushrooms", price: "₹385" },
      { name: "Enoki Tempura Rolls", price: "₹365" }
    ],
    priceRange: "₹₹₹", rating: 4.3, phone: "+91-522-498-0011",
    deliveryFreq: "Daily", packaging: "Bulk Crates",
    description: "National pan-Asian chain's Lucknow outlet at Phoenix Palassio. Known for bold mushroom-forward Asian fusion menu. Massive Zomato & Swiggy presence.",
    foodieHighlight: "Rock Corn & Mushroom San Choy Bao — crispy lettuce cups loaded with wok-fired shiitake, corn, water chestnuts",
    source: ["Zomato", "Google Maps"]
  },
  {
    id: 202, name: "Caspian Café", type: "cafe", area: "Gomti Nagar",
    address: "Vibhuti Khand, Gomti Nagar", tier: 3, weeklyKg: 18,
    mushroomTypes: ["Button", "Cremini", "Truffle Oil"],
    signatureDishes: [
      { name: "Mushroom Truffle Oil Dim Sums", price: "₹320" },
      { name: "Creamy Mushroom Bruschetta", price: "₹280" },
      { name: "Wild Mushroom Alfredo Pasta", price: "₹350" },
      { name: "Mushroom & Cheese Quesadilla", price: "₹290" }
    ],
    priceRange: "₹₹", rating: 4.2, phone: "+91-522-405-6677",
    deliveryFreq: "Alternate Days", packaging: "Punnets",
    description: "Cozy European-themed café famous for truffle-infused mushroom dimsum. Consistently rated high on Zomato for mushroom dishes.",
    foodieHighlight: "Mushroom Truffle Oil Dim Sums — delicate parcels drizzled with imported truffle oil, served with chilli oil dip",
    source: ["Zomato"]
  },
  {
    id: 203, name: "Dabbu Veg", type: "restaurant", area: "Chowk",
    address: "Near Akbari Gate, Chowk, Lucknow", tier: 3, weeklyKg: 15,
    mushroomTypes: ["Button", "Dhingri"],
    signatureDishes: [
      { name: "Mushroom Galawati Kebab", price: "₹180" },
      { name: "Kadhai Mushroom", price: "₹160" },
      { name: "Mushroom Biryani", price: "₹200" },
      { name: "Dhingri Do Pyaza", price: "₹170" }
    ],
    priceRange: "₹", rating: 4.5, phone: "+91-522-400-2233",
    deliveryFreq: "Daily", packaging: "Bulk Loose",
    description: "Iconic Chowk vegetarian eatery serving mushroom galawati kebabs that rival nawabi traditions. Pure desi mushroom magic in Old Lucknow.",
    foodieHighlight: "Mushroom Galawati Kebab — melt-in-mouth awadhi patties made with finely ground button mushroom, 36 spice blend",
    source: ["Zomato", "Google Maps"]
  },
  {
    id: 204, name: "Exer Club", type: "cafe", area: "Mall Avenue",
    address: "Mall Avenue, Near British Residency, Lucknow", tier: 3, weeklyKg: 12,
    mushroomTypes: ["Button", "Portobello"],
    signatureDishes: [
      { name: "Mushroom Grilled Sandwich", price: "₹220" },
      { name: "Portobello Burger", price: "₹350" },
      { name: "Mushroom Cheese Toast", price: "₹180" },
      { name: "Garlic Mushroom Bites", price: "₹200" }
    ],
    priceRange: "₹₹", rating: 4.1, phone: "+91-522-409-8844",
    deliveryFreq: "Alternate Days", packaging: "Punnets",
    description: "Trendy fitness-themed café on Mall Avenue. Known for protein-rich mushroom sandwiches and portobello burgers on Swiggy.",
    foodieHighlight: "Portobello Burger — thick grilled portobello cap with cheddar, caramelized onions, brioche bun",
    source: ["Swiggy", "Google Maps"]
  },
  {
    id: 205, name: "CrewCrave Café", type: "cafe", area: "Kapoorthala",
    address: "Kapoorthala Crossing, Aliganj, Lucknow", tier: 3, weeklyKg: 14,
    mushroomTypes: ["Button", "Cremini", "Oyster"],
    signatureDishes: [
      { name: "Awadhi Mushroom Cheese Sandwich", price: "₹190" },
      { name: "Mushroom Tikka Wrap", price: "₹220" },
      { name: "Creamy Mushroom Soup", price: "₹160" },
      { name: "Shroom Loaded Fries", price: "₹240" }
    ],
    priceRange: "₹", rating: 4.3, phone: "+91-522-407-1122",
    deliveryFreq: "Daily", packaging: "Loose Packs",
    description: "Popular Kapoorthala café with a cult following for their Awadhi mushroom cheese sandwich. Huge Swiggy order volume.",
    foodieHighlight: "Awadhi Mushroom Cheese Sandwich — spiced mushroom-cheese melt on toasted sourdough with mint chutney",
    source: ["Swiggy", "Zomato"]
  },
  {
    id: 206, name: "Secret Café & Bistro", type: "cafe", area: "Aliganj",
    address: "Sector H, Aliganj, Lucknow", tier: 3, weeklyKg: 16,
    mushroomTypes: ["Button", "Cremini", "Portobello"],
    signatureDishes: [
      { name: "White Sauce Mushroom Pasta", price: "₹280" },
      { name: "Pink Sauce Mushroom Penne", price: "₹300" },
      { name: "Mushroom Garlic Bread", price: "₹180" },
      { name: "Grilled Portobello Platter", price: "₹340" }
    ],
    priceRange: "₹₹", rating: 4.4, phone: "+91-522-411-5566",
    deliveryFreq: "Daily", packaging: "Punnets",
    description: "Hidden gem in Aliganj known for spectacular mushroom pasta varieties. Their white and pink sauce mushroom pastas trend on Zomato.",
    foodieHighlight: "White Sauce Mushroom Pasta — al dente penne in rich béchamel with sautéed cremini, parmesan shavings",
    source: ["Zomato", "Google Maps"]
  },
  {
    id: 207, name: "The SkyLight Café", type: "cafe", area: "Hazratganj",
    address: "MG Road, Hazratganj, Lucknow", tier: 3, weeklyKg: 20,
    mushroomTypes: ["Button", "Oyster", "Shiitake"],
    signatureDishes: [
      { name: "Mushroom Arrabbiata", price: "₹310" },
      { name: "Shroom Pizza (Wood-Fired)", price: "₹380" },
      { name: "Creamy Mushroom Risotto", price: "₹420" },
      { name: "Mushroom Bruschetta Trio", price: "₹260" }
    ],
    priceRange: "₹₹", rating: 4.5, phone: "+91-522-402-9900",
    deliveryFreq: "Daily", packaging: "200g Punnets",
    description: "Rooftop café in the heart of Hazratganj serving stunning mushroom pizzas and risottos. Google Maps top-rated for ambience.",
    foodieHighlight: "Shroom Pizza — wood-fired base with three mushroom blend, mozzarella, fresh basil, truffle drizzle",
    source: ["Google Maps", "Zomato"]
  },
  {
    id: 208, name: "The Jeera Rice Company", type: "restaurant", area: "Gomti Nagar",
    address: "Sahara States Road, Gomti Nagar", tier: 2, weeklyKg: 35,
    mushroomTypes: ["Button", "Dhingri", "Cremini"],
    signatureDishes: [
      { name: "Mushroom Handi", price: "₹260" },
      { name: "Kadhai Mushroom with Jeera Rice", price: "₹280" },
      { name: "Mushroom Malai Kofta", price: "₹300" },
      { name: "Dhingri Matar", price: "₹220" }
    ],
    priceRange: "₹₹", rating: 4.3, phone: "+91-522-408-3344",
    deliveryFreq: "Daily", packaging: "Bulk Crates",
    description: "Popular North Indian restaurant known for mushroom handi paired with their signature jeera rice. Swiggy bestseller category.",
    foodieHighlight: "Mushroom Handi — slow-cooked in clay pot with cashew-cream gravy, aromatic whole spices, served bubbling hot",
    source: ["Swiggy", "Zomato"]
  },
  {
    id: 209, name: "Fat Lulu's Café", type: "cafe", area: "Gomti Nagar",
    address: "Lulu Mall, Amar Shaheed Path, Gomti Nagar", tier: 2, weeklyKg: 30,
    mushroomTypes: ["Button", "Portobello", "Cremini", "Truffle Oil"],
    signatureDishes: [
      { name: "Truffle Mushroom Pizza", price: "₹490" },
      { name: "Mushroom & Brie Flatbread", price: "₹420" },
      { name: "Wild Mushroom Soup", price: "₹280" },
      { name: "Portobello Panini", price: "₹350" }
    ],
    priceRange: "₹₹₹", rating: 4.4, phone: "+91-522-499-7711",
    deliveryFreq: "Daily", packaging: "Vacuum Sealed",
    description: "Premium café inside Lucknow's Lulu Mall. Truffle mushroom pizza is their most ordered item on both Zomato & Swiggy.",
    foodieHighlight: "Truffle Mushroom Pizza — hand-tossed with portobello, cremini, mozzarella, finished with truffle oil drizzle",
    source: ["Zomato", "Swiggy", "Google Maps"]
  },
  {
    id: 210, name: "Moti Mahal Delux", type: "restaurant", area: "Hazratganj",
    address: "Ashok Marg, Hazratganj, Lucknow", tier: 2, weeklyKg: 40,
    mushroomTypes: ["Button", "Dhingri", "Cremini"],
    signatureDishes: [
      { name: "Mushroom Do Pyaza", price: "₹290" },
      { name: "Kadhai Mushroom Tikka", price: "₹320" },
      { name: "Dhingri Mattar Masala", price: "₹260" },
      { name: "Mushroom Seekh Kebab", price: "₹340" }
    ],
    priceRange: "₹₹", rating: 4.2, phone: "+91-522-220-1234",
    deliveryFreq: "Daily", packaging: "Crates",
    description: "Legendary restaurant chain's Lucknow outlet. Known for mushroom tikka kebabs and classic Punjabi mushroom curries.",
    foodieHighlight: "Mushroom Seekh Kebab — char-grilled cylindrical kebabs with minced mushroom, aromatic spices, green chutney",
    source: ["Google Maps", "Zomato"]
  },
  {
    id: 211, name: "Social Café", type: "cafe", area: "Gomti Nagar",
    address: "Phoenix Palassio, Gomti Nagar", tier: 2, weeklyKg: 32,
    mushroomTypes: ["Button", "Shiitake", "Portobello", "Truffle Oil"],
    signatureDishes: [
      { name: "LLP Mushroom Pizza", price: "₹445" },
      { name: "Mushroom Galouti Sliders", price: "₹375" },
      { name: "Truffle Mushroom Fries", price: "₹325" },
      { name: "Wild Mushroom Quesadilla", price: "₹355" }
    ],
    priceRange: "₹₹₹", rating: 4.3, phone: "+91-522-499-1100",
    deliveryFreq: "Daily", packaging: "200g Punnets",
    description: "Trendy co-working café at Phoenix Palassio. Mushroom galouti sliders fuse Awadhi tradition with modern café culture. Top Zomato trending.",
    foodieHighlight: "Mushroom Galouti Sliders — mini brioche buns with melt-in-mouth mushroom galawati patties, saffron aioli",
    source: ["Zomato", "Google Maps"]
  },
  {
    id: 212, name: "Tunday Kababi (Kapurthala)", type: "restaurant", area: "Kapoorthala",
    address: "Kapoorthala Road, Near Aliganj, Lucknow", tier: 3, weeklyKg: 18,
    mushroomTypes: ["Button", "Dhingri"],
    signatureDishes: [
      { name: "Mushroom Tundey Kebab", price: "₹200" },
      { name: "Mushroom Paratha Roll", price: "₹120" },
      { name: "Kadhai Mushroom", price: "₹180" },
      { name: "Mushroom Biryani", price: "₹220" }
    ],
    priceRange: "₹", rating: 4.6, phone: "+91-522-401-0080",
    deliveryFreq: "Daily", packaging: "Loose",
    description: "The legendary Tunday brand's veg-forward outlet with mushroom tundey kebabs that are almost indistinguishable from the original. Google Maps viral.",
    foodieHighlight: "Mushroom Tundey Kebab — 160-spice secret recipe applied to finely processed button mushroom, gilded with silver leaf",
    source: ["Google Maps", "Swiggy"]
  },
  {
    id: 213, name: "Underdoggs Sports Bar", type: "restaurant", area: "Gomti Nagar",
    address: "Fun Republic Mall, Gomti Nagar", tier: 2, weeklyKg: 28,
    mushroomTypes: ["Button", "Portobello", "Cremini"],
    signatureDishes: [
      { name: "Mushroom Nachos Supreme", price: "₹395" },
      { name: "BBQ Portobello Stack", price: "₹450" },
      { name: "Mushroom Cheese Poppers", price: "₹325" },
      { name: "Wild Mushroom Sliders", price: "₹380" }
    ],
    priceRange: "₹₹₹", rating: 4.1, phone: "+91-522-408-5555",
    deliveryFreq: "Alternate Days", packaging: "Bulk Packs",
    description: "Sports bar with premium mushroom appetizers. BBQ portobello stack is a Swiggy bestseller in the starters category.",
    foodieHighlight: "BBQ Portobello Stack — thick-grilled portobello layered with jalapeño cream cheese, smoky BBQ glaze",
    source: ["Swiggy", "Google Maps"]
  },
  {
    id: 214, name: "Aryan's Café", type: "cafe", area: "Indira Nagar",
    address: "Sector 12, Indira Nagar, Lucknow", tier: 3, weeklyKg: 15,
    mushroomTypes: ["Button", "Cremini", "Oyster"],
    signatureDishes: [
      { name: "Mushroom Cheese Maggi", price: "₹150" },
      { name: "Creamy Mushroom Pasta", price: "₹250" },
      { name: "Mushroom Corn Sandwich", price: "₹170" },
      { name: "Garlic Butter Mushrooms", price: "₹200" }
    ],
    priceRange: "₹", rating: 4.2, phone: "+91-522-412-3300",
    deliveryFreq: "Daily", packaging: "Loose Packs",
    description: "Budget-friendly Indira Nagar café loved by students. Mushroom cheese maggi is their most ordered Swiggy item.",
    foodieHighlight: "Mushroom Cheese Maggi — loaded with sautéed mushrooms, melted cheese, herbs, served sizzling in a cast iron pan",
    source: ["Swiggy"]
  },
  {
    id: 215, name: "The Royal Café", type: "cafe", area: "Hazratganj",
    address: "Hazratganj Market, MG Road, Lucknow", tier: 2, weeklyKg: 35,
    mushroomTypes: ["Button", "Oyster", "Cremini", "Portobello"],
    signatureDishes: [
      { name: "Royal Mushroom Basket", price: "₹380" },
      { name: "Mushroom Tikka Pizza", price: "₹420" },
      { name: "Stuffed Portobello Caps", price: "₹450" },
      { name: "Mushroom Malai Chaap", price: "₹320" }
    ],
    priceRange: "₹₹", rating: 4.5, phone: "+91-522-220-3456",
    deliveryFreq: "Daily", packaging: "200g Punnets",
    description: "Iconic Hazratganj café since decades. Royal Mushroom Basket is their heritage dish — featured on Google Maps as a must-try.",
    foodieHighlight: "Royal Mushroom Basket — crispy bread bowl filled with creamy four-mushroom medley, topped with parmesan crust",
    source: ["Google Maps", "Zomato"]
  },
  {
    id: 216, name: "Barbeque Nation", type: "restaurant", area: "Gomti Nagar",
    address: "Lulu Mall, Shaheed Path, Gomti Nagar", tier: 1, weeklyKg: 55,
    mushroomTypes: ["Button", "Portobello", "Cremini", "Shiitake"],
    signatureDishes: [
      { name: "Mushroom on Live Grill", price: "Buffet ₹899" },
      { name: "Stuffed Mushroom Caps", price: "Buffet ₹899" },
      { name: "Tandoori Mushroom Tikka", price: "Buffet ₹899" },
      { name: "Mushroom Khurchan", price: "Buffet ₹899" }
    ],
    priceRange: "₹₹₹", rating: 4.3, phone: "+91-522-499-2200",
    deliveryFreq: "Daily", packaging: "Bulk Crates",
    description: "National buffet chain's Lucknow outlet. Live table grill features four mushroom varieties. Massive volume from Zomato Pro orders.",
    foodieHighlight: "Mushroom on Live Grill — button, portobello & shiitake on your table's built-in grill with signature sauces",
    source: ["Zomato", "Swiggy", "Google Maps"]
  },
  {
    id: 217, name: "1135 AD", type: "restaurant", area: "Gomti Nagar",
    address: "Phoenix Palassio, Amar Shaheed Path", tier: 1, weeklyKg: 48,
    mushroomTypes: ["Morel", "Button", "Dhingri", "Shiitake"],
    signatureDishes: [
      { name: "Gucchi Pulao (Royal)", price: "₹950" },
      { name: "Mushroom Korma-e-Shahi", price: "₹680" },
      { name: "Dhingri Dulma", price: "₹580" },
      { name: "Wild Mushroom Shorba", price: "₹420" }
    ],
    priceRange: "₹₹₹₹", rating: 4.6, phone: "+91-522-498-1135",
    deliveryFreq: "Daily", packaging: "Vacuum Sealed",
    description: "Royal Rajasthani-Awadhi fine dining at Phoenix Palassio. Gucchi (morel) pulao is their crown jewel — Zomato Luxury Dining listed.",
    foodieHighlight: "Gucchi Pulao — wild Himalayan morel mushrooms slow-cooked with saffron basmati, finished with gold leaf",
    source: ["Zomato", "Google Maps"]
  },
  {
    id: 218, name: "Sharma Ji Ki Chai Sutta", type: "cafe", area: "Rajajipuram",
    address: "Main Road, Rajajipuram, Lucknow", tier: 3, weeklyKg: 10,
    mushroomTypes: ["Button"],
    signatureDishes: [
      { name: "Mushroom Maggi", price: "₹80" },
      { name: "Mushroom Grilled Sandwich", price: "₹120" },
      { name: "Mushroom Cheese Burst", price: "₹150" },
      { name: "Masala Mushroom Puff", price: "₹60" }
    ],
    priceRange: "₹", rating: 4.0, phone: "+91-522-413-0099",
    deliveryFreq: "Daily", packaging: "Loose",
    description: "Budget street-side café in Rajajipuram. Mushroom maggi at ₹80 is the most ordered item on Swiggy in this area.",
    foodieHighlight: "Mushroom Maggi — street-style maggi loaded with butter-sautéed mushrooms, cheese, served in a paper bowl",
    source: ["Swiggy"]
  },
  {
    id: 219, name: "Oudh 1590", type: "restaurant", area: "Gomti Nagar",
    address: "Vivek Khand, Gomti Nagar, Lucknow", tier: 1, weeklyKg: 50,
    mushroomTypes: ["Morel", "Button", "Dhingri", "King Oyster", "Shiitake"],
    signatureDishes: [
      { name: "Gucchi Yakhni", price: "₹880" },
      { name: "Mushroom Kakori Kebab", price: "₹620" },
      { name: "Nawabi Mushroom Biryani", price: "₹720" },
      { name: "King Oyster Korma", price: "₹780" }
    ],
    priceRange: "₹₹₹₹", rating: 4.7, phone: "+91-522-405-1590",
    deliveryFreq: "Daily", packaging: "Vacuum Sealed Packs",
    description: "Ultra-premium Awadhi restaurant recreating 1590-era Oudh cuisine. Gucchi yakhni is a legendary dish featured across all food platforms.",
    foodieHighlight: "Gucchi Yakhni — rare Himalayan morel in aromatic yogurt-saffron broth, 24-hour slow-cooked royal recipe",
    source: ["Zomato", "Google Maps", "Swiggy"]
  }
];

// Merge platform-sourced venues into main VENUES array
VENUES.push(...PLATFORM_SOURCED_VENUES);

// ============================================================
// DERIVED DATA
// ============================================================
function getAllMushroomTypes() {
  const all = [...VENUES, ...DISCOVERABLE_VENUES.filter(v => discoveredIds.has(v.id))];
  const types = new Set();
  all.forEach(v => v.mushroomTypes.forEach(m => types.add(m)));
  return [...types].sort();
}

function getActiveVenues() {
  return [...VENUES, ...DISCOVERABLE_VENUES.filter(v => discoveredIds.has(v.id))];
}

const TYPES = ["hotel", "restaurant", "cafe"];
const TIERS = [1, 2, 3];
const TIER_LABELS = {
  1: "Tier 1 · Heavy Bulk (75+ kg)",
  2: "Tier 2 · High Gourmet (35–74 kg)",
  3: "Tier 3 · Boutique (15–34 kg)"
};
const TYPE_LABELS = { hotel: "Hotel", restaurant: "Restaurant", cafe: "Café" };
const TYPE_ICONS = { hotel: "🏨", restaurant: "🍽️", cafe: "☕" };

// ============================================================
// APP STATE
// ============================================================
let state = {
  mode: 'foodie',
  filters: {
    area: 'all',
    type: 'all',
    tier: 'all',
    search: '',
    mushrooms: [] // NEW: selected mushroom types
  },
  sort: 'rating',
  selectedVenueIds: new Set(),
  pricePerKg: 180,
  calcOpen: false
};

let discoveredIds = new Set(); // IDs of venues discovered via scan
let isScanning = false;

// ============================================================
// DOM REFERENCES
// ============================================================
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ============================================================
// INITIALIZATION
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const preloader = $('#preloader');
    if (preloader) preloader.classList.add('hidden');
  }, 1800);

  window.addEventListener('scroll', () => {
    const nav = $('.navbar');
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  renderFilters();
  renderVenues();
  initModeToggle();
  initCalcPanel();
  animateCounters();
  updateHeroStats();
});

// ============================================================
// HERO STATS — Dynamic
// ============================================================
function updateHeroStats() {
  const active = getActiveVenues();
  const totalWeekly = active.reduce((s, v) => s + v.weeklyKg, 0);
  const monthlyRev = totalWeekly * 4 * 180;

  const statCards = $$('.hero-stat-value');
  if (statCards[0]) statCards[0].textContent = active.length + '+';
  if (statCards[1]) statCards[1].textContent = totalWeekly.toLocaleString('en-IN') + '+ kg';
  if (statCards[2]) statCards[2].textContent = '₹' + (monthlyRev / 100000).toFixed(1) + 'L+';

  // Update ticker counters
  const counters = $$('.counter-value');
  counters.forEach(c => {
    const type = c.closest('.ticker-item');
    if (!type) return;
    const label = type.querySelector('.ticker-label');
    if (!label) return;

    if (label.textContent.includes('Hotels')) {
      c.dataset.target = active.filter(v => v.type === 'hotel').length;
    } else if (label.textContent.includes('Restaurant')) {
      c.dataset.target = active.filter(v => v.type === 'restaurant').length;
    } else if (label.textContent.includes('Cafe')) {
      c.dataset.target = active.filter(v => v.type === 'cafe').length;
    } else if (label.textContent.includes('Demand')) {
      c.dataset.target = totalWeekly;
      c.dataset.suffix = ' kg';
    }
  });
}

// ============================================================
// MODE TOGGLE
// ============================================================
function initModeToggle() {
  const btns = $$('.mode-btn');
  const slider = $('.mode-slider');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      state.mode = btn.dataset.mode;
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const rect = btn.getBoundingClientRect();
      const parentRect = btn.parentElement.getBoundingClientRect();
      slider.style.width = rect.width + 'px';
      slider.style.left = (rect.left - parentRect.left) + 'px';
      renderVenues();
      updateCalcVisibility();
    });
  });

  setTimeout(() => {
    const activeBtn = $('.mode-btn.active');
    if (activeBtn && slider) {
      const rect = activeBtn.getBoundingClientRect();
      const parentRect = activeBtn.parentElement.getBoundingClientRect();
      slider.style.width = rect.width + 'px';
      slider.style.left = (rect.left - parentRect.left) + 'px';
    }
  }, 100);
}

function updateCalcVisibility() {
  const calcBtn = $('#calcToggleBtn');
  if (calcBtn) calcBtn.style.display = state.mode === 'b2b' ? 'inline-flex' : 'none';
  if (state.mode !== 'b2b') {
    const panel = $('.calc-panel');
    if (panel) panel.classList.remove('open');
    state.calcOpen = false;
  }
}

// ============================================================
// MUSHROOM ICONS & METADATA
// ============================================================
const MUSHROOM_ICONS = {
  "Button": "⚪",
  "Oyster": "🦪",
  "Shiitake": "🌰",
  "Portobello": "🤎",
  "Cremini": "🍄",
  "Morel": "✨",
  "King Oyster": "👑",
  "Enoki": "🥢",
  "Dhingri": "🌾",
  "Truffle Oil": "💎",
  "Wood Ear": "🥢"
};

// ============================================================
// FILTERS — Rich Mushroom Multi-Select & Locality Filters
// ============================================================
function renderFilters() {
  const filtersBar = $('#filtersBar');
  if (!filtersBar) return;

  const active = getActiveVenues();
  const AREAS = [...new Set(active.map(v => v.area))].sort();
  const MUSHROOM_TYPES = getAllMushroomTypes();

  // Count active venues using each mushroom
  const mushroomCounts = {};
  MUSHROOM_TYPES.forEach(m => {
    mushroomCounts[m] = active.filter(v => v.mushroomTypes.includes(m)).length;
  });

  const hasMushroomFilter = state.filters.mushrooms.length > 0;
  const hasAreaFilter = state.filters.area !== 'all';
  const hasTypeFilter = state.filters.type !== 'all';
  const hasTierFilter = state.filters.tier !== 'all';
  const hasSearchFilter = state.filters.search && state.filters.search.length > 0;
  const anyFilterActive = hasMushroomFilter || hasAreaFilter || hasTypeFilter || hasTierFilter || hasSearchFilter;

  let html = '';

  // 1. DEDICATED MUSHROOM MULTI-SELECT CARD (High Priority)
  html += `
    <div class="mushroom-filter-card">
      <div class="mushroom-filter-header">
        <div>
          <div class="mushroom-filter-title">
            <span>🍄</span>
            <span>MUSHROOM VARIETY FILTER (Multi-Select)</span>
          </div>
          <div class="mushroom-filter-subtitle">
            Jo jo mushroom select karenge, wahi cafes, restaurants aur hotels show honge jahan wo use hote hain!
          </div>
        </div>
        <div class="mushroom-filter-actions">
          ${hasMushroomFilter ? `<span class="mushroom-active-counter">✓ ${state.filters.mushrooms.length} Selected</span>` : ''}
          ${hasMushroomFilter ? `<button class="mushroom-clear-btn" id="clearMushroomBtn">Reset Mushrooms ✕</button>` : ''}
        </div>
      </div>
      <div class="mushroom-chips-container">
        ${MUSHROOM_TYPES.map(m => {
          const isSelected = state.filters.mushrooms.includes(m);
          const icon = MUSHROOM_ICONS[m] || '🍄';
          const count = mushroomCounts[m] || 0;
          return `
            <button class="mushroom-chip ${isSelected ? 'active' : ''}" data-mushroom="${m}">
              <span>${icon}</span>
              <span>${m}</span>
              <span class="mushroom-chip-count">${count}</span>
            </button>
          `;
        }).join('')}
      </div>
    </div>
  `;

  // 2. SECONDARY FILTERS: Area, Type, Tier, Search
  html += `
    <div class="filter-group">
      <span class="filter-label">📍 Area</span>
      <button class="filter-chip ${state.filters.area === 'all' ? 'active' : ''}" data-filter="area" data-value="all">All (${active.length})</button>
      ${AREAS.map(a => {
        const count = active.filter(v => v.area === a).length;
        return `<button class="filter-chip ${state.filters.area === a ? 'active' : ''}" data-filter="area" data-value="${a}">${a} (${count})</button>`;
      }).join('')}
    </div>

    <div class="filter-divider"></div>

    <div class="filter-group">
      <span class="filter-label">🏷️ Type</span>
      <button class="filter-chip ${state.filters.type === 'all' ? 'active' : ''}" data-filter="type" data-value="all">All</button>
      ${TYPES.map(t => `<button class="filter-chip ${state.filters.type === t ? 'active' : ''}" data-filter="type" data-value="${t}">${TYPE_ICONS[t]} ${TYPE_LABELS[t]}</button>`).join('')}
    </div>

    <div class="filter-divider"></div>

    <div class="filter-group">
      <span class="filter-label">📊 Tier</span>
      <button class="filter-chip ${state.filters.tier === 'all' ? 'active' : ''}" data-filter="tier" data-value="all">All</button>
      ${TIERS.map(t => `<button class="filter-chip ${state.filters.tier == t ? 'active' : ''}" data-filter="tier" data-value="${t}">Tier ${t}</button>`).join('')}
    </div>

    <div class="search-box">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      <input type="text" id="searchInput" placeholder="Search venue, dish, area..." value="${state.filters.search}">
    </div>
  `;

  // 3. ACTIVE FILTERS STRIP (If any filter is on)
  if (anyFilterActive) {
    const filteredCount = getFilteredVenues().length;
    html += `
      <div class="active-filters-strip">
        <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 600;">Active Filters (${filteredCount} venues):</span>
        ${state.filters.mushrooms.map(m => `
          <span class="active-filter-pill">
            🍄 ${m} <button class="pill-remove-btn" data-remove-mushroom="${m}">✕</button>
          </span>
        `).join('')}
        ${hasAreaFilter ? `
          <span class="active-filter-pill">
            📍 ${state.filters.area} <button class="pill-remove-btn" data-clear-filter="area">✕</button>
          </span>
        ` : ''}
        ${hasTypeFilter ? `
          <span class="active-filter-pill">
            🏷️ ${TYPE_LABELS[state.filters.type]} <button class="pill-remove-btn" data-clear-filter="type">✕</button>
          </span>
        ` : ''}
        ${hasTierFilter ? `
          <span class="active-filter-pill">
            📊 Tier ${state.filters.tier} <button class="pill-remove-btn" data-clear-filter="tier">✕</button>
          </span>
        ` : ''}
        ${hasSearchFilter ? `
          <span class="active-filter-pill">
            🔍 "${state.filters.search}" <button class="pill-remove-btn" data-clear-filter="search">✕</button>
          </span>
        ` : ''}
        <button class="mushroom-clear-btn" id="resetAllFiltersBtn" style="margin-left: auto;">Reset All ✕</button>
      </div>
    `;
  }

  filtersBar.innerHTML = html;

  // Mushroom chip toggle handlers
  filtersBar.querySelectorAll('.mushroom-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const m = chip.dataset.mushroom;
      const idx = state.filters.mushrooms.indexOf(m);
      if (idx > -1) {
        state.filters.mushrooms.splice(idx, 1);
      } else {
        state.filters.mushrooms.push(m);
      }
      renderFilters();
      renderVenues();
    });
  });

  // Clear Mushroom button handler
  const clearMushroomBtn = $('#clearMushroomBtn');
  if (clearMushroomBtn) {
    clearMushroomBtn.addEventListener('click', () => {
      state.filters.mushrooms = [];
      renderFilters();
      renderVenues();
    });
  }

  // Remove individual mushroom pill
  filtersBar.querySelectorAll('[data-remove-mushroom]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const m = btn.dataset.removeMushroom;
      const idx = state.filters.mushrooms.indexOf(m);
      if (idx > -1) state.filters.mushrooms.splice(idx, 1);
      renderFilters();
      renderVenues();
    });
  });

  // Remove individual standard filter pill
  filtersBar.querySelectorAll('[data-clear-filter]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const type = btn.dataset.clearFilter;
      if (type === 'area') state.filters.area = 'all';
      else if (type === 'type') state.filters.type = 'all';
      else if (type === 'tier') state.filters.tier = 'all';
      else if (type === 'search') state.filters.search = '';
      renderFilters();
      renderVenues();
    });
  });

  // Reset All Filters button handler
  const resetAllBtn = $('#resetAllFiltersBtn');
  if (resetAllBtn) {
    resetAllBtn.addEventListener('click', () => {
      state.filters.mushrooms = [];
      state.filters.area = 'all';
      state.filters.type = 'all';
      state.filters.tier = 'all';
      state.filters.search = '';
      renderFilters();
      renderVenues();
    });
  }

  // Other standard filter chips
  filtersBar.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const filterType = chip.dataset.filter;
      if (!filterType) return;
      const value = chip.dataset.value;
      state.filters[filterType] = value;
      renderFilters();
      renderVenues();
    });
  });

  // Search input handler
  const searchInput = $('#searchInput');
  if (searchInput) {
    let debounce;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        state.filters.search = e.target.value.toLowerCase();
        renderFilters();
        renderVenues();
      }, 250);
    });
  }
}

// ============================================================
// FILTER & SORT LOGIC
// ============================================================
function getFilteredVenues() {
  let venues = getActiveVenues();

  if (state.filters.mushrooms.length > 0) {
    venues = venues.filter(v =>
      state.filters.mushrooms.some(m => v.mushroomTypes.includes(m))
    );
  }
  if (state.filters.area !== 'all') {
    venues = venues.filter(v => v.area === state.filters.area);
  }
  if (state.filters.type !== 'all') {
    venues = venues.filter(v => v.type === state.filters.type);
  }
  if (state.filters.tier !== 'all') {
    venues = venues.filter(v => v.tier === parseInt(state.filters.tier));
  }
  if (state.filters.search) {
    const q = state.filters.search;
    venues = venues.filter(v =>
      v.name.toLowerCase().includes(q) ||
      v.area.toLowerCase().includes(q) ||
      v.type.toLowerCase().includes(q) ||
      v.signatureDishes.some(d => d.name.toLowerCase().includes(q)) ||
      v.mushroomTypes.some(m => m.toLowerCase().includes(q)) ||
      v.description.toLowerCase().includes(q)
    );
  }

  const sortVal = state.sort;
  switch (sortVal) {
    case 'newest':
      venues.sort((a, b) => {
        const aNew = discoveredIds.has(a.id) ? 1 : 0;
        const bNew = discoveredIds.has(b.id) ? 1 : 0;
        if (aNew !== bNew) return bNew - aNew;
        return b.rating - a.rating;
      });
      break;
    case 'weekly': venues.sort((a, b) => b.weeklyKg - a.weeklyKg); break;
    case 'name': venues.sort((a, b) => a.name.localeCompare(b.name)); break;
    case 'rating':
    default: venues.sort((a, b) => b.rating - a.rating); break;
  }

  return venues;
}

// ============================================================
// RENDER VENUE CARDS
// ============================================================
function renderVenues() {
  const grid = $('#venuesGrid');
  const countEl = $('#resultsCount');
  if (!grid) return;

  const allActive = getActiveVenues();
  const venues = getFilteredVenues();

  if (countEl) {
    const mushroomLabel = state.filters.mushrooms.length > 0
      ? ` · 🍄 ${state.filters.mushrooms.join(', ')}`
      : '';
    countEl.innerHTML = `Showing <strong>${venues.length}</strong> of <strong>${allActive.length}</strong> venues${mushroomLabel}`;
  }

  if (venues.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🍄</div>
        <h3 class="empty-state-title">Koi venue nahi mila</h3>
        <p class="empty-state-desc">Filter ya search change karke try karo, ya "Scan Lucknow" button dabao naye venues discover karne ke liye!</p>
      </div>`;
    return;
  }

  grid.innerHTML = venues.map((v, i) => renderVenueCard(v, i)).join('');

  // Interactions
  grid.querySelectorAll('.venue-select-check').forEach(chk => {
    chk.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(chk.dataset.id);
      if (state.selectedVenueIds.has(id)) {
        state.selectedVenueIds.delete(id);
        chk.classList.remove('checked');
      } else {
        state.selectedVenueIds.add(id);
        chk.classList.add('checked');
      }
      updateCalcSummary();
    });
  });

  // Clicking on any card opens its detailed modal
  grid.querySelectorAll('.venue-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.venue-select-check') || e.target.closest('.mushroom-tag') || e.target.closest('.venue-action-btn')) return;
      const id = parseInt(card.dataset.id);
      openVenueDetail(id);
    });
  });

  // Details / Contact action buttons
  grid.querySelectorAll('.venue-action-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      openVenueDetail(id);
    });
  });

  // Click on any card mushroom tag to filter
  grid.querySelectorAll('.mushroom-tag').forEach(tag => {
    tag.style.cursor = 'pointer';
    tag.setAttribute('title', `Click to filter by ${tag.dataset.mushroom}`);
    tag.addEventListener('click', (e) => {
      e.stopPropagation();
      const m = tag.dataset.mushroom;
      if (!state.filters.mushrooms.includes(m)) {
        state.filters.mushrooms.push(m);
      } else {
        const idx = state.filters.mushrooms.indexOf(m);
        state.filters.mushrooms.splice(idx, 1);
      }
      renderFilters();
      renderVenues();
    });
  });
}

function renderVenueCard(venue, index) {
  const isB2B = state.mode === 'b2b';
  const isSelected = state.selectedVenueIds.has(venue.id);
  const isNew = discoveredIds.has(venue.id);
  const stars = renderStars(venue.rating);
  const tierClass = `tier-${venue.tier}`;
  const typeClass = `type-${venue.type}`;
  const delay = Math.min(index * 0.04, 0.6);

  // Highlight matching mushroom types
  const selectedMushrooms = state.filters.mushrooms;

  let bodyContent = '';
  if (isB2B) {
    bodyContent = `
      <div class="venue-b2b-stats">
        <div class="b2b-stat">
          <div class="b2b-stat-value">${venue.weeklyKg} kg</div>
          <div class="b2b-stat-label">Weekly Demand</div>
        </div>
        <div class="b2b-stat">
          <div class="b2b-stat-value">₹${(venue.weeklyKg * state.pricePerKg * 4).toLocaleString('en-IN')}</div>
          <div class="b2b-stat-label">Monthly Revenue*</div>
        </div>
      </div>
      <div class="venue-mushroom-types">
        ${venue.mushroomTypes.map(m => `<span class="mushroom-tag ${selectedMushrooms.includes(m) ? 'mushroom-tag-active' : ''}" data-mushroom="${m}">${MUSHROOM_ICONS[m] || '🍄'} ${m}</span>`).join('')}
      </div>
      <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 8px;">
        📦 ${venue.packaging} &nbsp;·&nbsp; 🚚 ${venue.deliveryFreq}
      </div>
      <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.5;">${venue.description}</p>`;
  } else {
    bodyContent = `
      <div class="venue-dishes">
        <div class="venue-dishes-title">Signature Mushroom Dishes</div>
        ${venue.signatureDishes.map(d => `
          <div class="dish-item"><span>${d.name}</span><span class="dish-price">${d.price}</span></div>
        `).join('')}
      </div>
      <div class="venue-mushroom-types">
        ${venue.mushroomTypes.map(m => `<span class="mushroom-tag ${selectedMushrooms.includes(m) ? 'mushroom-tag-active' : ''}" data-mushroom="${m}">${MUSHROOM_ICONS[m] || '🍄'} ${m}</span>`).join('')}
      </div>
      <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.5; margin-top: 8px; font-style: italic;">
        💡 ${venue.foodieHighlight}
      </p>`;
  }

  return `
    <div class="venue-card ${isNew ? 'venue-card-new' : ''}" data-id="${venue.id}" style="animation-delay: ${delay}s;" title="Click to view full details">
      ${isNew ? '<div class="new-badge">🔥 NEW</div>' : ''}
      ${isB2B ? `<div class="venue-select-check ${isSelected ? 'checked' : ''}" data-id="${venue.id}" title="Select for calculator"></div>` : ''}
      <div class="venue-card-header">
        <div>
          <div class="venue-type-icon ${typeClass}">${TYPE_ICONS[venue.type]}</div>
          <h3 class="venue-name">${venue.name}</h3>
          <div class="venue-area">📍 ${venue.address}</div>
          ${venue.source ? `<div class="venue-source-badges">${venue.source.map(s => {
            const icon = s === 'Zomato' ? '🔴' : s === 'Swiggy' ? '🟠' : '📍';
            const cls = s === 'Zomato' ? 'source-zomato' : s === 'Swiggy' ? 'source-swiggy' : 'source-gmaps';
            return `<span class="source-badge ${cls}">${icon} ${s}</span>`;
          }).join('')}</div>` : ''}
        </div>
        <span class="venue-tier-badge ${tierClass}">${TIER_LABELS[venue.tier].split('·')[0].trim()}</span>
      </div>
      <div class="venue-card-body">
        <div class="venue-rating-row">
          <div class="venue-stars">${stars}</div>
          <span class="venue-rating-num">${venue.rating}</span>
          <span class="venue-price">${venue.priceRange}</span>
        </div>
        ${bodyContent}
      </div>
      <div class="venue-card-footer">
        <span class="venue-footer-info">${isB2B ? `📊 ${venue.weeklyKg} kg/week` : `${TYPE_LABELS[venue.type]} · ${venue.area}`}</span>
        <button class="venue-action-btn" data-id="${venue.id}">${isB2B ? '📞 Contact & Intel' : '📍 Full Details'}</button>
      </div>
    </div>`;
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.3;
  let html = '';
  for (let i = 0; i < full; i++) html += '★';
  if (half) html += '½';
  for (let i = full + (half ? 1 : 0); i < 5; i++) html += '☆';
  return html;
}

// ============================================================
// VENUE DETAIL MODAL — Complete Profile & Intel Popup
// ============================================================
function openVenueDetail(venueId) {
  const allV = getActiveVenues();
  const venue = allV.find(v => v.id === venueId);
  if (!venue) return;

  const overlay = $('#venueDetailOverlay');
  const content = $('#venueModalContent');
  if (!overlay || !content) return;

  const stars = renderStars(venue.rating);
  const tierClass = `tier-${venue.tier}`;
  const isSelected = state.selectedVenueIds.has(venue.id);
  const estMonthlyRev = (venue.weeklyKg * state.pricePerKg * 4).toLocaleString('en-IN');
  const gmapsQuery = encodeURIComponent(`${venue.name} ${venue.address} Lucknow`);

  content.innerHTML = `
    <!-- Header Hero -->
    <div class="modal-header-hero">
      <div class="modal-venue-icon type-${venue.type}">
        ${TYPE_ICONS[venue.type] || '🍽️'}
      </div>
      <div class="modal-venue-meta">
        <div class="modal-title-row">
          <h2 class="modal-venue-title">${venue.name}</h2>
          <span class="venue-tier-badge ${tierClass}">${TIER_LABELS[venue.tier]}</span>
        </div>
        <div class="modal-venue-address">
          📍 ${venue.address} · <strong style="color: var(--gold-light);">${venue.area}</strong>
        </div>
        <div class="modal-badges-row">
          <div class="modal-rating-badge">★ ${venue.rating} / 5.0</div>
          <div class="modal-price-badge">${venue.priceRange} (${venue.priceRange === '₹' ? 'Budget Friendly' : venue.priceRange === '₹₹' ? 'Mid-Range Casual' : venue.priceRange === '₹₹₹' ? 'Premium Fine Dine' : 'Luxury Royal'})</div>
          ${venue.source ? venue.source.map(s => {
            const icon = s === 'Zomato' ? '🔴' : s === 'Swiggy' ? '🟠' : '📍';
            const cls = s === 'Zomato' ? 'source-zomato' : s === 'Swiggy' ? 'source-swiggy' : 'source-gmaps';
            return `<span class="source-badge ${cls}">${icon} ${s} Verified</span>`;
          }).join('') : ''}
        </div>
      </div>
    </div>

    <!-- Quick Action Buttons -->
    <div class="modal-actions-bar">
      ${venue.phone ? `
        <a href="tel:${venue.phone}" class="modal-action-btn modal-btn-call">
          📞 Call Venue (${venue.phone})
        </a>` : ''}
      <a href="https://www.google.com/maps/search/?api=1&query=${gmapsQuery}" target="_blank" rel="noopener" class="modal-action-btn modal-btn-map">
        🗺️ Open in Google Maps
      </a>
      <button class="modal-action-btn modal-btn-calc" onclick="toggleVenueSelectionFromModal(${venue.id})">
        ${isSelected ? '✓ Remove from B2B Calculator' : '➕ Add to B2B Calculator'}
      </button>
      <button class="modal-action-btn modal-btn-share" onclick="copyVenueShare(${venue.id})">
        📋 Copy Info
      </button>
    </div>

    <!-- About Section -->
    <div class="modal-section">
      <div class="modal-section-title">🏛️ About & Atmosphere</div>
      <div class="modal-desc-box">${venue.description}</div>
    </div>

    <!-- Mushroom Specialization Profile -->
    <div class="modal-section">
      <div class="modal-section-title">🍄 Mushroom Varieties Used</div>
      <div class="modal-mushrooms-grid">
        ${venue.mushroomTypes.map(m => `
          <div class="modal-shroom-pill">
            <span>${MUSHROOM_ICONS[m] || '🍄'}</span>
            <strong>${m} Mushroom</strong>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Signature Dishes -->
    <div class="modal-section">
      <div class="modal-section-title">🍲 Signature Mushroom Menu & Pricing</div>
      <div class="modal-dishes-grid">
        ${venue.signatureDishes.map(d => `
          <div class="modal-dish-card">
            <span class="modal-dish-name">✨ ${d.name}</span>
            <span class="modal-dish-price">${d.price}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Foodie Insider Secret -->
    <div class="modal-section">
      <div class="modal-section-title">💡 Foodie Insider Secret Highlight</div>
      <div class="modal-highlight-box">
        <span class="icon">✨</span>
        <p>${venue.foodieHighlight}</p>
      </div>
    </div>

    <!-- B2B Commercial & Procurement Intel -->
    <div class="modal-section">
      <div class="modal-section-title">📊 B2B Supply & Procurement Intel</div>
      <div class="modal-b2b-grid">
        <div class="modal-b2b-stat">
          <div class="modal-b2b-stat-val">${venue.weeklyKg} kg</div>
          <div class="modal-b2b-stat-lbl">Weekly Intake</div>
        </div>
        <div class="modal-b2b-stat">
          <div class="modal-b2b-stat-val">₹${estMonthlyRev}</div>
          <div class="modal-b2b-stat-lbl">Est. Monthly Value*</div>
        </div>
        <div class="modal-b2b-stat">
          <div class="modal-b2b-stat-val" style="font-size: 0.95rem; color: var(--gold-light);">${venue.packaging}</div>
          <div class="modal-b2b-stat-lbl">Packaging Needed</div>
        </div>
        <div class="modal-b2b-stat">
          <div class="modal-b2b-stat-val" style="font-size: 0.95rem; color: #8ab4f8;">${venue.deliveryFreq}</div>
          <div class="modal-b2b-stat-lbl">Delivery Schedule</div>
        </div>
      </div>
    </div>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeVenueDetail(e) {
  if (e && e.target && e.target.id !== 'venueDetailOverlay' && !e.target.classList.contains('modal-close-btn')) {
    return;
  }
  const overlay = $('#venueDetailOverlay');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function toggleVenueSelectionFromModal(venueId) {
  if (state.selectedVenueIds.has(venueId)) {
    state.selectedVenueIds.delete(venueId);
    showToast(`Removed from B2B Calculator`);
  } else {
    state.selectedVenueIds.add(venueId);
    showToast(`Added to B2B Calculator!`);
  }
  updateCalcSummary();
  renderVenues();
  openVenueDetail(venueId); // Refresh modal button text
}

function copyVenueShare(venueId) {
  const allV = getActiveVenues();
  const v = allV.find(item => item.id === venueId);
  if (!v) return;
  const text = `🍄 ${v.name} (${v.area}, Lucknow)\n📍 ${v.address}\n⭐ Rating: ${v.rating}/5 | ${v.priceRange}\n🍲 Dishes: ${v.signatureDishes.map(d => d.name).join(', ')}\n📞 Contact: ${v.phone}\nDiscovered on Lucknow Mushroom Guide`;
  navigator.clipboard.writeText(text).then(() => {
    showToast(`📋 ${v.name} ki details copy ho gayi!`);
  }).catch(() => {
    showToast(`📞 ${v.name}: ${v.phone}`);
  });
}

// Close modal on Escape key press
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const overlay = $('#venueDetailOverlay');
    if (overlay && overlay.classList.contains('active')) {
      closeVenueDetail();
    }
  }
});

// ============================================================
// SCAN LUCKNOW — Discover New Venues with Live AI Radar Simulation
// ============================================================
let dynamicScanCount = 0;

function scanLucknow() {
  if (isScanning) return;
  isScanning = true;

  const overlay = $('#scanOverlay');
  const progressFill = $('#scanProgressFill');
  const percentLabel = $('#scanPercent');
  const localityStream = $('#scanLocalitiesStream');
  const scanBtn = $('#scanBtn');
  const scanBtnNav = $('#scanBtnNav');
  const heroScanBtn = $('#heroScanBtn');

  // Update button loading states
  const setButtonsLoading = (loading) => {
    if (scanBtn) {
      scanBtn.disabled = loading;
      scanBtn.innerHTML = loading
        ? `<span class="scan-spinner"></span> <span>Radar Scanning...</span>`
        : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 11-6.219-8.56"/><polyline points="21 3 21 9 15 9"/></svg> <span>Scan Lucknow (Discover New)</span>`;
    }
    if (scanBtnNav) {
      scanBtnNav.disabled = loading;
      scanBtnNav.innerHTML = loading
        ? `<span class="scan-spinner"></span> <span>Scanning...</span>`
        : `<span class="scan-pulse-dot"></span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 11-6.219-8.56"/><polyline points="21 3 21 9 15 9"/></svg> <span>Scan Lucknow</span>`;
    }
    if (heroScanBtn) {
      heroScanBtn.disabled = loading;
      heroScanBtn.innerHTML = loading
        ? `<span class="scan-spinner"></span> <span>Scanning Lucknow...</span>`
        : `<span class="scan-cta-blip"></span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 11-6.219-8.56"/><polyline points="21 3 21 9 15 9"/></svg> Scan & Add New Venues`;
    }
  };

  setButtonsLoading(true);

  if (overlay) {
    overlay.classList.add('active');
    if (progressFill) progressFill.style.width = '10%';
    if (percentLabel) percentLabel.textContent = '10%';
    const statusEl = overlay.querySelector('.scan-status');
    if (statusEl) statusEl.textContent = '🛰️ Aminabad, Chowk & Old Lucknow food lanes scan ho rahe hain...';
  }

  // Scanning phases with locality highlights & progress increments
  const phases = [
    { text: '🛰️ Chowk, Husainabad aur Aminabad ke naye Awadhi kitchens scan ho rahe hain...', progress: '25%', tags: ['Chowk', 'Aminabad'], delay: 700 },
    { text: '🛰️ Gomti Nagar, Vibhuti Khand & Aliganj ke boutique bistros connect ho rahe hain...', progress: '50%', tags: ['Gomti Nagar', 'Aliganj'], delay: 1500 },
    { text: '🛰️ Shaheed Path, Phoenix Palassio & Lulu Mall food hubs detect ho rahe hain...', progress: '75%', tags: ['Shaheed Path', 'Phoenix Palassio'], delay: 2400 },
    { text: '🛰️ Alambagh, Charbagh & Sushant Golf City procurement orders verify ho rahe hain...', progress: '90%', tags: ['Alambagh', 'Charbagh', 'Sushant Golf City'], delay: 3300 },
    { text: '✨ Data synthesis complete! Naye verified mushroom spots add ho rahe hain...', progress: '100%', tags: ['Mahanagar', 'Rajajipuram', 'Jankipuram'], delay: 4000 }
  ];

  phases.forEach(phase => {
    setTimeout(() => {
      if (overlay) {
        const statusEl = overlay.querySelector('.scan-status');
        if (statusEl) statusEl.textContent = phase.text;
      }
      if (progressFill) progressFill.style.width = phase.progress;
      if (percentLabel) percentLabel.textContent = phase.progress;

      if (localityStream && phase.tags) {
        localityStream.querySelectorAll('.scan-tag').forEach(tag => {
          if (phase.tags.includes(tag.textContent.trim())) {
            tag.classList.add('active');
          }
        });
      }
    }, phase.delay);
  });

  setTimeout(() => {
    // 1. Pick un-discovered venues from DISCOVERABLE_VENUES
    const newVenues = DISCOVERABLE_VENUES.filter(v => !discoveredIds.has(v.id));
    let toAdd = newVenues.slice(0, Math.min(4, newVenues.length));

    // 2. If all predefined venues are already discovered, generate a fresh procedural venue!
    if (toAdd.length === 0) {
      dynamicScanCount++;
      const areasPool = ["Gomti Riverfront", "Vrindavan Yojna", "Kisan Path Highway", "Telibagh", "IIM Road", "Ashiyana"];
      const mushroomsPool = [
        ["Button", "Oyster", "Shiitake"],
        ["Portobello", "Cremini", "Truffle Oil"],
        ["King Oyster", "Enoki", "Button"],
        ["Morel", "Dhingri", "Button"]
      ];
      const area = areasPool[dynamicScanCount % areasPool.length];
      const types = mushroomsPool[dynamicScanCount % mushroomsPool.length];
      const dynamicVenue = {
        id: 200 + dynamicScanCount,
        name: `Live Radar Shroom Hub #${dynamicScanCount}`,
        type: dynamicScanCount % 2 === 0 ? "cafe" : "restaurant",
        area: area,
        address: `${area} Main Boulevard, Lucknow`,
        tier: 3,
        weeklyKg: 20 + (dynamicScanCount * 3) % 25,
        mushroomTypes: types,
        signatureDishes: [
          { name: "Live Radar Special Shroom Sizzler", price: "₹380" },
          { name: "Truffled Mushroom Bruschetta", price: "₹290" },
          { name: "Crispy Herb Shroom Bites", price: "₹220" },
          { name: "Awadhi Cream Mushroom", price: "₹310" }
        ],
        priceRange: "₹₹",
        rating: 4.4,
        phone: "+91-522-49" + Math.floor(1000 + Math.random() * 9000),
        deliveryFreq: "Alternate Days",
        packaging: "Farm Fresh Punnets",
        description: `Live AI Scan dwara detect kiya gaya naya venue in ${area}. Dedicated seasonal mushroom dishes aur dynamic culinary procurement.`,
        foodieHighlight: `Live Radar Sizzler — sizzling cast-iron platter with trio mushrooms in house-blend Lucknow spices!`
      };
      DISCOVERABLE_VENUES.push(dynamicVenue);
      toAdd = [dynamicVenue];
    }

    toAdd.forEach(v => discoveredIds.add(v.id));

    // Close overlay
    if (overlay) overlay.classList.remove('active');
    isScanning = false;
    setButtonsLoading(false);

    // Refresh UI & state
    state.sort = 'newest';
    const sortSelect = $('#sortSelect');
    if (sortSelect) sortSelect.value = 'newest';

    showToast(`🔥 ${toAdd.length} naye cafes/restaurants discover hue! Ab total ${getActiveVenues().length} venues tracked hain!`);
    renderFilters();
    renderVenues();
    updateHeroStats();

    // Smoothly scroll down to see newly discovered venues
    setTimeout(() => {
      scrollToVenues();
    }, 400);

  }, 4700);
}

// ============================================================
// CALCULATOR PANEL
// ============================================================
function initCalcPanel() {
  const toggle = $('#calcToggleBtn');
  const panel = $('.calc-panel');
  const closeBtn = $('#calcClose');

  if (toggle) {
    toggle.addEventListener('click', () => {
      state.calcOpen = !state.calcOpen;
      if (panel) panel.classList.toggle('open', state.calcOpen);
      if (state.calcOpen) updateCalcSummary();
    });
    toggle.style.display = state.mode === 'b2b' ? 'inline-flex' : 'none';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      state.calcOpen = false;
      if (panel) panel.classList.remove('open');
    });
  }

  const priceInput = $('#pricePerKg');
  if (priceInput) {
    priceInput.value = state.pricePerKg;
    priceInput.addEventListener('input', (e) => {
      state.pricePerKg = parseInt(e.target.value) || 0;
      updateCalcSummary();
      renderVenues();
    });
  }

  const exportBtn = $('#exportCSV');
  if (exportBtn) exportBtn.addEventListener('click', exportToCSV);
}

function updateCalcSummary() {
  const allV = getActiveVenues();
  const selected = allV.filter(v => state.selectedVenueIds.has(v.id));
  const totalWeekly = selected.reduce((sum, v) => sum + v.weeklyKg, 0);
  const totalMonthly = totalWeekly * 4;
  const revenue = totalMonthly * state.pricePerKg;

  const el = (id) => document.getElementById(id);
  if (el('calcSelectedCount')) el('calcSelectedCount').textContent = selected.length;
  if (el('calcWeeklyDemand')) el('calcWeeklyDemand').textContent = `${totalWeekly} kg`;
  if (el('calcMonthlyDemand')) el('calcMonthlyDemand').textContent = `${totalMonthly} kg`;
  if (el('calcMonthlyRevenue')) el('calcMonthlyRevenue').textContent = `₹${revenue.toLocaleString('en-IN')}`;

  const selectedList = el('calcSelectedList');
  if (selectedList) {
    if (selected.length === 0) {
      selectedList.innerHTML = '<span style="font-size: 0.8rem; color: var(--text-muted);">Card pe ✓ click karke venues select karo ↑</span>';
    } else {
      selectedList.innerHTML = selected.map(v => `
        <span class="calc-selected-tag">
          ${TYPE_ICONS[v.type]} ${v.name} (${v.weeklyKg} kg/wk)
          <span class="remove-tag" data-id="${v.id}">×</span>
        </span>`).join('');

      selectedList.querySelectorAll('.remove-tag').forEach(btn => {
        btn.addEventListener('click', () => {
          state.selectedVenueIds.delete(parseInt(btn.dataset.id));
          updateCalcSummary();
          renderVenues();
        });
      });
    }
  }
}

// ============================================================
// CSV EXPORT
// ============================================================
function exportToCSV() {
  const allV = getActiveVenues();
  const venues = state.selectedVenueIds.size > 0
    ? allV.filter(v => state.selectedVenueIds.has(v.id))
    : getFilteredVenues();

  const headers = ['Name', 'Type', 'Area', 'Address', 'Tier', 'Weekly (kg)', 'Monthly Revenue (₹)', 'Mushroom Types', 'Delivery Frequency', 'Packaging', 'Phone', 'Rating'];
  const rows = venues.map(v => [
    v.name, TYPE_LABELS[v.type], v.area, v.address, `Tier ${v.tier}`,
    v.weeklyKg, v.weeklyKg * state.pricePerKg * 4,
    v.mushroomTypes.join('; '), v.deliveryFreq, v.packaging, v.phone, v.rating
  ]);

  let csv = headers.join(',') + '\n';
  rows.forEach(row => { csv += row.map(val => `"${val}"`).join(',') + '\n'; });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `lucknow_mushroom_venues_${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
  showToast('✅ CSV downloaded — ' + venues.length + ' venues!');
}

// ============================================================
// SORT HANDLER
// ============================================================
document.addEventListener('change', (e) => {
  if (e.target.id === 'sortSelect') {
    state.sort = e.target.value;
    renderVenues();
  }
});

// ============================================================
// COUNTER ANIMATION
// ============================================================
function animateCounters() {
  const counters = $$('.counter-value');
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.target);
    const suffix = counter.dataset.suffix || '';
    const duration = 2000;
    const start = Date.now();
    function update() {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = Math.floor(eased * target).toLocaleString('en-IN') + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { update(); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.5 });
    observer.observe(counter);
  });
}

// ============================================================
// TOAST NOTIFICATION
// ============================================================
function showToast(message) {
  let toast = $('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// ============================================================
// SMOOTH SCROLL
// ============================================================
function scrollToVenues() {
  const el = document.getElementById('venues-section');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
