import React from 'react';

const Ratingbar = (props) => {

    var tab = []
    for (let i = 0; i < 5; i++) {
        if (i < props.rating) {
            tab.push(<i class="fas red fa-star" onClick={() => props.handlerating(i + 1)} />)
        }
        else {
            tab.push(<i class="far fa-star" onClick={() => props.handlerating(i + 1)} />)
        }
    }
    return (
        <div>
            {tab}
        </div>
    )
}
export default Ratingbar;