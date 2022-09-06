import {chunk} from 'src/lodash'

export const fnChunk =
  (size?: number) =>
  <T>(list: T[] | null | undefined): T[][] =>
    chunk<T>(list, size)
