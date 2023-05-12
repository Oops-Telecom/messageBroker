<template>
  <q-page class="row align-center justify-center q-row-gutter-md">
    <div class="bg-primary col-md-5 row flex-center">
      <div class="q-pa-md icon-bg rounded-borders">
        <q-img
          src="https://firebasestorage.googleapis.com/v0/b/gestaofiliais-44cfd.appspot.com/o/assets%2Flogo.png?alt=media&token=67cb6c52-4c16-400f-9369-f3960b0b2722"
          spinner-color="white" style="height: 8rem; width: 8rem;" alt="Logo da Oops Telecom" />
      </div>
    </div>
    <LoginForm />
  </q-page>
</template>

<script>
import LoginForm from '../components/auth/LoginForm.vue';

export default {
  name: 'LoginPage',
  components: { LoginForm },
  setup() {
    return {}
  }
}
</script>

<style scoped>
.icon-bg {
  background-color: #0b2541;
}
</style>
