export const projects = [
  {
    id: 1,
    title: "FOODILY - Online food ordering website",
    tagline:
      "Analyzed customer pain points, designed intuitive ordering journeys, and developed a responsive food-ordering interface end-to-end.",
    role: "UX Researcher & Frontend Dev",

    businessProblem:
      "Users were abandoning the food-ordering process because menus were cluttered, delivery times were unclear, and checkout required too many steps.",
    solution:
      "Redesigned the menu UX, added real-time delivery estimates, and implemented a 2-step checkout. Reduced friction and increased completed orders.",

    techStack: ["React", "Tailwind CSS", "JavaScript", "Figma", "HTML5", "CSS"],
    liveLink: "#",
    githubLink: "#",
    uxReport: "/airbnb-ux-report.pdf",
    color: "bg-blue-50",
  },

  {
    id: 2,
    title: "RetailPulse Dashboard",
    category: "Full Stack Development",
    tagline:
      "A real-time analytics dashboard for sales and inventory insights.",
    description:
      "Real-time business analytics platform with sales visualization, inventory tracking, and split-cloud architecture (Render + Vercel).",

    techStack: ["MERN Stack", "Tailwind CSS", "Recharts", "MongoDB Atlas"],
    liveLink: "https://retail-pulse-eta.vercel.app",
    githubLink: "https://github.com/adjienjeknwc/retail-pulse",

    // Put your screenshot inside /public/assets/
    image: "/assets/retail-ss.png",
  },

  {
    id: 3,
    title: "Cooking Guide app",
    tagline: "Making cooking simple through guided experiences.",
    role: "Frontend Developer",

    businessProblem:
      "Beginners struggled with long instructions, unclear ingredient grouping, and no guided flow, resulting in confusion and drop-off.",
    solution:
      "Designed step-by-step instructions, ingredient categorization, and built-in timers. Created a clean UI for effortless cooking execution.",

    techStack: ["React", "JavaScript", "CSS Grid"],
    liveLink: "#",
    githubLink: "#",
    uxReport: "/airbnb-ux-report.pdf",
    color: "bg-rose-50",
  },
];
