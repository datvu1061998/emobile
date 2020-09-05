import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Routers from "./Routers";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {actStart} from './actions/index';

function App() {
  const isLoad = useSelector(state => state.isLoad);
  const dispatch = useDispatch();
  dispatch(actStart());

  return (
    <Router>
      <div className="wrapper">
        <Navbar></Navbar>
        {ShowPages()}
        <Footer></Footer>
        <div className='custom-alert'>
        <i className="far fa-bell mr-10"></i><span></span></div>
        <div className='custom-load' style={{display: isLoad?'':'none' }}></div>
      </div>
    </Router>
  );
}


const ShowPages = () => {
  let result = null;
  if (Routers.length > 0) {
    result = Routers.map((router, index) => {
      return (
        <Route
          key={index}
          path={router.path}
          exact={router.exact}
          component={router.main}
        ></Route>
      );
    });
  }
  return <Switch>{result}</Switch>;
};

export default App;
