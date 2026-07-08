import type { MultipleChoiceActivity } from '@/types/activity'

export const activity22: MultipleChoiceActivity = {
  id: 'activity-22',
  type: 'multiple-choice',
  title: 'Distribuidor de Energia',
  instruction: 'Observa los dispositivos e identifica en cual la energia electrica se transforma en movimiento.',
  question: 'Cual de estos dispositivos representa una transformacion de energia electrica a energia cinetica?',
  options: [
    'Bombilla',
    'Ventilador',
    'Panel solar',
    'Computadora',
  ],
  correctIndex: 1,
  feedback: {
    success: 'Correcto.\n\nEn el ventilador, la energia electrica alimenta un motor que produce movimiento en las aspas, es decir, energia cinetica.\n\nEl distribuidor vuelve a repartir energia por la central.',
    error: 'Respuesta incorrecta.\n\nLa bombilla transforma principalmente en luz y calor, el panel solar convierte luz en electricidad y la computadora usa varias transformaciones, pero el ejemplo mas claro de electrica a cinetica es el ventilador.',
  },
}
