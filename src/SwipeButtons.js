import React from 'react'
import "./SwipeButtons.css"
import ReplyIcon from '@material-ui/icons/Reply'
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            
            <IconButton className="swipeButtons_repeat">
             <ReplyIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons_left">
             <CloseIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons_star">
             <StarIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons_right">
              <FavoriteIcon fontSize="large"/> 
            </IconButton>
            <IconButton className="swipeButtons_lightning">
             <FlashOnIcon fontSize="large"/>
            </IconButton>
            
        </div>
    )
}

export default SwipeButtons;
