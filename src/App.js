import React from 'react';
import { 
  ArrowRight, Code, PenTool, BarChart3, Github, Linkedin, Mail, 
  Award, CheckCircle2, FileBadge, Calendar, FileText, ExternalLink 
} from 'lucide-react';

// --- 1. INTERNAL COMPONENTS (So you don't need extra files) ---

const ROICalculator = () => (
  <div className="p-6 bg-white/10 rounded-xl border border-white/20">
    <h3 className="text-xl font-bold mb-2">ROI Calculator</h3>
    <p className="text-sm opacity-80">
      (This is a placeholder for your ROI component. logic goes here.)
    </p>
  </div>
);

// --- 2. YOUR DATA (Edit this directly here) ---

const profile = {
  name: "Aditi Verma",
  role: "Product Engineer & UX Analyst",
  calendly: "https://calendly.com", 
  social: { 
    github: "#", 
    linkedin: "#", 
    email: "mailto:you@example.com" 
  },
  certifications: [
    { id: 1, title: "Google UX Design", issuer: "Coursera", date: "2023", icon: "UX" },
    { id: 2, title: "Certified BA Professional", issuer: "IIBA", date: "2024", icon: "BA" },
    { id: 3, title: "MERN Stack Specialization", issuer: "Udemy", date: "2025", icon: "DEV" }
  ]
};

const projects = [

{
  id: 1,
    title: "Grid Lock-EV charging solution",
    tagline: "Secure Your Charge. Beat the Rush.",
    role: "MERN stack + UX",
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
    role: "Full Stack Developer & Business Analyst",
    tagline: "Live Business Intelligence Platform",
    businessProblem: "Small retailers struggle with manual inventory tracking and lack real-time visibility into daily revenue trends.",
    techStack: ["React.js", "Node.js + Express", "MongoDB Atlas", "Tailwind CSS", "Recharts"],
    // ✅ IMAGE URL ADDED HERE:
    imageUrl: "images/retail ss.png",
    liveLink: "#",
    githubLink: "#",
    color: "bg-blue-50"
  },
  {
    id: 3, // ✅ Unique ID
    title: "Foodily ",
    role: "UI designer ",
    tagline: "online food ordering app",
    businessProblem: "Users struggle to quickly find preferred meals due to cluttered menus and slow, confusing checkout flows.",
    techStack: ["Figma"],
    // No image here yet, so it will show the fallback icon
    imageUrl: "", 
    liveLink: "#",
    githubLink: "#",
    color: "bg-rose-50"
  }
];

