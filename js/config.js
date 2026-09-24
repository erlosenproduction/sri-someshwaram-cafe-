/**
 * =========================================================================
 * CONFIG.JS - WEBSITE REBRANDING CONFIGURATION & ENGINE
 * =========================================================================
 * 
 * INSTRUCTIONS:
 * 1. Modify Section 1 (Data Entry) to update branding, styles, images, and content.
 * 2. Include this script at the end of index.html after index.js:
 *    
 * =========================================================================
 */

/* =========================================================================
   SECTION 1: DATA ENTRY CONFIGURATION
   ========================================================================= */
const REBRAND_CONFIG = {
  // --- BRAND IDENTIFICATION & META DATA ---
  brand: {
    name: "Sri Someshwaram",
    suffix: " Cafe",
    tagline: "Authentic South Indian Delicacies & Filter Coffee",
    description: "Sri Someshwaram Cafe offering delicious, authentic South Indian breakfast, crispy dosas, fluffy idlis, and traditional filter coffee in Bengaluru.",
    keywords: "someshwaram cafe, south indian breakfast, dosa, idli, vada, filter coffee, benne dosa, marathahalli cafe, bangalore vegetarian food",
    themeColor: "#0d0e12",
    domain: "https://www.instagram.com/sri_someshwaram_cafe",
    ogImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnCCX2IfgdPF_Jr8AdGm9VseuSEpvswb_8FnSryoTtRTu2gPOmGCyhuyUFAgCIwmhME-UKrXDpLQ_L4YfLgH36GGdea3NHmOmhdfF_TQ4mRmL_mo8qKpqN9DvVlwQpQQMRQ01I11_0jdITc=s680-w680-h510-rw",
    faviconEmoji: "☕",
    whatsappNumber: "918951715477"
  },

  // --- GLOBAL STYLES & THEMING ---
  styles: {
    colors: {
      bg: "#0d0e12",
      bgCard: "#15181e",
      bgLight: "#1c2028",
      primary: "#d4a373",
      primaryHover: "#faedcd",
      text: "#e0e2ec",
      textMuted: "#9aa0b4",
      accent: "#2c313c"
    },
    fonts: {
      heading: "'Syne', sans-serif",
      body: "'Plus Jakarta Sans', sans-serif"
    }
  },

  // --- HERO SECTION ---
  hero: {
    subtitle: "Authentic South Indian Flavors",
    title: "Taste the Pure Tradition of South India",
    description: "Savor crispy ghee & benne dosas, melt-in-mouth idlis, and freshly brewed filter coffee made with love and pristine hygiene.",
    bgImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnCCX2IfgdPF_Jr8AdGm9VseuSEpvswb_8FnSryoTtRTu2gPOmGCyhuyUFAgCIwmhME-UKrXDpLQ_L4YfLgH36GGdea3NHmOmhdfF_TQ4mRmL_mo8qKpqN9DvVlwQpQQMRQ01I11_0jdITc=s680-w680-h510-rw",
    stats: [
      { value: "100%", label: "Pure Vegetarian" },
      { value: "6:30 AM", label: "Opens Daily till 1 AM" },
      { value: "5.0 ★", label: "Customer Loved" }
    ]
  },

  // --- ABOUT US SECTION ---
  about: {
    subtitle: "About Us",
    title: "Heritage, Taste & Unmatched Quality",
    paragraphs: [
      "Sri Someshwaram Cafe brings you authentic, wholesome, and delicious South Indian cuisine prepared with the finest ingredients and traditional recipes.",
      "Located in Aswath Nagar, Marathahalli, we take pride in serving delicious crispy dosas, steaming hot idlis, aromatic filter coffee, and delicious sweet treats in a clean, hygienic, and welcoming environment."
    ],
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkxBqJw8GOkBDGEDG57EjpYorRPaQeIyJ3l9XzMAEkp9Csdnk0-CO0Do21HQaQret3HagYnLgALlSIp0Cdas4p9LRs3zekqYSNGrpqf3OZxJi-5jfZfla6ebt2ZK622L8x4hDVn2khi5Vfg=s680-w680-h510-rw",
    imageAlt: "Sri Someshwaram Cafe Interior and Food Presentation",
    experienceValue: "100%",
    experienceLabel: "Authentic Taste"
  },

  // --- SPECIALS / NEWLY ADDED FOOD ---
  specials: {
    subtitle: "Fresh From Kitchen",
    title: "Chef's Special Picks",
    badge: "Must Try",
    description: "Signature South Indian delicacies prepared fresh with genuine butter, ghee, and traditional spices.",
    items: [
      {
        badge: "Chef's Special",
        img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=600",
        alt: "Ghee Garlic Roast Pudi Masala Dosa",
        diet: "veg",
        title: "Ghee Garlic Roast Pudi Masala Dosa",
        price: "₹189",
        desc: "Crispy golden dosa roasted with pure ghee, garlic paste, authentic spice pudi, and flavorful potato masala."
      },
      {
        badge: "Popular",
        img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=600",
        alt: "Ghee Pudi Thatte Idli",
        diet: "veg",
        title: "Ghee Pudi Thatte Idli",
        price: "₹99",
        desc: "Soft plate-sized traditional Thatte Idli generously drizzled with warm aromatic ghee and spicy gun powder."
      },
      {
        badge: "Bestseller",
        img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600",
        alt: "Authentic South Indian Filter Coffee",
        diet: "veg",
        title: "Traditional Filter Coffee",
        price: "₹69",
        desc: "Rich, aromatic, freshly brewed South Indian chicory filter coffee served hot in classic brass cup & dabarah."
      }
    ]
  },

  // --- OFFERS SECTION ---
  offers: {
    subtitle: "Exclusive Savings",
    title: "Current Offers",
    items: [
      {
        tag: "BREAKFAST COMBO",
        tag: "MORNING SPECIAL",
        title: "Idli Vada + Filter Coffee",
        desc: "Start your day right with a steaming hot Idli Vada combo paired with our iconic filter coffee.",
        code: "SOMESHWARAM10",
        highlight: false
      },
      {
        tag: "WHATSAPP SPECIAL",
        title: "Flat 10% OFF on Orders",
        desc: "Order directly via WhatsApp for quick pickup or delivery and enjoy exclusive instant discount.",
        code: "DIRECT10",
        highlight: true
      },
      {
        tag: "FAMILY FEAST",
        title: "Dosa & Beverage Combo",
        desc: "Order any two special Benne/Ghee Dosas and get traditional Pineapple Sheera at special price.",
        code: "SWEETDEAL",
        highlight: false
      }
    ]
  },

  // --- FEATURED MENU SECTION ---
  menu: {
    subtitle: "Our Full Menu",
    title: "Freshly Prepared Delicacies",
    pdfUrl: "assets/someshwaram-menu.pdf",
    pdfFilename: "Sri_Someshwaram_Cafe_Menu.pdf",
    categories: [
      { id: "all", label: "All Items", active: true },
      { id: "dosa", label: "Someshwaram Dosa", active: false },
      { id: "idli-vada", label: "Idli & Vada", active: false },
      { id: "beverages-sweet", label: "Beverages & Sweet", active: false }
    ],
    items: [
      // --- DOSAS ---
      {
        category: "dosa",
        img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=600",
        title: "Ghee Plain Dosa",
        price: "₹129",
        diet: "veg",
        desc: "Classic golden crisp dosa roasted with pure aromatic ghee, served with chutneys and sambar.",
        swiggyUrl: "https://www.swiggy.com/city/ahmedabad/the-someshwaram-cafe-bopal-rest1272263",
        zomatoUrl: "https://www.zomato.com/bangalore/the-someshwaram-cafe-new-bel-road-bangalore?amp=1"
      },
      {
        category: "dosa",
        img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=600",
        title: "Ghee Masala Dosa",
        price: "₹139",
        diet: "veg",
        desc: "Crispy dosa smeared with pure ghee and stuffed with spiced potato masala.",
        swiggyUrl: "https://www.swiggy.com/city/ahmedabad/the-someshwaram-cafe-bopal-rest1272263",
        zomatoUrl: "https://www.zomato.com/bangalore/the-someshwaram-cafe-new-bel-road-bangalore?amp=1"
      },
      {
        category: "dosa",
        img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=600",
        title: "Ghee Pudi Dosa",
        price: "₹149",
        diet: "veg",
        desc: "Toasted with rich ghee and sprinkled with spicy house-blend chutney pudi.",
        swiggyUrl: "https://www.swiggy.com/city/ahmedabad/the-someshwaram-cafe-bopal-rest1272263",
        zomatoUrl: "https://www.zomato.com/bangalore/the-someshwaram-cafe-new-bel-road-bangalore?amp=1"
      },
      {
        category: "dosa",
        img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=600",
        title: "Ghee Pudi Masala Dosa",
        price: "₹159",
        diet: "veg",
        desc: "Flavorful blend of aromatic ghee, spicy chutney powder, and signature potato filling.",
        swiggyUrl: "https://www.swiggy.com/city/ahmedabad/the-someshwaram-cafe-bopal-rest1272263",
        zomatoUrl: "https://www.zomato.com/bangalore/the-someshwaram-cafe-new-bel-road-bangalore?amp=1"
      },
      {
        category: "dosa",
        img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=600",
        title: "Ghee Garlic Roast Plain Dosa",
        price: "₹169",
        diet: "veg",
        desc: "Infused with savory garlic roast flavor and crisp ghee texture.",
        swiggyUrl: "https://www.swiggy.com/city/ahmedabad/the-someshwaram-cafe-bopal-rest1272263",
        zomatoUrl: "https://www.zomato.com/bangalore/the-someshwaram-cafe-new-bel-road-bangalore?amp=1"
      },
      {
        category: "dosa",
        img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=600",
        title: "Ghee Garlic Roast Masala Dosa",
        price: "₹179",
        diet: "veg",
        desc: "Roasted with rich ghee and fresh garlic paste, filled with savory potato masala.",
        swiggyUrl: "https://www.swiggy.com/city/ahmedabad/the-someshwaram-cafe-bopal-rest1272263",
        zomatoUrl: "https://www.zomato.com/bangalore/the-someshwaram-cafe-new-bel-road-bangalore?amp=1"
      },
      {
        category: "dosa",
        img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=600",
        title: "Ghee Garlic Roast Pudi Masala Dosa",
        price: "₹189",
        diet: "veg",
        desc: "Loaded with ghee, garlic roast spice, spicy pudi, and signature potato masala.",
        swiggyUrl: "https://www.swiggy.com/city/ahmedabad/the-someshwaram-cafe-bopal-rest1272263",
        zomatoUrl: "https://www.zomato.com/bangalore/the-someshwaram-cafe-new-bel-road-bangalore?amp=1"
      },
      {
        category: "dosa",
        img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=600",
        title: "Benne Plain Dosa",
        price: "₹149",
        diet: "veg",
        desc: "Authentic Davanagere style crisp dosa topped with dollops of fresh white butter.",
        swiggyUrl: "https://www.swiggy.com/city/ahmedabad/the-someshwaram-cafe-bopal-rest1272263",
        zomatoUrl: "https://www.zomato.com/bangalore/the-someshwaram-cafe-new-bel-road-bangalore?amp=1"
      },
      {
        category: "dosa",
        img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=600",
        title: "Benne Pudi Dosa",
        price: "₹159",
        diet: "veg",
        desc: "Delicious butter dosa layered with aromatic spicy gun powder.",
        swiggyUrl: "https://www.swiggy.com/city/ahmedabad/the-someshwaram-cafe-bopal-rest1272263",
        zomatoUrl: "https://www.zomato.com/bangalore/the-someshwaram-cafe-new-bel-road-bangalore?amp=1"
      },
      {
        category: "dosa",
        img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=600",
        title: "Benne Masala Dosa",
        price: "₹169",
        diet: "veg",
        desc: "Rich butter-roasted dosa stuffed with soft, spiced potato filling.",
        swiggyUrl: "https://www.swiggy.com/city/ahmedabad/the-someshwaram-cafe-bopal-rest1272263",
        zomatoUrl: "https://www.zomato.com/bangalore/the-someshwaram-cafe-new-bel-road-bangalore?amp=1"
      },
      {
        category: "dosa",
        img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=600",
        title: "Benne Pudi Masala Dosa",
        price: "₹179",
        diet: "veg",
        desc: "Sumptuous butter dosa coated in chutney pudi and packed with masala.",
        swiggyUrl: "https://www.swiggy.com/city/ahmedabad/the-someshwaram-cafe-bopal-rest1272263",
        zomatoUrl: "https://www.zomato.com/bangalore/the-someshwaram-cafe-new-bel-road-bangalore?amp=1"
      },
      {
        category: "dosa",
        img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=600",
        title: "Benne Garlic Roast Plain Dosa",
        price: "₹179",
        diet: "veg",
        desc: "Crispy butter dosa infused with fragrant roasted garlic.",
        swiggyUrl: "https://www.swiggy.com/city/ahmedabad/the-someshwaram-cafe-bopal-rest1272263",
        zomatoUrl: "https://www.zomato.com/bangalore/the-someshwaram-cafe-new-bel-road-bangalore?amp=1"
      },
      {
        category: "dosa",
        img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=600",
        title: "Benne Garlic Roast Masala Dosa",
        price: "₹189",
        diet: "veg",
        desc: "Flavor-packed butter garlic dosa stuffed with classic potato masala.",
        swiggyUrl: "https://www.swiggy.com/city/ahmedabad/the-someshwaram-cafe-bopal-rest1272263",
        zomatoUrl: "https://www.zomato.com/bangalore/the-someshwaram-cafe-new-bel-road-bangalore?amp=1"
      },
      {
        category: "dosa",
        img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=600",
        title: "Benne Garlic Roast Pudi Masala Dosa",
        price: "₹199",
        diet: "veg",
        desc: "The ultimate specialty dosa combining butter, garlic roast, spice pudi, and potato masala.",
        swiggyUrl: "https://www.swiggy.com/city/ahmedabad/the-someshwaram-cafe-bopal-rest1272263",
        zomatoUrl: "https://www.zomato.com/bangalore/the-someshwaram-cafe-new-bel-road-bangalore?amp=1"
      },

      // --- IDLI & VADA ---
      {
        category: "idli-vada",
        img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=600",
        title: "Idli (2pcs)",
        price: "₹69",
        diet: "veg",
        desc: "Steamed fluffy rice cakes served soft and hot with fresh coconut chutney and sambar.",
        swiggyUrl: "https://www.swiggy.com/city/ahmedabad/the-someshwaram-cafe-bopal-rest1272263",
        zomatoUrl: "https://www.zomato.com/bangalore/the-someshwaram-cafe-new-bel-road-bangalore?amp=1"
      },
      {
        category: "idli-vada",
        img: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=600",
        title: "Vada (2pcs)",
        price: "₹79",
        diet: "veg",
        desc: "Crispy fried savory lentil doughnuts, golden on the outside and soft inside.",
        swiggyUrl: "https://www.swiggy.com/city/ahmedabad/the-someshwaram-cafe-bopal-rest1272263",
        zomatoUrl: "https://www.zomato.com/bangalore/the-someshwaram-cafe-new-bel-road-bangalore?amp=1"
      },
      {
        category: "idli-vada",
        img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=600",
        title: "Idli Vada",
        price: "₹79",
        diet: "veg",
        desc: "The classic South Indian pair - 1 soft steamed idli and 1 crispy medu vada.",
        swiggyUrl: "https://www.swiggy.com/city/ahmedabad/the-someshwaram-cafe-bopal-rest1272263",
        zomatoUrl: "https://www.zomato.com/bangalore/the-someshwaram-cafe-new-bel-road-bangalore?amp=1"
      },
      {
        category: "idli-vada",
        img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=600",
        title: "Plain Thatte Idli",
        price: "₹79",
        diet: "veg",
        desc: "Traditional large, flat plate idli, exceptionally soft and served hot.",
        swiggyUrl: "https://www.swiggy.com/city/ahmedabad/the-someshwaram-cafe-bopal-rest1272263",
        zomatoUrl: "https://www.zomato.com/bangalore/the-someshwaram-cafe-new-bel-road-bangalore?amp=1"
      },
      {
        category: "idli-vada",
        img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=600",
        title: "Ghee Pudi Thatte Idli",
        price: "₹99",
        diet: "veg",
        desc: "Soft Thatte Idli topped generously with pure ghee and homemade chutney pudi.",
        swiggyUrl: "https://www.swiggy.com/city/ahmedabad/the-someshwaram-cafe-bopal-rest1272263",
        zomatoUrl: "https://www.zomato.com/bangalore/the-someshwaram-cafe-new-bel-road-bangalore?amp=1"
      },

      // --- BEVERAGES & SWEET ---
      {
        category: "beverages-sweet",
        img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600",
        title: "Filter Coffee",
        price: "₹69",
        diet: "veg",
        desc: "Authentic, freshly brewed frothy South Indian filter coffee.",
        swiggyUrl: "https://www.swiggy.com/city/ahmedabad/the-someshwaram-cafe-bopal-rest1272263",
        zomatoUrl: "https://www.zomato.com/bangalore/the-someshwaram-cafe-new-bel-road-bangalore?amp=1"
      },
      {
        category: "beverages-sweet",
        img: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=600",
        title: "Pineapple Sheera",
        price: "₹89",
        diet: "veg",
        desc: "Rich, aromatic semolina pudding cooked with real pineapple, pure ghee, and nuts.",
        swiggyUrl: "https://www.swiggy.com/city/ahmedabad/the-someshwaram-cafe-bopal-rest1272263",
        zomatoUrl: "https://www.zomato.com/bangalore/the-someshwaram-cafe-new-bel-road-bangalore?amp=1"
      }
    ]
  },

  // --- REVIEWS & TESTIMONIALS ---
  reviews: {
    subtitle: "Testimonials",
    title: "What Our Guests Say",
    items: [
      {
        stars: 5,
        text: "\"Good quality food and service also nice over love to visit here again 😋\"",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
        name: "Veena Angadi",
        role: "Local Foodie"
      },
      {
        stars: 5,
        text: "\"Guess what, This is one of the best vegetarian food hotel that we had, All the food are so tastier and delicious, staff are well behaved and responsive. Good ambience, clean and hygiene.\"",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
        name: "Pradeep Gouda",
        role: "Local Guide"
      },
      {
        stars: 5,
        text: "\"It was a pleasure to eat here and the food is very delicious and tasty also the service is soo good especially Mr. Reddy and the hygiene and cleanliness is very good 👍😊\"",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
        name: "Divyanshi",
        role: "Regular Visitor"
      }
    ],
    googleCta: {
      title: "Enjoyed your meal at Sri Someshwaram?",
      desc: "Help others discover authentic South Indian taste by leaving a review on Google Maps!",
      url: "https://maps.google.com/?q=Sri+Someshwaram+Aswath+Nagar+Marathahalli"
    }
  },

  // --- GALLERY SECTION ---
  gallery: {
    subtitle: "Visual Experience",
    title: "Life Inside Sri Someshwaram",
    images: [
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn3VaPTovJIXaPUV1hRMC55rBbjtBtWC8IfCZxNVHOHjoPIpIjlGjyqxZ5BV7v-d4YvdOTBzVDWOaYacJuR0NdBXD_b1GfSr3zG6ebHYJjjSBrnhkYWZ76V2-dB6QSWFcRsTP1j2bLNwFM=w141-h101-n-k-no-nu", alt: "Sri Someshwaram Ambience & Seating" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnyYtqMsVip_4UgI17-SWVMbtbONmdAhedUWQfvI9o6bRzQtZKLrnYQi7lY1j22c77XCV6keyH6wE0by4Ur48dGj4K2Gm2iRa0kEZn9jGE9rQa0ouazEPjv8-GqJsR3VUPfmyXGXTnVqSDy=w141-h101-n-k-no-nu", alt: "Delicious South Indian Breakfast Spread" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmy11_sJdJixMl0rtBLPWSNU48A9_36fJIuddt4U7BI3GPLQV_oaglzCq7w_7PwHx3KCg3srGZuBJGNC-Yt20C8y6JNHgg05UFVKp2tPPGcNSRrk5tWX_aULKXLbmFF3MpRpD-WooutW5s=w141-h101-n-k-no-nu", alt: "Fresh Filter Coffee Preparation" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkEt92LeR--zkF2_wL67fl1WIHIBowE2jWgyex2dVr1VnX8p-SsnsaSCr2u7E1f0p2V5f1MIGx9g2-1fUjhXl9M27AgfLJ-75qYy6au9A2JWeKYYClDGGhPxVpW2CIavE2P3QHAEl73naT4=w141-h101-n-k-no-nu", alt: "Hot Crispy Dosas & Idlis" }
    ]
  },

  // --- LOCATION & CONTACT SECTION ---
  location: {
    subtitle: "Location & Hours",
    title: "Visit Sri Someshwaram Cafe",
    description: "Located conveniently in Marathahalli, Bengaluru. Drop by for early morning hot breakfast or late night cravings!",
    address: "Subbaiah Reddy Colony, Aswath Nagar, Marathahalli, Bengaluru, Karnataka 560037",
    hours: [
      "Monday - Sunday: 6:30 AM - 1:00 AM"
    ],
    email: "contact@srisomeshwaram.com",
    phone: "+91 89517 15477",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.102636733221!2d77.6983893!3d12.9653155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1322238495cd%3A0xa64ee933a36dbad7!2sSri%20Someshwaram%20Cafe!5e0!3m2!1sen!2sin!4v1711283000000!5m2!1sen!2sin"
  },

  // --- FOOTER SECTION ---
  footer: {
    description: "Serving authentic South Indian delicacies, crispy dosas, fluffy idlis, and traditional filter coffee with warmth and hygiene.",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/sri_someshwaram_cafe?stkn=cjZuaTR3dmJ5aHdz", iconClass: "ph-instagram-logo" },
      { platform: "zomato", url: "https://www.zomato.com/bangalore/the-someshwaram-cafe-new-bel-road-bangalore?amp=1", iconClass: "ph-fork-knife" },
      { platform: "swiggy", url: "https://www.swiggy.com/city/ahmedabad/the-someshwaram-cafe-bopal-rest1272263", iconClass: "ph-moped" }
    ],
    copyright: "© 2026 Sri Someshwaram Cafe. All rights reserved."
  },

  // --- WI-FI MODAL SETTINGS ---
  wifi: {
    ssid: "Sri_Someshwaram_Guest_WiFi",
    password: "someshwaram2026"
  }
};

