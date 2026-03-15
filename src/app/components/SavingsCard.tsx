// src/app/components/SavingsCard.tsx
'use client';

import { motion } from 'framer-motion';
import CountUp from 'react-countup';

type Props = {
  title: string;
  amount: number;
  headingColor: string;
  numberColor: string;
  cardBg: string;
  cardBorder: string;
  isDark: boolean;
  onClick: () => void;
  reduceMotion: boolean;
};

export default function SavingsCard({
  title,
  amount,
  headingColor,
  numberColor,
  cardBg,
  cardBorder,
  isDark,
  onClick,
  reduceMotion,
}: Props) {
  return (
    <motion.div
      whileHover={reduceMotion ? {} : {
        scale: 1.08,
        boxShadow: isDark 
          ? '0 25px 50px rgba(197,214,44,0.45)' 
          : '0 25px 50px #113c1a',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="cursor-pointer overflow-hidden @xs:w-full @sm:w-[170px] @sm:h-[170px]"
      style={{
        backgroundColor: cardBg,
        border: isDark ? `6px solid #c5d62c` : `6px solid #22c55e`,
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.12)',
        marginBottom: '40px',
        marginRight: 'clamp(2rem, 5vw, 3rem)',
        height: '190px',
        width: '190px',
      }}
      onClick={onClick}
    >
      <div className="text-center w-full">
        <div
          style={{ color: headingColor, fontWeight: '500' }}
          className="text-[clamp(0.9rem,2.5vw,1rem)] leading-tight mb-2"
        >
          {title}
        </div>
        <div
          style={{ color: numberColor, fontWeight: '800' }}
          className="text-[clamp(1.3rem,4vw,1.5rem)]"
        >
          <CountUp end={amount} duration={2} decimals={2} prefix="$" suffix=" /mo" />
        </div>
      </div>
    </motion.div>
  );
}