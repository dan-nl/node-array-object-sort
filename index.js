'use strict';

/**
 * sorts an array of objects based on the object property provided by sort_on and returns the result
 *
 * @param {Array} array
 * @param {string} sort_on
 * @param {string} [sort_order = asc|dsc]
 *
 * @returns {Array}
 */
module.exports = function arrayObjectSort( array, sort_on, sort_order ) {
  var error;

  if ( typeof sort_order !== 'string' ) {
    sort_order = 'asc';
  }

  if ( !( array instanceof Array ) ) {
    console.warn( 'arrayObjectSort(): array not provided as an Array' );
    error = new Error( 'stack trace' );
    console.warn( error.stack );
    return array;
  }

  if ( typeof sort_on !== 'string' ) {
    console.warn( 'arrayObjectSort(): sort_on not provided as a String' );
    error = new Error( 'stack trace' );
    console.warn( error.stack );
    return array;
  }

  if ( sort_order !== 'asc' && sort_order !== 'dsc' ) {
    console.warn( 'arrayObjectSort( ' + sort_order + ' ): sort_order not provided as a valid enum asc|dsc' );
    error = new Error( 'stack trace' );
    console.warn( error.stack );
    return array;
  }

  if ( sort_order === 'asc' ) {
    return array.sort(
      function ( a, b ) {
        if ( !a || !b ) {
          return 0;
        }

        if ( a[ sort_on ] > b[ sort_on ] ) {
          return 1;
        }

        if ( a[ sort_on ] < b[ sort_on ] ) {
          return -1;
        }

        // a must be equal to b
        return 0;
      }
    );
  }

  return array.sort(
    function ( a, b ) {
      if ( !a || !b ) {
        return 0;
      }

      if ( a[ sort_on ] < b[ sort_on ] ) {
        return 1;
      }

      if ( a[ sort_on ] > b[ sort_on ] ) {
        return -1;
      }

      // a must be equal to b
      return 0;
    }
  );
};
