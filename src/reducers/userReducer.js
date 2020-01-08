export const initialUserState = {
  id: 0,
  username: '',
  role: 'user',
  email: '',
  imageUrl: '',
  isFetching: false,
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
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};
