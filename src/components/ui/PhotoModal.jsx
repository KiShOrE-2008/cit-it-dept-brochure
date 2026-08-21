import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export const PhotoModal = ({ isOpen, onClose, image, title, subtitle, details }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-10 bg-ink-deep/92">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-4xl w-full bg-ink-raised border border-line overflow-hidden shadow-2xl flex flex-col md:flex-row"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 border border-line text-parchment-dim hover:text-brass hover:border-brass transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="w-full md:w-3/5 bg-ink-deep flex items-center justify-center p-6">
            <img
              src={image}
              alt={title}
              className="max-h-[60vh] w-auto object-contain border border-line"
            />
          </div>

          <div className="w-full md:w-2/5 p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-line">
            <div>
              <div className="font-mono text-sm uppercase tracking-[0.2em] text-brass mb-3">
                Featured Record
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-medium text-parchment mb-2 leading-snug">{title}</h3>
              <p className="text-base font-mono text-oxblood-soft mb-5">{subtitle}</p>

              <p className="font-body text-parchment-dim text-base leading-relaxed border-t border-line pt-4">
                {details}
              </p>
            </div>

            <div className="pt-6 flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2.5 border border-brass text-brass hover:bg-brass hover:text-ink font-mono text-sm uppercase tracking-[0.2em] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
