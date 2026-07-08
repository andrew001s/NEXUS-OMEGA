import type { DragOrderActivity } from '@/types/activity'

export const activity25: DragOrderActivity = {
  id: 'activity-25',
  type: 'drag-order',
  title: 'Reaccion Quimica',
  instruction: 'Ordena las etapas para que la reaccion ocurra correctamente dentro de la camara.',
  question: 'Coloca las fases del proceso quimico en el orden correcto hasta liberar energia.',
  items: ['Reactivos', 'Reaccion quimica', 'Liberacion de energia', 'Productos'],
  correctOrder: [0, 1, 2, 3],
  feedback: {
    success: 'Excelente.\n\nPrimero ingresan los reactivos, luego ocurre la reaccion quimica, se libera energia y finalmente se forman los productos.\n\nDurante una reaccion se rompen y forman enlaces, los atomos se reorganizan y la energia puede liberarse o absorberse.',
    error: 'Aun no.\n\nRecuerda que los reactivos entran primero, la reaccion transforma sus enlaces, puede liberar energia y despues aparecen los productos.',
  },
}
