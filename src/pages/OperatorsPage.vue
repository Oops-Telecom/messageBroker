<template>
  <q-page class="q-pa-all">
    <operators-table />
  </q-page>
</template>

<script>
import OperatorsTable from "components/OperatorsTable";

export default {
  name: 'OperatorsPage',
  components: { OperatorsTable }
}
</script>
