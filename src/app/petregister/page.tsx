"use client";

import "./petregister.style.css";

const PetRegister = () => {
    return (
        <section className="petRegisterContainer">
            <div className="registredPetsList">
                <h3>Pets cadastrados: </h3>

                <ul>
                    <li>
                        <figure>
                            <img src={"/assets/catface.jpg"} alt="imagem" />
                            <figcaption>Brutus</figcaption>
                        </figure>
                    </li>

                    <li>
                        <figure>
                            <img src={"/assets/catface.jpg"} alt="imagem" />
                            <figcaption>Brutus</figcaption>
                        </figure>
                    </li>

                    <li>
                        <figure>
                            <img src={"/assets/catface.jpg"} alt="imagem" />
                            <figcaption>Brutus</figcaption>
                        </figure>
                    </li>

                    <li>
                        <figure>
                            <img src={"/assets/catface.jpg"} alt="imagem" />
                            <figcaption>Brutus</figcaption>
                        </figure>
                    </li>
                </ul>
            </div>

            <h1>Cadastre um pet: </h1>
            <form>
                <label>Nome: </label>
                <input />

                <label>Data nasc: </label>
                <input />

                <label>Tipo pet: </label>
                <input />

                <label></label>
            </form>
        </section>
    );
};

export default PetRegister;
