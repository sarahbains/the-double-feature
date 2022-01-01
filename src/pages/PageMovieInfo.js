
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useGlobal from '../store/globalAppState';
import SingleMovie from '../components/SingleMovie';
import { API_TOKEN } from '../globals/globals';

function PageSingleMovie() {
    const [globalState, globalActions] = useGlobal();

    const [ready, setReady] = useState(false);

	useEffect(() => {
        globalActions.setFavs();
    setReady(true);
  }, [globalActions]);

    const [movieData, setMovieData] = useState(null);

    const { id } = useParams();
    
    useEffect(() => {

        const fetchMovie = async () => {

            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + API_TOKEN
                }
            });
            let rawMovieData = await res.json();
            setMovieData(rawMovieData);

        }

        fetchMovie();

    }, []);

    return (
        <section className="single-movie-page">
            {movieData !== null && <SingleMovie movieObj={movieData} isFav={true}  />}
        </section>
    )
}

export default PageSingleMovie;
