"use client";

import "./userprofile.style.scss";

import { useState } from "react";
import Footer from "@petnet/components/footer";
import Navbar from "@petnet/components/navbar";
import { FaGithubSquare, FaPencilAlt, FaUserCircle } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import {
    FaCirclePlus,
    FaSquareFacebook,
    FaSquareGooglePlus,
} from "react-icons/fa6";
import { VscDebugDisconnect } from "react-icons/vsc";
import PetImage from "../../assets/catface.jpg";

const UserProfile = () => {
    const [shouldReturnForm, setShouldReturnForm] = useState<
        "profile" | "edit"
    >("profile");

    return (
        <>
            <Navbar />
            <main className="mainUserProfileContainer">
                <aside className="asideContainer">
                    <div>
                        <FaUserCircle className="userIcon" />
                        <span>
                            <h1>User name</h1>
                            <h2>user@mail.com</h2>
                        </span>
                    </div>

                    <ul>
                        <li
                            className={
                                shouldReturnForm === "profile"
                                    ? "selectedOption"
                                    : ""
                            }
                            onClick={() => setShouldReturnForm("profile")}
                        >
                            <FaUserCircle /> <p>Perfil</p>
                        </li>
                        <li
                            className={
                                shouldReturnForm === "edit"
                                    ? "selectedOption"
                                    : ""
                            }
                            onClick={() => setShouldReturnForm("edit")}
                        >
                            <FaPencilAlt /> <p>Editar perfil</p>
                        </li>
                        <li>
                            <MdOutlineLogout /> <p>Sair</p>
                        </li>
                    </ul>
                </aside>

                {shouldReturnForm === "profile" ? (
                    <section className="profileContainer">
                        <section className="networkContainer">
                            <h1>Redes sociais (network):</h1>

                            <span className="network">
                                <FaSquareGooglePlus className="socialMediaIcon googleIcon" />
                                <h2>Google: </h2>
                                <p>email@gmail.com</p>
                                <button type="button" className="btnUnlink">
                                    <VscDebugDisconnect />
                                </button>
                            </span>

                            <span className="network">
                                <FaSquareFacebook className="socialMediaIcon facebookIcon" />
                                <h2>Facebook: </h2>
                                <p>email@gmail.com</p>
                                <button type="button" className="btnUnlink">
                                    <VscDebugDisconnect />
                                </button>
                            </span>

                            <span className="network">
                                <FaGithubSquare className="socialMediaIcon githubIcon" />
                                <h2>Github: </h2>
                                <p>email@gmail.com</p>
                                <button type="button" className="btnUnlink">
                                    <VscDebugDisconnect />
                                </button>
                            </span>
                        </section>

                        <section className="petsContainer">
                            <h1>Pets: </h1>

                            <div>
                                <figure>
                                    <img src={PetImage.src} alt="petLogo" />
                                    <figcaption>Pet name</figcaption>
                                </figure>

                                <figure>
                                    <FaCirclePlus className="registerIcon" />
                                    <figcaption>Cadastrar pet</figcaption>
                                </figure>
                            </div>
                        </section>
                    </section>
                ) : (
                    <section className="editProfileContainer">
                        <h1>Editar perfil: </h1>
                        <form>
                            <label>Nome: </label>
                            <input
                                type="text"
                                value="name"
                                placeholder="Insira seu nome"
                            />

                            <label>Email: </label>
                            <input
                                type="email"
                                value="Email"
                                placeholder="Insira seu email"
                            />

                            <label>Senha: </label>
                            <input
                                type="password"
                                value="senha"
                                placeholder="Insira sua senha"
                            />

                            <label>Confirmar senha: </label>
                            <input
                                type="password"
                                value="senha"
                                placeholder="Confirme sua senha"
                            />

                            <span>
                                <button
                                    className="btnChangeProfile"
                                    type="button"
                                >
                                    Editar Perfil
                                </button>
                                <button
                                    className="btnDeleteProfile"
                                    type="button"
                                >
                                    Excluir conta
                                </button>
                            </span>
                        </form>
                    </section>
                )}
            </main>
            <Footer />
        </>
    );
};

export default UserProfile;
