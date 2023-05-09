<template>
  <q-card class="q-pa-sm">
    <q-card-section>
      <div class="text-h6">Envio de Mensagens</div>
      <div class="text-subtitle2">Disparo de mensagens de áudio e texto</div>
    </q-card-section>
    <q-card-section>
      <div class="row q-col-gutter-sm">
        <div class="col-xs-12 col-sm-6 col-md-3">
          <q-select
            filled
            dense
            v-model="city"
            :options="optionsCity"
            label="Cidade"
          />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3">
          <q-select
            filled
            dense
            v-model="status"
            :options="optionsStatus"
            label="Status"
          />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3">
          <q-select
            filled
            dense
            v-model="situation"
            :options="optionsSituation"
            label="Situação"
          />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3">
          <q-input
            filled
            v-model="dateActivationRange"
            type="text"
            dense
            label="Data Ativação"
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
        <div class="col-xs-12 col-sm-6 col-md-3">
          <q-input
            filled
            v-model="dateCancelRange"
            dense
            label="Data Cancelamento"
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
        <div class="col-xs-12 col-sm-6 col-md-3">
          <q-input
            filled
            v-model="dateBirthRange"
            dense
            label="Data Nascimento"
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
        <div class="col-xs-12 col-sm-6 col-md-3">
          <q-select
            filled
            dense
            v-model="day"
            :options="optionsDay"
            label="Dia de vencimento"
          />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3">
          <q-btn color="primary" icon="search" @click="searchClients" />
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { ref, computed, watch } from "vue";
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
    let dateActivation = ref({ from: "", to: "" });
    let dateActivationRange = ref("");
    dateActivationRange.value =
      typeof dateActivation.value == "object"
        ? dateActivation.value.from + " - " + dateActivation.value.to
        : dateActivation.value;
    let dateCancel = ref({ from: "", to: "" });
    let dateCancelRange = ref("");
    dateCancelRange.value =
      typeof dateCancel.value == "object"
        ? dateCancel.value.from + " - " + dateCancel.value.to
        : dateCancel.value;
    let dateBirth = ref({ from: "", to: "" });
    let dateBirthRange = ref("");
    dateBirthRange.value =
      typeof dateBirth.value == "object"
        ? dateBirth.value.from + " - " + dateBirth.value.to
        : dateBirth.value;
    let day = ref("");
    let optionsDay = computed({
      get: () => $store.state.sendMessage.optionsDay
    });

    let searchClients = () => {
      console.log(`${city.value} + ${status.value}`);
    };

    watch(dateActivation, (newValue, oldValue) => {
      dateActivationRange.value =
        typeof newValue == "object"
          ? newValue.from + " - " + newValue.to
          : newValue;
    });
    watch(dateCancel, (newValue, oldValue) => {
      dateCancelRange.value =
        typeof newValue == "object"
          ? newValue.from + " - " + newValue.to
          : newValue;
    });
    watch(dateBirth, (newValue, oldValue) => {
      dateBirthRange.value =
        typeof newValue == "object"
          ? newValue.from + " - " + newValue.to
          : newValue;
    });

    return {
      city,
      optionsCity,
      status,
      optionsStatus,
      situation,
      optionsSituation,
      dateActivation,
      dateCancel,
      dateBirth,
      dateActivationRange,
      dateCancelRange,
      dateBirthRange,
      day,
      optionsDay,
      searchClients
    };
  }
};
</script>
