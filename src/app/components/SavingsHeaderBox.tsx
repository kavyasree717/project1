// src/app/components/SavingsHeaderBox.tsx
'use client';

import { motion } from 'framer-motion';
import CountUp from 'react-countup';

type Props = {
  headingColor: string;
  numberColor: string;
  isDark: boolean;
  onClick: () => void;
  total: number;
};

export default function SavingsHeaderBox({
  headingColor,
  numberColor,
  isDark,
  onClick,
  total,
}: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        boxShadow: isDark 
          ? '0 25px 50px rgba(197,214,44,0.45)' 
          : '0 25px 50px #113c1a',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative mx-auto mb-12 w-full max-w-2xl rounded-2xl border-2 p-8 md:p-10 text-center overflow-hidden cursor-pointer"
      style={{
        backgroundColor: isDark ? '#1e293b' : '#ffffff',
        border: isDark ? `6px solid #c5d62c` : `6px solid #1b0969`,
        borderRadius: '16px',
      }}
      onClick={onClick}
    >
      <h1 
        style={{ color: headingColor, fontWeight: 'bold', fontSize: '30px' }} 
        className="text-[clamp(2rem,5vw,2.8rem)] md:text-[clamp(2.5rem,6vw,3.5rem)] mb-3"
      >
        Estimated Monthly Savings
      </h1>

      <p 
        style={{ color: headingColor, fontSize: '20px' }} 
        className="text-[clamp(1.1rem,3vw,1.25rem)] mb-6"
      >
        Opportunities available right now
      </p>

      <div 
        style={{ color: numberColor, fontWeight: '900', fontSize: '45px' }} 
        className="text-[clamp(2.5rem,8vw,4rem)] md:text-[clamp(3rem,9vw,5rem)]"
      >
        <CountUp 
          end={total} 
          duration={2.8} 
          separator="," 
          decimals={2} 
          prefix="$" 
        />
      </div>
    </motion.div>
  );
}