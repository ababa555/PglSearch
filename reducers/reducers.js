import { combineReducers } from 'redux';

export function input(state={
    pokemon: {}
  }, action){
    switch(action.type) {
      case "SET_POKEMON":
        state.pokemon = action.pokemon;
        return Object.assign({}, state);
      case "CLEAR_POKEMON":
        state.pokemon = {};
        return Object.assign({}, state);
      default:
        return state;
    }
}

export function label(state={
  value: ""
}, action){
  switch(action.type) {
    case "SET_VALUE":
      state.value = action.value;
      return Object.assign({}, state);
    case "CLEAR_VALUE":
      state.value = "";
      return Object.assign({}, state);
    default:
      return state;
  }
}

export default combineReducers({
  input,
  label
});