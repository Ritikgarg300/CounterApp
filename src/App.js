import { useState } from "react";
import "./App.css";

function App() {
  // const count=0;
  const[count,setcount]=useState(0);
  function incrementHandler(){
    
     setcount(count+1);
  }
  function decrementHandler(){
   
    setcount(count-1);
  }
  function resetHandler(){
    setcount(0);
  }
  return (
   <div className="w-[100vw] h-[100vh] flex justify-center items-center  flex-col gap-2 bg-[#344152]" >
    <div className="text-[#0398d4] font-medium text-2xl">Increment And Decrement</div>
    <div className="flex bg-white gap-12 justify-center rounded-sm text-[25px] text-[#344151]">
      <div className="text-center w-20 border-[#bfbfbf] text-5xl border-r-2" onClick={incrementHandler}>+</div>
      <div className="font-bold gap-12 text-5xl">{count}</div>
      <div className="text-center w-20 border-[#bfbfbf] text-5xl border-l-2" onClick={decrementHandler}>-</div>
    </div>
    <button className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg" onClick={resetHandler}>Reset</button>
   </div>
  );
}

export default App;
