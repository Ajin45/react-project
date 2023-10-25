import React from 'react'
import "./Banner.css"
import { useEffect,useState } from 'react'
import axios from 'axios'
import {url1,imageurl} from "../components/Constants"
 

function Banner() {
  const[movie,setMovie]=useState([])
  useEffect(()=>{
    axios.get(url1).then((response)=>{
     setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length)])
  })
},[])

  return (
    <div className='banner' style={{backgroundImage:`url(${movie? imageurl+movie.poster_path:""})`}}> 

     <div className="title col-md-4 col-6">
      <h1>{movie? movie.title:""}</h1>
      </div> 

      <div className="overview col-md-4 col-6">
        <p className='overview'>{movie? movie.overview:""}</p>
        </div>   

      </div>

      
  
  )
}

export default Banner
