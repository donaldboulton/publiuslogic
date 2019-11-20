import { useState } from 'react'

export const useLocalStorage = (key, initialValue, options = {}) => {
  const { deleteKeyIfValueIs = null } = options
  // We pass useState a function that handles initial state
  // creation. That way, the function is executed only once.
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof localStorage !== `undefined`) {
      document.addEventListener(`localStorage:${key}Change`, event =>
        setStoredValue(event.detail)
      )
      // eslint-disable-next-line no-undef
      const item = localStorage[key]
      // eslint-disable-next-line no-undef
      if (!item) localStorage[key] = JSON.stringify(initialValue)
      return item ? JSON.parse(item) : initialValue
    } else return initialValue
  })
  const setValue = value => {
    // allow value to be a function which takes the current value
    // to conform to useState API
    const valueToStore = value instanceof Function ? value(storedValue) : value
    setStoredValue(valueToStore)
    // eslint-disable-next-line no-undef
    const event = new CustomEvent(`localStorage:${key}Change`, {
      detail: valueToStore,
    })
    document.dispatchEvent(event)
    if (value === deleteKeyIfValueIs) delete localStorage[key]
    // eslint-disable-next-line no-undef
    else localStorage[key] = JSON.stringify(valueToStore)
  }
  return [storedValue, setValue]
}
