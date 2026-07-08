import type { RobotPathActivity } from '@/types/activity'

export const activity17: RobotPathActivity = {
  id: 'activity-17',
  type: 'robot-path',
  mode: 'light-rotation',
  title: 'Sistema de Prismas',
  instruction: 'Haz clic en cada espejo o prisma para girarlo 90 grados y dirigir el haz de luz hasta el receptor.',
  question: 'Orienta el sistema optico hasta que el haz atraviese todo el laboratorio y llegue al panel receptor.',
  items: [],
  correctOrder: [],
  nodes: [
    { id: 'source', label: 'emisor', type: 'source', x: 12, y: 74, initialRotation: 0, correctRotation: 0 },
    { id: 'mirror-a', label: 'espejo A', type: 'mirror', x: 34, y: 74, initialRotation: 90, correctRotation: 0 },
    { id: 'prism-a', label: 'prisma', type: 'prism', x: 54, y: 42, initialRotation: 180, correctRotation: 90 },
    { id: 'mirror-b', label: 'espejo B', type: 'mirror', x: 76, y: 28, initialRotation: 180, correctRotation: 270 },
    { id: 'receiver', label: 'receptor', type: 'receiver', x: 88, y: 68, initialRotation: 0, correctRotation: 0 },
  ],
  followUpQuestion: 'Como puede transformarse la energia luminica? Selecciona todas las respuestas validas.',
  followUpOptions: [
    'Energia electrica',
    'Energia quimica',
    'Energia termica',
  ],
  followUpCorrectIndices: [0, 1, 2],
  feedback: {
    success: 'Correcto.\n\nLa luz puede transformarse en energia electrica, quimica y termica segun el material y el sistema que la reciba.\n\nTodo el laboratorio se ilumina parcialmente.',
    error: 'Aun no esta resuelto.\n\nAlinea el haz completo y luego marca todas las transformaciones validas de la energia luminica.',
  },
}
