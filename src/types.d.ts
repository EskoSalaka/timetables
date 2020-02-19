export enum Mode {
  WALK = 'WALK',
  RAIL = 'RAIL',
  BUS = 'BUS',
  TRAM = 'TRAM',
  FERRY = 'FERRY',
  SUBWAY = 'SUBWAY',
  TRANSIT = 'TRANSIT'
}

export interface InputCoordinates {
  lat: number
  lon: number
}

export interface Stop {
  code: string
  name: string
}

export interface Place {
  name: string
  stop: Stop
}

export interface Trip {
  tripHeadsign: string
  routeShortName: string
}

export interface Leg {
  mode: string | Mode
  startTime: number
  endTime: number
  transitLeg: boolean
  from: Place
  to: Place
  trip: Trip
}

export interface Itinerary {
  walkDistance: number
  duration: number
  startTime: number
  endTime: number
  legs: Leg[]
}

export interface Plan {
  itineraries: Itinerary[]
}
