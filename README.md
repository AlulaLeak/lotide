# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @alulaleak/lotide`

**Require it:**

`const _ = require('@alulaleak/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual()`: asserts if arrays are equal
* `assertEqual()`: asserts if a primitive value is equal
* `assertObjectsEqual()`: asserts if an object is equal
* `countLetters()`: counts letters of a string
* `countOnly()`: counts only what you allow it to
* `eqArrays()`: returns true or false based off if array is equal
* `eqObjects()`: returns true or false based off if object is equal
* `findKey()`: finds the key of specified
* `findKeyByValue()`: finds key of specified value
* `head()`: returns the beginning element of an array
* `tail()`: returns the whole string except for the first value
* `map()`: returns a new array based on the results of the callback function
* `middle()`: returns the middle element of an array - returns empty array if even number of elements
* `letterPosition()`: returns the letter position of specified letter
* `takeUntil()`: returns a new array until a specified value
* `without()`: returns a new array without a specified value
