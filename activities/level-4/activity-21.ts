import type { RobotPathActivity } from '@/types/activity'

export const activity21: RobotPathActivity = {
  id: 'activity-21',
  type: 'robot-path',
  title: 'Circuito Experimental',
  instruction: 'Ordena los modulos para cerrar el circuito. Cada terminal magnetico se acopla solo si va en el paso correcto.',
  question: 'Conecta el circuito en la secuencia correcta para que la corriente llegue a la bombilla.',
  items: ['Fuente', 'Cable conductor', 'Interruptor', 'Bombilla'],
  correctOrder: [0, 1, 2, 3],
  feedback: {
    success: 'Excelente.\n\nEl circuito queda cerrado: la fuente entrega energia, el conductor permite el paso de los electrones, el interruptor habilita el recorrido y la bombilla recibe la corriente.\n\nAhora la electricidad circula porque existe un circuito conductor completo.',
    error: 'Aun no.\n\nLa electricidad necesita un recorrido completo desde la fuente hasta la bombilla. Revisa el orden del circuito y vuelve a intentarlo.',
  },
}
