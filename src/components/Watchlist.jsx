import React, { useState } from "react";

import genreids from "../assets/utility/gener";

function Watchlist({ watchlist, setWatchList }) {
  const [search, setSearch] = useState("");

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let sortIncreasing = () => {
    let sortedIncreacing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });

    setWatchList([...sortedIncreacing]);
  };

  let sortDecreasing = () => {
    let sortedDecreacing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });

    setWatchList([...sortedDecreacing]);
  };

  return (
    <>
      {/* <div className="flex justify-center flex-wrap m-4">
        <div className="mx-4 flex justify-center h-[4rem ] w-[6rem] rounded-xl text-white font-bold items-center bg-blue-400">
          Action
        </div>

        <div className="flex justify-center h-[4rem ] w-[6rem] rounded-xl text-white font-bold items-center bg-gray-400/50">
          Action
        </div>
      </div> */}

      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4 "
          placeholder="Search For Movies"
        />
      </div>
      {/* //https://image.tmdb.org/t/p/original/${poster_path} */}
      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex justify-center">
                <div onClick={sortDecreasing} className="p-2">
                  <i class="fa-solid fa-up-long"></i>
                </div>
                <div className="p-2">Rating</div>
                <div onClick={sortIncreasing} className="p-2">
                  <i class="fa-solid fa-down-long"></i>
                </div>
              </th>

              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {watchlist
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b-2">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="w-[10rem] h-[6rem] "
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                      />
                      <div className="mx-10">{movieObj.title}</div>
                    </td>

                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>
                    <td className="text-red-800">Delete</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
