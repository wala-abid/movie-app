import React from 'react';
import {connect } from 'react-redux'
import {rateFilter} from '../action/FilterReducer'
const Ratingbar = (props) => {

    var tab = []
    for (let i = 0; i < 5; i++) {
        if (i < props.rating) {
            tab.push(<i class="fas red fa-star" onClick={() => props.rateFilter(i + 1)} />)
        }
        else {
            tab.push(<i class="far fa-star" onClick={() => props.rateFilter(i + 1)} />)
        }
    }
    return (
        <div>
            {tab}
        </div>
    )
}
export default connect (null , {rateFilter} )(Ratingbar) 