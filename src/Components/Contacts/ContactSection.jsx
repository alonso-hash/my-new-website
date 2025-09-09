import react from "react";
import { MapPin } from "lucide-react";
import {Mail} from 'lucide-react';
export default function ContactSection() {
  return (
    <section className="bg-inherit text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 flex justify-center ">
      <div className="w-full max-w-2xl text-center md:text-left min-h-full ">
        {/* Heading */}
        <h2 className="text-[clamp(24px,6vw,40px)] font-bold leading-[1.15]">
          Let's Connect <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            And Talk
          </span>{" "}
          <span className="text-green-400 inline-block">💬</span>
        </h2>

        {/* Subtext */}
        <p className="mt-3 sm:mt-4 text-[clamp(14px,2.4vw,16px)] text-gray-300 leading-relaxed">
          Ready to launch your brand into the digital stratosphere? Let's discuss
          how we can connect you with the perfect influencers to amplify your
          message across the cosmos.
        </p>

        {/* Contact Info */}
        <div className="mt-6 sm:mt-8 space-y-4">
          {/* Email */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="p-2.5 sm:p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="text-[clamp(14px,2.4vw,16px)] text-gray-200 hover:text-white transition">
              contact@influstars.io
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="p-2.5 sm:p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="text-[clamp(14px,2.4vw,16px)] text-gray-200">Dubai, UAE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
