export type Option = {
  name: string
  href?: string
  color?: string
}

export type OptionsList = Array<{ featureName: string; option: Option }>

export type Layer = {
  featureName: string
  optionName: string
  svg: SVGImageElement | SVGRectElement | null
}
