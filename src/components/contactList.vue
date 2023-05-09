<template>
  <div>
    <q-table
      flat
      bordered
      title="Lista de contatos"
      :rows="rows"
      :columns="columns"
      row-key="name"
      binary-state-sort
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="id" :props="props">
            {{ props.row.id }}
          </q-td>
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="status" :props="props">
            <div class="text-pre-wrap">{{ props.row.status }}</div>
          </q-td>
          <q-td key="situation" :props="props">
            {{ props.row.situation }}
          </q-td>
          <q-td key="number" :props="props">
            {{ props.row.number }}
            <q-popup-edit
              v-model="props.row.number"
              title="Telefone:"
              buttons
              persistent
              v-slot="scope"
            >
              <q-input v-model="scope.value" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="city" :props="props">{{ props.row.city }}</q-td>
          <q-td key="dateActivation" :props="props">{{
            props.row.dateActivation
          }}</q-td>
          <q-td key="dateCancel" :props="props">{{
            props.row.dateCancel
          }}</q-td>
          <q-td key="dateBirth" :props="props">{{ props.row.dateBirth }}</q-td>
          <q-td key="dayPay" :props="props">{{ props.row.dayPay }}</q-td>
          <q-td key="send" :props="props">{{ props.row.send }}</q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import { reactive, computed, watch } from "vue";
import { useStore } from "vuex";
import _ from "lodash";
export default {
  // name: 'ComponentName',
  setup() {
    const $store = useStore();

    const columns = computed({
      get: () => $store.state.sendMessage.columns
    });

    const rows = computed({
      get: () => reactive(_.cloneDeep($store.state.sendMessage.dataContacts))
    });

    return {
      columns,
      rows
    };
  }
};
</script>
