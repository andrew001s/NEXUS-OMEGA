export interface Area {
  x: number
  y: number
  width: number
  height: number
}

export interface InteractiveObjectVisualConfig {
  resource?: string
  transform?: string
  transformOrigin?: string
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  opacity?: number
  inset?: string
  zIndex?: number
  className?: string
}

export interface InteractiveObjectConfig {
  id: string
  type: string
  title: string
  area: Area
  unlockAfter: string | null
  activityId: string
  visual?: InteractiveObjectVisualConfig
}

export interface DialogueLine {
  speaker: string
  text: string
}

export interface LevelConfig {
  id: string
  title: string
  background: string
  character: string
  introduction: DialogueLine[]
  completionDialogue: DialogueLine[]
  nextLevel: string | null
  interactiveObjects: InteractiveObjectConfig[]
}
