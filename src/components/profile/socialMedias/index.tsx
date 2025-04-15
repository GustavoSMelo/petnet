import "./userprofileSocialMedias.style.scss";

import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const UserProfileSocialMedias = () => {
    return (
        <div className="userProfileSocialMediasContainer">
            <h1>Social Medias: </h1>

            <section>
                <span>
                    <FaGoogle className="socialMediaIcons" />
                    <p>email@mail.com</p>
                </span>
                <button type="button">Desconectar</button>
            </section>

            <section>
                <span>
                    <FaFacebook className="socialMediaIcons" />
                    <p>email@mail.com</p>
                </span>
                <button type="button">Desconectar</button>
            </section>

            <section>
                <span>
                    <FaGithub className="socialMediaIcons" />
                    <p>email@mail.com</p>
                </span>
                <button type="button"> Desconectar</button>
            </section>
        </div>
    );
};

export default UserProfileSocialMedias;
