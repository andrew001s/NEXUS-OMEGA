import type { DragOrderActivity } from '@/types/activity'

export const activity29: DragOrderActivity = {
  id: 'activity-29',
  type: 'drag-order',
  title: 'Ecosistema Inteligente',
  instruction: 'Organiza el ciclo energetico natural para restaurar el segundo pilar del nucleo.',
  question: 'Coloca las etapas del ecosistema en el orden en que la energia fluye y se transforma.',
  items: ['Luz solar', 'Fotosintesis', 'Plantas', 'Animales', 'Movimiento', 'Energia cinetica', 'Materia organica'],
  correctOrder: [0, 1, 2, 6, 3, 4, 5],
  feedback: {
    success: 'Excelente.\n\nLa luz solar impulsa la fotosintesis, las plantas almacenan energia en materia organica, los animales la aprovechan y el movimiento expresa esa transformacion como energia cinetica.\n\nEl segundo pilar energetico se activa.',
    error: 'No del todo.\n\nPiensa en como la luz se convierte en materia organica y luego en movimiento dentro de los seres vivos.',
  },
}
