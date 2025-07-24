"use client";

import "./feed.style.css";
import { useState } from "react";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaPlusCircle, FaRegComment, FaSearch, FaShare } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import { LuBone } from "react-icons/lu";
import Catface from "@petnetPublic/assets/catface.jpg";
import Publish from "@petnetPublic/assets/publish.jpg";
import { AiFillAlert } from "react-icons/ai";
import { IoIosSend } from "react-icons/io";
import { IoHome } from "react-icons/io5";

const Feed = () => {
    const [search, setSearch] = useState("");
    return (
        <div className="feedContainer">
            <section className="functionsContainer">
                <span>
                    <label className="iconSearch">
                        <FaSearch />
                    </label>
                    <input
                        placeholder="Busque por 'Animais fofos' "
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                </span>
                <div>
                    <button type="button">
                        <IoHome className="btnFunctionIcons btnFunctionsIconHome" />
                        <p>Pagina Inicial</p>
                    </button>
                    <button type="button">
                        <BsFillFileEarmarkPostFill className="btnFunctionIcons btnFunctionsIconPost" />
                        <p>Postagens</p>
                    </button>

                    <button type="button">
                        <FiPlusCircle className="btnFunctionIcons btnFunctionsIconNPost" />
                        <p>New Post</p>
                    </button>
                </div>
            </section>

            <section className="postsContainer">
                <ul className="posts">
                    <li className="postContainer">
                        <span className="post">
                            <div className="posterInformation">
                                <figure>
                                    <img src={Catface.src} alt="catface" />
                                    <figcaption>Tigrinho</figcaption>
                                </figure>

                                <button className="btnFollow">Follow</button>
                                <button className="btnFollowMobile">
                                    <FaPlusCircle />
                                </button>
                            </div>
                            <span className="postContent">
                                <img src={Publish.src} alt="postImage" />
                            </span>
                            <p className="postDescription">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Maxime tenetur eos amet
                                consequuntur ipsam impedit laudantium excepturi
                                officia eligendi nisi nihil aliquam, voluptates
                                beatae culpa quis cum fugiat sint. Pariatur.
                            </p>
                            <div className="postCommandContainer">
                                <button>
                                    <LuBone /> <p>Like</p>
                                </button>
                                <button>
                                    <FaRegComment /> <p>Comment</p>
                                </button>
                                <button>
                                    <FaShare /> <p>Share</p>
                                </button>
                                <button>
                                    <AiFillAlert /> <p>Alert</p>
                                </button>
                            </div>
                        </span>
                        <div className="commentContainer">
                            <h1>Commentaries: </h1>
                            <ul>
                                <li>
                                    <figure>
                                        <img src={Catface.src} alt="catface" />
                                        <figcaption>Tigrinho</figcaption>
                                    </figure>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Animi accusantium
                                        aliquid obcaecati, libero consequuntur
                                        ea omnis delectus laborum eos ratione
                                        non placeat voluptatum amet, quidem et,
                                        minima autem pariatur molestias.{" "}
                                        <small>(1 mes atras)</small>
                                    </p>
                                </li>
                            </ul>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Commentary..."
                                />
                                <button
                                    type="button"
                                    className="btnSendCommentary"
                                >
                                    <IoIosSend />
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Feed;
