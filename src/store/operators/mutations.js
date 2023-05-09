export function setOperator(state, { operators }) {
  state.operators = operators;
}

export function updateOperatorById(state, { data, getters }) {
  const { oldOperator, newOperator } = data;
  const filteredOperators = getters.filterOperatorsById(oldOperator.id);
  state.operators = [newOperator, ...filteredOperators];
}

export function updateOperatorByName(state, { data, getters }) {
  const { oldOperator, newOperator } = data;
  const filteredOperators = getters.filterOperatorsByName(oldOperator.operator);
  state.operators = [newOperator, ...filteredOperators];
}

export function updateOperatorByService(state, { data, getters }) {
  const { oldOperator, newOperator } = data;
  const filteredOperators = getters.filterOperatorsByService(
    oldOperator.service
  );
  state.operators = [newOperator, ...filteredOperators];
}

export function updateOperatorByPrice(state, { data, getters }) {
  const { oldOperator, newOperator } = data;
  const filteredOperators = getters.filterOperatorsByPrice(oldOperator.price);
  state.operators = [newOperator, ...filteredOperators];
}
