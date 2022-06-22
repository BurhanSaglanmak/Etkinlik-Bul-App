import React, { useEffect, useState } from "react";
import { NameDataContext } from '../context/Context';
import "../style.css"
import FilterCard from "./FilterCard";




function Filter() {
  const {saloonDataFilter,etkinlikData,tarih} =NameDataContext();
  const [popularData, setPopularData] = useState([]);
  const [tiyatoData, setTiyatroData] = useState([]);
  const [baleData, setBaleData] = useState([]);
 console.log(tarih);
    
 useEffect(() => {
  fetch("/Film.json")
    .then((cevap) => cevap.json())
    .then((veri) => setPopularData(veri));
  //console.log(nameData);
  //console.log(popularData.find(({Title})=> Title===nameData));

  //console.log(nameData);
}, []);
const data1 = popularData?.filter(( {konum} )=>konum?.includes(saloonDataFilter))
const data = data1?.filter(( {Type} )=>Type?.includes(etkinlikData))

//console.log(data);
useEffect(() => {
  fetch("/Tiyatro.json")
    .then((cevap) => cevap.json())
    .then((veri) => setTiyatroData(veri));
  //console.log(nameData);
  //console.log(popularData.find(({Title})=> Title===nameData));

  //console.log(nameData);
}, []);
const dataTheatre1 = tiyatoData?.filter(( {konum} )=>konum?.includes(saloonDataFilter))
const dataTheatre = dataTheatre1?.filter(( {Type} )=>Type?.includes(etkinlikData))

useEffect(() => {
  fetch("/Bale.json")
    .then((cevap) => cevap.json())
    .then((veri) => setBaleData(veri));
  //console.log(nameData);
  //console.log(popularData.find(({Title})=> Title===nameData));

  //console.log(nameData);
}, []);
const dataBale1 = baleData?.filter( ( {konum} )=>konum?.includes(saloonDataFilter))
const dataBale = dataBale1?.filter( ( {Type} )=>Type?.includes(etkinlikData))
      

  return (
    <div>
      {saloonDataFilter!==""&& etkinlikData!==""?<div className='filterData'>
        <h3>{saloonDataFilter} </h3>
        <h3 className='filterh3'>"{etkinlikData}"</h3>
      </div>:<p>Lütfen etkinlik ve salon giriniz...</p>}

      <div>

    {data && saloonDataFilter!==""&& etkinlikData!==""&& <div>
      {popularData && data?.map((item, index) => (
        <FilterCard
          key={index}
          index={index}
          name={item.Title}
          profile_pic_url={item.Poster}
          text={item.Plot}
          imdbRating={item.imdbRating}

        />
      ))}
    </div>}
    {dataTheatre && saloonDataFilter!==""&& etkinlikData!==""&&<div>
      {dataTheatre?.map((item, index) => (
        <FilterCard
          key={index}
          index={index}
          name={item.Title}
          profile_pic_url={item.Poster}
          text={item.Plot}
          imdbRating={item.imdbRating}

        />
      ))}
    </div>}
    {dataBale && saloonDataFilter!==""&& etkinlikData!==""&& <div>
      {dataBale?.map((item, index) => (
        <FilterCard
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
      
    </div>
  )
}

export default Filter