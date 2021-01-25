import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './containers/Home/Home';

function App() {
  return (
    <div>
      {/* // don't need anything outside of the routes */}
      {/* <Header /> */}
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          {/* determines what component is routed to.
        below route (NoMatch) would be 404*/}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;





// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import LoginPage from './pages/LoginPage/LoginPage';
// import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
// import UploadPage from './pages/UploadPage/UploadPage';
// import NoMatch from './pages/404Page/NoMatch'
// import NavBar from './components/NavBar';
// import Footer from './components/Footer';
// import './App.css';
// console.log ('test2',process.env)




// // class App extends Component {
// //   render() {
// //     return (
// <div>
//   {/* // don't need anything outside of the routes */}
//   <NavBar />
//   <Router>
//     <Switch>
//       <Route exact path="/" component={LoginPage} />
//       <Route exact path="/registration" component={RegistrationPage} />
//       <Route exact path="/upload" component={UploadPage} />
//       {/* determines what component is routed to.
//             below route (NoMatch) would be 404*/}
//       <Route component={NoMatch} />
//     </Switch>
//   </Router>
//   <Footer />
// </div>
// //     );
// //   };
// // }


// import React from "react";
// const NoMatch = props => (
//     <div>
//         <h1>404 error, the gnome has led you astray. This page does not exist.</h1>
//     </div>
// )
// export default NoMatch;

// this.props.history.push({
//   pathname: "/profile",
// })