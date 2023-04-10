import React, {Component, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import './charView.css'

const charView = (props) => {
   const {id} = useParams();
   const char = props.data.filter((char) => char.id === parseInt(id))[0];

   return (
      <div>
         <h2>Summary of Stardew Valley Character</h2>
         <p className="summary">
            Name: {char.name}
            <br></br>
            Age: {char.age}
            <br></br>
            Skill: {char.primarySkill}
         </p>
      </div>
   );
};

export default charView;