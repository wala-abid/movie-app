const intialState = {

    filterStar : 0
}

const  filterReducer = (state =intialState, action ) => {

    if (action.type === 'FILTER_RATE') {
        return {...state, filterStar : action.payload}
    }
return state
}

export default filterReducer