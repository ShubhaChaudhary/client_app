const photosReducerDefaultState = [];

export default (state = photosReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_PHOTOS':
      return [
        ...state,
        action.photo
      ];
    case 'REMOVE_PHOTOS':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_PHOTOS':
      return state.map((photo) => {
        if (photo.id === action.id) {
          return {
            ...photo,
            ...action.updates
          };
        } else {
          return photo;
        };
      });
    default:
      return state;
  }
};