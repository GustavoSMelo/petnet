import './page.style.scss';
import Box from "./assets/box.png";

const Home = () => {
    return (
        <main className='main-container'>
            <span className='wrapper'>
                <div className='introduction-content'>
                    <h1>
                        Conecte seu melhor
                        <br />
                        amigo ao mundo do petnet
                    </h1>

                    <p>Petnet eh uma rede social feita exclusivamente para seu pet, guarde seus melhores momentos com ele e divirta-se com uma variedade de tarefas para fazer dentro da plataforma</p>

                    <span className='btnRow-container'>
                        <button type='button' className='btnLogin'>Entrar na plataforma</button>
                        <button type='button' className='btnMoreInfo'>Conheca a plataforma</button>
                    </span>
                </div>
                <figure className='petbox-container'>
                    <img src={Box.src} alt="box" />
                </figure>
            </span>
        </main>
    );
};

export default Home;
