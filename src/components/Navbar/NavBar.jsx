import React from 'react';
import classes from './NavBar.module.css';


const NavBar = () => {
    return (
        <nav className={classes.sidebar}>
        <div className ={classes.item}> 
          <a href = '/Profile/Profile'>Prifile</a>
        </div>
        <div className = {`${classes.item} ${classes.active}`}>
          <a href = '/dialogs'>Messages</a>
        </div>
        <div className = {classes.item}>
          <a>News</a>
        </div>
        <div className = {classes.item}>
          <a>Music</a>
        </div>
        <div className = {classes.item}>
          <a>Settings</a>
        </div>
      </nav>
    );
}
export default NavBar;