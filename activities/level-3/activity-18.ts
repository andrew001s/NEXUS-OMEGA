import type { MultipleChoiceActivity } from '@/types/activity'

export const activity18: MultipleChoiceActivity = {
  id: 'activity-18',
  type: 'multiple-choice',
  title: 'Panel Solar Experimental',
  instruction: 'El panel ya recibe luz. Ahora identifica el proceso correcto para convertirla en electricidad.',
  question: 'Como la energia luminosa puede convertirse en energia electrica?',
  options: [
    'Mediante celdas fotovoltaicas.',
    'Mediante gravedad.',
    'Mediante combustion.',
    'Mediante friccion.',
  ],
  correctIndex: 0,
  feedback: {
    success: 'Correcto.\n\nLas celdas fotovoltaicas capturan la energia de la luz y la convierten en electricidad utilizable.\n\nEl panel genera electricidad y alimenta el Sistema Optico Central.',
    error: 'Respuesta incorrecta.\n\nLa conversion de luz a electricidad ocurre en celdas fotovoltaicas, no por combustion, friccion ni gravedad.',
  },
}
