import "./asidePanel.style.css";
import useActivityRouting from "@petnet/hooks/useActivityRouting";
import { FaRegAddressCard } from "react-icons/fa6";
import { LuSwords } from "react-icons/lu";
import { TbPlayCardStarFilled } from "react-icons/tb";

const ActivityAsidePanel = () => {
    const { changeActivityRoute, currentActivityRoute } = useActivityRouting();
    return (
        <aside className="asidePanelContainer">
            <button
                type="button"
                className={
                    currentActivityRoute === "GenDoc"
                        ? "selectedButton"
                        : "default"
                }
                onClick={() => changeActivityRoute("GenDoc")}
            >
                <FaRegAddressCard className="btnIcons" /> Pet Docs
            </button>
            <button
                type="button"
                className={
                    currentActivityRoute === "RPGGen"
                        ? "selectedButton"
                        : "default"
                }
                onClick={() => changeActivityRoute("RPGGen")}
            >
                <LuSwords className="btnIcons" /> RPG Gen
            </button>
            <button
                type="button"
                className={
                    currentActivityRoute === "TCG"
                        ? "selectedButton"
                        : "default"
                }
                onClick={() => changeActivityRoute("TCG")}
            >
                <TbPlayCardStarFilled className="btnIcons" /> P-TCG
            </button>
        </aside>
    );
};

export default ActivityAsidePanel;
