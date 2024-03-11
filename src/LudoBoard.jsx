
// Ludo Board Without using object 


import { useState } from "react";
export default function LudoBoard(){
 let [count1,setcount1]=useState(0)
 let handleblue=()=>{
    setcount1((count)=>{
        return count+1
    })
 }
 let [count2,setcount2]=useState(0)
 let handleyellow=()=>{
    setcount2((count)=>{
        return count+1
    })
 }
 let [count3,setcount3]=useState(0)
 let handlered=()=>{
    setcount3((count)=>{
        return count+1
    })
 }
 let [count4,setcount4]=useState(0)
 let handlegreen=()=>{
    setcount4((count)=>{
        return count+1
    })
 }

    return (
        <div className="">
            <h1>Game Begins</h1>
            <h3>Blue = {count1}</h3>
            <button onClick={handleblue} style={{backgroundColor:"blue"}}>1+</button>
            <h3>Yellow = {count2}</h3>
            <button onClick={handleyellow} style={{backgroundColor:"yellow", color:"black"}}>1+</button>
            <h3>Red = {count3} </h3>
            <button onClick={handlered} style={{backgroundColor:"red"}}> 1+</button>
            <h3>Green = {count4}</h3>
            <button onClick={handlegreen} style={{backgroundColor:"green"}}>1+</button>
        </div>
    );
}