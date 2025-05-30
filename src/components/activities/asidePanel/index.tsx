import { useRouter } from "next/navigation";
import "./asidePanel.style.css";
import useActivityRouting from "@petnet/hooks/useActivityRouting";
import { FaRegAddressCard } from "react-icons/fa6";
import { LuSwords } from "react-icons/lu";
import { TbPlayCardStarFilled } from "react-icons/tb";

const ActivityAsidePanel = () => {
    const { changeActivityRoute, currentActivityRoute } = useActivityRouting();
    const router = useRouter();

    return (
        <aside className="asidePanelContainer">
            <button
                type="button"
                className={
                    currentActivityRoute === "RPGGen"
                        ? "selectedButton"
                        : "default"
                }
                onClick={() => {
                    changeActivityRoute("RPGGen");
                }}
            >
                <LuSwords className="btnIcons" /> <p>Petmon</p>
            </button>
            <button
                type="button"
                className={
                    currentActivityRoute === "GenDoc"
                        ? "selectedButton"
                        : "default"
                }
                onClick={() => {
                    changeActivityRoute("GenDoc");
                    router.push("/activities/gendocument");
                }}
            >
                <FaRegAddressCard className="btnIcons" /> <p>Pet Docs</p>
            </button>
            <button
                type="button"
                className={
                    currentActivityRoute === "TCG"
                        ? "selectedButton"
                        : "default"
                }
                onClick={() => {
                    changeActivityRoute("TCG");
                    router.push("/activities/gentcg");
                }}
            >
                <TbPlayCardStarFilled className="btnIcons" /> <p>PetTCG</p>
            </button>
        </aside>
    );
};

export default ActivityAsidePanel;
