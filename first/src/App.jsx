import './App.css';
import {Fragment} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Aside from "./components/Aside";
import Clear from "./components/Clear";
import Footer from './components/Footer';

const App = () =>
  <Fragment>
    <Header />
    <Main />
    <Aside />
    <Clear />
    <Footer />
  </Fragment>;
    
export default App;
