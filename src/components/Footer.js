import Logo2 from '../assets/Asset 18@4x.png'
import {myStyle , uiKit } from './style';

function Footer () {

    return (
        <footer className="Footer">
            <ul style={myStyle(uiKit.leadText , "black")} >
                <li ><img src={Logo2} alt = 'logo' ></img></li>
                <li>
                    <ul className="footer_nav">
                        <li> <b>Dormant Navigation</b> </li>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservations</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li> <b>Contact</b></li>
                        <li>Adresse</li>
                        <li>Phone</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li><b>Social Media Links</b></li>
                        <li>Facabook</li>
                        <li>Twitter</li>
                    </ul>
                </li>
            </ul>
        </footer>
    );
}

export default Footer ;