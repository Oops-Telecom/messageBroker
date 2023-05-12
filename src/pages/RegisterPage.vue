<template>
  <q-page class="fit q-pa-md column flex-center">
    <RegisterForm />
  </q-page>
</template>

<script>
import RegisterForm from '../components/auth/RegisterForm.vue';

export default {
  name: 'CreateUserPage',
  components: { RegisterForm }
}
</script>
