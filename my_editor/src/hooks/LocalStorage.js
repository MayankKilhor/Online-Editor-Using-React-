import { useEffect, useState } from 'react'
//With the help of HOOKS we are storing all the data present in the CodeEditors to LocalStorage
const PREFIX = 'online-editor-'

export default function LocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey)
    if (jsonValue != null) return JSON.parse(jsonValue)

    if (typeof initialValue === 'function') {
      return initialValue()
    } else {
      return initialValue
    }
  }) //checking the initial value of other editos and returning value according to that.

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value))
  }, [prefixedKey, value])//Setting the JSON values in local storage

  return [value, setValue]
}