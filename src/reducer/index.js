import { IS_MORE, IS_LESS } from './actions';

const moreInfo =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iste vitae magnam saepe? Magnam dolore ratione laboriosam distinctio fugit tempora commodi adipisci.';
const initailState = {
  isMore: true,
  more: '',
};

const reducer = (state, action) => {
  if (action.type === IS_MORE) {
    return { ...state, more: moreInfo, isMore: false };
  }
  if (action.type === IS_LESS) {
    return { ...state, more: '', isMore: true };
  }
};

export { initailState, reducer };
