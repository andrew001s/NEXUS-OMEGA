import type { MultipleChoiceActivity } from '@/types/activity'

export const activity13: MultipleChoiceActivity = {
  id: 'activity-13',
  type: 'multiple-choice',
  title: 'Roca Suspendida',
  instruction: 'La roca permanece suspendida. Al liberarla caer\u00E1. Responde qu\u00E9 ocurre con su energ\u00EDa durante la ca\u00EDda.',
  question: '\u00BFQu\u00E9 ocurre con la energ\u00EDa potencial durante la ca\u00EDda?',
  options: [
    'Desaparece.',
    'Se transforma progresivamente en energ\u00EDa cin\u00E9tica.',
    'Permanece igual.',
    'Se convierte \u00FAnicamente en calor.',
  ],
  correctIndex: 1,
  feedback: {
    success: '\u00A1Correcto!\n\nDurante la ca\u00EDda, la energ\u00EDa potencial gravitacional se transforma gradualmente en energ\u00EDa cin\u00E9tica. Al llegar al suelo, casi toda la energ\u00EDa potencial se ha convertido en energ\u00EDa cin\u00E9tica.\n\nLa roca activa un antiguo mecanismo.',
    error: 'Incorrecto.\n\nLa energ\u00EDa no desaparece, sino que se transforma. Durante una ca\u00EDda, la energ\u00EDa potencial se convierte en energ\u00EDa cin\u00E9tica a medida que el objeto gana velocidad.',
  },
}
