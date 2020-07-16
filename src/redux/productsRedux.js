/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const comparableProduct = ({ products }) =>
  products.filter(products => products.compare === true);

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const UPDATE_FAVORITE_STATUS = createActionName('UPDATE_FAVORITE_STATUS');
const RATE_PRODUCT = createActionName('RATE_PRODUCT');
const TOGGLE_COMPARE = createActionName('TOGGLE_COMPARE');

/* action creators */

export const updateFavoriteStatus = payload => ({
  payload,
  type: UPDATE_FAVORITE_STATUS,
});

export const rateProduct = payload => ({
  payload,
  type: RATE_PRODUCT,
});

export const toggleCompare = productId => ({
  payload: { productId },
  type: TOGGLE_COMPARE,
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
    case RATE_PRODUCT: {
      const updateRating = statePart.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            userStars: action.payload.userStars,
          };
        }
        return item;
      });
      return updateRating;
    }
    case TOGGLE_COMPARE: {
      const productIndex = statePart.findIndex(
        ({ id }) => id === action.payload.productId
      );
      const comparableProductLength = statePart.filter(product => product.compare)
        .length;
      if (comparableProductLength === 4 && !statePart[productIndex].compare) {
        return statePart;
      }
      statePart[productIndex] = {
        ...statePart[productIndex],
        compare: !statePart[productIndex].compare,
      };
      return [...statePart];
    }
    default:
      return statePart;
  }
}