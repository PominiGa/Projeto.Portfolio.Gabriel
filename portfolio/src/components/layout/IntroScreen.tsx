import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function IntroScreen({ onEnter }) {
  const textTop = "Hello World!";
  const textBottom = "Todos começam assim, poucos continuam!";

  const [displayTop, setDisplayTop] = useState("");
  const [displayBottom, setDisplayBottom] = useState("");

  // fundo com várias linguagens
  const backgroundLines = [
    'console.log("Hello World!")  // JavaScript',
    'print("Hello World!")        # Python',
    'System.out.println("Hello World!"); // Java',
    'printf("Hello World!");      // C',
    'cout << "Hello World!";      // C++',
    'Console.WriteLine("Hello World!"); // C#',
    'echo "Hello World!";         // PHP',
    'puts "Hello World!"          # Ruby',
    'fmt.Println("Hello World!")  // Go',
    'console.log("Hello World!")  // Node.js',
  ];

  // animação do topo
  useEffect(() => {
    let i = 1;
    const interval = setInterval(() => {
      setDisplayTop(textTop.slice(0, i));
      i++;
      if (i > textTop.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  // animação da linha de baixo
  useEffect(() => {
    const startDelay = textTop.length * 80 + 300;
    let i = 1;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayBottom(textBottom.slice(0, i));
        i++;
        if (i > textBottom.length) clearInterval(interval);
      }, 60);
    }, startDelay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0a0a0a, #141414)",
        color: "white",
        textAlign: "center",
        overflow: "hidden",
        padding: "20px",
      }}
    >
      {/* Fundo com linguagens */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {backgroundLines.map((line, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 0.80, x: -80 }}
            transition={{
              duration: 6,
              delay: idx * 0.4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              top: `${10 + idx * 8}%`,
              left: "5%",
              whiteSpace: "nowrap",
              fontSize: "20px",
              color: "#ffffff50",
              fontFamily: "monospace",
            }}
          >
            {line}
          </motion.div>
        ))}
      </div>

      {/* Texto topo */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "10px",
          zIndex: 2,
        }}
      >
        {displayTop}
      </motion.h1>

      {/* Texto base */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: displayBottom ? 1 : 0 }}
        transition={{ duration: 1.2 }}
        style={{
          fontSize: "1.5rem",
          fontWeight: "300",
          color: "#cccccc",
          marginBottom: "40px",
          zIndex: 2,
        }}
      >
        {displayBottom}
      </motion.h2>

      {/* Botão entrar */}
      <motion.button
        onClick={onEnter}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          padding: "12px 32px",
          fontSize: "1.1rem",
          borderRadius: "999px",
          border: "none",
          cursor: "pointer",
          background: "#6366f1",
          color: "#fff",
          fontWeight: "500",
          zIndex: 3,
          boxShadow: "0px 4px 12px rgba(0,0,0,0.4)",
        }}
      >
        Entrar
      </motion.button>
    </div>
  );
}
