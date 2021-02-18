import { host } from "./api_host_maker";
const fetchFilmsMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === "FETCH_FILMS_REQUEST") {
    fetch(`${host}/films`)
      .then(response => response.json())
      .then(films => dispatch({ type: "FETCH_FILMS_SUCCESS", films }));
  }
  next(action);
};
export default [fetchFilmsMiddleware];
