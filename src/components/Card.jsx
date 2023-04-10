import React from "react"
import { useState } from "react"
import "./Card.css"
import { Link } from "react-router-dom"

const Card = (props) => {
   return (
      <div className="Card" >
         <h2 className="name">Name: {props.name}</h2>
         <h3 className="age">Age: {props.age}</h3>
         <h3 className="primary_skill">Skill: {props.primary_skill}</h3>
         <Link to={'/edit/'+props.id}><button className="edit">Edit Character</button></Link>
      </div>
   )
}

export default Card;