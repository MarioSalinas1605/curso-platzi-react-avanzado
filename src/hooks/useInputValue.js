import { useState } from 'react'

export const useInputValue = initialValue => {
  const [value, setVAlue] = useState(initialValue)
  const onChange = e => setVAlue(e.target.value)
  return { value, onChange }
}
