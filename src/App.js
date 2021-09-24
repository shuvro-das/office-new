

import {BrowserRouter as  Router, Route, Switch } from 'react-router-dom';
import './App.css';
import CreateTemplate from './components/CreateTemplate';
import DynamicForm from './components/DynamicForm';
import EmployeePerformace from './components/EmployeePerformace';
import Home from './components/Home';
import Navbar from './components/Navbar';
// import New from './components/New';
import newCreateTemplate from './components/newCreateTemplate';
import Footer from './components/pages/Footer/Footer';

import SignUp from './components/SignUp';
import ScrollToTop from './components/SrollOnTop'


function App() {
 
  return (
   
    <Router>
     <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/services' exact component={CreateTemplate} />
        {/* <Route path='/products' exact component={New} /> */}
        <Route path='/sign-up' exact component={SignUp} />
        

      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
