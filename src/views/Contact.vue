<template>
  <v-container fluid class="pa-0 ma-0">
    <v-row>
      <v-col cols="12">
        <v-card flat color="green lighten-4">
          <v-card-title>
            <h2 class="font-weight-regular">Contáctanos</h2>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" class="d-flex flex-column justify-start">
        <p class="text-justify font-weight-regular text-md-h6 px-4 ma-4">
          En Veme OBEME nos interesa lo que tengas que decir, si tienes en mente
          alguna opinión, sugerencia o si deseas incorporarte al proyecto, ponte
          en contacto con nosotros a través del formulario de solicitud, o para
          cualquier aclaración mediante nuestras fuentes de contacto:
        </p>
        <v-card flat class="d-flex justify-start align-center pa-4 ma-4">
          <v-img
            lazy-src="../assets/mundo.svg"
            max-height="64"
            max-width="64"
            src="../assets/mundo.svg"
          ></v-img>
          <a
            href="https://www.uv.mx/Obeme/"
            class="font-weight-regular text-md-h5 px-4"
            >Obeme</a
          >
        </v-card>
        <v-card flat class="d-flex justify-start align-center pa-4 ma-4">
          <v-img
            lazy-src="../assets/facebook.svg"
            max-height="64"
            max-width="64"
            src="../assets/facebook.svg"
          ></v-img>
          <a
            href="https://www.facebook.com/obemedh"
            class="font-weight-regular text-md-h5 px-4"
            >@Obemedh</a
          >
        </v-card>
        <v-card flat class="d-flex justify-start align-center pa-4 ma-4">
          <v-img
            lazy-src="../assets/email.svg"
            max-height="64"
            max-width="64"
            src="../assets/email.svg"
          ></v-img>
          <a
            href="mailto:obeme@uv.mx"
            class="font-weight-regular text-md-h5 px-4"
            >obeme@uv.mx</a
          >
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-form></v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Contact",

  data() {
    return {
      contactData: [
        {
          imageLink: "../assets/mundo.svg",
          link: "https://www.uv.mx/Obeme/",
          name: "Obeme",
        },
        {
          imageLink: "../assets/facebook.svg",
          link: "https://www.facebook.com/obemedh",
          name: "@Obemedh",
        },
        {
          imageLink: "../assets/email.svg",
          link: "mailto:obeme@uv.mx",
          name: "obeme@uv.mx",
        },
      ],
    };
  },
});
</script>
