import React from "react";
import './App.css'
import { useEffect, useState } from "react";
import { useRoutes, Link } from 'react-router-dom';
import Create from './routes/CreateChar';
import Gallery from './routes/CharGallery';
import Home from './routes/Home';
import Edit from './routes/EditChar';
import ErrorPage from './routes/error-page'
import DetailView from "./routes/DetailView";

import { supabase } from "./client";

const App = () => {
   const [chars, setChars] = useState([]);

   // Set up routes
   let element = useRoutes([
      {
         path: "/",
         element: <Home />,
         errorElement: <ErrorPage />,
      }, 
      {
         path:"/",
         element: <Home />
      },
      {
         path: "/create",
         element: <Create />
      },
      {
         path: "/gallery",
         element: <Gallery chars={chars} />,
      },
      {
         path: "/edit/:id",
         element: <Edit data={chars} />,
      },
      {
         path: '/detail/:id',
         element: <DetailView data={chars} />
      }
   ]);

   useEffect(() => {
      const fetchData = async () => {
         const {data} = await supabase
            .from('Characters')
            .select()
            .order('created_at', {ascending: true})
      
         setChars(data)
      }
      fetchData();
   }, []);
   return (
      <div className="App">
         <div className="header">
            <h1>Stardew Valley Character Creator</h1>
            <div className="content">
               <Link to="/"><button className="homeBtn"> Home </button></Link>
               <Link to="/create"><button className="createBtn"> Create Character </button></Link>
               <Link to="/gallery"><button className="galleryBtn"> Character Gallery </button></Link>
            </div>
         </div>
         {element}
      </div>
   )

}

export default App;