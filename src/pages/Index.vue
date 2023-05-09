<template>
  <q-page padding>
    <send-messages></send-messages>
    <contact-list class="q-mt-md"></contact-list>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import sendMessages from "components/sendMessages";
import contactList from "components/contactList";

export default defineComponent({
  name: "PageIndex",
  components: { sendMessages, contactList }
});
</script>
