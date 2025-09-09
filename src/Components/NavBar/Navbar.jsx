import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all  duration-300 ${scrolled ? "bg-black/70 shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-full mx-auto px-6 py-4 bg-black/70 backdrop-blur-md  ">
        <div className="flex items-center justify-between  ">
          <a href="#home" className="block">
            <img src="https://static.readdy.ai/image/16e5b3eed165df4a8f9e74e296f83b7f/cac5a05c66d597a681c208ecfdd0cca8.png" className="h-10 w-auto  rounded-xl" />
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {[
              { href: "#about", label: "About" },
              { href: "#featured-influencers", label: "Collab" },
              { href: "#clients", label: "Clients" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-white/90  transition"
              >
                <span className="hover:text-purple-600 text-lg">{item.label}</span>
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-purple-400 transition-colors p-2"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-2 ">
            {[
              { href: "#about", label: "About" },
              { href: "#featured-influencers", label: "Collab" },
              { href: "#clients", label: "Clients" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-white/90 hover:text-white transition-colors font-medium px-2 py-2 rounded-md "
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}