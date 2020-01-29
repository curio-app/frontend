export const initialUserState = {
  id: 0,
  username: '',
  role: 'user',
  email: '',
  imageUrl: '',
  isFetching: true,
  loggedIn: false,
  isLoggingIn: false,
};

export const userReducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case 'FETCH_START':
      return {
        ...state,
        isFetching: true,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        ...action.payload,
        isFetching: false,
        loggedIn: true,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isFetching: false,
      };
    case 'LOGIN_START':
      return {
        ...state,
        isLoggingIn: true,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        ...action.payload,
        isLoggingIn: false,
        loggedIn: true,
      };
    case 'LOGIN_FAILEURE':
      return {
        ...state,
        isLoggingIn: false,
      };
    default:
      return state;
  }
};
