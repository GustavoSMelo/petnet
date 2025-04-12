import { FaPlusCircle } from "react-icons/fa";
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

                        <button className="btnEditImage" type="button">
                            Trocar foto
                        </button>
                        <button className="btnEditProfile" type="button">
                            Editar Perfil
                        </button>
                        <button className="btnDeleteProfile" type="button">
                            Excluir perfil
                        </button>
                    </figure>

                    <form className="formPetInformation">
                        <label>Nome do pet: </label>
                        <input
                            type="text"
                            value={""}
                            placeholder="Manteguinha..."
                            name="nomedopet"
                        />

                        <label>Sexo: </label>
                        <select>
                            <option></option>
                            <option>♂ Macho</option>
                            <option>♀ Femea </option>
                        </select>

                        <label>Tipo do animal: </label>
                        <select>
                            <option></option>
                            <option>Cachorro</option>
                            <option>Gato</option>
                            <option>Coelho</option>
                            <option>Tartaruga</option>
                            <option>Cobra</option>
                            <option>Aranha</option>
                            <option>Porquinho da india</option>
                            <option>Passarinho</option>
                            <option>Lhama</option>
                            <option>Ramster</option>
                            <option>Peixe</option>
                            <option>Outros</option>
                        </select>

                        <label>Raca</label>
                        <input
                            type="text"
                            value={"Raca do cachorro"}
                            placeholder="Raca"
                            name="Raca"
                        />

                        <label>Data de nascimento: (10 anos)</label>
                        <input type="date" value={''} name="data_nascimento"/>

                        <button className="btnSaveModification" type="button">Salvar modificacoes</button>
                    </form>
                </span>
            </div>
        </div>
    );
};

export default UserProfilePets;
