'use strict';

/**
 * sorts an array of objects based on the object property provided by sort_on and returns the result
 *
 * @param {Array} array
 * @param {string} sort_on
 * @param {string} [sort_order = asc|dsc]
 *
 * @throws {Error}
 * @returns {Array}
 */
module.exports = function arrayObjectSort( array, sort_on, sort_order ) {
  if ( typeof sort_order !== 'string' ) {
    sort_order = 'asc';
  }

  if ( !( array instanceof Array ) ) {
    throw new Error( 'arrayObjectSort( array, sort_on, sort_order ): array not provided as an Array' );
  }

  if ( typeof sort_on !== 'string' ) {
    throw new Error( 'arrayObjectSort( array, sort_on, sort_order ): sort_on not provided as a String' );
  }

  if ( sort_order !== 'asc' && sort_order !== 'dsc' ) {
    throw new Error( 'arrayObjectSort( array, sort_on, sort_order ): sort_order not provided as a valid enum asc|dsc' );
  }

  if ( sort_order === 'asc' ) {
    return array.sort(
      function ( a, b ) {
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
