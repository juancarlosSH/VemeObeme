<template>
  <v-app>
    <v-app-bar app flat color="blue darken-2" absolute>
      <v-container fluid class="pa-0 ma-0">
        <v-row>
          <v-col cols="4" class="d-flex justify-start align-center">
            <v-img
              lazy-src="@/assets/icono.svg"
              max-height="52"
              max-width="52"
              src="@/assets/icono.svg"
            ></v-img>
            <div class="text--white">
              <h1 class="text-md-h6 font-weight-regular white--text px-4">
                Veme - Obeme
              </h1>
            </div>
          </v-col>
          <v-col cols="4" class="d-flex justify-center align-center">
            <v-btn
              v-for="(link, index) in links"
              :key="index"
              :to="{ name: link.route }"
              text
              dark
              exact
              >{{ link.name }}</v-btn
            >
          </v-col>
          <v-col cols="4" class="d-flex justify-end align-center">
            <!-- <v-btn :to="{ name: 'Login' }" dark outlined rounded exact>
              Acceso Administrador
            </v-btn> -->
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container fluid class="pa-0">
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app absolute color="blue darken-2">
      <v-card-text class="white--text pt-0">
        © 2020 Universidad Veracruzana. Todos los derechos reservados.
      </v-card-text>
      <v-card-text class="white--text pt-0">
        {{ new Date().getFullYear() }} — Dirección: Lomas del Estadio s/n C.P.
        91000 Xalapa, Veracruz, México
      </v-card-text>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    links: [
      { name: "Inicio", route: "Home" },
      { name: "Observaciones", route: "Observations" },
      //{name: 'Estadistícas', route: 'Statistics'},
      { name: "Descargas", route: "Downloads" },
      //{name: 'Contacto', route: 'Contact'},
    ],
  }),
});
</script>
