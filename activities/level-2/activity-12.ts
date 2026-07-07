import type { MultipleChoiceActivity } from '@/types/activity'

export const activity12: MultipleChoiceActivity = {
  id: 'activity-12',
  type: 'multiple-choice',
  title: 'Laboratorio de Comparaci\u00F3n',
  instruction: 'Observa los objetos y selecciona cu\u00E1l posee mayor energ\u00EDa potencial gravitacional. Solo razonamiento, no realices c\u00E1lculos.',
  question: '\u00BFQu\u00E9 objeto tiene mayor energ\u00EDa potencial gravitacional?',
  options: [
    'Una pluma de 0.01 kg sobre una mesa a 1 m del suelo.',
    'Una roca de 50 kg en el suelo.',
    'Una roca de 50 kg sobre una plataforma a 10 m de altura.',
    'Un libro de 2 kg sobre una silla a 0.5 m del suelo.',
  ],
  correctIndex: 2,
  feedback: {
    success: '\u00A1Correcto!\n\nLa roca de 50 kg a 10 m de altura tiene la mayor energ\u00EDa potencial gravitacional. A mayor masa y mayor altura, mayor energ\u00EDa potencial. La masa y la altura son los factores clave.\n\nEl laboratorio de comparaci\u00F3n se ilumina.',
    error: 'Incorrecto.\n\nLa energ\u00EDa potencial gravitacional depende de la masa y la altura. El objeto m\u00E1s pesado y m\u00E1s elevado tendr\u00E1 la mayor energ\u00EDa potencial gravitacional.',
  },
}
