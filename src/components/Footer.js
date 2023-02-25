import Logo2 from '../assets/Asset 18@4x.png'

function Footer () {

    return (
        <>
        <ul className='Footer'>
            <li><img src={Logo2} alt = '' ></img></li>
            <li>
                <ul>
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
        </>
    );
}

export default Footer ;