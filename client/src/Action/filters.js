export const setTagFilter = (tag = '') => ({
    type: 'SET_TAG_FILTER',
    tag
  });
  
  // SORT_BY_DATE
  export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
  });
  
  // SORT_BY_TAG
  export const sortByTag = () => ({
    type: 'SORT_BY_TAG'
  });
  
  // SET_START_DATE
  export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
  });
  
  // SET_END_DATE
  export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
  });