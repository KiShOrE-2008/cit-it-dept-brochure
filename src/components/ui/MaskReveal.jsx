import React from 'react';
import { motion } from 'framer-motion';
import { riseMask } from '../../lib/motion';

// Wrap a line of text; the parent stage's stagger drives the reveal so
// callers never hand-roll their own delay/duration per line.
export const MaskReveal = ({ children, className = '', as: Tag = 'div' }) => (
  <Tag className={`overflow-hidden ${className}`}>
    <motion.div variants={riseMask}>{children}</motion.div>
  </Tag>
);
