import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./component/MovieCard";
import SearchIcon from "./search.svg";
function App() {
  const user = process.env.REACT_APP_MOVIE_API;
  const API_URL = `http://www.omdbapi.com?apikey=${user}`;



  const SearchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search)
  };
  const [movies,setMovies] = useState([]);
  const [search,setSearch] = useState("");

  useEffect(() => {
    SearchMovies(search);
  },[search]);



  return (
    <div className="App">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={search}
          onChange={(e) => {setSearch(e.target.value)}}
        />
 

        <img src={SearchIcon} alt="search" />
      </div>

     
    {
      movies?.length > 0
      ? <div className="container">
     {movies.map((movie)=>{
      return <MovieCard movie = {movie}/>
      })}
      </div>:
      (<div className="empty"><h2>No movies found</h2></div>)
    }

    </div>
  );
}

export default App;
