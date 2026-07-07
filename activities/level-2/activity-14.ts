import type { SliderActivity } from '@/types/activity'

export const activity14: SliderActivity = {
  id: 'activity-14',
  type: 'slider',
  title: 'Simulador de Gravedad',
  instruction: 'Ajusta la altura del objeto con el deslizador y observa c\u00F3mo cambia la energ\u00EDa potencial gravitacional en la barra.',
  question: '\u00BFPor qu\u00E9 aument\u00F3 la energ\u00EDa potencial gravitacional al aumentar la altura?',
  label: 'Altura',
  min: 0,
  max: 100,
  step: 1,
  correctValue: 1,
  tolerance: 100,
  unit: 'm',
  feedback: {
    success: '\u00A1Correcto!\n\nAl aumentar la altura, el objeto almacena m\u00E1s energ\u00EDa potencial gravitacional. La f\u00F3rmula es Ep = m \u00D7 g \u00D7 h, donde h es la altura. La energ\u00EDa potencial es directamente proporcional a la altura, la masa y la gravedad.\n\nEl simulador de gravedad se estabiliza.',
    error: 'Observa c\u00F3mo la barra de energ\u00EDa cambia al modificar la altura. La energ\u00EDa potencial gravitacional aumenta con la altura, la masa y la gravedad. A mayor altura, mayor energ\u00EDa almacenada.',
  },
}
