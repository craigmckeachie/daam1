const fetchFilmsMiddleware = ({ dispatch, getState }) => next => action =>
  next(action);
export default [fetchFilmsMiddleware];
