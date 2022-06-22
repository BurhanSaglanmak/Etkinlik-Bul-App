import React, { useEffect, useState } from "react";
import TheatreAllCard from "./TheatreAllCard"

function TheatreAll() {
  const [filmData, setFilmData] = useState([]);

  useEffect(() => {
    fetch("/Tiyatro.json")
      .then((cevap) => cevap.json())
      .then((veri) => setFilmData(veri));
  }, []);
  //console.log(filmData);

  return (
    <div>
        <h3 className="popular">Tiyatrolar</h3>
      {filmData?.map((item, index) => (
        <TheatreAllCard
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

export default TheatreAll