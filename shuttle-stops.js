/* =========================================
   OAU NAVIGATOR
   SHUTTLE STOPS AND ROUTE DATABASE
   ========================================= */

const OAU_SHUTTLE_DATA = {

  stops: [

    {
      id: "road1-gate",
      name: "Road 1 Gate",
      latitude: null,
      longitude: null,
      status: "pending"
    },

    {
      id: "sub",
      name: "Student Union Building (SUB)",
      latitude: null,
      longitude: null,
      status: "pending"
    },

    {
      id: "market",
      name: "OAU Central Market",
      latitude: null,
      longitude: null,
      status: "pending"
    },

    {
      id: "international-school",
      name: "International School",
      latitude: null,
      longitude: null,
      status: "pending"
    },

    {
      id: "halls",
      name: "Halls of Residence",
      latitude: null,
      longitude: null,
      status: "pending"
    },

    {
      id: "religious-ground",
      name: "Religious Ground",
      latitude: null,
      longitude: null,
      status: "pending"
    },

    {
      id: "white-house",
      name: "White House",
      latitude: null,
      longitude: null,
      status: "pending"
    },

    {
      id: "social-sciences",
      name: "Faculty of Social Sciences",
      latitude: null,
      longitude: null,
      status: "pending"
    },

    {
      id: "100-seater",
      name: "100-Seater Lecture Theatre",
      latitude: null,
      longitude: null,
      status: "pending"
    },

    {
      id: "arts",
      name: "Faculty of Arts",
      latitude: null,
      longitude: null,
      status: "pending"
    },

    {
      id: "spider-house",
      name: "Spider House",
      latitude: null,
      longitude: null,
      status: "pending"
    },

    {
      id: "pg-college",
      name: "Postgraduate College",
      latitude: null,
      longitude: null,
      status: "pending"
    },

    {
      id: "ict",
      name: "ICT Centre",
      latitude: null,
      longitude: null,
      status: "pending"
    },

    {
      id: "tonkere-gate",
      name: "Tonkere Gate",
      latitude: null,
      longitude: null,
      status: "pending"
    },

    {
      id: "agric-extension",
      name: "Agricultural Extension",
      latitude: null,
      longitude: null,
      status: "pending"
    },

    {
      id: "road7-gate",
      name: "Road 7 Gate",
      latitude: null,
      longitude: null,
      status: "pending"
    },

    {
      id: "ojaja",
      name: "Ojaja",
      latitude: null,
      longitude: null,
      status: "pending"
    },

    {
      id: "health-centre",
      name: "University Health Centre",
      latitude: null,
      longitude: null,
      status: "pending"
    },

    {
      id: "dsa",
      name: "DSA",
      latitude: null,
      longitude: null,
      status: "pending"
    },

    {
      id: "ajose",
      name: "Ajose",
      latitude: null,
      longitude: null,
      status: "pending"
    },

    {
      id: "faculty-agriculture",
      name: "Faculty of Agriculture",
      latitude: null,
      longitude: null,
      status: "pending"
    }

  ],


  routes: [

    {
      id: 1,
      from: "road1-gate",
      to: "sub",
      description: "Road 1 Gate ↔ SUB Bus Stop"
    },

    {
      id: 2,
      from: "road1-gate",
      to: "market",
      description: "Road 1 Gate ↔ Market (Direct)"
    },

    {
      id: 3,
      from: "road1-gate",
      to: "international-school",
      description: "Road 1 Gate ↔ International School",
      restriction: "ISS/SSS only"
    },

    {
      id: 4,
      from: "road1-gate",
      to: "halls",
      description: "Road 1 Gate ↔ Hall"
    },

    {
      id: 5,
      from: "road1-gate",
      to: "religious-ground",
      description: "Road 1 Gate ↔ Religious Ground"
    },

    {
      id: 6,
      from: "sub",
      to: "white-house",
      description: "SUB ↔ Central Academic Area",
      via: [
        "social-sciences",
        "100-seater",
        "arts"
      ]
    },

    {
      id: 7,
      from: "sub",
      to: "spider-house",
      description: "SUB ↔ Spider House"
    },

    {
      id: 8,
      from: "sub",
      to: "pg-college",
      description: "SUB ↔ PG College/ICT",
      via: ["ict"]
    },

    {
      id: 9,
      from: "sub",
      to: "tonkere-gate",
      description: "SUB ↔ Tonkere Gate/Agric Extension",
      via: ["agric-extension"]
    },

    {
      id: 10,
      from: "sub",
      to: "road7-gate",
      description: "SUB ↔ Road 7 Gate"
    },

    {
      id: 11,
      from: "sub",
      to: "market",
      description: "SUB ↔ Market"
    },

    {
      id: 12,
      from: "market",
      to: "ojaja",
      description: "Market ↔ Ojaja"
    },

    {
      id: 13,
      from: "sub",
      to: "ojaja",
      description: "SUB ↔ Ojaja"
    },

    {
      id: 14,
      from: "sub",
      to: "religious-ground",
      description: "SUB ↔ Religious Ground"
    },

    {
      id: 15,
      from: "halls",
      to: "sub",
      description: "Hall ↔ SUB"
    },

    {
      id: 16,
      from: "halls",
      to: "health-centre",
      description: "Hall ↔ Health Centre"
    },

    {
      id: 17,
      from: "halls",
      to: "international-school",
      description: "Hall ↔ International School/PG College/ICT",
      via: ["pg-college", "ict"]
    },

    {
      id: 18,
      from: "halls",
      to: "dsa",
      description: "Hall ↔ DSA/Ajose/Faculty of Agriculture",
      via: ["ajose", "faculty-agriculture"]
    },

    {
      id: 19,
      from: "halls",
      to: "religious-ground",
      description: "Hall ↔ Religious Ground"
    },

    {
      id: 20,
      from: "market",
      to: "tonkere-gate",
      description: "Market ↔ Tonkere Gate"
    }

  ]

};


// Make database accessible to the main application.

if (typeof window !== "undefined") {
  window.OAU_SHUTTLE_DATA = OAU_SHUTTLE_DATA;
}
