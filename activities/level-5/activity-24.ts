import type { MultipleChoiceActivity } from '@/types/activity'

export const activity24: MultipleChoiceActivity = {
  id: 'activity-24',
  type: 'multiple-choice',
  title: 'Consola Bioquimica',
  instruction: 'Restaura la consola identificando el concepto correcto sobre la energia quimica.',
  question: 'Que es la energia quimica?',
  options: [
    'La energia almacenada en los enlaces quimicos de las moleculas.',
    'La energia producida unicamente por el calor.',
    'La energia producida por la gravedad.',
    'La energia emitida por la luz.',
  ],
  correctIndex: 0,
  feedback: {
    success: 'Correcto.\n\nLa energia quimica esta almacenada en los enlaces entre atomos y moleculas, y puede liberarse o transformarse durante una reaccion.\n\nLa consola bioquimica vuelve a encenderse.',
    error: 'Respuesta incorrecta.\n\nLa energia quimica no depende solo del calor, la gravedad ni la luz: se almacena en los enlaces quimicos.',
  },
}
