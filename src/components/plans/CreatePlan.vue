<template>
  <q-dialog v-model="show" full-width full-height>
    <div class="q-pa-xl bg-white fit">
      <p class="text-h3 q-mb-100 q-mb-xl">Adicionar Plano</p>

      <q-form @submit.prevent="onSubmit" class="q-gutter-md">
        <q-input outlined v-model="operator" label="Operadora" :rules="[
          val => val && val.length > 0 || 'Campo obrigatório'
        ]" />

        <q-input outlined type="text" v-model="service" label="Serviço" :rules="[
          val => val && val.length > 0 || 'Campo obrigatório'
        ]" />

        <q-input outlined type="text" v-model="price" label="Preço" :rules="[
          val => val && val.length > 0 || 'Campo obrigatório',
        ]" />

        <div class="row align-center justify-end q-gutter-sm">
          <q-btn style="min-width: 10rem;" label="Adicionar" type="submit" color="positive" />
          <q-btn style="min-width: 10rem;" label="Cancelar" outline type="button" color="red" @click="closeModal" />
        </div>
      </q-form>
    </div>
  </q-dialog>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'CreatePlan',
  props: ['isOpen'],
  setup(props, { emit }) {
    const $store = useStore()
    const operator = ref('')
    const service = ref('')
    const price = ref('')

    const show = computed(() => props.isOpen);

    const closeModal = () => {
      emit('close')
    }

    const onSubmit = (e) => {
      const plan = {
        id: '',
        operator: operator.value,
        service: service.value,
        price: +price.value.replace(',', '.')
      }

      $store.commit('plans/addPlan', { plan });
      clearFields();
      closeModal();
    }

    const clearFields = () => {
      operator.value = '';
      service.value = '';
      price.value = '';
    }

    return {
      operator,
      service,
      price,
      show,
      closeModal,
      onSubmit
    }
  }
}
</script>
