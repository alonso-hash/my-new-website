import React from "react";

const MarketingStrategiesSection = () => {
  return (
    <section
      className=" text-white py-20 px-4 md:px-8"
      id="strategy"
    >
      {/* Section Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-snug">
          We Help Develop{" "}
          <span className="text-gradient-animate">Marketing Strategies</span>
        </h2>
        <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
          Empowering your brand with creative strategies that engage, convert,
          and grow.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            t: "Target",
            d: "Identify and reach your ideal audience through precision targeting",
            img: "https://img.icons8.com/?size=100&id=63765&format=png&color=000000",
          },
          {
            t: "Create",
            d: "Develop compelling content that resonates with your audience",
            img: "https://img.icons8.com/?size=100&id=oZAinaxvg8AD&format=png&color=000000",
          },
          {
            t: "Launch",
            d: "Execute strategic campaigns across multiple platforms",
            img: "https://img.icons8.com/?size=100&id=VxghLA7bZMVU&format=png&color=000000",
          },
          {
            t: "Analyze",
            d: "Monitor performance and optimize for maximum impact",
            img: "https://img.icons8.com/?size=100&id=y7Z52mLCklBJ&format=png&color=000000",
          },
        ].map((x, i) => (
          <div
            key={x.t}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-6 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            {/* Title + Image side by side */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold tracking-wide">{x.t}</h3>
              <div className="flex-shrink-0">
                <img
                  src={x.img}
                  className="w-12 h-12 rounded-xl bg-black/7 backdrop-blur-2xl p-2"
                  alt={x.t}
                />
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">{x.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketingStrategiesSection;
