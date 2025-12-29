import React from 'react';
import { Github, ExternalLink, FileBadge, CheckCircle2 } from 'lucide-react';

// 1. DIRECT IMPORTS 
// Next.js static imports return an object; we access .src in the img tag below.
import gridlockImg from './assets/images/gridlock.png';
import retailImg from './assets/images/retailss.png';
import foodilyImg from './assets/images/foodily.png';

const projects = [
  {
    id: 1,
    title: "Grid lock-EV charging solution",
    role: "UX Researcher & MERN Developer",
    businessProblem: "EV drivers face long waits due to limited public infrastructure.",
    imageUrl: gridlockImg,
    color: "bg-purple-50",
    liveLink: "https://grid-lock-ev-platform.vercel.app/",
    githubLink: "https://github.com/adjienjeknwc/grid-lock-ev-platform"
  },
  {
    id: 2,
    title: "RetailPulse Dashboard",
    role: "Full Stack Developer & Analyst",
    businessProblem: "Small retailers struggle with manual inventory tracking.",
    imageUrl: retailImg,
    color: "bg-indigo-50",
    liveLink: "https://retail-pulse-eta.vercel.app",
    githubLink: "https://github.com/adjienjeknwc/retail-pulse"
  },
  {
    id: 3,
    title: "Foodily",
    role: "UX Design",
    businessProblem: "Users struggle to find meals due to cluttered menus.",
    imageUrl: foodilyImg,
    color: "bg-rose-50",
    // ✅ ADDED LINKS FOR FOODILY BUTTONS
    liveLink: "https://your-foodily-demo.com", 
    githubLink: "https://github.com/yourusername/foodily"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans p-10">
      <h2 className="text-3xl font-bold mb-16">Selected Case Studies</h2>
      <div className="space-y-24">
        {projects.map((project) => (
          <div key={project.id} className="group grid md:grid-cols-12 gap-8 items-start">
            
            {/* IMAGE CONTAINER */}
            <div className={`md:col-span-5 aspect-[4/3] rounded-2xl ${project.color} flex items-center justify-center border border-slate-200 overflow-hidden relative shadow-sm`}>
  {project.imageUrl ? (
    <img 
      /* .src extracts the actual URL string from the Next.js import object */
      src={project.imageUrl.src || project.imageUrl} 
      alt={project.title} 
      className="w-full h-full object-cover block"
      /* Forces the image to fill the container so it's not invisible */
      style={{ minHeight: '100%', minWidth: '100%' }}
    />
  ) : (
    <div className="text-center p-6">
       <FileBadge size={48} className="mx-auto mb-3 text-slate-300" /> 
       <span className="text-slate-400 font-medium block">Project Preview</span>
    </div>
  )}
</div>
            {/* TEXT CONTENT */}
            <div className="md:col-span-7 space-y-4">
              <span className="text-blue-600 font-bold text-sm uppercase">{project.role}</span>
              <h3 className="text-3xl font-bold text-slate-900">{project.title}</h3>
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                <h4 className="text-xs font-bold text-slate-400 uppercase mb-2 flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500" /> The Business Problem
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed">{project.businessProblem}</p>
              </div>

              {/* BUTTONS SECTION */}
              <div className="pt-4 flex flex-wrap gap-3">
                {project.liveLink && project.liveLink !== "#" && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-700 transition-colors flex items-center gap-2 shadow-md"
                  >
                    View Demo <ExternalLink size={16} />
                  </a>
                )}

                {project.githubLink && project.githubLink !== "#" && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="px-5 py-2.5 border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-colors flex items-center gap-2"
                  >
                    <Github size={16} /> Code
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}