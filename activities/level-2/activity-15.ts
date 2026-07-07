import type { BossQuizActivity } from '@/types/activity'

export const activity15: BossQuizActivity = {
  id: 'activity-15',
  type: 'boss-quiz',
  title: 'Torre Gravitacional \u2014 Desaf\u00EDo Final',
  instruction: 'Cinco niveles. Cada respuesta correcta restaura un anillo de energ\u00EDa de la torre.',
  questions: [
    {
      question: '\u00BFQu\u00E9 es la energ\u00EDa potencial gravitacional?',
      options: [
        'La energ\u00EDa del movimiento.',
        'La energ\u00EDa almacenada por un objeto debido a su altura.',
        'La energ\u00EDa producida por el calor.',
        'La energ\u00EDa de la luz.',
      ],
      correctIndex: 1,
    },
    {
      question: '\u00BFDe qu\u00E9 depende principalmente la energ\u00EDa potencial gravitacional?',
      options: [
        'Masa y velocidad.',
        'Altura y temperatura.',
        'Masa, altura y gravedad.',
        'Velocidad y distancia.',
      ],
      correctIndex: 2,
    },
    {
      question: '\u00BFPor qu\u00E9 un objeto elevado almacena energ\u00EDa?',
      options: [
        'Porque est\u00E1 en movimiento.',
        'Porque tiene el potencial de caer y liberar energ\u00EDa.',
        'Porque est\u00E1 m\u00E1s cerca del Sol.',
        'Porque pesa menos.',
      ],
      correctIndex: 1,
    },
    {
      question: '\u00BFQu\u00E9 ocurre con la energ\u00EDa potencial durante una ca\u00EDda?',
      options: [
        'Desaparece completamente.',
        'Permanece constante.',
        'Se transforma en energ\u00EDa cin\u00E9tica.',
        'Se convierte en electricidad.',
      ],
      correctIndex: 2,
    },
    {
      question: 'Menciona un ejemplo cotidiano de energ\u00EDa potencial gravitacional.',
      options: [
        'Un auto en movimiento.',
        'Un libro sobre una mesa.',
        'Una bombilla encendida.',
        'Un ventilador funcionando.',
      ],
      correctIndex: 1,
    },
  ],
  timePerQuestion: 15,
  passThreshold: 4,
  feedback: {
    success: '\u00A1Incre\u00EDble!\n\nLos cinco anillos de la torre se iluminan. Una enorme onda gravitacional recorre el laboratorio. Todo el Centro de Investigaci\u00F3n Gravitacional vuelve a funcionar.',
    error: 'A\u00FAn necesitas reforzar los conceptos.\n\nRevisa qu\u00E9 es la energ\u00EDa potencial gravitacional, de qu\u00E9 depende y c\u00F3mo se transforma durante una ca\u00EDda.',
  },
}
