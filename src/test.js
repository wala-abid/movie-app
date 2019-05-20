import React from 'react';

import './App.css';

import Movie from './Movies'
import
Ratingbar from './Ratingbar'

import Movieadd from './Movieadd'



const star = (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    <path d="M0 0h24v24H0z" fill="none" />
</svg>)



class App extends React.Component {


    constructor() {

        super()

        this.state = {

            search: '',

            rating: 1,
            movietitle: '',
            movielink: '',

            movierating: '',

            movieList: [{
                MovieTitle: 'Movie 1',
                MovieImage: './Movie1.jpg',
                rating: 5

            },

            {
                MovieTitle: 'Movie 2',
                MovieImage: './Movie2.jpg', rating: 2
            },

            {
                MovieTitle: 'Movie 3',
                MovieImage: './Movie3.jpg',
                rating: 4
            }

            ]
        }


    }

    tablepush = () => {
        this.setState({
            movieList: this.state.movieList.concat({ MovieTitle: this.state.movietitle, MovieImage: this.state.movielink, rating: [star, star, star, star] })
        })

        console.log(this.state)
    }


    ratingnumber = (event) => {
        this.setState({ rating: Number(event.target.className) + 1 })

    }


    handleMinRating = (i) => {
        this.setState({
            rating: i
        })
    }

    render() {
        return (
            <div>
                <input className='searchbox' onChange={this.search} type='text' placeholder='Search...' />

                <Ratingbar rate={this.state.rating} handleRating={this.handleMinRating} />

                <div className='Container'>
                    {this.state.movieList
                        .filter(el => el.MovieTitle.toLowerCase().includes(this.state.search.toLowerCase().trim()) && el.rating >= this.state.rating)
                        .map(el => <Movie movieList={el} />)
                    }

                </div>

                <Movieadd setInput={this.setInput} tablepush={this.tablepush} className='displayer' />
            </div>

        )
    }
}

export default App;
