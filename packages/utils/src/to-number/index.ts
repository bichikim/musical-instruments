import {toNumber as _toNumber} from 'src/lodash'

export const toNumber = (value?: any, failValue: number = 0): number => {
  const number = _toNumber(value)

  return Number.isNaN(number) ? failValue : number
}
