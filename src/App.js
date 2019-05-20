import React from 'react';
import './App.css';
import Searchbar from './component/Searchbar';
import disney from './images/disney.jpg';
import Films from './component/Films';
import Ratingbar from './component/Ratingbar';
import Add from './component/Add'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      rating: 1,
      films: [
      {img: disney, rating: 4, titre: "film action", description: "2011" },
      { img: disney, rating: 3, titre: "the vampire", description: "2015" },
      { img: disney, rating: 2, titre: "opera", description: "2010" },
      { img: disney, rating: 1, titre: "Hollywood", description: "2012" }]
    }
  }

  search = (event) => {
    // console.log(event.target.value, 'fff')
    this.setState({
      search: event.target.value
    });
  }
  handlerating = (rating) => {
    this.setState({
      rating: rating
    })
  }

  addNewMovie = (rating, title,img, description) => {
    this.setState({
      films: this.state.films.concat({ rating: rating, titre: title,img:img , description: description })
    })
  }
 

  render() {
    return (
      <div className="App">
        <div className="header">
          <Searchbar searchvalue={this.search} />
          {/* <input value={this.state.searchValue} onChange={this.search}/> */}
          <div className='rating'>
            <p className='title'>Minimum rating</p>
            <Ratingbar rating={this.state.rating} handlerating={this.handlerating} />
          </div>

        </div>
        <Films films={this.state.films} filterSearch={this.state.search} rating={this.state.rating} />
        <Add addMovie={this.addNewMovie}/>
      </div>
    )
  }
}
