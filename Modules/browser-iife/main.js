// Module IIFE
// Immediately Invoked Function Expression (IIFE) to avoid polluting the global scope
(function () {
  'use strict';

  const names = ['Alice', 'Bob', 'Charlie'];

  for (const n of names) {
    console.log(hello(n));
  }
}());
