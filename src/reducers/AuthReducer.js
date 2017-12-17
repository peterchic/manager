import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};
//tells future dev this auth is responsible for the above listed properties

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
      // The above line explained...
      // 1. Make a new object => { }
      // 2. Take all properites off existing state, and throw them in new object => ...state
      // 3. define the property 'email', assign it the action.payload, and toss it on top of
      // whatever properties were on the state inside the new object just created
      // 4. Even if the current state has an 'email' property, it will be overwritten
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, ...INITIAL_STATE };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Auth Failed', loading: false };
    default:
      return state;
  }
};
