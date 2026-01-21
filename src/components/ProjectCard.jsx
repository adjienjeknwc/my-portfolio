import React from 'react';
import { Github, ExternalLink, FileBadge, CheckCircle2 } from 'lucide-react';

const ProjectCard = ({ project }) => {
  // NEXT.JS FIX: Static imports are objects. We need the .src string.
  const imagePath = project.imageUrl?.src || project.imageUrl;

  return (
    <div className="group grid md:grid-cols-12 gap-8 items-start">
      {/* IMAGE CONTAINER */}
      <div className={`md:col-span-5 aspect-[4/3] rounded-2xl ${project.color} flex items-center justify-center border border-slate-200 overflow-hidden relative shadow-sm`}>
        {imagePath ? (
          <img 
            src={imagePath} 
            alt={project.title} 
            className="w-full h-full object-cover block"
            style={{ minHeight: '100%', minWidth: '100%' }}
          />
        ) : (
          <div className="text-center p-6">
             <FileBadge size={48} className="mx-auto mb-3 text-slate-300" /> 
             <span className="text-slate-400 font-medium block">Project Preview</span>
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="md:col-span-7 space-y-4">
        <span className="text-blue-600 font-bold text-sm uppercase">{project.role}</span>
        <h3 className="text-3xl font-bold text-slate-900">{project.title}</h3>
        <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
          <h4 className="text-xs font-bold text-slate-400 uppercase mb-2 flex items-center gap-2">
            <CheckCircle2 size={14} className="text-emerald-500" /> The Business Problem
          </h4>
          <p className="text-slate-700 text-sm leading-relaxed">{project.businessProblem}</p>
        </div>
        <div className="pt-4 flex flex-wrap gap-3">
          <a href={project.liveLink} target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg flex items-center gap-2">
            View Demo <ExternalLink size={16} />
          </a>
          <a href={project.githubLink} target="_blank" rel="noreferrer" className="px-5 py-2.5 border border-slate-200 text-slate-700 text-sm font-medium rounded-lg flex items-center gap-2">
            <Github size={16} /> Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;