import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ExternalLink } from 'lucide-react';

export const PhotoModal = ({ isOpen, onClose, image, title, subtitle, details }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-slate-950/90 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-slate-700"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image side */}
          <div className="w-full md:w-3/5 bg-slate-950 flex items-center justify-center p-4 relative group">
            <img
              src={image}
              alt={title}
              className="max-h-[65vh] w-auto object-contain rounded-lg shadow-lg border border-slate-800/80"
            />
          </div>

          {/* Details side */}
          <div className="w-full md:w-2/5 p-6 flex flex-col justify-between border-t md:border-t-0 md:border-l border-slate-800 bg-slate-900/60">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
                <Award className="w-3.5 h-3.5" />
                Featured Achievement
              </div>
              <h3 className="text-xl font-bold font-heading text-white mb-2 leading-snug">{title}</h3>
              <p className="text-sm font-medium text-cyan-400 mb-4">{subtitle}</p>
              
              <div className="space-y-3 text-slate-300 text-sm border-t border-slate-800 pt-4">
                <p className="leading-relaxed">{details}</p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/20"
              >
                Close View
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
