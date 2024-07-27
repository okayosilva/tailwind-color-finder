import { Color, tailwindColors } from '../mock/tailwindColors'

// Converte um valor hexadecimal para RGB
function hexToRgb(hex: string): [number, number, number] {
  const bigint = parseInt(hex.slice(1), 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return [r, g, b]
}

// Calcula a distância euclidiana entre duas cores RGB
function colorDistance(
  rgb1: [number, number, number],
  rgb2: [number, number, number],
): number {
  return Math.sqrt(
    Math.pow(rgb1[0] - rgb2[0], 2) +
      Math.pow(rgb1[1] - rgb2[1], 2) +
      Math.pow(rgb1[2] - rgb2[2], 2),
  )
}

// Encontra as 3 cores mais próximas da cor de entrada a partir de uma lista de cores
export function findThreeNearestColors(inputColor: string): Color[] {
  const inputRgb = hexToRgb(inputColor)
  const distances: { color: Color; distance: number }[] = tailwindColors.map(
    (color) => {
      return { color, distance: colorDistance(inputRgb, hexToRgb(color.value)) }
    },
  )

  distances.sort((a, b) => a.distance - b.distance)

  return distances.slice(0, 3).map((entry) => entry.color)
}
