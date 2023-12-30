
import React from 'react';
import Pagination from '@mui/material/Pagination';


export const Custompagination = ({setPage,numOfPages}) => {
   

   
    const handlee=(page)=>{
        setPage(page);
        window.scroll(0,0);

    }
  return (
    <div
    style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginTop: 10,
    }}
    >
  <Pagination
   onClick={(e)=>handlee(e.target.textContent)}
   count={numOfPages > 100 ? 100 : numOfPages}
   variant="outlined" 
   hideNextButton
   hidePrevButton
   color='primary'
  
   />
    </div>
  )
}
