import {isSSR} from 'src/is-ssr'

export const createIsPassiveEventSupported = () => {
  let _passiveSupported: any = false
  // passive feature detection

  const reader = () => _passiveSupported
  try {
    if (isSSR()) {
      return reader
    }
    const object = Object.defineProperty({}, 'passive', {
      get: function () {
        _passiveSupported = true
      },
    })
    window.addEventListener('test', null, object)
    window.removeEventListener('test', null, object)
  } catch {
    // skip
  }
  return reader
}

export const isPassiveEventSupported = createIsPassiveEventSupported()
