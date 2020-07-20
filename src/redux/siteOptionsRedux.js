/* selectors */
export const getAllCurrencies = ({ currencies }) => currencies;
export const getAllLanguages = ({ language }) => language;
export const getAllClientService = ({ clientService }) => clientService;

/* action name creator */
const reducerName = 'options';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_OPTION = createActionName('CHANGE_OPTION');

/* action creators */
export const changeSiteOption = payload => ({ payload, type: CHANGE_OPTION });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
