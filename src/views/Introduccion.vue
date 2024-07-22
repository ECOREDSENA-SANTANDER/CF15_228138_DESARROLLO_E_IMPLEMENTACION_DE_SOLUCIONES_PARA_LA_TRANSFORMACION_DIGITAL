<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
      
    .row.justify-content-center.align-items-top.mb-0
      .col-lg-5.col-md-9.col-9
        img.mb-3(src="@/assets/curso/img/img1.svg" alt="")
      .col-lg-7.col-12.my-3
        .cajon.color-secundario.p-4.my-4
          p.mb-0 Se da la bienvenida al estudio del componente formativo 
            strong.rojo “Analítica de datos y visualización”
            | . Para comenzar satisfactoriamente esta experiencia de aprendizaje, se le invita a explorar el video que se muestra a continuación. 
            strong.rojo ¡Adelante!
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/y1yZU2D6MEg?si=tWT6SUbHZV6wO6er" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
          figcaption Video. Introducción Analítica de datos y visualización

      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
