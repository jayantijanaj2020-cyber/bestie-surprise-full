import { useState, useRef } from "react";

interface SurprisePageProps {
  onNext: () => void;
}

function CatSVG({ isGiving, onClick }: { isGiving: boolean; onClick: () => void }) {
  return (
    <svg
      viewBox="0 0 200 220"
      width="220"
      height="240"
      style={{ cursor: "pointer", filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.12))", userSelect: "none" }}
      onClick={onClick}
    >
      {/* Tail */}
      <path
        d="M 105 190 Q 160 185 170 155 Q 178 135 165 125"
        stroke="#d4621a"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
        className="cat-tail"
        style={{ transformOrigin: "105px 190px" }}
      />

      {/* Body */}
      <ellipse
        cx="100"
        cy="175"
        rx="52"
        ry="45"
        fill="#e8793a"
        className="cat-breathe"
        style={{ transformOrigin: "100px 175px" }}
      />
      {/* Body belly patch */}
      <ellipse cx="100" cy="182" rx="30" ry="28" fill="#f5a46a" />

      {/* Left ear */}
      <polygon
        points="62,75 52,42 80,68"
        fill="#e8793a"
        className="cat-ear"
        style={{ transformOrigin: "66px 68px" }}
      />
      {/* Left ear inner */}
      <polygon points="64,72 56,51 76,68" fill="#ff9eb5" />

      {/* Right ear */}
      <polygon
        points="138,75 148,42 120,68"
        fill="#e8793a"
        className="cat-ear"
        style={{ transformOrigin: "134px 68px", animationDelay: "0.3s" }}
      />
      {/* Right ear inner */}
      <polygon points="136,72 144,51 124,68" fill="#ff9eb5" />

      {/* Head */}
      <ellipse cx="100" cy="98" rx="46" ry="42" fill="#e8793a" />
      {/* Head forehead lighter patch */}
      <ellipse cx="100" cy="90" rx="26" ry="18" fill="#f5a46a" opacity="0.5" />

      {/* Eyes - closed happy crescent */}
      <path d="M 82 94 Q 87 88 92 94" stroke="#4a2800" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M 108 94 Q 113 88 118 94" stroke="#4a2800" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Nose */}
      <ellipse cx="100" cy="104" rx="4" ry="2.5" fill="#ff9eb5" />

      {/* Mouth */}
      <path d="M 96 106.5 Q 100 110 104 106.5" stroke="#c0606a" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Whiskers left */}
      <line x1="55" y1="100" x2="85" y2="103" stroke="#8b4a1a" strokeWidth="1" strokeLinecap="round" />
      <line x1="55" y1="106" x2="85" y2="106" stroke="#8b4a1a" strokeWidth="1" strokeLinecap="round" />

      {/* Whiskers right */}
      <line x1="115" y1="103" x2="145" y2="100" stroke="#8b4a1a" strokeWidth="1" strokeLinecap="round" />
      <line x1="115" y1="106" x2="145" y2="106" stroke="#8b4a1a" strokeWidth="1" strokeLinecap="round" />

      {/* Tabby stripes on head */}
      <path d="M 88 72 Q 90 65 92 72" stroke="#c96828" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M 98 69 Q 100 62 102 69" stroke="#c96828" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M 108 72 Q 110 65 112 72" stroke="#c96828" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Heart blush left */}
      <text x="68" y="113" fontSize="14" className="blush" style={{ fill: "#ff9eb5" }}>♥</text>
      {/* Heart blush right */}
      <text x="112" y="113" fontSize="14" className="blush" style={{ fill: "#ff9eb5", animationDelay: "0.4s" }}>♥</text>

      {/* Paw left arm (static) */}
      <ellipse cx="68" cy="193" rx="16" ry="10" fill="#d4621a" />
      <ellipse cx="60" cy="200" rx="6" ry="5" fill="#f5a46a" />

      {/* Paw right arm — raised when giving */}
      <g
        style={{
          transformOrigin: "130px 175px",
          transform: isGiving ? "rotate(-40deg) translateX(10px) translateY(-10px)" : "rotate(0deg)",
          transition: "transform 0.6s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        <ellipse cx="132" cy="193" rx="16" ry="10" fill="#d4621a" />
        <ellipse cx="140" cy="200" rx="6" ry="5" fill="#f5a46a" />
      </g>

      {/* Small paw toe beans */}
      <circle cx="62" cy="200" r="2" fill="#c96828" />
      <circle cx="68" cy="202" r="2" fill="#c96828" />
      <circle cx="74" cy="200" r="2" fill="#c96828" />
    </svg>
  );
}

function BouquetSVG() {
  return (
    <svg
      viewBox="0 0 120 130"
      width="130"
      height="140"
      className="bouquet-appear"
      style={{ position: "absolute", bottom: "60px", right: "-20px" }}
    >
      {/* Stem */}
      <path d="M 60 125 Q 55 90 60 70" stroke="#5a9e6f" strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* Leaves */}
      <ellipse cx="50" cy="100" rx="12" ry="6" fill="#6dbf85" transform="rotate(-30 50 100)" />
      <ellipse cx="70" cy="90" rx="12" ry="6" fill="#6dbf85" transform="rotate(30 70 90)" />

      {/* Flowers cluster */}
      {/* Center big pink */}
      <circle cx="60" cy="55" r="16" fill="#ff9eb5" />
      <circle cx="60" cy="55" r="8" fill="#ffd6e0" />
      {[0,60,120,180,240,300].map((angle, i) => (
        <ellipse
          key={i}
          cx={60 + Math.cos((angle * Math.PI) / 180) * 14}
          cy={55 + Math.sin((angle * Math.PI) / 180) * 14}
          rx="7"
          ry="7"
          fill={i % 2 === 0 ? "#ff9eb5" : "#ffb6c6"}
        />
      ))}

      {/* Left flower yellow */}
      <circle cx="32" cy="62" r="11" fill="#ffd97d" />
      {[0,60,120,180,240,300].map((angle, i) => (
        <ellipse
          key={i}
          cx={32 + Math.cos((angle * Math.PI) / 180) * 10}
          cy={62 + Math.sin((angle * Math.PI) / 180) * 10}
          rx="5"
          ry="5"
          fill="#ffe9a0"
        />
      ))}
      <circle cx="32" cy="62" r="5" fill="#ffd97d" />

      {/* Right flower lavender */}
      <circle cx="88" cy="62" r="11" fill="#c9b1ff" />
      {[0,60,120,180,240,300].map((angle, i) => (
        <ellipse
          key={i}
          cx={88 + Math.cos((angle * Math.PI) / 180) * 10}
          cy={62 + Math.sin((angle * Math.PI) / 180) * 10}
          rx="5"
          ry="5"
          fill="#ddd0ff"
        />
      ))}
      <circle cx="88" cy="62" r="5" fill="#c9b1ff" />

      {/* Top little flower */}
      <circle cx="60" cy="28" r="9" fill="#ff7eb3" />
      {[0,72,144,216,288].map((angle, i) => (
        <ellipse
          key={i}
          cx={60 + Math.cos((angle * Math.PI) / 180) * 8}
          cy={28 + Math.sin((angle * Math.PI) / 180) * 8}
          rx="5"
          ry="5"
          fill="#ffaacf"
        />
      ))}
      <circle cx="60" cy="28" r="4" fill="#fff0f5" />

      {/* Sparkles */}
      <text x="10" y="30" fontSize="10" style={{ fill: "#ffd700" }}>✦</text>
      <text x="95" y="25" fontSize="8" style={{ fill: "#ff9eb5" }}>✦</text>
      <text x="5" y="70" fontSize="8" style={{ fill: "#c9b1ff" }}>✦</text>
    </svg>
  );
}

