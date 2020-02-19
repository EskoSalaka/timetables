import React, { useState, useEffect } from 'react'
import { Typography } from '@material-ui/core'
import { getCurrentTime } from '../util/helpers'

const Clock = () => {
  const [time, setTime] = useState<string>('')
  const tick = () => {
    setTime(getCurrentTime())
  }

  useEffect(() => {
    setTimeout(() => {
      tick()
    }, 1000)
  })

  return <Typography variant='h4'>{time}</Typography>
}

export default Clock
