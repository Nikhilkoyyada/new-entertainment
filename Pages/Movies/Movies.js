import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react';
import Singlepage from '../Trending/Singlepage';

import './Movies.css'
import { Custompagination } from '../../Componenets/Pagination/Custompagination';
import Gener from '../../Componenets/Pagination/Gener';
import Usegenre from '../../Componenets/Hooks/Usegenre';

const Movies = () => {
  const [page, setPage] = useState(1);
  const [Content,setContent]=useState()
  const [genere, setGenere] = useState()
  const [selectedGenre, setSelectedGenre] = useState([])
  const [numOfPages, setNumOfPages] = useState(1);
  const urlgener=Usegenre(selectedGenre)
  const fetchmovies=async()=>{
    try{
    const {data}=await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&include_adult=false&include_video=false&language=en-US&page=${page}&with_genres=${urlgener}`)
  console.log(data.results)
  setContent(data.results)
  setNumOfPages(data.total_pages);
    
  }
  
  catch{
  console.log("error");
  }
}
  useEffect(() => {
    fetchmovies()
  
  }, [page,urlgener, fetchmovies])
  
  return (
    <>
      <div className='pageTitle'>
   Movies Today
      </div>
  
   <div >
    
      <Gener
      type="movie"
      setGenere={setGenere}
      genere={genere}
      setSelectedGenre={ setSelectedGenre}
      selectedGenre={selectedGenre}
      
      /> 
    
    </div>
      
    <div className='movies'>

    {Content &&    Content.map((c)=>(
        <Singlepage
        voteaverage={c.vote_average}
        id={c.id}
        poster={c.poster_path}
        title={c.title || c.name}
        date={c.first_air_date || c.release_date}
        media_type="movie"
        
      
      />
        )
        )
}
</div>

{numOfPages>=1&&
  (<Custompagination setPage={setPage} numOfPages={numOfPages} />)
  }


</>
  
  )
}

export default Movies