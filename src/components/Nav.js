import Logo from '../assets/Logo.svg' ;
import '../App.css' ;

function Nav (){

    return (
        <ul className = "Nav">
            <li> <img src = {Logo} alt = '' ></img> </li>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Menu</a></li>
            <li><a href='#'>Reservations</a></li>
            <li><a href='#'>Order Online</a></li>
            <li><a href='#'>Login</a></li>
        </ul>
    );
}

export default Nav ;