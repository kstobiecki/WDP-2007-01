/* selectors */
export const getAllPromotions = ({ promotions }) => promotions;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
