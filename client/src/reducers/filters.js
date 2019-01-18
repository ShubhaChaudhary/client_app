const filtersReducerDefaultState = {
    tag: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  
  export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
      case 'SET_TAG_FILTER':
        return {
          ...state,
          tag: action.tag
        };
      case 'SORT_BY_TAG':
        return {
          ...state,
          sortBy: 'tag'
        };
      case 'SORT_BY_DATE':
        return {
          ...state,
          sortBy: 'date'
        };
      case 'SET_START_DATE':
        return {
          ...state,
          startDate: action.startDate
        };
      case 'SET_END_DATE':
        return {
          ...state,
          endDate: action.endDate
        };
      default:
        return state;
    }
  };
 