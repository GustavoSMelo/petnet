'use client';

import './navbar.style.scss';
import { MdOutlineLogout } from "react-icons/md";
import { FaHome, FaCat, FaImage } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter();

    return <nav className='navbarContainer'>
        <div>
            <MdOutlineLogout />
            <FaHome onClick={() => router.push('/home')} />
        </div>

        <div>
            <FaCat />
            <h2>Petnet</h2>
        </div>

        <div>
            <FaImage />
            <FaCircleUser onClick={() => router.push('/profile/user')} />
        </div>
    </nav>
};

export default Navbar;
