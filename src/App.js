import React from 'react';
import './App.css';
import Searchbar from './component/Searchbar';

import Films from './component/Films';
import Ratingbar from './component/Ratingbar';
import Add from './component/Add';
import LoaderHOc from './HOC/LoaderHOC'
import {connect} from 'react-redux'
 class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    
    
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
            <Ratingbar rating={this.props.star}  />
          </div>

        </div>
        <Films filterSearch={this.state.search} rating={this.state.rating} />
        <Add />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    star : state.filter.filterStar
  }
}

export default connect (mapStateToProps) (App)