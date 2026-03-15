// src/app/components/SavingsTotalModal.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import CountUp from 'react-countup';

interface SavingsTotalModalProps {
  isOpen: boolean;
  onClose: () => void;
  total: number;
  headingColor: string;
  numberColor: string;
  textColor: string;
}

export default function SavingsTotalModal({
  isOpen,
  onClose,
  total,
  headingColor,
  numberColor,
  textColor,
}: SavingsTotalModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-10 max-w-lg w-full max-h-[90vh] overflow-y-auto relative shadow-2xl border border-gray-200 dark:border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-3xl text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              aria-label="Close modal"
            >
              ×
            </button>

            {/* Title */}
            <h2 
              className="text-2xl md:text-3xl font-bold mb-6 pr-10"
              style={{ color: headingColor }}
            >
              Total Estimated Monthly Savings
            </h2>

            {/* Big total amount */}
            <div 
              className="text-5xl md:text-6xl font-extrabold mb-8 text-center"
              style={{ color: numberColor }}
            >
              <CountUp
                end={total}
                duration={2.5}
                separator=","
                decimals={2}
                prefix="$"
              />
            </div>

            {/* Visualization: 100% bar */}
            <div className="mb-8">
              <p className="text-lg mb-3 font-medium" style={{ color: textColor }}>
                Combined contribution of all recommendations
              </p>
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden border border-gray-300 dark:border-gray-600">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-green-600 via-green-500 to-green-400"
                />
              </div>
              <p className="text-sm mt-3 text-center font-medium" style={{ color: textColor }}>
                100% — Full potential savings unlocked
              </p>
            </div>

            {/* Detailed explanation */}
            <div className="space-y-4 text-base leading-relaxed" style={{ color: textColor }}>
              <p>
                <strong>Why this amount?</strong>
              </p>
              <p>
                This figure represents the **realistic monthly cost reduction** you can achieve right now based on your actual cloud usage over the last 30 days.
              </p>
              <p>
                It is the **sum of four high-impact recommendations**:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Right-sizing cluster nodes (over-provisioned resources)</li>
                <li>Right-sizing container requests (memory & CPU waste)</li>
                <li>Remedying abandoned/idle workloads</li>
                <li>Purchasing reserved instances / savings plans</li>
              </ul>
              <p>
                The calculation includes key metrics: CPU, RAM, storage, network egress, GPU usage, and more — all optimized for cost efficiency without compromising performance.
              </p>
              <p className="pt-4 font-medium">
                Applying these changes can typically deliver results within the current billing cycle.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}