import type { BossQuizActivity } from '@/types/activity'

export const activity30: BossQuizActivity = {
  id: 'activity-30',
  type: 'boss-quiz',
  title: 'Laboratorio de Transformaciones',
  instruction: 'Analiza cada objeto y elige la descripcion correcta de su energia inicial, final y transformaciones intermedias.',
  questions: [
    {
      question: 'Linterna: cual es la mejor descripcion de su transformacion energetica?',
      options: [
        'Quimica -> electrica -> luminica',
        'Luminica -> quimica -> electrica',
        'Cinetica -> gravitacional -> luminica',
        'Potencial -> sonora -> quimica',
      ],
      correctIndex: 0,
    },
    {
      question: 'Automovil: cual es la secuencia mas precisa?',
      options: [
        'Quimica -> termica -> cinetica',
        'Electrica -> luminica -> quimica',
        'Luminica -> cinetica -> gravitacional',
        'Gravitacional -> electrica -> quimica',
      ],
      correctIndex: 0,
    },
    {
      question: 'Panel solar: cual es la transformacion principal?',
      options: [
        'Luminica -> electrica',
        'Quimica -> luminica',
        'Cinetica -> electrica -> quimica',
        'Potencial -> termica',
      ],
      correctIndex: 0,
    },
    {
      question: 'Planta: que cadena representa mejor su funcionamiento?',
      options: [
        'Luz solar -> fotosintesis -> energia quimica en materia organica',
        'Electrica -> sonido -> masa',
        'Quimica -> luminica -> vacio',
        'Cinetica -> gravitacional -> electrica',
      ],
      correctIndex: 0,
    },
    {
      question: 'Montana rusa: cual es la descripcion mas correcta?',
      options: [
        'Potencial gravitacional -> cinetica -> termica y sonora',
        'Luminica -> quimica -> cinetica',
        'Electrica -> luminica -> potencial',
        'Masa -> vacio -> movimiento',
      ],
      correctIndex: 0,
    },
  ],
  timePerQuestion: 12,
  passThreshold: 4,
  feedback: {
    success: 'Muy bien.\n\nLas comparaciones muestran que todos los sistemas transforman energia sin violar las leyes de conservacion.\n\nLos tres pilares restantes se activan y el nucleo comienza a estabilizarse.',
    error: 'Aun no.\n\nCompara con cuidado la energia inicial, la final y los pasos intermedios de cada objeto.',
  },
}
