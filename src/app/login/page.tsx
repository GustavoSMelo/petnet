'use client';

import './style.scss';
import Image from 'next/image';
import { FaCat, FaFacebook, FaGithub, FaGoogle, FaLock, FaUserSecret } from 'react-icons/fa';
import LoginParty from '../assets/illustrations/login-party.png';
import { useEffect, useState } from 'react';
import { MdAlternateEmail } from 'react-icons/md';

const Login = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [sizeX, setSizeX] = useState(window.screen.width);

    useEffect(() => {
        if (sizeX <= 780) {
            setShowLoginForm(true);
        }

        window.addEventListener('resize', () => {
            setSizeX(window.screen.width);
            console.log(sizeX);
            return sizeX <= 780 ? setShowLoginForm(true) : setShowLoginForm(false)
        });
    }, [sizeX]);

    return (
        <main className="loginPage">
            <section id='login'>
                <div className='formLoginContainer'>
                    <h1>Realizar login: </h1>

                    <form className='formLogin' style={{ display: showLoginForm ? 'block' : 'none' }}>
                        <span>
                            <label><MdAlternateEmail className='formLoginIcon' /> Email: </label>
                            <input type='email' placeholder='example@mail.com' />
                        </span>
                        <span>
                            <label><FaLock className='formLoginIcon' /> Senha: </label>
                            <input type='password' placeholder='Senha' />

                            <button type='button'>Log in</button>
                            <button type='button' className='btnLoginSocialMedia' onClick={() => setShowLoginForm(false)}> Login via social media</button>
                        </span>
                    </form>

                    {showLoginForm && window.screen.width > 780 ? <></> : (
                        <span>
                            <button className='btnLoginGoogle' type='button'>
                                <FaGoogle />
                                <p>via Google</p>
                            </button>

                            <button className='btnLoginFacebook' type='button'>
                                <FaFacebook />
                                <p>via Facebook</p>
                            </button>

                            <button className='btnLoginGithub' type='button'>
                                <FaGithub />
                                <p>via Github</p>
                            </button>


                            {showLoginForm ? <></> : (
                                <button className='btnLoginPetnet' type='button' onClick={() => setShowLoginForm(true)}>
                                    <FaCat />
                                    <p>via Petnet</p>
                                </button>
                            )}

                            <button className='btnLoginGuest' type='button'>
                                <FaUserSecret />
                                <p>via Convidado (guest)</p>
                            </button>
                        </span>
                    )}
                </div>

                <figure className='changeToRegister'>
                    <figcaption>
                        <h2>Nao possui conta ?</h2>
                        <p className='registerText'>Nao se preocupe, nosso sistema eh 100% gratuito e de codigo aberto, alem de ser amigavel e facil de registrar, faca seu registro agora mesmo</p>

                        <button type='button'>Realizar Cadastro</button>
                    </figcaption>

                    <Image
                        className='loginPetImage'
                        src={LoginParty.src}
                        width={420}
                        height={420}
                        alt='login animal party'
                        priority
                    />
                </figure>
            </section>
            <section id='register'></section>
        </main>
    )
};

export default Login;
