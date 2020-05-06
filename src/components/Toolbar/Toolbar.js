import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const toolbar = props => (

    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar_logo"><a href="/">THE LOGO</a></div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul>
                    <li><div><a href="/">Home</a></div></li>
                    <li><div><a href="/signin">Login</a></div></li>
                    <li><div><a href="/signup">Register</a></div></li>
                    <li><div><a href="/">Profile</a></div></li>
                </ul>     
            </div>
        </nav>
        </header>
    
);

export default toolbar;

 