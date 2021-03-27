import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';

export default function header() {
    return (
        <div className='header'> 
          <IconButton>
          <PersonIcon fontsize="large" className="header_icon" />
          </IconButton>
          <img
          className="header_logo"
          src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/tinder.png"
           alt="failed to load"/>

           <IconButton>
           <ForumIcon fontSize="large" className="header_icon"/>
           </IconButton>
        </div>
    )
}
