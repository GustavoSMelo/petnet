"use client";

import "./petDetails.style.css";
import CatFace from "@petnetPublic/assets/catface.jpg";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaImage, FaRegComment } from "react-icons/fa";
import { LuDog } from "react-icons/lu";
import { TbBone } from "react-icons/tb";
import { IPetDetails } from "./interface";

const PetDetails = ({ setShowPetDetails }: IPetDetails) => {
    return (
        <div
            className="profilePetDetailsContainer"
            onClick={() => setShowPetDetails(false)}
        >
            <div
                className="profilePetDetailsWrapper"
                onClick={(event) => event.stopPropagation()}
            >
                <figure>
                    <img src={CatFace.src} alt="petProfileImage" />
                </figure>
                <span className="basePetInfo">
                    <ul>
                        <li>
                            <b>Name:</b> <input type="text" value="Tigrinho" readOnly />
                        </li>
                        <li>
                            <b>Animal Type: </b>{" "}
                            <input type="text" value="Gato" readOnly />
                        </li>
                        <li>
                            <b>Race:</b>{" "}
                            <input type="text" value="Gato pelado" readOnly />
                        </li>
                        <li>
                            <b>Sex:</b> <input type="text" value="Macho" readOnly />
                        </li>
                        <li>
                            <b>Age:</b> <input type="date" readOnly />
                        </li>
                        <li>
                            <button className="btnChange" type="button">
                                Alterar
                            </button>
                            <button className="btnCancel" type="button">
                                Cancelar
                            </button>
                        </li>
                    </ul>
                </span>
                <span className="aditionalPetInfo">
                    <h3>Outras informacoes:</h3>
                    <ul>
                        <li>
                            <FaImage className="aditionalIcons" />{" "}
                            <b>Photos:</b> 30
                        </li>
                        <li>
                            <BsFillFileEarmarkPostFill className="aditionalIcons" />{" "}
                            <b>Posts:</b> 30
                        </li>
                        <li>
                            <LuDog className="aditionalIcons" />{" "}
                            <b>Followers:</b> 30
                        </li>
                        <li>
                            <FaRegComment className="aditionalIcons" />{" "}
                            <b>Commentaries:</b> 30
                        </li>
                        <li>
                            <TbBone className="aditionalIcons" /> <b>Likes:</b>{" "}
                            30
                        </li>
                        <li>
                            <button className="btnSeePosts" type="button">Ver posts</button>
                        </li>
                    </ul>
                </span>
            </div>
        </div>
    );
};

export default PetDetails;
