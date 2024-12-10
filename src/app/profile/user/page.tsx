import './userprofile.style.scss';

import { VscDebugDisconnect } from 'react-icons/vsc';
import { FaGithubSquare, FaUserCircle } from 'react-icons/fa';
import { FaSquareFacebook, FaSquareGooglePlus, FaCirclePlus } from 'react-icons/fa6';
import Footer from '@petnet/components/footer';
import Navbar from '@petnet/components/navbar';
import PetImage from '@petnet/app/assets/catface.jpg';

const UserProfile = () => {
    return (
        <>
            <Navbar />
            <main>
                <aside className='asideContainer'>
                    <div>
                        <FaUserCircle className='userIcon' />
                        <span>
                            <h1>User name</h1>
                            <h2>user@mail.com</h2>
                        </span>
                    </div>

                    <ul>
                        <li>Perfil</li>
                        <li>Editar perfil</li>
                        <li>Sair</li>
                    </ul>
                </aside>

                <section className='profileContainer'>
                    <section className='networkContainer'>
                        <h1>Redes sociais (network):</h1>

                        <span className='network'>
                            <FaSquareGooglePlus className='socialMediaIcon googleIcon' />
                            <h2>Google: </h2>
                            <input type='text' value="email@gmail.com" />
                            <button type='button' className='btnUnlink'><VscDebugDisconnect /></button>
                        </span>

                        <span className='network'>
                            <FaSquareFacebook className='socialMediaIcon facebookIcon' />
                            <h2>Facebook: </h2>
                            <input type='text' value="email@gmail.com" />
                            <button type='button' className='btnUnlink'><VscDebugDisconnect /></button>
                        </span>

                        <span className='network'>
                            <FaGithubSquare className='socialMediaIcon githubIcon' />
                            <h2>Github: </h2>
                            <input type='text' value="email@gmail.com" />
                            <button type='button' className='btnUnlink'><VscDebugDisconnect /></button>
                        </span>
                    </section>

                    <section className='petsContainer'>
                        <h1>Pets: </h1>

                        <div>
                            <figure>
                                <img src={PetImage.src} alt='petLogo' />
                                <figcaption>Pet name</figcaption>
                            </figure>

                            <figure>
                                <FaCirclePlus className='registerIcon' />
                                <figcaption>Cadastrar pet</figcaption>
                            </figure>
                        </div>
                </section>
            </section>

            {/* <section className='editProfileContainer'>
                    <form>
                        <label>Nome: </label>
                        <input type='text' value='name' placeholder='Insira seu nome' />

                        <label>Email: </label>
                        <input type='email' value='Email' placeholder='Insira seu email' />

                        <label>Senha: </label>
                        <input type='password' value='senha' placeholder='Insira sua senha' />

                        <label>Confirmar senha: </label>
                        <input type='password' value='senha' placeholder='Confirme sua senha' />

                        <button type='button'>Editar Perfil</button>
                        <button type='button'>Excluir conta</button>
                    </form>
                </section> */}
        </main >
            <Footer />
        </>
    );
};

export default UserProfile;
