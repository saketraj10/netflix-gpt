import { useSelector } from "react-redux";
import MoiveList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
    <div>
      <MoiveList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      {/* 

        MovieList - Popular
          MovieCard * n
        MovieList - Now Playing
        MovieList - Trending
        MoiveList - Horror



      */}
    </div>
  )
}

export default SecondaryContainer