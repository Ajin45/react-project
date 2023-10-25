import React, { useState,useEffect } from 'react'
import "./Rowpost.css"
import axios from 'axios'
import Youtube from "react-youtube"
import {imageurl} from "../components/Constants"
function Rowpost(props) {
  const[film,setFilm]=useState([])
  const[urlId,seturlId]=useState("")
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
       console.log(response.data)
      setFilm(response.data.results)
    })
  },[])

  const opts= {
    height: '300',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const handleMovie=(id)=>{
    console.log(id)
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=45a54229ff43364a93536df4f94a3a1a` ).then(response=>{
      console.log(response.data)
      if(response.data.results.length!==0){
        seturlId(response.data.results[0])
     }
      else{
        console.log("error")
      } 
    })

}
   
  return (
        <div className='row pt-5'> 
        <div className=' col-md-7 col-12 mx-auto my-auto'>
        <h5 className='head'>{props.head}</h5>
         </div>
          <div className={props.isRow?"row-post-1": "row-post col-md-10 col-12 mx-auto my-auto"}>
            <div className="poster">
              {film.map((obj)=>
           <img onClick={()=>handleMovie(obj.id)} className={props.islarge?"largepost":'post col-md-4 col-6'} src={`${imageurl+obj.poster_path}`} alt=""/>
             )}
          </div>

          </div>
          
    { urlId?<Youtube opts={opts} videoId={urlId.key} className='col-md-6  col-12 mx-auto my-auto pt-5 pb-5'  />:"" }
         
        
        </div>
   
 )
}

export default Rowpost
