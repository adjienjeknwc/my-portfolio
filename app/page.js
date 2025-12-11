import React from 'react';
import { 
  ArrowRight, Code, PenTool, BarChart3, Github, Linkedin, Mail, 
  Award, CheckCircle2, FileBadge, Calendar, FileText 
} from 'lucide-react';
import { projects } from '../data/projects';
import { profile } from '../data/profile';
// IMPORT THE CALCULATOR (Ensure app/components/ROICalculator.js exists)
import ROICalculator from './components/ROICalculator';

export default function Portfolio() {
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
          {/* THE NEW NAV BUTTON */}
          <a 
              href="/resume.pdf" 
              download // <--- This forces the browser to download it instead of opening it
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
            Currently exploring: <span className="font-bold text-slate-900">advance buisness analyst and deeper into user Researcher</span>
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
          Hi, I'm  <span className="font-semibold text-slate-900">{profile.name}</span>. 
          I bridge the gap between stakeholders and code. I don't just build apps; 
          I ensure they solve the right problem, look great, and are technically feasible.
        </p>
        
        <div className="flex gap-4">
          <a href="#work" className="px-8 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2">
            View My Work <ArrowRight size={20} />
          </a>
          {/* CALENDLY LINK (Replace # with real link later) */}
          {/* REPLACED THE OLD BUTTON WITH THIS ONE */}
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
            
            {/* Category 1: Frontend (Your Strength) */}
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

            {/* Category 2: Design (Your Strength) */}
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

            {/* Category 3: Analysis (Your Value Add) */}
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

            {/* Category 4: Backend (Your "Awareness") */}
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
          {/* This is safe because we imported it from a separate file */}
          <ROICalculator />
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="work" className="max-w-5xl mx-auto px-6 py-32">
        <h2 className="text-3xl font-bold mb-16">Selected Case Studies</h2>
        
        <div className="space-y-24">
          {projects.map((project) => (
            <div key={project.id} className="group grid md:grid-cols-12 gap-8 items-start">
              <div className={`md:col-span-5 aspect-[4/3] rounded-2xl ${project.color} flex items-center justify-center border border-slate-100`}>
                <div className="text-center p-6">
                   <FileBadge size={48} className="mx-auto mb-3 text-slate-300" />
                   <span className="text-slate-400 font-medium block">Project Preview</span>
                </div>
              </div>

              <div className="md:col-span-7 space-y-6">
                <div>
                  <span className="text-blue-600 font-semibold text-sm tracking-wide">{project.role}</span>
                  <h3 className="text-3xl font-bold mt-2 mb-2">{project.title}</h3>
                  <p className="text-xl text-slate-500 font-light">{project.tagline}</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <h4 className="text-xs font-bold text-slate-400 uppercase mb-2 flex items-center gap-2">
                    <CheckCircle2 size={14} /> The Business Problem
                  </h4>
                  <p className="text-slate-700 text-sm">{project.businessProblem}</p>
                </div>
                {/* --- UPDATED BUTTONS SECTION --- */}
                <div className="pt-4 flex flex-wrap gap-4">
                  {/* Button 1: Live Demo */}
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-700 transition-colors flex items-center gap-2">
                      View Demo <ArrowRight size={16} />
                    </a>
                  )}

                  {/* Button 2: GitHub */}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" className="px-4 py-2 border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:border-slate-400 transition-colors flex items-center gap-2">
                      <Github size={16} /> Code
                    </a>
                  )}

                  {/* Button 3: THE NEW UX REPORT BUTTON */}
                  {project.uxReport && (
                    <a 
                      href={project.uxReport} 
                      target="_blank"
                      className="px-4 py-2 bg-blue-50 text-blue-700 border border-blue-200 text-sm font-bold rounded-lg hover:bg-blue-100 transition-colors flex items-center gap-2"
                    >
                      <FileText size={16} /> Read UX Report
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
              {/* FIXED: Removed onClick, made it a simple link */}
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