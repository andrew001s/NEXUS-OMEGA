import { INTERACTIVE_OBJECT_STYLES } from '@/app/constants/styles/interactiveObjects'
import type { LevelConfig } from '@/types/level'

export const level3: LevelConfig = {
  id: 'level-3',
  title: 'Instituto Fotonico',
  background: '/backgrounds/level3.png',
  character: 'lumen',
  introduction: [
    {
      speaker: 'LUMEN',
      text: 'La oscuridad no solo impide ver...',
    },
    {
      speaker: 'LUMEN',
      text: 'tambien detiene la vida.',
    },
    {
      speaker: 'LUMEN',
      text: 'La luz transporta energia.',
    },
    {
      speaker: 'LUMEN',
      text: 'Y hoy debemos devolver esa energia al laboratorio.',
    },
  ],
  completionDialogue: [
    {
      speaker: 'LUMEN',
      text: 'Excelente trabajo.',
    },
    {
      speaker: 'LUMEN',
      text: 'Ahora comprendes que la luz tambien transporta energia y puede transformarse para alimentar el mundo que nos rodea.',
    },
    {
      speaker: 'SISTEMA',
      text: 'NIVEL COMPLETADO',
    },
    {
      speaker: 'SISTEMA',
      text: 'Energia Luminica Restaurada',
    },
    {
      speaker: 'LUMEN',
      text: 'La expedicion continua.',
    },
  ],
  nextLevel: 'level-4',
  interactiveObjects: [
    {
      id: 'consola-fotonica',
      type: 'interactive',
      title: 'Consola Fotonica',
      area: { x: -13, y: 20, width: 50, height: 90 },
      unlockAfter: null,
      activityId: 'activity-16',
      visual: {
        resource: '/assets/level3/consola.png',
        transform: 'perspective(1000px) rotateY(20deg) rotateZ(1deg)',
        transformOrigin: 'center center',
        fit: 'fill',
        opacity: 1,
        className: INTERACTIVE_OBJECT_STYLES.hoverDefault,
      },
    },
    {
      id: 'panel-solar',
      type: 'interactive',
      title: 'Panel Solar Experimental',
      area: { x: 40, y: 45, width: 40, height: 56 },
      unlockAfter: 'consola-fotonica',
      activityId: 'activity-18',
      visual: {
        resource: '/assets/level3/panel.png',
        transform: 'perspective(1000px) rotateZ(-0.5deg)',
        transformOrigin: 'center center',
        fit: 'fill',
        opacity: 1,
        className: INTERACTIVE_OBJECT_STYLES.hoverDefault,
      },
    },
    {
      id: 'sistema-optico-central',
      type: 'interactive',
      title: 'Sistema Optico Central',
      area: { x: 16, y: 25, width: 30, height: 66 },
      unlockAfter: 'panel-solar',
      activityId: 'activity-19',
      visual: {
        resource: '/assets/level3/sistema.png',
        transform: 'perspective(1200px) rotateZ(0.8deg)',
        transformOrigin: 'center center',
        fit: 'fill',
        opacity: 1,
        zIndex: 0,
        className: INTERACTIVE_OBJECT_STYLES.hoverDefault,
      },
    },
  ],
}
