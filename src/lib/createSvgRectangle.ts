/**
 * createSvgRectangle - Create a rectangle SVG element
 */
export function createSvgRectangle(color: string): SVGRectElement {
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
  rect.setAttribute('x', '0')
  rect.setAttribute('y', '0')
  rect.setAttribute('width', '100%')
  rect.setAttribute('height', '100%')
  rect.setAttribute('fill', color)

  return rect
}
