/**
 * Centralized Site Configuration for servicecentercoimbatore.com
 * Single source of truth for contact details, domain, and service information.
 */
const SITE_CONFIG = {
  brandName: "Service Center Coimbatore",
  tagline: "Local Home Appliance Repair & Service in Coimbatore",
  domain: "servicecentercoimbatore.com",
  siteUrl: "https://servicecentercoimbatore.com",
  
  // Primary Contact Details (Consistent across all pages, calls, schemas, and floating buttons)
  phoneDisplay: "+91 92115 12088",
  phoneRaw: "+919211512088",
  phoneDigitsOnly: "9211512088",
  whatsappNumber: "919211512088",
  whatsappPrefillMessage: "Hello, I need home appliance repair service in Coimbatore. Please share the service details.",
  email: "support@servicecentercoimbatore.com",
  
  // Working Hours & Location Details
  workingHours: "Monday to Sunday: 8:00 AM - 8:30 PM",
  serviceLocation: {
    city: "Coimbatore",
    state: "Tamil Nadu",
    country: "India",
    postalCode: "641012",
    streetAddress: "273, PRS Pandian Complex, 7th St, Gandhipuram",
    latitude: 11.0168,
    longitude: 76.9558
  },
  
  // Verified Service Localities in and around Coimbatore (Single Source of Truth)
  localities: [
    { name: "Gandhipuram", landmark: "7th Street, Cross Cut Road, Central Bus Stand" },
    { name: "RS Puram", landmark: "DB Road, Cowley Brown Road, Post Office Circle" },
    { name: "Peelamedu", landmark: "Avinashi Road, PSG Tech area, Hopes College" },
    { name: "Singanallur", landmark: "Trichy Road, Bus Terminus, Kamarajar Road" },
    { name: "Saibaba Colony", landmark: "NSR Road, Ganga Hospital Road, Alagesan Road" },
    { name: "Vadavalli", landmark: "Marudhamalai Main Road, Mullai Nagar, Thondamuthur Road" },
    { name: "Saravanampatti", landmark: "Sathy Road, CHIL SEZ IT Park, KGISL Campus" },
    { name: "Ganapathy", landmark: "Sathy Road, Athipalayam Road, Textool Circle" },
    { name: "Thudiyalur", landmark: "Mettupalayam Road, Bus Stand, NGGO Colony" },
    { name: "Ramanathapuram", landmark: "Trichy Road, Sungam Bypass, All India Radio" },
    { name: "Hopes College", landmark: "Avinashi Road, Peelamedu Railway Link" },
    { name: "Ukkadam", landmark: "Perur Bypass Road, Bus Terminal, Town Hall Link" },
    { name: "Kuniyamuthur", landmark: "Palakkad Main Road, Sri Krishna College area" },
    { name: "Sundarapuram", landmark: "Pollachi Road, LIC Colony, SIDCO Industrial Estate" },
    { name: "Kovaipudur", landmark: "VLB Engineering College, Ashram School, " },
    { name: "Kavundampalayam", landmark: "Mettupalayam Road, Housing Unit, TVS Nagar" },
    { name: "Ondipudur", landmark: "Trichy Road, Flyover, Irugur Road Junction" },
    { name: "Sulur", landmark: "Trichy Road, Air Force Station, Ranganathapuram" },
    { name: "Podanur", landmark: "Railway Junction, Chettipalayam Road" },
    { name: "Chinniyampalayam", landmark: "Airport Road, Avinashi Highway corridor" },
    { name: "Kalapatti", landmark: "Airport Back Gate, IT Park Link, Sharp Nagar" },
    { name: "Neelambur", landmark: "Bypass Toll Junction, Avinashi Road, Kathir College" },
    { name: "Malumichampatti", landmark: "Pollachi Road, Karpagam University area" },
    { name: "Perur", landmark: "Pateeswarar Temple, Siruvani Main Road" },
    { name: "Telungupalayam", landmark: "Perur Main Road, Selvapuram Link" },
    { name: "Veerakeralam", landmark: "Vadavalli Link Road, Sugunapuram" },
    { name: "Thondamuthur", landmark: "Isha Road, Narasipuram Junction" },
    { name: "Periyanaickenpalayam", landmark: "MTP Road, Ramakrishna Vidyalaya" },
    { name: "GN Mills", landmark: "Mettupalayam Road, Post Office Circle" },
    { name: "Vilankurichi", landmark: "TIDEL Park Road, CODISSIA Link" },
    { name: "Cheran Ma Nagar", landmark: "Vilankurichi Road, Housing Board Layout" },
    { name: "Sowripalayam", landmark: "Meena Estate, Ramanathapuram link" },
    { name: "Pappanaickenpalayam", landmark: "Lakshmi Mills, G.K. Roundabout" },
    { name: "Puliyakulam", landmark: "Vinayagar Temple, Red Fields Link" },
    { name: "Race Course", landmark: "Thomas Park, Circuit House, Police Club" },
    { name: "Town Hall", landmark: "Oppanakara Street, Raja Street, Clock Tower" },
    { name: "Rathinapuri", landmark: "Kannan Departmental Store area, Sanganoor Road" },
    { name: "Sivanandha Colony", landmark: "100 Feet Road, Hudco Colony, MTP Road" },
    { name: "Tatabad", landmark: "Cross Cut Road extension, Power House" },
    { name: "Avarampalayam", landmark: "Illango Nagar, Ramakrishna Hospital link" },
    { name: "Eachanari", landmark: "Vinayagar Temple, Pollachi Highway, Rathinam Techzone" },
    { name: "Madukkarai", landmark: "ACC Cement Factory, Palakkad Highway" },
    { name: "Kinathukadavu", landmark: "Pollachi Road, Old Bus Stand circle" },
    { name: "Irugur", landmark: "Railway Feeder Road, Ondipudur link" }
  ],

  // 5 Main Appliance Categories
  services: [
    {
      id: "ac",
      title: "AC Repair & Service",
      tamilPrompt: "AC cooling kammiya irukka? Water leak aagudha?",
      url: "ac/ac-repair-service-in-coimbatore.html",
      shortDesc: "Split & inverter AC cooling issues, water leakage, gas inspection, startup faults & servicing."
    },
    {
      id: "fridge",
      title: "Refrigerator / Fridge Repair",
      tamilPrompt: "Fridge cooling proper-ah illa? Ice overflow aagudha?",
      url: "fridge/refrigerator-repair-service-in-coimbatore.html",
      shortDesc: "Single door, double door & frost-free fridge cooling problems, thermostat check & compressor startup."
    },
    {
      id: "washing-machine",
      title: "Washing Machine Repair",
      tamilPrompt: "Washing machine-la water drain aagala? Drum rotate aagala?",
      url: "washing-machine/washing-machine-repair-service-in-coimbatore.html",
      shortDesc: "Front load, top load & semi-automatic machine spin issues, drainage failure, noise & error codes."
    },
    {
      id: "tv",
      title: "TV Repair & Service",
      tamilPrompt: "TV display problem irukka? Sound varudhu picture varala?",
      url: "tv/tv-repair-service-in-coimbatore.html",
      shortDesc: "LED, QLED & Smart TV sound but no picture, blank screen, backlight issue, power failure & board faults."
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = SITE_CONFIG;
}
