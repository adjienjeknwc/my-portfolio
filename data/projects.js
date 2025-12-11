export const projects = [
    {
      id: 1,
      title: "FOODILY-Online food ordering website",
      tagline: "Analyzed customer pain points, designed intuitive ordering journeys, and developed a responsive food-ordering interface end-to-end.",
      role: "UX Researcher & Frontend Dev",
      // The "BA" Section: Focus on Business Logic & Outcomes
      businessProblem: "Users were abandoning the food-ordering process because menus were cluttered, delivery time estimates were unclear, and checkout required too many steps, causing a high drop-off rate before payment.",
      solution: "Streamlined the ordering flow by restructuring the menu UX, adding real-time delivery estimates, and designing a 2-step checkout. Built a responsive interface that reduced friction and increased successful orders.",
      // The "Dev" Section: Focus on Frontend Implementation
      techStack: ["React", "Tailwind CSS", "javascript","figma","html5","css"],
      liveLink: "#",
      githubLink: "#",
      uxReport: "/airbnb-ux-report.pdf",
      // This color code shows design system thinking
      color: "bg-blue-50" 
    },
    
      {
        id: "retail-pulse",
        title: "RetailPulse Dashboard",
        category: "Full Stack Development",
        description: "A real-time business analytics platform that visualizes sales data and tracks inventory levels. Features a split-cloud architecture (Render + Vercel) and live database connection.",
        techStack: ["MERN Stack", "Tailwind CSS", "Recharts", "MongoDB Atlas"],
        liveLink: "https://retail-pulse-eta.vercel.app",
        repoLink: "https://github.com/adjienjeknwc/retail-pulse",
        image: "/Users/aditi/my-portfolio/public/retail ss.png" // You need to add a screenshot to your assets folder!
      }
    {
      id: 3,
      title: "Cooking Guide app",
      tagline: "Making Cooking Simple Through Clear, Guided Experiences",
      role: "Frontend Developer",
      businessProblem: "Beginners struggled to follow recipes because instructions were too long, ingredients weren’t clearly organized, and there was no step-by-step guidance, leading to user confusion and low engagement..",
      solution: "Designed a simplified cooking experience with categorized ingredients, visual step-by-step instructions, and timers built into each stage. Developed a clean, responsive UI that made recipe execution effortless for beginners",
      techStack: ["React", "javascript", "CSS Grid"],
      liveLink: "#",
      githubLink: "#",
      uxReport: "/airbnb-ux-report.pdf",
      color: "bg-rose-50"
    }
  ];