import React from "react";

const WhyChooseSection = () => {
  return (
    <section
      className=" text-white py-20 px-4 md:px-8"
      id="why"
    >
      {/* Section Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gradient-animate">
          Why Choose Influstars
        </h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto text-white/80">
          We align placements with target lead cost metrics, helping you
          identify the most effective markets for product promotion.
        </p>
        <p className="text-lg max-w-3xl mx-auto text-white/70">
          We tailor formats to meet your goals — from Instagram Stories to
          multi-hour Twitch streams.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            t: "01 Transparent Pricing",
            c: "We transparently convey the pricing of influencers and our agency commission. Direct influencer rates, including our discounts.",
            img: "https://img.icons8.com/?size=100&id=JI2bnOlUlrmw&format=png&color=000000",
          },
          {
            t: "02 Quality Traffic",
            c: "Our system for evaluating influencer quality reduces fraud and increases the number of high-quality leads.",
            img: "https://img.icons8.com/?size=100&id=108789&format=png&color=000000",
          },
          {
            t: "03 Reliability",
            c: "Influencers trust us, as we have been active in key markets for over 5 years.",
            img: "https://img.icons8.com/?size=100&id=2yP4IWnpUcTh&format=png&color=000000",
          },
        ].map((x, i) => (
          <div
            key={x.t}
            className="flex flex-col  bg-white/5 backdrop-blur-md rounded-2xl p-6 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 min-h-[200px]"
            style={{ transitionDelay: `${i * 100}ms` }}
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
            <p className="text-md text-white/70 leading-relaxed">{x.c}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseSection;
