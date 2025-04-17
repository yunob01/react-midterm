export default function HamMenu({ onClick, isOpen, className }) {
    return (
      <button
        onClick={onClick}
        aria-label="Toggle menu"
        className={`absolute z-20 w-10 h-10 left-6 top-6 flex items-center justify-center transition md:hidden ${className}`}
      >
        <div className="relative w-6 h-5 flex flex-col justify-between items-center">
          <span
            className={`bg-[#6A4E42] h-[2px] w-full rounded-full absolute transition-all duration-300 ease-in-out ${
              isOpen ? "rotate-45 top-[10px]" : "rotate-0 top-0"
            }`}
          ></span>
  
          <span
            className={`bg-[#6A4E42] h-[2px] w-full rounded-full absolute transition-all duration-300 ease-in-out top-[10px] ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
  
          <span
            className={`bg-[#6A4E42] h-[2px] w-full rounded-full absolute transition-all duration-300 ease-in-out ${
              isOpen ? "-rotate-45 top-[10px]" : "rotate-0 bottom-0"
            }`}
          ></span>
        </div>
      </button>
    );
  }
