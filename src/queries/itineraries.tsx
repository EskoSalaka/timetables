import { gql } from 'apollo-boost'

export const ITINERARIES = gql`
  query Plan($from: InputCoordinates!, $to: InputCoordinates!) {
    plan(
      from: $from
      to: $to
      bikeSpeed: 5
      intermediatePlaces: []
      itineraryFiltering: 2.5
      maxWalkDistance: 2500
      minTransferTime: 120
      numItineraries: 7
      optimize: QUICK
      preferred: {}
      transferPenalty: 0
      walkBoardCost: 600
      walkReluctance: 2
      walkSpeed: 1.2
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
