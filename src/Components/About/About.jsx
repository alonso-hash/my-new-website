import React from "react";

function About() {
  return (
    <main className="min-h-1/2  text-gray-100 pt-12 overflow-x-hidden" id="about">
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 py-10 md:py-16">
        <header className="text-center space-y-3 reveal">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gradient-animate">About Influstars</h1>
        </header>

        <div className="mt-10 flex flex-col-reverse md:flex-row-reverse items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-5 text-center md:text-left reveal">
            <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-xl">
              Founded in 2022, Influstars emerged from a vision to revolutionize the influencer marketing landscape. We recognized the untapped potential of connecting authentic voices with brands that share their values.
            </p>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-xl">
              Our mission is to create meaningful partnerships that transcend traditional advertising. We believe in the power of authentic storytelling and the influence of genuine connections between creators and their audiences.
            </p>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-xl">
              From our beginnings, we've grown to represent leading voices in gaming, finance, and technology, helping brands reach millions across the digital cosmos.
            </p>

            
          </div>

          <div className="w-full rounded-2xl md:w-1/2 reveal-right ">
            <div className="rounded-2xl overflow-hidden glass border border-white/10 ">
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop" alt="Our Vision" className="w-full h-[15rem] object-cover"/>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
                <p className="text-base text-gray-300">To become the leading force in influencer marketing, creating a universe where brands and creators align to produce content that resonates, inspires, and drives meaningful engagement across platforms.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;