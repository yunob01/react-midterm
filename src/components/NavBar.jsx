import { NavLink } from 'react-router';
import { useState, useEffect, useRef } from "react";
import HamMenu from "@/components/HamMenu";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const menuButtonRef = useRef(null);

  const navBarContent = [
    { to: "/home", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/culture", label: "Culture" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        navRef.current &&
        !navRef.current.contains(e.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="px-6 py-4 relative">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">

        {/* LOGO + NavBar*/}
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-10 w-full">
          {/* Logo */}
          <NavLink to="/home" className="flex justify-center sm:justify-start">
            <img
              src="/images/LOGO_VinylRoasts.png"
              alt="Light Logo"
              className="logo logo-light h-auto w-16 sm:w-20 transition-transform duration-500 hover:rotate-[360deg]"
            />
            <img
              src="/images/LOGO_VinylRoasts_2.png"
              alt="Dark Logo"
              className="logo logo-dark h-auto w-16 sm:w-20 transition-transform duration-500 hover:rotate-[360deg]"
            />
          </NavLink>

          {/* NavBar */}
          <nav
            ref={navRef}
            className={`
              transition-all duration-500 ease-in-out
              flex flex-col sm:flex-row
              overflow-hidden sm:overflow-visible
              space-y-2 sm:space-y-0 sm:space-x-8
              font-serif font-bold text-sm sm:text-base
              ${isOpen ? "max-h-[300px] opacity-100 mt-4" : "max-h-0 opacity-0 sm:opacity-100 sm:max-h-none sm:mt-0"}
              ${isOpen || "hidden sm:flex"}
            `}
          >
            {navBarContent.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `transition duration-300 pb-1 border-b-2 ${isActive
                    ? "text-primary border-primary"
                    : "text-primary opacity-60 border-transparent hover:border-primary"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* HamMenu */}
        <div className="sm:hidden mt-2 flex justify-end" ref={menuButtonRef}>
          <HamMenu
            onClick={() => setIsOpen(!isOpen)}
            isOpen={isOpen}
          />
        </div>
      </div>
    </div>
  );
}