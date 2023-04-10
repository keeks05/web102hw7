import {React} from "react";
import './CreateChar.css'
import { supabase } from "../client"
import { useState } from "react";

const createChar = () => {
   const [name, setName] = useState('')
   const [age, setAge] = useState(0)
   const [primary_skill, setPrimary] = useState('')

   const createCharacter = async(e) => {
      e.preventDefault();
      await supabase
         .from ('Characters')
         .insert({name: name, age: age, primarySkill: primary_skill})
         .select();
      
      window.location = '/';
   }
   return (
      <div className="create">
         <form onSubmit={createCharacter}>
         <div className="wrapper-name">
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
         </div>
         <div className="wrapper-name">
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
         </div>
         
      <div className="wrapper">
      <p className="header">Please select your primary skill</p>
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
         </div>
         
         <input type="submit" value="Submit" id="submit"/>
         </form>
      </div>
   )

}


export default createChar