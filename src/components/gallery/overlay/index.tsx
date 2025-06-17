'use client';

const Overlay = () => {
    return (
        <figure>
            <img />

            <figcaption className="imageInformations">
                <ul>
                    <li><b>Nome: </b> ImageName.png</li>
                    <li><b>Tipo: </b> image/png</li>
                    <li><b>Resolucao: </b> 200 x 200</li>
                    <li><b>Tamanho: </b> 200kb</li>
                    <li><b>Upload: </b> 10/10/2001</li>
                    <li><b>Criacao: </b> 10/10/2000</li>
                    <li><b>Localizacao: </b> Sem localizacao</li>
                    <li><b>Arquivado: </b> -</li>

                    <span className="btnControls">
                        <button type="button">Download</button>
                        <button type="button">Favoritar</button>
                        <button type="button">Arquivar</button>
                        <button type="button">Excluir</button>
                    </span>
                </ul>
            </figcaption>
        </figure>
    )
};

export default Overlay;
