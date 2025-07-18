"use client";

import "./home.style.css";

import PolaroidGallery from "@petnetPublic/assets/polaroid.jpg";
import RegisterPet from "@petnetPublic/assets/cadastrarPet.jpg";
import CatFace from "@petnetPublic/assets/catface.jpg";
import Publish from "@petnetPublic/assets/publish.jpg";
import ViewFeed from "@petnetPublic/assets/viewFeed.jpg";
import OtherActions from "@petnetPublic/assets/otherActions.jpg";
import PetGames from "@petnetPublic/assets/petGames.jpg";

import { HiIdentification } from "react-icons/hi";
import { FaArrowsRotate } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import Footer from "@petnet/components/footer";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useNavbar from "@petnet/hooks/useNavbar";

const Home = () => {
    const router = useRouter();
    const { changeNavbarShow } = useNavbar();

    useEffect(() => {
        changeNavbarShow(true);
    }, []);

    return (
        <>
            <main>
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

                    {/* <section className="selectedPetProfileCard">
                        <figure className="petProfileCardFigure">
                            <img src={CatFace.src} alt="logo pet" />
                        </figure>

                        <div className="petProfileInfoCard">
                            <div>
                                <h1>Tigrinho</h1>
                                <p>Sexo: M</p>
                                <p>Idade: 10 (01/01/2014)</p>
                                <p>Tipo do animal: Gato</p>
                                <p>Raca: vira-lata</p>
                            </div>

                            <span>
                                <button className="viewRPNI" type="button">
                                    <HiIdentification className="petProfileCardIcon" />{" "}
                                    Visualizar RPNI
                                </button>
                                <button
                                    className="changePetProfile"
                                    type="button"
                                >
                                    <FaArrowsRotate className="petProfileCardIcon" />
                                    Trocar de pet
                                </button>
                                <button
                                    className="editPetProfile"
                                    type="button"
                                >
                                    <FaPencilAlt className="petProfileCardIcon" />{" "}
                                    Editar pet perfil
                                </button>
                            </span>
                        </div>
                    </section> */}

                    <section className="quickActionsContainer">
                        <h1>Ações rapidas: </h1>
                        <div className="quickActions">
                            <figure
                                className="quickAction galleryQuickAction"
                                onClick={() => router.push("/gallery")}
                            >
                                <img
                                    src={PolaroidGallery.src}
                                    alt="Polaroid gallery"
                                />

                                <figcaption>Acessar galeria</figcaption>
                            </figure>

                            <figure
                                className="quickAction registerPetQuickAction"
                                onClick={() => router.push("/petregister")}
                            >
                                <img
                                    src={RegisterPet.src}
                                    alt="Polaroid gallery"
                                />

                                <figcaption>Cadastrar pet</figcaption>
                            </figure>

                            {/* <figure className="quickAction galleryQuickAction">
                                <img
                                    src={PetPixelart.src}
                                    alt="Polaroid gallery"
                                />

                                <figcaption>Gerar pixelart</figcaption>
                            </figure> */}

                            <figure className="quickAction galleryQuickAction">
                                <img src={Publish.src} alt="Polaroid gallery" />

                                <figcaption>Publicar</figcaption>
                            </figure>

                            <figure className="quickAction galleryQuickAction">
                                <img
                                    src={ViewFeed.src}
                                    alt="Polaroid gallery"
                                />

                                <figcaption>Visualizar feed</figcaption>
                            </figure>

                            <figure className="quickAction galleryQuickAction">
                                <img
                                    src={PetGames.src}
                                    alt="Polaroid gallery"
                                />

                                <figcaption>Games</figcaption>
                            </figure>

                            <figure className="quickAction galleryQuickAction">
                                <img
                                    src={OtherActions.src}
                                    alt="Polaroid gallery"
                                />

                                <figcaption>Outras acoes</figcaption>
                            </figure>
                        </div>
                    </section>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Home;
