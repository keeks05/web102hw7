import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../client";
import './EditChar.css'

const EditChar = ({data}) => {
   const [name, setName] = useState('')
   const [age, setAge] = useState(0)
   const [primary_skill, setPrimary] = useState('')
   
   const {id} = useParams();
   const char = data.filter((char) => char.id === parseInt(id))[0];

   const updateChar = async(e) => {
      e.preventDefault();

      await supabase
         .from('Characters')
         .update({name: name, age: age, primarySkill: primary_skill})
         .eq('id', id)
      
         window.location = "/";
   }

   const deleteChar = async (e) => {
      e.preventDefault();
      await supabase
         .from('Characters')
         .delete()
         .eq('id', id);

      window.location = "/";

   }
   return (
      <div className="Edit">
         <h2>Update your Stardew Character</h2>
         <div className="container"></div>
         <h4>Current Character Information:</h4>
         <div className="card">
            <p>Name: {char.name}</p>
            <p>Age: {char.age}</p>
            <p>Skill: {char.primarySkill}</p>
         </div>
         <form onSubmit={updateChar}>
         <label>Name
            <input 
               type="text" 
               id="name" 
               name="name"
               onChange={(e) => setName(e.target.value)}
               required
               />
            <br />
         </label>
         <label>Age
            <input 
               type="number" 
               id="age" 
               name="age"
               onChange={(e) => setAge(e.target.value)}
               required   
            />
            <br />
         </label>
         
         <p>Please select your primary skill</p>
         <div className="radio">
            <label>
               <input 
                  type="radio" 
                  value="farming"
                  name="primary_skill"
                  onChange={(e) => setPrimary(e.target.value)}
                  required
               />
               Farming
            </label>
         </div>
         <div className="radio">
            <label>
               <input 
                  type="radio" 
                  value="fishing"
                  name="primary_skill"
                  onChange={(e) => setPrimary(e.target.value)}
                  required 
               />
               Fishing
            </label>
         </div>
         <div className="radio">
            <label>
               <input 
                  type="radio" 
                  value="combat"
                  name="primary_skill"
                  onChange={(e) => setPrimary(e.target.value)} 
                  required
               />
               Combat
            </label>
         </div>
         <div className="radio">
            <label>
               <input 
                  type="radio" 
                  value="rizz"
                  name="primary_skill" 
                  onChange={(e) => setPrimary(e.target.value)}
                  required
               />
               Rizz
            </label>
         </div>
         <div className="radio">
            <label>
               <input 
                  type="radio" 
                  value="mining"
                  name="primary_skill" 
                  onChange={(e) => setPrimary(e.target.value)}
                  required
               />
               Mining
            </label>
         </div>
         
         <input type="submit" value="Submit"/>
         <button className="deleteButton" onClick={deleteChar}>Delete</button>
         </form>
      </div>
   )
}

export default EditChar;