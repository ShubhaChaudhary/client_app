import uuid from 'uuid';

// ADD_PHOTOS
export const addPhotos = (
  {
    tag = '',
    note = '',
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_PHOTOS',
  photo: {
    id: uuid(),
    tag,
    note,
    createdAt
  }
});

// REMOVE_PHOTOS
export const removePhotos= ({ id } = {}) => ({
  type: 'REMOVE_PHOTOS',
  id
});

// EDIT_PHOTOS
export const editPhotos = (id, updates) => ({
  type: 'EDIT_PHOTOS',
  id,
  updates
});
