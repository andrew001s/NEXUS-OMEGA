import type { SimulatorActivity } from '@/types/activity'

export const activity05: SimulatorActivity = {
  id: 'activity-05',
  type: 'simulator',
  title: 'Terminal de Simulación',
  instruction: 'Simulador de Energía Cinética',
  description:
    'Selecciona un vehículo, ajusta su velocidad con el deslizador y observa cómo cambia la energía cinética en tiempo real. Luego responde la pregunta.',
  vehicles: [
    { id: 'bici', name: 'Bicicleta', massKg: 15, maxSpeed: 12, emoji: '\uD83D\uDEB2' },
    { id: 'auto', name: 'Automóvil', massKg: 1000, maxSpeed: 40, emoji: '\uD83D\uDE97' },
    { id: 'camion', name: 'Camión', massKg: 5000, maxSpeed: 28, emoji: '\uD83D\uDE9B' },
  ],
  followUpQuestion:
    '\u00BFPor qu\u00E9 aument\u00F3 la energ\u00EDa cin\u00E9tica al aumentar la velocidad?',
  followUpOptions: [
    'Porque la energ\u00EDa cin\u00E9tica es proporcional al cuadrado de la velocidad.',
    'Porque la masa del veh\u00EDculo aumenta con la velocidad.',
    'Porque el veh\u00EDculo se calienta al moverse m\u00E1s r\u00E1pido.',
    'Porque la energ\u00EDa se crea a partir del movimiento.',
  ],
  followUpCorrectIndex: 0,
  feedback: {
    success:
      '\u00A1Correcto!\n\nLa energ\u00EDa cin\u00E9tica crece con el cuadrado de la velocidad (Ec = \u00BDmv\u00B2). Si duplicas la velocidad, \u00A1la energ\u00EDa cin\u00E9tica se cuadruplica!\n\nLa Terminal de Simulaci\u00F3n se estabiliza.',
    error:
      'Incorrecto.\n\nRecuerda la f\u00F3rmula: Ec = \u00BD \u00D7 m \u00D7 v\u00B2. La velocidad est\u00E1 elevada al cuadrado, por lo que peque\u00F1os cambios en velocidad producen grandes cambios en energ\u00EDa cin\u00E9tica.',
  },
}
