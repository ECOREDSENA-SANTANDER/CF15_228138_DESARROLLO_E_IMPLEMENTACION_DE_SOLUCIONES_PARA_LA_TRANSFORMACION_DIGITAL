export default {
  global: {
    componenteFormativo: 'Analítica de datos y visualización',
    descripcionCurso:
      'El presente componente formativo aborda aspectos generales y claves sobre elementos, métodos y herramientas empleados para el desarrollo de reportes y tableros, a partir de los datos. Con su estudio responsable, el aprendiz se afianzará en fuentes de datos, transformación, <em>machine learning</em> y desarrollo de gráficos, usando datos nativos y cálculos con lenguajes de consulta.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),

    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Modelos y metodologías de analítica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Aprendizaje automático <em>machine learning</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Aprendizaje supervisado',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Aprendizaje no supervisado',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Algoritmos y modelos matemáticos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Predictores',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Herramientas de analítica de datos y visualización',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Gestión de datos masivos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Lenguajes de consulta',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Manipulación de datos',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Tableros estadísticos, informes y resultados de visualización',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Algoritmos y modelos matemáticos ',
      referencia:
        'Data Silvestre. (2021). Distancia Euclidiana en Python | Métricas y Distancias #1 [video]. YouTube. https://youtu.be/vklKtK5oCfg',
      tipo: 'Video ',
      link: 'https://youtu.be/vklKtK5oCfg',
    },
    {
      tema: 'Gestión de datos masivos',
      referencia:
        'The QA Testing Channel. (2017). Comandos SQL Básicos en Base de Datos - En 1 minuto [video]. YouTube. https://www.youtube.com/watch?v=YuqqGaPLrjY&ab_channel=TheQATestingChannel',
      tipo: 'Video ',
      descarga:
        'https://www.youtube.com/watch?v=YuqqGaPLrjY&ab_channel=TheQATestingChannel',
    },
    {
      tema: 'Gestión de datos masivos ',
      referencia:
        'Learning BI. (2017). Introducción Pentaho Data Integration [video]. YouTube. https://youtu.be/o7If1a-gkyI',
      tipo: 'Video ',
      descarga: 'https://youtu.be/o7If1a-gkyI ',
    },
    {
      tema: 'Gestión de datos masivos ',
      referencia:
        'Contreras, P. (2018). Business intelligence con Excel y Power BI. [Conjunto de datos]. Sistema de bibliotecas SENA. https://login.bdigital.sena.edu.co/login?qurl=https://www.ebooks7-24.com%2f%3fil%3d10579',
      tipo: 'Libro  ',
      descarga: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=10579',
    },
  ],
  glosario: [
    {
      termino: 'Algoritmo',
      significado:
        'pasos programados para que las máquinas realicen una función o tarea. Los algoritmos pueden programarse o en caso de la IA se auto ajustan o calibran sin necesidad de intervención humana. ',
    },
    {
      termino: 'Aprendizaje Profundo',
      significado:
        '<em>Deep Learning,</em> se refiere a los programas que emplean redes neuronales programadas para tener procesos de machine <em>learning</em> más avanzados y complejos.',
    },
    {
      termino: '<em>Chatbots</em>',
      significado:
        'chats operados por robots o chats inteligentes que interactúan con personas o clientes sin necesidad de intervención humana. ',
    },
    {
      termino: '<em>Datasets</em>',
      significado:
        'conjunto de datos guardados en un sistema, ya sea en una o varias bases de datos. Por lo general son datos estructurados y están disponibles para gestión y uso que se desee dar según los objetivos del negocio. ',
    },
    {
      termino: '<em>AWS</em>',
      significado:
        '<em>Amazon Web Service,</em> plataforma de computación o servicios en la nube, cuenta con múltiples servicios entre los cuales muchas herramientas tienen grandes componentes de inteligencia artificial y gestión de datos. ',
    },
    {
      termino: '<em>Insigth</em>',
      significado:
        'en términos de informática y marketing se refiere a las verdades (a veces relativa según tiempo y condiciones), que generan los datos o los comportamientos de consumo. ',
    },
    {
      termino: 'Minería de datos',
      significado:
        '<em>Data mining,</em> es el uso de grandes volúmenes de datos para la obtención de situación, circunstancias o verdades a partir de patrones y características de los datos. Existen varias técnicas para la aplicación de minería de datos. ',
    },
    {
      termino: 'Palabras polisémicas',
      significado:
        'palabras que tienen varios significados, el significado lo da el contexto en el que se da la comunicación.',
    },
  ],
  referencias: [
    {
      referencia:
        'Agrawal, A., Joshua, G., & Avi, G. (2019). Máquinas predictivas: la sencilla economía de la inteligencia artificial [Conjunto de datos]. Sistema de bibliotecas SENA.',
      link:
        ' https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/122310',
    },
    {
      referencia:
        'Bobadilla, J. (2020). Machine Learning y Deep Learning. [Conjunto de datos]. Sistema de bibliotecas SENA.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=10277',
    },
    {
      referencia:
        'Curto Díaz, J. (2016). Introducción al business intelligence. [Conjunto de datos]. Sistema de bibliotecas SENA.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/101030',
    },
    {
      referencia:
        'Dot CSV. (2019). ¿Qué es el Aprendizaje Supervisado y No Supervisado? [video]. YouTube.',
      link: 'https://youtu.be/oT3arRRB2Cw',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada',
          cargo: 'Experto Temático',
          centro: 'Centro de la Industria, la Empresa y los Servicios - CIES',
        },
        {
          nombre: 'Javier Ricardo Luna Pineda',
          cargo: 'Diseñador Instruccional',
          centro: 'Centro de la Industria, la Empresa Y Los Servicios',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador Instruccional',
          centro:
            'Regional Santander – Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Metodólogo para Formación Virtual',
          centro:
            'Regional Santander – Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo de Desarrollo Curricular',
          centro:
            'Regional Santander – Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora Instruccional',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>Fullstack</em>',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y Productora Multimedia',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de Recursos Educativos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
