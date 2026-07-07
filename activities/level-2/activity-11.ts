import type { FillBlanksActivity } from '@/types/activity'

export const activity11: FillBlanksActivity = {
  id: 'activity-11',
  type: 'fill-blanks',
  title: 'Esfera Met\u00E1lica',
  instruction: 'Arrastra la esfera hasta la plataforma elevada y completa los espacios con las palabras correctas.',
  text: 'La esfera tiene mayor energ\u00EDa potencial gravitacional porque aument\u00F3 su [altura]. La energ\u00EDa potencial depende de la [masa] del objeto y de la aceleraci\u00F3n de la [gravedad].',
  blanks: [
    { placeholder: '______', index: 0 },
    { placeholder: '______', index: 1 },
    { placeholder: '______', index: 2 },
  ],
  correctAnswers: ['altura', 'masa', 'gravedad'],
  feedback: {
    success: '\u00A1Correcto!\n\nLa energ\u00EDa potencial gravitacional depende de tres factores: la altura, la masa del objeto y la aceleraci\u00F3n de la gravedad. Al elevar la esfera, aument\u00F3 su altura y por tanto su energ\u00EDa potencial.\n\nLa plataforma comienza a iluminarse.',
    error: 'Revisa los conceptos.\n\nLa energ\u00EDa potencial gravitacional depende de la masa, la altura y la gravedad. Al elevar un objeto, aumentamos su altura y su capacidad de almacenar energ\u00EDa.',
  },
}
