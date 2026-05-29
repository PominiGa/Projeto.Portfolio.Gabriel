import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  onEnter: () => void;
};

const codeLines = [
  'console.log("Hello World!")         // JavaScript',
  'print("Hello World!")               # Python',
  'System.out.println("Hello World!"); // Java',
  'Console.WriteLine("Hello World!");  // C#',
  'echo "Hello World!";                // PHP',
  'fmt.Println("Hello World!")         // Go',
  'puts "Hello World!"                 # Ruby',
  'printf("Hello World!\\n");           // C',
  'cout << "Hello World!" << endl;     // C++',
  'echo "Hello World!"                 // Bash',
];

const HEADLINE = 'Hello World!';
const SUBLINE = 'Todos começam assim. Poucos continuam.';

export default function IntroScreen({ onEnter }: Props) {
  const [displayHead, setDisplayHead] = useState('');
  const [displaySub, setDisplaySub] = useState('');
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayHead(HEADLINE.slice(0, i));
      if (i >= HEADLINE.length) clearInterval(id);
    }, 70);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const delay = HEADLINE.length * 70 + 400;
    const timer = setTimeout(() => {
      let j = 0;
      const id = setInterval(() => {
        j++;
        setDisplaySub(SUBLINE.slice(0, j));
        if (j >= SUBLINE.length) {
          clearInterval(id);
          setTimeout(() => setShowButton(true), 300);
        }
      }, 45);
      return () => clearInterval(id);
    }, delay);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-dark-bg flex items-center justify-center overflow-hidden z-50">

      {/* Scrolling code lines in background */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {codeLines.map((line, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: '100vw' }}
            animate={{ opacity: 0.07, x: '-20vw' }}
            transition={{
              duration: 14,
              delay: idx * 0.8,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
            }}
            style={{ top: `${8 + idx * 8.5}%` }}
            className="absolute whitespace-nowrap font-mono text-sm sm:text-base text-warm-white"
          >
            {line}
          </motion.div>
        ))}
      </div>

      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundSize: '200px 200px',
          opacity: 0.03,
        }}
      />

      {/* Center content */}
      <div className="relative z-10 text-center px-6 max-w-xl">

        {/* Terminal prompt */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="font-mono text-xs text-burnt-orange tracking-widest mb-6"
        >
          $ gabriel --init
        </motion.p>

        {/* Headline */}
        <div className="font-mono font-bold text-5xl sm:text-6xl md:text-7xl text-warm-white mb-4 min-h-[1.2em] flex items-center justify-center">
          <span>{displayHead}</span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="text-burnt-orange ml-1"
          >
            _
          </motion.span>
        </div>

        {/* Subline */}
        <div className="font-mono text-base sm:text-lg text-warm-white/50 mb-10 min-h-[1.5em]">
          {displaySub}
        </div>

        {/* Divider */}
        <div className="w-12 h-px bg-burnt-orange mx-auto mb-10" />

        {/* Enter button */}
        <AnimatePresence>
          {showButton && (
            <motion.button
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={onEnter}
              className="font-mono text-sm font-bold px-8 py-4 border-2 border-warm-white text-warm-white hover:bg-burnt-orange hover:border-burnt-orange hover:text-white transition-all tracking-widest shadow-[4px_4px_0_#D4622A] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
            >
              ENTRAR →
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom corner tag */}
      <div className="absolute bottom-6 right-6 font-mono text-xs text-warm-white/15 tracking-widest">
        GABRIEL POMINI © {new Date().getFullYear()}
      </div>
    </div>
  );
}