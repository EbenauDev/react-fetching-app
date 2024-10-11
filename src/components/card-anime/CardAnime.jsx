import Button from '../button/Button';


import './card-anime.less';

function CardAnime({ anime, onEditAnime }) {
    return (
        <li className="card-anime" key={anime.id}>
            <div className='__content'>
                <div className='__image'>
                    <img src={anime.img} alt={anime.description} />
                </div>
                <div className='__infos'>
                    <h1>{anime.name}</h1>
                    <p>{anime.description}</p>
                </div>
            </div>
            <div className='__acoes'>
                <Button label="Editar" 
                onClick={() => { onEditAnime(anime); }} />
            </div>
        </li>
    )
}

export default CardAnime;