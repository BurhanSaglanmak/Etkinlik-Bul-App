import React, { useEffect, useState } from "react";
import BaleAllCard from "./BaleAllCard"

function BaleAll() {
  const [filmData, setFilmData] = useState([]);

  useEffect(() => {
    fetch("/Bale.json")
      .then((cevap) => cevap.json())
      .then((veri) => setFilmData(veri));
  }, []);
  //console.log(filmData);

  return (
    <div>
        <h3 className="popular">Bale</h3>
      {filmData?.map((item, index) => (
        <BaleAllCard
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

export default BaleAll