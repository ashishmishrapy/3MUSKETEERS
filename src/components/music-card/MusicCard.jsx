import React from "react";

const MusicCard = () => {
  return (
    <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 shadow-xl hover:shadow-blue-500/30 transition duration-300 w-full max-w-md">
      <iframe
        className="w-full aspect-video rounded-md"
        src="https://www.youtube.com/embed/DxsDekHDKXo?si=1h84cyaWZqhYPAdD"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h2 className="mt-4 text-xl font-semibold text-white text-center">
        Aditya Rikhari - Paaro (Official Video)
      </h2>
    </div>
  );
};

export default MusicCard;
