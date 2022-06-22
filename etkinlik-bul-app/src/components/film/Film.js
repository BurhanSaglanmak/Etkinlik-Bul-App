import React, { useEffect, useState } from "react";
import FilmCard from "./FilmCard";

function Film() {
  const [filmData, setFilmData] = useState([]);

  useEffect(() => {
    fetch("/Film.json")
      .then((cevap) => cevap.json())
      .then((veri) => setFilmData(veri));
  }, []);
  //console.log(filmData);

  return (
    <div>
      {filmData?.slice(0, 5).map((item, index) => (
        <FilmCard
          key={index}
          index={index}
          name={item.Title}
          profile_pic_url={item.Poster}
          text={item.Plot}
          imdbRating={item.imdbRating}

        />
      ))}
    </div>
  );
}

export default Film;
