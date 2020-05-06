import React from 'react';
import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';

    if (props.show){
        drawerClasses = 'side-drawer open';
    }


    return (<nav className={drawerClasses}>
        <ul>
            {/* <li>
                <div className="text-center">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Profile</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Kevin Sorey</h6>
                    <div class="chip">
                    <img src={"../images/example.jpg"}  width="150" height="150  "></img>  
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu5gn41miLaIb_kxnm2Ca2Uti5sdx3jwCIhY1hr26wqHYuE7H3"  width="150" height="150  "></img>  
                    </div>
                    <p className="card-text">Even when you are in a low, you have to continue to try, at any moment you can decide to pick yourself back up, Dont give Up!!</p>
                    <a href="#" className="card-link">Settings</a>
                    <a href="#" className="card-link">LogOut</a>
                </div>
                </div>
                </div>
            </li> */}
            <li><a href="/">Home</a></li>
            <li><a href="/">Goals</a></li>
            <li><a href="/">Habits</a></li>
            <li><a href="/">Young Adult</a></li>
            <li><a href="/">Books</a></li>
            <li><a href="/">Lifestyle</a></li>
            <li><a href="/">Jobs</a></li>
            <li><a href="/">About Us</a></li>
        </ul>
    </nav>
    );
};


export default sideDrawer;