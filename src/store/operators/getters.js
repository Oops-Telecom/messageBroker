export function filterOperatorsById(state, id) {
  return state.operators.filter((operator) => operator.id !== id);
}

export function filterOperatorsByName(state, operatorName) {
  return state.operators.filter(({ operator }) => operator !== operatorName);
}

export function filterOperatorsByService(state, service) {
  return state.operators.filter((operator) => operator.service !== service);
}

export function filterOperatorsByPrice(state, price) {
  return state.operators.filter((operator) => operator.price !== price);
}
