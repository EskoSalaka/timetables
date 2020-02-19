const parseTimestamp = (timeStamp: number): string => {
  return new Date(timeStamp).toLocaleTimeString(['it-IT'], {
    hour: '2-digit',
    minute: '2-digit'
  })
}

const getCurrentTime = (): string => {
  return new Date().toLocaleTimeString(['it-IT'], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
}
const parseMeters = (meters: number): string => {
  return (meters / 1000.0).toFixed(1)
}

export { parseTimestamp, getCurrentTime, parseMeters }
