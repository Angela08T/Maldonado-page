const mesNum = { MAY: 4, JUN: 5, JUL: 6 }
export function eventoDate(ev) {
  return new Date(2026, mesNum[ev.mes], parseInt(ev.dia, 10), 9, 0, 0)
}

export const eventos = [
  {
    id: 1, dia: '25', mes: 'MAY', color: 'red',
    titulo: 'Gran Caminata por Nuestro Distrito',
    hora: '9:00 AM', lugar: 'Parque Central de Maldonado',
    zona: 'Zona Norte',
    desc: 'Únete a la caminata comunitaria que recorrerá los principales puntos de San Juan de Lurigancho. Familias, jóvenes y vecinos juntos celebrando nuestro distrito.',
    cupos: 500,
  },
  {
    id: 2, dia: '01', mes: 'JUN', color: 'orange',
    titulo: 'Conversatorio con Vecinos',
    hora: '6:00 PM', lugar: 'Local Comunal Canto Grande',
    zona: 'Zona Sur',
    desc: 'Espacio abierto de diálogo donde podrás plantear tus propuestas y conocer los avances de las obras en tu barrio.',
    cupos: 120,
  },
  {
    id: 3, dia: '10', mes: 'JUN', color: 'teal',
    titulo: 'Jornada de Limpieza y Reforestación',
    hora: '7:30 AM', lugar: 'Toda la Comuna 3',
    zona: 'Zona Centro',
    desc: 'Voluntarios y vecinos se unen para limpiar parques y sembrar árboles nativos en las áreas verdes del distrito.',
    cupos: 200,
  },
  {
    id: 4, dia: '15', mes: 'JUN', color: 'green',
    titulo: 'Feria de Emprendedores SJL',
    hora: '10:00 AM', lugar: 'Av. Los Jardines, Cdra. 5',
    zona: 'Zona Centro',
    desc: 'Más de 80 emprendedores locales exponen sus productos y servicios. Talleres de ventas, finanzas y marketing gratuitos para todos.',
    cupos: 300,
  },
  {
    id: 5, dia: '22', mes: 'JUN', color: 'red',
    titulo: 'Asamblea Vecinal Zona Norte',
    hora: '5:00 PM', lugar: 'Salón Comunal de Zárate',
    zona: 'Zona Norte',
    desc: 'Asamblea mensual donde se rinden cuentas de las obras ejecutadas y se votan los proyectos del próximo presupuesto participativo.',
    cupos: 150,
  },
  {
    id: 6, dia: '29', mes: 'JUN', color: 'orange',
    titulo: 'Festival Cultural de San Juan',
    hora: '3:00 PM', lugar: 'Parque Zonal Huiracocha',
    zona: 'Zona Este',
    desc: 'Música, danza, gastronomía y arte en el festival más grande del año. Entrada libre para todos los vecinos del distrito.',
    cupos: 1000,
  },
  {
    id: 7, dia: '06', mes: 'JUL', color: 'teal',
    titulo: 'Taller de Liderazgo Comunitario',
    hora: '9:00 AM', lugar: 'Centro Cívico Municipal',
    zona: 'Zona Centro',
    desc: 'Aprende herramientas de gestión y liderazgo para representar mejor a tu comunidad. Certificado de participación incluido.',
    cupos: 60,
  },
  {
    id: 8, dia: '12', mes: 'JUL', color: 'green',
    titulo: 'Inauguración Pistas y Veredas Bayóvar',
    hora: '11:00 AM', lugar: 'Jr. Los Pinos, Bayóvar',
    zona: 'Zona Sur',
    desc: 'Inauguración oficial de la renovación de pistas y veredas en el sector Bayóvar, beneficiando a más de 5,000 vecinos.',
    cupos: null,
  },
]
