<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1 Modelos y metodologías de analítica

    .row.justify-content-center.mb-4
      .col-lg-12
        .bloque-texto-g.fondo-b.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/img/img1.png')})`}"
          )
          .bloque-texto-g__texto.p-5.mt-3.mb-3
            p.mb-0 A partir del contexto de la inteligencia de negocio, se debe comenzar por entender bien los requerimientos específicos de las soluciones analíticas; si bien toma muchos elementos del desarrollo del #[em software] e incluso, se toma como una rama del desarrollo de aplicaciones informáticas, hay ciertas especificidades en los requisitos para la toma de decisiones que se deben asumir.
    
  
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 Los desarrollos de #[em software] se limitan a cumplir los requisitos de un área o un proceso determinado, como una isla en la empresa, donde no se integra información, ni formatos. Hoy en día, aún las empresas usan sistemas para cada área, por ejemplo, contabilidad, recursos humanos, área financiera, ventas, ofertas, #[em marketing], producción, etc.
      
    p.mb-4 #[b En los modelos y metodologías de analítica, se debe tener presente:]

    .tarjeta.tarjeta--azul.p-3.mb-5
      SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
        .row.justify-content-center.p-4
          .col-lg-6.col-12.my-3
            h4.mb-4 Manejo integral
            p.mb-3 Cada área, puede manejar su sistema de información por aparte, sin tener en cuenta integraciones o calidad de la información, generando muchísimos datos, pero sin explotar de manera óptima su riqueza escondida, la cual pudiera tener si se gestiona de manera integral y usando técnicas y tecnologías de la cuarta revolución industrial.
          .col-lg-6.col-12  
            img(alt="tema1" src="@/assets/curso/img/img2.svg")

        .row.justify-content-center.p-4
          .col-lg-6.col-12.my-3
            h4.mb-4 Implementación con propósito
            p.mb-3 Al momento de pensar en una solución de analítica de negocio, es fundamental tener todas las preguntas que tanto el nivel de decisión, como el nivel operativo requieren.
          .col-lg-6.col-12
            img(alt="tema1" src="@/assets/curso/img/img3.svg")

        .row.justify-content-center.p-4
          .col-lg-6.col-12.my-3
            h4.mb-4 Conciencia institucional
            p.mb-3 Cuando las organizaciones no tengan claridad sobre el uso del BI en el negocio, es necesario concientizar a los directivos que muchos problemas de la organización se deben a la falta de datos al instante, actualizados y que reflejen una realidad.
          .col-lg-6.col-12
            img(alt="" src="@/assets/curso/img/img4.svg")

        .row.justify-content-center.p-4
          .col-lg-6.col-12.my-3
            h4.mb-4 Oportunidad y practicidad
            p.mb-3 Si se toma como ejemplo, una feria de negocios importante, donde se presentan grandes oportunidades de conectar con clientes grandes, se espera que lleguen representantes de otras firmas; mientras, de manera tradicional, se trabaja confiando en la memoria y vagamente el ejecutivo de ventas recuerda que alguna vez su empresa ya había hecho negocios con este cliente que se acerca.
          .col-lg-6.col-12
            img(alt="" src="@/assets/curso/img/img6.svg")

        .row.justify-content-center.p-4
          .col-lg-6.col-12.my-3
            h4.mb-4 Actualización y equipamiento para la labor
            p.mb-3 Cuando las empresas tienen implementado un sistema de inteligencia de negocios, es de gran valor comercial, que el representante de ventas de la organización tenga en su dispositivo electrónico (celular, tableta, etc.), los datos de todos los clientes y sus historiales para que, con una búsqueda muy rápida, tenga de inmediato en pantalla, información que podría ser clave para conectar con nuevos clientes.
          .col-lg-6.col-12
            img(alt="" src="@/assets/curso/img/img5.svg")

    p.mb-4 Una de las condiciones iniciales más importantes son las preguntas, es decir, qué se necesita saber del negocio, qué decisiones se planean tomar y qué insumos se requieren para la toma de estas decisiones.
    strong.mb-5 En sí, se deben seleccionar varios elementos para el desarrollo de soluciones analíticas, tales como:    

    
    .row.justify-content-center
      .col-lg-4.col-md-8.my-3
        .bg11.p-2.bg-card.bg-img-1.d-flex.px-3.he-6-cus.flex-column
          img.w-auto-cus.bg12.px-3.py-1.mx-3.my-3.mb-4(src='@/assets/curso/img/img01.svg' )
          .wd-100
            p.ml-1-custom #[b Metodología de desarrollo]
            p.ml-1-custom Se recomienda elegir una de las metodologías ágiles y registrar todos los requerimientos y planeación, según el rol que cumpla en el proyecto.
      .col-lg-4.col-md-8.my-3
        .bg11.p-2.bg-card.bg-img-2.d-flex.px-3.he-6-cus.flex-column
          img.w-auto-cus.bg12.px-3.py-1.mx-3.my-3.mb-4(data-aos="zoom-in")(src='@/assets/curso/img/img02.svg' )
          .wd-100
            p.ml-1-custom #[b Elegir herramienta de control y trazabilidad]
            p.ml-1-custom.mb-4 Para llevar control y trazabilidad de todo el desarrollo del proyecto en relación de equipos de trabajo, funciones, actividades hechas, en proceso y pendientes. Trello y Jira son buena opción, existiendo otras más.
      .col-lg-4.col-md-8.my-3
        .bg11.p-2.bg-card.bg-img-3.d-flex.px-3.he-6-cus.flex-column
          img.w-auto-cus.bg12.px-3.py-1.mx-3.my-3.mb-4(data-aos="zoom-in")(src='@/assets/curso/img/img03.svg' )
          .wd-100
            p.ml-1-custom #[b Herramientas de desarrollo]
            p.ml-1-custom.mb-4 Si bien se ha hablado mucho de infraestructura y herramientas, en este caso habrá que concentrarse en la capa de visualización de datos, según la herramienta elegida, dando ciertas pautas para seguir el modelo de diseño.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
