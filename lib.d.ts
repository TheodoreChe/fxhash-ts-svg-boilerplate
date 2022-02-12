declare let fxhash: string
declare let fxrand: () => number

declare interface Window {
  $fxhashFeatures: Record<string, string>
}

declare module '*.svg' {
  const content: never
  export default content
}
