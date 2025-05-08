import './footer.style.css';
import { FaCat } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footerContainer">
            <h2>Petnet <br />Copyright by license MIT 2025</h2>

            <FaCat />

            <h2>Website developed <br /> and designed by Gustavo S. Melo</h2>
        </footer>
    );
};

export default Footer;
