import MusicCard from './music-card/MusicCard';

const MusicPage = () => {


  return (
    <div className="bg-gradient-to-b from-black via-zinc-900 to-black min-h-screen w-full text-gray-300 p-8">
      <h1 className="text-center text-4xl font-bold text-white mb-10 tracking-wider">
        🎧 Our Musics 🎧
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
       <MusicCard />
       <MusicCard />
       <MusicCard />
       <MusicCard />
       <MusicCard />
      </div>
    </div>
  );
};

export default MusicPage;
