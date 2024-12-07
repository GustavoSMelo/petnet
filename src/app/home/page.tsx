'use client';

import './home.style.scss';
import Navbar from "@petnet/components/navbar";
import CatIllustration from '../assets/illustrations/cat.png';

const Home = () => {
    return (
        <main>
            <Navbar />
            <section className="homeContainer">
                {/* <span className='middleContainer'>
                    <section className='firstStep'>
                        <figure>
                            <img src={CatIllustration.src} alt='Cat first step' />
                        </figure>
                        <div>
                            <h1>Seja bem vindo ao petnet :D</h1>

                            <p>Para usufruir da plataforma, primeiramente, faca um cadastro de seu melhor amigo(a).</p>
                            <p>Nao se preocupe caso tenha mais de um pet, podera cadastrar quantos voce quiser</p>

                            <button type="button">Cadastrar pet</button>
                        </div>
                    </section>
                </span> */}

                <section className='quickActionsContainer'>
                    <div className='quickAction galleryQuickAction'>
                        <button>Acessar galeria</button>
                    </div>

                    <div className='quickAction'>
                        <h1>Cadastrar pet</h1>
                        <p>Nao cadastrou seu pet ? <br /> Realize o cadastro clickando no botao a seguir</p>
                        <button type='button'>Cadastrar</button>
                    </div>
                </section>
            </section>
        </main>
    )
};

export default Home;
