<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 5
      h1 Tableros estadísticos, informes y resultados de visualización
    
    .row.justify-content-center.mb-4
      .col-lg-12
        .bloque-texto-g.fondo-b.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/img/img405.svg')})`}"
          )
          .bloque-texto-g__texto.p-5.mt-3.mb-3
            p.mb-5 Los tableros estadísticos, también llamados cuadros de mandos o dashboard, permiten mostrar información consolidad a alto nivel. Los dashboard son las maneras más populares en BI de presentar datos, debido a que permite la compresión de manera sencilla los hechos del negocio y las situaciones presentadas.<br><br>
            p.mb-4.rojo #[b Los tableros estadísticos se centran en diferentes aspectos, como:]

            
    .row.justify-content-center.align-items-top.mb-0(data-aos="fade-left")
      .col-lg-3.col-sm-6.mb-5
        .caja1.p-4
          h4.mb-3 Emplear recursos gráficos
          p.mb-3 Emplear recursos gráficos como elemento principal para representar datos y cifras.
      .col-lg-3.col-sm-6.mb-5
        .caja2.p-4
          h4.mb-3 Presentar aspectos del negocio
          p.mb-3 Presentar aspectos del negocio de manera general, pero que con la interactividad pueda llegar al detalle hasta que los datos lo permitan.
      .col-lg-3.col-sm-6.mb-5
        .caja1.p-4
          h4.mb-3 Crear diseños amigables
          p.mb-3 Por lo general todas las herramientas permiten crear diseños muy atractivos visualmente y amigables para la navegación e interacción con los datos.
      .col-lg-3.col-sm-6.mb-5
        .caja2.p-4
          h4.mb-3 Generar actualizaciones
          p.mb-3 Por lo generalestos recursos permiten actualizaciones de manera fácil incluyendo o quitando datos o elementos visuales según las necesidades y sugerencias de los clientes o líderes.
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Tableros estadísticos como herramienta para monitorizar el negocio
        img.clase8.col-lg.d-none.d-lg-flex(src='@/assets/curso/img/clase2.svg' data-aos="fade-left")
    
    p.mb-4 Un #[b #[em dashboard]], permite visualizar de manera ágil y actualizada los procesos de negocio, pues muestra información clave de fácil entendimiento, los #[em dashboard] modernos tienen un “refresh de datos” casi en tiempo real, lo que les permite a las personas del nivel de decisión o coordinación tener el negocio y sus procesos a la mano con el detalle que requiera, permitiendo tomar con más velocidad las decisiones diarias.
    p.mb-4 #[b Los tableros de mando contienen los siguientes elementos:]
    
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-10
        .cajag.p-5 
          ul.lista-ul--color
            li.d-flex.mb-0
              i.fas.fa-check
              | Permiten empelar variedad de elementos (gráficos, tablas, alertas, mapas, etiquetas, etc.).
            li.d-flex.mb-0
              i.fas.fa-check
              | La interacción se aplica de manera integral a todos los elementos del tablero.
            li.d-flex.mb-0
              i.fas.fa-check
              | La información que se presenta se basa en indicadores claves del negocio, dando idea clara de cómo van las áreas o aspectos del negocio o proceso.
            li.d-flex.mb-0
              i.fas.fa-check
              | Exhibe las tendencias del negocio para tomar decisiones inteligentes, con base en datos y cifras.
            li.d-flex.mb-0
              i.fas.fa-check
              | Con la analítica predictiva, los tableros mostrarán hechos futuros con cierta precisión que ayudará también a la toma de decisiones más acertadas.
            

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Usuarios de los tableros de mando
        img.clase9.col-lg.d-none.d-lg-flex(src='@/assets/curso/img/clase2.svg' data-aos="fade-left")
    
    p.mb-4 #[b El perfil de los usuarios que usan estos #[em dashboard] son, por lo general:]
    
    .row.justify-content-center.mb-5 
      .col-sm-12.col-lg-10
        .cajag.p-5 
          ul.lista-ul--color
            li.d-flex.mb-0
              i.fas.fa-check
              | Alta dirección, con el objetivo de comprender lo que sucede en el negocio.
            li.d-flex.mb-0
              i.fas.fa-check
              | Gerentes, que deben monitorizar procesos de negocio.
            li.d-flex.mb-0
              i.fas.fa-check
              | Usuarios de negocio: estos necesitan realizar análisis exploratorio de datos.
    
    p.mb-4 En este sentido, los tableros o cuadros de mando aportan valor al nivel estratégico, táctico y operativo.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Informes y resultados de visualización
        img.clase10.col-lg.d-none.d-lg-flex(src='@/assets/curso/img/clase2.svg' data-aos="fade-left")
    
    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-5.col-md-8.col-8.mb-2
        img.mb-lg-0.mb-3(src="@/assets/curso/img/img105.svg" alt="tema2")
      .col-lg-7.col-md-12.col-12.mb-2
        .cajaa1.p-4.mb-4
          p.mt-4 Los #[em dashboard] no son la única manera de ver resultados del negocio o visualizar los datos. Cada área del negocio podría generar sus propios reportes a partir del desarrollo de BI, incluso desde la propia data #[em warehouse] se puede suministrar a usuarios, datos filtrados según sus interesas particulares del negocio, para que ellos mismos puedan elaborar sus reportes con los datos del despliegue analítico, garantizando que las cifras, independiente del área coincidan entre ellas.
    
    p.mb-4 Lo anterior, dando respuesta a que las organizaciones y los usuarios, cada vez más, tienen más habilidades digitales y dominio de herramientas analíticas así no sean usuarios informáticos propiamente dicho.
    p.mb-4 #[b En relación con los informes y resultados de visualización, tenga presente:]
    
    .tarjeta.tarjeta--azul.p-3
      SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
        .row.justify-content-center.p-4
          .col-lg-6.col-12.my-3
            h4.mb-4 Excel
            p.mb-3 La herramienta Excel, puede integrarse con bases de datos y otras herramientas de bases de datos que traigan las dimensiones para que los usuarios de Excel puedan realizar sus propios informes, imprimirlos o presentarlos, o simplemente para tomar decisiones con contexto. Estos OLAP se emplean con el mismo principio de tablas dinámicas o pivotes de datos.
          .col-lg-6.col-12  
            img(alt="tema1" src="@/assets/curso/img/imag10.svg")

        .row.justify-content-center.p-4
          .col-lg-6.col-12.my-3
            h4.mb-4 Los informes
            p.mb-3 Hablando propiamente de informes, es un paso más allá de lo que son los reportes analíticos. Las tendencias de estos informes son, incorporar mayores capacidades visuales, proporcionando mayor libertad a los responsables de área o procesos para la creación y consumo para incluir en los informes ampliados estos recursos en archivos PDF, o presentaciones Power Point o similares.
          .col-lg-6.col-12
            img(alt="tema1" src="@/assets/curso/img/img115.svg")

        .row.justify-content-center.p-4
          .col-lg-6.col-12.my-3
            h4.mb-4 #[em Reporting]
            p.mb-3 Las herramientas de informes o #[em reporting], permiten responder preguntas como ¿qué pasó?, debido a que es una de las primeras fases de la analítica descriptiva y que según las herramientas, se pueden generar o exportar cuando incluyen un motor de generación de informes.
          .col-lg-6.col-12
            img(alt="" src="@/assets/curso/img/img125.svg")




</template>

<script>
export default {
  name: 'Tema5',
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
