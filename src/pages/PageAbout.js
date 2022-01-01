import logo from '../images/tmdb-logo.png'
import bgImage from '../images/movie-theatre.jpg'

function PageAbout() {
    return (
        <section className="about-page"  style={{ backgroundImage: `url(${bgImage})` }}>
          <div className="bg">
          <h2>About Us</h2>
          <p> The Double Feature is a movie database that allows users to browse the most recent upcoming and newly released movies based on their popularity and rating. <br /> Read about all trending movies and add them to your Favourites page to save for later!</p>
          
          <p>The Double Feature uses the TMDb API but is not endorsed or certified by TMDb.</p>
          
          <div className="copyright">
            <img src={logo} alt="TMDB Logo" />
          </div>
          </div>
        </section>
    )
}

export default PageAbout
