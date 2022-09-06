import {pxSize} from '../index'

describe('pxSize', () => {
  it('should return number  size', () => {
    expect(pxSize('10px')).toBe(10)
    expect(pxSize('10p')).toBe(0)
    expect(pxSize('10pxd')).toBe(0)
    expect(pxSize('10px02')).toBe(0)
    expect(pxSize('10')).toBe(10)
    expect(pxSize(10)).toBe(10)
  })
})
