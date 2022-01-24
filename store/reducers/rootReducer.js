const initialState = {
  favIds: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      console.log('add')
      return { favIds: [...state.favIds, action.payload] };

    case "REMOVE":
      console.log('in remove')
      return { favIds: state.favIds.filter((el) => el != action.payload) };

    case "GET_Top_Rated_MOVIES":
      console.log(action.payload)
      return {...state, topRatedMovies: action.payload}
    default:
      return state;
  }
}