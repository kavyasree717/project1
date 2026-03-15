// src/app/SavingsSection.tsx
'use client';

import { tokens } from '../tokens/tokens';
import { useSavingsData } from '../hooks/useSavingsData';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

// ────────────────────────────────────────────────
export default function SavingsSection() {

  const { data, isLoading, isError, error } = useSavingsData();
  const [isDark, setIsDark] = useState(false);

  // Respect prefers-reduced-motion
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => setReduceMotion(e.matches);

    mediaQuery.addEventListener('change', listener);

    return () => mediaQuery.removeEventListener('change', listener);

  }, []);

  const headingColor = isDark ? tokens.colors.accentBright : tokens.colors.accentDark;
  const textColor   = isDark ? '#ffffff' : '#000000';
  const numberColor = isDark ? '#ffffff' : '#000000';
  const cardBg      = isDark ? tokens.colors.darkCard : tokens.colors.surface;
  const cardBorder  = isDark ? tokens.colors.darkBorder : tokens.colors.border;

  if (isLoading || isError || !data) {

    return (
      <div
        className="min-h-screen flex items-center justify-center text-xl"
        style={{ backgroundColor: tokens.colors.bg }}
      >
        Loading...
      </div>
    );

  }

  const cardVariants = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { type: 'spring', stiffness: 100, damping: 15 },
        },
      };

  return (

    <div className={isDark ? 'dark' : ''}>

      {/* Dark mode toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-lg hover:scale-110 transition-transform"
      >
        {isDark ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      <main
        className="min-h-screen flex items-center justify-center p-6"
        style={{ backgroundColor: isDark ? tokens.colors.darkBg : tokens.colors.bg }}
      >

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            backgroundColor: isDark ? tokens.colors.darkSurface : tokens.colors.surface,
            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
            width: '100%',
            maxWidth: 'clamp(400px, 700vw, 900px)',
            textAlign: 'center',
          }}
        >

          {/* Rectangular box */}
          <motion.div
            whileHover={
              reduceMotion
                ? {}
                : {
                    scale: 1.03,
                    boxShadow: isDark
                      ? '0 25px 50px rgba(197,214,44,0.45)'
                      : '0 25px 50px #113c1a',
                  }
            }
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="relative mx-auto mb-12 w-full max-w-2xl rounded-2xl border-2 p-8 md:p-10 text-center overflow-hidden cursor-pointer"
            style={{
              backgroundColor: isDark ? '#1e293b' : '#ffffff',
              border: isDark
                ? `6px solid ${tokens.colors.accentBright}`
                : `6px solid ${tokens.colors.accentLight}`,
              borderRadius: '16px',
              width: '75%',
              marginBottom: 'clamp(2rem, 5vw, 3rem)',
            }}
          >

            <h1
              style={{
                color: headingColor,
                fontWeight: 'bold',
                fontSize: '30px',
              }}
              className="text-[clamp(2rem,5vw,2.8rem)] md:text-[clamp(2.5rem,6vw,3.5rem)] mb-3"
            >
              Estimated Monthly Savings
            </h1>

            <p
              style={{
                color: headingColor,
                fontSize: '20px',
              }}
              className="text-[clamp(1.1rem,3vw,1.25rem)] mb-6"
            >
              Opportunities available right now
            </p>

            <div
              style={{
                color: numberColor,
                fontWeight: '900',
                fontSize: '45px',
              }}
              className="text-[clamp(2.5rem,8vw,4rem)] md:text-[clamp(3rem,9vw,5rem)]"
            >

              <CountUp
                end={data.total}
                duration={2.8}
                separator=","
                decimals={2}
                prefix="$"
              />

            </div>

          </motion.div>

          {/* Grid */}
          <div
            className="grid grid-cols-2 gap-x-12 gap-y-16 mx-auto"
            style={{ maxWidth: 'clamp(400px, 90vw, 500px)' }}
          >

            {data.items.map((item, index) => (

              <motion.div
                key={index}
                whileHover={
                  reduceMotion
                    ? {}
                    : {
                        scale: 1.08,
                        boxShadow: isDark
                          ? '0 25px 50px rgba(197,214,44,0.45)'
                          : '0 25px 50px #113c1a',
                      }
                }
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="cursor-pointer overflow-hidden w-[170px] h-[170px]"
                style={{
                  backgroundColor: cardBg,
                  border: isDark
                    ? `6px solid ${tokens.colors.accentBright}`
                    : `6px solid ${tokens.colors.accentLight}`,
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
              >

                <div className="text-center w-full">

                  <div
                    style={{ color: headingColor, fontWeight: '500' }}
                    className="text-[clamp(0.9rem,2.5vw,1rem)] leading-tight mb-2"
                  >
                    {item.title}
                  </div>

                  <div
                    style={{ color: numberColor, fontWeight: '800' }}
                    className="text-[clamp(1.3rem,4vw,1.5rem)]"
                  >
                    <CountUp
                      end={item.amount}
                      duration={2}
                      decimals={2}
                      prefix="$"
                      suffix=" /mo"
                    />
                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </main>

    </div>

  );

}