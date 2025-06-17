'use client';

import './petregister.style.css';

const PetRegister = () => {
    return (
    <section className="petRegisterContainer">
        <h1>Cadastre um pet: </h1>

        <div>
            <h3>Pets cadastrados: </h3>

            <ul>
                <li>Brutus</li>
            </ul>
        </div>
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
    )
};

export default PetRegister;
