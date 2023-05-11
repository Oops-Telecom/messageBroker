export function setPlans(state, { plansList }) {
  state.plansList = plansList;
}

export function addPlan(state, { plan }) {
  const plans = state.plansList;
  plan.id = String(state.plansList.length + 1);
  plans.push(plan);
}
