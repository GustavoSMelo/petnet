import {  FaPlusCircle } from "react-icons/fa";
import "./userprofilepets.style.scss";

import Catface from "@petnet/assets/catface.jpg";

const UserProfilePets = () => {
    return (
        <div className="userProfilePetContainer">
            <ul className="petList">
                <h1>Escolha seu o perfil do pet: </h1>
                <span>
                    <li>
                        <figure>
                            <img src={Catface.src} alt="petPicture" />
                            <figcaption>Tigrinho</figcaption>
                        </figure>
                    </li>

                    <li>
                        <figure>
                            <img src={Catface.src} alt="petPicture" />
                            <figcaption>Tigrinho</figcaption>
                        </figure>
                    </li>

                    <li>
                        <figure>
                            <img src={Catface.src} alt="petPicture" />
                            <figcaption>Tigrinho</figcaption>
                        </figure>
                    </li>

                    <li>
                        <figure>
                            <FaPlusCircle className="petAddIcon" />
                            <figcaption>Adicionar pet</figcaption>
                        </figure>
                    </li>
                </span>
            </ul>

            <div className="userProfilePetInformation">
                <h1>Informacao do pet: </h1>

                {/* <p className="petNotFoundContainer">
                    <FaInfo className="infoIcon" /> Selecione o pet para obter mais informacoes
                </p> */}

                <span className="petInformationContainer">
                    <figure>
                        <img src={Catface.src} alt="petFormLogo" />

                        <button type="button">Trocar foto</button>
                        <button type="button">Editar Perfil</button>
                        <button type="button">Excluir perfil</button>
                    </figure>

                    <form className="formPetInformation">
                        <label>Nome do pet: </label>
                        <input type="text" value={''} placeholder="Manteguinha..." name="nomedopet" />

                        <label>Sexo: </label>
                        <select>
                            <option></option>
                            <option>♂ Macho</option>
                            <option>♀ Femea </option>
                        </select>
                    </form>
                </span>
            </div>
        </div>
    );
};

export default UserProfilePets;
