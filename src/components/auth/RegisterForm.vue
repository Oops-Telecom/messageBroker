<template>
  <div class="col-xs-auto col-sm-6 col-md-6 col-lg-6 q-pa-xl column align-center justify-center">
    <p class="text-h3 q-mb-lg text-center">Realizar cadastro</p>
    <p class="text-h6 q-mb-xl text-center text-grey-7">Bem-vindo a página de cadastro</p>

    <q-form @submit.prevent="onSubmit" class="q-col-gutter-sm">
      <q-input type="email" class="q-mx-xl" outlined v-model="email" label="Email" :rules="[
        val => val && val.length > 0 || 'Campo obrigatório',
        val => val && validateEmail(val) || 'Email inválido'
      ]" />

      <q-input type="password" class="q-mx-xl" outlined v-model="password" label="Senha" :rules="[
        val => val && val.length > 0 || 'Campo obrigatório',
        val => val && val.length >= 6 || 'A senha precisa ter 6 ou mais caracteres'
      ]" />

      <q-input type="password" class="q-mx-xl" outlined v-model="confirmPassword" label="Confirmação de senha" :rules="[
        val => val && val.length > 0 || 'Campo obrigatório',
        val => val && val.length >= 6 || 'A senha precisa ter 6 ou mais caracteres',
        val => val && checkForEqualsPasswords(password, confirmPassword) || 'A senhas não coincidem'
      ]" />

      <div class="row align-center justify-end q-mb-xl q-mx-xl">
        <q-btn class="col-5" label="Cadastrar-se" type="submit" color="primary" />
      </div>

      <p class="text-center">
        Já tem conta?
        <span class="col-5 text-primary cursor-pointer" @click="goToLogin">entre</span>
      </p>
    </q-form>
  </div>
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
    const confirmPassword = ref('')

    const validateEmail = (val) => {
      const emailRegex = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
      return emailRegex.test(val)
    }

    const checkForEqualsPasswords = (password, confirmPassword) => {
      return password === confirmPassword;
    }

    const onSubmit = async (e) => {
      const credentials = { email: email.value, password: password.value }
      const registered = await $store.dispatch("user/register", credentials)

      if (registered) {
        $router.push("/");
      }
    }

    const goToLogin = () => {
      $router.push("/")
    }

    return {
      email,
      password,
      confirmPassword,
      validateEmail,
      checkForEqualsPasswords,
      onSubmit,
      goToLogin
    }
  }
}
</script>

