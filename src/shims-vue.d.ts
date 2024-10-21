/* eslint-disable */
declare module '*.vue'
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '*.svg' {
  const src: string
  export default src
}

declare module '*?raw' {
  const src: string
  export default src
}
