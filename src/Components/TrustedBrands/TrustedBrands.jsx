import React, { useEffect, useRef } from 'react';

const TrustedBrands = () => {
  const brands = [
    { id: 1, name: 'Exness', logo: 'https://static.readdy.ai/image/16e5b3eed165df4a8f9e74e296f83b7f/ce40a4cfcd69f38be620ce8f2e3f6781.png' },
    { id: 2, name: '1xBet', logo: 'https://static.readdy.ai/image/16e5b3eed165df4a8f9e74e296f83b7f/9a566172886b1c43c19b009679c07528.png' },
    { id: 3, name: 'Parimatch', logo: 'https://static.readdy.ai/image/16e5b3eed165df4a8f9e74e296f83b7f/df4c7c4a3416efbd12bae263f67fdd24.png' },
    { id: 4, name: 'PrimeXBT', logo: 'https://static.readdy.ai/image/16e5b3eed165df4a8f9e74e296f83b7f/a9aac3e3b188d114eb9f3a0c1ad78f77.png' },
    { id: 5, name: 'CSGO.net', logo: 'https://static.readdy.ai/image/16e5b3eed165df4a8f9e74e296f83b7f/734202dfca8ea8a1170e3fa507d9650a.png' },
    { id: 6, name: 'PocketOption', logo: 'https://static.readdy.ai/image/16e5b3eed165df4a8f9e74e296f83b7f/1ede22581d3dafd516e89349cccb79a2.webp' },
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.6;
    let animationFrameId;

    const animateScroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.style.transform = `translateX(-${scrollAmount}px)`;
      animationFrameId = requestAnimationFrame(animateScroll);
    };

    animateScroll();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const duplicatedBrands = [...brands, ...brands];

  return (
    <section id="clients" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 reveal">
          <h2 className="text-4xl font-extrabold text-white mb-3">
            Trusted by <span className="text-gradient-animate">Leading Brands</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join the successful companies that have amplified their reach through our platform
          </p>
        </div>
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex space-x-6 sm:space-x-8 md:space-x-12 whitespace-nowrap" ref={scrollRef}>
              {duplicatedBrands.map((brand, index) => (
                <div
                  key={`${brand.id}-${index}`}
                  className="flex-shrink-0 w-40 h-20 md:w-48 md:h-20 flex items-center justify-center glass rounded-lg card-hover"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-10 sm:h-12 md:h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x50/000000/FFFFFF?text=' + brand.name.replace(/\s/g, ''); }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;