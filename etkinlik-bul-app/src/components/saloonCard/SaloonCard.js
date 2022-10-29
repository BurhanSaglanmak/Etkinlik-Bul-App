import React from 'react'
import "../style.css"



function SaloonCard({ name, profile_pic_url, text }) { 



 return (
   <div className='filmallcard'>
          <hr></hr>
       <div className='popularcardcontainer' >
       {profile_pic_url ? (
         <img className='filmallimg1' src={profile_pic_url}  alt="..." />
       ) : (
         <img className='filmallimg1'
           src="https://static.wikia.nocookie.net/just-because/images/0/0c/NoImage_Available.png/revision/latest?cb=20170601005615"
           alt="..."
         />
       )}
       <div >
         <h5 className='namemargin'>{name}</h5>
         <p className='textlength textbackground' >{text}</p>
         <div className="rating">
         </div>
       </div>
     </div>
     <hr></hr>
   </div>
 )
}

export default SaloonCard