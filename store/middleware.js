import { host } from "./api_host_maker";
const fetchFilmsMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === "FETCH_FILMS") {
    console.log(`${host}/films`);
    fetch(`${host}/films`)
      .then(response => response.json())
      .then(films =>
        films.forEach(film => dispatch({ type: "ADD_FILM", film }))
      );
  }
  next(action);
};
export default [fetchFilmsMiddleware];
