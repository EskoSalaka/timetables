import { gql } from 'apollo-boost'

export const ITINERARIES = gql`
  query Plan($from: InputCoordinates!, $to: InputCoordinates!) {
    plan(
      from: $from
      to: $to

      numItineraries: 7

      transportModes: [
        { mode: BUS }
        { mode: RAIL }
        { mode: TRAM }
        { mode: WALK }
        { mode: SUBWAY }
      ]
    ) {
      itineraries {
        walkDistance
        duration
        startTime
        endTime

        legs {
          mode
          startTime
          endTime
          transitLeg
          from {
            name
            stop {
              code
              name
            }
          }
          to {
            name
            stop {
              code
              name
            }
          }
          trip {
            tripHeadsign
            routeShortName
          }
        }
      }
    }
  }
`