/* =========================================================================
   SECTION 2: REBRANDING ENGINE CODE
   ========================================================================= */
(function initRebrandingEngine(cfg) {
  'use strict';

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element|null}
   */
  const $ = (selector, ctx = document) => ctx.querySelector(selector);

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element[]}
   */
  const $$ = (selector, ctx = document) => Array.from(ctx.querySelectorAll(selector));

  function applyStyles() {
    const root = document.documentElement;
    if (cfg.styles?.colors) {
      if (cfg.styles.colors.bg) root.style.setProperty('--color-bg', cfg.styles.colors.bg);
      if (cfg.styles.colors.bgCard) root.style.setProperty('--color-bg-card', cfg.styles.colors.bgCard);
      if (cfg.styles.colors.bgLight) root.style.setProperty('--color-bg-light', cfg.styles.colors.bgLight);
      if (cfg.styles.colors.primary) root.style.setProperty('--color-primary', cfg.styles.colors.primary);
      if (cfg.styles.colors.primaryHover) root.style.setProperty('--color-primary-hover', cfg.styles.colors.primaryHover);
      if (cfg.styles.colors.text) root.style.setProperty('--color-text', cfg.styles.colors.text);
      if (cfg.styles.colors.textMuted) root.style.setProperty('--color-text-muted', cfg.styles.colors.textMuted);
      if (cfg.styles.colors.accent) root.style.setProperty('--color-accent', cfg.styles.colors.accent);
    }
    if (cfg.styles?.fonts) {
      if (cfg.styles.fonts.heading) root.style.setProperty('--font-heading', cfg.styles.fonts.heading);
      if (cfg.styles.fonts.body) root.style.setProperty('--font-body', cfg.styles.fonts.body);
    }
  }

  function applyMeta() {
    if (!cfg.brand) return;
    
    const fullTitle = `${cfg.brand.name} | ${cfg.brand.tagline}`;
    document.title = fullTitle;

    /**
     * @param {string} selector
     * @param {string} content
     */
    const setMeta = (selector, content) => {
      const el = $(selector);
      if (el) el.setAttribute('content', content);
    };

    setMeta('meta[name="title"]', fullTitle);
    setMeta('meta[name="description"]', cfg.brand.description);
    setMeta('meta[name="keywords"]', cfg.brand.keywords);
    setMeta('meta[name="theme-color"]', cfg.brand.themeColor);

    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', cfg.brand.description);
    setMeta('meta[property="og:image"]', cfg.brand.ogImage);
    setMeta('meta[property="og:url"]', cfg.brand.domain);
    setMeta('meta[property="og:site_name"]', `${cfg.brand.name} Cafe`);

    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', cfg.brand.description);
    setMeta('meta[name="twitter:image"]', cfg.brand.ogImage);
    setMeta('meta[name="twitter:url"]', cfg.brand.domain);

    const favicon = $('link[rel="icon"]');
    if (favicon && cfg.brand.faviconEmoji) {
      favicon.setAttribute('href', `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${cfg.brand.faviconEmoji}</text></svg>`);
    }

    const schemaScript = $('script[type="application/ld+json"]');
    if (schemaScript) {
      try {
        const schemaData = JSON.parse(schemaScript.textContent);
        schemaData.name = `${cfg.brand.name} ${cfg.brand.tagline}`;
        schemaData.image = cfg.brand.ogImage;
        schemaData.url = cfg.brand.domain;
        schemaData["@id"] = cfg.brand.domain;
        if (cfg.location) {
          schemaData.telephone = cfg.location.phone;
        }
        schemaScript.textContent = JSON.stringify(schemaData, null, 2);
      } catch (err) {
        console.warn("Failed to update JSON-LD schema:", err);
      }
    }
  }

  function applyBrandLogos() {
    $$('.logo').forEach(logoEl => {
      if (logoEl.childNodes.length > 0) {
        logoEl.childNodes[0].nodeValue = cfg.brand.name;
      } else {
        logoEl.textContent = cfg.brand.name;
      }
      let span = $('span', logoEl);
      if (!span && cfg.brand.suffix) {
        span = document.createElement('span');
        logoEl.appendChild(span);
      }
      if (span) span.textContent = cfg.brand.suffix;
      logoEl.setAttribute('aria-label', `${cfg.brand.name} Home`);
    });
  }

  function applyHero() {
    if (!cfg.hero) return;
    const heroSec = $('#home');
    if (heroSec && cfg.hero.bgImage) {
      heroSec.style.background = `linear-gradient(to right, rgba(13,14,18,0.95), rgba(13,14,18,0.6)), url('${cfg.hero.bgImage}') center/cover no-repeat`;
    }
    
    const sub = $('.hero-content .section-subtitle');
    if (sub) sub.textContent = cfg.hero.subtitle;
    
    const title = $('.hero-title');
    if (title) title.textContent = cfg.hero.title;
    
    const desc = $('.hero-description');
    if (desc) desc.textContent = cfg.hero.description;

    const statsContainer = $('.hero-stats');
    if (statsContainer && cfg.hero.stats) {
      statsContainer.innerHTML = cfg.hero.stats.map(s => `
        <div class="stat-item">
          <p class="stat-value">${s.value}</p>
          <p class="stat-label">${s.label}</p>
        </div>
      `).join('');
    }
  }

  function applyAbout() {
    if (!cfg.about) return;
    const aboutSec = $('#about');
    if (!aboutSec) return;

    const img = $('.about-img', aboutSec);
    if (img) {
      img.src = cfg.about.image;
      img.alt = cfg.about.imageAlt;
    }

    const badge = $('.about-experience-badge', aboutSec);
    if (badge) {
      badge.innerHTML = `
        <div style="font-size: 1.8rem; line-height: 1;">${cfg.about.experienceValue}</div>
        <div style="font-size: 0.8rem;">${cfg.about.experienceLabel}</div>
      `;
    }

    const sub = $('.section-subtitle', aboutSec);
    if (sub) sub.textContent = cfg.about.subtitle;

    const title = $('.section-title', aboutSec);     if (title) title.textContent = cfg.about.title;      const textMuted = $$('.text-muted', aboutSec);
    if (cfg.about.paragraphs && cfg.about.paragraphs.length >= 2) {
      if (textMuted[0]) textMuted[0].textContent = cfg.about.paragraphs[0];
      if (textMuted[1]) textMuted[1].textContent = cfg.about.paragraphs[1];
    }
  }

  function applySpecials() {
    if (!cfg.specials) return;
    const specSec = $('#new-food');
    if (!specSec) return;

    const sub = $('.section-subtitle', specSec);
    if (sub) sub.textContent = cfg.specials.subtitle;

    const title = $('.section-title', specSec);
    if (title) {
      title.innerHTML = `${cfg.specials.title} <span class="badge-new">${cfg.specials.badge}</span>`;
    }

    const desc = $('.text-muted', specSec);
    if (desc) desc.textContent = cfg.specials.description;

    const grid = $('.new-items-grid', specSec);
    if (grid && cfg.specials.items) {
      grid.innerHTML = cfg.specials.items.map(item => `
        <article class="new-food-card">
          <div class="new-food-img-wrapper">
            <span class="new-food-badge">${item.badge}</span>
            <img src="${item.img}" alt="${item.alt}" loading="lazy" decoding="async">
          </div>
          <div class="new-food-content">
            <div class="new-food-header">
              <h3 class="new-food-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="new-food-price">${item.price}</span>
            </div>
            <p class="new-food-desc">${item.desc}</p>
            <a href="#location" class="btn btn-outline btn-compact">Order Fresh</a>
          </div>
        </article>
      `).join('');
    }
  }

  function applyOffers() {
    if (!cfg.offers) return;
    const offerSec = $('#offers');
    if (!offerSec) return;

    const sub = $('.section-subtitle', offerSec);
    if (sub) sub.textContent = cfg.offers.subtitle;

    const title = $('.section-title', offerSec);
    if (title) title.textContent = cfg.offers.title;

    const grid = $('.offers-grid', offerSec);
    if (grid && cfg.offers.items) {
      grid.innerHTML = cfg.offers.items.map(o => `
        <div class="offer-card ${o.highlight ? 'highlight-offer' : ''}">
          <div class="offer-tag">${o.tag}</div>
          <h3 class="offer-title">${o.title}</h3>
          <p class="offer-desc">${o.desc}</p>
          <div class="offer-code-wrapper">
            <span>Code: <strong>${o.code}</strong></span>
          </div>
        </div>
      `).join('');
    }
  }

  function applyMenu() {
    if (!cfg.menu) return;
    const menuSec = $('#menu');
    if (!menuSec) return;

    const sub = $('.section-subtitle', menuSec);
    if (sub) sub.textContent = cfg.menu.subtitle;

    const title = $('.section-title', menuSec);
    if (title) title.textContent = cfg.menu.title;

    const dlBtn = $('.btn-download-menu', menuSec);
    if (dlBtn) {
      dlBtn.setAttribute('href', cfg.menu.pdfUrl);
      dlBtn.setAttribute('download', cfg.menu.pdfFilename);
    }

    const catContainer = $('.category-filter-container', menuSec);
    if (catContainer && cfg.menu.categories) {
      catContainer.innerHTML = cfg.menu.categories.map(c => `
        <button class="category-btn ${c.active ? 'active' : ''}" role="tab" aria-selected="${c.active}" aria-controls="menu-grid" data-filter="${c.id}">${c.label}</button>
      `).join('');
    }

    const menuGrid = $('#menu-grid');
    if (menuGrid && cfg.menu.items) {
      menuGrid.innerHTML = cfg.menu.items.map(item => `
        <article class="food-card" data-category="${item.category}">
          <div class="food-card-img-wrapper">
            <img src="${item.img}" alt="${item.title}" loading="lazy" decoding="async">
          </div>
          <div class="food-card-body">
            <div class="food-card-header">
              <h3 class="food-card-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="food-card-price">${item.price}</span>
            </div>
            <p class="food-card-desc">${item.desc}</p>
            <div class="food-card-actions">
              <a href="${item.swiggyUrl}" target="_blank" rel="noopener" class="btn btn-order btn-swiggy">Order with Swiggy</a>
              <a href="${item.zomatoUrl}" target="_blank" rel="noopener" class="btn btn-order btn-zomato">Order with Zomato</a>
              <button type="button" class="btn btn-order btn-whatsapp order-wa-btn" data-item-name="${item.title}" data-item-price="${item.price}">Order via WhatsApp</button>
            </div>
          </div>
        </article>
      `).join('');
    }
  }

  function applyReviews() {
    if (!cfg.reviews) return;
    const revSec = $('#reviews');
    if (!revSec) return;

    const sub = $('.section-subtitle', revSec);
    if (sub) sub.textContent = cfg.reviews.subtitle;

    const title = $('.section-title', revSec);
    if (title) title.textContent = cfg.reviews.title;

    const grid = $('.reviews-grid', revSec);
    if (grid && cfg.reviews.items) {
      grid.innerHTML = cfg.reviews.items.map(r => `
        <figure class="review-card">
          <blockquote class="review-text">
            <div class="review-stars" aria-label="Rating: ${r.stars} out of 5 stars">
              ${Array(r.stars).fill('<i class="ph-fill ph-star" aria-hidden="true"></i>').join('')}
            </div>
            <p>${r.text}</p>
          </blockquote>
          <figcaption class="reviewer-info">
            <img src="${r.avatar}" alt="${r.name}" class="reviewer-avatar" loading="lazy" decoding="async">
            <div>
              <span class="reviewer-name">${r.name}</span>
              <span class="reviewer-role">${r.role}</span>
            </div>
          </figcaption>
        </figure>
      `).join('');
    }

    if (cfg.reviews.googleCta) {
      const ctaTitle = $('.cta-title', revSec);
      if (ctaTitle) ctaTitle.textContent = cfg.reviews.googleCta.title;

      const ctaDesc = $('.cta-desc', revSec);
      if (ctaDesc) ctaDesc.textContent = cfg.reviews.googleCta.desc;

      const ctaBtn = $('.btn-google-review', revSec);
      if (ctaBtn) ctaBtn.setAttribute('href', cfg.reviews.googleCta.url);
    }
  }

  function applyGallery() {
    if (!cfg.gallery) return;
    const galSec = $('#gallery');
    if (!galSec) return;

    const sub = $('.section-subtitle', galSec);
    if (sub) sub.textContent = cfg.gallery.subtitle;

    const title = $('.section-title', galSec);
    if (title) title.textContent = cfg.gallery.title;

    const grid = $('.gallery-grid', galSec);
    if (grid && cfg.gallery.images) {
      grid.innerHTML = cfg.gallery.images.map(img => `
        <button type="button" class="gallery-item" aria-label="Expand image: ${img.alt}">
          <img src="${img.src}" alt="${img.alt}" loading="lazy" decoding="async">
          <span class="gallery-overlay"><i class="ph ph-arrows-out-simple" aria-hidden="true"></i></span>
        </button>
      `).join('');
    }
  }

  function applyLocation() {
    if (!cfg.location) return;
    const locSec = $('#location');
    if (!locSec) return;

    const sub = $('.section-subtitle', locSec);
    if (sub) sub.textContent = cfg.location.subtitle;

    const title = $('.section-title', locSec);
    if (title) title.textContent = cfg.location.title;

    const desc = $('.text-muted', locSec);     if (desc) desc.textContent = cfg.location.description;      const infoItems = $$('.info-item', locSec);
    if (infoItems.length >= 3) {
      const addrText = $('.text-muted', infoItems[0]);       if (addrText) addrText.textContent = cfg.location.address;        const hoursContainer = infoItems[1];       if (hoursContainer && cfg.location.hours) {         const lines = $$('.text-muted', hoursContainer);
        cfg.location.hours.forEach((h, idx) => {
          if (lines[idx]) lines[idx].textContent = h;
        });
      }

      const contactText = $('.text-muted', infoItems[2]);
      if (contactText) contactText.textContent = `${cfg.location.email} | ${cfg.location.phone}`;
    }

    const mapIframe = $('iframe', locSec);
    if (mapIframe && cfg.location.mapEmbedUrl) {
      mapIframe.src = cfg.location.mapEmbedUrl;
    }
  }

  function applyFooter() {
    if (!cfg.footer) return;
    const foot = $('.footer');
    if (!foot) return;

    const desc = $('.footer-desc', foot);
    if (desc) desc.textContent = cfg.footer.description;

    const socialContainer = $('.social-links', foot);
    if (socialContainer && cfg.footer.socials) {
      socialContainer.innerHTML = cfg.footer.socials.map(s => `
        <a href="${s.url}" class="social-icon" aria-label="${s.platform}" target="_blank" rel="noopener">
          <i class="ph ${s.iconClass}" aria-hidden="true"></i>
        </a>
      `).join('');
    }

    const copy = $('.footer-bottom p', foot);
    if (copy) copy.textContent = cfg.footer.copyright;
  }

  function applyWifiModal() {
    if (!cfg.wifi) return;
    const wifiModal = $('#wifi-modal');
    if (!wifiModal) return;

    const qrImg = $('.wifi-qr-img', wifiModal);
    if (qrImg) {
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=WIFI:S:${cfg.wifi.ssid};T:WPA;P:${cfg.wifi.password};;`;
    }

    const values = $$('.wifi-value', wifiModal);
    if (values[0]) values[0].textContent = cfg.wifi.ssid;
    if (values[1]) values[1].textContent = cfg.wifi.password;
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyStyles();
    applyMeta();
    applyBrandLogos();
    applyHero();
    applyAbout();
    applySpecials();
    applyOffers();
    applyMenu();
    applyReviews();
    applyGallery();
    applyLocation();
    applyFooter();
    applyWifiModal();
  });
})(REBRAND_CONFIG);
