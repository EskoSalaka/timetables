import React, { useState, FunctionComponent } from 'react'
import { useQuery } from '@apollo/react-hooks'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { TextField, Box, InputAdornment } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz'
import SaveIcon from '@material-ui/icons/Save'
import CircularProgress from '@material-ui/core/CircularProgress'

import { ITINERARIES } from './queries/itineraries'
import { Plan, InputCoordinates } from './types'
import Iteneraries from './components/Iteneraries'
import Clock from './components/Clock'
import useLocalStorage from './hooks/useLocalStorage'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    tightTextField: {
      margin: 0,
      display: 'block',
      maxWidth: 110,
      paddingLeft: 5,
      paddingRight: 10
    },
    whiteInput: {
      color: 'white'
    }
  })
)

interface data {
  plan: Plan
}

interface queryVars {
  from: InputCoordinates
  to: InputCoordinates
}

const App: FunctionComponent = () => {
  const classes = useStyles()

  const [from, setFrom] = useLocalStorage('from', {
    lat: 60.185544,
    lon: 24.745732
  })
  const [to, setTo] = useLocalStorage('to', { lat: 60.169562, lon: 24.925878 })
  const { loading, error, data } = useQuery<data, queryVars>(ITINERARIES, {
    variables: {
      from: from,
      to: to
    },
    pollInterval: 60000
  })

  const [textFieldFrom, setTextFieldFrom] = useState<InputCoordinates>(from)
  const [textFieldTo, setTextFieldTo] = useState<InputCoordinates>(to)

  const onSwapButtonClick = e => {
    e.preventDefault()
    let fromOld = from
    setFrom(to)
    setTo(fromOld)
    setTextFieldTo(to)
    setTextFieldFrom(from)
  }

  const onTextFieldChange = e => {
    e.preventDefault()
    const { value, id } = e.target
    const numValue = parseFloat(
      value.toString().replace('[+-]?([0-9]*[.])?[0-9]+', '')
    )

    if (id === 'from-lat') {
      setTextFieldFrom({ ...textFieldFrom, lat: numValue })
    } else if (id === 'from-lon') {
      setTextFieldFrom({ ...textFieldFrom, lon: numValue })
    } else if (id === 'to-lat') {
      setTextFieldTo({ ...textFieldTo, lat: numValue })
    } else if (id === 'to-lon') {
      setTextFieldTo({ ...textFieldTo, lon: numValue })
    }
  }

  const onSaveButtonClick = e => {
    e.preventDefault()

    setFrom(textFieldFrom)
    setTo(textFieldTo)
  }

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <Typography variant='h5'>Trip plans</Typography>
          <Box pl={5} display='flex' alignItems='center' color='white'>
            <Typography>From</Typography>
            <TextField
              className={classes.tightTextField}
              id='from-lat'
              value={textFieldFrom.lat}
              margin='dense'
              onChange={onTextFieldChange}
              InputProps={{
                'aria-label': 'naked',
                className: classes.whiteInput,
                startAdornment: (
                  <InputAdornment position='start'>lat</InputAdornment>
                )
              }}
            />
            <TextField
              className={classes.tightTextField}
              id='from-lon'
              value={textFieldFrom.lon}
              margin='dense'
              onChange={onTextFieldChange}
              InputProps={{
                className: classes.whiteInput,
                startAdornment: (
                  <InputAdornment position='start'>lat</InputAdornment>
                )
              }}
            />
            <IconButton onClick={onSwapButtonClick}>
              <SwapHorizIcon />
            </IconButton>
            <Typography>To:</Typography>
            <TextField
              className={classes.tightTextField}
              id='to-lat'
              value={textFieldTo.lat}
              margin='dense'
              onChange={onTextFieldChange}
              InputProps={{
                className: classes.whiteInput,
                startAdornment: (
                  <InputAdornment position='start'>lat</InputAdornment>
                )
              }}
            />
            <TextField
              className={classes.tightTextField}
              id='to-lon'
              value={textFieldTo.lon}
              margin='dense'
              onChange={onTextFieldChange}
              InputProps={{
                className: classes.whiteInput,
                startAdornment: (
                  <InputAdornment position='start'>lon</InputAdornment>
                )
              }}
            />
          </Box>
          <IconButton onClick={onSaveButtonClick}>
            <SaveIcon />
          </IconButton>

          <Box display='flex' flexGrow={1} justifyContent='flex-end'>
            <Clock />
          </Box>
        </Toolbar>
      </AppBar>
      <Box p={1} position='relative'>
        {loading && (
          <Box position='absolute' left='50%' top='50%'>
            <CircularProgress />
          </Box>
        )}
        {error && <Typography>Something went wrong. Check if</Typography>}
        {data && <Iteneraries itineraries={data.plan.itineraries} />}
      </Box>
    </div>
  )
}

export default App
