import React, { Component } from "react";

import FormHeader from "../FormHeader/FormHeader";
import "./MovieList.css";

class MovieList extends Component {
  render() {
    // TODO:: The list shown should be sorted by ratings, in descending order
    // TODO:: If no data in movieList, show message - 'No movies found to display'
    const movieList = JSON.parse(localStorage.getItem('movieList')) || [];
    const list =
    movieList ?
    movieList.map(movie => {
        return (
          <div className="movie">
            {/* TODO:: Convert this div into a link (website filled), 
          on click, the link should open in new tab
          */}
            <div>{
              movie.Website ? 
              <a href={movie.Website} target="_blank">{movie.MovieName}</a> 
              : movie.MovieName
              }
            </div>
            <div>({movie.Genre})</div>
            <div>
              <span className="fa fa-star" /> {movie.rating}/5
            </div>
          </div>
        );
      }) : <span>No movies found to display</span>;
    return (
      <div>
        <FormHeader formTitle="Movie list" />
        <button
          className="add-movie-button"
          onClick={() => {
            this.props.history.push("/add-movie");
          }}
        >
          <i className="fa fa-plus" />
        </button>
        {list}
      </div>
    );
  }
}

export default MovieList;
