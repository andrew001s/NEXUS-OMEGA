import { INTERACTIVE_OBJECT_STYLES } from '@/app/constants/styles/interactiveObjects'
import type { LevelConfig } from '@/types/level'

export const level2: LevelConfig = {
  id: 'level-2',
  title: 'Centro de Investigaci\u00F3n Gravitacional',
  background: '/backgrounds/level2.png',
  character: 'vega',
  introduction: [
    {
      speaker: 'VEGA',
      text: 'La gravedad parece invisible...',
    },
    {
      speaker: 'VEGA',
      text: 'pero mantiene unido el universo.',
    },
    {
      speaker: 'VEGA',
      text: 'Sin ella... todo perder\u00EDa el equilibrio.',
    },
    {
      speaker: 'VEGA',
      text: 'Necesitamos restaurar el Centro Gravitacional.',
    },
  ],
  completionDialogue: [
    {
      speaker: 'VEGA',
      text: 'Excelente trabajo.',
    },
    {
      speaker: 'VEGA',
      text: 'Ahora comprendes que un objeto puede almacenar energ\u00EDa gracias a su posici\u00F3n.',
    },
    {
      speaker: 'VEGA',
      text: 'La gravedad no solo atrae los cuerpos... tambi\u00E9n permite transformar la energ\u00EDa de formas sorprendentes.',
    },
    {
      speaker: 'VEGA',
      text: 'La expedici\u00F3n contin\u00FAa.',
    },
  ],
  nextLevel: 'level-3',
  interactiveObjects: [
    {
      id: 'consola',
      type: 'interactive',
      title: 'Consola Gravitacional',
      area: { x: -2, y: 58, width: 20, height: 28 },
      unlockAfter: null,
      activityId: 'activity-10',
      visual: {
        resource: '/assets/level2/consola.png',
        transform: 'perspective(1000px) rotateY(20deg) rotateZ(1deg)',
        transformOrigin: 'center center',
        fit: 'fill',
        opacity: 1,
        className: INTERACTIVE_OBJECT_STYLES.hoverDefault,
      },
    },
    {
      id: 'esfera',
      type: 'interactive',
      title: 'Esfera Met\u00E1lica',
      area: { x: 40, y: 22, width: 16, height: 25 },
      unlockAfter: 'consola',
      activityId: 'activity-11',
      visual: {
        resource: '/assets/level2/esfera.png',
        transform: 'perspective(1000px)  rotateZ(0.5deg)',
        transformOrigin: 'center center',
        fit: 'fill',
        opacity: 1,
        className: INTERACTIVE_OBJECT_STYLES.hoverDefault,
      },
    },
    {
      id: 'simulador',
      type: 'interactive',
      title: 'Simulador de Gravedad',
      area: { x: 50, y: 55, width: 13, height: 20 },
      unlockAfter: 'esfera',
      activityId: 'activity-14',
      visual: {
        resource: '/assets/level2/simulador.png',
        transform: 'perspective(1000px) rotateZ(-0.5deg)',
        transformOrigin: 'center center',
        fit: 'fill',
        opacity: 1,
        className: INTERACTIVE_OBJECT_STYLES.hoverDefault,
      },
    },
    {
      id: 'torre',
      type: 'interactive',
      title: 'Torre Gravitacional',
      area: { x: 82, y: 4, width: 18, height: 78 },
      unlockAfter: 'simulador',
      activityId: 'activity-15',
      visual: {
        resource: '/assets/level2/torre.png',
        transform: 'perspective(1200px) rotateZ(0.8deg)',
        transformOrigin: 'center center',
        fit: 'fill',
        opacity: 1,
        className: INTERACTIVE_OBJECT_STYLES.hoverDefault,
      },
    },
  ],
}
