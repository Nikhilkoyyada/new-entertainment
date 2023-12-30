import React, { useEffect, useState } from 'react'
import axios from "axios";
import Singlepage  from './Singlepage';
import "./Trending.css"
import { Custompagination } from '../../Componenets/Pagination/Custompagination';
 const Trending = () => {
  const [page, setPage] = useState(1);
  const [Content,setContent]=useState()
  const [numOfPages, setNumOfPages] = useState(1);
  const fetch=async()=>{
    const {data}=await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
    console.log(data)
   setContent(data.results);
   setNumOfPages(data.total_pages);
    
   
  }
  
  useEffect(() => {
    
    fetch();
    
  }, [page,fetch]);
 
  return (
    <>
  <div className='pageTitle'>
        Trending today
      </div>
  
    <div className='trending'>
      
{
    Content &&    Content.map((c)=>(
        <Singlepage
        voteaverage={c.vote_average}
        id={c.id}
        poster={c.poster_path}
        title={c.title || c.name}
        date={c.first_air_date || c.release_date}
        media_type={c.media_type}
       
      
      />
        )
        )
}
<Custompagination setPage={setPage} numOfPages={numOfPages} />



    </div>
    </>
  )
}
export default Trending