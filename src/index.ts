import { createSvgCanvas, getRandomOptionsList, getSvgLayersList } from './lib'
import config from './config'
import { Layer } from './types'

/**
 * Setup - Initializes the project and creates the SVG from the options
 */
function Setup() {
  const canvas = createSvgCanvas(config.viewBox)
  const options = getRandomOptionsList()
  const layers: Layer[] = getSvgLayersList(options)

  // Add the layers to the canvas
  layers.forEach(({ svg }) => svg && canvas.appendChild(svg))

  // Add the canvas to the DOM
  document.body.appendChild(canvas)

  // Get $fxhashFeatures from layers
  window.$fxhashFeatures = layers.reduce((acc, { featureName, optionName }) => {
    return { ...acc, [featureName]: optionName }
  }, {})
}

export default Setup()
