import "./asidePanel.style.css";

import { FaRegAddressCard } from "react-icons/fa6";
import { LuSwords } from "react-icons/lu";
import { TbPlayCardStarFilled } from "react-icons/tb";

const ActivityAsidePanel = () => {
    return (
        <aside className="asidePanelContainer">
            <button type="button">
                <FaRegAddressCard className="btnIcons" /> Pet Docs
            </button>
            <button type="button">
                <LuSwords className="btnIcons" /> RPG Gen
            </button>
            <button type="button">
                <TbPlayCardStarFilled className="btnIcons" /> P-TCG
            </button>
        </aside>
    );
};

export default ActivityAsidePanel;
