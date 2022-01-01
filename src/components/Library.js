import MovieCard from "./MovieCard"
import isFav from '../utilities/isFav';
import useGlobal from '../store/globalAppState';

function Library({movieData}) {
    const globalStateAndglobalActions = useGlobal();
    const globalState = globalStateAndglobalActions[0];
    return (
        <div className="library">
           {movieData.map((oneMovie, i) => <MovieCard key={i} 
                                                    movieObj={oneMovie} 
                                                    isFav={isFav(globalState.favs, null, oneMovie.id)}
                                                     />)}
        </div>
    )
}

export default Library
