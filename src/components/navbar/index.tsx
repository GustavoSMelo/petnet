import './navbar.style.scss';
import { MdOutlineLogout } from "react-icons/md";
import { FaHome, FaCat, FaImage } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";

const Navbar = () => {
    return <nav className='navbarContainer'>
        <div>
            <MdOutlineLogout />
            <FaHome />
        </div>
        <div>
            <FaCat />
            <h2>Petnet</h2>
        </div>
        <div>
            <FaImage />
            <FaCircleUser />
        </div>
    </nav>
};

export default Navbar;
