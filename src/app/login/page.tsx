import './style.scss';
import Image from 'next/image';
import LoginImg from '../assets/woman_cat.png';
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
    return (
        <main>
            <section id="login">
                <div className='login-section'>
                    <h1>Acesse sua conta</h1>
                    <form>
                        <div className='container-social-media'>

                            <h3>Midias Sociais</h3>

                            <span className='container-buttons'>
                                <span className='btnGoogle'>
                                    <FaGoogle />
                                    <p>Entrar via Google</p>
                                </span>
                                <span className='btnFacebook'>
                                    <FaFacebook />
                                    <p>Entrar via Facebook</p>
                                </span>
                                {/* <span className='btnApple'>Entrar via Apple</span> */}
                                <span className='btnGithub'>
                                    <FaGithub />
                                    <p>Entrar via Github</p>
                                </span>
                            </span>
                        </div>

                        <div className='container-account-login'>
                            <h3>Conta</h3>

                            <input type='email' placeholder='email' />

                            <button className='btnLogin' type='button'>Login via email</button>
                            <button className='btnCreateAccount' type='button'>Crie sua conta</button>
                        </div>
                    </form>
                </div>

                <figure className='login-figure'>
                    <Image src={LoginImg.src} alt="Login animal img" fill priority />
                </figure>
            </section>

            <section id="createAccount"></section>
        </main>
    )
};

export default Login;
