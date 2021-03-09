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
    console.log(`${host}/api/showings/${film_id}/${selected_date}`);
    fetch(`${host}/api/showings/${film_id}/${selected_date}`)
      .then(res => res.json())
      .then(showings => dispatch({ type: "SET_SHOWINGS", showings: showings }))
      .catch(err => console.error("Couldn't fetch showings", err));
  }
};

export default [fetchFilmsMiddleware, fetchShowingsForDateMiddleware];
