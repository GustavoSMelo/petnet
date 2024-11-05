'use client';

import './style.scss';
import Image from 'next/image';
import { FaCat, FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import LoginParty from '../assets/illustrations/login-party.png';
import { useEffect, useState } from 'react';

const Login = () => {

    return (
        <main className="loginPage">
            <section id='login'>
                <div className='formLogin'>
                    <h1>Realizar login: </h1>

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

                    <button className='btnLoginPetnet' type='button'>
                        <FaCat />
                        <p>via Petnet</p>
                    </button>
                </div>

                <figure className='changeToRegister'>
                    <figcaption>
                        <h2>Nao possui conta ?</h2>
                        <p>Nao se preocupe, nosso sistema eh 100% gratuito e de codigo aberto, alem de ser amigavel e facil de registrar, faca seu registro agora mesmo</p>

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
