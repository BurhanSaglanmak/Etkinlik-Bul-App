import React, { useState } from 'react'
import {Link,Outlet} from "react-router-dom";
import { NameDataContext } from './context/Context';
import "./style.css"

function Searchbar() {
  const { setNameData } = NameDataContext();
  const[value,setValue]=useState("")

  function change(e){
    setValue(e.target.value)

  }
  function click(){
    setNameData(value)
    setValue("")

  }
    // function submit(e){
    //     e.preventDefault()
    //     setNameData(value)
    // }
  return (
    <div className='backgroundcolor'>
       <nav className="navbar bg-light1 ">
  <div className="container-fluid backgroundcolornav ">
    <Link className="navbar-brand btn btn-outline-success radius" to="">Ana Sayfa</Link>
    <div  className="d-flex" role="search">
      <input value={value} onChange={change} className="form-control me-2 radius searchInput" type="search" placeholder="Search" aria-label="Search" />
      {value &&<Link className="navbar-brand btn btn-outline-success radius" onClick={click} to={`detail/${value}`} type="submit">Search</Link>}
    </div>
  </div>
</nav>
<Outlet />
    </div>
  )
}

export default Searchbar