import React, { useEffect, useState } from "react";
import { NameDataContext } from '../context/Context';
import "../style.css"
import DetailMap from "./DetailMap";
import DetailPoster from "./DetailPoster";
import DetailSlider from "./DetailSlider";
import {Link} from "react-router-dom"


function Detail() {
  const { nameData } = NameDataContext();
  const [popularData, setPopularData] = useState([]);
  const [tiyatoData, setTiyatroData] = useState([]);
  const [baleData, setBaleData] = useState([]);
  const {setSaloonData} =NameDataContext();

  

  useEffect(() => {
    fetch("/Film.json")
      .then((cevap) => cevap.json())
      .then((veri) => setPopularData(veri));
    //console.log(nameData);
    //console.log(popularData.find(({Title})=> Title===nameData));

    //console.log(nameData);
  }, []);
  const data = popularData.find(({ Title }) => Title === nameData)

  //console.log(data);
  useEffect(() => {
    fetch("/Tiyatro.json")
      .then((cevap) => cevap.json())
      .then((veri) => setTiyatroData(veri));
    //console.log(nameData);
    //console.log(popularData.find(({Title})=> Title===nameData));

    //console.log(nameData);
  }, []);
  const dataTheatre = tiyatoData.find(({ Title }) => Title === nameData)

  useEffect(() => {
    fetch("/Bale.json")
      .then((cevap) => cevap.json())
      .then((veri) => setBaleData(veri));
    //console.log(nameData);
    //console.log(popularData.find(({Title})=> Title===nameData));

    //console.log(nameData);
  }, []);
  const dataBale = baleData.find(({ Title }) => Title === nameData)
  function clickBale(){
    setSaloonData(dataBale.konum)
   
    }
    function clickTheatre(){
      setSaloonData(dataTheatre.konum)
     
      }
      function clickdata(){
        setSaloonData(data.konum)
       
        }
        
   

  return (
    <div>
      {data && <DetailPoster poster={data.Poster} />}
      {data && <DetailMap konum={data.konum} latitude={data.latitude} longitude={data.longitude} />}
      {data &&<div className='detailcard'>
        {data ? <div >
          <DetailSlider image1={data.Images[0]} image2={data.Images[1]} image3={data.Images[2]} image4={data.Images[3]} />

          <div >
            <h3 >{data.Title}</h3>
            <p >{data.Plot}</p>
            <div className="rating">

            </div>
            <div>
              <h4>Aktörler </h4>
              <p>{data.Actors} </p>
              <h4>Yönetmen</h4>
              <p>{data.Director} </p>
              <h4>Ödüller</h4>
              <p>{data.Awards} </p>
              <h4>Yazar</h4>
              <p>{data.Writer} </p>
              <p>Ülke: {data.Country} / Dil: {data.Language} </p>
              <p>Süre: {data.Runtime} / İmdb {data.imdbRating} </p>
              <p>Etkinlik başlangıç {data.start} / Bitiş {data.end} </p>
              <h4>Salon</h4>
          {data.konum &&<Link onClick={clickdata}  className="btn btn-outline-secondary" to={`saloon/${data.konum}`} >{data.konum}</Link> }             
              
            </div>
          </div>
        </div> : <p></p>}

      </div>}
      {dataTheatre && <DetailPoster poster={dataTheatre.Poster} />}
      {dataTheatre && <DetailMap konum={dataTheatre.konum} latitude={dataTheatre.latitude} longitude={dataTheatre.longitude} />}
      {dataTheatre &&<div className='detailcard'>
        {dataTheatre ? <div >
          <DetailSlider image1={dataTheatre.Images[0]} image2={dataTheatre.Images[1]} image3={dataTheatre.Images[2]} image4={dataTheatre.Images[3]} />

          <div >
            <h3 >{dataTheatre.Title}</h3>
            <p >{dataTheatre.Plot}</p>
            <div className="rating">

            </div>
            <div>
            <h4>Aktörler </h4>
              <p>{dataTheatre.Actors} </p>
              <h4>Yönetmen</h4>
              <p>{dataTheatre.Director} </p>
              {dataTheatre.Awards && <h4>Ödüller</h4>}
              <p>{dataTheatre.Awards} </p>
              <h4>Yazar</h4>
              <p>{dataTheatre.Writer} </p>
              <p>Ülke: {dataTheatre.Country} / Dil: {dataTheatre.Language} </p>
              <p>Süre: {dataTheatre.Runtime} / İmdb {dataTheatre.imdbRating} </p>
              <p>Etkinlik başlangıç {dataTheatre.start} / Bitiş {dataTheatre.end} </p>
              <h4>Salon</h4>
          {dataTheatre.konum && <Link onClick={clickTheatre}  className="btn btn-outline-secondary" to={`saloon/${dataTheatre.konum}`} >{dataTheatre.konum}</Link>}
            </div>
          </div>
        </div> : <p></p>}

      </div>}
      {dataBale && <DetailPoster poster={dataBale.Poster} />}
      {dataBale && <DetailMap konum={dataBale.konum} latitude={dataBale.latitude} longitude={dataBale.longitude} />}
      {dataBale &&<div className='detailcard'>
        {dataBale ? <div >
          <DetailSlider image1={dataBale.Images[0]} image2={dataBale.Images[1]} image3={dataBale.Images[2]} image4={dataBale.Images[3]} />

          <div >
            <h3 >{dataBale.Title}</h3>
            <p >{dataBale.Plot}</p>
            <div className="rating">

            </div>
            <div>
            <h4>Aktörler </h4>
              <p>{dataBale.Actors} </p>
              <h4>Yönetmen</h4>
              <p>{dataBale.Director} </p>
              {dataBale && <h4>Ödüller</h4>}
              <p>{dataBale.Awards} </p>
              <h4>Yazar</h4>
              <p>{dataBale.Writer} </p>
              <p>Ülke: {dataBale.Country} / Dil: {dataBale.Language} </p>
              <p>Süre: {dataBale.Runtime} / İmdb {dataBale.imdbRating} </p>
              <p>Etkinlik başlangıç {dataBale.start} / Bitiş {dataBale.end} </p>
              <h4>Salon</h4>
          {dataBale.konum && <Link onClick={clickBale}  className="btn btn-outline-secondary" to={`saloon/${dataBale.konum}`} >{dataBale.konum}</Link>}
            </div>
          </div>
        </div> : <p></p>}

      </div>}
    </div>
  )
}

export default Detail