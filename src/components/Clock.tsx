import React, { useState, useEffect } from 'react'
import { Typography } from '@material-ui/core'

const Clock = () => {
  const [time, setTime] = useState(new Date())
  const tick = () => {
    setTime(new Date())
  }

  useEffect(() => {
    setTimeout(() => {
      tick()
    }, 1000)
  })

  return (
    <Typography variant='h4'>{time.toLocaleTimeString('en-GB')}</Typography>
  )
}

export default Clock
