import React from 'react'
import "../style.css"
import {Link} from "react-router-dom"
import { NameDataContext } from '../context/Context';

function FilterCard( {name, profile_pic_url, text ,imdbRating}) { 
  const {setNameData} =NameDataContext();

const nameTitle= `detail/${name}`
function click(){
 setNameData(name)

 }

 return (
   <div className='salooncard'>
       <div >
       {profile_pic_url ? (
         <img className='filmallimg' src={profile_pic_url}  alt="..." />
       ) : (
         <img className='filmallimg2'
           src="https://static.wikia.nocookie.net/just-because/images/0/0c/NoImage_Available.png/revision/latest?cb=20170601005615"
           alt="..."
         />
       )}
       <div >
         <h5 className='namemargin'>{name}</h5>
         <p className='textlength textbackground' >{text}</p>
         <div className="rating">
         <Link onClick={click}  className="btn btn-primary radius" to={nameTitle} >İncele</Link>
         <p>{imdbRating} </p>
         </div>
       </div>
     </div>
   </div>
 )
}


export default FilterCard