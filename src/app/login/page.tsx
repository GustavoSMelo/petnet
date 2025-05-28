"use client";

import "./login.style.css";
import Image from "next/image";
import {
    FaCat,
    FaFacebook,
    FaGithub,
    FaGoogle,
    FaLock,
    FaUserSecret,
} from "react-icons/fa";
import LoginParty from "@petnetPublic/assets/illustrations/cartoon/login-party.png";
import { useEffect, useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Login = () => {
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [sizeX, setSizeX] = useState(0);
    const router = useRouter();

    useEffect(() => {
        setSizeX(window.screen.width);

        if (sizeX <= 780) {
            setShowLoginForm(true);
        }

        window.addEventListener("resize", () => {
            setSizeX(window.screen.width);
            console.log(sizeX);
            return window.screen.width <= 780
                ? setShowLoginForm(true)
                : setShowLoginForm(false);
        });
    }, [sizeX]);

    return (
        <main className="loginPage">
            <section
                id="login"
                style={{
                    flexDirection: isLoginForm ? "column-reverse" : "column",
                }}
            >
                <div
                    className="formLoginContainer"
                    style={{ display: isLoginForm ? "flex" : "none" }}
                >
                    <h1>Realizar login: </h1>

                    <form
                        className="formLogin"
                        style={{ display: showLoginForm ? "block" : "none" }}
                    >
                        <span>
                            <label>
                                <MdAlternateEmail className="formLoginIcon" />{" "}
                                Email:{" "}
                            </label>
                            <input
                                type="email"
                                placeholder="example@mail.com"
                            />
                        </span>
                        <span>
                            <label>
                                <FaLock className="formLoginIcon" /> Senha:{" "}
                            </label>
                            <input type="password" placeholder="Senha" />

                            <button type="button">Log in</button>
                            {sizeX <= 780 ? (
                                <></>
                            ) : (
                                <button
                                    type="button"
                                    className="btnLoginSocialMedia"
                                    onClick={() => setShowLoginForm(false)}
                                >
                                    {" "}
                                    Login via social media
                                </button>
                            )}
                        </span>
                    </form>

                    {showLoginForm && sizeX > 780 ? (
                        <></>
                    ) : (
                        <span>
                            <button className="btnLoginGoogle" type="button">
                                <FaGoogle />
                                <p>via Google</p>
                            </button>

                            <button className="btnLoginFacebook" type="button">
                                <FaFacebook />
                                <p>via Facebook</p>
                            </button>

                            <button className="btnLoginGithub" type="button">
                                <FaGithub />
                                <p>via Github</p>
                            </button>

                            {showLoginForm ? (
                                <></>
                            ) : (
                                <button
                                    className="btnLoginPetnet"
                                    type="button"
                                    onClick={() => setShowLoginForm(true)}
                                >
                                    <FaCat />
                                    <p>via Petnet</p>
                                </button>
                            )}

                            <button
                                className="btnLoginGuest"
                                type="button"
                                onClick={() => router.push("/home")}
                            >
                                <FaUserSecret />
                                <p>via Convidado (guest)</p>
                            </button>
                        </span>
                    )}
                </div>

                <figure className="changeToRegisterToLogin">
                    {isLoginForm ? (
                        <figcaption>
                            <h2>Nao possui conta ?</h2>
                            <p className="registerText">
                                Nao se preocupe, nosso sistema eh 100% gratuito
                                e de codigo aberto, alem de ser amigavel e facil
                                de registrar, faca seu registro agora mesmo
                            </p>

                            <button
                                type="button"
                                onClick={() => setIsLoginForm(false)}
                            >
                                Realizar Cadastro
                            </button>
                        </figcaption>
                    ) : (
                        <figcaption>
                            <h2>Ja possui conta ?</h2>
                            <button
                                type="button"
                                onClick={() => setIsLoginForm(true)}
                            >
                                Realizar login
                            </button>
                        </figcaption>
                    )}

                    <Image
                        className="loginPetImage"
                        src={LoginParty.src}
                        width={420}
                        height={420}
                        alt="login animal party"
                        priority
                    />
                </figure>

                <div
                    className="formRegisterContainer"
                    style={{ display: isLoginForm ? "none" : "flex" }}
                >
                    <h1>Realizar Registro: </h1>

                    <form className="formLogin">
                        <span>
                            <label>
                                <IoPerson className="formLoginIcon" /> Nome
                                completo:{" "}
                            </label>
                            <input type="text" placeholder="John Doe" />
                        </span>

                        <span>
                            <label>
                                <MdAlternateEmail className="formLoginIcon" />{" "}
                                Email:{" "}
                            </label>
                            <input
                                type="email"
                                placeholder="example@mail.com"
                            />
                        </span>
                        <span>
                            <label>
                                <FaLock className="formLoginIcon" /> Senha:{" "}
                            </label>
                            <input type="password" placeholder="Senha" />
                        </span>
                        <span>
                            <label>
                                <FaLock className="formLoginIcon" /> Confirmar
                                senha:{" "}
                            </label>
                            <input type="password" placeholder="Senha" />

                            <button type="button">Registrar </button>
                        </span>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Login;
