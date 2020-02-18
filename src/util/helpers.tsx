const parseTimestamp = timeStamp => {
  var date = new Date(timeStamp)
  return date.toLocaleTimeString('en-GB').substr(0, 5)
}

const parseMeters = meters => {
  return (meters / 1000.0).toFixed(1)
}

export { parseTimestamp, parseMeters }
