export default (photos, { tag, sortBy, startDate, endDate }) => {
    return photos.filter((photo) => {
      const startDateMatch = typeof startDate !== 'number' || photo.createdAt >= startDate;
      const endDateMatch = typeof endDate !== 'number' || photo.createdAt <= endDate;
      const tagMatch = photo.tag.toLowerCase().includes(tag.toLowerCase());
  
      return startDateMatch && endDateMatch && tagMatch;
    }).sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'tag') {
        return a.tag > b.tag ? 1 : -1;
      }
    });
  };
  