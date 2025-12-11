"use client"; // <--- THIS LINE FIXES THE ERROR. IT MUST BE AT THE TOP.

import React, { useState } from 'react';

export default function ROICalculator() {
  const [visitors, setVisitors] = useState(10000);
  const [conversion, setConversion] = useState(2.0);
  const [orderValue, setOrderValue] = useState(50);

  // The Logic
  const currentRevenue = visitors * (conversion / 100) * orderValue;
  const improvedRevenue = visitors * ((conversion + 0.5) / 100) * orderValue;
  const gain = improvedRevenue - currentRevenue;

  return (
    <div className="bg-white text-slate-900 rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto text-left">
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Monthly Visitors</label>
          <input 
            type="number" 
            value={visitors} 
            onChange={(e) => setVisitors(Number(e.target.value))}
            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg font-mono font-bold"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Conv. Rate (%)</label>
          <input 
            type="number" 
            step="0.1"
            value={conversion} 
            onChange={(e) => setConversion(Number(e.target.value))}
            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg font-mono font-bold"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Avg Order ($)</label>
          <input 
            type="number" 
            value={orderValue} 
            onChange={(e) => setOrderValue(Number(e.target.value))}
            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg font-mono font-bold"
          />
        </div>
      </div>

      <div className="border-t border-slate-100 pt-6">
        <p className="text-slate-500 text-sm mb-2">If I improve your UX by just <span className="font-bold text-blue-600">0.5%</span>...</p>
        <div className="flex items-end gap-4">
          <span className="text-4xl font-extrabold text-emerald-500">+${gain.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
          <span className="text-slate-400 mb-1 font-medium">Extra Monthly Revenue</span>
        </div>
      </div>
    </div>
  );
}