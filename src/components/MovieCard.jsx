import React from "react";

function MovieCard({
  movieObj,
  poster_path,
  name,
  handleAddtoWatchList,
  handleRemoveFromWatchList,
  watchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div
      className="h-[40vh] w-[200px] bg-cover bg-center rounded-xl hover:cursor-pointer hover:scale-110 duration-300 m-2"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      <div className="text-white text-xl w-full p-2 text center bg-gray-900/60">
        {name}
      </div>

      {doesContain(movieObj) ? (
        <div
          onClick={() => {
            handleRemoveFromWatchList(movieObj);
          }}
          className="m-4 flex justify-centervh-8 w-6 items-center rounded bg-black"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => {
            handleAddtoWatchList(movieObj);
          }}
          className="m-4 flex justify-centervh-8 w-6 items-center rounded bg-black"
        >
          &#128151;
        </div>
      )}
    </div>
  );
}

export default MovieCard;
