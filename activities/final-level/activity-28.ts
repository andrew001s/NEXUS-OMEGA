import type { DragOrderActivity } from '@/types/activity'

export const activity28: DragOrderActivity = {
  id: 'activity-28',
  type: 'drag-order',
  title: 'Cascada de Energia',
  instruction: 'Ordena la cadena completa de transformaciones hasta que la luz vuelva a nacer del sistema.',
  question: 'Reconstruye la cascada de energia respetando el orden correcto de transformacion.',
  items: ['Quimica', 'Potencial gravitacional', 'Cinetica', 'Electrica', 'Luminica'],
  correctOrder: [0, 1, 2, 3, 4],
  feedback: {
    success: 'Correcto.\n\nLa energia quimica puede impulsar un sistema que acumula energia potencial gravitacional, luego se transforma en cinetica, despues en electrica y finalmente en luminica.\n\nEl primer pilar energetico se activa.',
    error: 'Aun no.\n\nRecuerda que la energia no desaparece: se transforma paso a paso entre distintos sistemas.',
  },
}
