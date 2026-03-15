// src/app/components/SavingsCardModal.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import CountUp from 'react-countup';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  amount: number;
  total: number;
  headingColor: string;
  numberColor: string;
  textColor: string;
};

export default function SavingsCardModal({
  isOpen,
  onClose,
  title,
  amount,
  total,
  headingColor,
  numberColor,
  textColor,
}: Props) {
  if (!isOpen) return null;

  const percentage = Math.round((amount / total) * 100);

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-10 max-w-lg w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-3xl text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
          >
            ×
          </button>

          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: headingColor }}>
            {title}
          </h2>

          <div className="text-4xl md:text-5xl font-extrabold mb-8" style={{ color: numberColor }}>
            <CountUp end={amount} duration={1.8} decimals={2} prefix="$" suffix=" /mo" />
          </div>

          <div className="mb-8">
            <p className="text-lg mb-3" style={{ color: textColor }}>
              Contribution to total savings
            </p>
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-500 to-green-400"
                style={{ width: `${Math.min(100, percentage)}%`, transition: 'width 1.2s ease-out' }}
              />
            </div>
            <p className="text-sm mt-2 text-center" style={{ color: textColor }}>
              ≈ {percentage}% of total
            </p>
          </div>

          <p className="text-base leading-relaxed" style={{ color: textColor }}>
            <strong>Basis:</strong><br />
            Calculated from your last 30 days of cloud usage data (CPU, RAM, storage, network, GPU, etc.). 
            Savings achieved by optimizing resource requests, eliminating idle or over-provisioned resources.
          </p>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}