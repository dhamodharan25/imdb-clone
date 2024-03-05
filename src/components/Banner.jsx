import React from "react";

function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[70vh] bg-cover"
      style={{
        backgroundImage: `url(https://www.bhmpics.com/downloads/hd-movie-poster-wallpapers-/1.egjuck.jpg)`,
      }}
    >
      <div className="text-white text-xl text-center w-full bg-blue-900/60 p-4">
        New Movies
      </div>
    </div>
  );
}

export default Banner;
