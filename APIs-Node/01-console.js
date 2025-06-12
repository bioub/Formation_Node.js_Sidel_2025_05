console.log('This is a console log message from 01-console.js');
console.error('This is an error message from 01-console.js');
console.warn('This is a warning message from 01-console.js');
console.info('This is an info message from 01-console.js');
console.debug('This is a debug message from 01-console.js');
console.trace('This is a trace message from 01-console.js');

console.time('Execution Time');
// Simulate some work
setTimeout(() => {
  console.timeEnd('Execution Time'); // Execution Time: 1.002s
}, 1000);

console.group('Grouped Messages');
console.log('This is a message inside a group');
console.log('Another message inside the group');
console.groupEnd();

console.table([{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }]);