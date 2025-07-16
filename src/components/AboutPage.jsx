import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-b from-black via-zinc-900 to-black absolute top-0 w-full text-gray-300 min-h-screen px-6 py-12 flex flex-col items-center justify-center">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          About Us
        </h1>
        <p className="text-lg leading-relaxed text-gray-300 mb-6">
          Welcome to our official music platform — a space where passion meets sound.
          We are a collective of artists, producers, and visionaries, blending traditional
          vibes with modern beats. Whether it's indie, pop, lo-fi, or desi trap —
          we’re all about experimenting and expressing.
        </p>
        <p className="text-lg leading-relaxed text-gray-400">
          Our mission is to create tracks that connect deeply with real stories and real emotions.
          Every note, lyric, and beat is handcrafted with heart and honesty. We’re not just building songs —
          we’re building a movement.
        </p>
      </div>
      <div className="mt-10 text-center">
        <p className="italic text-blue-400 text-xl">
          “Where words fail, music speaks.”
        </p>
        <p className="mt-2 text-sm text-gray-500">— The Three Musketeers</p>
      </div>
    </div>
  );
};

export default AboutPage;
