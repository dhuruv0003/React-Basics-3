// Ludo Board using objects 
import { useState } from "react"

export default function Ludoboard2() {

    let ob = {
        blue: 0,
        yellow: 0,
        red: 0,
        green: 0
    }
    let [moves, setMoves] = useState(ob)

      // now initially moves <= ob i.e ob is copied to moves
      

    let handleblue=()=>{
        setMoves((bluemove)=>{
            bluemove:moves.blue+1;
        })
    }
    // Expectations:=>  Above (bluemoves) should refer to object in moves and update their value i.e moves.blue by 1
    // But in reality Nothing happens. Because in JS when we update any value in an object then only value changes. But there is no change in address of object.
    // We know that useState() works or re-renders only if there is change in object.
    //Now to do so when there is a change in value of object, we will copy it into another object by using ...operator is spread operator.


  

    return (
        <div>
            <h2>Ludo Board Using Concept of Objects</h2>

            <h3>Blue = {moves.blue}</h3>
            <button onClick={handleblue} style={{ backgroundColor: "blue" }}> 1+ </button>

            <h3>Yellow = {moves.yellow}</h3>
            <button style={{ backgroundColor: "yellow", color: "black" }}>1+</button>

            <h3>Red = {moves.red}</h3>
            <button style={{ backgroundColor: "red" }}> 1+</button>

            <h3>Green = {moves.green}</h3>
            <button style={{ backgroundColor: "green" }}>1+</button>
        </div>
    )
}