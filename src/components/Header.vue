<template>
  <v-container>
    <v-app-bar
        app
        flat
        color="#17519C"
    >
      <v-img
          lazy-src="../assets/icono.svg"
          max-height="52"
          max-width="52"
          src="../assets/icono.svg"
      ></v-img>
      <v-spacer></v-spacer>
      <v-btn
          v-for="link in links"
          :key="link"
          :to="{name: link[1]}"
          text
          color="white"
      >{{link[0]}}</v-btn>
      <v-spacer></v-spacer>
<!--      <v-btn
          :to="{name: 'Login'}"
          color="white"
          outlined
          rounded
      >Acceso Administrador</v-btn>-->
    </v-app-bar>
  </v-container>
</template>

<script lang="ts">
export default {
  name: "Header",
  data: ()  => ({
    links: [
      ['Inicio','Home'],
      ['Observaciones', 'Observations'],
      // ['Estadistícas', 'Statistics'],
      ['Descargas', 'Downloads'],
      // ['Contacto', 'Contact'],
    ],
  }),
}
</script>

<style scoped>

</style>