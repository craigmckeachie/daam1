export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_FILMS_SUCCESS":
      return { ...state, films: [...action.films] };
    case "SET_SELECTED_DATE":
      return { ...state, selected_date: action.date };
    default:
      return state;
  }
};
