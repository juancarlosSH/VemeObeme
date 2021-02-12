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
      <v-col cols="4" align-self="center">
        <v-row>
          <v-col cols="4"></v-col>
          <v-col cols="4">
            <v-img
                lazy-src="../assets/mejora.png"
                max-width="125"
                max-height="125"
                src="../assets/mejora.png"
            ></v-img>
          </v-col>
          <v-col cols="4"></v-col>
        </v-row>
        <v-row>
          <v-col align-self="center">
            <div class="text-center">
              <p class="text-md-body-2">
                Mejora
              </p>
              <p class="text-md-body-2">
                Desde aquí podrás contribuir a
                mejorar la educación médica
              </p>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4" align-self="center">
        <v-row>
          <v-col cols="4"></v-col>
          <v-col cols="4">
            <v-img
                lazy-src="../assets/seguridad.png"
                max-width="125"
                max-height="125"
                src="../assets/seguridad.png"
            ></v-img>
          </v-col>
          <v-col cols="4"></v-col>
        </v-row>
        <v-row>
          <v-col align-self="center">
            <div class="text-center">
              <p class="text-md-body-2">
                Seguridad
              </p>
              <p class="text-md-body-2">
                Tus datos están siempre
                protegidos, tú información es
                confidencial
              </p>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4">
        <v-row>
          <v-col cols="4"></v-col>
          <v-col cols="5">
            <v-img
                lazy-src="../assets/anonimato.png"
                max-width="140"
                max-height="140"
                src="../assets/anonimato.png"
            ></v-img>
          </v-col>
          <v-col cols="3"></v-col>
        </v-row>
        <v-row>
          <v-col align-self="center">
            <div class="text-center">
              <p class="text-md-body-2">
                Anonimato
              </p>
              <p class="text-md-body-2">
                Tus registros de observaciones
                son anónimos, no temas
                represalías
              </p>
            </div>
          </v-col>
        </v-row>
      </v-col>
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