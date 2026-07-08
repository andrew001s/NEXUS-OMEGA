import type { MultipleChoiceActivity } from '@/types/activity'

export const activity20: MultipleChoiceActivity = {
  id: 'activity-20',
  type: 'multiple-choice',
  title: 'Consola Electrica',
  instruction: 'Restaura la consola identificando primero el concepto correcto.',
  question: 'Que es la energia electrica?',
  options: [
    'La energia producida por el calor.',
    'La energia producida por el movimiento de cargas electricas.',
    'La energia almacenada por la gravedad.',
    'La energia emitida por la luz.',
  ],
  correctIndex: 1,
  feedback: {
    success: 'Correcto.\n\nLa energia electrica aparece cuando las cargas electricas se mueven a traves de un material conductor.\n\nLa consola vuelve a encenderse y reactiva el circuito experimental.',
    error: 'Respuesta incorrecta.\n\nLa energia electrica no depende de la gravedad ni de la luz: se relaciona con el movimiento de cargas electricas.',
  },
}
