import Logo from '../assets/Logo.svg' ;
import myStyle from './style';

function Nav (){

    return (
        <div className="Nav">
            <ul style={{...myStyle("leadText" , "black")}} >
                <li style={{display : "flex" , justifyContent : "left"}}> <img src = {Logo} alt = ''></img> </li>
                <li><a href='home.html'>Home</a></li>
                <li><a href='about.html'>About</a></li>
                <li><a href='menu.html'>Menu</a></li>
                <li><a href='reservation.html'>Reservations</a></li>
                <li><a href='order.html'>Order Online</a></li>
                <li style={{textAlign : "right"}} ><a href='login.html'>Login</a></li>
            </ul>
        </div>
        
    );
}

export default Nav ;