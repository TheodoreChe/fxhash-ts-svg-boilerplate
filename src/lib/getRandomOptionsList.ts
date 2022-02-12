import { Option, OptionsList } from '../types'
import config from '../config'
import { getRandFromList } from './getRandFromList'

/**
 * getRandomOptionsList - Returns a random list of options
 */
export function getRandomOptionsList(): OptionsList {
  return config.features.map((feature) => ({
    featureName: feature.name,
    option: getRandFromList<Option>(feature.options),
  }))
}
