# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @psyphur/lotide`

**Require it:**

`const _ = require('@psyphur/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(firstArray, secondArray)`: returns true if 2 arrays are equal
* `assertEqual`: compares an input and an expected output to determine if they are true
* `assertObjectsEqual`: returns true if 2 objects are the same
* `countLetters`: count and return number of letters in a string
* `countOnly`: count for a specified object within a list
* `eqArrays`: compares 2 arrays to determine if they are the equal
* `eqObjects`: compares 2 objects to determine if they are the same
* `findKey`: finds the key(s) of given object
* `findKeyByValue`: finds the key of a specified object
* `flatten`: flattens a nested array to a single array
* `head`: returns the first element within an array
* `tail`: returns the remaining elements within an array minus the first
* `letterPositions`: returns the index of letters within a string
* `map`: maps an array
* `middle`: returns the middle element(s) of an array
* `takeUntil`: returns element from an array until a specified condition
* `without`: returns an array without the specified value