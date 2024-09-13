export default (state, action) => {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
          isAuthenticated: false,
        };
      default:
        return state;
    }
  };
  