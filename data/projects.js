// 1. IMPORT IMAGES
// From data/projects.js, we go up one level (..), into src, then assets
import gridlockImg from '../src/assets/images/gridlock.png';
import retailImg from '../src/assets/images/retailss.png';
import foodilyImg from '../src/assets/images/foodily.png';

export const projects = [
  {
    id: 1,
    title: "Grid lock-EV charging solution",
    tagline: "Don't worry about running out of battery; find a nearby host and pay for the service seamlessly.",
    role: "UX Researcher, Business Analyst, MERN Stack Developer",
    businessProblem: "EV drivers face long waits and range anxiety due to limited public infrastructure.",
    solution: "Grid-Lock creates a P2P marketplace with dynamic pricing and GPS routing to unlock private chargers.",
    techStack: ["React", "Tailwind CSS", "Node/Express", "MongoDB"],
    liveLink: "https://grid-lock-ev-platform.vercel.app/",
    githubLink: "https://github.com/adjienjeknwc/grid-lock-ev-platform",
    // ✅ USES THE IMPORTED VARIABLE
    imageUrl: gridlockImg,
    color: "bg-purple-50",
  },
  {
    id: 2,
    title: "RetailPulse Dashboard",
    role: "Full Stack Developer & Business Analyst",
    tagline: "Live Business Intelligence Platform",
    businessProblem: "Small retailers struggle with manual inventory tracking.",
    solution: "Built a MERN stack dashboard connecting React to MongoDB to visualize sales data instantly.",
    techStack: ["React.js", "Node.js + Express", "MongoDB Atlas"],
    liveLink: "https://retail-pulse-eta.vercel.app",
    githubLink: "https://github.com/adjienjeknwc/retail-pulse",
    // ✅ USES THE IMPORTED VARIABLE
    imageUrl: retailImg,
    color: "bg-indigo-50",
  },
  {
    id: 3,
    title: "Foodily",
    role: "UX Design",
    tagline: "Online food ordering app prototype.",
    businessProblem: "Users struggle to find meals due to cluttered menus.",
    solution: "Designed an intuitive ordering experience with smart categorization.",
    techStack: ["Figma"],
    // ✅ USES THE IMPORTED VARIABLE
    imageUrl: foodilyImg,
    color: "bg-rose-50",
  }
];