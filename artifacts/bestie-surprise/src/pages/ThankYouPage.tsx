import { useEffect, useRef, useState } from "react";

const CONFETTI_COLORS = [
  "#ff9eb5", "#ffd6e0", "#c9b1ff", "#ffd97d", "#a8e6cf", "#ffb347", "#ff6b9d", "#b5ead7",
];

const CONFETTI_SHAPES = ["●", "■", "▲", "★", "♥"];

interface Piece {
  id: number;
  x: number;
  color: string;
  shape: string;
  size: number;
  duration: number;
  delay: number;
}

export default function ThankYouPage() {
  const [pieces, setPieces] = useState<Piece[]>([]);
  const [hearts, setHearts] = useState<Piece[]>([]);
  const idRef = useRef(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const newPieces: Piece[] = Array.from({ length: 50 }, (_, i) => ({
      id: idRef.current++,
      x: Math.random() * 100,
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      shape: CONFETTI_SHAPES[i % CONFETTI_SHAPES.length],
      size: 0.5 + Math.random() * 1,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 3,
    }));
    setPieces(newPieces);

    const newHearts: Piece[] = Array.from({ length: 20 }, (_, i) => ({
      id: idRef.current++,
      x: Math.random() * 100,
      color: CONFETTI_COLORS[i % 3],
      shape: "♥",
      size: 0.8 + Math.random() * 1.4,
      duration: 5 + Math.random() * 5,
      delay: Math.random() * 5,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      background: "linear-gradient(135deg, hsl(10,100%,97%) 0%, hsl(340,100%,96%) 50%, hsl(20,100%,96%) 100%)",
      overflow: "hidden",
      position: "relative",
    }}>

      {/* Confetti */}
      {pieces.map(p => (
        <div key={p.id} style={{
          position: "fixed",
          left: `${p.x}%`,
          top: "-30px",
          fontSize: `${p.size}rem`,
          color: p.color,
          pointerEvents: "none",
          animation: `confettiFall ${p.duration}s ${p.delay}s linear infinite`,
          zIndex: 0,
        }}>
          {p.shape}
        </div>
      ))}

      {/* Floating hearts */}
      {hearts.map(h => (
        <div key={h.id} style={{
          position: "fixed",
          left: `${h.x}%`,
          bottom: "-30px",
          fontSize: `${h.size}rem`,
          color: h.color,
          pointerEvents: "none",
          animation: `confettiFall ${h.duration}s ${h.delay}s linear infinite reverse`,
          zIndex: 0,
          opacity: 0.7,
        }}>
          {h.shape}
        </div>
      ))}

      {/* Main content */}
      <div style={{
        textAlign: "center",
        position: "relative",
        zIndex: 1,
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.9)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
        maxWidth: "520px",
      }}>

        {/* Paw icon cluster */}
        <div style={{ fontSize: "3rem", marginBottom: "1rem", lineHeight: 1 }}>
          🐾
        </div>

        {/* Card */}
        <div style={{
          background: "rgba(255,255,255,0.8)",
          backdropFilter: "blur(16px)",
          borderRadius: "2rem",
          padding: "2.5rem 2.5rem",
          border: "1.5px solid hsl(340,60%,91%)",
          boxShadow: "0 16px 48px rgba(200,100,130,0.12)",
          marginBottom: "2rem",
        }}>
          <h1 style={{
            fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
            fontWeight: 700,
            color: "hsl(340,50%,45%)",
            marginBottom: "1rem",
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
          }}>
            Thanks for being<br />the best! 🐾
          </h1>

          <div style={{
            width: "60px",
            height: "3px",
            background: "linear-gradient(90deg, hsl(340,70%,75%), hsl(20,90%,78%))",
            borderRadius: "9999px",
            margin: "0 auto 1.5rem",
          }} />

          <p style={{
            fontSize: "1.05rem",
            color: "hsl(340,20%,50%)",
            lineHeight: 1.8,
            margin: 0,
          }}>
            For every late-night rant,<br />
            every unhinged decision, every<br />
            moment you just&nbsp;
            <em style={{ color: "hsl(340,55%,58%)", fontWeight: 600 }}>got it</em>
            &nbsp;—<br />
            this one's for you. 💕
          </p>
        </div>

        {/* Secondary note */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          background: "hsl(340,80%,93%)",
          borderRadius: "9999px",
          padding: "0.6rem 1.5rem",
          marginBottom: "1.5rem",
        }}>
          <span style={{ fontSize: "1rem" }}>🌸</span>
          <span style={{ color: "hsl(340,40%,45%)", fontWeight: 600, fontSize: "0.95rem" }}>
            You are loved. Always.
          </span>
          <span style={{ fontSize: "1rem" }}>🌸</span>
        </div>

        {/* Mini cat row */}
        <div style={{ fontSize: "2rem", letterSpacing: "0.3rem", marginTop: "0.5rem" }}>
          🐱💕🐱
        </div>
      </div>
    </div>
  );
}
