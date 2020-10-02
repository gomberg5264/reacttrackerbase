export default (state, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        errMsg: null,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        token: action.payload,
        user: action.payload,
        errMsg: null,
      };
    case "LOG_ERROR_MESSAGE":
      return {
        ...state,
        errMsg: action.payload,
      };
    default:
      return state;
  }
};