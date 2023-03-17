import Menu from './Menu';
import Reservations from './Reservations';
import Order from './Order';
import Login from './Login';
import Logo from '../assets/Logo.svg' ;
import myStyle from './style';
import Main from './Main';
import { Routes , Route , Link } from "react-router-dom";


const handleClick = (anchor) => () => {
    const id = `${anchor}`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block:"start",
      });
    }
  };
  
function Nav (){
    return (
        <>
         <header >
         <nav className="Nav">
            <ul style={myStyle("leadText" , "green")} >
                <li style={{display : "flex" , justifyContent : "left"}}> <img src = {Logo} alt = ''></img> </li>
                <li> <Link to = "/" >Main</Link> </li>
                <li><a href='/#about' onClick={handleClick("About")} >About</a></li>
                <li><Link to = "/components/Menu" >Menu</Link></li>
                <li><Link to = "/components/Reservations">Reservations</Link></li>
                <li><Link to = "/components/Order">Order</Link></li>
                <li style={{textAlign : "right"}} ><Link to = "/components/Login">Login</Link></li>
            </ul>
         </nav>   
            <Routes>
                <Route path='/' element = {<Main/>} ></Route>
                <Route path='/components/Menu' element = {<Menu/>} ></Route>
                <Route path='/components/Reservations' element = {<Reservations/>} ></Route>
                <Route path='/components/Order' element = {<Order/>} ></Route>
                <Route path='/components/Login' element = {<Login/>} ></Route>
            </Routes>
          
        </header>
        </>
    );
}

export default Nav 