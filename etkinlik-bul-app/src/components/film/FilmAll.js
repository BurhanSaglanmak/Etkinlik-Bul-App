import React, { useEffect, useState } from "react";
import FilmAllCard from "./FilmAllCard"

function FilmAll() {
  const [filmData, setFilmData] = useState([]);

  useEffect(() => {
    fetch("/Film.json")
      .then((cevap) => cevap.json())
      .then((veri) => setFilmData(veri));
  }, []);
  //console.log(filmData);

  return (
    <div>
        <h3 className="popular">Filmler</h3>
      {filmData?.map((item, index) => (
        <FilmAllCard
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

export default FilmAll