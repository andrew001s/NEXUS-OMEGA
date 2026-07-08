import type { BossQuizActivity } from '@/types/activity'

export const activity26: BossQuizActivity = {
  id: 'activity-26',
  type: 'boss-quiz',
  title: 'Analizador Molecular',
  instruction: 'Selecciona rapidamente cuales opciones representan reservas o fuentes de energia quimica.',
  questions: [
    {
      question: 'Cual de estas opciones almacena energia quimica?',
      options: ['Alimentos', 'Luz del Sol', 'Sombra', 'Vapor de agua'],
      correctIndex: 0,
    },
    {
      question: 'Cual de estas opciones almacena energia quimica?',
      options: ['Combustibles', 'Eco', 'Viento', 'Calor del ambiente'],
      correctIndex: 0,
    },
    {
      question: 'Cual de estas opciones almacena energia quimica?',
      options: ['Baterias', 'Reflejo', 'Altura', 'Sonido'],
      correctIndex: 0,
    },
    {
      question: 'Cual NO almacena energia quimica?',
      options: ['Azucar', 'Luz del Sol', 'Gasolina', 'Pila'],
      correctIndex: 1,
    },
  ],
  timePerQuestion: 10,
  passThreshold: 4,
  feedback: {
    success: 'Correcto.\n\nEl analizador identifica alimentos, combustibles y baterias como sistemas donde la energia quimica puede almacenarse o aprovecharse.',
    error: 'Aun hay confusion.\n\nLa energia quimica se reconoce en sustancias y sistemas donde la energia queda almacenada en enlaces quimicos.',
  },
}
