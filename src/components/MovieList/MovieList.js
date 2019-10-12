import React, { Component } from "react";

import FormHeader from "../FormHeader/FormHeader";
import "./MovieList.css";

class MovieList extends Component {
  constructor(props){
    super(props);
    this.data = this.props.location.state
    console.log('movie-list',this.data.movie);
  }
  render() {
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
          {this.data?<div className="movie">
            <div>{this.data.movie.MovieName}</div>
            <div>({this.data.movie.genre})</div>
            <div>
              <span className="fa fa-star" /> {this.data.rating}/5
            </div>
          </div>:""}
      </div>
    );
  }
}

export default MovieList;
