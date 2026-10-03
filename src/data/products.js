import nalpamaradiImg from '../assets/images/products/nalpamaradi.png';
import goatMilkImg from '../assets/images/products/goat-milk.png';
import cocoMilkImg from '../assets/images/products/coco-milk.png';
import neemImg from '../assets/images/products/neem.png';
import beetrootImg from '../assets/images/products/beetroot.png';
import carrotImg from '../assets/images/products/carrot.png';
import rakthaImg from '../assets/images/products/raktha.png';
import thaalliImg from '../assets/images/products/thaalli.png';
import lipbalm1Img from '../assets/images/products/lipbalm11.png';
import lipbalm2Img from '../assets/images/products/lipbalm2.png';
import lipbalm3Img from '../assets/images/products/lipbalm3.png';
import uluva from '../assets/images/products/uluva.png';
import hydraGlow from '../assets/images/products/hygra-glow.png';
import skinBrightCream from '../assets/images/products/skin-bright.png';
import nutsMix from '../assets/images/products/nuts-mix.png';
import honeyGar from '../assets/images/products/honey-gar.png';
import karkidaka from '../assets/images/products/karkidaka.png';
import allergyRelief from '../assets/images/products/allergy-relief.png';
import antiPig from '../assets/images/products/anti-pig.png';
import aleovera from '../assets/images/products/aleo-vera.png';
import antiAcne from '../assets/images/products/anti-acne.png';
import vitC from '../assets/images/products/vit-c.png';
import suvarna from '../assets/images/products/suvarna.png';
import saffron from '../assets/images/products/saffron.png';
import gentleGlow from '../assets/images/products/gentle-glow.png';
import charcoal from '../assets/images/products/charcoal.png';
import hairControl from '../assets/images/products/hair-control.png';
import petal from '../assets/images/products/petal.png';
import kuppaimeni from '../assets/images/products/kuppaimeni.png';
import manjishtasoap from '../assets/images/products/manjishta.png';
import velvet from '../assets/images/products/velvet.png';
import blackSeed from '../assets/images/products/black-seed.png';
import hairCareOil from '../assets/images/products/hair-oil.png';
import ayurGlow from '../assets/images/products/ayur-glow.png';


export const CATEGORIES = [
  "All",
  "Dry Skin Special",
  "Food Products",
  "Creams",
  "Face Wash",
  "Lip Balm",
  "Soap",
  "Oil"
];

export const CONCERNS = [
  {
    id: "skin-allergy",
    title: "Skin Allergy Relief Balm",
    category: "Creams",
    description: "Soothes irritation & redness. Restores natural skin barrier.",
    image: lipbalm1Img,
    benefits: ["Relieves itching & redness", "Soothes sensitive skin", "Natural herbal formula"],
    slug: "allergy-relief-balm"
  },
  {
    id: "lip-care",
    title: "Lip Balm",
    category: "Lip Balm",
    description: "Soft, smooth & naturally healthy lips with traditional butter & herbs.",
    image: lipbalm2Img,
    benefits: ["Deep moisturization", "Heals dry & chapped lips", "100% natural ingredients"],
    slug: "beetroot-lip-balm"
  },
  {
    id: "hair-care",
    title: "Hair Loss & Dandruff",
    category: "Oil",
    description: "Stronger roots. Healthier hair. Flake-free nourished scalp.",
    image: thaalliImg,
    benefits: ["Reduces dandruff", "Prevents hair fall", "Nourishes scalp"],
    slug: "hair-care-oil"
  },
  {
    id: "pimples",
    title: "Pimples & Acne Care",
    category: "Creams",
    description: "Clear skin. Confident you. Gentle botanical antibacterial action.",
    image: neemImg,
    benefits: ["Controls excess oil", "Reduces acne & marks", "Soothes inflammation"],
    slug: "anti-acne-gel"
  },
  {
    id: "soap-care",
    title: "Herbal Soap",
    category: "Soap",
    description: "Gentle cleansing. Pure Ayurvedic ingredients for natural care.",
    image: nalpamaradiImg,
    benefits: ["Skin friendly pH", "Removes impurities", "No harsh chemicals"],
    slug: "nalpamaradi-soap"
  },
  {
    id: "dry-skin",
    title: "Dry Skin Care",
    category: "Dry Skin Special",
    description: "Deep hydration & lasting softness with rich natural oils.",
    image: goatMilkImg,
    benefits: ["Moisturizes deeply", "Restores skin barrier", "Keeps skin soft & supple"],
    slug: "goat-milk-soap"
  },
  {
    id: "brightening",
    title: "Brightening Cream",
    category: "Creams",
    description: "Naturally brighter, even-toned skin enriched with saffron & herbs.",
    image: rakthaImg,
    benefits: ["Fades dark spots", "Evens skin tone", "Reveals natural glow"],
    slug: "skin-brightening-cream"
  }
];

