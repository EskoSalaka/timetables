import { parseTimestamp, parseMeters } from './helpers'

describe('Testing UNIX timestamp parsing', () => {
  it('should return correct time', () => {
    expect(parseTimestamp(1582111800000)).toBe('13:30')
    expect(parseTimestamp(1582113817000)).toBe('14:03')
  })
})

describe('Testing meter parsing', () => {
  it('should return correct length', () => {
    expect(parseMeters(1000)).toBe('1.0')
    expect(parseMeters(2003)).toBe('2.0')
    expect(parseMeters(6100)).toBe('6.1')
  })
})
