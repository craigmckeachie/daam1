import { host } from "./api_host_maker";
const fetchFilmsMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === "FETCH_FILMS_REQUEST") {
    fetch(`${host}/films`)
      .then(response => response.json())
      .then(films => dispatch({ type: "FETCH_FILMS_SUCCESS", films }));
  }
  next(action);
};

const fetchShowingsForDateMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  // Complete the current action *first* so we have a good film and date!
  next(action);
  if (
    action.type === "SET_SELECTED_DATE" ||
    action.type === "SET_SELECTED_FILM"
  ) {
    const selected_date = getState().selected_date.toISOString().split("T")[0];
    const film_id = getState().selected_film.id;
    fetch(`${host}/api/showings/${film_id}/${selected_date}`)
      .then(res => res.json())
      .then(showings => dispatch({ type: "SET_SHOWINGS", showings: showings }))
      .catch(err => console.error("Couldn't fetch showings", err));
  }
};

const fetchTablesAndSeatsMiddleware = ({ dispatch }) => next => action => {
  const { theater_id } = action;
  if (action.type === "FETCH_TABLES_AND_SEATS") {
    fetch(`${host}/api/theaters/${theater_id}/tables`)
      .then(res => res.json())
      .then(tables => dispatch({ type: "SET_TABLES", tables }))
      .catch(err => console.error("Couldn't fetch tables", err));
  }
  return next(action);
};

const fetchReservationsMiddleware = ({ dispatch }) => next => action => {
  if (action.type === "FETCH_RESERVATIONS") {
    const id = action.showing_id;
    fetch(`${host}/api/showings/${id}/reservations/`)
      .then(res => res.json())
      .then(reservations =>
        dispatch({ type: "SET_RESERVATIONS", reservations })
      )
      .catch(err => console.error("Couldn't fetch reservations", err));
  }
  next(action);
};

export default [
  fetchFilmsMiddleware,
  fetchShowingsForDateMiddleware,
  fetchTablesAndSeatsMiddleware,
  fetchReservationsMiddleware
];
