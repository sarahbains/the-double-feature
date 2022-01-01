import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHome from '../pages/PageHome';
import PageFavs from '../pages/PageFavs';
import PageAbout from '../pages/PageAbout';
import PageMovieInfo from '../pages/PageMovieInfo';

function App() {
  return (
    <Router>
      <Header />
    <div className="wrapper" >
        <main>
          <Switch>
            <Route path="/the-double-feature" exact> <PageHome  sort='popular' /> </Route>
            <Route path="/sort/popular"> <PageHome  sort='popular' /> </Route>
            <Route path="/sort/top-rated"> <PageHome  sort='top_rated' /> </Route>
            <Route path="/sort/now-playing"> <PageHome  sort='now_playing' /> </Route>
            <Route path="/sort/upcoming"> <PageHome  sort='upcoming' /> </Route>
            <Route path="/the-double-feature/about" > <PageAbout /> </Route>
            <Route path="/the-double-feature/favourites" > <PageFavs /> </Route>
            <Route path="/movie/:id" > <PageMovieInfo/> </Route>
          </Switch>
        </main>
    </div>
    <Footer />
    </Router>
  );
}

export default App;
