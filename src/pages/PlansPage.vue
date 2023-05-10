<template>
  <q-page class="q-pa-all">
    <plans-table />
  </q-page>
</template>

<script>
import PlansTable from "components/PlansTable";

export default {
  name: 'OperatorsPage',
  components: { PlansTable }
}
</script>
