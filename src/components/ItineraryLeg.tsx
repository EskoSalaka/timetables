import React, { FunctionComponent } from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import SubwayIcon from '@material-ui/icons/Subway'
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus'
import TramIcon from '@material-ui/icons/Tram'
import TrainIcon from '@material-ui/icons/Train'

import { deepOrange, blue, green, deepPurple } from '@material-ui/core/colors'
import { Avatar, Box } from '@material-ui/core'
import Line from './Line'
import { Leg, Mode } from '../types.d'

import { parseTimestamp } from '../util/helpers'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    metro: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500]
    },
    bus: {
      color: theme.palette.getContrastText(blue[500]),
      backgroundColor: blue[500]
    },
    rail: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500]
    },
    tram: {
      color: theme.palette.getContrastText(green[500]),
      backgroundColor: green[500]
    },
    startTime: {
      lineHeight: 1,
      fontSize: 15
    },
    place: {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      maxWidth: 'inherit'
    }
  })
)

type legProps = {
  leg: Leg
}

const ItineraryLeg: FunctionComponent<legProps> = ({ leg }) => {
  const classes = useStyles()

  return (
    <Box position='relative' width='100%' pl={0}>
      <Box display='flex' alignItems='center'>
        <Box position='absolute' width='100%'>
          <Line
            type='solid'
            thickness='4'
            color={
              leg.mode === Mode.SUBWAY
                ? deepOrange[500]
                : leg.mode === Mode.BUS
                  ? blue[500]
                  : leg.mode === Mode.RAIL
                    ? deepPurple[500]
                    : green[500]
            }
            width='100%'
          />
        </Box>
        <Box>
          <Typography className={classes.place}>{leg.from.name}</Typography>
          <Box ml={1} display='flex' width='min-content' textAlign='center'>
            <Box>
              {leg.mode === Mode.SUBWAY ? (
                <Avatar className={classes.metro} variant='square'>
                  <SubwayIcon fontSize='large'></SubwayIcon>
                </Avatar>
              ) : leg.mode === Mode.BUS ? (
                <Avatar className={classes.bus} variant='square'>
                  <DirectionsBusIcon fontSize='large'></DirectionsBusIcon>
                </Avatar>
              ) : leg.mode === Mode.RAIL ? (
                <Avatar className={classes.rail} variant='square'>
                  <TrainIcon fontSize='large'></TrainIcon>
                </Avatar>
              ) : (
                <Avatar className={classes.tram} variant='square'>
                  <TramIcon fontSize='large'></TramIcon>
                </Avatar>
              )}
              <Typography>
                <b>{leg.trip.routeShortName}</b>
              </Typography>
            </Box>
            <Typography className={classes.startTime}>
              {parseTimestamp(leg.startTime)}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ItineraryLeg
