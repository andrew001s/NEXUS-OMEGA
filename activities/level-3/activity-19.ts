import type { BossQuizActivity } from '@/types/activity'

export const activity19: BossQuizActivity = {
  id: 'activity-19',
  type: 'boss-quiz',
  title: 'Sistema Optico Central - Desafio Final',
  instruction: 'Cinco respuestas rapidas. Cada acierto orienta un espejo del sistema central.',
  questions: [
    {
      question: 'Que es la energia luminica?',
      options: [
        'La energia del movimiento.',
        'La energia transportada por la luz.',
        'La energia producida por el sonido.',
        'La energia almacenada por la altura.',
      ],
      correctIndex: 1,
    },
    {
      question: 'Cuales son sus principales fuentes?',
      options: [
        'El Sol, las estrellas y las fuentes artificiales de luz.',
        'La gravedad y el magnetismo.',
        'El suelo y las rocas.',
        'Solo los motores electricos.',
      ],
      correctIndex: 0,
    },
    {
      question: 'Como puede transformarse la energia luminica?',
      options: [
        'Solo en sonido.',
        'En energia electrica, quimica o termica.',
        'Solo en energia cinetica.',
        'No puede transformarse.',
      ],
      correctIndex: 1,
    },
    {
      question: 'Como funciona un panel solar?',
      options: [
        'Calienta agua y crea viento.',
        'Usa celdas fotovoltaicas para convertir luz en electricidad.',
        'Genera energia por friccion.',
        'Solo almacena energia termica.',
      ],
      correctIndex: 1,
    },
    {
      question: 'Menciona un ejemplo cotidiano de energia luminica.',
      options: [
        'Una lampara encendida.',
        'Una roca quieta.',
        'Una bicicleta estacionada.',
        'Un libro cerrado.',
      ],
      correctIndex: 0,
    },
  ],
  timePerQuestion: 12,
  passThreshold: 4,
  feedback: {
    success: 'Increible.\n\nTodos los espejos concentran la luz, el Sistema Optico Central vuelve a funcionar y un enorme haz luminoso atraviesa el laboratorio.\n\nLa puerta del siguiente nivel se desbloquea.',
    error: 'Aun necesitas reforzar las ideas clave.\n\nRevisa que es la energia luminica, sus fuentes, sus transformaciones y el funcionamiento del panel solar.',
  },
}
