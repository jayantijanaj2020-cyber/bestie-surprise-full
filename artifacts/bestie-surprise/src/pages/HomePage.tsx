import { useEffect, useState } from "react";

interface HomePageProps {
  onNext: () => void;
}

export default function HomePage({ onNext }: HomePageProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        background: "linear-gradient(135deg, hsl(10,100%,97%) 0%, hsl(340,100%,96%) 50%, hsl(20,100%,96%) 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div style={{
        position: "fixed", top: "-80px", right: "-80px",
        width: "320px", height: "320px",
        borderRadius: "50%",
        background: "radial-gradient(circle, hsl(340,80%,90%) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "fixed", bottom: "-60px", left: "-60px",
        width: "260px", height: "260px",
        borderRadius: "50%",
        background: "radial-gradient(circle, hsl(20,90%,90%) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Floating little hearts */}
      {["❤️", "🌸", "💕", "✨", "🌺"].map((emoji, i) => (
        <div key={i} style={{
          position: "fixed",
          fontSize: `${0.8 + i * 0.2}rem`,
          opacity: 0.5,
          top: `${10 + i * 15}%`,
          left: i % 2 === 0 ? `${5 + i * 3}%` : undefined,
          right: i % 2 !== 0 ? `${5 + i * 3}%` : undefined,
          pointerEvents: "none",
          animation: `catBreathe ${2.5 + i * 0.5}s ease-in-out infinite`,
        }}>
          {emoji}
        </div>
      ))}

      <div style={{
        textAlign: "center",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
        maxWidth: "520px",
      }}>
        {/* Pill tag */}
        <div style={{
          display: "inline-block",
          background: "hsl(340,80%,92%)",
          color: "hsl(340,50%,45%)",
          padding: "0.3rem 1.2rem",
          borderRadius: "9999px",
          fontSize: "0.8rem",
          fontWeight: 600,
          letterSpacing: "0.08em",
          marginBottom: "1.5rem",
          textTransform: "uppercase",
        }}>
          For my person 🐾
        </div>

        {/* Main message */}
        <h1 style={{
          fontSize: "clamp(1.6rem, 5vw, 2.6rem)",
          fontWeight: 700,
          lineHeight: 1.3,
          color: "hsl(340,30%,28%)",
          marginBottom: "0.5rem",
          letterSpacing: "-0.01em",
        }}>
          To the person who handles
        </h1>
        <h1 style={{
          fontSize: "clamp(1.6rem, 5vw, 2.6rem)",
          fontWeight: 700,
          lineHeight: 1.3,
          color: "hsl(340,55%,58%)",
          marginBottom: "2rem",
          letterSpacing: "-0.01em",
        }}>
          all my drama... ✨
        </h1>

        {/* Soft card */}
        <div style={{
          background: "rgba(255,255,255,0.7)",
          backdropFilter: "blur(12px)",
          borderRadius: "1.5rem",
          padding: "1.5rem 2rem",
          marginBottom: "2.5rem",
          border: "1.5px solid hsl(340,60%,92%)",
          boxShadow: "0 8px 32px rgba(200,100,130,0.08)",
        }}>
          <p style={{
            fontSize: "1.05rem",
            color: "hsl(340,20%,45%)",
            lineHeight: 1.7,
            margin: 0,
          }}>
            I have a little something for you 🌸<br />
            Click 'Next' to see your surprise...
          </p>
        </div>

        <button className="btn-primary" onClick={onNext}>
          Next →
        </button>
      </div>
    </div>
  );
}
