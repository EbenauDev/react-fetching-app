import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import CardAnime from "../card-anime/CardAnime";
import ReactModal from 'react-modal';

import './grade-anime.less';

function GradeAnimes() {
    const { data, isFetching, error } = useFetch("http://localhost:3000/animes");

    let [showDialog, setShowDialog] = useState(false);

    function editarAnime(anime) {
        console.log(anime);
        setShowDialog(!showDialog);
        console.log(showDialog);
    }

    return (
        <div>
            <ul className="grade-de-animes">
                {isFetching && <p>Carregando meu animes...</p>}
                {
                    !isFetching && data?.map(anime => <CardAnime anime={anime} onEditAnime={editarAnime} />)
                }
            </ul>

            <ReactModal isOpen={showDialog}>
                <h1>Teste</h1>
            </ReactModal>
        </div>
    )
}

export default GradeAnimes;