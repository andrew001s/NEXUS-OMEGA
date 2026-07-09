export interface StorySceneMotion {
  fromScale: number
  toScale: number
  fromX?: string
  toX?: string
  fromY?: string
  toY?: string
}

export interface StoryScene {
  id: string
  text: string
  backgroundImage: string
  overlayColor: string
  duration: number
  motion: StorySceneMotion
}
