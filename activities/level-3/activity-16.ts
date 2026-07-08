import type { MultipleChoiceActivity } from '@/types/activity'

export const activity16: MultipleChoiceActivity = {
  id: 'activity-16',
  type: 'multiple-choice',
  title: 'Consola Fotonica',
  instruction: 'Activa la consola identificando el concepto correcto antes de restaurar el resto del laboratorio.',
  question: 'Que es la energia luminica?',
  options: [
    'La energia producida por el movimiento.',
    'La energia transportada por la luz.',
    'La energia almacenada en un objeto.',
    'La energia generada por el sonido.',
  ],
  correctIndex: 1,
  feedback: {
    success: 'Correcto.\n\nLa energia luminica es la energia que viaja con la luz. Gracias a ella podemos iluminar, calentar y activar sistemas como paneles solares.\n\nLa consola vuelve a iluminarse.',
    error: 'Respuesta incorrecta.\n\nLa energia luminica no depende del movimiento ni del sonido: viaja con la luz y puede transformarse en otras formas de energia.',
  },
}
