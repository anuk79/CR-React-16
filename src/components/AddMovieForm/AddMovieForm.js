// vendor
import React from "react";
// component
import FormHeader from "../FormHeader/FormHeader";
// styles
import "./AddMovieForm.css";
import {Link} from 'react-router-dom';

class AddMovieForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
      MovieName:'',
      genre:'',
      rating:'',
      Website:''
    }
  }
  handleChange = (e) =>{
    e.preventDefault();
    console.log(e.target.id);
    console.log(e.target.value);
    this.setState({
      [e.target.id]:e.target.value
    },console.log('gtr',this.state.rating))
  }
  submitForm = (e) =>{
      e.preventDefault();
      console.log('onSubmit',this.state);
  }
  render() {
    return (
      <div className="row">
        <FormHeader formTitle={"Add your favorite movie"} />
        <button
          className="add-movie-button"
          onClick={() => {
              window.history.back();
          }}
        >
          <i className="fa fa-long-arrow-left" aria-hidden="true" />
        </button>
        <div className="col-12 form-body">
          <form action="#">
            <div className="wrapper">
              <label className="label" htmlFor="MovieName">
                Movie Name*
              </label>
              <input id="MovieName" name="MovieName" type="text" tabIndex="1" onChange={this.handleChange} value={this.state.value}/>
            </div>
            <div className="wrapper">
              <label className="label" id="Genre" htmlFor="Genre">
                Genre*
              </label>
              <select name="Genre" onChange={this.handleChange} id="genre">
                <option value="Science Fiction">Science Fiction</option>
                <option value="Drama">Drama</option>
                <option value="Action">Action</option>
                <option value="Horror">Horror</option>
                <option value="Comedy">Comedy</option>
                <option value="Documentary">Documentary</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="wrapper">
              <label className="label" htmlFor="rating">
                Rating*
              </label>
              <input type="radio" name="rating" value="1" label="1" id="rating" onChange={this.handleChange}/>1
              <input type="radio" name="rating" value="2" id="rating" onChange={this.handleChange}/ >2
              <input type="radio" name="rating" value="3" id="rating" onChange={this.handleChange}/>3
              <input type="radio" name="rating" value="4" id="rating" onChange={this.handleChange}/>4
              <input type="radio" name="rating" value="5" id="rating" onChange={this.handleChange}/>5
            </div>
            <div className="wrapper">
              <label className="label" htmlFor="Website">
                Website
              </label>
              <input id="Website" name="Website"  onChange={this.handleChange}/>
            </div>
            <div className="wrapper submit-btn">
              <Link to={{pathname:'/movie-list',state:{movie:this.state}}}>
              <input
                id="Submit"
                name="Submit"
                type="submit"
                value="Submit"
                tabIndex="5"
              /></Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddMovieForm;
