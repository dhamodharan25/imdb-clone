import React, { useEffect, useState } from "react";
import axios from "axios";

import MovieCard from "./MovieCard";
import Pagenavigation from "./Pagenavigation";

function Movies({
  handleAddtoWatchList,
  handleRemoveFromWatchList,
  watchlist,
}) {
  const [movies, setmovies] = useState([]);
  const [pageNo, setpageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo === 1) {
      setpageNo(pageNo);
    } else {
      setpageNo(pageNo - 1);
    }
  };

  const handleNext = () => {
    setpageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=f9a862f6d528d56bc88f412f0b3f8a5d&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        setmovies(res.data.results);
      });
  }, [pageNo]);

  return (
    <div className="p-5">
      <div className="text-2xl font-bold text-center p-4">Trending Movies</div>
      <div className=" flex flex-row flex-wrap justify-around gap-8">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              key={movieObj.id}
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
              handleAddtoWatchList={handleAddtoWatchList}
              handleRemoveFromWatchList={handleRemoveFromWatchList}
              watchlist={watchlist}
              movieObj={movieObj}
            />
          );
        })}
      </div>
      <Pagenavigation
        pageNo={pageNo}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </div>
  );
}

export default Movies;

// https://api.themoviedb.org/3/movie/popular?api_key=f9a862f6d528d56bc88f412f0b3f8a5d&language=en-US&page=1
