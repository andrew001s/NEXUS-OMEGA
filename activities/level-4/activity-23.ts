import type { BossQuizActivity } from '@/types/activity'

export const activity23: BossQuizActivity = {
  id: 'activity-23',
  type: 'boss-quiz',
  title: 'Nucleo Electrico - Desafio Final',
  instruction: 'Cinco respuestas rapidas. Cada acierto reactiva una bobina del nucleo central.',
  questions: [
    {
      question: 'Que es la energia electrica?',
      options: [
        'La energia producida por el calor.',
        'La energia asociada al movimiento de cargas electricas.',
        'La energia almacenada en la altura.',
        'La energia que solo produce luz.',
      ],
      correctIndex: 1,
    },
    {
      question: 'Como puede producirse la energia electrica?',
      options: [
        'Mediante generadores, baterias o paneles solares.',
        'Solo con gravedad.',
        'Solo con fuego.',
        'Solo con sonido.',
      ],
      correctIndex: 0,
    },
    {
      question: 'Donde se utiliza la energia electrica?',
      options: [
        'Solo en laboratorios.',
        'Solo en computadoras.',
        'En hogares, hospitales, industrias y tecnologia diaria.',
        'Unicamente en vehiculos.',
      ],
      correctIndex: 2,
    },
    {
      question: 'Cual es un ejemplo de transformacion de energia electrica?',
      options: [
        'Un ventilador que convierte electricidad en movimiento.',
        'Una roca inmovil.',
        'Una sombra sobre una pared.',
        'Un libro cerrado.',
      ],
      correctIndex: 0,
    },
    {
      question: 'Por que algunos materiales conducen electricidad y otros no?',
      options: [
        'Porque todos conducen igual.',
        'Porque algunos permiten el movimiento de electrones con facilidad y otros lo dificultan.',
        'Porque solo los metales tienen energia.',
        'Porque depende del color del material.',
      ],
      correctIndex: 1,
    },
  ],
  timePerQuestion: 12,
  passThreshold: 4,
  feedback: {
    success: 'Increible.\n\nCada respuesta reactiva una bobina Tesla, el Nucleo Electrico vuelve a funcionar y toda la central recupera la energia.\n\nLa puerta del siguiente laboratorio se desbloquea.',
    error: 'Aun falta consolidar la idea.\n\nRepasa que es la energia electrica, como se produce, donde se usa y por que algunos materiales conducen mejor que otros.',
  },
}
