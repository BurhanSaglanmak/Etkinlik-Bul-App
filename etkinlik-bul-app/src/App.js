import "./App.css";
import React from "react";
import Home from "./components/Home";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import PopularAll from "./components/popular/PopularAll"
import FilmAll from "./components/film/FilmAll"
import Searchbar from "./components/Searchbar"
import Navbar from "./components/Navbar"
import Detail from "./components/detail/Detail";
import {  NameProvider } from "./components/context/Context";
import TheatreAll from "./components/theatre/TheatreAll";
import BaleAll from "./components/bale/BaleAll";
import SaloonAll from "./components/saloonCard/SaloonAll";
import Filter from "./components/Filter/Filter";

function App() {

  
  return (
    <NameProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Searchbar />}>
          <Route path="/*" element={<Navbar />}>
            <Route path="" element={<Home />}/>
            <Route path="popular" element={<PopularAll />}/>
            <Route path="film" element={<FilmAll />}/>
            <Route path="tiyatro" element={<TheatreAll />}/>
            <Route path="bale" element={<BaleAll />}/>
            <Route path="detail/saloon/*" element={<SaloonAll />}/>
            <Route path="bale/detail/saloon/*" element={<SaloonAll />}/>
            <Route path="tiyatro/detail/saloon/*" element={<SaloonAll />}/>
            <Route path="film/detail/saloon/*" element={<SaloonAll />}/>

            <Route path="detail/saloon/detail/saloon/*" element={<SaloonAll />}/>
            
            <Route path="popular/detail/saloon/*" element={<SaloonAll />}/>
            <Route path="filter/detail/saloon/*" element={<SaloonAll />}/>
            <Route path="detail/*" element={<Detail />} />
            <Route path="popular/detail/*" element={<Detail />} />
            <Route path="film/detail/*" element={<Detail />} />
            <Route path="tiyatro/detail/*" element={<Detail />} />
            <Route path="bale/detail/*" element={<Detail />} />
            <Route path="detail/saloon/detail/*" element={<Detail />} />
            <Route path="filter/detail/*" element={<Detail />} />
            <Route path="filter/*" element={<Filter />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </NameProvider>
    
  );
}

export default App;
