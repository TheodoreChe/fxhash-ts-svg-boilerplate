/**
 * createSvgImageFromPath - Create an SVG image from a path
 */
export function createSvgImage(href: string): SVGImageElement {
  const image = document.createElementNS('http://www.w3.org/2000/svg', 'image')
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  image.setAttribute('href', href)
  image.setAttribute('x', '0')
  image.setAttribute('y', '0')
  image.setAttribute('width', '100%')
  image.setAttribute('height', '100%')

  return image
}
