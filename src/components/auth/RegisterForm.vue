<template>
  <p class="medium-width text-h2 q-mb-xl text-center">Realizar cadastro</p>

  <q-form @submit.prevent="onSubmit" class="q-gutter-sm medium-width">
    <q-input type="email" class="fit" outlined v-model="email" label="Email" :rules="[
      val => val && val.length > 0 || 'Campo obrigatório',
      val => val && validateEmail(val) || 'Email inválido'
    ]" />

    <q-input type="password" class="fit" outlined v-model="password" label="Senha" :rules="[
      val => val && val.length > 0 || 'Campo obrigatório',
      val => val && val.length >= 6 || 'A senha precisa ter 6 ou mais caracteres'
    ]" />

    <div class="full-width row align-center justify-between q-gutter-md">
      <q-btn class="btn-width" to="/" label="Voltar para login" type="button" color="primary" />
      <q-btn class="btn-width" label="Cadastrar-se" type="submit" color="primary" />
    </div>
  </q-form>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: 'AuthForm',
  setup() {
    const $store = useStore()
    const $router = useRouter()
    const email = ref('')
    const password = ref('')

    const validateEmail = (val) => {
      const emailRegex = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
      return emailRegex.test(val)
    }

    const onSubmit = async (e) => {
      const credentials = { email: email.value, password: password.value }
      const registered = await $store.dispatch("user/register", credentials)

      if (registered) {
        $router.push("/");
      }
    }

    return {
      email,
      password,
      validateEmail,
      onSubmit
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
