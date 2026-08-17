export const productCategories = [
  { id: "all", label: "All Vehicles (35+)" },
  { id: "trailers", label: "Trailers" },
  { id: "tippers", label: "Tippers & Tip Trailers" },
  { id: "bulkers", label: "Bulkers & Tankers" },
  { id: "specialized", label: "Girder & ODC Special" }
];

export const productsData = [
  // --- TRAILERS ---
  {
    id: "side-wall-trailer",
    category: "trailers",
    title: "Side Wall Commercial Freight Trailer",
    subtitle: "32 Ft / 36 Ft / 40 Ft Multi-Axle Freight Body",
    tag: "Best Seller",
    image: "/trucks/page11.png",
    overview: "Engineered for high-volume freight, agriculture, and general cargo transport. Built with HSFQ-450 high-tensile steel main girders for maximum strength and reduced tare weight.",
    specs: {
      chassis: "Fabricated Main Girder from HSFQ-450 / ST-52 high-tensile steel. Cross members at load stress points.",
      axle: "Tandem or Tridem (14T / 16T / 18T rating) York, TATA, or Kross equivalent.",
      kingPin: "2-inch or 3.5-inch IS:6763 Part I compliant forged alloy steel.",
      brakes: "Dual-line air brake system with automatic slack adjuster, T24/30 spring brake chambers, QRV safety valves.",
      suspension: "18T capacity tandem over-slung leaf spring suspension with equalizing brackets / Tridem pneumatic air suspension.",
      landingLeg: "Two-speed gear operated mechanical landing leg (Jost / York equivalent).",
      painting: "Sa 2.5 shot-blasting + 500-hour salt spray tested Polyurethane (PU) paint."
    },
    highlights: ["Tare Weight Reduced by 900kg", "Removable Drop Side Panels", "Sa 2.5 PU Paint Finish"]
  },
  {
    id: "flat-bed-trailer",
    category: "trailers",
    title: "Flat Bed Heavy Platform Trailer",
    subtitle: "Heavy Equipment & ISO Container Platform",
    tag: "Heavy Duty",
    image: "/trucks/page13.png",
    overview: "Versatile flat deck platform trailer designed for steel coils, heavy machinery, precast concrete structures, and container haulage with heavy-duty twist locks.",
    specs: {
      chassis: "Heavy-duty fabricated ladder frame with high-tensile main girders and reinforced side channels.",
      axle: "Tridem 16T / 18T heavy duty axles with sealed bearings.",
      kingPin: "2-inch or 3.5-inch IS:6763 forged alloy steel.",
      brakes: "Dual-line pneumatic brake system with ABS / EBS readiness.",
      suspension: "Heavy duty leaf spring or pneumatic air suspension with leveling valves.",
      landingLeg: "Heavy duty two-speed landing gear.",
      painting: "Sa 2.5 shot-blasting + high gloss PU industrial finish."
    },
    highlights: ["ISO Twist Lock Retractors", "Reinforced Deck Plate", "High Load Stability"]
  },
  {
    id: "container-trailer",
    category: "trailers",
    title: "Container Semi-Trailer",
    subtitle: "20 Ft / 40 Ft Logistics & Marine Shipping Body",
    tag: "Logistics Choice",
    image: "/trucks/page14.png",
    overview: "Optimized marine shipping container semi-trailer built for port-to-warehouse logistics. Features corner twist locks, impact-resistant rear bumper, and marker lights.",
    specs: {
      chassis: "High-strength low-alloy steel main beams with precision container locators.",
      axle: "Tandem or Tridem 14T / 16T heavy forged axles.",
      kingPin: "2-inch IS:6763 forged alloy pin.",
      brakes: "Dual line air system with quick release valves.",
      suspension: "Heavy duty tandem leaf spring / air suspension.",
      landingLeg: "28T static load capacity landing legs.",
      painting: "Sa 2.5 shot-blasted PU primer and topcoat."
    },
    highlights: ["12 ISO Container Locks", "Aerodynamic Chassis Design", "EBS Ready Brake System"]
  },
  {
    id: "skeletal-trailer",
    category: "trailers",
    title: "Skeletal Marine Container Trailer",
    subtitle: "Lightweight Container Chassis Transporter",
    tag: "Port Special",
    image: "/trucks/page19.png",
    overview: "Ultra-lightweight skeletal chassis designed specifically for 20ft and 40ft ISO shipping containers, delivering maximum fuel economy.",
    specs: {
      chassis: "Minimalist ultra-high tensile steel skeleton frame.",
      axle: "Tridem 14T/16T forged road axles.",
      brakes: "Dual line pneumatic brakes.",
      suspension: "Multi-leaf spring / Air bag suspension.",
      painting: "Sa 2.5 shot blasting + PU finish."
    },
    highlights: ["Ultra Light Tare Weight", "Fast Container Docking", "SAIL Steel Beam"]
  },

  // --- TIPPERS & TIP TRAILERS ---
  {
    id: "tip-trailer",
    category: "tippers",
    title: "Heavy Duty Mining Tip Trailer",
    subtitle: "28 Cu.M to 40 Cu.M High-Capacity Dump Trailer",
    tag: "Mining King",
    image: "/trucks/page12.png",
    overview: "Engineered for heavy quarrying, coal, iron ore, and aggregate mining transport. Equipped with multi-stage front hydraulic telescopic cylinder for rapid tipping.",
    specs: {
      chassis: "Heavy-duty ladder frame construction with high-tensile main girders.",
      hydraulicKit: "Hyva / Wipro / Penta front-end multi-stage telescopic cylinder (170 BAR working pressure, 48°-52° tipping cycle).",
      axle: "Tridem 16T / 18T heavy duty mining axles.",
      brakes: "Dual line air brake system with T24/30 spring chambers on all wheels.",
      suspension: "Heavy duty tandem/tridem over-slung leaf spring suspension with torque arm adjustment.",
      bodyMaterial: "High wear-resistant 6mm floor / 5mm side walls (Hardox / ST-52).",
      painting: "Sa 2.5 shot blasting + heavy duty anti-corrosive PU coating."
    },
    highlights: ["170 BAR Front Telescopic Cylinder", "48° - 52° Rapid Tipping Angle", "Hardox Wear Resistant Body"]
  },
  {
    id: "u-shape-tipper",
    category: "tippers",
    title: "20 Cu.M Rock Body U-Shape Tipper",
    subtitle: "Curved Floor High-Impact Mining Tipper",
    tag: "Quarry Special",
    image: "/trucks/page17.png",
    overview: "Curved U-shape floor structure eliminates material sticking and distributes heavy rock impact evenly during loader drop.",
    specs: {
      chassis: "Reinforced box beam chassis with anti-torsion cross members.",
      hydraulicKit: "Heavy duty multi-stage cylinder kit.",
      axle: "Heavy forged mining axles.",
      bodyMaterial: "8mm floor / 6mm side wall high-impact steel.",
      brakes: "Dual-line pneumatic system with parking brake safety.",
      painting: "Sa 2.5 shot blasting + 500-hour salt spray tested PU finish."
    },
    highlights: ["Zero Sticky Material Floor", "Impact Absorbing U-Design", "Heavy Rock Duty"]
  },
  {
    id: "box-body-tip-trailer",
    category: "tippers",
    title: "25 / 32 Cu.M Box Body Tip Trailer",
    subtitle: "Coal, Clinker & Bulk Mineral Carrier",
    tag: "High Volume",
    image: "/trucks/page17.png",
    overview: "Designed for high-density bulk cargo such as coal, limestone, clinker, and bauxite. Built with reinforced side ribs and hydraulic tail-gate lock.",
    specs: {
      chassis: "High-tensile main girders with heavy cross bracing.",
      hydraulicKit: "Front-end multi-stage cylinder with safety check valve.",
      axle: "Tridem 16T axles.",
      brakes: "Dual line air brakes with automatic slack adjuster.",
      painting: "Sa 2.5 shot-blasted PU finish."
    },
    highlights: ["Automatic Hydraulic Tail Gate", "High Density Volume", "Heavy Ribbed Sidewalls"]
  },

  // --- BULKERS & TANKERS ---
  {
    id: "bulker-trailer",
    category: "bulkers",
    title: "Pneumatic Cement & Fly Ash Bulker Trailer",
    subtitle: "35 Cu.M / 40 Cu.M / 45 Cu.M Silo Trailer",
    tag: "Cement & Ash Leader",
    image: "/trucks/page15.png",
    overview: "Aerodynamically tested pneumatic discharge bulker semi-trailer for dry powder commodities like cement, fly ash, bentonite, and soda ash.",
    specs: {
      chassis: "Ladder type frame integrated with cylindrical pressure vessel.",
      loading: "2 x 500mm diameter manholes with quick clamp covers.",
      workingPressure: "1.65 BAR working pressure (hydrostatic tested at 2.5 BAR).",
      dischargeRate: "1.2 to 1.5 tons per minute dry powder discharge.",
      reliefValve: "Dual Class 3 safety relief valves + pressure gauge (0-10 kg/cm²).",
      axle: "Tridem 14T / 16T road axles.",
      painting: "Sa 2.5 shot-blasting + heat reflective PU enamel."
    },
    highlights: ["Fast 1.5 T/Min Discharge", "2.5 BAR Pressure Tested", "Aeration Canvas Pad System"]
  },
  {
    id: "rigid-bulker",
    category: "bulkers",
    title: "Rigid Multi-Axle Truck Mounted Bulker",
    subtitle: "20 Cu.M to 30 Cu.M Chassis Mounted Silo",
    tag: "City & Highway",
    image: "/trucks/page18.png",
    overview: "Chassis-mounted rigid bulker for maneuverable urban and project site supply of cement and fly ash.",
    specs: {
      chassis: "Custom subframe mounted directly on 10-wheeler or 12-wheeler truck chassis.",
      workingPressure: "1.8 BAR maximum pressure.",
      axle: "Rigid truck axle mounting.",
      painting: "Sa 2.5 shot blasting + PU finish."
    },
    highlights: ["Direct Chassis Mounting", "Fast Manhole Access", "Compact Turning Radius"]
  },
  {
    id: "fuel-bowser",
    category: "bulkers",
    title: "Mobile Fuel Bowser Tanker",
    subtitle: "3KL / 4KL / 6KL Mobile Diesel Dispenser",
    tag: "PESO Compliant",
    image: "/trucks/page18.png",
    overview: "PESO approved mobile diesel refuelling bowser with digital flow meter, hose reel, and auto-nozzle dispenser for mining sites and heavy machinery fleets.",
    specs: {
      chassis: "Reinforced tank cradle subframe.",
      tankMaterial: "4mm ST-37 carbon steel with internal anti-surge baffle plates.",
      dispenser: "12V/24V high-flow pump, digital meter unit, 10m hose reel & automatic nozzle.",
      safety: "Emergency shut-off valve, spark arrestor, fire extinguishers, grounding reel.",
      painting: "Sa 2.5 shot blasting + PESO red/white safety PU paint."
    },
    highlights: ["Digital Meter Dispenser", "PESO Approved Baffles", "10m Hose Reel & Nozzle"]
  },
  {
    id: "edible-oil-tanker",
    category: "bulkers",
    title: "Food-Grade Stainless Steel Tanker",
    subtitle: "SS-304 / SS-316 Edible Oil & Milk Road Tanker",
    tag: "Hygienic Choice",
    image: "/trucks/page18.png",
    overview: "Food-grade stainless steel road tanker designed for hygienic transport of edible oils, liquid glucose, milk, and food ingredients.",
    specs: {
      tankMaterial: "SS-304 / SS-316 mirror-polished food grade stainless steel.",
      insulation: "Optional polyurethane foam insulation with SS outer cladding.",
      cleaning: "Integrated CIP (Clean-In-Place) spray balls in each compartment.",
      axle: "Tridem 14T forged axles.",
      painting: "High gloss outer PU paint / mirror polish SS."
    },
    highlights: ["SS-304/316 Food Grade Steel", "CIP Cleaning Spray System", "Zero Contamination Seals"]
  },

  // --- SPECIALIZED ---
  {
    id: "girder-launching-trailer",
    category: "specialized",
    title: "Girder Launching & ODC Precast Transporter",
    subtitle: "80T to 150T GVW Heavy Infrastructure Transporter",
    tag: "Infrastructure Heavy",
    image: "/trucks/page16.png",
    overview: "Heavy specialized multi-axle trailer custom built for metro rail precast girders, heavy bridge beams, transformer transport, and Over-Dimensional Cargo (ODC).",
    specs: {
      chassis: "Fabricated ultra-heavy main girders with HSFQ-450 / HG70 high-tensile steel.",
      axle: "10-wheel / 12-wheel multi-axle heavy hydraulic or mechanical steering axles.",
      brakes: "Multi-circuit pneumatic air brake system.",
      kingPin: "3.5-inch heavy forged alloy pin.",
      suspension: "Heavy-duty tandem over-slung leaf spring or hydraulic axle suspension.",
      material: "HG70 / HSFQ-450 shock absorber springs and reinforced bolster seats."
    },
    highlights: ["150 Ton Payload Capacity", "ODC Infrastructure Special", "Multi-Axle Steering"]
  }
];
