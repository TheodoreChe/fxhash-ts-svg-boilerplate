import { Layer, OptionsList } from '../types'
import { createSvgImage } from './createSvgImage'
import { createSvgRectangle } from './createSvgRectangle'

/**
 * getSvgLayersList - Returns a list of layers to be used in the SVG canvas
 */
export function getSvgLayersList(options: OptionsList): Layer[] {
  return options.map(({ featureName, option: { href, color, name } }) => {
    const image = href && createSvgImage(href)
    const rect = !href && color && createSvgRectangle(color)
    const svg = image || rect || null

    return {
      featureName,
      optionName: name,
      svg,
    }
  })
}
