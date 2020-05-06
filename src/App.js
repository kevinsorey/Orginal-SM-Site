import React, { Component } from 'react';
import './App.css';


import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';



// import Person from './components/Person/Person';
import MainRouter from "./MainRouter";
import { BrowserRouter } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

//redux
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {

  state = {
    SideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {SideDrawerOpen: !prevState.SideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({SideDrawerOpen: false});
  };

  render() {
    let backDrop;

    if (this.state.SideDrawerOpen){
      backDrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div className="App" style={{height:'100%'}}>
        <header className="App-header">
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.SideDrawerOpen}/>
          {backDrop}
          <main style={{marginTop: '64px'}}>
          {/* main content start */}
          
          <Provider store={store}>
          
            <BrowserRouter>
                <MainRouter />
            </BrowserRouter>
          
          </Provider>

          </main>
        </header>
      </div>


    );
  }
}
export default App;
