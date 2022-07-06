import React from 'react'

function MovieCard(props) {
    
    console.log(props.movie);
  const {Title,Year,imdbID,Type,Poster} = props.movie;

  return (
    <div className='movie'>
        <div>
            <p>{Year}</p>
        </div>
        <div> 
            <img src={Poster!=='N/A' && Poster} alt={`${Title}`}/>
        </div>

        <div> 
            <span>{Type}</span>
            <h3>{Title}</h3>
        </div>

    </div>
  )
}

export default MovieCard