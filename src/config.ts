import { Option } from './types'

const features: Array<{
  name: string
  options: Array<Option>
}> = [
  {
    name: 'Background',
    options: [
      {
        name: 'blue',
        color: '#00b0ff',
      },
      {
        name: 'green',
        color: '#00ff00',
      },
      {
        name: 'orange',
        color: '#ffa500',
      },
    ],
  },
  {
    name: 'Shape',
    options: [
      {
        name: 'circle',
        href: require('/assets/shape/circle.svg'),
      },
      {
        name: 'square',
        href: require('/assets/shape/square.svg'),
      },
      {
        name: 'triangle',
        href: require('/assets/shape/triangle.svg'),
      },
    ],
  },
]

export default {
  viewBox: '0 0 100 100',
  features,
}
