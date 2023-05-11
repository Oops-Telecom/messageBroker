<template>
  <q-page class="fit  q-pa-md column flex-center">
    <p class="text-h2 q-mb-xl text-center">Realizar login</p>

    <q-form @submit.prevent="onSubmit" class="q-gutter-sm medium-width">
      <q-input type="email" class="fit" outlined v-model="email" label="Email" :rules="[
        val => val && val.length > 0 || 'Campo obrigatório',
        val => val && validateEmail(val) || 'Email inválido'
      ]" />

      <q-input type="password" class="fit" outlined v-model="password" label="Senha" :rules="[
        val => val && val.length > 0 || 'Campo obrigatório',
        val => val && val.length >= 6 || 'A senha precisa ter 6 ou mais caracteres'
      ]" />

      <div class="row align-end justify-end">
        <q-btn class="btn-width " label="Entrar" type="submit" color="primary" />
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: 'LoginPage',
  setup() {
    const $store = useStore()
    const $router = useRouter()
    const email = ref('')
    const password = ref('')

    const onSubmit = async (e) => {
      const credentials = { email: email.value, password: password.value }
      const loggedIn = await $store.dispatch("user/login", credentials)

      if (loggedIn) {
        $router.push("/#");
      }
    }

    const validateEmail = (val) => {
      const emailRegex = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
      return emailRegex.test(val)
    }

    return {
      email,
      password,
      onSubmit,
      validateEmail
    }
  }
}
</script>

<style scoped>
.medium-width {
  width: 30rem;
}

.btn-width {
  min-width: 10rem;
}
</style>
