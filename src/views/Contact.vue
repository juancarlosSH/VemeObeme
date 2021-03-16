<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card flat color="green lighten-4">
          <v-card-title>
            Contacto
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-row>
          <v-col cols="2"></v-col>
          <v-col cols="8">
            <div class="text--primary">
              En Veme OBEME nos interesa lo que tengas que decir, si tienes en
              mente alguna opinión o sugerencia o deseas incorporarte al
              proyecto, ponte en contacto con nosotros a través del formulario
              de solicitud, o para cualquier aclaración mediante nuestras
              fuentes de contacto:
            </div>
          </v-col>
          <v-col cols="2"></v-col>
        </v-row>
        <v-row>
          <v-col cols="2"></v-col>
          <v-col cols="8">
            <v-btn text>
              <v-img lazy-src="" max-height="" max-width="" src=""></v-img>
            </v-btn>
          </v-col>
          <v-col cols="2"></v-col>
        </v-row>
      </v-col>
      <v-col cols="6"></v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
export default {
  name: "Contact",
};
</script>

<style scoped></style>
