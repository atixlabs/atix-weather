const weatherAnalyzer = require( './weatherAnalyzer' )
const expect = require('chai').expect

describe( 'Weather Analyzer Test', function() {

  it( 'Should return true if temperatures are increasing', () => {
    const result = weatherAnalyzer.isTemeperatureIncreasing([17, 23, 22, 25])
    expect(result).to.be.true
  } )

  it( 'Should return true if temperatures are decreasing', () => {
    const result = weatherAnalyzer.isTemeperatureIncreasing([17, 19, 15, 12])
    expect(result).to.be.false
  } )

} )
