<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 2
      h1 Aprendizaje automático (#[em machine learning])
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-4.col-md-8.col-8.mb-3
        img.img-a.img-t(src="@/assets/curso/img/img10.png" alt="tema2")
      .col-lg-8.col-md-12.col-12.mb-3
        p.mb-3 En la vida cotidiana de un hogar promedio actual, podría ocurrir fácilmente que un niño de escuela, mientras hace sus tareas, pregunte en voz alta: "¿Cuántos departamentos tiene Colombia?". El padre, quien tradicionalmente debería saber la respuesta, recuerda que son 33 departamentos. Sin embargo, mientras se asegura de su respuesta, el dispositivo electrónico Alexa interrumpe primero, proporcionando la respuesta correcta de 32 departamentos.
        .cajac.p-4.mb-2
          .col-lg-7
          .row.d-flex.align-items-center.justify-content-center
            .col-lg-2
              img.img-a.img-t.d-none.d-lg-block(data-aos="zoom-in")(src='@/assets/curso/img/nueva.svg', alt='tema2')
            .col-lg-10 
              p.mb-0 Adicionalmente, amplía esta información con algunos datos complementarios. En este instante, la inteligencia artificial, es tomada como fuente de información rápida y confiable. Es así como los padres y profesores, que han sido tradicionalmente las fuentes de conocimiento, van siendo desplazados en este sentido (para adquirir conocimientos), y empiezan otros retos y roles igual de importantes que deben asumir.
    
    p.mb-4 #[b En relación con el aprendizaje automático, es importante tener en cuenta aspectos como:]
    
    .tarjeta.tarjeta--azul.p-3.mb-0
      SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
        .row.justify-content-center.p-4
          .col-lg-6.col-12.my-3
            h4.mb-4 Avance y actualización permanentes
            p.mb-3 La Inteligencia Artificial seguirá avanzando, las organizaciones y personas las seguirán asumiendo y consumiendo en su diario vivir, debido a que se encuentra en celulares, carros, compras, gestiones de gobierno, app, bancos, medios de comunicación, etc.
          .col-lg-6.col-12 
            img(alt="tema1" src="@/assets/curso/img/img010.png")

        .row.justify-content-center.p-4
          .col-lg-6.col-12.my-3
            h4.mb-4 Apropiación y adaptación de las personas
            p.mb-3 La mayoría de las empresas y personas, en medio de la inmersión de diario vivir, ocasionan aumento de las habilidades digitales en los individuos, muchas veces de manera natural, sin enterarnos, esto nos hace más exigentes para la solución de problemas, gestión de procesos, así como conocedores de la tecnología.
          .col-lg-6.col-12
            img(alt="tema1" src="@/assets/curso/img/img020.png")

        .row.justify-content-center.p-4
          .col-lg-6.col-12.my-3
            h4.mb-4 Mejoras industriales
            p.mb-3 Los avances empresariales bajo el contexto de la cuarta revolución industrial, se van entendiendo mejor, aceptando y asumiéndolos en sus organizaciones. Algo similar debió pasar cuando llegó la electricidad al mundo, algunas personas y organizaciones no lo veían necesario sino complementario, como piensan actualmente, de la tecnología, algunas personas. No obstante, desde hace muchas décadas, la electricidad no es un elemento que se debata en un hogar o una organización.
          .col-lg-6.col-12
            img(alt="" src="@/assets/curso/img/img030.png")

        .row.justify-content-center.p-4
          .col-lg-6.col-12.my-3
            h4.mb-4 La IA como representación de la inteligencia humana
            p.mb-3 La IA está fundamentada en una serie de algoritmos y métodos inspirados en procesos propios del cerebro, es decir, la programación se basa en entradas de datos. El #[em software] se programa para realizar procesos y asociar datos en tablas y organizar, sumar o dar reportes. Es un asunto más mecánico y de ejecutar pasos establecidos.
          .col-lg-6.col-12
            img(alt="" src="@/assets/curso/img/img040.png")

        .row.justify-content-center.p-4
          .col-lg-6.col-12.my-3
            h4.mb-4 Inteligencia con poder de decisión, aprendizaje y predicción
            p.mb-3 En cierta manera, los cálculos y guardar datos también son características del cerebro, sin embargo, existen otras donde la programación ha avanzado ostensiblemente en los últimos años. Si el algoritmo tiene poder de decisión, aprendizaje, predicción, usa lenguaje natural humano y automatiza tareas, es un componente de IA.
          .col-lg-6.col-12 
            img(alt="" src="@/assets/curso/img/img050.png")

        .row.justify-content-center.p-4
          .col-lg-6.col-12.my-3
            h4.mb-4 Frecuencia y utilidad
            p.mb-3 La IA es una rama de las ciencias informáticas, si bien, la tecnología en analítica de datos no se enfoca al desarrollo de redes neuronales o aprendizajes de máquina, es interesante saber de qué se trata, porque, aunque no se programen estos sistemas, es una realidad el uso frecuente y útil de herramientas sofisticadas a las cuales conectamos nuestros datos, y nos pueden dar conocimientos importantes a partir de la IA.
          .col-lg-6.col-12 
            img(alt="" src="@/assets/curso/img/img060.png")

    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Aprendizaje supervisado

    p.mb-4 #[em Machine Learning] (ML) es el área de las ciencias computacionales que hace parte de la IA, su enfoque es que las computadoras, en vez de ser programadas paso a paso, aprendan a partir de los datos. Cada solución de ML es específica para cada necesidad, tal y como se tiene el enfoque con la programación convencional. Los profesionales de ML están dedicados al desarrollo de algoritmos genéricos que pueden extraer patrones de diferentes tipos de datos.
    
    .row.justify-content-center.mb-4
      .col-lg-12
        .bloque-texto-g.fondo-b.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/img/img4.png')})`}"
          )
          .bloque-texto-g__texto.p-5.mt-2.mb-2
            p.mb-0 El ML enfocado a la ciencia de datos apunta a desarrollar procesos específicos como la identificación de la fuente de datos, desechar información inválida o no útil, limpiar, normalizar, relacionar, datos sesgados, etc. 
    
    .row.d-flex.align-items-center.justify-content-center.mb-3
      .col-sm-12.col-lg-10
        .cajaa.p-4.mb-4
          .col-lg-7.my-0
          .row.d-flex.align-items-center.justify-content-center
            .col-lg-2
              img.img-a.img-t.d-none.d-lg-block(data-aos="zoom-in")(src='@/assets/curso/img/nueva1.svg', alt='tema2')
            .col-lg-10 #[b Nota importante.] Todas estas tareas podrían encontrar solución eficiente en la selección de soluciones de #[em machine learning,] cuya aplicación resulte apropiada, la elección del algoritmo más adecuado, el ajuste de los parámetros del método elegido, el análisis de los resultados, la identificación de comportamientos incorrectos, la vuelta a procesos anteriores con el fin de cambiar lo que resulte necesario para mejorar los resultados. (Bobadilla, 2020).
    
    p.mb-5 Si bien la aplicación de #[em Business Intelligence] (BI) es una manera interesante para el conocimiento de las organizaciones y otras bondades, la implementación de ML es ir más allá. Preste atención a los aspectos clave que se presentan a continuación:
    
    .row(data-aos="zoom-in")
      .col-lg-7.mb-0
        AcordionA.activo.color-acento-botones(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Orientación del <em>Machine Learning</em>")
            .col-12.ps-5
                  p.mb-0.mx-2 Se orienta a mejorar predicciones cada vez más precisas, obtener información más profunda de los datos, reducir sobrecarga de tareas y mejorar las experiencias de clientes, por ejemplo, a través de #[em Chatbots] que vayan aprendiendo de un humano a cómo responder según las situaciones.

          .row(titulo="Diferentes tipos de aprendizaje")
            .col-12.ps-5
                  p.mb-0.mx-2 Varían en función de si se conoce o no la respuesta que se busca, del tipo de datos analizados, del entorno de los datos en cuestión y del tipo de análisis realizado (estadísticas, comparaciones, reconocimiento de imágenes, etc.).
                    
          .row(titulo="Algoritmos de aprendizaje")
            .col-12.ps-5
                  p.mb-0.mx-2 Los algoritmos de aprendizaje y la potencia de cálculo requerida también difieren en función de la tarea que se realiza.

          .row(titulo="Calidad de aprendizaje")
            .col-12.ps-5
                  p.mb-0.mx-2 Tal calidad depende del número de ejemplos relevantes que el #[em software] puede analizar (cuantos más ejemplos, más precisión se tendrá en el análisis de datos). También dependen de la cantidad de características que detallan los ejemplos (cuanto más sencillos y precisos, más rápido y acertado será el análisis: tamaño, peso, cantidad, velocidad, rangos, etc.).

          .row(titulo="Calidad de los datos")
            .col-12.ps-5
                  p.mb-0.mx-2 Si faltan muchos datos o se presentan falencias en las dimensiones de la calidad de datos, el análisis se verá afectado.
          
          .row(titulo="Cumplimiento máximo de criterios")
            .col-12.ps-5
                  p.mb-0.mx-2 El ML de predicción será más preciso y el análisis resultará más ajustado a la realidad. Así que, una vez que se hayan definido los objetivos y elementos de aprendizaje automático, y que las bases de datos estén en óptimas condiciones, podrá empezar a sacar el máximo partido al #[em machine learning.]

          .row(titulo="Principio del algoritmo")
            .col-12.ps-5
                  p.mb-0.mx-2 El tipo de aprendizaje está dado según el principio del algoritmo, sin decir que otro tipo de aprendizaje no es usado, este aprendizaje es el más implementado en la gestión de datos y otras aplicaciones y ha permitido gran ampliación en implementación de Inteligencia Artificial en las organizaciones y la vida cotidiana.

          .row(titulo="Fundamento del aprendizaje supervisado")
            .col-12.ps-5
                  p.mb-0.mx-2 Se fundamenta en el descubrimiento o el aprendizaje en la relación existente entre unas variables o datos de entrada y unas variables de salida, es decir, el aprendizaje surge de mostrarle a los algoritmos cuál es el resultado que se desea obtener para un determinado valor.

      .col-lg-5(data-aos="fade-left")
        figure.d-lg-block.d-none
          img.img-a.img-t.my-5.down(src='@/assets/curso/img/img5.png', alt='imagen decorativa') 
    
    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Aprendizaje no supervisado
    
    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-left")
      .col-lg-4.col-8
        img.img-a.img-t.mb-3(src="@/assets/curso/img/img6.png" alt="")
      .col-lg-8.col-12
        p.mb-4 Este paradigma de aprendizaje toma como base, únicamente, los datos de entrada, sin explicarle al sistema qué resultado es el que se espera obtener. Podría ser un poco difícil de concebir, porque si no hay una referencia previa, ¿de qué manera podrían los sistemas aprender?.
        .cajad.p-4.mb-2.my-4
          p.mb-3 Este concepto es menos usado, pues sostiene mayores retos a la ciencia y a los algoritmos, donde a partir de un parámetro, el sistema deberá tratar de descubrir qué resultado o resultados posibles daría ese dato de entrada.

    p.mb-4 #[b Estas son algunas generalidades que se deben tener en cuenta, respecto del aprendizaje no supervisado:]

    SlyderF(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-left.mb-3
          .col-8
            img.img-a.img-t.left(src='@/assets/curso/img/ej1.svg' alt='AvatarTop')
        p Tiene una ventaja, porque el entrenamiento en aprendizaje supervisado implicaría miles de horas, humanos enseñando y altos costos, debido a que para que un sistema esté bien entrenado requiere al menos 100 mil ejemplos, esto es una tarea larga y costosa.

      .tarjeta.color-acento-botones.p-4
        .row.justify-content-start.mb-3
          .col-8
            img.img-a.img-t.left(src='@/assets/curso/img/ej2.svg' alt='AvatarTop')
        p Por su parte, el aprendizaje no supervisado solo requiere de los datos de entrada, dar unos pocos parámetros de lo que se quiere y dejar todo a la máquina.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content.mb-3
          .col-8
            img.img-a.img-t.left(src='@/assets/curso/img/ej3.svg' alt='AvatarTop')
        p La desventaja es que requiere mucho procesamiento, puntos generales que pueda asociar a lo que se le parezca, y avance tecnológico con el fin que la máquina vislumbre y descubra el dato de salida.

      .tarjeta.color-acento-botones.p-4
        .row.justify-content.mb-3
          .col-8
            img.img-a.img-t.left(src='@/assets/curso/img/ej4.svg' alt='AvatarTop')
        p Si bien, las técnicas ML más usadas están basadas en referencias de salidas, el aprendizaje no supervisado será el futuro, porque de cierta manera los sistemas usarán estas referencias y gran capacidad computacional para empezar a asociar.

      .tarjeta.color-acento-botones.p-4
        .row.justify-content.mb-3
          .col-8
            img.img-a.img-t.left(src='@/assets/curso/img/ej5.svg' alt='AvatarTop')
        p Lograr que una máquina tenga sentido común es un objetivo muy difícil, sin embargo, los algoritmos actuales se van acercando un poco, por ejemplo, hay palabras que si bien es la misma para dos cosas o significados diferentes (palabras polisémicas), para los humanos es fácil según el contexto, pero para una máquina es difícil definir estas cosas.

    separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Algoritmos y modelos matemáticos

    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-left")
      .col-lg-5.col-md-8.col-8
        img.img-a.img-t(src="@/assets/curso/img/img111.svg" alt="tema2")
      .col-lg-7.col-md-12.col-12
        .cajaverde.p-5.mb-2
          p.mb-4 Los métodos matemáticos y algorítmicos empleados en la Inteligencia Artificial, pueden variar según los desarrollares. Aunque existen otros, los más comunes o típicos para 
            strong.rojo aprendizaje supervisado 
            | son las Regresiones lineales y logísticas, Máquinas de vectores de soporte, árbol de decisiones y K-Media.
    
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Regresiones lineales y logísticas
        img.clase2.col-lg.d-none.d-lg-flex(src='@/assets/curso/img/clase2.svg' data-aos="fade-left")
    
    p.mb-4 Estos algoritmos tienen un comportamiento basado en el historial de los datos, por ejemplo, se requiere predecir o asignar correctamente el valor de un inmueble; teniendo como base datos históricos, se tendría una gráfica como esta:
    
    .row.justify-content-center.mb-4
      .col-lg-7.col-md-10.col-12
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Figura 1.
          | Datos base para los algoritmos regresiones lineales
        img.img-a.img-t.mb-3(src="@/assets/curso/img/fig1.svg" alt="Figura 1. Muestra una dispersión de datos base utilizada para algoritmos de regresiones lineales. En el eje vertical se representa el precio, mientras que en el eje horizontal se representa la variable M2. Los puntos dispersos en el gráfico indican una relación entre estas dos variables, sugiriendo una tendencia general en la que a medida que ( M_2 \ aumenta, el precio también tiende a aumentar.")
        
    p.mb-4 Luego, a partir de la regresión lineal, se calcula la línea que abarca los valores y se establece con mejor exactitud el valor del inmueble.
    p.mb-4 De esa manera, cuando una propiedad tiene ciertos metros cuadrados específicos, la salida que ofrece la máquina será un precio que coincida con la regresión lineal, como se expresa en la siguiente gráfica:
    
    .row.justify-content-center.mb-4
      .col-lg-7.col-md-10.col-12
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Figura 2.
          span Línea a partir de valores conocidos
        img.img-a.img-t.mb-3(src="@/assets/curso/img/fig2.svg" alt="Muestra una línea de regresión derivada de valores conocidos en un gráfico de dispersión. El gráfico presenta la relación entre el precio (eje vertical) y la variable M2 (eje horizontal). Los puntos dispersos representan datos observados, mientras que la línea de regresión indica la tendencia general de cómo el precio varía en función de M2, sugiriendo una correlación positiva entre estas dos variables.")

    p.mb-4 Con estas técnicas se pueden establecer grupos, por ejemplo, es posible definir si un inmueble es costoso o no lo es, con base en los datos y sus grupos.
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") #[em K-MEANS clustering o K-media] de agrupamiento
        img.clase3.col-lg.d-none.d-lg-flex(src='@/assets/curso/img/clase2.svg' data-aos="fade-left")
    
    
    p.mb-0 En el caso anterior, se tenían valores históricos, sin embargo, ¿qué tal si se presenta el caso de que los datos no están categorizados y no hay un historial?.
    p.mb-4 Se deberá usar uno de los algoritmos o métodos no supervisados para que la máquina aprenda a identificar patrones y arroje respuestas.
    p.mb-4 El algoritmo por agrupación usa como base centroides o puntos de datos base, que procura detectar patrones similares y de esa manera identifica grupos, como se presenta a continuación.
    
    .row.justify-content-center.mb-4
      .col-lg-7.col-md-10.col-12
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Figura 3.
          span Agrupando (#[em clustering])
        img.img-a.img-t.mb-3(src="@/assets/curso/img/fig3.svg" alt="Ilustra un gráfico de agrupamiento #[em (clustering)] donde los datos se han dividido en dos grupos distintos. En el gráfico, se observa la distribución de los datos en dos clusters, representados por colores diferentes: un grupo en verde y otro en naranja. Estos grupos indican la segmentación de los datos según similitudes, con el eje vertical y el eje horizontal representando variables no especificadas.")

    p.mb-4 En un primer momento, los datos no están clasificados, sin embargo, el algoritmo determina similitud según la distancia entre los mismos (en estos datos se nota que hay dos grupos por su cercanía).
    p.mb-4 Para empezar a usar este tipo de algoritmos, se debe elegir el número de #[em clusters], representado por K, Luego, aleatoriamente, se asignan centroides y se calcula, uno a uno, la cercanía de los datos al centroide, como se presenta en la siguiente figura.
    
    .row.justify-content-center.mb-0
      .col-lg-12.col-md-10.col-12
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Figura 4.
          span #[em Clusters] y centroides
        .row.justify-content-center.mb-4
          .col-lg-6.col-md-10.col-12
            img.img-a.img-t.mb-3(src="@/assets/curso/img/fig4.svg" alt="Presenta un análisis de clusters y sus centroides. El gráfico de la izquierda muestra tres clusters iniciales con sus respectivos centroides representados en colores diferentes (rojo, azul y verde), cada uno dentro de una línea punteada que delimita su grupo. En el gráfico de la derecha, los datos se reorganizan en tres #[em clusters] bien definidos (cada uno representado por un color diferente: rojo, verde y azul) después de aplicar un algoritmo de clustering, mostrando la convergencia de los datos hacia sus centroides. Ambos gráficos ilustran el proceso de agrupamiento y la importancia de los centroides en la formación de clusters coherentes.")
          .col-lg-6.col-md-10.col-12
            img.img-a.img-t.mb-3(src="@/assets/curso/img/fig4.1.svg" alt="Presenta un análisis de clusters y sus centroides. El gráfico de la izquierda muestra tres clusters iniciales con sus respectivos centroides representados en colores diferentes (rojo, azul y verde), cada uno dentro de una línea punteada que delimita su grupo. En el gráfico de la derecha, los datos se reorganizan en tres #[em clusters] bien definidos (cada uno representado por un color diferente: rojo, verde y azul) después de aplicar un algoritmo de clustering, mostrando la convergencia de los datos hacia sus centroides. Ambos gráficos ilustran el proceso de agrupamiento y la importancia de los centroides en la formación de clusters coherentes.")

    p.mb-4 El algoritmo calcula estas distancias usando la #[b Distancia Euclidiana.] Se trata de una variación del teorema de Pitágoras y es una de las maneras más fáciles para calcular distancia, a partir de las posiciones de dos objetos en un plano cartesiano, como se presenta a continuación.
    
    .row.justify-content-center.mb-5
      .col-lg-6.col-md-10.col-12
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Figura 5.
          span Distancia euclidiana
        img.img-a.img-t(src="@/assets/curso/img/fig5.svg" alt="Ilustra el concepto de distancia euclidiana entre dos puntos en un plano cartesiano. Los puntos están representados por las coordenadas (x1,y1).  La distancia entre estos dos puntos se muestra como la hipotenusa de un triángulo rectángulo, donde los catetos son las diferencias en las coordenadas. Este diagrama visualiza cómo se calcula la distancia euclidiana utilizando el teorema de Pitágoras.")

    p.mb-4 Esta función se repite las veces que sea necesario o se hayan parametrizado, para que el algoritmo autónomamente determine qué dato estaría en cuál  #[em cluster] o qué clasificación.
    p.mb-0 Esto es solo un ejemplo de métodos o algoritmos que emplea el #[em machine learning,] pero hay muchos más tanto para aprendizaje supervisado como no supervisado.
    
    separador
    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4. Predictores

    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-left")
      .col-lg-4.col-8
        img.img-a.img-t.mb-5(src="@/assets/curso/img/img8.svg" alt="tema2")
      .col-lg-8.col-12.mb-5
        p.mb-3 Adivinar el futuro ha sido uno de los factores más fascinantes que, a lo largo de toda la historia humana, ha ocupado a las civilizaciones y líderes, hasta el punto de desarrollar ansiedades por tal incertidumbre. Es por ello que es tan frecuente que el futuro sea un insumo para historias de cine, y atrapen y fascinen a todo el público, aparecen objetos como oráculos, bolas de cristal y profecías alrededor de múltiples #[em films] e historias.
        .cajac.p-3
          p.my-1 Si bien la predicción, culturalmente, se contempla como saber el futuro, no necesariamente es así, la predicción enfatiza la capacidad de ver información oculta, ya sea en el pasado, el presente o el futuro, tal como se concibe la bola de cristal de algunas historias mágicas, donde este objeto no solo permite ver el futuro, sino también ver qué sucede en el presente en otros lugares; esta utilidad ya dejó de ser fascinante porque se convirtió en algo normal después del avance de los medios de comunicación, pero igual se sigue llamando predicción.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Predictores como funciones de herramientas
        img.clase4.col-lg.d-none.d-lg-flex(src='@/assets/curso/img/clase2.svg' data-aos="fade-left")
    
    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-8.col-12.mb-5.my-2
        p.mb-3.my-3 Un ejemplo de predictores usados por todos, ha sido la función autocompletar de Google en sus búsquedas y los teclados de celular donde, al escribir una palabra o parte de ella, el sistema procura autocompletar lo que se desea escribir, ahorrando tiempo y disminuyendo errores de digitación de manera ostensible. Esto se hace a partir de unas métricas y del aprendizaje que la máquina detectó por las tendencias propias del usuario o tendencias de búsqueda masiva localizada o mundial.
        .cajac.p-4.mb-4
          p.my-2 En las aplicaciones, también la predicción avanza según esta va aprendiendo; es el caso del traductor de Google: cuando esta herramienta era nueva, su traducción no tenía buena calidad, pero, actualmente, con el aporte de los mismos usuarios, las traducciones tienen en cuenta incluso ciertos contextos que la máquina ha aprendido a diferenciar.
      .col-lg-4.col-8
        img.img-a.img-t.mb-5(src="@/assets/curso/img/img9.svg" alt="tema2")

    p.mb-4 #[b En relación con los predictores, tenga en cuenta algunas generalidades como las que enuncian a continuación:]
    
    .tarjeta.tarjeta--azul.p-3
      SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
        .row.justify-content-center.p-4
          .col-lg-6.col-12.my-3
            h4.mb-4 Resultado de una acción
            p.mb-3 La predicción no es un asunto nuevo; en su mínima expresión se podría resumir en el resultado de una acción, es decir, no se necesita ser gurú para saber que, si no se realizan ventas, el negocio se viene a pique, sin embargo, la IA es mucho más que esto y se responsabiliza de elementos más complejos.
          .col-lg-6.col-12 
            img(alt="tema1" src="@/assets/curso/img/img10.svg")

        .row.justify-content-center.p-4
          .col-lg-6.col-12.my-3
            h4.mb-4 Análisis predictivo
            p.mb-3 El objetivo de este análisis es la estimación de eventos futuros a partir de datos históricos o, incluso, descubrir fenómenos presentes que podrían desencadenar consecuencias más adelante, como, por ejemplo, la no satisfacción de clientes.
          .col-lg-6.col-12 
            img(alt="tema1" src="@/assets/curso/img/img11.svg")

        .row.justify-content-center.p-4
          .col-lg-6.col-12.my-3
            h4.mb-4 Construcción de algoritmos de predicción
            p.mb-3 Construir algoritmos o funciones de programación básicos no suele ser difícil, por ejemplo, en una ferretería se podría implementar un campo calculado que sugiera pedidos para comprar a proveedores, basado en la cantidad de productos vendidos en los últimos tres meses. Si bien, este es un componente que podría funcionar, no se considera exacto.
          .col-lg-6.col-12 
            img(alt="" src="@/assets/curso/img/img12.svg")

        .row.justify-content-center.p-4
          .col-lg-6.col-12.my-3
            h4.mb-4 Datos entregados a modelos ML
            p.mb-3 Si estos datos se entregan a modelos ML de un proveedor de este servicio y se define el objetivo con claridad (número de unidades a comprar a proveedores), a medida que pasa el tiempo las predicciones de ventas y las decisiones de compra para el #[em stock] de inventarios serán cada vez más exactas, porque la IA tendrá muchísimas más variables para definir la decisión de compra. Además de las ventas, podría tener en cuenta el mes, según comportamiento del mismo mes de los años anteriores, el precio de divisas, incluso si hay épocas de lluvia o no, etc.
          .col-lg-6.col-12 
            img(alt="" src="@/assets/curso/img/img13.svg")

        .row.justify-content-center.p-4
          .col-lg-6.col-12.my-3
            h4.mb-4 Datos históricos
            p.mb-3 Para la construcción de estos modelos, una vez desarrollado el algoritmo predictivo (y reglas de negocio que apliquen), y configurado con claridad las metas y objetivos en el entorno del proveedor de IA, es necesario disponer de un conjunto de datos históricos. Por lo general, se tienen dos conjuntos: uno de datos de entrenamiento y otro de prueba.
          .col-lg-6.col-12 
            img(alt="" src="@/assets/curso/img/img14.svg")

        .row.justify-content-center.p-4
          .col-lg-6.col-12.my-3
            h4.mb-4 Comprobación de exactitud
            p.mb-3 Al modelo se le pasan como entrada, los datos de entrenamiento para calibrar la predicción y, posteriormente, los datos de prueba. Después, se compara el resultado de la predicción con los valores reales (históricos) para comprobar su exactitud.
          .col-lg-6.col-12
            img(alt="" src="@/assets/curso/img/img15.svg")







</template>

<script>
export default {
  name: 'Tema2',
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
