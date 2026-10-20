// PDF 54–60. Artwork-only labels are transcribed in GROWTH_ARTWORK_TRANSCRIPT.md.
// The historic counts, schematic locations and travel times are unverified illustrations.
export const growth = {
  hero: {
    title: "The community has changed. Planning needs to keep up.",
    text: "The Keystone–Odessa Community Plan maintains a very-low-density development pattern and limits where many commercial activities can be located and how large they can be. These rules affect housing, distance to services, travel needs, and the ability to provide infrastructure efficiently.",
    sides: [
      { title: "KEYSTONE–ODESSA WHEN THE COMMUNITY PLAN WAS CREATED", date: "Early 2000s", image: "L01-then", stats: [
        { value: "~ 4,000", label: "Population" }, { value: "~ 1,100", label: "Housing units" },
        { value: "Limited", label: "Road network" }, { value: "Few", label: "Commercial areas" },
        { value: "Rural character", label: "Mostly large lots and open space" },
      ] },
      { title: "KEYSTONE–ODESSA TODAY", date: "2026", image: "L01-today", stats: [
        { value: "~ 7,000+", label: "Population" }, { value: "~ 2,500+", label: "Housing units" },
        { value: "More", label: "Road network" }, { value: "More", label: "Commercial areas" },
        { value: "Continued low-density pattern", label: "Growing subdivisions and more development" },
      ] },
    ],
  },
  density: {
    title: "Five acres for one home creates a development pattern with wider consequences.",
    text: "The Community Plan protects very-low-density residential development in the relevant areas, with policies centered around approximately one dwelling unit per five acres and limits on increasing density.",
    sides: [
      { title: "5-ACRE PATTERN", text: "Approximately 1 home per 5 acres", label: "10 homes on 50 acres", image: "L02-five-acre" },
      { title: "MODERATE LOW-DENSITY PATTERN", text: "Smaller lots with more homes", label: "Same amount of land", image: "L02-moderate" },
    ],
    qualification: "Conceptual illustration, not a measured or engineered site plan.",
    flow: ["More land for the same number of households", "Homes farther apart", "Infrastructure must serve greater distances", "Services farther away", "More trips by car"],
  },
  housing: {
    title: "Land rules determine what types of housing the community can provide.",
    text: "Large-lot requirements increase the amount of land needed for each household and limit the number and variety of housing options. The assessment document also identifies potential impacts on younger families, workers, teachers, and seniors.",
    scenarios: [
      { title: "5 ACRES / HOME", text: "more land / household" },
      { title: "SMALLER LOW-DENSITY LOT", text: "less land / household" },
      { title: "COUNTYWIDE FRAMEWORK", text: "broader planning options" },
    ],
  },
  services: {
    title: "Everyday needs still exist even when services are farther away.",
    text: "The Community Plan concentrates commercial development in certain locations and limits the scale and characteristics of commercial uses in other areas.",
    needs: "Food · Pharmacy · Healthcare · Childcare · Restaurants · Services · Jobs",
    closing: "When these needs are located farther away from residential areas, people must travel farther to access them.",
    qualification: "Drive times are estimates and for illustrative purposes only. Actual times may vary depending on location and traffic conditions.",
    scope: "These are illustrative image labels, not newly verified local travel-time findings.",
    labels: [
      { title: "Grocery Stores", time: "10–25 minutes", image: "P058-02", icon: "grocery" },
      { title: "Healthcare", time: "10–30 minutes", image: "P058-03", icon: "health" },
      { title: "Childcare", time: "10–25 minutes", image: "P058-04", icon: "childcare" },
      { title: "Restaurants", time: "10–25 minutes", image: "P058-05", icon: "restaurant" },
      { title: "Employment / Jobs", time: "15–30 minutes", image: "P058-06", icon: "jobs" },
    ],
    legend: ["Community Plan area (Keystone–Odessa)", "Community Plan boundary", "Typical 5–10 minute drive time from residential areas", "Typical 10–15 minute drive time", "15+ minute drive time", "Major roads", "Lakes and conservation areas"],
  },
  infrastructure: {
    title: "More people means more demand for roads, water, services, and infrastructure.",
    years: ["2001", "2010", "2020", "2026"],
    tracks: "Population · Housing · Subdivisions · Roads · Water/Wastewater · Services · Traffic",
    message: "The community changes. Infrastructure and the planning framework must be able to adapt to that change.",
    support: "The Master Assessment identifies that the gap between actual growth and the Plan’s old assumptions can make it increasingly difficult to provide roads, services, and infrastructure.",
  },
  comparison: {
    title: "Two Approaches to Growth and Development",
    intro: "The Keystone–Odessa Community Plan and the Hillsborough County Comprehensive Plan take different approaches to growth, land use, and development.",
    sides: [
      { title: "KEYSTONE–ODESSA COMMUNITY PLAN", image: "P059-01", sourceId: "SRC-10", points: [
        "Emphasizes a very-low-density rural pattern",
        "Policies of approximately 1 dwelling / 5 acres in the relevant areas",
        "Limits commercial development by location, scale, and rural character",
        "Limits the ability of the development pattern to adapt",
      ] },
      { title: "HILLSBOROUGH COUNTY COMPREHENSIVE PLAN", image: "P059-02", sourceId: "SRC-16", points: [
        "Plans land use through a countywide framework that considers growth, development, and infrastructure together",
        "Provides additional land-use and development tools for evaluating how and where development can occur",
        "Allows service and development needs to be evaluated together with land use and infrastructure",
        "Allows growth to be evaluated together with infrastructure and planning standards",
      ] },
    ],
    qualification: "This section is only a comparison summary. Detailed policy analysis is reserved for the Full Comparison Page.",
    cta: "View the Growth & Development Comparison →",
  },
  evidence: {
    title: "See the Evidence Behind the Issue",
    cards: [
      { id: "plan", title: "Community Plan", text: "Density, rural character, commercial policies", image: "L07-plan", kind: "document", sourceId: "SRC-10" },
      { id: "landuse", title: "Land-Use Maps", text: "Residential pattern & development", image: "L07-landuse", kind: "visual", sourceId: "SRC-07" },
      { id: "housing", title: "Housing Data", text: "Lots, housing units & development", image: "P060-03", kind: "photo", sourceId: null },
      { id: "service", title: "Service Map", text: "Grocery, healthcare, childcare & employment", image: "L07-services", kind: "visual", sourceId: null },
      { id: "travel", title: "Travel Data", text: "Distances, drive times & traffic", image: "P060-05", kind: "photo", sourceId: null },
      { id: "infrastructure", title: "Infrastructure Records", text: "Roads, utilities, drainage & development", image: "P060-06", kind: "photo", sourceId: null },
    ],
  },
  next: {
    title: "Outdated Community Plan",
    text: "A Community Plan created for the conditions of more than two decades ago continues to shape the roads, water, growth, and daily life of Keystone–Odessa today.",
    cta: "Learn About the Community Plan →",
  },
} as const;
