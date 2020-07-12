/* selectors */
export const getAll = ({ banners }) => banners;
export const getCount = ({ banners }) => banners.length;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
