export default function NowSpinning({ onClick, isPlaying }) {
    return (
      <button
        onClick={onClick}
        className={`bg-primary btn btn-primary text-content-text  text-sm px-6 py-2 rounded-[16px] border border-primary transition hover:bg-transparent hover:text-primary ${
          isPlaying ? "animate-spin-slow" : ""
        }`}
      >
        {isPlaying ? "Spinning..." : "Now Spinning"}
      </button>
    );
  }
  