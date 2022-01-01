
import noPoster from '../images/no-movie-poster.jpg';
import { Link } from 'react-router-dom';
import useGlobal from '../store/globalAppState';
import FavButton from '../components/FavButton';
import star from '../images/star.png';

function SingleMovie({ movieObj, isFav }) {
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
        <div className="single-movie" >
             {/* <div className="background-image" style={{ 
                backgroundImage: `url("https://image.tmdb.org/t/p/w500/${movieObj.backdrop_path}")`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}></div> */}

            <div className="single-movie-content" >
                <div className="single-movie-poster">
                {movieObj.poster_path === null ? 
                    <img src={noPoster} alt="No poster" /> : 
                    <img src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`} alt={movieObj.title} />
                }
                </div>
                <div className="single-movie-info">
                    <h2>{movieObj.title}</h2>
                    <p className="release">Release Date: {movieObj.release_date}</p>
                    <div className="rating">
                        <img src={star} alt="star" />
                        <p> {movieObj.vote_average}/10</p>
                    </div>
                    <p>{movieObj.overview}</p>

                    <Link to={`/`}>Back to library</Link>
                    <div className="btn-favourite">
                        {isFav ? 
                            <FavButton movieObj={movieObj} remove={true} handleFavClick={handleFavClick} /> : 
                            <FavButton movieObj={movieObj} handleFavClick={handleFavClick} />
                        }
                 </div>
                </div>
            </div>
        </div>
    )
}

export default SingleMovie;

