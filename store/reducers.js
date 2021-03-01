export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_FILMS_SUCCESS":
      return { ...state, films: [...action.films] };
    case "SET_SELECTED_DATE":
      return { ...state, selected_date: action.date };
    case "SET_SELECTED_FILM":
      return { ...state, selected_film: action.film };
    case "SET_SELECTED_SHOWING":
      return { ...state, selected_showing: action.selected_showing };
    case "SHOW_FILM_DETAILS":
      return { ...state, show_film_details: true };
    case "HIDE_FILM_DETAILS":
      return { ...state, show_film_details: false };
    default:
      return state;
  }
};
