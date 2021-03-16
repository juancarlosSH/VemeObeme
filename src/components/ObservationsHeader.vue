<template>
  <div>
    <v-row class="d-flex justify-start align-center px-5">
      <v-col cols="2">
        <v-overflow-btn
          dense
          menu-props="top"
          item-value="text"
          label="Unidad de salud"
          hint="Selecciona una unidad de salud"
          :items="healUnits"
        ></v-overflow-btn>
      </v-col>
      <v-col cols="2">
        <v-overflow-btn
          dense
          menu-props="top"
          item-value="text"
          label="Tipo de estudiante"
          hint="Selecciona una tipo de estudiante"
          :items="studentsType"
        ></v-overflow-btn>
      </v-col>
      <v-col cols="2">
        <v-overflow-btn
          dense
          menu-props="top"
          item-value="text"
          label="Universidad"
          hint="Selecciona una universidad"
          :items="universities"
        ></v-overflow-btn>
      </v-col>
      <v-col cols="3">
        <div>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="dateRangeText"
                label="Rango de fechas"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                color="blue darken-2"
              ></v-text-field>
            </template>
            <v-date-picker
              ref="picker"
              v-model="dates"
              :max="new Date().toISOString().substr(0, 10)"
              min="1950-01-01"
              @change="save"
              header-color="blue darken-2"
              color="green lighten-1"
              range
            ></v-date-picker>
          </v-menu>
        </div>
      </v-col>
      <v-col cols="2">
        <v-btn color="green lighten-1" outlined>
          Consultar
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapActions } from "vuex";
import { server } from "@/utils/request";

export default Vue.extend({
  name: "ObservationsHeader",

  data() {
    return {
      dates: [
        new Date().toISOString().substr(0, 10),
        new Date().toISOString().substr(0, 10),
      ],
      menu: false,
    };
  },

  methods: {
    save: function(dates: any) {
      this.$refs.menu.save(dates);
    },
  },

  computed: {
    ...mapState(["healUnits", "studentsType", "universities"]),
    ...mapActions(["getHealthUnits", "getStudentsType", "getUniversities"]),
    dateRangeText(): any {
      return this.dates.join(" ~ ");
    },
  },

  watch: {
    menu(val: any) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    },
  },

  mounted() {
    this.getHealthUnits;
    this.getStudentsType;
    this.getUniversities;
  },
});
</script>
