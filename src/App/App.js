import React from 'react';
import './App.scss';
import firebase from 'firebase/app';
import Home from '../components/Home/Home';

import firebaseConnection from '../helpers/data/connections';
import Auth from '../components/Auth/Auth';
import NavBar from '../components/NavBar/NavBar';

// call connection before
firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      // console.log('user', user);

      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  // we won't use this method very often
  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    return (
      <div className="App">
        <NavBar authed={authed}/>
        {/* if they are logged in show home */}
        {/* if not show log-in btn */}
        {
          // Home Container below
        (authed) ? (<Home />) : (<Auth/>)
        }
      </div>
    );
  }
}

export default App;