export const PRODUCTS = [
  // DRY SKIN SPECIAL
  {
    id: 1,
    slug: "nalpamaradi-soap",
    name: "Nalpamaradi Soap",
    category: "Dry Skin Special",
    price: 120,
    image: nalpamaradiImg,
    shortDescription: "Traditional Ayurvedic turmeric and herbal bark soap for glowing skin.",
    description: "Handcrafted with pure Nalpamaradi oil extracted from four sacred ficus trees and wild turmeric. De-tanks skin, brightens complexion, and deeply nourishes dry skin naturally.",
    ingredients: ["Nalpamaradi Oil", "Turmeric Extract", "Vetiver", "Coconut Oil Base"],
    benefits: ["Brightens dull skin", "Reduces hyperpigmentation", "Gentle everyday cleansing"],
    howToUse: "Apply on wet skin, work into a rich herbal lather, rinse thoroughly with water.",
    size: "100g",
    featured: true,
    bestseller: true,
    rating: 4.9,
    reviewCount: 128
  },
  {
    id: 2,
    slug: "goat-milk-soap",
    name: "Goat Milk Soap",
    category: "Dry Skin Special",
    price: 130,
    image: goatMilkImg,
    shortDescription: "Ultra-nourishing cream soap made with fresh goat milk & botanical oils.",
    description: "Enriched with natural lactic acid and vitamins A & E, this soothing soap gently exfoliates dead skin cells while providing deep moisture for dry or sensitive skin.",
    ingredients: ["Pure Goat Milk", "Raw Honey", "Sweet Almond Oil", "Virgin Coconut Oil"],
    benefits: ["Lactic acid gentle exfoliation", "Deep hydration for flaky skin", "Hypoallergenic care"],
    howToUse: "Lather gently between hands and apply all over body and face. Wash off with warm water.",
    size: "100g",
    featured: true,
    bestseller: true,
    rating: 4.8,
    reviewCount: 94
  },
  {
    id: 3,
    slug: "coconut-milk-soap",
    name: "Coconut Milk Soap",
    category: "Dry Skin Special",
    price: 110,
    image: cocoMilkImg,
    shortDescription: "Rich creamy cleansing bar infused with fresh coconut milk.",
    description: "Formulated with pure cold-pressed coconut milk to replenish moisture, restore elasticity, and leave skin silky soft without stripping natural oils.",
    ingredients: ["Fresh Coconut Milk", "Sheabutter", "Extra Virgin Olive Oil"],
    benefits: ["Intense hydration", "Protective moisture barrier", "Silky soft texture"],
    howToUse: "Use daily during bath or shower for smooth, supple skin.",
    size: "100g",
    featured: false,
    bestseller: false,
    rating: 4.7,
    reviewCount: 62
  },
  {
    id: 4,
    slug: "hydra-glow-body-cream",
    name: "Hydra Glow Body Cream",
    category: "Dry Skin Special",
    price: 299,
    image: hydraGlow,
    shortDescription: "Deeply moisturizing Ayurvedic body cream for dry and dull skin.",
    description: "Infused with red sandalwood, kokum butter, and almond oil. Locks in moisture for 24 hours while giving skin a luminous natural radiance.",
    ingredients: ["Red Sandalwood", "Kokum Butter", "Almond Oil", "Aloe Leaf Juice"],
    benefits: ["24-hour hydration", "Non-greasy absorption", "Natural radiance glow"],
    howToUse: "Massage generously onto clean skin after bathing.",
    size: "150ml",
    featured: true,
    bestseller: false,
    rating: 4.9,
    reviewCount: 45
  },
  {
    id: 5,
    slug: "skin-brightening-cream-dry",
    name: "Skin Brightening Cream Dry",
    category: "Dry Skin Special",
    price: 399,
    image: ayurGlow,
    shortDescription: "Herbal brightening formula with saffron and sandalwood extracts.",
    description: "Traditional Ayurvedic glow recipe combining saffron, Manjishta, and goat milk extracts to nourish dry skin and promote uniform tone.",
    ingredients: ["Kashmiri Saffron", "Manjishta Root", "Sandalwood Extract"],
    benefits: ["Evens skin tone", "Improves skin texture", "Nourishes deeply"],
    howToUse: "Apply a small amount evenly over clean face and neck in gentle upward motions.",
    size: "50g",
    featured: true,
    bestseller: true,
    rating: 4.9,
    reviewCount: 156
  },

  // FOOD PRODUCTS
  {
    id: 6,
    slug: "golden-nuts-mix",
    name: "Golden Nuts Mix",
    category: "Food Products",
    price: 370,
    image: nutsMix,
    shortDescription: "Traditional roasted nut & herbal spice mix for vital wellness.",
    description: "A nutritious Ayurvedic energy booster blend of roasted almonds, walnuts, pumpkin seeds, cardamoms, and saffron. Supports immunity and daily stamina.",
    ingredients: ["Almonds", "Walnuts", "Cardamom", "Nutmeg", "Pure Honey Coating"],
    benefits: ["Natural energy booster", "Rich in antioxidants", "100% wholesome & chemical-free"],
    howToUse: "Enjoy 1-2 tablespoons daily with warm milk or as a healthy snack.",
    size: "250g",
    featured: false,
    bestseller: false,
    rating: 4.8,
    reviewCount: 38
  },
  {
    id: 7,
    slug: "honeygar",
    name: "HoneyGar",
    category: "Food Products",
    price: 350,
    image: honeyGar,
    shortDescription: "Pure raw wild forest honey infused with organic apple cider vinegar.",
    description: "Traditional digestive tonic pairing raw unpasteurized forest honey with unfiltered ACV and herbal spices. Great for gut health and natural detox.",
    ingredients: ["Raw Forest Honey", "Apple Cider Vinegar with Mother", "Ginger Extract"],
    benefits: ["Supports digestion", "Metabolism booster", "Natural immune defense"],
    howToUse: "Mix 1 tablespoon in a glass of lukewarm water every morning.",
    size: "300ml",
    featured: false,
    bestseller: false,
    rating: 4.7,
    reviewCount: 29
  },
  {
    id: 8,
    slug: "karkkidaka-health",
    name: "Karkkidaka Health Mix",
    category: "Food Products",
    price: 249,
    image: karkidaka,
    shortDescription: "Traditional monsoon herbal rejuvenation porridge powder.",
    description: "Authentic Kerala Karkkidaka Kanji mix blend of 24 traditional herbs and medicinal grains crafted for seasonal detox and vitality.",
    ingredients: ["Navara Rice", "Fenugreek", "Cumin", "Dry Ginger", "Ayurvedic Herbs"],
    benefits: ["Rejuvenates body", "Boosts immunity", "Soothes joint stiffness"],
    howToUse: "Cook 2 tablespoons with water or diluted milk. Add jaggery or salt to taste.",
    size: "300g",
    featured: false,
    bestseller: false,
    rating: 4.9,
    reviewCount: 52
  },

  // CREAMS & GELS
  {
    id: 9,
    slug: "skin-brightening-cream-oily",
    name: "Skin Brightening Cream Oily",
    category: "Creams",
    price: 399,
    image: skinBrightCream,
    shortDescription: "Lightweight matte-finish brightening cream for oily & acne-prone skin.",
    description: "Oil-free botanical cream formulation with neem, aloe, and licorice. Controls excess sebum while brightening acne marks.",
    ingredients: ["Licorice Extract", "Neem Leaf Water", "Aloe Vera", "Turmeric"],
    benefits: ["Sebum control", "Matte finish", "Lightens blemishes"],
    howToUse: "Apply on clean face twice daily.",
    size: "50g",
    featured: false,
    bestseller: false,
    rating: 4.6,
    reviewCount: 41
  },
  
  {
    id: 10,
    slug: "allergy-relief-balm",
    name: "Skin Allergy Relief Balm",
    category: "Creams",
    price: 349,
    image: allergyRelief,
    shortDescription: "Soothing herbal balm for rashes, itching, and dry skin allergies.",
    description: "Calming ointment with Wrightia Tinctoria (Stree Kutaja) and neem. Relieves skin irritation, redness, and itching quickly.",
    ingredients: ["Stree Kutaja", "Neem Oil", "Coconut Oil", "Beeswax"],
    benefits: ["Calms itching fast", "Soothes red rashes", "Protective herbal shield"],
    howToUse: "Dab directly onto affected skin 2-3 times daily.",
    size: "30g",
    featured: true,
    bestseller: true,
    rating: 4.9,
    reviewCount: 210
  },
  {
    id: 11,
    slug: "anti-pigmentation-gel",
    name: "Anti Pigmentation Gel",
    category: "Creams",
    price: 349,
    image: antiPig,
    shortDescription: "Targeted herbal gel to fade dark spots and uneven pigmentation.",
    description: "Pure botanical gel with Manjishta, papaya enzyme, and licorice. Penetrates deep to break down dark spot deposits.",
    ingredients: ["Manjishta", "Papaya Extract", "Licorice", "Aloe Gel"],
    benefits: ["Fades dark spots", "Evens out skin tone", "Cooling non-sticky feel"],
    howToUse: "Apply directly on dark spots and pigmented areas before sleeping.",
    size: "50g",
    featured: false,
    bestseller: false,
    rating: 4.7,
    reviewCount: 88
  },
  {
    id: 12,
    slug: "aloe-vera-gel",
    name: "Pure Aloe Vera Gel",
    category: "Creams",
    price: 160,
    image: aleovera,
    shortDescription: "99% pure fresh aloe leaf juice gel for skin & hair cooling.",
    description: "Multi-purpose hydrating gel harvested from fresh organically grown aloe vera leaves. Soothes sunburn, hydrates skin, and conditions hair.",
    ingredients: ["99% Pure Aloe Leaf Juice", "Vitamin E", "Natural Preservative"],
    benefits: ["Instant cooling", "Hydrates without greasiness", "Soothes skin irritations"],
    howToUse: "Apply generously to face, body, or hair as needed.",
    size: "150g",
    featured: false,
    bestseller: false,
    rating: 4.8,
    reviewCount: 115
  },
  {
    id: 13,
    slug: "anti-acne-gel",
    name: "Anti Acne Gel",
    category: "Creams",
    price: 299,
    image: antiAcne,
    shortDescription: "Spot corrector gel with neem, tea tree & holy basil extracts.",
    description: "Fast-acting herbal acne formula that combats pimple-causing bacteria, dries active pimples, and reduces acne scars.",
    ingredients: ["Neem Extract", "Tea Tree Leaf Oil", "Tulsi Water", "Green Tea"],
    benefits: ["Dries pimples overnight", "Reduces acne inflammation", "Prevents breakouts"],
    howToUse: "Apply directly onto active pimples after cleansing.",
    size: "30g",
    featured: true,
    bestseller: true,
    rating: 4.8,
    reviewCount: 175
  },

  // FACE WASH
  {
    id: 14,
    slug: "vitamin-c-gold-facewash",
    name: "Vitamin C Gold Face Wash",
    category: "Face Wash",
    price: 290,
    image: vitC,
    shortDescription: "Energizing facial cleanser with natural orange peel & turmeric.",
    description: "Gentle soap-free wash packed with natural Vitamin C and bio-gold minerals. Removes dirt while revealing instant glow.",
    ingredients: ["Orange Peel Extract", "Turmeric", "Saffron Water", "Botanical Cleansers"],
    benefits: ["Boosts natural glow", "Removes dead cells", "Non-drying lather"],
    howToUse: "Lather small amount with water, gently massage face, rinse off.",
    size: "100ml",
    featured: false,
    bestseller: false,
    rating: 4.7,
    reviewCount: 76
  },
  {
    id: 15,
    slug: "suvarna-kanti-facewash",
    name: "Suvarna Kanti Face Wash",
    category: "Face Wash",
    price: 375,
    image: suvarna,
    shortDescription: "Ayurvedic radiance cleanser infused with golden herbs & sandalwood.",
    description: "Classic Ayurvedic cleanser crafted according to traditional text recipes. Gently cleanses while enhancing natural facial luster.",
    ingredients: ["Red Sandalwood", "Saffron", "Rose Water", "Aloe Vera"],
    benefits: ["Radiant skin glow", "Deep cleansing", "Maintains skin moisture balance"],
    howToUse: "Use morning and evening for soft glowing skin.",
    size: "100ml",
    featured: true,
    bestseller: false,
    rating: 4.9,
    reviewCount: 92
  },
  {
    id: 16,
    slug: "gentle-glow-facewash",
    name: "Gentle Glow Face Wash (Sensitiveskin)",
    category: "Face Wash",
    price: 365,
    image: gentleGlow,
    shortDescription: "Soothes and hydrates sensitive skin with goat milk & lavender.",
    description: "Ultra-mild face cleanser ideal for sensitive or dry skin. Gently purifies pores without causing tightness.",
    ingredients: ["Goat Milk", "Lavender Flower Water", "Chamomile Extract"],
    benefits: ["Ultra-gentle formula", "Calms skin redness", "Leaves skin soft"],
    howToUse: "Apply to wet face, massage gently, rinse thoroughly.",
    size: "100ml",
    featured: false,
    bestseller: false,
    rating: 4.8,
    reviewCount: 54
  },
  {
    id: 17,
    slug: "saffron-facewash",
    name: "Saffron Face Wash",
    category: "Face Wash",
    price: 265,
    image: saffron,
    shortDescription: "Luxury Kashmiri saffron cleanser for complexion brightening.",
    description: "Pure Kashmiri kumkuma saffron blended with nagakesar and lotus extracts to clarify complexion and diminish dullness.",
    ingredients: ["Pure Kashmiri Saffron", "Lotus Flower Extract", "Nagakesar"],
    benefits: ["Clarifies skin tone", "Smooths skin texture", "Delicate floral scent"],
    howToUse: "Lather with water and massage face gently before rinsing.",
    size: "100ml",
    featured: false,
    bestseller: true,
    rating: 4.9,
    reviewCount: 140
  },
  {
    id: 18,
    slug: "charcoal-facewash",
    name: "Activated Charcoal Face Wash",
    category: "Face Wash",
    price: 239,
    image: charcoal,
    shortDescription: "Deep pore detox cleansing wash with activated coconut charcoal.",
    description: "Draws out environmental pollutants, excess oil, and impurities from deep within pores for fresh, clear skin.",
    ingredients: ["Activated Coconut Charcoal", "Tea Tree Oil", "Mint Extract"],
    benefits: ["Pore detox", "Controls excess shine", "Refreshes skin instantly"],
    howToUse: "Massage on wet face focusing on T-zone, then wash thoroughly.",
    size: "100ml",
    featured: false,
    bestseller: false,
    rating: 4.6,
    reviewCount: 67
  },

  // LIP BALM
  {
    id: 19,
    slug: "manjishta-lip-balm",
    name: "Manjishta Lip Balm",
    category: "Lip Balm",
    price: 320,
    image: lipbalm1Img,
    shortDescription: "Natural lip lightening balm with Manjishta root & shea butter.",
    description: "Ayurvedic lip care butter that lightens dark lips caused by sun or dryness, keeping them soft and hydrated all day.",
    ingredients: ["Manjishta Root Extract", "Shea Butter", "Almond Oil", "Beeswax"],
    benefits: ["Lightens lip pigmentation", "Intense 12hr moisture", "100% natural"],
    howToUse: "Apply evenly on lips whenever they feel dry.",
    size: "10g",
    featured: false,
    bestseller: true,
    rating: 4.8,
    reviewCount: 104
  },
  {
    id: 20,
    slug: "beetroot-lip-balm",
    name: "Beetroot Tinted Lip Balm",
    category: "Lip Balm",
    price: 320,
    image: lipbalm2Img,
    shortDescription: "Subtle rosy pink tinted lip balm made with fresh beetroot extract.",
    description: "Gives lips a natural healthy pink tint while nourishing them with coconut oil, cocoa butter, and real beetroot juice extract.",
    ingredients: ["Beetroot Juice Extract", "Cocoa Butter", "Virgin Coconut Oil"],
    benefits: ["Natural rosy tint", "Softens chapped lips", "No artificial colors"],
    howToUse: "Swipe onto lips for a touch of natural color and hydration.",
    size: "10g",
    featured: true,
    bestseller: true,
    rating: 4.9,
    reviewCount: 230
  },
  {
    id: 21,
    slug: "non-tinted-lip-balm",
    name: "Non-Tinted Herbal Lip Balm",
    category: "Lip Balm",
    price: 310,
    image: lipbalm3Img,
    shortDescription: "Pure unflavored clear moisture balm for unisex lip care.",
    description: "Classic rich moisture butter formula with kokum butter and vitamin E. Free from tints and fragrances.",
    ingredients: ["Kokum Butter", "Castor Oil", "Vitamin E", "Candelilla Wax"],
    benefits: ["Unflavored & clear", "Protects against chapping", "Deep moisture lock"],
    howToUse: "Apply generously on dry lips day or night.",
    size: "10g",
    featured: false,
    bestseller: false,
    rating: 4.7,
    reviewCount: 58
  },

  // HERBAL SOAPS
  {
    id: 22,
    slug: "beetroot-soap",
    name: "Beetroot Soap",
    category: "Soap",
    price: 110,
    image: beetrootImg,
    shortDescription: "Nourishing soap rich in antioxidants for soft glowing skin.",
    description: "Infused with pure beetroot extract to flush out impurities, nourish tired skin, and impart a subtle rosy glow.",
    ingredients: ["Beetroot Powder", "Glycerin", "Coconut Oil", "Essential Oils"],
    benefits: ["Rich in natural antioxidants", "Promotes healthy glow", "Gentle everyday wash"],
    howToUse: "Lather well on wet skin, then rinse thoroughly.",
    size: "100g",
    featured: true,
    bestseller: false,
    rating: 4.8,
    reviewCount: 89
  },
  {
    id: 23,
    slug: "carrot-soap",
    name: "Carrot Soap",
    category: "Soap",
    price: 110,
    image: carrotImg,
    shortDescription: "Beta-carotene rich soap for complexion brightening & rejuvenation.",
    description: "Packed with natural beta-carotene from fresh carrot purees. Helps repair skin damage and maintains elastic, glowing skin.",
    ingredients: ["Fresh Carrot Extract", "Cold Pressed Oils", "Vitamin E"],
    benefits: ["Repairs sun damage", "Rejuvenates dull skin", "Rich in Vitamin A"],
    howToUse: "Use during daily shower for vibrant skin.",
    size: "100g",
    featured: false,
    bestseller: false,
    rating: 4.7,
    reviewCount: 65
  },
  {
    id: 24,
    slug: "neem-soap",
    name: "Neem Soap",
    category: "Soap",
    price: 110,
    image: neemImg,
    shortDescription: "Antibacterial neem soap for acne-free, healthy skin.",
    description: "Purifying herbal soap handcrafted with fresh green neem leaf paste and cold-pressed neem seed oil. Combats pimples and body odor.",
    ingredients: ["Pure Neem Paste", "Neem Seed Oil", "Tulsi", "Coconut Oil"],
    benefits: ["Antibacterial & antifungal", "Clears pimples & body acne", "Protects skin barrier"],
    howToUse: "Lather and apply on body or face, rinse cleanly with water.",
    size: "100g",
    featured: true,
    bestseller: true,
    rating: 4.9,
    reviewCount: 198
  },
  {
    id: 25,
    slug: "hair-control-bar-soap",
    name: "Hair Control Bar Soap",
    category: "Soap",
    price: 130,
    image: hairControl,
    shortDescription: "Traditional herbal shampoo bar with hibiscus & Shikakai.",
    description: "Zero-waste herbal hair washing soap bar infused with hibiscus leaf juice, Shikakai, and Amla. Strengthens hair roots and reduces hair loss.",
    ingredients: ["Hibiscus Leaf Juice", "Shikakai", "Amla", "Reetha"],
    benefits: ["Strengthens hair roots", "Chemical-free hair wash", "Adds natural volume"],
    howToUse: "Rub bar onto wet hair to create rich foam, massage scalp, rinse thoroughly.",
    size: "100g",
    featured: false,
    bestseller: false,
    rating: 4.7,
    reviewCount: 78
  },
  {
    id: 26,
    slug: "petal-touch-soap",
    name: "Petal Touch Soap",
    category: "Soap",
    price: 110,
    image: petal,
    shortDescription: "Fragrant rose petal soap for velvety soft skin.",
    description: "Crafted with handpicked damask rose petals and soothing rose water. Envelops you in a calming floral aroma while moisturizing skin.",
    ingredients: ["Damask Rose Petals", "Rose Water", "Shea Butter"],
    benefits: ["Soothes dry skin", "Delicate natural rose fragrance", "Velvety skin texture"],
    howToUse: "Lather over body during bath.",
    size: "100g",
    featured: false,
    bestseller: false,
    rating: 4.8,
    reviewCount: 51
  },
  {
    id: 27,
    slug: "kuppaimani-soap",
    name: "Kuppaimani Soap",
    category: "Soap",
    price: 120,
    image: kuppaimeni,
    shortDescription: "Ayurvedic Indian Nettle soap for skin allergy & itch relief.",
    description: "Traditional South Indian herbal soap made with Kuppaimani (Indian Acalypha). Effective solution for skin rashes, itching, and eczema.",
    ingredients: ["Kuppaimani Leaf Extract", "Turmeric", "Cold Pressed Coconut Oil"],
    benefits: ["Relieves skin allergies", "Antifungal properties", "Gentle herbal care"],
    howToUse: "Use daily on affected skin areas during shower.",
    size: "100g",
    featured: false,
    bestseller: false,
    rating: 4.8,
    reviewCount: 84
  },
  {
    id: 28,
    slug: "manjishta-soap",
    name: "Manjishta Soap",
    category: "Soap",
    price: 110,
    image: manjishtasoap,
    shortDescription: "Blood purifying herbal root soap for clear complexion.",
    description: "Formulated with Manjishta (Indian Madder) root powder known in Ayurveda for purifying blood and clearing hyperpigmentation.",
    ingredients: ["Manjishta Powder", "Sesame Oil", "Licorice"],
    benefits: ["Evens complexion", "Reduces dark spots", "Detoxifies skin"],
    howToUse: "Lather and leave on skin for 1 minute before rinsing off.",
    size: "100g",
    featured: false,
    bestseller: false,
    rating: 4.7,
    reviewCount: 62
  },
  {
    id: 29,
    slug: "raktha-chandhanam-soap",
    name: "Raktha Chandhanam Soap",
    category: "Soap",
    price: 110,
    image: rakthaImg,
    shortDescription: "Red sandalwood soap for sun tan removal and radiant glow.",
    description: "Pure red sandalwood bar that removes sun tan, controls oiliness, and restores healthy radiance to sun-damaged skin.",
    ingredients: ["Pure Red Sandalwood Powder", "Virgin Coconut Oil", "Glycerin"],
    benefits: ["Removes sun tan", "Controls excess facial oil", "Soothes skin heat"],
    howToUse: "Lather on face and neck, wash gently with cool water.",
    size: "100g",
    featured: true,
    bestseller: true,
    rating: 4.9,
    reviewCount: 142
  },
  {
    id: 30,
    slug: "uluva-soap",
    name: "Uluva Soap (Fenugreek)",
    category: "Soap",
    price: 120,
    image: uluva,
    shortDescription: "Fenugreek seed soap for smooth skin texture & nourishment.",
    description: "Infused with sprouted fenugreek (uluva) paste rich in mucilage and protein to soften rough patches and hydrate skin.",
    ingredients: ["Fenugreek Seed Paste", "Sweet Almond Oil", "Coconut Base"],
    benefits: ["Smooths rough skin", "Locks in moisture", "Protein nourishment"],
    howToUse: "Lather gently over wet body, rinse thoroughly.",
    size: "100g",
    featured: false,
    bestseller: false,
    rating: 4.6,
    reviewCount: 39
  },
  {
    id: 31,
    slug: "velvet-glow-soap",
    name: "Velvet Glow Soap",
    category: "Soap",
    price: 110,
    image: velvet,
    shortDescription: "Luxury cream & botanical oil soap for silky smooth texture.",
    description: "Blends whipped goat milk with almond butter for an opulent, silky bath experience that leaves skin velvety soft.",
    ingredients: ["Goat Milk", "Almond Butter", "Jojoba Oil"],
    benefits: ["Silky skin finish", "Rich creamy lather", "Deep moisture"],
    howToUse: "Use daily for a spa-like cleansing experience.",
    size: "100g",
    featured: false,
    bestseller: false,
    rating: 4.8,
    reviewCount: 47
  },
  {
    id: 32,
    slug: "thaalli-soap",
    name: "Thaalli Soap",
    category: "Soap",
    price: 120,
    image: thaalliImg,
    shortDescription: "Traditional Kerala hibiscus leaf shampoo & body cleansing bar.",
    description: "Authentic Thaalli formulation using fresh crushed red hibiscus leaves. Cools the scalp, clears dandruff, and conditions skin.",
    ingredients: ["Red Hibiscus Leaf Extract", "Aloe Leaf Juice", "Coconut Oil"],
    benefits: ["Cools scalp & head heat", "Natural conditioner", "Soothes dry skin"],
    howToUse: "Apply directly on wet scalp and body, work into lather and wash.",
    size: "100g",
    featured: true,
    bestseller: false,
    rating: 4.9,
    reviewCount: 110
  },

  // OIL
  {
    id: 33,
    slug: "black-seed-oil",
    name: "Pure Black Seed Oil (Kalonji)",
    category: "Oil",
    price: 250,
    image: blackSeed,
    shortDescription: "Cold-pressed Nigella Sativa oil for scalp health & hair strength.",
    description: "100% pure cold-pressed black seed oil rich in thymoquinone. Stimulates dormant hair follicles, combats scalp infections, and thickens hair.",
    ingredients: ["100% Pure Cold Pressed Kalonji Oil"],
    benefits: ["Strengthens hair roots", "Protects scalp against infections", "Promotes hair density"],
    howToUse: "Warm a few drops in palm, massage gently into scalp 1 hour before hair wash.",
    size: "100ml",
    featured: false,
    bestseller: false,
    rating: 4.8,
    reviewCount: 86
  },
  {
    id: 34,
    slug: "hair-care-oil",
    name: "Aysha's Ayurvedic Hair Care Oil",
    category: "Oil",
    price: 280,
    image: hairCareOil,
    shortDescription: "Authentic herbal hair elixir with Bhringraj, Amla & Coconut oil.",
    description: "Traditional Ayurvedic herbal hair tonic slow-cooked with 18 herbs including Bhringraj, Neeli, Amla, and Brahmi in pure coconut oil. Stops hair fall and cures dandruff.",
    ingredients: ["Bhringraj", "Neeli Leaf", "Amla", "Brahmi", "Curry Leaves", "Coconut Oil"],
    benefits: ["Stops excessive hair fall", "Eliminates scalp dandruff", "Encourages new hair growth"],
    howToUse: "Apply generously to hair scalp 3 times a week, leave for 30-45 minutes before washing.",
    size: "200ml",
    featured: true,
    bestseller: true,
    rating: 5.0,
    reviewCount: 340
  }
];

// Helper functions for catalog querying
export const getFeaturedProducts = () => PRODUCTS.filter(p => p.featured);
export const getBestsellers = () => PRODUCTS.filter(p => p.bestseller);
export const getProductBySlug = (slug) => PRODUCTS.find(p => p.slug === slug);
export const getProductsByCategory = (cat) => cat === "All" ? PRODUCTS : PRODUCTS.filter(p => p.category === cat);
