export const projects = [
  {
    id: 1,
    title: "Grid lock-EV charging solution",
    tagline:
      "Dont over if i run out of battery now,find a nearby host and pay for the service .",
    role: "ux researcher,buisness analyst,mern stack developer ",

    businessProblem:
      "EV drivers face long waits and range anxiety due to limited public infrastructure, while private charging capacity remains inaccessible.",
    solution:
      "Grid-Lock creates a P2P marketplace with dynamic pricing and GPS routing to unlock private chargers and efficiently manage traffic in real-time.",
    
    techStack: ["React", "Tailwind CSS", "Node/Express", "MongoDB", "Socket.io"],
    
    liveLink: "https://grid-lock-ev-platform.vercel.app/",
    githubLink: "https://github.com/adjienjeknwc/grid-lock-ev-platform",
    imageUrl: "/images/gridlock ss.png",
    color: "bg-purple-50",
  },

  {
    id: 2,
    title: "RetailPulse Dashboard",
    tagline: "Live Business Intelligence Platform",
    role: "Full Stack Developer & Business Analyst",
    businessProblem:
      "Small retailers struggle with manual inventory tracking and lack real-time visibility into daily revenue trends.",
    solution:
      "Built and deployed a fully functional MERN stack dashboard connecting a React frontend to a cloud-based MongoDB backend to visualize sales data instantly.",
    
    techStack: ["React.js", "Node.js + Express", "MongoDB Atlas", "Tailwind CSS", "Recharts"],
    
    liveLink: "https://retail-pulse-eta.vercel.app",
    githubLink: "https://github.com/adjienjeknwc/retail-pulse",
    imageUrl: "/images/retail ss.png",
    color: "bg-indigo-50",
  },

  {
    id: 3,
    title: "Foodily-online food delivery app",
    tagline: "user interface design along with prototype ",
    role: "UX design",
    businessProblem:
      "Users struggle to quickly find preferred meals due to cluttered menus and slow, confusing checkout flows.",
    solution:
      "Designed an intuitive, streamlined ordering experience with smart categorization and a faster, clearer checkout flow.",
    
    techStack: [ "Figma"],
    imageUrl: "/images/airbnb-ss.png",
    color: "bg-rose-50",
  },
];
