import React, { useEffect, useState } from "react";
import { NameDataContext } from '../context/Context';
import "../style.css"
import SaloonCard from "./SaloonCard"


function SaloonAll() {
  const { saloonData } = NameDataContext();
  const [popularData, setPopularData] = useState([]);
  const [tiyatoData, setTiyatroData] = useState([]);
  const [baleData, setBaleData] = useState([]);

  

  useEffect(() => {
    fetch("/Film.json")
      .then((cevap) => cevap.json())
      .then((veri) => setPopularData(veri));
    //console.log(nameData);
    //console.log(popularData.find(({Title})=> Title===nameData));

    //console.log(nameData);
  }, []);
  const data = popularData?.filter(( {konum} )=>konum?.includes(saloonData))

  //console.log(data);
  useEffect(() => {
    fetch("/Tiyatro.json")
      .then((cevap) => cevap.json())
      .then((veri) => setTiyatroData(veri));
    //console.log(nameData);
    //console.log(popularData.find(({Title})=> Title===nameData));

    //console.log(nameData);
  }, []);
  const dataTheatre = tiyatoData?.filter(( {konum} )=>konum?.includes(saloonData))

  useEffect(() => {
    fetch("/Bale.json")
      .then((cevap) => cevap.json())
      .then((veri) => setBaleData(veri));
    //console.log(nameData);
    //console.log(popularData.find(({Title})=> Title===nameData));

    //console.log(nameData);
  }, []);
  const dataBale = baleData?.filter( ( {konum} )=>konum?.includes(saloonData))
        
   

  return (
    <div className="saloonAll">

    {data && <div>
      {saloonData &&<h3>{saloonData}</h3>}
      {popularData && data?.map((item, index) => (
        <SaloonCard
          key={index}
          index={index}
          name={item.Title}
          profile_pic_url={item.Poster}
          text={item.Plot}
          imdbRating={item.imdbRating}

        />
      ))}
    </div>}
    {dataTheatre && <div>
      {dataTheatre?.map((item, index) => (
        <SaloonCard
          key={index}
          index={index}
          name={item.Title}
          profile_pic_url={item.Poster}
          text={item.Plot}
          imdbRating={item.imdbRating}

        />
      ))}
    </div>}
    {dataBale && <div>
      {dataBale?.map((item, index) => (
        <SaloonCard
          key={index}
          index={index}
          name={item.Title}
          profile_pic_url={item.Poster}
          text={item.Plot}
          imdbRating={item.imdbRating}

        />
      ))}
    </div>}     

    </div>
  )
}

export default SaloonAll