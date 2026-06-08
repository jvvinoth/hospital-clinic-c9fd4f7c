export const siteContent = {
  meta: {
    title: "Hospital Clinic - Hospital-Grade Care Without the ER Wait",
    description: "Book your appointment directly with our internal medical clinic. Qualified physicians, seamless access to your hospital records, and trusted care within the system you know.",
  },
  
  hero: {
    headline: "Hospital-grade care without the ER wait",
    subtext: "Book your appointment directly with our internal medical clinic. Qualified physicians, seamless access to your hospital records, and the trusted care you expect — all within the system you already know.",
    ctaPrimary: "Book appointment via WhatsApp",
    ctaSecondary: "Or call us at (555) 123-4567",
    whatsappLink: "https://wa.me/1234567890?text=Hello%2C%20I%27d%20like%20to%20book%20an%20appointment.%20%0A%0AName%3A%20%0APreferred%20date%2Ftime%3A%20%0AReason%20for%20visit%3A%20",
    hoursCard: {
      title: "Clinic Hours",
      schedule: [
        { days: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
        { days: "Saturday", hours: "9:00 AM – 2:00 PM" },
        { days: "Sunday", hours: "Closed" },
      ],
      note: "Walk-ins welcome based on availability",
    },
  },
  
  services: {
    heading: "Medical services we provide",
    subtext: "Comprehensive care for hospital patients, staff, and families — no emergency room required.",
    items: [
      {
        icon: "Stethoscope",
        title: "General Consultation",
        description: "Physical exams and consultations for non-emergency conditions. Perfect for routine check-ups and new health concerns.",
      },
      {
        icon: "ClipboardCheck",
        title: "Follow-up Care",
        description: "Ongoing treatment monitoring and post-discharge appointments. We access your hospital records for seamless continuity of care.",
      },
      {
        icon: "FileText",
        title: "Diagnostic Coordination",
        description: "Lab work, imaging referrals, and results review — all coordinated within the hospital network for faster turnaround.",
      },
      {
        icon: "Users",
        title: "Specialist Referrals",
        description: "Direct liaison with hospital departments and specialists. We'll connect you to the right expert without the runaround.",
      },
      {
        icon: "Briefcase",
        title: "Workplace Health",
        description: "Convenient on-site medical services for hospital employees and staff. Pre-employment physicals, occupational health, and more.",
      },
    ],
  },
  
  howToBook: {
    heading: "How to book your appointment",
    subtext: "Three simple steps to see a physician — no complicated forms, no long waits.",
    steps: [
      {
        number: 1,
        title: "Contact us via WhatsApp",
        description: "Tap the WhatsApp button and send us your name, preferred date/time, and reason for visit. We'll confirm within 2 hours during business hours.",
      },
      {
        number: 2,
        title: "Receive confirmation",
        description: "We'll reply with your appointment time and any preparation instructions. You'll also receive a reminder 24 hours before your visit.",
      },
      {
        number: 3,
        title: "Visit the clinic",
        description: "Bring your hospital ID or insurance card and arrive 10 minutes early. We're located on the 2nd floor of the main hospital building, near the east elevators.",
      },
    ],
    ctaText: "Book your appointment now",
  },
  
  about: {
    heading: "Part of the hospital you trust",
    bodyCopy: [
      "Our clinic is a fully integrated department of [Hospital Name], staffed by board-certified physicians and nurse practitioners who work directly within the hospital system.",
      "Every provider has access to your complete medical history, lab results, and imaging — ensuring coordinated care whether you're seeing us for a routine visit or following up after a hospital stay.",
      "We maintain the same rigorous standards as every department in this hospital, with the added convenience of scheduled appointments and shorter wait times than the emergency room.",
    ],
    credentials: [
      "Board-certified physicians in internal medicine and family practice",
      "Direct access to hospital labs, imaging, and specialist network",
      "Electronic medical records integrated with hospital system",
      "Accepted by all major insurance plans contracted with [Hospital Name]",
    ],
  },
  
  patientInfo: {
    heading: "Patient information",
    subtext: "Everything you need to know before your visit.",
    blocks: [
      {
        icon: "CreditCard",
        title: "Insurance accepted",
        items: [
          "All plans accepted by [Hospital Name]",
          "Medicare and Medicaid",
          "Hospital employee health plans",
          "Self-pay options available",
          "Copays due at time of visit",
        ],
      },
      {
        icon: "MapPin",
        title: "Find us",
        items: [
          "Main Hospital Building, 2nd Floor",
          "East Wing, near elevator bank B",
          "Follow signs for \"Internal Clinic\"",
          "Accessible entrance available",
          "Visitor parking in Lot C",
        ],
      },
      {
        icon: "Clipboard",
        title: "Come prepared",
        items: [
          "Photo ID and insurance card",
          "List of current medications",
          "Previous medical records (if new patient)",
          "Copay or payment method",
          "Arrive 10 minutes early",
        ],
      },
    ],
  },
  
  contact: {
    heading: "Get in touch",
    whatsapp: {
      text: "Message us on WhatsApp",
      link: "https://wa.me/1234567890?text=Hello%2C%20I%27d%20like%20to%20book%20an%20appointment.%20%0A%0AName%3A%20%0APreferred%20date%2Ftime%3A%20%0AReason%20for%20visit%3A%20",
    },
    phone: {
      label: "Call us",
      number: "(555) 123-4567",
      subtext: "Monday–Friday, 8:00 AM – 6:00 PM",
    },
    hours: {
      title: "Hours",
      schedule: [
        "Monday – Friday: 8:00 AM – 6:00 PM",
        "Saturday: 9:00 AM – 2:00 PM",
        "Sunday: Closed",
      ],
    },
    location: {
      title: "Location",
      address: [
        "Main Hospital Building",
        "2nd Floor, East Wing",
        "123 Medical Center Drive",
        "Cityville, ST 12345",
      ],
    },
  },
} as const;
