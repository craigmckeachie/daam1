export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_FILMS_SUCCESS":
      return { ...state, films: [action.films] };
    default:
      return state;
  }
};
