<template>
  <q-page padding>
    <send-messages></send-messages>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import sendMessages from "components/sendMessages";

export default defineComponent({
  name: "PageIndex",
  components: { sendMessages }
});
</script>
