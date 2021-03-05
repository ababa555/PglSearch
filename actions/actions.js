export const setPokemon = pokemon => {
  return {
    type: 'SET_POKEMON',
    pokemon
  }
}

export const clearPokemon = _ => {
  return {
    type: 'CLEAR_POKEMON'
  }
}

export const setValue = value => {
  return {
    type: 'SET_VALUE',
    value
  }
}

export const clearValue = _ => {
  return {
    type: 'CLEAR_VALUE'
  }
}