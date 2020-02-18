import React, { FunctionComponent } from 'react'
import ItineraryCard from './ItineraryCard'
import { Box } from '@material-ui/core'
import { Itinerary } from '../types'

type ItinerariesProps = {
  itineraries: Itinerary[]
}

const Itineraries: FunctionComponent<ItinerariesProps> = ({ itineraries }) => {
  return (
    <Box>
      {itineraries.map((itinerary, i) => {
        return <ItineraryCard itinerary={itinerary} key={i} />
      })}
    </Box>
  )
}

export default Itineraries