// --- 3. THE MAIN APP COMPONENT ---

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight text-slate-900">
            {profile.name}<span className="text-blue-600">.</span>
          </div>
          <div className="flex gap-6 text-sm font-medium text-slate-500">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#work" className="hover:text-blue-600 transition-colors">Work</a>
            <a 
              href="/resume.pdf" 
              download 
              className="px-4 py-2 bg-slate-900 text-white rounded-full text-xs font-bold hover:bg-slate-700 transition-all flex items-center gap-2"
            >
              <FileText size={14} /> Resume
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header id="about" className="max-w-5xl mx-auto px-6 pt-40 pb-20">
        <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 w-fit mb-8">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-medium text-slate-600">
            Currently exploring: <span className="font-bold text-slate-900">Advanced Business Analysis & User Research</span>
          </span>
        </div>

        <div className="inline-block px-3 py-1 mb-6 text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
          {profile.role}
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          Designing for Humans.<br />
          Analyzing for Business.<br />
          <span className="text-blue-600">Building for Reality.</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mb-10">
          Hi, I'm <span className="font-semibold text-slate-900">{profile.name}</span>. 
          I bridge the gap between stakeholders and code. I don't just build apps; 
          I ensure they solve the right problem, look great, and are technically feasible.
        </p>
        
        <div className="flex gap-4">
          <a href="#work" className="px-8 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2">
            View My Work <ArrowRight size={20} />
          </a>
          <a 
            href={profile.calendly} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 border border-slate-200 text-slate-900 font-medium rounded-lg hover:border-slate-400 transition-colors flex items-center gap-2"
          >
            <Calendar size={20} /> Book a Chat
          </a>
        </div>
      </header>

      {/* --- CERTIFICATIONS --- */}
      <section id="certifications" className="max-w-5xl mx-auto px-6 py-24 border-b border-slate-100">
         <div className="flex items-center gap-3 mb-10">
            <Award className="text-blue-600" size={28} />
            <h2 className="text-3xl font-bold">Certifications & Credentials</h2>
         </div>
         <div className="grid md:grid-cols-3 gap-6">
            {profile.certifications.map((cert) => (
              <div key={cert.id} className="group relative bg-white border border-slate-200 p-6 rounded-xl hover:border-blue-300 hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold
                    ${cert.icon === 'UX' ? 'bg-purple-100 text-purple-700' : 
                      cert.icon === 'BA' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'}
                  `}>
                    {cert.icon}
                  </div>
                  <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded-full">
                    {cert.date}
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-tight mb-1 group-hover:text-blue-600 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-slate-500">{cert.issuer}</p>
              </div>
            ))}
         </div>
      </section>

      {/* --- TECH STACK SECTION --- */}
      <section className="bg-slate-50 py-24 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Technical Proficiency</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              I don't just use tools; I choose the right technology for the business problem. 
              Here is my current stack:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Code size={18} className="text-emerald-500"/> Engineering
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>React.js / Next.js</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>Tailwind CSS</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>JavaScript (ES6+)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>Git & GitHub</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <PenTool size={18} className="text-purple-500"/> Design & UX
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>Figma (Prototyping)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>Adobe XD</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>Whimsical (Wireframes)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>WCAG Accessibility</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BarChart3 size={18} className="text-blue-500"/> Analysis
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>SQL (Basic Queries)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Jira / Trello</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Google Analytics</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Excel (Pivot Tables)</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 border-dashed">
              <h3 className="font-bold text-slate-500 mb-4 flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest bg-slate-200 px-2 py-1 rounded">Familiar With</span>
              </h3>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center gap-2">Node.js</li>
                <li className="flex items-center gap-2">MongoDB</li>
                <li className="flex items-center gap-2">REST API Architecture</li>
                <li className="flex items-center gap-2">Python</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- ROI CALCULATOR SECTION --- */}
      <section className="bg-blue-600 py-24 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Hire a Technical UX Analyst?</h2>
          <p className="mb-12 text-blue-100">Because small UX improvements compound into massive revenue. Try the calculator:</p>
          <ROICalculator />
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="work" className="max-w-5xl mx-auto px-6 py-32">
        <h2 className="text-3xl font-bold mb-16">Selected Case Studies</h2>
        
        <div className="space-y-24">
          {projects.map((project) => (
            <div key={project.id} className="group grid md:grid-cols-12 gap-8 items-start">
              
              {/* Image / Preview Area */}
              <div className={`md:col-span-5 aspect-[4/3] rounded-2xl ${project.color || 'bg-slate-100'} flex items-center justify-center border border-slate-100 shadow-sm overflow-hidden relative`}>
                
                {/* ✅ THIS IS THE LOGIC THAT SHOWS THE IMAGE */}
                {project.imageUrl ? (
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                ) : (
                  <div className="text-center p-6">
                     <FileBadge size={48} className="mx-auto mb-3 text-slate-300" />
                     <span className="text-slate-400 font-medium block">Project Preview</span>
                  </div>
                )}
                
              </div>

              {/* Content Area */}
              <div className="md:col-span-7 space-y-4">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-blue-600 font-bold text-sm tracking-wide uppercase">{project.role}</span>
                  </div>
                  <h3 className="text-3xl font-bold mt-2 mb-2 text-slate-900">{project.title}</h3>
                  <p className="text-lg text-slate-500 font-light leading-relaxed">{project.tagline}</p>
                </div>

                {/* Tech Stack Badges */}
                {project.techStack && (
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-md border border-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Business Problem Box */}
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 mt-4">
                  <h4 className="text-xs font-bold text-slate-400 uppercase mb-2 flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500" /> The Business Problem
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed">{project.businessProblem}</p>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap gap-3">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-700 transition-colors flex items-center gap-2 shadow-md hover:shadow-lg">
                      View Demo <ExternalLink size={16} />
                    </a>
                  )}

                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="px-5 py-2.5 border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-colors flex items-center gap-2">
                      <Github size={16} /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to build something viable?</h2>
          <div className="flex justify-center gap-6 mb-12">
            <a href={profile.social.github} className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Github size={24} />
            </a>
            <a href={profile.social.linkedin} className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={profile.social.email} className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          
          <div className="mt-8 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                System Status: All Systems Operational
              </span>
              <a href="#" className="hover:text-white transition-colors">
                Accessibility Statement
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}