<template>
  <div class="q-pa-md">
    <q-table class="my-sticky-header-table" flat bordered :rows="operators" :columns="column" row-key="name">
      <template v-slot:top>
        <div class="fit">
          <span class="text-h5">Operadoras</span>
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
              <q-input v-model="scope.value" dense autofocus counter @keyup.enter="updateOperatorByName(props, scope)" />
            </q-popup-edit>
          </q-td>

          <q-td key="service" :props="props">
            {{ props.row.service }}
            <q-popup-edit v-model="props.row.service" title="Atualizar serviço" auto-save v-slot="scope">
              <q-input v-model="scope.value" dense autofocus counter
                @keyup.enter="updateOperatorByService(props, scope)" />
            </q-popup-edit>
          </q-td>

          <q-td key="price" :props="props">
            {{ props.row.price }}
            <q-popup-edit v-model="props.row.price" title="Atualizar preço" auto-save v-slot="scope">
              <q-input v-model="scope.value" dense autofocus counter @keyup.enter="updateOperatorByPrice(props, scope)" />
            </q-popup-edit>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

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

    const operators = computed(() => $store.state.operators.operators)

    const updateOperatorByName = (props, scope) => {
      const oldOperator = props.row
      const newOperator = {
        id: props.row.id,
        operator: scope.value,
        service: props.row.service,
        price: props.row.price
      }

      const data = { oldOperator, newOperator }
      const getters = $store.getters.operators

      $store.commit('operators/updateOperatorByName', { data, getters })
    }

    const updateOperatorByService = (props, scope) => {
      const oldOperator = props.row
      const newOperator = {
        id: props.row.id,
        operator: props.row.operator,
        service: scope.value,
        price: props.row.price
      }

      const data = { oldOperator, newOperator }
      const getters = $store.getters.operators

      $store.commit('operators/updateOperatorByService', { data, getters })
    }

    const updateOperatorByPrice = (props, scope) => {
      const oldOperator = props.row
      const newOperator = {
        id: props.row.id,
        operator: props.row.operator,
        service: props.row.service,
        price: scope.value
      }

      const data = { oldOperator, newOperator }
      const getters = $store.getters.operators

      $store.commit('operators/updateOperatorByPrice', { data, getters })
    }

    return {
      operators,
      column,
      updateOperatorByName,
      updateOperatorByService,
      updateOperatorByPrice
    }
  }
}
</script>
