/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const UPDATE_FAVORITE_STATUS = createActionName('UPDATE_FAVORITE_STATUS');

/* action creators */

export const updateFavoriteStatus = payload => ({
  payload,
  type: UPDATE_FAVORITE_STATUS,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case UPDATE_FAVORITE_STATUS: {
      const updateStatus = statePart.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            favorite: action.payload.favorite,
          };
        }
        return item;
      });
      return updateStatus;
    }
    default:
      return statePart;
  }
}
