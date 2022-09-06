import {createQueryString} from '../create-query-string'

describe('resolveQuery', () => {
  it('should ', () => {
    const result = createQueryString({
      bar: '_bar',
      foo: '_foo',
      john: '_john',
    })

    expect(result).toBe('?bar=_bar&foo=_foo&john=_john')
  })
})
