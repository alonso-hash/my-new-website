import React, { useEffect, useState } from "react";
import Aurora from "./Aurora";

// Generic CountUp Component
const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); // ~60fps
    let frame;

    const animate = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        frame = requestAnimationFrame(animate);
      } else {
        setCount(end);
        cancelAnimationFrame(frame);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

// Special sequence for "1M+"
const CountUpReach = ({ duration = 3000 }) => {
  const [display, setDisplay] = useState("10K");

  useEffect(() => {
    // Define sequence
    const steps = [
      "10K",
      "20K",
      "30K",
      "40K",
      "50K",
      "60K",
      "70K",
      "80K",
      "100K",
      "300K",
      "500K",
      "700K",
      "800k",
      "1M+",
    ];

    const intervalTime = 150;
    let index = 0;

    const interval = setInterval(() => {
      setDisplay(steps[index]);
      index++;
      if (index >= steps.length) clearInterval(interval);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [duration]);

  return <span>{display}</span>;
};

function Home() {
  return (
    <main
      className="min-h-screen w-full text-gray-100 font-inter relative overflow-hidden px-4 sm:px-6 md:px-10 py-6 sm:py-8"
      id="home"
    >
      {/* Background gradient effects */}
      <div className="absolute -top-40 -left-40 w-[70vw] max-w-[720px] aspect-square rounded-full bg-gradient-to-br from-purple-600/30 to-cyan-400/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[60vw] max-w-[600px] aspect-square rounded-full bg-gradient-to-br from-pink-600/20 to-purple-500/10 blur-3xl" />

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] text-center rounded-2xl overflow-hidden glass">
        {/* Light rays effect */}
        <div className="absolute inset-0 z-0 w-full h-full rounded-lg">
          <div style={{ width: "100%", height: "clamp(380px, 55vh, 640px)", position: "relative" }}>
            <Aurora
              colorStops={["#ffffff", "#ff00ea", "#ffffff"]}
              blend={0.5}
              amplitude={1.0}
              speed={0.5}
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-3 sm:px-6 md:px-8 lg:px-20 py-8 sm:py-10">
          <h1 className="text-[clamp(28px,6vw,64px)] sm:text-[clamp(36px,6vw,72px)] font-extrabold leading-[1.1]">
            <span className="block text-gradient-animate ">
              Amplify your brand
            </span>
            <span className="block text-white/90">
              Dominate the digital world
            </span>
          </h1>

          <p className="mt-5 sm:mt-6 max-w-[70ch] text-[clamp(14px,2.8vw,18px)] sm:text-[clamp(16px,2.2vw,20px)] text-gray-300 reveal">
            Connect with the brightest stars in the digital universe. We bridge
            brands and influencers to create stellar marketing campaigns that
            shine across the cosmos.
          </p>

          {/* CTA Buttons */}
          <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 reveal">
            <a
              href="https://calendly.com/alonso-influstars/30min"
              className="btn-primary-grad px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full text-[clamp(14px,2.2vw,18px)] font-semibold text-white shadow-lg"
            >
              Schedule a Meeting
            </a>
            <a
              href="#featured-influencers"
              className="btn-outline-grad px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full text-[clamp(14px,2.2vw,18px)] font-semibold text-white"
            >
              See Work
            </a>
          </div>

          {/* Stats with CountUp animation */}
          <div className="mt-9 sm:mt-10 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-3xl reveal">
            {[
              { k: "Influencers", v: "500+" },
              { k: "Reach", v: "1M+" },
              { k: "Campaigns", v: "200+" },
              { k: "Success", v: "98%" },
            ].map((x) => {
              let display;

              if (x.v === "1M+") {
                display = <CountUpReach duration={3000} />;
              } else {
                const match = x.v.match(/[\d]+/);
                const number = match ? parseInt(match[0], 10) : 0;
                const suffix = x.v.replace(match ? match[0] : "", "");
                display = (
                  <CountUp end={number} duration={2000} suffix={suffix} />
                );
              }

              return (
                <div key={x.k} className="glass rounded-xl p-3 sm:p-4 card-hover">
                  <div className="text-[clamp(18px,3.8vw,24px)] font-bold text-white">{display}</div>
                  <div className="text-[clamp(12px,2.6vw,14px)] text-white/70">{x.k}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
