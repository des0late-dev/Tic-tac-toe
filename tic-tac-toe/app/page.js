"use client";
import Image from "next/image";
import React, { useState } from "react";
export default function Home() {




 const [initialBoard, updatedBoard] = useState([
  [' ',' ',' '],
  [' ',' ',' '],
  [' ',' ',' ']])

  const [currentPlayer,updateCurrentPlayer] = useState("X")
  const [winner,setWinner] = useState(null)
  
  function checkWinner(newBoard){
for(let i=0;i<3;i++){
if(newBoard[i][0]==="X" && newBoard[i][1]==="X" && newBoard[i][2]==="X" || newBoard[0][0]==="X" && newBoard[1][1]==="X" && newBoard[2][2]==="X" || newBoard[0][2]==="X" && newBoard[1][1]==="X" && newBoard[2][0]==="X"){
setWinner("X")
  console.log("X wins");

}
if(newBoard[i][0]==="O" && newBoard[i][1]==="O" && newBoard[i][2]==="O" || newBoard[0][0]==="O" && newBoard[1][1]==="O" && newBoard[2][2]==="O" || newBoard[0][2]==="O" && newBoard[1][1]==="O" && newBoard[2][0]==="O"){
setWinner("O")
  console.log("O wins");
}}
}




function togglePlayer (){
  if(currentPlayer==="X"){
    updateCurrentPlayer("O")
  }
  else{
    updateCurrentPlayer("X")
  }
}

function onClickHandler (clickedRowIndex,clickedCellIndex){
  if(winner==="X" || winner==="O"){
    console.log("winner is "+ winner)
    return;
  }

  const clickedCell = initialBoard[clickedRowIndex][clickedCellIndex];
  if(clickedCell!==" "){
    return; 
  }

 
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
checkWinner(newBoard)
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
