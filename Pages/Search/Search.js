import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import PageviewIcon from '@mui/icons-material/Pageview';
import "./Search.css"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import axios from 'axios';
import Singlepage from '../Trending/Singlepage';
import { Custompagination } from '../../Componenets/Pagination/Custompagination';



const Search = () => {
  const [type,setType]=useState(0);
  const [page,setPage]=useState(1);
  const [numOfPages, setNumOfPages] = useState(1);
  const [search,setSearch]=useState("");
  const [Content , setContent]=useState()
  const fetchSearch = async () => {
    const { data } = await axios.get(
           `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${search}&page=${page}&include_adult=false`
    );

     console.log(data);
     setContent(data.results)
     setNumOfPages(data.total_pages);
   
  };
  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    
  }, [type, page]);

  return (
    <>
     
  
    <div>
    <div className='search'>
      <TextField      style={{ flex: 1 }}
            className="searchBox"
            label="Search"
            variant="filled" id="filled-basic" 
            onChange={(e)=>setSearch(e.target.value)} 
            InputProps={{ style: { background: 'transparent' } }}/>     
      
      <PageviewIcon     className="searchIcon" style={{ fontSize: 70,marginTop:'-5px' }}   onClick={()=>{
        fetchSearch()
      }}/>

    </div>
    <div>
           <Tabs
          value={type}
       indicatorColor='primary'
       onChange={(event, newValue) => {
        setType(newValue);
        // setNumPage(1);
        // Add any other actions you want to perform on tab click
      }}
        >
          
          <Tab  label="Search Movies" />
          <Tab style={{marginLeft:'0px'}} label="Search Series" /> 
         </Tabs> 
    </div>
    <div className='search'>
    {Content &&    Content.map((c)=>(
        <Singlepage
        voteaverage={c.vote_average}
        id={c.id}
        poster={c.poster_path}
        title={c.title || c.name}
        date={c.first_air_date || c.release_date}
        media_type={type ? "tv" : "movie"}
        
      
      />
        )
        )
}
    </div>
    { numOfPages>1&&
  (<Custompagination setPage={setPage}   numOfPages={numOfPages} />)
  }

    </div>
    </>
       
  )
}

export default Search