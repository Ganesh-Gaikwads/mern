import { useState } from "react";

export default function LikeButton(){
 let [isLiked, setIsLiked]= useState(false);
 let [clicks, setClicks]=useState(0);

 let toggleLiked =()=>{
    setIsLiked(!isLiked);
    setClicks(clicks+1);
    console.log("we are going to toggle");

 }

  return (
    <div>
      <p>Clicks={clicks}</p>
      <p onClick={toggleLiked} style={{color: isLiked ? "red" : "white"}}>
       
          <i className="fa-regular fa-heart"></i>
        </p>
    </div>
  )
     
}