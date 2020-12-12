import logo from './logo.svg';
import {Route,Switch,NavLink} from 'react-router-dom';
import './App.css';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import User from './User';
import Login from './Login';
let NotFoundComponent = ()=><div>Not Found Component - 404 Error</div>
function App() {
  return (
    <div>
      <Header></Header>
      <ul>
        <li><NavLink to="/">Login</NavLink></li>
        <li><NavLink to="/aboutus">About Us</NavLink></li>
        <li><NavLink to="/contactus">Contact Us</NavLink></li> 
        <li><NavLink to="/user/1">User1</NavLink> </li>
        <li><NavLink to="/user/2">User2</NavLink> </li>
        <li><NavLink to="/user/3">User3</NavLink> </li> 
      </ul>
      <hr/>
      <Switch>
      <Route exact path="/" component={Login}></Route>
      <Route path="/aboutus" component={AboutUs}></Route>
      <Route path="/contactus" component={ContactUs}></Route>
      <Route path="/home" component={Home}></Route>
      <Route path="/user/:id" component={User}></Route>
      <Route component={NotFoundComponent}></Route>
      </Switch>
      <hr/>
      <Footer></Footer>
    </div>
  );
}

export default App;
