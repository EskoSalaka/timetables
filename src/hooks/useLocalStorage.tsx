import { useState } from 'react'

const useLocalStorage = (itemName, defaultVal) => {
  const [item, setItem] = useState(() => {
    try {
      const item = window.localStorage.getItem(itemName)
      return item ? JSON.parse(item) : defaultVal
    } catch (error) {
      console.log(error)
      return defaultVal
    }
  })

  const setValue = value => {
    try {
      setItem(value)

      window.localStorage.setItem(itemName, JSON.stringify(value))
    } catch (error) {
      console.log(error)
    }
  }

  return [item, setValue]
}

export default useLocalStorage
