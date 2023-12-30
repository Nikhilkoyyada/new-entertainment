
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useState, useEffect } from 'react';
import './Singlepage.css';
import Badge from '@mui/material/Badge';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import DialogContent from '@mui/material/DialogContent';
import { unavailable } from '../../Config/Config';


const Singlepage = ({ voteaverage, id, poster, title, date, media_type  }) => {
  
  const [isHovered, setIsHovered] = useState(false);
  const [video, setVideo] = useState();

  

    const fetchVideo = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
    
        setVideo(data.results[0]?.key);
        console.log(data);
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };
    
  
  
  



    const handleWatchTrailer = () => {
      if (video) {
        const youtubeUrl = `https://www.youtube.com/watch?v=${video}`;
        window.open(youtubeUrl, '_blank');
      } else {
        console.warn('No video available');
        toast.warn('No video available', {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 3000, // Adjust the duration as needed
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    };
    
  
  useEffect(() => {
    fetchVideo();
  },  [id, media_type,fetchVideo]);

  return (
    <div  className={`content-container ${isHovered ? 'hovered' : ''}`}onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className='badge-container'>
        <Badge badgeContent={voteaverage} color={voteaverage > 7 ? 'secondary' : 'primary'}></Badge>
      </div>
      <img className='poster' src={poster ? `https://image.tmdb.org/t/p/w300${poster}` : unavailable} alt={title} />

      {isHovered && (
        <div className='hovered-content'>
          <div className='title'>{title}</div>
          <div className='details-container'>
            <div className='date'>{date}</div>
            <div className='genre'>{/* Add genre information here */}</div>
          </div>
          <div className='watch-trailer-button' onClick={handleWatchTrailer}>
            Watch
          </div>
        </div>
      )}

      <Dialog >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <img className='modalPoster' src={poster ? `https://image.tmdb.org/t/p/w300${poster}` : unavailable} alt={title} />
          <div className='details'>
            <span className='subs'>{media_type === 'tv' ? 'TV Series' : 'Movie'}</span>
            <span className='subs'> {date}</span>
            {/* Additional details can be added here */}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Singlepage;
