import { getMinWindowSize } from './getMinWindowSize'

/**
 * createSvgCanvas - Creates a canvas element with a minimum size
 */
export function createSvgCanvas(viewBox: string): SVGSVGElement {
  const size = String(getMinWindowSize())
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttribute('width', size)
  svg.setAttribute('height', size)
  svg.setAttribute('viewBox', viewBox)

  return svg
}
