import React, { useEffect,useState } from "react";

export default function Clock() {
   const [counter,setCounter] = useState(0);
   useEffect(()=> {
    setInterval(()=>{
        setCounter(counter => counter+ 1 );
      },1000)
   })
      
   return  (
    <p>{counter} seconds have passed!!</p>
   )
}
