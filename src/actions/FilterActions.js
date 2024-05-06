export const setValue = (type, data) => (dispatch) => {
  dispatch({ type, payload: data });
};
