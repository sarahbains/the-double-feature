// Page Favs

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useGlobal from '../store/globalAppState';
import MovieCard from '../components/MovieCard';
import { appTitle } from '../globals/globals';


function PageFavs() {

	const [globalState, globalActions] = useGlobal();

    const [ready, setReady] = useState(false);

	useEffect(() => {
		document.title = `${appTitle} - Favs`;
        globalActions.setFavs();
    setReady(true);
  }, [globalActions]);

    return (
        <main>
		    <section class="page-favs">
                <h2>Favourite Movies</h2>
                {globalState.favs.length < 1 ? <p>No favourite movies to show. Return to the <Link to="/">home page</Link> to choose your favourite movies.</p> : 
                    <div className="library">
                        {globalState.favs.map((singleMovie, i) => {
                            return <MovieCard key={i} 
                                        movieObj={singleMovie}
                                        isFav={true} />
                        })}
				    </div>}
            </section>
	    </main>
    );
	
}

export default PageFavs;
