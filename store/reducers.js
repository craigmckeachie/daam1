export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_FILMS_SUCCESS":
      return { ...state, films: [...action.films] };
    case "SET_SELECTED_DATE":
      return { ...state, selected_date: action.date };
    case "SET_SELECTED_FILM":
      return { ...state, selected_film: action.film };
    default:
      return state;
  }
};
