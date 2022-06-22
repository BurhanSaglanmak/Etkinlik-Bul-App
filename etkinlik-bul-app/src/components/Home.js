import React from 'react'
import "../App.css";
import "./style.css"
import Popular from "./popular/Popular";
import Film from "./film/Film";
import {Link} from "react-router-dom";
import Theatre from './theatre/Theatre';
import Bale from './bale/Bale';

function Home() {
return (
  <div className="App">
    <Link  type="button" className="btn btn-primary btn-lg button radius" to="popular">Popüler Filmler</Link>
    <Popular />
    <Link  type="button" className="btn btn-primary btn-lg button radius" to="film" >Filmler</Link>
    <Film />
    <Link  type="button" className="btn btn-primary btn-lg button radius" to="tiyatro" >Tiyatrolar</Link>
    <Theatre />
    <Link  type="button" className="btn btn-primary btn-lg button radius" to="bale" >Bale</Link>
    <Bale />
  </div>
);
}

export default Home