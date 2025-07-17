"use client";

import {
    FaArchive,
    FaFacebook,
    FaGithub,
    FaLock,
    FaMoon,
    FaTrash,
    FaUser,
} from "react-icons/fa";
import "./userprofile.style.css";
import Footer from "@petnet/components/footer";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGears } from "react-icons/fa6";
import { IoMdSunny } from "react-icons/io";
import { LuDog } from "react-icons/lu";
import { FiPlusCircle } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoGlobe } from "react-icons/io5";
import PetDetails from "@petnet/components/profile/petDetails";
import { useState } from "react";

const UserProfile = () => {
    const [showPetDetails, setShowPetDetails] = useState(false);
    return (
        <>
            {showPetDetails ? <PetDetails setShowPetDetails={setShowPetDetails} /> : <></>}
            <main className="mainUserProfileContainer">
                <div className="userProfileWrapper">
                    <aside className="userInformations">
                        <span>
                            <FaUser className="subtitleIcon" />
                            <h3>Configuracoes de usuario</h3>
                        </span>

                        <label>Name: </label>
                        <p>Gustavo Melo</p>

                        <label>Email: </label>
                        <p>gustavo@mail.com</p>

                        <label>Phone number: </label>
                        <p>11 99999-9999</p>

                        <label>TFA Enabled: </label>
                        <p>
                            <FaLock /> TFA Enabled with success!
                        </p>

                        <button type="button" className="btnChangeUserProfile">
                            Editar
                        </button>
                    </aside>

                    <section className="socialMediaContainer">
                        <h3>
                            <IoGlobe className="icon" /> Social Medias:{" "}
                        </h3>

                        <ul>
                            <li>
                                <span>
                                    <AiFillGoogleCircle className="socialMediaIcon socialMediaIconGoogleConnect" />{" "}
                                    Google{" "}
                                </span>
                                <button type="button">Conectar</button>
                            </li>

                            <li>
                                <span>
                                    <FaFacebook className="socialMediaIcon socialMediaIconFacebookConnect" />{" "}
                                    Facebook{" "}
                                </span>
                                <button type="button" className="btnDisconnect">
                                    Conectar
                                </button>
                            </li>

                            <li>
                                <span>
                                    <FaGithub className="socialMediaIcon socialMediaIconGithubConnect" />{" "}
                                    Github{" "}
                                </span>
                                <button type="button" className="btnConnect">
                                    Conectar
                                </button>
                            </li>
                        </ul>
                    </section>
                </div>

                <div className="userProfileWrapper">
                    <aside className="accountConfigWrapper">
                        <span>
                            <FaGears className="subtitleIcon" />
                            <h3>Configuracoes de conta: </h3>
                        </span>

                        <div className="accountInitialPageConfig">
                            <label>Pagina inicial: </label>
                            <select>
                                <option>🏡 Home</option>
                                <option>📷 Galeria</option>
                                <option>📱 Feed</option>
                                <option>🕹 Atividades</option>
                            </select>
                        </div>

                        <label>Tema: </label>
                        <div className="switchContainer">
                            <p>
                                <IoMdSunny />
                            </p>
                            <button className="btnSwitch btnSwitchLightTheme">
                                <span className=""></span>
                            </button>
                            <p>
                                <FaMoon />
                            </p>
                        </div>

                        <div className="btnContainer">
                            <button className="btnDisable" type="button">
                                <FaArchive className="btnIcons" /> Desativar
                                conta
                            </button>
                            <button className="btnRemove" type="button">
                                <FaTrash className="btnIcons" /> Excluir conta
                            </button>
                        </div>
                    </aside>

                    <section className="petsContainer">
                        <h3>
                            <LuDog className="subtitleIcon" /> Pets:
                        </h3>

                        <ul>
                            <li className="listItemPet">
                                <figure>
                                    <img
                                        src="/assets/catface.jpg"
                                        alt="image"
                                    />
                                    <figcaption>petname</figcaption>
                                </figure>

                                <div>
                                    <button className="btnDetails" onClick={() => setShowPetDetails(true)}>
                                        Detalhes
                                    </button>

                                    <button className="btnMobileDetails" onClick={() => setShowPetDetails(true)}>
                                        <HiOutlineDotsHorizontal />
                                    </button>
                                </div>
                            </li>
                            <li className="listItemPet">
                                <figure>
                                    <img
                                        src="/assets/catface.jpg"
                                        alt="image"
                                    />
                                    <figcaption>petname</figcaption>
                                </figure>

                                <div>
                                    <button className="btnDetails" onClick={() => setShowPetDetails(true)}>
                                        Detalhes
                                    </button>
                                    <button className="btnMobileDetails" onClick={() => setShowPetDetails(true)}>
                                        <HiOutlineDotsHorizontal />
                                    </button>
                                </div>
                            </li>
                            <li className="addPet">
                                <FiPlusCircle />
                            </li>
                        </ul>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default UserProfile;
