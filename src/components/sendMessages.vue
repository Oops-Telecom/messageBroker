<template>
  <q-card class="q-pa-sm">
    <q-card-section>
      <div class="text-h6">Envio de Mensagens {{ dateActivation }}</div>
      <div class="text-subtitle2">Disparo de mensagens de áudio e texto</div>
    </q-card-section>
    <q-card-section>
      <div class="row q-col-gutter-sm">
        <div class="col-2">
          <q-select
            filled
            dense
            v-model="city"
            :options="optionsCity"
            label="Cidade"
          />
        </div>
        <div class="col-2">
          <q-select
            filled
            dense
            v-model="status"
            :options="optionsStatus"
            label="Status"
          />
        </div>
        <div class="col-2">
          <q-select
            filled
            dense
            v-model="situation"
            :options="optionsSituation"
            label="Situação"
          />
        </div>
        <div class="col-2">
          <q-input
            filled
            v-model="dateActivation.from"
            type="text"
            dense
            label="Data Ativação"
            :rules="['date']"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="dateActivation" range>
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div class="col-2">
          <q-input
            filled
            v-model="dateCancel"
            dense
            mask="maskDate"
            label="Data Cancelamento"
            :rules="['date']"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="dateCancel" range>
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div class="col-2">
          <q-input
            filled
            v-model="dateBirth"
            dense
            mask="date"
            label="Data Nascimento"
            :rules="['date']"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="dateBirth" range>
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div class="col-2">
          <q-btn rounded color="primary" icon="search" @click="searchClients" />
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
export default {
  // name: 'ComponentName',
  setup() {
    const $store = useStore();

    let city = ref("");
    let optionsCity = computed({
      get: () => $store.state.sendMessage.optionsCity
    });
    let status = ref("");
    let optionsStatus = computed({
      get: () => $store.state.sendMessage.optionsStatus
    });
    let situation = ref("");
    let optionsSituation = computed({
      get: () => $store.state.sendMessage.optionsSituation
    });
    let dateActivation = ref({ from: "2020/07/08", to: "2020/07/17" });
    let dateCancel = ref({ from: "2020/07/08", to: "2020/07/17" });
    let dateBirth = ref({ from: "2020/07/08", to: "2020/07/17" });

    let maskDate = () => {
      const dateRegex = /\d{4}[/-]\d{2}[/-]\d{2}/;
      const rangeRegex = /\d{4}[/-]\d{2}[/-]\d{2} \- \d{4}[/-]\d{2}[/-]\d{2}/;
      const mask = (maskValue) => {
        if (rangeRegex.test(maskValue)) {
          return "####/##/## - ####/##/##";
        } else if (dateRegex.test(maskValue)) {
          return "####/##/##";
        } else {
          return "";
        }
      };
      return mask;
    };
    let searchClients = () => {
      console.log(`${city.value} + ${status.value} + ${date.value}`);
    };
    return {
      maskDate,
      city,
      optionsCity,
      status,
      optionsStatus,
      situation,
      optionsSituation,
      dateActivation,
      dateCancel,
      searchClients
    };
  }
};
</script>
