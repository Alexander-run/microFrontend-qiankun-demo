import React, { useState } from 'react'
import { 
  Button
} from 'antd'

const Counter = () => {
  const [count, setCount] = useState(0)
  const add = () => {
    setCount(1)
  }
  const decrease = () => {
    setCount(-1)
  }
  const reset = () => {
    setCount(0)
  }
  return (
    <>
      <div>{count}</div>
      <Button onClick={decrease}>-</Button>
      <Button onClick={add}>+</Button>
      <Button onClick={reset}>reset</Button>
    </>
  )
}

export default Counter
