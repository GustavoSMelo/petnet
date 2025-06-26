"use client";

import { FaFacebook, FaGithub, FaLock, FaUser } from "react-icons/fa";
import "./userprofile.style.css";
import Footer from "@petnet/components/footer";
import { AiFillGoogleCircle } from "react-icons/ai";

const UserProfile = () => {
    return (
        <>
            <main className="mainUserProfileContainer">
                <div className="userProfileWrapper">
                    <aside>
                        <FaUser />

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
                        <h3>Social Medias: </h3>

                        <ul>
                            <li>
                                <span>
                                    <AiFillGoogleCircle className="socialMediaIcon socialMediaIconGoogleConnect" /> Google{" "}
                                </span>
                                <button type="button">Conectar</button>
                            </li>

                            <li>
                                <span>
                                    <FaFacebook className="socialMediaIcon socialMediaIconFacebookConnect" /> Facebook{" "}
                                </span>
                                <button type="button" className="btnDisconnect">Conectar</button>
                            </li>

                            <li>
                                <span>
                                    <FaGithub className="socialMediaIcon socialMediaIconGithubConnect" /> Github{" "}
                                </span>
                                <button type="button" className="btnConnect">Conectar</button>
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
