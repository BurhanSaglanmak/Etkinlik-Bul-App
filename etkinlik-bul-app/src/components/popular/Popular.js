import React, {useRef, useEffect, useState } from "react";
import PopularCard from "./PopularCard";
import {motion} from "framer-motion";
import "./slider.css"

function Popular() {
  const [width, setWidth]=useState(0);
  const carousel = useRef();
  const [popularData, setPopularData] = useState([]);
  const change = 7.9;
  useEffect(() => {
    fetch("/Film.json")
      .then((cevap) => cevap.json())
      .then((veri) => setPopularData(veri));
  }, []);
 // console.log(popularData);
  const filtered = popularData?.filter((item) => item.imdbRating > change);
  useEffect(()=>{
    setWidth(carousel.current.offsetWidth)
  },[])
// console.log(width);
  return (
    <div>
    <motion.div ref={carousel} className="carousel" whileTap={{cursor:"grabbing"}} >
      {width>1040?<motion.div drag="x" dragConstraints={{right: 0, left: -width }} className="inner-carousel" >
        <motion.div className="inner-carousel">
        <div>
      { filtered?.slice(0, 8).map((item, index) => {return(<div key={index} className="item">
      <PopularCard
          key={index}
          index={index}
          name={item.Title}
          profile_pic_url={item.Poster}
          text={item.Plot}
          imdbRating={item.imdbRating}
        />
      </div>
       
      )})}
    </div>
        </motion.div>
      </motion.div>
      :
      <div>
    { filtered?.slice(0, 8).map((item, index) => {return(<div key={index} className="item">
    <div className="">
    <PopularCard
        key={index}
        index={index}
        name={item.Title}
        profile_pic_url={item.Poster}
        text={item.Plot}
        imdbRating={item.imdbRating}
      />
    </div>
    </div>
     
    )})}
  </div>
    }
    </motion.div>

    </div>
    
  );
}

export default Popular;
