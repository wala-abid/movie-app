import React from 'react';
import Ratingbar from './Ratingbar';
const Films = (props) => {
    return (
        <div className='film'>
            {props.films
                .filter(e => e.titre.toLowerCase().includes(props.filterSearch.toLowerCase().trim()) && e.rating >= props.rating)
                .map(el =>
                    <div className='content-film'>
                        <div className='star'>
                            <Ratingbar rating={el.rating} handlerating={() => { }} />
                        </div>
                        <img src={el.img} />
                        <div className='parag'>
                            <p>{el.titre}</p>
                            <p>{el.description}</p>
                        </div>

                    </div>)}

        </div>)

}
export default Films;