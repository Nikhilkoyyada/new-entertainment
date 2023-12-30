import * as React from 'react';
import Box from '@mui/material/Box';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { useNavigate } from 'react-router-dom';




export default function SimpleBottomNavigation() {

  const [value, setValue] = React.useState(0);
  const navigate=useNavigate()

  

  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0,
  }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          if(newValue===0){
            navigate('/trending')
          }
          if(newValue===1){
            navigate('/movies')
          }
          if(newValue===2){
            navigate('/series')
          }
          if(newValue===3){
            navigate('/search')
          }
        }}
        sx={{    backgroundColor: "#2d313a",}} 
      >
        <BottomNavigationAction  label="Trending"   icon={<WhatshotIcon sx={{ color: 'white' }}   />} />
  
        <BottomNavigationAction label="Movies"   sx={{ color: 'black' }}icon={< MovieFilterIcon sx={{ color: 'white' }} />} />
        <BottomNavigationAction label="Tv Series "    sx={{ color: 'black' }} icon={<TvIcon  sx={{ color: 'white' }}     />} />
        <BottomNavigationAction label="Search"   sx={{ color: 'black' }}icon={< SearchIcon sx={{ color: 'white' }} />} />
      </BottomNavigation>
    </Box>
  );
}