function FloatingHeart({ style }: { style: React.CSSProperties }) {
  return (
    <div style={{
      position: "absolute",
      fontSize: "1.2rem",
      pointerEvents: "none",
      animation: "heartFloat 1.2s ease-out forwards",
      ...style,
    }}>
      ❤️
    </div>
  );
}

export default function SurprisePage({ onNext }: SurprisePageProps) {
  const [hasClicked, setHasClicked] = useState(false);
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);
  const heartIdRef = useRef(0);
  const catRef = useRef<HTMLDivElement>(null);

  function handleCatClick() {
    if (hasClicked) return;
    setHasClicked(true);

    const newHearts = Array.from({ length: 6 }, (_, i) => ({
      id: heartIdRef.current++,
      x: 70 + (Math.random() - 0.5) * 80,
      y: 80 + (Math.random() - 0.5) * 40,
    }));
    setHearts(newHearts);

    setTimeout(() => {
      setHearts([]);
    }, 1500);
  }

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      background: "linear-gradient(135deg, hsl(10,100%,97%) 0%, hsl(340,100%,96%) 50%, hsl(20,100%,96%) 100%)",
    }}>
      {/* Decorative blobs */}
      <div style={{
        position: "fixed", top: "-80px", left: "-80px",
        width: "300px", height: "300px", borderRadius: "50%",
        background: "radial-gradient(circle, hsl(20,90%,90%) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "fixed", bottom: "-60px", right: "-60px",
        width: "260px", height: "260px", borderRadius: "50%",
        background: "radial-gradient(circle, hsl(340,80%,90%) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ textAlign: "center", maxWidth: "480px", width: "100%" }}>
        {/* Top text */}
        <p style={{
          fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
          color: "hsl(340,30%,40%)",
          marginBottom: "2rem",
          fontStyle: "italic",
          opacity: hasClicked ? 0 : 1,
          transform: hasClicked ? "translateY(-10px)" : "translateY(0)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
          minHeight: "2.5rem",
        }}>
          {!hasClicked ? "wait i have something for you ❤️" : ""}
        </p>

        {hasClicked && (
          <p className="text-appear" style={{
            fontSize: "clamp(1.1rem, 3vw, 1.35rem)",
            color: "hsl(340,50%,45%)",
            marginBottom: "2rem",
            fontWeight: 600,
            lineHeight: 1.5,
            minHeight: "2.5rem",
          }}>
            Mujhe jhel ne ke liye ea tumhara gift hai 🌸
          </p>
        )}

        {/* Cat + bouquet container */}
        <div ref={catRef} style={{ position: "relative", display: "inline-block", marginBottom: "2rem" }}>
          {/* Floating hearts on click */}
          {hearts.map(h => (
            <FloatingHeart key={h.id} style={{ left: h.x, top: h.y }} />
          ))}

          {/* Cat */}
          <div
            className={hasClicked ? "cat-give" : ""}
            style={{ display: "inline-block" }}
          >
            <CatSVG isGiving={hasClicked} onClick={handleCatClick} />
          </div>

          {/* Bouquet — appears after click */}
          {hasClicked && <BouquetSVG />}
        </div>

        {/* Hint text */}
        {!hasClicked && (
          <p style={{
            fontSize: "0.85rem",
            color: "hsl(340,20%,60%)",
            marginBottom: "1.5rem",
            fontStyle: "italic",
          }}>
            ✨ tap the cat ✨
          </p>
        )}

        {/* Next button after reveal */}
        {hasClicked && (
          <div className="text-appear" style={{ marginTop: "1rem", animationDelay: "0.5s", opacity: 0 }}>
            <button className="btn-primary" onClick={onNext}>
              Next →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
