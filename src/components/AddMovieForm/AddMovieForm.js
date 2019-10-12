// vendor
import React from "react";
// component
import FormHeader from "../FormHeader/FormHeader";
// styles
import "./AddMovieForm.css";

class AddMovieForm extends React.Component {
  constructor(props){
    super();

    this.state = {MovieName:'', Genre: 'Science Fiction', rating: '', Website: ''};
    this.submit = this.submit.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.genreChange = this.genreChange.bind(this);
    this.ratingChange = this.ratingChange.bind(this);
    this.websiteChange = this.websiteChange.bind(this);
  }

  submit = (e) => {
    e.preventDefault();    
    if(this.state.MovieName === ''){
      alert("Please enter movie name");
      return false;
    }else if(!(this.state.MovieName.match(/^[A-Za-z]+$/))){
      alert("Please enter correct movie name, use alphabets only");
      return false;
    }else if(this.state.Genre === ''){
      alert("Please enter Genre");
      return false;
    }else if(this.state.rating === ''){
      alert("Please enter rating");
      return false;
    }   

    if(this.state.Website !== ''){
      var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
      if (!re.test(this.state.Website)) { 
          alert("Please enter valid Website");
          return false;
      }
    }
    

    var data = {
      MovieName:this.state.MovieName, 
      Genre: this.state.Genre, 
      rating: this.state.rating, 
      Website: this.state.Website
    }    
    //localStorage.removeItem('movieList');
    var oldItems = JSON.parse(localStorage.getItem('movieList')) || [];
    oldItems.push(data);
    localStorage.setItem('movieList', JSON.stringify(oldItems));
  }

  nameChange = (e) => {
    this.setState({MovieName: e.target.value});
  }

  genreChange = (e) => {
    this.setState({Genre: e.target.value});
  }

  ratingChange = (e) => {
    this.setState({rating: e.target.value});
  }

  websiteChange = (e) => {
    this.setState({Website: e.target.value});
  }

  render() {
    return (
      <div className="row">
        <FormHeader formTitle={"Add your favorite movie"} />
        <button
          className="add-movie-button"
          onClick={() => {
            window.location = window.location.href.split("/add-movie")[0]
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
              <input id="MovieName" name="MovieName" type="text" tabIndex="1" required onChange={this.nameChange}/>
            </div>
            <div className="wrapper">
              <label className="label" id="Genre" htmlFor="Genre">
                Genre*
              </label>
              <select name="Genre" required onChange={this.genreChange} defaultValue='Science Fiction'>
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
              <div><input type="radio" name="rating" value="1" label="1" onChange={this.ratingChange}/>1</div>
              <div><input type="radio" name="rating" value="2"  onChange={this.ratingChange}/>2</div>
              <div><input type="radio" name="rating" value="3"  onChange={this.ratingChange}/>3</div>
              <div><input type="radio" name="rating" value="4"  onChange={this.ratingChange}/>4</div>
              <div><input type="radio" name="rating" value="5"  onChange={this.ratingChange}/>5</div>
            </div>
            <div className="wrapper">
              <label className="label" htmlFor="Website">
                Website
              </label>
              <input id="Website" type="url" name="Website" onChange={this.websiteChange}/>
            </div>
            <div className="wrapper submit-btn">
              <input
                id="Submit"
                name="Submit"
                type="submit"
                value="Submit"
                tabIndex="5"
                onClick={this.submit}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddMovieForm;
