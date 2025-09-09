import React,{useState} from "react";
import emailjs from "@emailjs/browser";
import "./contacts.css";
import ContactSection from './ContactSection.jsx'

const Spline = React.lazy(() => import("@splinetool/react-spline"));

function Contacts() {
  const [status, setStatus] = useState({ message: "", isSuccess: false });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ message: "Sending message...", isSuccess: false });

    emailjs
      .sendForm(
        import.meta.env.VITE_service_ID,
        import.meta.env.VITE_template_Id,
        e.target,
        import.meta.env.VITE_Public_Key
      )
      .then(
        () => {
          setStatus({ message: "Message sent successfully!", isSuccess: true });
          e.target.reset();
        },
        () => {
          setStatus({ message: "Failed to send message, please try again.", isSuccess: false });
        }
      );
  };

  return (
    <section id="contact" className="min-h-[50vh] flex flex-col items-center justify-center px-4 sm:px-6 py-12 md:py-16 lg:py-20 font-inter">
      <div className="w-full  max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
        <div className="flex-1 w-full  min-h-[360px] md:min-h-[480px] lg:min-h-full rounded-2xl overflow-hidden reveal-right">
          <ContactSection/>
        </div>
        
        <div className="w-full  max-w-xl glass rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 reveal">
          <h1 className="text-[clamp(26px,6vw,40px)] font-extrabold text-white mb-2 sm:mb-3">Contact Me</h1>
          <p className="text-[clamp(13px,2.4vw,16px)] text-white/70 mb-6 sm:mb-8">Let's connect! Fill out the form below and I'll get back to you soon.</p>

          <form className="space-y-4 sm:space-y-5" onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Your Name"
              name="user_name"
              required
              className="w-full px-4 py-3 text-[clamp(14px,2.4vw,16px)] placeholder-white/60 text-white bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              name="user_email"
              required
              className="w-full px-4 py-3 text-[clamp(14px,2.4vw,16px)] placeholder-white/60 text-white bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              placeholder="Your Message"
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 text-[clamp(14px,2.4vw,16px)] placeholder-white/60 text-white bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full px-4 py-3 text-[clamp(14px,2.2vw,18px)] font-semibold text-white btn-primary-grad rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-600/30"
            >
              {status && status.message ? status.message : "Send Message"}
            </button>
          </form>
        </div>

        
      </div>
    </section>
  );
}

export default Contacts;