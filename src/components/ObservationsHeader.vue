<template>
  <v-container fluid>
    <v-row>
      <v-col cols="2">
        <v-combobox
            color="#0288D1"
            label="Institución de salud"
            clearable
            filled
            hide-selected
            outlined
            dense
            :items="healUnits"
        ></v-combobox>
      </v-col>
      <v-col cols="2">
        <v-combobox
            color="#0288D1"
            label="Tipo de estudiante"
            clearable
            filled
            hide-selected
            outlined
            dense
            :items="studentsType"
        ></v-combobox>
      </v-col>
      <v-col cols="2">
        <v-combobox
            color="#0288D1"
            label="Universidad"
            clearable
            filled
            hide-selected
            outlined
            dense
            :items="universities"
        ></v-combobox>
      </v-col>
      <v-col cols="3">
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
              color="#0288D1"
              v-model="dateRangeText"
              label="Fecha de inicio y fecha de fin"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            ref="picker"
            v-model="dates"
            color="#66BB6A"
            header-color="#0288D1"
            :max="new Date().toISOString().substr(0, 10)"
            range
            @change="save"
          ></v-date-picker>
        </v-menu>
      </v-col>
      <v-col cols="2">
        <v-btn
          color="#66BB6A"
          text
          outlined
        >
          Consultar
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
export default {
  name: "ObservationsHeader",
  data: () => ({
    dates: [new Date().toISOString().substr(0, 10), new Date().toISOString().substr(0, 10)],
    menu: false,
    healUnits: [],
    studentsType: [],
    universities: [],
  }),
  created() {
    this.getHealthUnits();
  },
  computed: {
    dateRangeText () {
      return this.dates.join(' ~ ')
    },
  },
  watch: {
    menu (val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
    },
  },
  methods: {
    save (dates) {
      this.$refs.menu.save(dates)
    },
    async getHealthUnits(){
      try {
        const healthUnits = await this.axios.get('unidades');
        await healthUnits.data.forEach(element => {
          let item: string = element.nombre.rendered;
          this.healUnits.push(item);
        })
      }catch (error: string){
        console.log(error);
      }
    },
    async getStudentsType(){
      try {
        const studentsType = await this.axios.get('tiposestancia');
        await studentsType.data.forEach(element => {
          let item: string = element.nombre.rendered;
          this.studentsType.push(item);
        })
      }catch (error: string){
        console.log(error);
      }
    },
    async getUniversities(){
      try {
        const universities = await this.axios.get('universidades/1');
        await universities.data.forEach(element => {
          let item: string = element.nombre.rendered;
          this.universities.push(item);
        })
      }catch (error: string){
        console.log(error);
      }
    },
  },
}
</script>

<style scoped>

</style>