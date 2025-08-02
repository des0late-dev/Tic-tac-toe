"use client";
import Image from "next/image";
import React, { useState } from "react";
export default function Home() {


 const [initialBoard, updatedBoard] = useState([
  [' ',' ',' '],
  [' ',' ',' '],
  [' ',' ',' ']])

  const [currentPlayer,updateCurrentPlayer] = useState("X")
  
function togglePlayer (){
  if(currentPlayer==="X"){
    updateCurrentPlayer("O")
  }
  else{
    updateCurrentPlayer("X")
  }
}

function onClickHandler (clickedRowIndex,clickedCellIndex){
  console.log(clickedRowIndex,clickedCellIndex)
const newBoard = initialBoard.map((row,rowIndex)=>{
  if(rowIndex===clickedRowIndex){
    return row.map((cell,cellIndex)=>{
      if(cellIndex===clickedCellIndex){
        return currentPlayer;
      }
      return cell;
    })
    
  }
  return row;
})
updatedBoard(newBoard)
togglePlayer()
}

  return(
    <div className="flex flex-col ">
    {initialBoard.map((row,rowIndex)=>(
      <div key={rowIndex} style={{display:"flex"}}> 
      {row.map((cell,cellIndex)=>(
        <div 
       className="w-14 h-14 border border-black flex"
        key={cellIndex}
        onClick={()=>onClickHandler(rowIndex,cellIndex)}
        >{cell}</div>
      ))}
      </div>
    ))}
    
    </div>
  );
}
