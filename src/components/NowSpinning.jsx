export default function NowSpinning({ onClick, isPlaying }) {
    return (
      <button
        onClick={onClick}
        className={`bg-[#6A4E42] text-[#FFF8F0] font-bold text-sm px-6 py-2 rounded-[16px] border border-[#6A4E42] transition hover:bg-transparent hover:text-[#6A4E42] ${
          isPlaying ? "animate-spin-slow" : ""
        }`}
      >
        {isPlaying ? "Spinning..." : "Now Spinning"}
      </button>
    );
  }
  