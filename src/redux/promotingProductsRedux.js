/* selectors */
export const getAllPromotingProducts = ({ promotingProducts }) => promotingProducts;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
