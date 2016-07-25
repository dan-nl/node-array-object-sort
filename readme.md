## arrayObjectSort( array, sort_on, sort_order )
sorts an array of objects based on the object property provided by sort_on and returns the resulting array
```javascript
@param {Array} array
@param {string} sort_on
@param {string} [sort_order = asc|dsc]
@returns {Array}
```

## use
```javascript
var life_expectancy;
var sorted_asc;
var sorted_dsc;

life_expectancy = [
    {"country" : "Aruba", "expectancy" : 78.4},
    {"country" : "Afghanistan", "expectancy" : 45.9},
    {"country" : "Angola", "expectancy" : 38.3},
    {"country" : "Anguilla", "expectancy" : 76.1},
    {"country" : "Albania", "expectancy" : 71.6},
    {"country" : "Andorra", "expectancy" : 83.5},
    {"country" : "Netherlands Antilles", "expectancy" : 74.7},
    {"country" : "United Arab Emirates", "expectancy" : 74.1},
    {"country" : "Argentina", "expectancy" : 75.1},
    {"country" : "Armenia", "expectancy" : 66.4},
    {"country" : "American Samoa", "expectancy" : 75.1},
    {"country" : "Antarctica", "expectancy" : null},
    {"country" : "French Southern territories", "expectancy" : null}
];

sorted_asc = arrayObjectSort( election_results, 'expectancy' );
sorted_dsc = arrayObjectSort( election_results, 'expectancy', 'dsc' );
```
