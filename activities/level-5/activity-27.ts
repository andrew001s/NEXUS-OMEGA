import type { BossQuizActivity } from '@/types/activity'

export const activity27: BossQuizActivity = {
  id: 'activity-27',
  type: 'boss-quiz',
  title: 'Reactor Molecular - Desafio Final',
  instruction: 'Cinco respuestas rapidas. Cada acierto estabiliza una parte del reactor molecular.',
  questions: [
    {
      question: 'Que es la energia quimica?',
      options: [
        'La energia almacenada en los enlaces quimicos.',
        'La energia del sonido.',
        'La energia de la altura.',
        'La energia emitida por la luz.',
      ],
      correctIndex: 0,
    },
    {
      question: 'Donde se almacena la energia quimica?',
      options: [
        'En los enlaces entre atomos y moleculas.',
        'Solo en las nubes.',
        'En el movimiento de los planetas.',
        'Unicamente en el calor.',
      ],
      correctIndex: 0,
    },
    {
      question: 'Que ocurre durante una reaccion quimica?',
      options: [
        'Los enlaces pueden romperse y formarse, reorganizando atomos y energia.',
        'Nada cambia en la materia.',
        'Solo aumenta la gravedad.',
        'La luz siempre desaparece.',
      ],
      correctIndex: 0,
    },
    {
      question: 'Por que los combustibles poseen energia quimica?',
      options: [
        'Porque sus enlaces almacenan energia que puede liberarse en reacciones.',
        'Porque flotan en el aire.',
        'Porque tienen color oscuro.',
        'Porque producen sonido.',
      ],
      correctIndex: 0,
    },
    {
      question: 'Cual es un ejemplo cotidiano de uso de energia quimica?',
      options: [
        'El cuerpo obteniendo energia de los alimentos.',
        'Una sombra sobre el piso.',
        'Una piedra inmovil.',
        'Una ventana abierta sin mover nada.',
      ],
      correctIndex: 0,
    },
  ],
  timePerQuestion: 12,
  passThreshold: 4,
  feedback: {
    success: 'Increible.\n\nEl reactor molecular vuelve a funcionar, el laboratorio recupera la vida y las plantas experimentales comienzan a crecer nuevamente.\n\nLa puerta hacia el Nucleo de Conservacion se desbloquea.',
    error: 'Aun necesitas reforzar la idea.\n\nRepasa que es la energia quimica, donde se almacena y como cambia durante una reaccion.',
  },
}
