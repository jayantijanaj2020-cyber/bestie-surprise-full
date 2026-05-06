import { useState, useEffect, useRef } from "react";
import HomePage from "@/pages/HomePage";
import SurprisePage from "@/pages/SurprisePage";
import ThankYouPage from "@/pages/ThankYouPage";

type Page = "home" | "surprise" | "thankyou";

function App() {
  const [page, setPage] = useState<Page>("home");
  const [transitioning, setTransitioning] = useState(false);
  const [displayPage, setDisplayPage] = useState<Page>("home");
  const containerRef = useRef<HTMLDivElement>(null);

  function navigateTo(next: Page) {
    if (transitioning) return;
    setTransitioning(true);

    if (containerRef.current) {
      containerRef.current.style.opacity = "1";
      containerRef.current.style.transition = "opacity 0.45s ease, transform 0.45s ease";
      containerRef.current.style.transform = "translateY(0)";

      requestAnimationFrame(() => {
        if (containerRef.current) {
          containerRef.current.style.opacity = "0";
          containerRef.current.style.transform = "translateY(-28px)";
        }
      });
    }

    setTimeout(() => {
      setDisplayPage(next);
      setPage(next);

      if (containerRef.current) {
        containerRef.current.style.transition = "none";
        containerRef.current.style.opacity = "0";
        containerRef.current.style.transform = "translateY(28px)";
      }

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (containerRef.current) {
            containerRef.current.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            containerRef.current.style.opacity = "1";
            containerRef.current.style.transform = "translateY(0)";
          }
          setTransitioning(false);
        });
      });
    }, 450);
  }

  return (
    <div
      ref={containerRef}
      style={{
        opacity: 1,
        transform: "translateY(0)",
        minHeight: "100vh",
      }}
    >
      {displayPage === "home" && (
        <HomePage onNext={() => navigateTo("surprise")} />
      )}
      {displayPage === "surprise" && (
        <SurprisePage onNext={() => navigateTo("thankyou")} />
      )}
      {displayPage === "thankyou" && (
        <ThankYouPage />
      )}
    </div>
  );
}

export default App;
