'use strict';

var arrayObjectSort = require( '../src' );
var expect = require( 'chai' ).expect;
var life_expectancy = [
  { "country": "Aruba", "expectancy": 78.4 },
  { "country": "Afghanistan", "expectancy": 45.9 },
  { "country": "Angola", "expectancy": 38.3 },
  { "country": "Anguilla", "expectancy": 76.1 },
  { "country": "Albania", "expectancy": 71.6 },
  { "country": "Andorra", "expectancy": 83.5 },
  { "country": "Netherlands Antilles", "expectancy": 74.7 },
  { "country": "United Arab Emirates", "expectancy": 74.1 },
  { "country": "Argentina", "expectancy": 75.1 },
  { "country": "Armenia", "expectancy": 66.4 },
  { "country": "American Samoa", "expectancy": 75.1 },
  { "country": "Antarctica", "expectancy": null },
  { "country": "French Southern territories", "expectancy": null }
];

describe( 'arrayObjectSort( array, sort_on, sort_order )', function () {
  describe( 'should sort a given @array of objects, using the @sort_on string, which represents an object property, and the @sort_order:', function () {
    it( '`asc` default when no @sort_order is provided', function () {
      expect( arrayObjectSort( life_expectancy, 'expectancy' )[ 0 ].expectancy ).to.equal( null );
    } );

    it( '`asc` provided', function () {
      expect( arrayObjectSort( life_expectancy, 'expectancy', 'asc' )[ 0 ].expectancy ).to.equal( null );
    } );

    it( '`dsc` provided', function () {
      expect( arrayObjectSort( life_expectancy, 'expectancy', 'dsc' )[ 0 ].expectancy ).to.equal( 83.5 );
    } );
  } );

  describe( 'should throw an error when:', function () {
    it( '@array is not an Array', function () {
      expect( function() { arrayObjectSort( {}, 'expectancy' ); } ).to.throw( Error );
    } );

    it( '@sort_on is not a string', function () {
      expect( function() { arrayObjectSort( life_expectancy, 12 ); } ).to.throw( Error );
    } );

    it( '@sort_order is not `asc`|`dsc`', function () {
      expect( function() { arrayObjectSort( life_expectancy, 'expectancy', 'invalid sort_order' ); } ).to.throw( Error );
    } );
  } );
} );
