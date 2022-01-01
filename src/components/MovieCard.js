import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg'
import useGlobal from '../store/globalAppState';
import FavButton from '../components/FavButton';


function MovieCard({ movieObj, isFav }) {
    const globalStateAndglobalActions = useGlobal();
    const globalActions = globalStateAndglobalActions[1];

    function handleFavClick(addToFav, obj){
        if(addToFav === true){
            globalActions.addFav(obj);
        }else{
            globalActions.removeFav(obj.id);
        }   
    }
    return (
        <div className="movie-card">
            <div className="movie-poster">
                {movieObj.poster_path === null ? 
                    <img src={noPoster} alt="No poster" /> : 
                    <img src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`} alt={movieObj.title} />
                }
                    <div className="overlay">
                        <div className="overview">
                            <p>{movieObj.overview}</p>
                        </div>
                        <Link to={`/movie/${movieObj.id}`}>More Info</Link>
                    </div>
            </div>
            <div className="movie">
                <h3>{movieObj.title}</h3>
                 <p className="release">Release Date: {movieObj.release_date}</p>
                 <div className="btn-favourite">
                        {isFav ? 
                            <FavButton movieObj={movieObj} remove={true} handleFavClick={handleFavClick} /> : 
                            <FavButton movieObj={movieObj} handleFavClick={handleFavClick} />
                        }
                 </div>
            </div>

        </div>

    )
}

export default MovieCard;