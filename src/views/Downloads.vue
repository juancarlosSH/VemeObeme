<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <div class="text-md-h4 text-center">
          Descarga Veme-Obeme para tu dispositivo móvil
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <div class="text-md-body-1 text-center">
          Veme-Obeme para Android
        </div>
      </v-col>
      <v-col cols="6">
        <div class="text-md-body-1 text-center">
          Veme-Obeme para iPhone
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="2">
        <v-img
            lazy-src="../assets/android.png"
            max-width="200"
            max-height="400"
            src="../assets/android.png"
        ></v-img>
      </v-col>
      <v-col cols="4"></v-col>
      <v-col cols="2">
        <v-img
            lazy-src="../assets/iphone.png"
            max-width="200"
            max-height="400"
            src="../assets/iphone.png"
        ></v-img>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="2">
        <v-btn
            text
            large
            href="https://play.google.com/store">
          <v-img
              lazy-src="../assets/playstore.png"
              max-width="150"
              max-height="100"
              src="../assets/playstore.png"
          ></v-img>
        </v-btn>
      </v-col>
      <v-col cols="4"></v-col>
      <v-col cols="2">
        <v-btn
            text
            large
            href="https://play.google.com/store">
          <v-img
              lazy-src="../assets/appstore.png"
              max-width="150"
              max-height="100"
              src="../assets/appstore.png"
          ></v-img>
        </v-btn>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
    <v-row>
      <ReasonsDownload></ReasonsDownload>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import ReasonsDownload from "@/components/ReasonsDownload.vue";

export default Vue.extend({
  name: 'Downloads',
  components: {
    ReasonsDownload,
  },
});
</script>

<style scoped>

</style>