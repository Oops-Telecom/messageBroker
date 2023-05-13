<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Oops Message Broker </q-toolbar-title>

        <q-btn class="logoutButton" label="Sair" color="white" text-color="white" outline @click="logout" />

        <div>v 0.0.1</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Mensagem",
    caption: "Envio de mensagens",
    icon: "mail",
    link: "#/message",
  },
  {
    title: "Planos",
    caption: "Acesso aos planos",
    icon: "phone",
    link: "#/plans",
  }
];

import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const $store = useStore();
    const $router = useRouter();
    const leftDrawerOpen = ref(false);

    const logout = () => {
      $store.dispatch('user/logout');
      $router.push('/');
    }

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      logout
    };
  },
});
</script>

<style scoped>
.logoutButton {
  margin-right: 0.8rem;
}
</style>
