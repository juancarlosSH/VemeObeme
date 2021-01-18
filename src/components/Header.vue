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
          :to="{name: 'Home'}"
          text
          color="white"
      >Inicio</v-btn>
      <v-btn
          :to="{name: 'Observations'}"
          text
          color="white"
      >Observaciones</v-btn>
      <v-btn
          :to="{name: 'Statistics'}"
          text
          color="white"
      >Estadistícas</v-btn>
      <v-btn
          :to="{name: 'Downloads'}"
          text
          color="white"
      >Descargas</v-btn>
      <v-btn
          :to="{name: 'Contact'}"
          text
          color="white"
      >contacto</v-btn>
      <v-spacer></v-spacer>
      <v-btn
          :to="{name: 'Login'}"
          color="white"
          outlined
          rounded
      >Acceso Administrador</v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: "NavBar",
  data: ()  => ({
    links: [
      'Inicio',
      'Observaciones',
      'Estadistícas',
      'Descargas',
      'Contacto',
    ],
  }),
}
</script>

<style scoped>

</style>