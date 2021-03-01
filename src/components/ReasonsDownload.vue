<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <div class="text-md-h4 text-center">
          ¿Por qué colaborar con nosotros?
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="2">
        <v-img
            lazy-src="../assets/mejora.png"
            max-width="150"
            max-height="150"
            src="../assets/mejora.png"></v-img>
      </v-col>
      <v-col cols="1"></v-col>
      <v-col cols="2">
        <v-img
            lazy-src="../assets/seguridad.png"
            max-width="150"
            max-height="150"
            src="../assets/seguridad.png"></v-img>
      </v-col>
      <v-col cols="1"></v-col>
      <v-col cols="2">
        <v-img
            lazy-src="../assets/anonimato.png"
            max-width="150"
            max-height="150"
            src="../assets/anonimato.png"></v-img>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="2">
        <div class="text-md-body-1">
          Mejora
        </div>
        <div class="text-md-body-1">
          Desde aquí podrás contribuir a
          mejorar la educación médica
        </div>
      </v-col>
      <v-col cols="1"></v-col>
      <v-col cols="2">
        <div class="text-md-body-1">
          Seguridad
        </div>
        <div class="text-md-body-1">
          Tus datos están siempre
          protegidos, tú información es
          confidencial
        </div>
      </v-col>
      <v-col cols="1"></v-col>
      <v-col cols="2">
        <div class="text-md-body-1">
          Anonimato
        </div>
        <div class="text-md-body-1">
          Tus registros de observaciones
          son anónimos, no temas
          represalías
        </div>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
export default {
  name: "ReasonsDownload"
}
</script>

<style scoped>

</style>