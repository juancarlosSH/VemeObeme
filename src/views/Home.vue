<template>
  <div>
    <v-card flat color="green lighten-4">
      <v-row>
        <v-col cols="8">
          <v-card-title>
            <h1 class="font-weight-regular">¡Bienvenido a Veme Obeme!</h1>
          </v-card-title>
          <v-card-text class="text-justify font-weight-regular pa-4 text-md-h6">
            <p>Aquí encontraras el registro de las observaciones realizadas por
              internos, pasantes y residentes de medicina, sobre el proceso educativo
              en las unidades de salud en México. Si cursas el internado médico, el
              servicio social o la residencia y deseas opinar sobre las fortalezas y
              oportunidades de la educación médica en las unidades de salud de México,
              te invitamos a colaborar con nosotros a través de la aplicación móvil.</p>
          </v-card-text>
          <v-card-actions class="px-5">
            <v-btn :to="{name: 'Downloads'}" color="green lighten-2"
            >Descarga la aplicación móvil</v-btn>
          </v-card-actions>
        </v-col>
        <v-col cols="4" class="d-flex flex-row-reverse">
          <v-img
            lazy-src="../assets/InicioCel.png" max-width="400" max-height="400" src="../assets/InicioCel.png"
          ></v-img>
        </v-col>
      </v-row>
    </v-card>
    <welcome></welcome>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Welcome from '../components/Welcome.vue';

export default Vue.extend({
  name: 'Home',

  components: {
    Welcome,
  },
});
</script>
