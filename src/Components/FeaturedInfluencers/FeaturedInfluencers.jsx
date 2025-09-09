import React, { useState } from 'react';

const FeaturedInfluencers = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const influencers = [
    { name: "Windoh CS", videoId: 'nd-l40sbTu0' },
    { name: "Windoh CS", videoId: 'BeaNGqWvZko' },
    { name: "Never Grow Old", videoId: 'lTjZMcloLkA' },
    { name: "MAAU 3", videoId: 'TS-FV1-iXvs' },
  ];

  return (
    <section id="featured-influencers" className=" text-white py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center mb-12 reveal">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gradient-animate mb-3">Featured Influencers</h2>
        <p className="text-lg text-white/80">Discover the stars shaping the digital landscape with their creativity and influence</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {influencers.map((influencer) => (
          <div
            key={influencer.videoId}
            className="rounded-2xl overflow-hidden relative group glass card-hover reveal"
            onMouseEnter={() => setHoveredCard(influencer.videoId)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img
              src={`https://img.youtube.com/vi/${influencer.videoId}/maxresdefault.jpg`}
              alt="YouTube Video Thumbnail"
              className={`w-full h-48 object-cover transition-opacity duration-300 ${hoveredCard === influencer.videoId ? 'opacity-0' : 'opacity-100'}`}
            />
            <div className={`absolute top-0 left-0 w-full h-48 transition-opacity duration-300 ${hoveredCard === influencer.videoId ? 'opacity-100' : 'opacity-0'}`}>
              {hoveredCard === influencer.videoId && (
                <iframe
                  title={`YouTube video ${influencer.videoId}`}
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${influencer.videoId}?autoplay=1&mute=1&loop=1&playlist=${influencer.videoId}&controls=0`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              )}
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/70">{influencer.name}</span>
                <span className="text-xs px-2 py-1 rounded-full bg-white/10">Featured</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedInfluencers;