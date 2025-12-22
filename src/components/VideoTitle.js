const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="w-1/2 py-5 text-lg">{overview}</p>
      <div>
        <button className="bg-white text-black p-4 px-12 text-xl hover:bg-opacity-60 rounded-lg">
          Play
        </button>
        <button className="bg-gray-700 text-white p-4 px-12 text-xl bg-opacity-70 hover:bg-opacity-90 rounded-lg mx-2">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
