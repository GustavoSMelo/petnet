import "./userprofiledetails.style.scss";

import { FaAt, FaLock, FaPhone, FaUser, FaUserCircle } from "react-icons/fa";

const UserProfileDetails = () => {
    return (
        <div className="userProfileDetailsContainer">
            <h1>Perfil de usuario: </h1>

            <span>
                <aside>
                    <figure>
                        <FaUserCircle className="userProfilePicture" />
                    </figure>

                    <button className="btnEditImage" type="button">
                        Editar imagem
                    </button>
                    <button className="btnEditProfile" type="button">
                        Editar perfil
                    </button>
                    <button className="btnDeleteProfile" type="button">
                        Deletar perfil
                    </button>
                </aside>

                <form>
                    <label>
                        <FaUser className="labelIcons" />
                        Nome Completo:{" "}
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={"John Doe"}
                        onChange={() => {}}
                    />

                    <label>
                        <FaAt className="labelIcons" />
                        Email:{" "}
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="john@mail.com"
                        value={"john@mail.com"}
                        onChange={() => {}}
                    />

                    <label>
                        <FaPhone className="labelIcons" />
                        Celular:{" "}
                    </label>
                    <input
                        type="text"
                        name="celular"
                        placeholder="(11) 99999-9999"
                        value={"(11) 99999-9999"}
                        onChange={() => {}}
                    />

                    <label>
                        <FaLock className="labelIcons" />
                        Senha:{" "}
                    </label>
                    <input
                        type="password"
                        name="senha"
                        placeholder="Password"
                        value={"John Doe"}
                        onChange={() => {}}
                    />

                    <label>
                        <FaLock className="labelIcons" />
                        Confirmar senha:{" "}
                    </label>
                    <input
                        type="password"
                        name="confirmar_senha"
                        placeholder="Password confirm"
                        value={"John Doe"}
                        onChange={() => {}}
                    />

                    <button className="btnSaveModification" type="button">
                        Salvar modificacoes
                    </button>
                </form>
            </span>
        </div>
    );
};

export default UserProfileDetails;
