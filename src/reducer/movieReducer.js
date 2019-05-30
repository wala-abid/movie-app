import disney from  '../images/disney.jpg'

const intialState =   {
movieList : 
[
    {img: disney , rating: 4, titre: "film action", description: "2011" },
    { img: disney, rating: 3, titre: "the vampire", description: "2015" },
    { img: disney, rating: 2, titre: "opera", description: "2010" },
    { img: disney, rating: 1, titre: "Hollywood", description: "2012" }],
    val : 'valeur'

} 

const movieReducer = (state = intialState , action) =>{

if (action.type === 'ADD_MOVIE') {


return  {...state, movieList : state.movieList.concat(action.payload)  }
}



return state
}

export default movieReducer