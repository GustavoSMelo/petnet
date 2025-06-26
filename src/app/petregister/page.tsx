"use client";

import { FaCirclePlus } from "react-icons/fa6";
import "./petregister.style.css";
import { FaPlus } from "react-icons/fa";
import { ChangeEvent, DragEvent, useReducer } from "react";
import { IStatePetRegister, IActionPetRegister } from "./interface";
import Footer from "@petnet/components/footer";
import isFileAnImage from "@petnet/helpers/isFileAnImage";

const PetRegister = () => {
    const reducer = (state: IStatePetRegister, action: IActionPetRegister) => {
        switch (action.type) {
            case "changeLogoPetImageFile":
                return {
                    ...state,
                    logoPetImageFile: action.payload,
                } as IStatePetRegister;
            case "changeAnimalType":
                return {
                    ...state,
                    animalType: action.payload,
                } as IStatePetRegister;
            case "changeBirthDate":
                return {
                    ...state,
                    birthDate: action.payload,
                } as IStatePetRegister;
            case "changePetName":
                return {
                    ...state,
                    petName: action.payload,
                } as IStatePetRegister;
            case "changePetSex":
                return {
                    ...state,
                    petSex: action.payload,
                } as IStatePetRegister;
            case "changeRace":
                return { ...state, race: action.payload } as IStatePetRegister;
            default:
                return { ...state };
        }
    };

    const [state, dispatch] = useReducer(reducer, {
        logoPetImageFile: null,
        animalType: "Outros",
        birthDate: "",
        petName: "",
        petSex: "male",
        race: "",
    });

    const handleDragOn = (event: DragEvent<HTMLSpanElement>) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];

        if (!isFileAnImage(file)) return;

        dispatch({ payload: file, type: "changeLogoPetImageFile" });
    };

    const handleUploadFile = (event: ChangeEvent<HTMLInputElement>): void => {
        const fileList = event.target.files;
        if (!fileList || !fileList.length) return;

        const file = fileList[0];

        console.log(file);
        console.log(isFileAnImage(file));

        if (!isFileAnImage(file)) return;
        dispatch({ payload: file, type: "changeLogoPetImageFile" });
    };

    return (
        <>
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
                        <li className="addPet">
                            <FaCirclePlus className="addPetIcon" />
                        </li>
                    </ul>
                </div>

                <div className="formContainer">
                    <h1>Cadastre um pet: </h1>
                    <form>
                        <label>Imagem: </label>
                        <span
                            onDrag={(event) => handleDragOn(event)}
                            onDragEnd={(event) => event.preventDefault()}
                        >
                            <input
                                type="file"
                                draggable={true}
                                name="logoPetImage"
                                className="logoPetImage"
                                id="logoPetImage"
                                accept=".png,.jpg,.webp,.jpeg"
                                onChange={(event) => handleUploadFile(event)}
                            />
                            <label
                                htmlFor="logoPetImage"
                                className="labelLogoPetImage"
                            >
                                {state.logoPetImageFile ? (
                                    <img
                                        src={URL.createObjectURL(
                                            state.logoPetImageFile
                                        )}
                                        alt={state.logoPetImageFile.name}
                                    />
                                ) : (
                                    <></>
                                )}
                                <p>
                                    {state.logoPetImageFile === null ? (
                                        <FaPlus />
                                    ) : (
                                        <></>
                                    )}
                                    {state.logoPetImageFile === null
                                        ? "Clique para subir a imagem"
                                        : `${state.logoPetImageFile.name} - Clique para alterar a imagem`}
                                </p>
                            </label>
                        </span>

                        <label>Nome: </label>
                        <input
                            name="name"
                            type="text"
                            value={state.petName}
                            onChange={(event) =>
                                dispatch({
                                    type: "changePetName",
                                    payload: event.target.value,
                                })
                            }
                            placeholder="Brutus..."
                        />

                        <label>Data nasc: </label>
                        <input
                            type="date"
                            name="data_nasc"
                            value={state.birthDate}
                            onChange={(event) =>
                                dispatch({
                                    type: "changeBirthDate",
                                    payload: event.target.value,
                                })
                            }
                        />

                        <label>Tipo pet: </label>
                        <select
                            value={state.animalType}
                            onChange={(event) =>
                                dispatch({
                                    type: "changeAnimalType",
                                    payload: event.target.value,
                                })
                            }
                        >
                            {state.animalType ? <></> : <option></option>}
                            <option value="Cachorro">🐶 Cachorro</option>
                            <option value="Gato">🐈‍⬛ Gato</option>
                            <option value="Passaro">🦜Passaro</option>
                            <option value="Peixe">🐟 Peixe</option>
                            <option value="Coelho">🐇 Coelho</option>
                            <option value="Tartaruga">🐢 Tartaruga</option>
                            <option value="Primata">🐒 Primata</option>
                            <option value="Roedor">🐁 Roedor</option>
                            <option value="Outros">🐑 Outros</option>
                        </select>

                        <label>Raca: </label>
                        <input
                            name="race"
                            type="text"
                            value={state.race}
                            onChange={(event) =>
                                dispatch({
                                    payload: event.target.value,
                                    type: "changeRace",
                                })
                            }
                            placeholder="Caramelo..."
                        />

                        <label>Sexo: </label>
                        <select
                            value={state.petSex}
                            onChange={(event) =>
                                dispatch({
                                    type: "changePetSex",
                                    payload: event.target.value,
                                })
                            }
                        >
                            <option value="male"> ♂ Male</option>
                            <option value="female"> ♀ Female</option>
                        </select>

                        <span className="buttonContainer">
                            <button type="button" className="btnSave">
                                Salvar
                            </button>
                            <button type="button" className="btnClean">
                                Limpar
                            </button>
                        </span>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default PetRegister;
