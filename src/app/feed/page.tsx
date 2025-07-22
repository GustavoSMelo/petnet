"use client";

import "./feed.style.css";
import { useState } from "react";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaRegComment, FaSearch, FaShare } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import { LuBone } from "react-icons/lu";
import Catface from "@petnetPublic/assets/catface.jpg";
import Publish from "@petnetPublic/assets/publish.jpg";

const Feed = () => {
    const [search, setSearch] = useState("");
    return (
        <div className="feedContainer">
            <section className="functionsContainer">
                <button type="button">
                    <FiPlusCircle /> New Post
                </button>

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

                <button type="button">
                    <BsFillFileEarmarkPostFill /> Postagens
                </button>
            </section>

            <section className="postsContainer">
                <ul className="posts">
                    <li className="post">
                        <div className="posterInformation">
                            <figure>
                                <img src={Catface.src} alt="catface" />
                                <figcaption>Tigrinho</figcaption>
                            </figure>

                            <button className="btnFollow">Follow</button>
                        </div>
                        <span className="postContent">
                            <img src={Publish.src} alt="postImage" />
                        </span>
                        <p className="postDescription">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Maxime tenetur eos amet consequuntur ipsam
                            impedit laudantium excepturi officia eligendi nisi
                            nihil aliquam, voluptates beatae culpa quis cum
                            fugiat sint. Pariatur.
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
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Feed;
