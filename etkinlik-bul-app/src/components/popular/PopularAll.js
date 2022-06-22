import React, { useEffect, useState } from "react";
import PopularAllCard from "./PopularAllCard";


function PopularAll() {
 
    const [popularData, setPopularData] = useState([]);
    const change = 8;
    useEffect(() => {
      fetch("/Film.json")
        .then((cevap) => cevap.json())
        .then((veri) => setPopularData(veri));
    }, []);
   // console.log(popularData);
    const filtered = popularData?.filter((item) => item.imdbRating > change);
  
    return (
      <div>
        <h3 className="popular">Popüler Filmler</h3>
        {filtered?.map((item, index) => (
          <PopularAllCard
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

export default PopularAll