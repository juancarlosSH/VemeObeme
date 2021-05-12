<template>
  <v-container fluid class="pa-0 ma-0">
    <v-row>
      <v-col cols="12">
        <h2 class="font-weight-regular text-md-h3 text-center py-5">
          Descarga Veme-Obeme para tu dispositivo móvil
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <p class="font-weight-regular text-md-h5 text-center py-1">
          Veme-Obeme para Android
        </p>
      </v-col>
      <v-col cols="6">
        <p class="font-weight-regular text-md-h5 text-center py-1">
          Veme-Obeme para iPhone
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" class="d-flex justify-center align-center">
        <v-img
          lazy-src="../assets/android.png"
          max-width="200"
          max-height="400"
          src="../assets/android.png"
        ></v-img>
      </v-col>
      <v-col cols="6" class="d-flex justify-center align-center">
        <v-img
          lazy-src="../assets/iphone.png"
          max-width="200"
          max-height="400"
          src="../assets/iphone.png"
        ></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" class="d-flex justify-center align-center">
        <v-btn text large href="https://play.google.com/store">
          <v-img
            lazy-src="../assets/playstore.png"
            max-width="150"
            max-height="100"
            src="../assets/playstore.png"
          ></v-img>
        </v-btn>
      </v-col>
      <v-col cols="6" class="d-flex justify-center align-center">
        <v-btn text large href="https://www.apple.com/mx/app-store/">
          <v-img
            lazy-src="../assets/appstore.png"
            max-width="150"
            max-height="100"
            src="../assets/appstore.png"
          ></v-img>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2 class="font-weight-regular text-md-h3 text-center py-5">
          ¿Por qué colaborar con nosotros?
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" class="d-flex justify-center">
        <v-img
          lazy-src="@/assets/mejora.png"
          max-width="150"
          max-height="150"
          src="@/assets/mejora.png"
        ></v-img>
      </v-col>
      <v-col cols="4" class="d-flex justify-center">
        <v-img
          lazy-src="@/assets/seguridad.png"
          max-width="150"
          max-height="150"
          src="@/assets/seguridad.png"
        ></v-img>
      </v-col>
      <v-col cols="4" class="d-flex justify-center">
        <v-img
          lazy-src="@/assets/anonimato.png"
          max-width="150"
          max-height="150"
          src="@/assets/anonimato.png"
        ></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" class="text-center">
        <p class="font-weight-regular pt-4 text-md-h6">Mejora</p>
        <p class="font-weight-regular text-md-h6">
          Desde aquí podrás contribuir a mejorar la educación médica
        </p>
      </v-col>
      <v-col cols="4" class="text-center">
        <p class="font-weight-regular pt-4 text-md-h6">
          Seguridad
        </p>
        <p class="font-weight-regular text-md-h6">
          Tus datos están siempre protegidos, tú información es confidencial
        </p>
      </v-col>
      <v-col cols="4" class="text-center">
        <p class="font-weight-regular pt-4 text-md-h6">
          Anonimato
        </p>
        <p class="font-weight-regular text-md-h6">
          Tus registros de observaciones son anónimos, no temas represalias
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Downloads",
});
</script>
