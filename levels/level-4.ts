import { INTERACTIVE_OBJECT_STYLES } from '@/app/constants/styles/interactiveObjects'
import type { LevelConfig } from '@/types/level'

export const level4: LevelConfig = {
  id: 'level-4',
  title: 'Central Electrotecnologica',
  background: '/backgrounds/level4.png',
  character: 'volt',
  introduction: [
    {
      speaker: 'VOLT',
      text: 'La electricidad conecta practicamente toda nuestra tecnologia.',
    },
    {
      speaker: 'VOLT',
      text: 'Sin ella...',
    },
    {
      speaker: 'VOLT',
      text: 'el conocimiento permanece atrapado.',
    },
    {
      speaker: 'VOLT',
      text: 'Debemos restaurar el flujo de energia.',
    },
  ],
  completionDialogue: [
    {
      speaker: 'VOLT',
      text: 'Excelente trabajo.',
    },
    {
      speaker: 'VOLT',
      text: 'Ahora comprendes como la electricidad permite que la tecnologia funcione y como puede transformarse en otras formas de energia.',
    },
    {
      speaker: 'SISTEMA',
      text: 'NIVEL COMPLETADO',
    },
    {
      speaker: 'SISTEMA',
      text: 'Energia Electrica Restaurada',
    },
    {
      speaker: 'VOLT',
      text: 'La expedicion esta cada vez mas cerca del Nucleo de Conservacion.',
    },
  ],
  nextLevel: 'level-5',
  interactiveObjects: [
    {
      id: 'consola-electrica',
      type: 'interactive',
      title: 'Consola Electrica',
      area: { x: -5, y: 54, width: 38, height: 46 },
      unlockAfter: null,
      activityId: 'activity-20',
      visual: {
        resource: '/assets/level4/consola.png',
        transform: 'perspective(1000px) rotateY(20deg) rotateZ(0deg)',
        transformOrigin: 'center center',
        fit: 'fill',
        opacity: 1,
        className: INTERACTIVE_OBJECT_STYLES.hoverDefault,
      },
    },
    {
      id: 'circuito-experimental',
      type: 'interactive',
      title: 'Circuito Experimental',
      area: { x: 34, y: 77, width: 18, height: 16 },
      unlockAfter: 'consola-electrica',
      activityId: 'activity-21',
      visual: {
        resource: '/assets/level4/circuito.png',
        transform: 'perspective(1000px) rotateZ(-1deg)',
        transformOrigin: 'center center',
        fit: 'fill',
        opacity: 1,
        className: INTERACTIVE_OBJECT_STYLES.hoverDefault,
      },
    },
    {
      id: 'distribuidor-energia',
      type: 'interactive',
      title: 'Distribuidor de Energia',
      area: { x: 45, y: 51, width: 15, height: 31 },
      unlockAfter: 'circuito-experimental',
      activityId: 'activity-22',
      visual: {
        resource: '/assets/level4/distribuidor.png',
        transform: 'perspective(1000px) rotateZ(-0.5deg)',
        transformOrigin: 'center center',
        fit: 'fill',
        opacity: 1,
        className: INTERACTIVE_OBJECT_STYLES.hoverDefault,
      },
    },
    {
      id: 'nucleo-electrico',
      type: 'interactive',
      title: 'Nucleo Electrico',
      area: { x: 58, y: 1, width: 30, height: 80 },
      unlockAfter: 'distribuidor-energia',
      activityId: 'activity-23',
      visual: {
        resource: '/assets/level4/nucleo.png',
        transform: 'perspective(1200px) rotateZ(0.8deg)',
        transformOrigin: 'center center',
        fit: 'fill',
        opacity: 1,
        className: INTERACTIVE_OBJECT_STYLES.hoverDefault,
      },
    },
  ],
}
