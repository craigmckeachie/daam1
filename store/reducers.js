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
    case "SET_SHOWINGS":
      return { ...state, showings: action.showings };
    case "SET_TABLES":
      return { ...state, tables: action.tables };
    case "SET_RESERVATIONS":
      tables = state.tables.map(table => {
        seats = table.seats.map(seat => {
          if (action.reservations?.some(res => res.seat_id === seat.id)) {
            return { ...seat, status: "seatIsTaken" };
          }
          return { ...seat };
        });
        return { ...table, seats: seats };
      });
      return { ...state, tables };
    case "SHOW_FILM_DETAILS":
      return { ...state, show_film_details: true };
    case "HIDE_FILM_DETAILS":
      return { ...state, show_film_details: false };
    default:
      return state;
  }
};
