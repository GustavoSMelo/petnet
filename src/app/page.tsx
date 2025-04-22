"use client";

import "../styles/page.style.scss";
import Box from "@petnet/assets/box.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Home = () => {
    const router = useRouter();

    return (
        <main className="main-container">
            <span className="wrapper">
                <div className="introduction-content">
                    <h1>
                        Conecte seu melhor
                        <br />
                        amigo ao mundo do petnet
                    </h1>

                    <p>
                        Petnet eh uma rede social feita exclusivamente para seu
                        pet, guarde seus melhores momentos com ele e divirta-se
                        com uma variedade de tarefas para fazer dentro da
                        plataforma, 100% gratuito e codigo aberto
                    </p>

                    <span className="btnRow-container">
                        <button
                            type="button"
                            className="btnLogin"
                            onClick={() => router.push("/login")}
                        >
                            Entrar na plataforma
                        </button>

                        <button
                            onClick={() => router.push("/activities")}
                            type="button"
                            className="btnMoreInfo"
                        >
                            Experimente a plataforma
                        </button>
                    </span>
                </div>
                <figure className="petbox-container">
                    <Image
                        priority
                        src={Box.src}
                        alt="box"
                        width={500}
                        height={500}
                    />
                </figure>
            </span>
        </main>
    );
};

export default Home;
