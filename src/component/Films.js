import React from 'react';
import Ratingbar from './Ratingbar';
import LoaderHOC from '../HOC/LoaderHOC'
import {connect} from 'react-redux'
const Films = (props) => {
    console.log(props.star , 'star')
    return (
        <div className='film'>
            {
                props.List
                .filter (x =>  x.rating >= props.star    )
                .map(el =>
                    <div className='content-film'>
                        <div className='star'>
                            <Ratingbar rating={el.rating}  />
                        </div>
                        <img src={el.img} />
                        <div className='parag'>
                            <p>{el.titre}</p>
                            <p>{el.description}</p>
                        </div>

                    </div>)}

        </div>)

}


const mapStateToProps = (state)=> {
return {
    List : state.movie.movieList,
    star : state.filter.filterStar
}
}
export default connect(mapStateToProps) (Films)

// .filter(e => e.titre.toLowerCase().includes(props.filterSearch.toLowerCase().trim()) && e.rating >= props.rating)