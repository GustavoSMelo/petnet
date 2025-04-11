"use client";

import "./userprofile.style.scss";

import Footer from "@petnet/components/footer";
import Navbar from "@petnet/components/navbar";
import { FaUserCircle, FaCat } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";

// import UserProfileDetails from "@petnet/components/profile/user";
import UserProfilePets from "@petnet/components/profile/pets";

const UserProfile = () => {
    return (
        <>
            <Navbar />
            <main className="mainUserProfileContainer">
                <section className="profileTabContainer">
                    <figure className="profileTabSelectedOption">
                        <FaUserCircle className="tabIcon" />
                        <figcaption>Usuario</figcaption>
                    </figure>

                    <figure>
                        <FaCat className="tabIcon" />
                        <figcaption>Pets</figcaption>
                    </figure>

                    <figure>
                        <FaCat className="tabIcon" />
                        <figcaption>Social medias</figcaption>
                    </figure>
                    <figure>
                        <MdOutlineLogout className="tabIcon" />
                        <figcaption>Logout</figcaption>
                    </figure>
                </section>
                <section className="tabContent">
                    {/* <UserProfileDetails /> */}
                    <UserProfilePets />
                </section>
            </main>
            <Footer />
        </>
    );
};

export default UserProfile;
