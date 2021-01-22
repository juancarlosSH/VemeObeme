<template>
  <v-container fluid>
    <v-row>
      <v-col cols="2">
        <v-combobox
            color="grey lighten-1"
            label="Institución de salud"
            clearable
            filled
            hide-selected
            outlined
            dense
        ></v-combobox>
      </v-col>
      <v-col cols="2">
        <v-combobox
            color="grey lighten-1"
            label="Tipo de estudiante"
            clearable
            filled
            hide-selected
            outlined
            dense
        ></v-combobox>
      </v-col>
      <v-col cols="2">
        <v-combobox
            color="grey lighten-1"
            label="Universidad"
            clearable
            filled
            hide-selected
            outlined
            dense
        ></v-combobox>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
export default {
  name: "ObservationsHeader",
  data: () => ({

  }),
}
</script>

<style scoped>

</style>