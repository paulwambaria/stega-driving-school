export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "tip"; title: string; text: string }
  | { type: "warning"; title: string; text: string }
  | { type: "callout"; title: string; text: string; color: "red" | "blue" | "green" | "amber" }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "keypoints"; title: string; points: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  updated: string;
  readTime: number;
  category: string;
  categoryColor: string;
  image: string;
  imageAlt: string;
  keywords: string[];
  toc: { id: string; title: string }[];
  content: ContentBlock[];
  faqs: { q: string; a: string }[];
}

export const blogPosts: BlogPost[] = [
  // ── POST 1 ─────────────────────────────────────────────────
  {
    slug: "how-to-get-driving-licence-kenya-2025",
    title: "How to Get a Kenya Driving Licence in 2025 — Complete NTSA Guide",
    excerpt:
      "A step-by-step guide to getting your NTSA driving licence in Kenya — documents needed, costs, the exact process, and how long it takes from enrolment to your licence card.",
    date: "2025-06-01",
    updated: "2025-06-29",
    readTime: 8,
    category: "Licensing",
    categoryColor: "bg-[#1D4DA1] text-white",
    image: "/images/slider1.jpg",
    imageAlt: "Student driver learning to drive in Nairobi",
    keywords: [
      "how to get driving licence Kenya",
      "NTSA driving licence process 2025",
      "driving licence requirements Kenya",
      "NTSA driving test Kenya",
      "driving licence fees Kenya",
    ],
    toc: [
      { id: "requirements", title: "Documents & Requirements" },
      { id: "process", title: "Step-by-Step Process" },
      { id: "costs", title: "NTSA Fees & Costs" },
      { id: "timeline", title: "How Long It Takes" },
      { id: "after-test", title: "After You Pass" },
      { id: "tips", title: "Key Tips for Success" },
    ],
    content: [
      {
        type: "p",
        text: "Getting your driving licence in Kenya is a structured process regulated by the National Transport and Safety Authority (NTSA). Whether you're a first-time learner or upgrading to a new vehicle class, this guide walks you through every step — from documents to your physical licence card.",
      },
      {
        type: "keypoints",
        title: "Key Facts",
        points: [
          "Minimum age: 18 years for any vehicle class",
          "Must attend an NTSA-accredited driving school",
          "Two separate tests: theory (written) + practical",
          "Total process typically takes 4–10 weeks",
          "Licences issued for 3 years or 10 years",
        ],
      },
      { type: "h2", text: "Documents & Requirements", id: "requirements" },
      {
        type: "p",
        text: "Before you enrol at a driving school, gather these documents. Missing any one can delay your process by weeks:",
      },
      {
        type: "ul",
        items: [
          "Original National ID card (aged 18+) or valid Kenyan passport",
          "2 recent passport-size photographs (white or light background)",
          "Medical fitness certificate from a government-approved hospital — includes vision/eye test",
          "Provisional driving licence application form (obtained at any NTSA office or online via TIMS)",
          "Proof of driving school enrolment from an NTSA-accredited school",
          "Payment receipts for all NTSA fees",
        ],
      },
      {
        type: "tip",
        title: "Get Your Medical Certificate First",
        text: "The medical certificate (including eye test) must be obtained before applying for a provisional licence. Book it early at any government hospital or NTSA-approved clinic — it usually takes 1–2 days.",
      },
      { type: "h2", text: "Step-by-Step Process to Get Your Driving Licence", id: "process" },
      {
        type: "p",
        text: "Follow these steps in order. Your driving school will assist with most of the administrative steps:",
      },
      {
        type: "ol",
        items: [
          "Get your medical certificate (vision test + general fitness) from a government hospital",
          "Apply for a Provisional Driving Licence at any NTSA office or via ecitizen.go.ke — pay KSh 1,050",
          "Enrol at an NTSA-accredited driving school (all training must be at an approved institution)",
          "Complete theory training — highway code, road signs, traffic laws, NTSA test prep",
          "Complete practical driving training on real roads with a certified instructor",
          "Apply for the NTSA Written Theory Test through your school or the TIMS portal",
          "Sit and pass the written theory test at the NTSA test centre",
          "Apply for the NTSA Practical Driving Test (your school handles booking)",
          "Sit and pass the practical test with a registered NTSA examiner",
          "Pay the driving licence issuance fee (3-year or 10-year)",
          "Collect your Kenya Smart Driving Licence card",
        ],
      },
      {
        type: "warning",
        title: "Only Accredited Schools Count",
        text: "NTSA will not allow you to sit for the practical test unless you trained at an accredited driving school. Self-taught driving, no matter how skilled, does not satisfy the requirement. Always verify your school's NTSA accreditation before enrolling.",
      },
      { type: "h2", text: "NTSA Driving Licence Fees in Kenya 2025", id: "costs" },
      {
        type: "p",
        text: "Below are the standard NTSA fees. Driving school course fees are separate and vary by institution and course type:",
      },
      {
        type: "table",
        headers: ["Service", "Fee (KSh)"],
        rows: [
          ["Provisional Driving Licence", "1,050"],
          ["Theory (Written) Test", "600"],
          ["Practical Driving Test", "2,270"],
          ["Driving Licence — 3 Years", "3,050"],
          ["Driving Licence — 10 Years", "5,050"],
          ["Driving School Course (typical range)", "10,000 – 35,000"],
        ],
      },
      {
        type: "callout",
        title: "Always Verify Current Fees",
        text: "NTSA fees are set by the government and may change. Always confirm current amounts on ntsa.go.ke, e-citizen.go.ke, or at your nearest NTSA office before paying.",
        color: "blue",
      },
      { type: "h2", text: "How Long Does It Take to Get a Kenya Driving Licence?", id: "timeline" },
      {
        type: "table",
        headers: ["Stage", "Typical Duration"],
        rows: [
          ["Gathering documents & medical cert", "1–3 days"],
          ["Provisional licence processing", "1–5 days"],
          ["Driving school training", "2–6 weeks"],
          ["Theory test booking & sitting", "1–2 weeks after training"],
          ["Practical test booking", "1–2 weeks after theory pass"],
          ["Licence issuance after passing", "1–3 weeks"],
          ["Total (average)", "6–10 weeks"],
        ],
      },
      {
        type: "tip",
        title: "Speed Up the Process",
        text: "Enrolling at an active driving school like Stega Driving School means your instructors know the exact test routes, handle your test bookings, and guide you through paperwork — reducing your total time significantly.",
      },
      { type: "h2", text: "After You Pass the NTSA Driving Test", id: "after-test" },
      {
        type: "p",
        text: "Once you pass the practical test, the NTSA examiner records the pass in the NTSA TIMS system. You then:",
      },
      {
        type: "ol",
        items: [
          "Pay the licence issuance fee (KSh 3,050 for 3-year or KSh 5,050 for 10-year) via M-Pesa or bank",
          "Submit payment confirmation through the TIMS portal or at an NTSA office",
          "Wait for your smart card licence to be produced (1–3 weeks)",
          "Collect your physical Kenya Driving Licence card from the designated NTSA office",
        ],
      },
      {
        type: "p",
        text: "While waiting for your physical card, you can request a Temporary Driving Licence (TDL) which is legally valid and allows you to drive while the permanent card is being processed.",
      },
      { type: "h2", text: "Key Tips for Getting Your Licence Faster", id: "tips" },
      {
        type: "ul",
        items: [
          "Prepare all documents before you enrol — don't start training without your provisional licence",
          "Attend every lesson consistently — gaps in training extend your overall duration",
          "Study the official Kenya Highway Code thoroughly — the theory test is based on it",
          "Practice on the actual NTSA test routes in your area — your school instructor can guide you",
          "Book your theory test promptly after completing training — don't wait weeks",
          "Use the NTSA TIMS portal (tims.ntsa.go.ke) to track applications and results online",
          "Choose a well-reviewed school with a high pass rate — it directly affects your success",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the minimum age to get a driving licence in Kenya?",
        a: "You must be at least 18 years old to apply for any class of driving licence in Kenya. This is a hard NTSA requirement with no exceptions.",
      },
      {
        q: "Can I get a Kenya driving licence without going to a driving school?",
        a: "No. NTSA requires proof of training at an accredited driving school before you can sit the practical test. Self-taught drivers cannot qualify for the official practical examination.",
      },
      {
        q: "How do I check my NTSA driving test results online?",
        a: "Check your results through the NTSA TIMS portal at tims.ntsa.go.ke or via e-Citizen (ecitizen.go.ke) using your National ID number.",
      },
      {
        q: "How long is a Kenya driving licence valid?",
        a: "Kenya driving licences are valid for 3 years (KSh 3,050) or 10 years (KSh 5,050). You can renew online through the NTSA TIMS system before or after expiry.",
      },
      {
        q: "Can foreigners get a driving licence in Kenya?",
        a: "Yes. Foreigners residing in Kenya can apply using a valid passport and Kenyan residence permit. Tourists can use an International Driving Permit (IDP) for up to 90 days without a local licence.",
      },
      {
        q: "What happens if I fail the NTSA driving test?",
        a: "If you fail the theory or practical test, you can re-apply and sit again after additional training. Most accredited schools like Stega Driving School provide free coaching support before re-tests.",
      },
    ],
  },

  // ── POST 2 ─────────────────────────────────────────────────
  {
    slug: "kenya-road-traffic-rules-regulations-2025",
    title: "Kenya Road Traffic Rules & Regulations 2025 — What Every Driver Must Know",
    excerpt:
      "A complete guide to Kenya's road traffic rules under the Traffic Act — speed limits, roundabout rules, overtaking laws, drink driving limits, mobile phone rules, and current fines.",
    date: "2025-06-05",
    updated: "2025-06-29",
    readTime: 10,
    category: "Road Rules",
    categoryColor: "bg-[#DC2626] text-white",
    image: "/images/slider4.jpg",
    imageAlt: "Stega Driving School car on Nairobi road with caution signage",
    keywords: [
      "Kenya road traffic rules 2025",
      "NTSA traffic regulations Kenya",
      "speed limits Kenya",
      "Kenya Traffic Act",
      "road rules Nairobi",
      "drink driving law Kenya",
    ],
    toc: [
      { id: "speed-limits", title: "Speed Limits in Kenya" },
      { id: "right-of-way", title: "Right of Way Rules" },
      { id: "roundabouts", title: "Roundabout Rules" },
      { id: "overtaking", title: "Overtaking & Lane Discipline" },
      { id: "alcohol", title: "Drink Driving Laws" },
      { id: "phone", title: "Mobile Phone Rules" },
      { id: "seatbelts", title: "Seatbelt Laws" },
      { id: "penalties", title: "Fines & Penalties 2025" },
    ],
    content: [
      {
        type: "p",
        text: "Kenya's roads are governed by the Traffic Act (Cap 403) and enforced by the National Transport and Safety Authority (NTSA). Knowing these rules isn't just necessary for your driving test — it's essential for your safety and the safety of everyone on the road.",
      },
      {
        type: "keypoints",
        title: "Quick Reference",
        points: [
          "Urban speed limit: 50 km/h",
          "Highway speed limit: 80 km/h (heavy vehicles: 60 km/h)",
          "Expressway limit: 110 km/h",
          "Blood alcohol limit: 0.08% (zero for professional drivers)",
          "Roundabouts: always give way to traffic already in the roundabout",
          "Seatbelts: mandatory for ALL occupants in any position",
        ],
      },
      { type: "h2", text: "Speed Limits in Kenya", id: "speed-limits" },
      {
        type: "p",
        text: "Speed limits in Kenya are set under the Traffic Act and vary by road type. Speed governors are mandatory for all public service and commercial vehicles:",
      },
      {
        type: "table",
        headers: ["Road Type", "Private Vehicles", "Heavy / Commercial Vehicles"],
        rows: [
          ["Urban areas & built-up zones", "50 km/h", "50 km/h"],
          ["Rural roads & highways", "80 km/h", "60 km/h"],
          ["Expressways & motorways", "110 km/h", "80 km/h"],
          ["School zones / Hospital areas", "30 km/h", "30 km/h"],
          ["When towing another vehicle", "50 km/h", "40 km/h"],
        ],
      },
      {
        type: "warning",
        title: "Speed Cameras Are Active",
        text: "NTSA operates digital speed cameras on major routes including Thika Road, Mombasa Road, and Waiyaki Way. Fines are issued automatically. Exceeding 110 km/h can result in immediate licence cancellation.",
      },
      { type: "h2", text: "Right of Way Rules in Kenya", id: "right-of-way" },
      { type: "h3", text: "At Uncontrolled Intersections" },
      {
        type: "ul",
        items: [
          "Give way to traffic coming from your right at an uncontrolled junction",
          "Vehicles on major roads have priority over vehicles on minor roads",
          "Emergency vehicles (police, ambulance, fire) always have absolute right of way — pull over immediately",
          "Pedestrians have right of way at marked zebra crossings — you must stop",
          "Always give way to cyclists and motorcyclists when they are in a designated lane",
        ],
      },
      { type: "h3", text: "Pedestrian Right of Way" },
      {
        type: "ul",
        items: [
          "You must stop for pedestrians on a zebra crossing — failure is an offence",
          "Slow down near schools, hospitals, and bus stops",
          "Children crossing — always yield, even without a crossing",
          "Blind pedestrians using a white cane or guide dog always have priority",
        ],
      },
      { type: "h2", text: "Roundabout Rules in Kenya", id: "roundabouts" },
      {
        type: "p",
        text: "Roundabouts are common in Nairobi and other Kenyan cities. The rule is clear and consistent:",
      },
      {
        type: "ol",
        items: [
          "Traffic already in the roundabout has priority — you must give way when entering",
          "Approach the roundabout from the left-hand lane (Kenya drives on the left)",
          "Signal right when you intend to take the first or second exit",
          "Signal left as you approach your exit to indicate you are leaving",
          "Do not change lanes inside a roundabout without checking mirrors and signalling",
          "Do not overtake inside a roundabout",
          "Keep to the left lane for the first exit; use the right lane for exits further around",
        ],
      },
      {
        type: "tip",
        title: "Nairobi Roundabout Practice",
        text: "Nairobi has major roundabouts at Uhuru Highway, Kenyatta Avenue, and many suburban junctions. During your training, your Stega instructor will specifically practice these with you on the actual NTSA test routes.",
      },
      { type: "h2", text: "Overtaking & Lane Discipline", id: "overtaking" },
      {
        type: "ul",
        items: [
          "Always overtake on the right in Kenya (vehicles travel on the left, pass on the right)",
          "Never overtake at a solid white centre line — only at a broken/dashed line",
          "Do not overtake at bends, hills, zebra crossings, junctions, or where your view is restricted",
          "You must not overtake a vehicle that has stopped at a crossing for pedestrians",
          "Keep left except when overtaking — do not hog the right lane on dual carriageways",
          "Signal before changing lanes — give other drivers adequate warning",
          "Maintain a safe following distance — at least 2 seconds behind the vehicle in front",
        ],
      },
      { type: "h2", text: "Drink Driving Laws in Kenya", id: "alcohol" },
      {
        type: "p",
        text: "Kenya's legal blood alcohol limit is 0.08% (80mg of alcohol per 100ml of blood) for private vehicle drivers. However:",
      },
      {
        type: "table",
        headers: ["Driver Type", "Legal BAC Limit"],
        rows: [
          ["Private vehicle driver", "0.08% (80mg/100ml)"],
          ["Professional / PSV driver", "0.00% (zero tolerance)"],
          ["Learner driver (provisional)", "0.00% (zero tolerance)"],
          ["Commercial vehicle driver (C1, C2)", "0.00% (zero tolerance)"],
        ],
      },
      {
        type: "callout",
        title: "Drunk Driving Penalties",
        text: "First offence: Fine of KSh 50,000 and/or up to 3 years imprisonment, plus automatic licence suspension. Second offence: Fine of KSh 100,000 and/or up to 5 years in prison, plus cancellation of licence. There is no 'just one drink' — NTSA enforcement is active on Nairobi roads especially after midnight.",
        color: "red",
      },
      { type: "h2", text: "Mobile Phone Rules While Driving", id: "phone" },
      {
        type: "ul",
        items: [
          "Using a handheld mobile phone while driving is illegal — this includes calls, texting, and browsing",
          "Hands-free devices (Bluetooth earpieces, car kits) are permitted",
          "Even hands-free usage requires you to be in full control — distraction is still an offence",
          "Penalty for handheld phone use: KSh 10,000 to KSh 30,000 fine",
          "Repeat offences can lead to licence suspension",
        ],
      },
      { type: "h2", text: "Seatbelt Laws in Kenya", id: "seatbelts" },
      {
        type: "ul",
        items: [
          "Seatbelts are mandatory for ALL occupants in ALL seats — front and rear",
          "The driver is responsible for ensuring all passengers under 18 are belted",
          "Children under 3 years MUST use an approved child car seat",
          "Fine for driver not wearing seatbelt: KSh 1,000",
          "Fine for passenger not wearing seatbelt: KSh 500",
          "Matatu and bus operators must ensure all passengers are seated before moving",
        ],
      },
      { type: "h2", text: "Traffic Fines & Penalties in Kenya 2025", id: "penalties" },
      {
        type: "table",
        headers: ["Traffic Offence", "Fine (KSh)"],
        rows: [
          ["Speeding (up to 15 km/h over limit)", "3,000 – 5,000"],
          ["Speeding (30+ km/h over limit)", "Up to 100,000"],
          ["Using handheld mobile phone while driving", "10,000 – 30,000"],
          ["Not wearing seatbelt (driver)", "1,000"],
          ["Not wearing seatbelt (passenger)", "500"],
          ["Driving without a valid licence", "50,000"],
          ["Drunk driving (first offence)", "50,000 + imprisonment possible"],
          ["Jumping a red traffic light", "10,000"],
          ["Illegal parking", "2,000 – 5,000"],
          ["Overloading a vehicle", "Variable (by excess weight)"],
          ["Driving an uninsured vehicle", "50,000"],
          ["Driving an uninspected vehicle", "10,000"],
        ],
      },
      {
        type: "callout",
        title: "NTSA Uses Digital Enforcement",
        text: "NTSA uses CCTV cameras, speed cameras, and the TIMS digital system to track offences. Fines can be issued remotely and accumulate on your licence record. Unpaid fines can prevent you from renewing your licence.",
        color: "amber",
      },
    ],
    faqs: [
      {
        q: "What is the speed limit in Nairobi city?",
        a: "The speed limit in Nairobi and all urban areas in Kenya is 50 km/h. On the Nairobi Expressway, the limit is 110 km/h. School zones and hospital areas have a 30 km/h limit.",
      },
      {
        q: "What is Kenya's drink driving limit?",
        a: "The legal blood alcohol concentration (BAC) limit for private vehicle drivers in Kenya is 0.08% (80mg per 100ml of blood). For professional drivers, PSV operators, and learners, the limit is zero — any alcohol is illegal.",
      },
      {
        q: "Is it illegal to use a phone while driving in Kenya?",
        a: "Yes. Using a handheld mobile phone while driving is illegal in Kenya under the Traffic Act. The fine is KSh 10,000 to KSh 30,000. Hands-free Bluetooth devices are permitted.",
      },
      {
        q: "Who has right of way at a roundabout in Kenya?",
        a: "Traffic already inside the roundabout has priority. Vehicles approaching the roundabout must give way and wait until it is safe to enter. This is the consistent rule at all Kenyan roundabouts.",
      },
      {
        q: "Are seatbelts compulsory for back seat passengers in Kenya?",
        a: "Yes. Seatbelts are mandatory for all occupants in all seats — front and rear. The driver is legally responsible for ensuring all passengers under 18 are wearing seatbelts. Fines apply to both driver and unbelted passengers.",
      },
    ],
  },

  // ── POST 3 ─────────────────────────────────────────────────
  {
    slug: "ntsa-driving-test-tips-pass-first-attempt",
    title: "NTSA Driving Test Guide 2025 — 10 Tips to Pass on Your First Attempt",
    excerpt:
      "Everything you need to know about the NTSA driving test in Kenya — what happens on test day, the theory and practical test breakdown, the 7 most common reasons people fail, and a day-of checklist.",
    date: "2025-06-10",
    updated: "2025-06-29",
    readTime: 7,
    category: "Driving Test",
    categoryColor: "bg-emerald-600 text-white",
    image: "/images/slider2.jpg",
    imageAlt: "Stega Driving School branded training car on Nairobi streets",
    keywords: [
      "NTSA driving test Kenya",
      "how to pass driving test Kenya",
      "NTSA practical test tips",
      "NTSA theory test Kenya",
      "driving test Nairobi tips",
      "pass NTSA test first time",
    ],
    toc: [
      { id: "test-overview", title: "Test Overview" },
      { id: "theory-test", title: "NTSA Theory (Written) Test" },
      { id: "practical-test", title: "Practical Driving Test" },
      { id: "common-failures", title: "7 Common Reasons People Fail" },
      { id: "day-checklist", title: "Test Day Checklist" },
      { id: "top-tips", title: "10 Expert Tips to Pass First Time" },
    ],
    content: [
      {
        type: "p",
        text: "Stega Driving School has a 96% first-attempt NTSA pass rate — but that doesn't happen by accident. It comes from structured preparation, familiarity with what examiners look for, and practicing on the actual test routes. This guide gives you the insider knowledge to walk into your test with confidence.",
      },
      {
        type: "keypoints",
        title: "Test at a Glance",
        points: [
          "Two stages: Written Theory Test + Practical Driving Test",
          "Theory test: multiple-choice questions on highway code, road signs, and traffic laws",
          "Practical test: 30–45 minutes on real Nairobi roads with an NTSA examiner",
          "You must pass theory before booking practical",
          "Stega's pass rate: 96% on first attempt",
        ],
      },
      { type: "h2", text: "NTSA Driving Test Overview", id: "test-overview" },
      {
        type: "p",
        text: "The NTSA driving licence test in Kenya has two distinct parts. You must pass both to receive your licence. They are taken separately, with the theory test always first:",
      },
      {
        type: "table",
        headers: ["Test Stage", "Format", "Duration", "Passing Standard"],
        rows: [
          ["Theory (Written) Test", "Multiple choice questions", "45–60 minutes", "75% or above"],
          ["Practical Driving Test", "On-road assessment with examiner", "30–45 minutes", "Examiner's assessment"],
        ],
      },
      { type: "h2", text: "NTSA Theory (Written) Test — What to Expect", id: "theory-test" },
      {
        type: "p",
        text: "The theory test is a computer-based or paper multiple-choice exam. It tests your knowledge of Kenya's Highway Code, road signs, traffic laws, and safe driving principles.",
      },
      { type: "h3", text: "What the Theory Test Covers" },
      {
        type: "ul",
        items: [
          "Kenya Highway Code rules — right of way, lane discipline, following distances",
          "Road signs — warning (triangular), regulatory (round), informatory (rectangular)",
          "Road markings — white lines, yellow lines, pedestrian crossings",
          "Traffic light sequences and rules",
          "Speed limits across different road types",
          "Alcohol and drug driving limits",
          "Vehicle safety checks and maintenance basics",
          "First aid for road accidents",
          "Environmental rules — parking, emissions",
        ],
      },
      {
        type: "tip",
        title: "The Best Resource: The Kenya Highway Code",
        text: "The official Kenya Highway Code (published by NTSA) is the primary source for theory test questions. Study it cover to cover. Your Stega instructor will take you through the key sections in theory class using the full-size Hi-Way signs charts.",
      },
      { type: "h2", text: "NTSA Practical Driving Test — What the Examiner Checks", id: "practical-test" },
      {
        type: "p",
        text: "The practical test is conducted on actual Nairobi roads with an NTSA examiner sitting in the passenger seat. The test typically follows a set route of 30–45 minutes. The examiner marks you on:",
      },
      {
        type: "ul",
        items: [
          "Vehicle check before moving off — mirrors, seat position, seatbelt",
          "Moving off safely — mirrors, signal, manoeuvre (MSM routine)",
          "Clutch control and smooth gear changes (for manual vehicles)",
          "Speed management — driving at appropriate speed for conditions",
          "Correct lane use and following distance",
          "Indication — using indicators early and correctly",
          "Roundabout technique — giving way, signalling correctly",
          "Turning left and right at junctions — proper observation",
          "Reversing — straight and around a corner",
          "Parking — parallel parking or bay parking",
          "Emergency stop — when instructed by examiner",
          "Overall observation and awareness of other road users",
        ],
      },
      { type: "h2", text: "7 Most Common Reasons People Fail the NTSA Test", id: "common-failures" },
      {
        type: "ol",
        items: [
          "Poor mirror use — not checking mirrors before moving, changing lanes, or turning",
          "Incorrect roundabout technique — entering without giving way or failing to signal",
          "Stalling the engine — especially on hill starts in manual vehicles",
          "Not indicating — failing to signal before turning, changing lanes, or pulling out",
          "Wrong lane position — hugging the centre line or wrong side on curves",
          "Excessive speed — driving too fast for road conditions even within the limit",
          "Poor clutch control — coasting (holding down the clutch too long) or jerky gear changes",
        ],
      },
      {
        type: "warning",
        title: "These Are Immediate Fails",
        text: "Dangerous actions that endanger the examiner, other road users, or yourself result in automatic test failure regardless of how well you performed elsewhere: running a red light, not giving way at a pedestrian crossing, aggressive overtaking, or failing to stop when required.",
      },
      { type: "h2", text: "Test Day Checklist", id: "day-checklist" },
      {
        type: "ul",
        items: [
          "Bring your original National ID and provisional driving licence",
          "Bring your NTSA test appointment confirmation",
          "Arrive at least 30 minutes before your test time",
          "Wear comfortable, closed-toe shoes suitable for operating pedals",
          "Ensure the training vehicle has a valid inspection sticker and insurance",
          "Do a pre-test drive with your instructor on the morning of test day",
          "Eat a good meal — don't test on an empty or over-full stomach",
          "Stay hydrated and get a full night's sleep the night before",
        ],
      },
      { type: "h2", text: "10 Expert Tips to Pass the NTSA Test First Time", id: "top-tips" },
      {
        type: "ol",
        items: [
          "Practise the exact test routes — ask your instructor to drive you over them repeatedly",
          "Exaggerate your mirror checks — make them visible to the examiner (turn your head clearly)",
          "Commentary driving — narrate what you see as you drive to improve hazard perception",
          "Never rush. Drive at a smooth, consistent pace — haste causes mistakes",
          "Use MSM at every junction: Mirror → Signal → Manoeuvre",
          "Treat every zebra crossing as if a pedestrian is about to step out",
          "Practise hill starts until they are automatic — this is a very common test element",
          "Know the NTSA test centre routes — familiarise yourself with local roundabouts and junctions",
          "On test day, take a deep breath. Nervousness causes more failures than lack of skill",
          "If you make a mistake during the test, don't panic — continue driving correctly; one minor fault rarely fails you",
        ],
      },
    ],
    faqs: [
      {
        q: "How many questions are in the NTSA theory test?",
        a: "The NTSA theory (written) test typically contains 30 to 40 multiple-choice questions. You need to score 75% or above to pass. Questions cover road signs, highway code, traffic laws, and vehicle safety.",
      },
      {
        q: "How long is the NTSA practical driving test?",
        a: "The NTSA practical driving test lasts approximately 30 to 45 minutes on real roads. You will be accompanied by an NTSA examiner who assesses your driving technique, observation, and road behaviour.",
      },
      {
        q: "Can I use my own car for the NTSA driving test in Kenya?",
        a: "You can use a privately owned vehicle if it is roadworthy and has valid insurance and inspection. However, most candidates use the training school's dual-control vehicle, which is the examiner's preferred choice for safety reasons.",
      },
      {
        q: "How soon can I retake the NTSA test if I fail?",
        a: "If you fail either the theory or practical test, you can rebook and retake it after completing additional training with your school. There is no mandatory waiting period, but you must pay the test fee again.",
      },
      {
        q: "What is the pass mark for the NTSA theory test in Kenya?",
        a: "You need to score at least 75% to pass the NTSA written theory test. The test covers the Kenya Highway Code, road signs, traffic laws, and safe driving practices.",
      },
    ],
  },

  // ── POST 4 ─────────────────────────────────────────────────
  {
    slug: "kenya-highway-code-road-signs-explained",
    title: "Kenya Highway Code: Road Signs, Road Markings & Traffic Signals Explained",
    excerpt:
      "A visual-style guide to Kenya's highway code — the three categories of road signs, what every colour and shape means, road markings, traffic light sequences, and how they appear in the NTSA test.",
    date: "2025-06-15",
    updated: "2025-06-29",
    readTime: 9,
    category: "Highway Code",
    categoryColor: "bg-amber-600 text-white",
    image: "/images/theory-class.jpg",
    imageAlt: "Stega Driving School theory classroom with Hi-Way road signs charts",
    keywords: [
      "Kenya road signs",
      "Kenya highway code",
      "NTSA road signs Kenya",
      "traffic signs Kenya",
      "road markings Kenya",
      "traffic signals Kenya",
    ],
    toc: [
      { id: "sign-system", title: "Kenya Road Sign System" },
      { id: "warning-signs", title: "Warning Signs (Triangular)" },
      { id: "regulatory-signs", title: "Regulatory Signs (Round)" },
      { id: "informatory-signs", title: "Informatory Signs (Rectangular)" },
      { id: "road-markings", title: "Road Markings Explained" },
      { id: "traffic-signals", title: "Traffic Light Rules" },
    ],
    content: [
      {
        type: "p",
        text: "Kenya follows the Vienna Convention on road signs — the same international system used across most of the world. Understanding road signs is essential for the NTSA theory test and, more importantly, for safe driving on Kenyan roads every day.",
      },
      {
        type: "keypoints",
        title: "Key Facts About Kenya Road Signs",
        points: [
          "Warning signs: RED TRIANGLE — alert you to a hazard ahead",
          "Regulatory signs: RED CIRCLE — tell you what you must or must not do",
          "Informatory signs: RECTANGLE — give information about routes and destinations",
          "Give Way: inverted triangle",
          "Stop: red OCTAGON — the only octagonal sign",
          "All signs are covered in the Kenya Highway Code (NTSA publication)",
        ],
      },
      { type: "h2", text: "The Kenya Road Sign System", id: "sign-system" },
      {
        type: "p",
        text: "Kenya road signs are divided into three main categories, each with a distinct shape and colour system that makes them identifiable at a glance — even before you read the text:",
      },
      {
        type: "table",
        headers: ["Category", "Shape", "Colour", "Purpose"],
        rows: [
          ["Warning / Hazard Signs", "Equilateral Triangle (point up)", "Yellow/white with red border", "Alert you to a danger or hazard ahead"],
          ["Regulatory / Prohibitory Signs", "Circle", "White with red border, or blue circle", "Tell you what you MUST or MUST NOT do"],
          ["Informatory / Direction Signs", "Rectangle or square", "Blue, green, or white", "Provide information about routes, distances, facilities"],
          ["Give Way", "Inverted triangle (point down)", "White with red border", "You must give way to traffic on the priority road"],
          ["Stop", "Octagon", "Red with white letters", "You must stop completely — the only octagonal sign"],
        ],
      },
      { type: "h2", text: "Warning Signs (Triangular) — Hazard Ahead", id: "warning-signs" },
      {
        type: "p",
        text: "Warning signs are triangular with a red border and yellow or white background. They alert you to a potential hazard ahead — but they do not require you to stop. You must slow down and be prepared to react.",
      },
      { type: "h3", text: "Common Warning Signs in Kenya" },
      {
        type: "table",
        headers: ["Sign Name", "What It Means", "What To Do"],
        rows: [
          ["Junction Ahead (crossroads)", "An intersection is approaching", "Slow down, be ready to give way"],
          ["Roundabout Ahead", "Roundabout is ahead", "Slow down, prepare to give way to traffic inside"],
          ["Sharp Bend Left/Right", "Tight bend in road ahead", "Reduce speed significantly before the bend"],
          ["Double Bend", "Two bends in opposite directions", "Reduce speed, stay in lane"],
          ["Pedestrian Crossing Ahead", "Zebra crossing approaching", "Slow down, be prepared to stop for pedestrians"],
          ["School Zone Ahead", "School nearby — children crossing", "Slow to 30 km/h, be prepared to stop"],
          ["Slippery Road Ahead", "Road surface may be slippery", "Reduce speed, increase following distance"],
          ["Narrowing Road", "Road becomes narrower ahead", "Stay central, be prepared for oncoming traffic"],
          ["Uneven Surface / Bump", "Speed bump or rough road ahead", "Reduce speed before reaching the bump"],
          ["Level Crossing (railway)", "Train tracks cross the road ahead", "Slow down significantly, look both ways"],
          ["Animal Crossing", "Wild or domestic animals may cross", "Slow down, be alert"],
          ["Road Works Ahead", "Construction or maintenance ahead", "Slow down, follow temporary signs"],
        ],
      },
      { type: "h2", text: "Regulatory Signs (Round) — You Must Obey", id: "regulatory-signs" },
      {
        type: "p",
        text: "Regulatory signs are circular and tell you what you must or must not do. They are legally binding — ignoring them is a traffic offence. There are two types: prohibitory (red border) and mandatory (blue background).",
      },
      { type: "h3", text: "Prohibitory Signs (White circle with red border)" },
      {
        type: "table",
        headers: ["Sign", "Meaning"],
        rows: [
          ["Speed Limit (e.g., 50)", "Maximum speed in km/h — you must not exceed this"],
          ["No Entry", "You must not drive into this road"],
          ["No Overtaking", "You must not overtake — solid red diagonal lines"],
          ["No U-Turn", "U-turns are forbidden"],
          ["No Parking", "You must not park here"],
          ["No Stopping", "You must not stop or park here at any time"],
          ["No Right/Left Turn", "Turning in that direction is forbidden"],
          ["No Horns / Quiet Zone", "Sounding your horn is prohibited"],
        ],
      },
      { type: "h3", text: "Mandatory Signs (Blue circle)" },
      {
        type: "ul",
        items: [
          "Keep Left / Keep Right — you MUST stay on that side",
          "Minimum Speed — you must drive at least this fast (unusual but exists in tunnels/some highways)",
          "Ahead Only — you must go straight; turning is not permitted",
          "Turn Left/Right Ahead — mandatory turn direction",
        ],
      },
      { type: "h2", text: "Informatory Signs (Rectangular) — Guidance & Information", id: "informatory-signs" },
      {
        type: "p",
        text: "Informatory signs provide useful information but do not issue commands. They are rectangular and use blue, green, or white backgrounds:",
      },
      {
        type: "ul",
        items: [
          "Direction signs (green/blue): show destination names, distances, and route numbers",
          "Hospital signs (blue with H): hospital ahead",
          "Petrol station (blue): fuel station nearby",
          "Parking (blue P): parking area ahead",
          "Motorway signs (green): route and distance information",
          "Tourist signs (brown): points of interest",
          "One Way (white arrow on blue): indicates one-way traffic direction",
        ],
      },
      { type: "h2", text: "Road Markings — Lines, Arrows, and Symbols", id: "road-markings" },
      {
        type: "table",
        headers: ["Marking", "Meaning"],
        rows: [
          ["Solid white centre line", "Do NOT overtake — no crossing this line"],
          ["Broken/dashed white centre line", "Overtaking permitted when safe"],
          ["Double solid white lines", "Absolutely no crossing — treat as a barrier"],
          ["White edge line (fog line)", "Marks the left edge of the road"],
          ["Yellow centre line", "No parking on either side of this section"],
          ["Zigzag lines (near crossings)", "No parking or overtaking near pedestrian crossings"],
          ["White arrows on road", "Show permitted direction of travel for your lane"],
          ["Box junction (yellow criss-cross)", "Do not enter unless your exit is clear"],
          ["White pedestrian stripes", "Zebra crossing — give way to pedestrians"],
          ["Bus lane markings", "Reserved for buses during stated hours"],
        ],
      },
      { type: "h2", text: "Traffic Light Rules in Kenya", id: "traffic-signals" },
      {
        type: "table",
        headers: ["Light Colour", "Meaning", "What to Do"],
        rows: [
          ["Red", "Stop", "Stop before the stop line — do not proceed"],
          ["Amber / Yellow", "Prepare to stop", "Stop if safe to do so — do NOT speed up to beat it"],
          ["Green", "Proceed if safe", "Move forward only when the way is clear"],
          ["Red + Amber together", "Prepare to move off", "Get ready to go — do not move yet"],
          ["Green arrow", "Filter movement", "You may proceed in the arrow direction only"],
          ["Flashing amber", "Treat as Give Way", "Slow down and proceed with caution"],
          ["Flashing red", "Treat as Stop sign", "Stop completely, then proceed when clear"],
        ],
      },
      {
        type: "warning",
        title: "Amber Means Stop — Not Speed Up",
        text: "A very common mistake by Kenyan drivers is accelerating through an amber light. Amber means stop if it is safe to do so. Jumping an amber or red light is a KSh 10,000 fine and creates serious accident risk.",
      },
      {
        type: "tip",
        title: "Study the Official Hi-Way Signs Chart",
        text: "The NTSA provides an official Hi-Way signs wall chart — the same one used in Stega Driving School's theory classroom. It shows every sign with its correct name. Study this chart alongside the Kenya Highway Code book for guaranteed theory test success.",
      },
    ],
    faqs: [
      {
        q: "How many road sign categories are there in Kenya?",
        a: "There are three main categories of road signs in Kenya: Warning signs (triangular, red border), Regulatory signs (circular — either red border prohibitory or blue mandatory), and Informatory signs (rectangular). The Stop sign is uniquely octagonal and the Give Way sign is an inverted triangle.",
      },
      {
        q: "What does a solid white line in the middle of the road mean in Kenya?",
        a: "A solid white centre line means you must NOT overtake. You may only cross it in an emergency or to access a property. A broken/dashed white line means overtaking is permitted when it is safe to do so.",
      },
      {
        q: "Can I cross an amber traffic light in Kenya?",
        a: "No. Amber means you must stop if it is safe to do so. If you are too close to the stop line to stop safely, you may proceed — but accelerating to 'beat' an amber light is both illegal and dangerous, and can result in a fine.",
      },
      {
        q: "What does a yellow line on the road mean in Kenya?",
        a: "A yellow centre line means no parking on either side of the road in that section. It is commonly used near junctions, bends, and bus stops where parking would be dangerous or obstruct traffic.",
      },
    ],
  },

  // ── POST 5 ─────────────────────────────────────────────────
  {
    slug: "manual-vs-automatic-driving-kenya-which-licence",
    title: "Manual vs Automatic Driving in Kenya — Which Licence Should You Get?",
    excerpt:
      "Confused between Class B1 (automatic) and Class B2 (manual) in Kenya? This guide compares both licences, their pros and cons, costs, and helps you decide exactly which one to get — or whether to get both.",
    date: "2025-06-20",
    updated: "2025-06-29",
    readTime: 6,
    category: "Courses",
    categoryColor: "bg-[#1D4DA1] text-white",
    image: "/images/course-manual.jpg",
    imageAlt: "Manual driving course training in Nairobi",
    keywords: [
      "manual vs automatic driving Kenya",
      "Class B1 vs B2 Kenya",
      "automatic driving licence Kenya",
      "manual driving licence Kenya",
      "which driving licence Kenya",
      "combined driving course Kenya",
    ],
    toc: [
      { id: "differences", title: "Key Differences" },
      { id: "classes", title: "Class B1 vs Class B2" },
      { id: "pros-cons", title: "Pros & Cons Compared" },
      { id: "costs", title: "Training Duration & Costs" },
      { id: "which-to-choose", title: "Which Should You Get?" },
      { id: "combined", title: "The Combined Course Option" },
    ],
    content: [
      {
        type: "p",
        text: "One of the most common questions at Stega Driving School is: 'Should I do manual or automatic?' The answer depends on your goals, budget, and what vehicles you'll be driving in real life. Here's everything you need to decide.",
      },
      {
        type: "keypoints",
        title: "Quick Answer",
        points: [
          "Manual (Class B2): Can drive both manual and automatic vehicles",
          "Automatic (Class B1): Can ONLY drive automatic vehicles",
          "Combined (B1+B2): Full flexibility — recommended for long-term value",
          "Manual training takes slightly longer but opens more vehicle options",
          "Most Kenyan vehicles (especially older ones) are manual transmission",
        ],
      },
      { type: "h2", text: "Key Differences Between Manual and Automatic Driving", id: "differences" },
      {
        type: "table",
        headers: ["Aspect", "Manual (Class B2)", "Automatic (Class B1)"],
        rows: [
          ["Clutch pedal", "Yes — 3 pedals (clutch, brake, accelerator)", "No — 2 pedals (brake, accelerator)"],
          ["Gear changes", "Manual — driver controls gears", "Automatic — car changes gears for you"],
          ["Hill starts", "More challenging — clutch control required", "Easier — car holds on slopes"],
          ["Learning curve", "Steeper — takes more practice", "Easier — faster to get on the road"],
          ["Vehicle options (licence)", "Can drive both manual AND automatic vehicles", "Automatic vehicles ONLY"],
          ["Fuel efficiency", "Usually more fuel-efficient when driven well", "Slightly less efficient (older autos)"],
          ["Vehicle availability in Kenya", "Very high — most Kenyan cars are manual", "Growing — urban vehicles trend to auto"],
        ],
      },
      { type: "h2", text: "Understanding Class B1 vs Class B2 in Kenya", id: "classes" },
      {
        type: "p",
        text: "These are the two standard passenger car licence classes issued by NTSA Kenya:",
      },
      { type: "h3", text: "Class B1 — Automatic Vehicles" },
      {
        type: "ul",
        items: [
          "Authorises you to drive only automatic transmission passenger vehicles",
          "You CANNOT legally drive a manual transmission vehicle on a B1-only licence",
          "Training is 1–3 weeks (shorter than manual)",
          "Ideal for: beginners who feel overwhelmed by clutch control, city commuters, or those who will only ever drive an automatic",
          "Popular with mature learners or those with physical limitations that make clutch use difficult",
        ],
      },
      { type: "h3", text: "Class B2 — Manual Vehicles" },
      {
        type: "ul",
        items: [
          "Authorises you to drive manual AND automatic vehicles",
          "A B2 licence holder can legally drive any non-commercial passenger car in Kenya",
          "Training is 2–4 weeks (slightly longer)",
          "Ideal for: anyone who wants maximum flexibility, or who drives older vehicles, rural roads, or needs to drive different cars",
          "The most commonly held licence class in Kenya",
        ],
      },
      { type: "h2", text: "Pros and Cons: Manual vs Automatic in Kenya", id: "pros-cons" },
      { type: "h3", text: "Manual Driving (Class B2)" },
      {
        type: "table",
        headers: ["Pros", "Cons"],
        rows: [
          ["Licence covers both manual AND automatic", "Longer learning curve — clutch takes practice"],
          ["Most Kenyan vehicles are manual — more choice", "More mentally demanding initially"],
          ["Better control on off-road/rough terrain", "Stalling common for beginners"],
          ["Generally lower fuel consumption", "Hill starts require practice"],
          ["Long-term better value", "More things to master before test"],
        ],
      },
      { type: "h3", text: "Automatic Driving (Class B1)" },
      {
        type: "table",
        headers: ["Pros", "Cons"],
        rows: [
          ["Easier and faster to learn", "Licence is ONLY valid for automatic vehicles"],
          ["Less mentally demanding", "Cannot drive manual vehicles — limits options"],
          ["Ideal for heavy city traffic (Nairobi)", "Automatic vehicles often more expensive to buy/maintain"],
          ["Better for those with physical limitations", "If car breaks down — fewer loan vehicles available"],
          ["Comfortable and smooth drive", "Fewer older or rural vehicles are automatic"],
        ],
      },
      { type: "h2", text: "Training Duration & Cost Comparison", id: "costs" },
      {
        type: "table",
        headers: ["Course", "Duration", "Relative Cost"],
        rows: [
          ["Automatic (Class B1)", "1–3 weeks", "Lower"],
          ["Manual (Class B2)", "2–4 weeks", "Moderate"],
          ["Combined (Class B1+B2)", "3–5 weeks", "Best value (both at once)"],
        ],
      },
      {
        type: "callout",
        title: "For Exact Course Fees",
        text: "Call Stega Driving School on 0722 213 810 or visit any of our 5 branches. Fees vary by schedule preference and payment plan. We offer flexible M-Pesa installment options.",
        color: "blue",
      },
      { type: "h2", text: "Which Driving Licence Should You Get in Kenya?", id: "which-to-choose" },
      { type: "h3", text: "Get Manual (B2) if:" },
      {
        type: "ul",
        items: [
          "You want maximum flexibility in the vehicles you can drive",
          "You plan to drive older or more affordable vehicles (most are manual in Kenya)",
          "You'll be driving on rural roads, rough terrain, or areas outside Nairobi",
          "You want to be able to borrow or hire any vehicle without restriction",
          "You're training for a career that requires driving (delivery, logistics, personal driver)",
        ],
      },
      { type: "h3", text: "Get Automatic (B1) if:" },
      {
        type: "ul",
        items: [
          "You find the clutch overwhelming and want to get on the road faster",
          "You own or will exclusively drive an automatic vehicle (modern Japanese/European cars)",
          "You drive primarily in heavy urban traffic (stop-start city driving is easier in automatic)",
          "You have a physical condition that makes clutch control difficult",
          "Your budget is tighter and you want the shortest training duration",
        ],
      },
      { type: "h2", text: "The Combined Course — Best Value for Most People", id: "combined" },
      {
        type: "p",
        text: "The Combined Course (Class B1+B2) trains you on both automatic and manual vehicles in one program. You graduate with both licences, giving you total flexibility to drive any passenger car in Kenya. It's slightly longer (3–5 weeks) but:",
      },
      {
        type: "ul",
        items: [
          "You save money compared to doing two separate courses",
          "You only need to go through the registration and NTSA test process once",
          "You're fully licensed for every passenger car in Kenya — present and future",
          "Most Stega students who take the combined course say they wish they'd done it from the start",
        ],
      },
      {
        type: "tip",
        title: "Our Recommendation",
        text: "If you're unsure, choose the Combined Course (B1+B2). The extra weeks of training are worth the lifetime of flexibility. Not sure? Call us on 0722 213 810 — our team will help you choose based on your specific situation.",
      },
    ],
    faqs: [
      {
        q: "Can I drive a manual car with an automatic (Class B1) licence in Kenya?",
        a: "No. A Class B1 (automatic) licence in Kenya only permits you to drive automatic transmission vehicles. Driving a manual vehicle on a B1-only licence is illegal. You would need to upgrade to a Class B2 licence.",
      },
      {
        q: "Can I drive an automatic car with a manual (Class B2) licence in Kenya?",
        a: "Yes. A Class B2 (manual) licence in Kenya allows you to drive both manual AND automatic vehicles. It is the more versatile of the two licence classes.",
      },
      {
        q: "Is manual or automatic driving harder to learn in Kenya?",
        a: "Manual driving has a steeper initial learning curve due to clutch control, gear changes, and hill starts. Most students find automatic faster to learn. However, with a good instructor, manual is very achievable — Stega's instructors specialise in patient manual transmission coaching.",
      },
      {
        q: "What is the combined driving course in Kenya?",
        a: "The Combined Course (Class B1/B2) trains you on both automatic and manual vehicles in one program. You sit one NTSA test covering both classes and graduate fully licensed for any passenger car. It typically takes 3–5 weeks.",
      },
    ],
  },

  // ── POST 6 ─────────────────────────────────────────────────
  {
    slug: "psv-licence-kenya-matatu-bus-driver-guide",
    title: "PSV Licence Kenya 2025 — How to Become a Licensed Matatu or Bus Driver",
    excerpt:
      "The complete guide to getting a PSV (Public Service Vehicle) licence in Kenya — covering Classes D1, D2, and B3, requirements, NTSA application steps, training, and career opportunities for professional drivers.",
    date: "2025-06-25",
    updated: "2025-06-29",
    readTime: 8,
    category: "PSV",
    categoryColor: "bg-slate-700 text-white",
    image: "/images/course-psv.jpg",
    imageAlt: "PSV and professional driving course at Stega Driving School",
    keywords: [
      "PSV licence Kenya",
      "matatu driver licence Kenya",
      "PSV driving course Nairobi",
      "Class D1 D2 B3 Kenya",
      "how to become matatu driver Kenya",
      "bus driver licence Kenya",
      "professional driver Kenya NTSA",
    ],
    toc: [
      { id: "what-is-psv", title: "What is a PSV Licence?" },
      { id: "psv-classes", title: "PSV Licence Classes (D1, D2, B3)" },
      { id: "requirements", title: "PSV Licence Requirements" },
      { id: "process", title: "Application & Training Process" },
      { id: "regulations", title: "PSV Operator Regulations" },
      { id: "career", title: "Career Opportunities" },
    ],
    content: [
      {
        type: "p",
        text: "A Public Service Vehicle (PSV) licence authorises you to drive vehicles that carry passengers for commercial purposes — matatus, buses, school vans, tour vehicles, and taxis. Earning a PSV licence opens up professional driving as a career, with NTSA setting strict requirements to ensure passenger safety on Kenya's roads.",
      },
      {
        type: "keypoints",
        title: "PSV Licence at a Glance",
        points: [
          "PSV classes: D1 (minibuses/matatus), D2 (large buses), B3 (taxis, tours, ambulances)",
          "Minimum age: 24 years for D1/D2 classes",
          "Must already hold a B-class licence for at least 3 years",
          "Medical certificate mandatory — stricter standards than regular licences",
          "Zero alcohol tolerance — any alcohol detected = disqualification",
          "Must complete approved PSV training at an NTSA-accredited school",
        ],
      },
      { type: "h2", text: "What is a PSV Licence in Kenya?", id: "what-is-psv" },
      {
        type: "p",
        text: "PSV stands for Public Service Vehicle. In Kenya, any vehicle used to transport passengers commercially — whether a matatu, bus, school bus, taxi, tour van, or ambulance — is classified as a PSV. Operating any of these vehicles requires a special PSV licence from NTSA, in addition to your regular driving licence.",
      },
      {
        type: "p",
        text: "PSV licences are regulated more strictly than standard licences because these drivers carry public passengers whose safety depends entirely on the driver's competence and responsibility.",
      },
      { type: "h2", text: "PSV Licence Classes in Kenya: D1, D2, and B3", id: "psv-classes" },
      {
        type: "table",
        headers: ["Class", "Vehicle Type", "Examples"],
        rows: [
          ["Class D1", "Minibuses & matatus (up to 36 seats)", "Matatus, school buses (small), service vans"],
          ["Class D2", "Large passenger buses (37+ seats)", "City buses, intercity coaches, large school buses"],
          ["Class B3", "Specialised PSV — small capacity", "Taxis, Uber/Bolt vehicles, tour vehicles, ambulances, hearses"],
        ],
      },
      {
        type: "callout",
        title: "Note on Class B3",
        text: "Class B3 is technically a B-class PSV endorsement for small commercial passenger vehicles — including taxis and ride-hailing (Uber, Bolt, Little). If you drive passengers for payment in any vehicle, you need at minimum a B3 endorsement on your licence.",
        color: "blue",
      },
      { type: "h2", text: "Requirements to Get a PSV Licence in Kenya", id: "requirements" },
      {
        type: "p",
        text: "NTSA PSV licensing requirements are stricter than standard licences. You must meet all of the following:",
      },
      { type: "h3", text: "Age & Experience Requirements" },
      {
        type: "ul",
        items: [
          "Minimum age: 24 years for Class D1 and D2 (matatu and bus)",
          "Minimum age: 21 years for Class B3 (taxi/tour/ambulance)",
          "Must hold a valid B-class driving licence (B1 or B2) for at least 3 years continuously",
          "No major traffic offences or licence suspension in the past 3 years",
        ],
      },
      { type: "h3", text: "Medical Requirements" },
      {
        type: "ul",
        items: [
          "Full medical fitness certificate from a government-approved hospital",
          "Vision test: minimum standards are stricter than regular licences",
          "Hearing test: PSV drivers must meet minimum hearing standards",
          "Blood pressure and heart health assessment",
          "Medical certificate must be renewed every 2 years (regular licence is 3–10 years)",
        ],
      },
      { type: "h3", text: "Documents Required" },
      {
        type: "ul",
        items: [
          "Valid Kenyan National ID or passport",
          "Current B-class driving licence (minimum 3 years old for D1/D2)",
          "Certificate of Good Conduct from the Directorate of Criminal Investigations (DCI)",
          "Medical fitness certificate (PSV-specific, more comprehensive)",
          "2 recent passport photographs",
          "Certificate of completion from an NTSA-accredited PSV training school",
          "Payment receipts for all NTSA fees",
        ],
      },
      {
        type: "warning",
        title: "Certificate of Good Conduct is Mandatory",
        text: "You must obtain a Certificate of Good Conduct from the DCI Kenya. This background check ensures no criminal record. Apply at the nearest DCI office or through the eCitizen portal — it typically takes 2–4 weeks to receive.",
      },
      { type: "h2", text: "PSV Training & Application Process", id: "process" },
      {
        type: "ol",
        items: [
          "Confirm you meet all eligibility requirements (age, existing licence, clean record)",
          "Obtain Certificate of Good Conduct from DCI Kenya (apply early — takes 2–4 weeks)",
          "Get your PSV medical fitness certificate from a government hospital",
          "Enrol at an NTSA-accredited PSV training school (like Stega Driving School)",
          "Complete PSV training: advanced vehicle handling, passenger safety, route management, emergency procedures, customer service",
          "Sit and pass the PSV theory test at NTSA",
          "Sit and pass the PSV practical test with an NTSA examiner",
          "Pay PSV licence fees at NTSA (fees vary by class)",
          "Receive your PSV endorsement on your driving licence",
          "Apply for annual PSV badge (separate from licence — required to work commercially)",
        ],
      },
      { type: "h2", text: "Key PSV Operator Regulations in Kenya", id: "regulations" },
      {
        type: "p",
        text: "Once licensed, PSV drivers in Kenya must comply with strict NTSA operational rules. Violations can result in licence suspension, fines, or arrest:",
      },
      {
        type: "table",
        headers: ["Regulation", "Detail"],
        rows: [
          ["Zero alcohol tolerance", "Any measurable BAC is an immediate disqualification for PSV drivers"],
          ["Speed governor mandatory", "All PSVs must have a functioning, NTSA-approved speed governor"],
          ["Annual PSV badge renewal", "PSV badge (separate from licence) must be renewed every year"],
          ["Uniform/identification", "Driver must display valid PSV badge while operating"],
          ["Passenger limits", "Strictly no overloading — penalty for every excess passenger"],
          ["Operating hours", "Commercial PSVs have regulated night operation hours in some zones"],
          ["Vehicle inspection", "More frequent mandatory inspections for PSV vehicles"],
          ["Route compliance", "Matatus must operate only on their licensed route"],
        ],
      },
      { type: "h2", text: "Career Opportunities with a PSV Licence", id: "career" },
      {
        type: "p",
        text: "A PSV licence opens significant professional driving opportunities in Kenya's growing transport sector:",
      },
      {
        type: "ul",
        items: [
          "Matatu driving (D1) — one of the most common PSV careers, particularly in Nairobi's busy route network",
          "City bus / intercity coach driver (D2) — major companies like Metro Trans, City Hoppa, and intercity lines",
          "Tour vehicle / safari driver — high-earning niche serving Kenya's thriving tourism industry",
          "Ride-hailing (B3) — Uber, Bolt, Little — growing market with flexible hours",
          "School bus driver — stable employment with county councils and private schools",
          "Corporate transport — company shuttle drivers for NGOs, corporations, embassies",
          "Ambulance driver — critical healthcare role, often employed by hospitals and Red Cross",
        ],
      },
      {
        type: "tip",
        title: "PSV Training at Stega Driving School",
        text: "Our PSV / Professional Driving course at Stega covers all 5 branches across Nairobi — CBD, Jevanjee, Embakasi, Savannah, and Kayole. The course includes advanced vehicle handling, NTSA PSV test preparation, and passenger safety training. Duration: 4–6 weeks. Call 0722 213 810 to enrol.",
      },
    ],
    faqs: [
      {
        q: "What is the minimum age to get a PSV licence in Kenya?",
        a: "The minimum age for a Class D1 or D2 PSV licence (matatu/bus) is 24 years. For Class B3 (taxi, tours), the minimum age is 21 years. You must also hold a B-class driving licence for at least 3 years before applying.",
      },
      {
        q: "Do I need a Certificate of Good Conduct to get a PSV licence in Kenya?",
        a: "Yes. A Certificate of Good Conduct from the Directorate of Criminal Investigations (DCI) Kenya is mandatory for all PSV licence applications. It verifies you have no criminal record. Apply through eCitizen or at a DCI office — it takes approximately 2–4 weeks.",
      },
      {
        q: "Can I drive Uber or Bolt in Kenya without a PSV licence?",
        a: "Technically, driving passengers commercially (including Uber, Bolt, and Little) requires a Class B3 PSV endorsement on your licence. NTSA enforcement of this requirement has been increasing. Operating ride-hailing services without a B3 licence can result in fines and vehicle impoundment.",
      },
      {
        q: "How long is a PSV licence valid in Kenya?",
        a: "The PSV driving licence follows the same 3-year or 10-year validity as regular licences. However, the separate PSV badge (required to operate commercially) must be renewed annually through NTSA.",
      },
      {
        q: "How much does PSV training cost in Kenya?",
        a: "PSV training course fees vary by school and class. Call Stega Driving School on 0722 213 810 for current fees. Flexible M-Pesa payment plans are available. NTSA test fees are separate — approximately KSh 2,270 for the practical test.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
