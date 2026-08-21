import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { placementsData } from '../../data/placements';
import { X, Search, Filter, Briefcase, Award, Building, ArrowUpDown } from 'lucide-react';

export const PlacementDirectoryModal = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('ALL');
  const [packageFilter, setPackageFilter] = useState('ALL');
  const [sortField, setSortField] = useState('regNo');
  const [sortAsc, setSortAsc] = useState(true);

  // Extract unique company list for dropdown
  const companiesList = useMemo(() => {
    const set = new Set(placementsData.map(p => p.company));
    return Array.from(set).sort();
  }, []);

  // Filtered & Sorted Dataset
  const filteredPlacements = useMemo(() => {
    return placementsData.filter(item => {
      // Search check
      const matchesSearch =
        item.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.regNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.company.toLowerCase().includes(searchTerm.toLowerCase());

      // Company check
      const matchesCompany = selectedCompany === 'ALL' || item.company === selectedCompany;

      // Package Tier check
      let matchesPackage = true;
      const numPkg = parseInt(item.package.replace(/[^0-9]/g, '')) || 0;

      if (packageFilter === '50L') {
        matchesPackage = numPkg >= 50;
      } else if (packageFilter === '20L') {
        matchesPackage = numPkg >= 20;
      } else if (packageFilter === '10L') {
        matchesPackage = numPkg >= 10;
      } else if (packageFilter === '5L') {
        matchesPackage = numPkg >= 5;
      } else if (packageFilter === '4-6L') {
        matchesPackage = item.package.includes('4–6') || item.package.includes('4–5') || numPkg < 7;
      }

      return matchesSearch && matchesCompany && matchesPackage;
    }).sort((a, b) => {
      let valA = a[sortField];
      let valB = b[sortField];

      if (sortField === 'package') {
        valA = parseInt(a.package.replace(/[^0-9]/g, '')) || 0;
        valB = parseInt(b.package.replace(/[^0-9]/g, '')) || 0;
      }

      if (valA < valB) return sortAsc ? -1 : 1;
      if (valA > valB) return sortAsc ? 1 : -1;
      return 0;
    });
  }, [searchTerm, selectedCompany, packageFilter, sortField, sortAsc]);

  const toggleSort = (field) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-slate-950/90 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-6xl max-h-[85vh] bg-slate-900 border border-slate-800 rounded-2xl flex flex-col overflow-hidden shadow-2xl"
        >
          {/* Header */}
          <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-white">COMPLETE PLACEMENT DIRECTORY 2026</h3>
                <p className="text-xs text-slate-400">
                  Showing {filteredPlacements.length} of {placementsData.length} Placed Students • Department of Information Technology
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Controls Bar: Search & Filters */}
          <div className="p-4 bg-slate-900 border-b border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search Student Name, Reg No, Company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
              />
            </div>

            {/* Company Dropdown */}
            <div className="flex items-center gap-2">
              <Building className="w-4 h-4 text-slate-400 shrink-0" />
              <select
                value={selectedCompany}
                onChange={(e) => setSelectedCompany(e.target.value)}
                className="w-full py-2 px-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500/50"
              >
                <option value="ALL">All Recruiting Companies ({companiesList.length})</option>
                {companiesList.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Package Tier Filter Buttons */}
            <div className="flex items-center gap-1 overflow-x-auto p-1 bg-slate-950 rounded-xl border border-slate-800">
              {[
                { id: 'ALL', label: 'All' },
                { id: '50L', label: '₹50L+' },
                { id: '20L', label: '₹20L+' },
                { id: '10L', label: '₹10L+' },
                { id: '5L', label: '₹5L+' }
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setPackageFilter(f.id)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
                    packageFilter === f.id
                      ? 'bg-cyan-500 text-slate-950'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Directory Table Body */}
          <div className="flex-1 overflow-y-auto p-6">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-bold uppercase tracking-wider">
                  <th className="py-3 px-3">S.No</th>
                  <th 
                    onClick={() => toggleSort('regNo')}
                    className="py-3 px-3 cursor-pointer hover:text-cyan-400 transition-colors"
                  >
                    <div className="flex items-center gap-1">
                      <span>Reg No</span>
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </th>
                  <th 
                    onClick={() => toggleSort('student')}
                    className="py-3 px-3 cursor-pointer hover:text-cyan-400 transition-colors"
                  >
                    <div className="flex items-center gap-1">
                      <span>Student Name</span>
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </th>
                  <th className="py-3 px-3">Dept</th>
                  <th 
                    onClick={() => toggleSort('company')}
                    className="py-3 px-3 cursor-pointer hover:text-cyan-400 transition-colors"
                  >
                    <div className="flex items-center gap-1">
                      <span>Recruiting Company</span>
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </th>
                  <th 
                    onClick={() => toggleSort('package')}
                    className="py-3 px-3 cursor-pointer hover:text-cyan-400 transition-colors"
                  >
                    <div className="flex items-center gap-1">
                      <span>Salary Package</span>
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </th>
                  <th className="py-3 px-3 text-right">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {filteredPlacements.map((item, index) => (
                  <tr key={item.regNo + index} className="hover:bg-slate-800/50 transition-colors group">
                    <td className="py-3 px-3 font-mono text-slate-500">{index + 1}</td>
                    <td className="py-3 px-3 font-mono font-semibold text-cyan-400">{item.regNo}</td>
                    <td className="py-3 px-3 font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.student}
                    </td>
                    <td className="py-3 px-3 text-slate-400">{item.department}</td>
                    <td className="py-3 px-3 font-semibold text-slate-200">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-cyan-400" />
                        {item.company}
                      </span>
                    </td>
                    <td className="py-3 px-3 font-extrabold font-heading text-amber-300">
                      {item.package}
                    </td>
                    <td className="py-3 px-3 text-right">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredPlacements.length === 0 && (
              <div className="text-center py-12 text-slate-500">
                No matching student placement records found.
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between text-xs text-slate-400">
            <span>Chennai Institute of Technology • Department of IT</span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all shadow-md shadow-cyan-500/20"
            >
              Close Directory
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
