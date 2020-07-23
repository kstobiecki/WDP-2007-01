/* selectors */
export const getAll = ({ galleryPics }) => galleryPics;
export const getCount = ({ galleryPics }) => galleryPics.length;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
