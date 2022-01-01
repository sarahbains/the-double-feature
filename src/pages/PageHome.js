import FilterNav from '../components/FilterNav'
import Library  from '../components/Library'
import { useEffect, useState } from 'react';
import { API_TOKEN} from '../globals/globals';

function PageHome({ sort }) {

    const [movieData, setMovieData] = useState(null);

    useEffect(() => {

        const fetchMovies = async () => {

            const res = await fetch(`https://api.themoviedb.org/3/movie/${sort}?&language=en-US&page=1`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + API_TOKEN
                }
            });
            let rawMovieData = await res.json();
            rawMovieData = rawMovieData.results.splice(0, 16);
            setMovieData(rawMovieData);
            console.log(rawMovieData);

        }

        fetchMovies();


    }, [sort]);
    return (
        <section className='home-page'>
            <FilterNav />
            {movieData !== null && <Library movieData={movieData} />}
        </section>
    )
}

export default PageHome
