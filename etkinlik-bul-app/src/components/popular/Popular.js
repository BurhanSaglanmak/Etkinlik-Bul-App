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

  return (
    <motion.div ref={carousel} className="carousel" whileTap={{cursor:"grabbing"}} >
      <motion.div drag="x" dragConstraints={{right: 0, left: -width }} className="inner-carousel" >
        <motion.div className="inner-carousel">
        <div>
      {filtered?.slice(0, 8).map((item, index) => {return(<motion.div key={index} className="item">
      <PopularCard
          key={index}
          index={index}
          name={item.Title}
          profile_pic_url={item.Poster}
          text={item.Plot}
          imdbRating={item.imdbRating}
        />
      </motion.div>
       
      )})}
    </div>
        </motion.div>
      </motion.div>
    </motion.div>
    
  );
}

export default Popular;
