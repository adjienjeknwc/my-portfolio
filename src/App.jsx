import React from 'react';
import { Github, ExternalLink, FileBadge, CheckCircle2 } from 'lucide-react';

// 1. DIRECT IMAGE IMPORTS
// These imports are objects in Next.js; we access the URL via .src.
import gridlockImg from './assets/images/gridlock.png';
import retailImg from './assets/images/retailss.png';
import foodilyImg from './assets/images/foodily.png';

const projects = [
  {
    id: 1,
    title: "Grid lock-EV charging solution",
    role: "UX Researcher & MERN Developer",
    businessProblem: "EV drivers face long waits and range anxiety due to limited public infrastructure.",
    imageUrl: gridlockImg,
    color: "bg-purple-50",
    liveLink: "https://grid-lock-ev-platform.vercel.app/",
    githubLink: "https://github.com/adjienjeknwc/grid-lock-ev-platform"
  },
  {
    id: 2,
    title: "RetailPulse Dashboard",
    role: "Full Stack Developer & Analyst",
    businessProblem: "Small retailers struggle with manual inventory tracking and lack real-time visibility.",
    imageUrl: retailImg,
    color: "bg-indigo-50",
    liveLink: "https://retail-pulse-eta.vercel.app",
    githubLink: "https://github.com/adjienjeknwc/retail-pulse"
  },
  {
    id: 3,
    title: "Foodily",
    role: "UX Design",
    businessProblem: "Users struggle to find meals quickly due to cluttered menus and confusing checkout flows.",
    imageUrl: foodilyImg,
    color: "bg-rose-50",
    liveLink: "https://your-foodily-demo.com", 
    githubLink: "https://github.com/yourusername/foodily"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans p-6 md:p-20">
      <div className="max-w-4xl mx-auto">
        <header className="mb-20">
          <h1 className="text-4xl font-bold tracking-tight">Selected Case Studies</h1>
          <p className="text-slate-500 mt-2 text-lg">A deep dive into business problems and technical solutions.</p>
        </header>

        {/* VERTICAL STACKED LAYOUT */}
        <div className="space-y-32">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col gap-10">
              
              {/* IMAGE SECTION (TOP) */}
              <div className={`w-full aspect-video rounded-3xl ${project.color} flex items-center justify-center border border-slate-200 overflow-hidden relative shadow-sm`}>
                {project.imageUrl ? (
                  <img 
                    /* Use .src to handle Next.js static image objects */
                    src={project.imageUrl.src || project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover block"
                    style={{ minHeight: '100%', minWidth: '100%' }}
                  />
                ) : (
                  <div className="text-center p-6 text-slate-300">
                     <FileBadge size={64} className="mx-auto mb-4" /> 
                     <span className="font-medium block uppercase tracking-widest text-xs">Preview Not Available</span>
                  </div>
                )}
              </div>

              {/* CONTENT SECTION (BOTTOM) */}
              <div className="space-y-6 max-w-3xl">
                <div>
                  <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">{project.role}</span>
                  <h3 className="text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">{project.title}</h3>
                </div>

                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-inner">
                  <h4 className="text-xs font-bold text-slate-400 uppercase mb-3 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500" /> The Business Problem
                  </h4>
                  <p className="text-slate-700 text-lg leading-relaxed">{project.businessProblem}</p>
                </div>

                {/* BUTTONS */}
                <div className="pt-4 flex flex-wrap gap-4">
                  {project.liveLink && project.liveLink !== "#" && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="px-8 py-4 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-700 transition-all flex items-center gap-2 shadow-lg hover:-translate-y-1"
                    >
                      View Live Demo <ExternalLink size={18} />
                    </a>
                  )}
                  {project.githubLink && project.githubLink !== "#" && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="px-8 py-4 border-2 border-slate-200 text-slate-700 font-medium rounded-xl hover:border-slate-400 transition-all flex items-center gap-2 hover:-translate-y-1"
                    >
                      <Github size={18} /> View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}