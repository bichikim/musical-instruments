import {pxSize} from 'src/px-size'
export type EmOrRem = 'em' | 'rem'

const DEFAULT_BASE_SIZE = 16

export const toEm = (
  size: number | string,
  baseSize: number = DEFAULT_BASE_SIZE,
  type: EmOrRem = 'em',
) => {
  const _size = pxSize(size)

  return `${_size / baseSize}${type}`
}

export const toRem = (size: number | string, baseSize: number = DEFAULT_BASE_SIZE) => {
  return toEm(size, baseSize, 'rem')
}
