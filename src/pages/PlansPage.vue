<template>
  <q-page class="q-pa-all">
    <PlansTable />
  </q-page>
</template>

<script>
import PlansTable from "components/plans/PlansTable";

export default {
  name: 'OperatorsPage',
  components: { PlansTable }
}
</script>
