import React, {useState, useEffect} from "react"
import Card from '../components/Card'
import { Link } from "react-router-dom";

const CharGallery = (props) => {
   const [characters, setCharacters] = useState([]);

   useEffect(() => {
      setCharacters(props.chars);
   }, [props]);
   return (
      <div className="ReadPosts">
         {
            characters && characters.length > 0 ?
            characters.map((char) =>
            <Link to={'/detail/'+char.id} key={char.id}>
                  <Card id={char.id} name={char.name} age={char.age} primary_skill={char.primarySkill} key={char.id}/>
            </Link>
            ) : <h2>{'There are no characters yet'}</h2>
         }
      </div>
   )
}

export default CharGallery;