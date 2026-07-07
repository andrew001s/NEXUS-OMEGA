import type { MultipleChoiceActivity } from '@/types/activity'

export const activity10: MultipleChoiceActivity = {
  id: 'activity-10',
  type: 'multiple-choice',
  title: 'Consola Gravitacional',
  instruction: 'Lee la pregunta y selecciona la respuesta correcta para restaurar la consola.',
  question: '\u00BFQu\u00E9 es la energ\u00EDa potencial gravitacional?',
  options: [
    'La energ\u00EDa producida por el movimiento.',
    'La energ\u00EDa almacenada debido a la altura de un objeto respecto al suelo.',
    'La energ\u00EDa producida por la electricidad.',
    'La energ\u00EDa producida por la luz.',
  ],
  correctIndex: 1,
  feedback: {
    success: '\u00A1Correcto!\n\nLa energ\u00EDa potencial gravitacional es la energ\u00EDa almacenada por un objeto debido a su posici\u00F3n elevada. Todo objeto a cierta altura tiene el potencial de caer y liberar energ\u00EDa.\n\nLa consola vuelve a encenderse.',
    error: 'Incorrecto.\n\nLa energ\u00EDa potencial gravitacional no depende del movimiento ni de la electricidad. Es la energ\u00EDa almacenada por un objeto debido a su altura respecto al suelo.',
  },
}
