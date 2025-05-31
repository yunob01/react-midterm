import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Pause, SkipBack, SkipForward } from "lucide-react";

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2, ease: "easeIn" } },
};

const VinylModal = ({ audioRef, isPlaying, setIsPlaying, onClose, vinyl }) => {
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      if (audioRef.current) {
        const current = audioRef.current.currentTime;
        const total = audioRef.current.duration || 0;
        setProgress((current / total) * 100);
        setCurrentTime(current);
        setDuration(total);
      }
    };

    const interval = setInterval(updateProgress, 500);
    return () => clearInterval(interval);
  }, [audioRef]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleSeek = (e) => {
    const time = (e.target.value / 100) * duration;
    audioRef.current.currentTime = time;
  };

  const formatTime = (t) => {
    const m = Math.floor(t / 60)
      .toString()
      .padStart(2, "0");
    const s = Math.floor(t % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalVariants}
      >
        <motion.div
          className="bg-[#4B3F36] text-[#FFF8F0] rounded-2xl p-6 w-[90%] max-w-md relative shadow-xl text-center"
          variants={modalVariants}
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-[#FFF8F0] hover:text-white">
            <X size={20} />
          </button>

          <div className="flex flex-col items-center space-y-4">
            {/* Spinning Vinyl */}
            <motion.div
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{
                repeat: isPlaying ? Infinity : 0,
                ease: "linear",
                duration: 6,
              }}
              className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#FFF8F0]"
            >
              <img src={vinyl.image} alt="vinyl" className="w-full h-full object-cover" />
            </motion.div>

            <h2 className="text-xl font-semibold">{vinyl.name}</h2>

            {/* Time and progress bar */}
            <div className="w-full">
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleSeek}
                className="w-full accent-[#FFF8F0]"
              />
              <div className="flex justify-between text-sm pt-1 font-mono">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center space-x-6 mt-2">
              <button
                onClick={() => {
                  const newTime = Math.max(audioRef.current.currentTime - 10, 0);
                  audioRef.current.currentTime = newTime;
                }}
                className="bg-[#A26E57] text-white p-3 rounded-full hover:bg-[#6A4E42]"
              >
                <SkipBack size={24} />
              </button>

              <button
                onClick={togglePlay}
                className="bg-[#A26E57] text-white p-4 rounded-full hover:bg-[#6A4E42]"
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>

              <button
                onClick={() => {
                  const newTime = Math.min(audioRef.current.currentTime + 10, duration);
                  audioRef.current.currentTime = newTime;
                }}
                className="bg-[#A26E57] text-white p-3 rounded-full hover:bg-[#6A4E42]"
              >
                <SkipForward size={24} />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VinylModal;
