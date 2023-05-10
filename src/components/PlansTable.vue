<template>
  <div class="q-pa-md">
    <q-table class="my-sticky-header-table" flat bordered :rows="rows" :columns="column" row-key="name">
      <template v-slot:top>
        <div class="fit row align-center justify-between">
          <span class="text-h5">Planos</span>
          <q-btn color="positive" label="Salvar alterações" @click="updateRows" />
        </div>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="id" :props="props">
            {{ props.row.id }}
          </q-td>

          <q-td key="operator" :props="props">
            {{ props.row.operator }}
            <q-popup-edit v-model="props.row.operator" title="Atualizar operadora" auto-save v-slot="scope">
              <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>

          <q-td key="service" :props="props">
            {{ props.row.service }}
            <q-popup-edit v-model="props.row.service" title="Atualizar serviço" auto-save v-slot="scope">
              <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>

          <q-td key="price" :props="props">
            {{ props.row.price }}
            <q-popup-edit v-model="props.row.price" title="Atualizar preço" auto-save v-slot="scope">
              <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import _ from 'lodash'
import { computed, reactive } from 'vue'

export default {
  name: 'OperatorsTable',
  setup() {
    const $store = useStore()
    const column = [
      { name: 'id', label: 'Id', field: 'id', sortable: true, align: 'left' },
      { name: 'operator', label: 'Operadora', field: 'operator', sortable: true, align: 'left' },
      { name: 'service', label: 'Serviço', field: 'service', sortable: true, align: 'left' },
      { name: 'price', label: 'Preço', field: 'price', sortable: true, align: 'left' },
    ]

    const rows = computed(() => {
      return reactive(
        _.cloneDeep($store.state.plans.plansList));
    });

    const updateRows = () => {
      $store.commit('plans/setPlans', { plansList: rows.value });
    }

    return {
      column,
      rows,
      updateRows
    }
  }
}
</script>
