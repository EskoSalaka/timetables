import React, { FunctionComponent } from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import Typography from '@material-ui/core/Typography'
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk'

import { parseTimestamp } from '../util/helpers'
import ItineraryLeg from './ItineraryLeg'
import Line from './Line'
import { Itinerary } from '../types'
import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      margin: 10,
      width: 800
    },
    content: {
      display: 'flex',
      alignItems: 'center',
      padding: 0,
      '&:last-child': {
        paddingBottom: 0
      },
      paddingRight: 0,
      paddingLeft: 0
    },
    legContent: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      padding: 0
    }
  })
)

type itineraryCardProps = {
  itinerary: Itinerary
}

const ItineraryCard: FunctionComponent<itineraryCardProps> = ({
  itinerary
}) => {
  const classes = useStyles()

  const transitLegs = itinerary.legs.filter(leg => leg.transitLeg === true)

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <DirectionsWalkIcon style={{ fontSize: 30 }}></DirectionsWalkIcon>
        <Typography component='h4' variant='h4'>
          {parseTimestamp(itinerary.startTime)}
        </Typography>
        <Line type='dotted' thickness='3' color='black' width='30px' />
      </CardContent>
      <CardContent className={classes.legContent}>
        <Box display='flex' width='100%'>
          {transitLegs.map((transitLeg, i) => {
            return <ItineraryLeg leg={transitLeg} key={i} />
          })}
        </Box>
      </CardContent>
      <CardContent className={classes.content}>
        <Box display='flex' width='100%' alignItems='center' pr={1}>
          <Line type='dotted' thickness='3' color='black' width='30px' />
          <Typography component='h4' variant='h4'>
            {parseTimestamp(itinerary.endTime)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default ItineraryCard
