import "./userprofiledetails.style.scss";

import { FaAt, FaLock, FaPhone, FaUser, FaUserCircle } from "react-icons/fa";

const UserProfileDetails = () => {
    return (
        <div className="userProfileDetailsContainer">
            <h1>Perfil de usuario: </h1>

            <span>
                <aside>
                    <figure>
                        <FaUserCircle className="userProfilePicture"/>
                    </figure>

                    <button type="button">Editar imagem</button>
                    <button type="button">Editar perfil</button>
                    <button type="button">Salvar modificacoes</button>
                </aside>

                <form>
                    <label>
                        <FaUser />
                        Nome Completo:{" "}
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={"John Doe"}
                    />

                    <label>
                        <FaAt />
                        Email:{" "}
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="john@mail.com"
                        value={"John Doe"}
                    />

                    <label>
                        <FaPhone />
                        Celular:{" "}
                    </label>
                    <input
                        type="text"
                        name="celular"
                        placeholder="(11) 99999-9999"
                        value={"John Doe"}
                    />

                    <label>
                        <FaLock />
                        Senha:{" "}
                    </label>
                    <input
                        type="password"
                        name="senha"
                        placeholder="Password"
                        value={"John Doe"}
                    />

                    <label>
                        <FaLock />
                        Confirmar senha:{" "}
                    </label>
                    <input
                        type="password"
                        name="confirmar_senha"
                        placeholder="Password confirm"
                        value={"John Doe"}
                    />
                </form>
            </span>
        </div>
    );
};

export default UserProfileDetails;
